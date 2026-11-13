"use strict";
const copyrightYear = document.getElementById('year');
if (copyrightYear) {
    copyrightYear.textContent = String(new Date().getFullYear());
}
