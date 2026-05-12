// SidebarView.js

export const renderSidebar = () => {
    return `
        <aside class="sidebar" id="mainSidebar">
            <div class="sidebar__header">
                <div class="brand">
                    <h2 class="brand__title">Rini Trans Putri</h2>
                    <span class="brand__subtitle">Logistics & Travel</span>
                </div>
            </div>

            <nav class="sidebar__nav">
                <ul class="nav-list">
                    <li class="nav-item nav-item--active">
                        <a href="#/dashboard" class="nav-link">
                            <i class="nav-icon icon-dashboard"></i>
                            <span class="nav-label">Dashboard</span>
                        </a>
                    </li>
                    
                    <li class="nav-item">
                        <a href="#/fleet" class="nav-link">
                            <i class="nav-icon icon-fleet"></i>
                            <span class="nav-label">Fleet Monitoring</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a href="#/booking" class="nav-link">
                            <i class="nav-icon icon-booking"></i>
                            <span class="nav-label">Booking Management</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a href="#/cms" class="nav-link">
                            <i class="nav-icon icon-cms"></i>
                            <span class="nav-label">CMS Tools</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a href="#/staff" class="nav-link">
                            <i class="nav-icon icon-staff"></i>
                            <span class="nav-label">Staff Directory</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a href="#/reports" class="nav-link">
                            <i class="nav-icon icon-reports"></i>
                            <span class="nav-label">Reports</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <div class="sidebar__footer">
                <ul class="nav-list">
                    <li class="nav-item">
                        <a href="#/settings" class="nav-link">
                            <i class="nav-icon icon-settings"></i>
                            <span class="nav-label">Settings</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#/support" class="nav-link">
                            <i class="nav-icon icon-support"></i>
                            <span class="nav-label">Support</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    `;
};

// Fungsi untuk menangani interaksi klik (pindah menu aktif)
export const setupSidebarListener = () => {
    const sidebarNav = document.querySelector('.sidebar__nav');
    
    if (sidebarNav) {
        sidebarNav.addEventListener('click', (e) => {
            // Mencegah error jika yang diklik bukan elemen link
            const clickedLink = e.target.closest('.nav-link');
            if (!clickedLink) return;

            // 1. Bersihkan class 'nav-item--active' dari semua menu
            const allNavItems = sidebarNav.querySelectorAll('.nav-item');
            allNavItems.forEach(item => {
                item.classList.remove('nav-item--active');
            });

            // 2. Tambahkan class 'nav-item--active' hanya ke menu (li) yang diklik
            const parentListItem = clickedLink.parentElement;
            parentListItem.classList.add('nav-item--active');
        });
    }
};