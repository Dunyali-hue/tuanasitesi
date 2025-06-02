
// admin-auth.js
const kullanici = JSON.parse(localStorage.getItem("kullanici"));

// Giriş yapılmamışsa
if (!kullanici) {
  window.location.href = "giris.html";
}

// Admin değilse
if (kullanici.rol !== "admin") {
  alert("Bu sayfaya sadece yönetim erişebilir.");
  window.location.href = "index.html";
}
