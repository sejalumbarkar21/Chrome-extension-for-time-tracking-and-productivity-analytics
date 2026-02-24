document.addEventListener('DOMContentLoaded', async () => {
  const s = await chrome.storage.sync.get(['productive', 'unproductive']);
  document.getElementById('productive').value = s.productive || '';
  document.getElementById('unproductive').value = s.unproductive || '';
});

document.getElementById('save').addEventListener('click', async () => {
  const productive = document.getElementById('productive').value;
  const unproductive = document.getElementById('unproductive').value;
  await chrome.storage.sync.set({ productive, unproductive });
  alert('Saved!');
});
