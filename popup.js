document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("data");
  const s = await chrome.storage.local.get("sync_queue");
  const data = s.sync_queue || [];

  if (data.length === 0) {
    container.innerText = "No activity tracked yet.";
    return;
  }

  // Group by domain
  const domainTime = {};
  let total = 0;
  data.forEach(e => {
    domainTime[e.domain] = (domainTime[e.domain] || 0) + e.duration;
    total += e.duration;
  });

  // Sort top 5 domains
  const sorted = Object.entries(domainTime)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  // Prepare display
  let html = `<b>Tracked ${data.length} sessions</b><br>`;
  html += `Total time: ${(total / 60000).toFixed(1)} min<br><br>`;

  sorted.forEach(([domain, dur]) => {
    html += `${domain} — ${(dur / 60000).toFixed(1)} min<br>`;
  });

  container.innerHTML = html;
});
