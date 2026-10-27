// Сайт працює і без JavaScript; тут лише дата й розмір завантаження.
document.getElementById('year').textContent = new Date().getFullYear();
fetch('download.json').then(response => response.ok ? response.json() : null).then(release => {
  if (release && Number.isFinite(release.bytes) && release.bytes > 0) {
    document.getElementById('download-size').textContent = (release.bytes / 1024 / 1024).toLocaleString('uk-UA', { maximumFractionDigits: 0 }) + ' МБ · .dmg';
  }
}).catch(() => {});
