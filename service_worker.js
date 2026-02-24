let currentDomain = null;
let startTime = null;
const localQueueKey = "sync_queue";

// Extract domain from URL
function getDomain(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch (e) {
    return null;
  }
}

// Save event
async function saveSession(domain, duration) {
  if (!domain || duration <= 0) return;
  const s = await chrome.storage.local.get(localQueueKey);
  const queue = s[localQueueKey] || [];
  queue.push({ domain, duration, timestamp: Date.now() });
  await chrome.storage.local.set({ [localQueueKey]: queue });
  console.log("Saved:", domain, duration);
}

// Track when tab changes
async function updateActiveTab() {
  const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
  if (!tab || !tab.url) return;

  const domain = getDomain(tab.url);
  const now = Date.now();

  if (currentDomain && startTime) {
    const duration = now - startTime;
    await saveSession(currentDomain, duration);
  }

  currentDomain = domain;
  startTime = now;
  console.log("Now tracking:", domain);
}

// Listen for tab activation and URL changes
chrome.tabs.onActivated.addListener(updateActiveTab);
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.active) {
    updateActiveTab();
  }
});

// Detect when Chrome goes idle or locked
chrome.idle.setDetectionInterval(15);
chrome.idle.onStateChanged.addListener(async (state) => {
  if (state === "idle" || state === "locked") {
    const now = Date.now();
    if (currentDomain && startTime) {
      const duration = now - startTime;
      await saveSession(currentDomain, duration);
      console.log("Idle, saved:", currentDomain, duration);
    }
    startTime = null;
    currentDomain = null;
  } else if (state === "active") {
    updateActiveTab();
  }
});

// Periodic flush log
chrome.alarms.create("flushQueue", { periodInMinutes: 1 });
chrome.alarms.onAlarm.addListener(async () => {
  const s = await chrome.storage.local.get(localQueueKey);
  const queue = s[localQueueKey] || [];
  console.log("Synced Events:", queue);
});
