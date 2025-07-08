document.addEventListener('DOMContentLoaded', function () {

    const popupMenu = document.querySelector('.popup__menu');
    const popupMobile = document.querySelector('.popup__mobile');
    const popupOffer = document.querySelector('.popup__offer');

    const menuImages = document.querySelectorAll('.header__search_menu-image');
    const hotOffer = document.querySelector('.header__menu_li-hot');

    function checkScreenWidth() {
        return window.innerWidth;
    }

    function closeAllPopups() {
        popupMenu.classList.remove('active');
        popupMobile.classList.remove('active');
        popupOffer.classList.remove('active');
    }

    menuImages.forEach(menuImage => {
        menuImage.addEventListener('click', function (e) {
            e.stopPropagation();
            const screenWidth = checkScreenWidth();

            closeAllPopups();

            if (screenWidth >= 1440) {
                popupMenu.classList.add('active');
            } else if (screenWidth <= 360) {
                popupMobile.classList.add('active');
            }
        });
    });

    hotOffer.addEventListener('click', function (e) {
        e.stopPropagation();
        const screenWidth = checkScreenWidth();

        if (screenWidth >= 1440) {
            closeAllPopups();
            popupOffer.classList.add('active');
        }
    });

    document.addEventListener('click', function () {
        closeAllPopups();
    });

    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
        popup.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    });

    window.addEventListener('resize', function () {
        closeAllPopups();
    });
});

