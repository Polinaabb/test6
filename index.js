document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.header__search_menu-image');
    const popupMenu = document.querySelector('.popup__menu');
    const hotOfferButton = document.querySelector('.header__menu_li-hot');
    const popupOffer = document.querySelector('.popup__offer');
    
    // Функция для открытия/закрытия попапа меню
    function togglePopup() {
        popupMenu.classList.toggle('active');
    }
    
    // Функция для открытия/закрытия попапа предложения
    function toggleOfferPopup() {
        popupOffer.classList.toggle('active');
        // Закрываем другой попап при открытии этого
        if (popupMenu.classList.contains('active')) {
            popupMenu.classList.remove('active');
        }
    }
    
    // Открытие/закрытие по клику на иконку меню
    menuButton.addEventListener('click', function(e) {
        e.stopPropagation();
        togglePopup();
    });
    
    // Открытие/закрытие по клику на "Горячее предложение"
    hotOfferButton.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleOfferPopup();
    });
    
    // Закрытие по клику в любом месте экрана
    document.addEventListener('click', function() {
        if (popupMenu.classList.contains('active')) {
            togglePopup();
        }
        if (popupOffer.classList.contains('active')) {
            toggleOfferPopup();
        }
    });
    
    // Предотвращаем закрытие при клике внутри контента попапов
    popupMenu.querySelector('.popup__menu_content').addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    popupOffer.querySelector('.popup__menu_content').addEventListener('click', function(e) {
        e.stopPropagation();
    });
});

 