document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".md-header__inner");
  if (!header) return;

  var btn = document.createElement("button");
  btn.textContent = "Logout";
  btn.style.cssText =
    "margin-left:auto;padding:4px 12px;border:1px solid rgba(255,255,255,0.7);" +
    "border-radius:4px;background:transparent;color:#fff;cursor:pointer;font-size:0.75rem;";

  btn.addEventListener("click", function () {
    localStorage.removeItem("staticrypt_expiration");
    localStorage.removeItem("staticrypt_passphrase");
    location.reload();
  });

  header.appendChild(btn);
});
