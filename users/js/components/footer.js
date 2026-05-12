export function renderFooter() {
    const footerPlaceholder = document.getElementById("footer-placeholder");
    if(!footerPlaceholder)
        return;

    const footerString = `
    <footer class="site-footer">
        <div class="footer-container">
            <div class="footer-top">
                <div class="footer-brand">
                    <h3>Rini Trans Putri</h3>
                    <p>Penyedia layanan transportasi terpercaya yang menghubungkan kota dengan kenyamanan dan keamanan sebagai prioritas utama.</p>
                </div>
                <nav class="footer-nav" aria-label="Menu Perusahaan">
                    <h3>Perusahaan</h3>
                    <ul>
                    <li><a href="/tentang-kami">Tentang Kami</a></li>
                    <li><a href="/kontak">Kontak</a></li>
                    </ul>
                </nav>
                <nav class="footer-nav" aria-label="Menu Layanan">
                    <h3>Layanan</h3>
                    <ul>
                    <li><a href="/layanan/antar-jemput">Antar Jemput</a></li>
                    <li><a href="/layanan/sewa-armada">Sewa Armada</a></li>
                    <li><a href="/layanan/titip-paket">Titip Paket</a></li>
                    </ul>
                </nav>
                <nav class="footer-nav" aria-label="Menu Bantuan">
                    <h3>Bantuan</h3>
                    <ul>
                    <li><a href="/syarat-ketentuan">Syarat & Ketentuan</a></li>
                    <li><a href="/kebijakan-privasi">Kebijakan Privasi</a></li>
                    <li><a href="/faq">FAQ</a></>
                    </ul>
                </nav>
            </div>

            <hr class="footer-divider" />

            <div class="footer-bottom">
                <div class="footer-copyright">
                    <p>&copy; 2026 Rini Trans Putri. Perjalanan Mewah, Kenyamanan Utama.</p>
                </div>
                
                <div class="footer-socials">
                    <a href="https://instagram.com/rinitransputri" aria-label="Kunjungi Instagram Rini Trans Putri" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/icons/instagram.svg" alt="Instagram" width="24" height="24">
                    </a>
                    <a href="https://facebook.com/rinitransputri" aria-label="Kunjungi Facebook Rini Trans Putri" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/icons/facebook.svg" alt="Facebook" width="24" height="24">
                    </a>
                    <a href="mailto:info@rinitransputri.com" aria-label="Kirim Email ke Rini Trans Putri">
                    <img src="/assets/icons/email.svg" alt="Email" width="24" height="24">
                    </a>
                </div>
            </div>
        </div>
    </footer>`;

    const parser = new DOMParser();
    const doc = parser.parseFromString(footerString,"text/html");
    const footerElement = doc.body.firstChild;

    footerPlaceholder.appendChild(footerElement);
}