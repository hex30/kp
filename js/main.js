import { renderNavbar } from "./components/navbar.js";
import { renderFooter } from "./components/footer.js";
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
    if (!serviceContent)
        return;

    serviceContent.innerHTML = renderFn(); 
    if (listenerFn) listenerFn();          
}

document.addEventListener("DOMContentLoaded", () => {
    renderNavbar();
    renderFooter();
    
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