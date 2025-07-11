document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function () {
            // Toggle kelas 'hidden' untuk menampilkan atau menyembunyikan menu
            mobileMenu.classList.toggle('hidden');
        });
    }
});