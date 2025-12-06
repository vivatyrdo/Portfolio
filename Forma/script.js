document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================
       1. ГЛАВНАЯ СТРАНИЦА: HERO SLIDER
       ========================================== */
    // Проверяем, есть ли такой слайдер на странице
    if (document.querySelector('.hero')) {
        const swiper = new Swiper('.hero', {
            loop: true,
            speed: 1000,
            parallax: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    /* ==========================================
       2. ОБЩЕЕ: МЕНЮ (ХЕДЕР)
       ========================================== */
    const menuBtn = document.querySelector('.dropdown-trigger .nav__link');
    const menuDropdown = document.querySelector('.dropdown-menu');

    // Проверяем, существует ли кнопка меню (вдруг мы на странице без меню)
    if (menuBtn && menuDropdown) {
        // Клик по кнопке МЕНЮ
        menuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            menuDropdown.classList.toggle('active');
            menuBtn.classList.toggle('active-link');
        });

        // Закрыть меню при клике вне
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.dropdown-trigger')) {
                menuDropdown.classList.remove('active');
                menuBtn.classList.remove('active-link');
            }
        });
    }

    /* ==========================================
       3. ГЛАВНАЯ СТРАНИЦА: ОТЗЫВЫ
       ========================================== */
    if (document.querySelector('.reviews-slider')) {
        const reviewsSwiper = new Swiper('.reviews-slider', {
            loop: true,
            speed: 800,
            spaceBetween: 30,
            breakpoints: {
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
            },
            navigation: {
                nextEl: '.review-next',
                prevEl: '.review-prev',
            },
        });
    }

    /* ==========================================
       4. СТРАНИЦА ТОВАРА: АККОРДЕОН И СЧЕТЧИК
       ========================================== */
    
    // --- Аккордеон ---
    const accordions = document.querySelectorAll('.accordion-header');
    if (accordions.length > 0) {
        accordions.forEach(acc => {
            acc.addEventListener('click', () => {
                acc.classList.toggle('active');
                const panel = acc.nextElementSibling;
                if (panel.style.maxHeight && panel.style.maxHeight !== '0px') {
                    panel.style.maxHeight = '0px';
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        });
    }

    // --- Счетчик количества ---
    const minusBtn = document.querySelector('.minus');
    const plusBtn = document.querySelector('.plus');
    const qtyVal = document.querySelector('.qty-val');

    // Проверяем, есть ли кнопки на странице
    if (minusBtn && plusBtn && qtyVal) {
        plusBtn.addEventListener('click', () => {
            let current = parseInt(qtyVal.innerText);
            qtyVal.innerText = current + 1;
        });

        minusBtn.addEventListener('click', () => {
            let current = parseInt(qtyVal.innerText);
            if (current > 1) {
                qtyVal.innerText = current - 1;
            }
        });
    }

    /* ==========================================
       5. СТРАНИЦА ТОВАРА: ГАЛЕРЕЯ (СВЯЗАННЫЕ СЛАЙДЕРЫ)
       ========================================== */
    
    // Проверяем, есть ли галерея на странице
    if (document.querySelector('.product-main-slider') && document.querySelector('.product-thumbs-slider')) {
        
        // 1. Инициализируем нижний слайдер (миниатюры)
        const swiperThumbs = new Swiper(".product-thumbs-slider", {
            spaceBetween: 10, // Отступ между миниатюрами
            slidesPerView: 4, // Сколько миниатюр показывать
            freeMode: true,
            watchSlidesProgress: true,
        });

        // 2. Инициализируем верхний слайдер и связываем с нижним
        const swiperMain = new Swiper(".product-main-slider", {
            loop: true,
            spaceBetween: 10,
            navigation: {
                nextEl: ".product-arrow-next",
                prevEl: ".product-arrow-prev",
            },
            thumbs: {
                swiper: swiperThumbs, // Вот эта магия связывает их
            },
        });
    }

});