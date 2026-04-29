import { renderNavbar } from "./components/navbar.js";
import { ruteView, setupRuteListener } from "./views/ruteView.js";
import { bookingView, setupBookingListener } from "./views/bookingView.js";
import { paketView, setupPackageListener } from "./views/paketView.js";

const serviceContent = document.getElementById('service-content');

// --- 1. MAPPING OBJECT ---
// Objek ini adalah "Daftar Menu" aplikasi kamu.
const views = {
    rute: {
        render: ruteView,
        listener: setupRuteListener
    },
    booking: {
        render: bookingView,
        listener: setupBookingListener
    },
    package: {
        render: paketView,
        listener:setupPackageListener
    }
};

// --- 2. FUNGSI NAVIGASI ---
// Fungsi ini tugasnya cuma bongkar-pasang konten.
function navigate(renderFn, listenerFn) {
    serviceContent.innerHTML = renderFn(); // Pasang HTML baru
    if (listenerFn) listenerFn();          // Pasang "otak" (event listener) baru
}

document.addEventListener("DOMContentLoaded", () => {
    renderNavbar();
    
    // Tampilan default saat pertama buka
    navigate(views.rute.render, views.rute.listener);

    const buttons = document.querySelectorAll('.nav-btn');

    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // e.target.dataset.view mengambil nilai dari atribut 'data-view' di HTML
            const viewName = e.target.dataset.view; 
            const targetView = views[viewName];

            if (targetView) {
                navigate(targetView.render, targetView.listener);

                // Mengurus styling tombol aktif
                buttons.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
            }
        });
    });
});