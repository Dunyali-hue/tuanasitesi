function girisYap() {
  const kullaniciAdi = document.getElementById("kullaniciAdi").value.trim();
  const sifre = document.getElementById("sifre").value.trim();

  if (kullaniciAdi === "admin" && sifre === "1234") {
    localStorage.setItem("girisYapan", JSON.stringify({
      ad: "Yönetici",
      rol: "admin"
    }));
    alert("Admin girişi başarılı.");
    window.location.href = "admin-panel.html";
  } else {
    localStorage.setItem("girisYapan", JSON.stringify({
      ad: kullaniciAdi,
      rol: "normal"
    }));
    alert("Giriş başarılı. Hoş geldiniz, " + kullaniciAdi + ".");
    window.location.href = "index.html";
  }
}
