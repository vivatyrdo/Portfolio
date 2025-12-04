document.addEventListener('DOMContentLoaded', () => {
    
    /* =========================================
       1. ЛОГИКА МОДАЛЬНОГО ОКНА (BOOKING)
       ========================================= */
    
    // Получаем элементы
    const modal = document.getElementById('bookingModal');
    const openBtn = document.getElementById('openModalBtn');
    const closeBtn = document.getElementById('closeModalBtn');
    const submitBtn = document.getElementById('submitFormBtn');

    // Функция открытия
    function openModal() {
        if (modal) {
            modal.classList.add('active');
        }
    }

    // Функция закрытия
    function closeModal() {
        if (modal) {
            modal.classList.remove('active');
        }
    }

    // Слушатель на кнопку "Book Now"
    if (openBtn) {
        openBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Предотвращаем переход по ссылке, если это тег <a>
            openModal();
        });
    }

    // Слушатель на крестик
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    // Слушатель на кнопку отправки формы
    if (submitBtn) {
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Здесь должна быть реальная отправка данных на сервер
            alert('Request sent successfully! (Simulation)');
            closeModal();
        });
    }

    // Закрытие при клике по темному фону вокруг окна
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Закрытие по кнопке Escape
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeModal();
        }
    });


    /* =========================================
       2. ЛОГИКА СВАЙПЕРОВ (СЛАЙДЕРЫ)
       ========================================= */
    
    // Проверяем, есть ли на странице верхний слайдер (Surf Activities)
    if (document.querySelector('.surf-swiper')) {
        new Swiper('.surf-swiper', {
            slidesPerView: 1.2, // На мобильном видно 1 карточку и часть следующей
            spaceBetween: 20,   // Отступ между слайдами
            // Если нужны стрелки навигации:
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            // Адаптивные точки перелома (Breakpoints)
            breakpoints: {
                600: {
                    slidesPerView: 2, // Планшет
                },
                1024: {
                    slidesPerView: 2, // Десктоп: 2 большие карточки
                }
            }
        });
    }

    // Проверяем, есть ли на странице нижний слайдер (Extra Activities)
    if (document.querySelector('.extra-swiper')) {
        new Swiper('.extra-swiper', {
            slidesPerView: 1.5, // На мобильном
            spaceBetween: 20,
            breakpoints: {
                600: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4, // Десктоп: 4 маленькие карточки
                }
            }
        });
    }

    // 3. Слайдер с отелями (Accommodations)
    if (document.querySelector('.accommodations-swiper')) {
        new Swiper('.accommodations-swiper', {
            slidesPerView: 1.1, // Мобилка
            spaceBetween: 20,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                600: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3.5, // 3 карточки в ряд, как на макете
                }
            }
        });
    }

    // 4. Слайдер "Вам может понравиться" (Suggestions)
    if (document.querySelector('.suggestions-swiper')) {
        new Swiper('.suggestions-swiper', {
            slidesPerView: 1.1, 
            spaceBetween: 20,
            breakpoints: {
                600: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 4.5, // 4 карточки в ряд
                }
            }
        });
    }

});