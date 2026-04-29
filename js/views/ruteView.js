export const ruteView = () => {
    return `
    <article class="service-card">
        <div class="form-container">
            <header class="section-title">
                <h2>Detail Penumpang</h2>
                <p>Lengkapi Data Diri Anda Untuk Perjalanan Yang Nyaman</p>
            </header>

            <form id="form-rute" class="user-input">
                <div class="name-input-group">
                    <div class="field">
                        <label for="first-name">Nama Depan</label>
                        <input type="text" name="first_name" id="first-name" placeholder="Masukan Nama Depan Anda" required>
                    </div>

                    <div class="field">
                        <label for="last-name">Nama Belakang</label>
                        <input type="text" name="last_name" id="last-name" placeholder="Masukan Nama Belakang Anda" required>
                    </div>
                </div>

                <div class="input-group">
                    <div class="field">
                        <label for="kecamatan">Kecamatan</label>
                        <input type="text" name="kecamatan" id="kecamatan" placeholder="Contoh: Panawangan" required>
                    </div>
                    <div class="field">
                        <label for="desa">Desa</label>
                        <input type="text" name="desa" id="desa" placeholder="Contoh: Nagarajaya" required>
                    </div>
                </div>

                <div class="input-three-group">
                    <div class="field">
                        <label for="dusun">Nama Dusun</label>
                        <input type="text" name="dusun" id="dusun" placeholder="Contoh: Cikondang">
                    </div>
                    <div class="field">
                        <label for="RT">RT</label>
                        <input type="text" name="rt" id="RT" placeholder="00">
                    </div>
                    <div class="field">
                        <label for="RW">RW</label>
                        <input type="text" name="rw" id="RW" placeholder="00">
                    </div>
                </div>

                <div class="textarea-pin">
                    <div class="field">
                        <label for="patokan">Patokan Bangunan</label>
                        <textarea name="patokan" id="patokan" placeholder="Contoh: masjid"></textarea>
                    </div>
                </div>

                <button type="submit" class="btn-submit">Lanjut ke Pembayaran</button>
            </form>
        </div>

        <aside class="visual-content">
            <figure>
                <img src="../../assets/img/rute-visual.jpg" alt="Visual Rute">
                <figcaption>
                    <h3>Kenyamanan Ekstra</h3>
                    <p>Armada premium kami dirancang untuk memastikan perjalanan Anda sangat nyaman.</p>
                </figcaption>
            </figure>
        </aside>
    </article>
    `;
};

export const setupRuteListener = () => {
    const form = document.getElementById('form-rute');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Mengambil data dari form
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            
            console.log("Data Rute Berhasil Disimpan:", data);
            alert(`Terima kasih ${data.first_name}, data Anda telah tersimpan.`);
            
            // Di sini Anda bisa menambahkan logika pindah ke halaman pembayaran
        });
    }
};