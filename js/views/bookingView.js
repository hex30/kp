// Data armada
const fleetData = [
    {
        name: "Isuzu ELF Giga",
        capacity: "14-19 Kursi",
        description: "Cocok untuk rombongan menengah, nyaman dan tangguh.",
        price: "1.200.000",
        image: "https://cdn.carsome.id/news/Daihatsu-Xenia-white.jpg"
    },
    {
        name: "Toyota Hiace Commuter",
        capacity: "15 Kursi",
        description: "Eksekutif dan premium untuk perjalanan jarak jauh.",
        price: "1.500.000",
        image: "../../assets/img/hiace.jpg"
    }
];

// EXPORT PERTAMA: Tampilan
export const bookingView = () => {
    const fleetCards = fleetData.map(unit => `
        <article class="fleet-card">
            <figure class="fleet-image">
                <span class="card-badge">${unit.capacity}</span>
                <img src="${unit.image}" alt="Sewa ${unit.name} Tasikmalaya">
            </figure>

            <div class="fleet-info">
                <h3>${unit.name}</h3>
                <p>${unit.description}</p>
            </div>

            <footer class="fleet-footer">
                <div class="price">
                    <span class="top">Mulai dari</span>
                    <span class="rp">Rp ${unit.price}</span><span>/hari</span>
                </div>
                <button class="btn-arrow" aria-label="Detail ${unit.name}">></button>
            </footer>
        </article>
    `).join('');

    return `
    <div class="booking-layout">
        <aside class="booking-sidebar">
            <div class="form-card">
                <header>
                    <h2>Detail Booking</h2>
                </header>
                <form id="form-booking-travel" class="booking-input">
                    <div class="field">
                        <label>Pilih Jenis Armada</label>
                        <select name="jenis_armada">
                            <option>Pilih kendaraan...</option>
                            <option value="elf">Isuzu ELF</option>
                            <option value="hiace">Toyota Hiace</option>
                        </select>
                    </div>
                    <div class="field">
                        <label>Tanggal Keberangkatan</label>
                        <input type="date" name="tanggal_sewa">
                    </div>
                    <div class="field">
                        <label>Area Tujuan</label>
                        <input type="text" name="tujuan" placeholder="Masukkan kota tujuan">
                    </div>
                    <button type="submit" class="btn-submit">Pesan Sekarang</button>
                </form>
            </div>
        </aside>

        <section class="fleet-main">
            <header class="fleet-header">
                <div class="fleet-header-title">
                    <h2>Pilihan Armada</h2>
                    <p>Kendaraan terawat untuk kenyamanan maksimal.</p>
                </div>
                <a href="#">Lihat Semua &rarr;</a>
            </header>
            <div class="fleet-grid">
                ${fleetCards}
            </div>
        </section>
    </div>
    `;
};

// EXPORT KEDUA: Logika (Ini yang menyebabkan error jika hilang)
export const setupBookingListener = () => {
    const form = document.getElementById('form-booking-travel');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            console.log("Data Booking Berhasil Ditangkap:", data);
            alert("Ada yang salah periksa kembali data anda " + data.tanggal_sewa);
        });
    }
};