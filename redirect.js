// URL profilu
const OF_URL = 'https://onlyfans.com/kristynka.cengerova';

// 0 = jen manuální klik; >0 = automatický hop po X ms
const AUTO_HOP_MS = 0;

function go() {
  const form = document.createElement('form');
  form.method = 'POST';
  form.action = OF_URL;
  document.body.appendChild(form);
  form.submit();
}

document.getElementById('go').addEventListener('click', go);

if (AUTO_HOP_MS) setTimeout(go, AUTO_HOP_MS);
