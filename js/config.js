/**
 * File: config.js
 * Fungsi: Mengatur URL dasar untuk seluruh aplikasi
 */

// Menghasilkan URL dasar secara otomatis (misal: http://127.0.0.1:5500/)
const BASE_URL = window.location.origin;

// Jika proyekmu berada di dalam sub-folder (misal: /rini-trans-project/)
const PROJECT_PATH = "/"; 

export const API_BASE_URL = BASE_URL + PROJECT_PATH;

console.log("Base URL Aktif:", API_BASE_URL);