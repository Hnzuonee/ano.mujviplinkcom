const OF_URL = 'https://onlyfans.com/kristynka.cengerova';   // změň na svůj profil
const AUTO_HOP_MS = 0;  // 0 = jen manuální klik, >0 = auto-delay v ms

function go(){
  const form=document.createElement('form');
  form.method='POST';
  form.action=OF_URL;
  document.body.appendChild(form);
  form.submit();
}

document.getElementById('go').addEventListener('click',go);
if(AUTO_HOP_MS) setTimeout(go,AUTO_HOP_MS);
