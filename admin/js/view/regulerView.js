// Data Mockup Rute Rutin
const regularRoutesData = [
    {
        id: "RTP-8821",
        name: "Bapak Budi Santoso",
        phone: "+6281234567890",
        displayPhone: "+62 812-3456-7890",
        pickup: { time: "08:00 WIB", location: "Pool Ciamis" },
        destination: { time: "Est. 14:00 WIB", location: "Jakarta Barat" },
        cost: "250.000",
        paymentStatus: "LUNAS"
    },
    {
        id: "RTP-8822",
        name: "Ibu Siti Aminah",
        phone: "+6282198765432",
        displayPhone: "+62 821-9876-5432",
        pickup: { time: "09:00 WIB", location: "Tasikmalaya" },
        destination: { time: "Est. 15:30 WIB", location: "Depok" },
        cost: "250.000",
        paymentStatus: "BELUM LUNAS"
    }
];

// Fungsi untuk merender ke dalam container
export function renderRegularRoutes(containerElement) {
    let html = `
        <div class="section-header">
            <h2 class="section-title">Jadwal Keberangkatan Hari Ini</h2>
            <span class="badge-count">${regularRoutesData.length} Bookings</span>
        </div>
        <div class="card-list">
    `;

    regularRoutesData.forEach(booking => {
        const paymentClass = booking.paymentStatus === 'LUNAS' ? 'badge-paid' : 'badge-unpaid';
        html += `
            <article class="booking-card regular-card">
                <div class="card-left-content">
                    <div class="card-meta">
                        <span class="badge-regular">RUTE REGULER</span>
                        <span class="booking-id">ID: #${booking.id}</span>
                    </div>
                    <h3 class="passenger-name">${booking.name}</h3>
                    <a href="https://wa.me/${booking.phone}" target="_blank" class="wa-direct-link">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"></svg>
                        ${booking.displayPhone}
                    </a>
                </div>
                <div class="card-middle-route">
                    <div class="route-point pickup">
                        <p class="time">Pickup (${booking.pickup.time})</p>
                        <p class="location">${booking.pickup.location}</p>
                    </div>
                    <div class="route-point destination">
                        <p class="time">Destination (${booking.destination.time})</p>
                        <p class="location">${booking.destination.location}</p>
                    </div>
                </div>
                <div class="card-right-cost">
                    <p class="cost-label">Total Biaya</p>
                    <h3 class="cost-amount">IDR ${booking.cost}</h3>
                    <span class="payment-badge ${paymentClass}">${booking.paymentStatus}</span>
                </div>
            </article>
        `;
    });

    html += `</div>`;
    containerElement.innerHTML = html;
}