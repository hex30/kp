// File: app.js

// 1. Import fungsi dari file SidebarView.js
// Sesuaikan path/lokasi filenya dengan struktur folder proyekmu
import { renderSidebar, setupSidebarListener } from '../js/components/sidebarView.js';

// 2. Pastikan DOM sudah dimuat sepenuhnya sebelum menjalankan script
document.addEventListener('DOMContentLoaded', () => {
    
    // Cari elemen tempat kita akan menempelkan sidebar
    const sidebarRoot = document.getElementById('sidebar');
    
    if (sidebarRoot) {
        // Suntikkan kode HTML sidebar ke dalam div tersebut
        sidebarRoot.innerHTML = renderSidebar();
        
        // Aktifkan fungsi interaksi (efek klik warna kuning)
        setupSidebarListener();
    }
    
    // Di sini nanti kamu bisa meng-import dan menjalankan komponen lain
    // contoh: setupRuteListener() untuk form, dll.
});