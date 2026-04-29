import { API_BASE_URL } from "../config.js";

export function renderNavbar() {
  const navbarPlaceholder = document.getElementById("navbar-placeholder");
  if (!navbarPlaceholder) return;

  const navbarString = `
    <nav class="navbar">
        <div class="nav-container">
            <div class="logo">Rini Trans Putri<a href="index.html"></div>
            <ul class="nav-links">
                <li><a href="../../index.html">Beranda<a/></li>
                <li><a href="../../pages/layanan/rute.html">Layanan<a/></li>
                <li><a href="#">Tentang Kami<a/></li>
            </ul>
            <div class="nav-auth><a href="#" class="btn-admin"></a></div>
        </div>
    </nav>`;

  const parser = new DOMParser();
  const doc = parser.parseFromString(navbarString, "text/html");
  const navElement = doc.body.firstChild;

  navbarPlaceholder.appendChild(navElement);
}
