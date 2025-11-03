const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby0mYwsqvfdxs76yUqJTVrtpcYgvWlwAtqaeTCS8Zzp9h0ttCd0t1qNSrTcAWp27HDoxA/exec";

// Gestion des onglets
document.getElementById('tab-cheque').addEventListener('click', () => loadTab('cheque'));
document.getElementById('tab-livret').addEventListener('click', () => loadTab('livret'));
document.getElementById('tab-previsionnel').addEventListener('click', () => loadTab('previsionnel'));

function loadTab(tab) {
  document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('active'));
  document.getElementById('tab-' + tab).classList.add('active');
  const content = document.getElementById('content');
  content.innerHTML = '<div class="card">Chargement de ' + tab + '...</div>';
  // Ici tu connecteras les appels à Google Apps Script
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}
