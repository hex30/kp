export const paketView = () => {
    return `
    <article class="package-container">
        <div class="package-card">
            <div class="form-card">
                <header>
                    <h1>Detail Pengiriman Paket</h2>
                </header>
                <form id="form-package-detail" class="package-input">
                    <div class="sender-details">
                        <header class="input-title">
                            <h2>Data Pengirim</h2>
                        </header>

                        <div class="input-general-group">
                            <div class="field">
                                <label>Nama</label>
                                <input type="text" name="tujuan" placeholder="Masukan nama lengkap anda">
                            </div>
                            <div class="field">
                                <label>No.Telpon</label>
                                <input type="number" name="tanggal_sewa"
                                placeholder="contoh:0812 1212 1212">
                            </div>
                        </div>

                        <div class="layout-input">
                            <div class="input-adress-group">
                                <div class="field">
                                    <label for="dusun">Nama Dusun</label>
                                    <input type="text" name="dusun" id="dusun" placeholder="Contoh: Cikondang">
                                </div>
                            <div class="detail-adress">
                                    <div class="field">
                                        <label for="RT">RT</label>
                                        <input type="text" name="rt" id="RT" placeholder="00">
                                    </div>
                                    <div class="field">
                                        <label for="RW">RW</label>
                                        <input type="text" name="rw" id="RW" placeholder="00">
                                    </div>
                                </div>
                            </div>

                            <div class="input-package-group">
                                <div class="field">
                                    <label>Berat (Kg)</label>
                                    <input type="number" name="tanggal_sewa"
                                    placeholder="contoh12 Kg">
                                </div>
                                <div class="field">
                                    <label>Dimensi</label>
                                    <select name="jenis_armada">
                                        <option>Pilih Dimensi Paket Anda</option>
                                        <option value="elf">Kecil</option>
                                        <option value="hiace">Sedang</option>
                                        <option value="hiace">Besar</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="recipient-details">
                        <header class="input-title">
                            <h2>Data Penerima</h2>
                        </header>

                        <div class="input-general-group">
                            <div class="field">
                                <label>Nama</label>
                                <input type="text" name="tujuan" placeholder="Masukan nama lengkap anda">
                            </div>
                            <div class="field">
                                <label>No.Telpon</label>
                                <input type="number" name="tanggal_sewa"
                                placeholder="contoh:0812 1212 1212">
                            </div>
                        </div>

                        <div class="layout-input">
                            <div class="input-adress-group">
                                <div class="field">
                                    <label for="dusun">Nama Dusun</label>
                                    <input type="text" name="dusun" id="dusun" placeholder="Contoh: Cikondang">
                                </div>
                            <div class="detail-adress">
                                    <div class="field">
                                        <label for="RT">RT</label>
                                        <input type="text" name="rt" id="RT" placeholder="00">
                                    </div>
                                    <div class="field">
                                        <label for="RW">RW</label>
                                        <input type="text" name="rw" id="RW" placeholder="00">
                                    </div>
                                </div>
                            </div>

                            <div class="input-package-group">
                                <div class="field">
                                    <label>Berat (Kg)</label>
                                    <input type="number" name="tanggal_sewa"
                                    placeholder="contoh12 Kg">
                                </div>
                                <div class="field">
                                    <label>Dimensi</label>
                                    <select name="jenis_armada">
                                        <option>Pilih Dimensi Paket Anda</option>
                                        <option value="elf">Kecil</option>
                                        <option value="hiace">Sedang</option>
                                        <option value="hiace">Besar</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                        <button type="submit" class="btn-submit">Pesan Sekarang</button>
                </form>
            </div>

            <div class="package-visual">
                <figure>
                    <img src="" alt="">
                </figure>
                <figcaption>
                    <h3>Pengiriman Aman & Terlindungi</h3>
                    <p>Setiap paket ditangani dengan standar profesional untuk memastikan barang anda tiba dengan selamat</p>
                </figcaption>
            </div>
        </div>
    </article> 
    `;             
};

export const setupPackageListener = () => {
    const form = document.getElementById
    ('form-package-detail');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(form);
            const data = Object.fromEntries
            (formData.entries());

            console.log("Data Paket Telah Tersimpan Siapkan Paket Sebelum Kami Jemput", data);
    
        });
    }
};