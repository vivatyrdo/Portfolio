function openTab(tabName) {
    // Находим все кнопки табов
    const buttons = document.querySelectorAll('.tab-btn');
    
    // Убираем активный класс со всех кнопок
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Добавляем активный класс нажатой кнопке (event.target мы тут не передали, 
    // поэтому найдем по тексту или просто сделаем перебор, 
    // но проще всего добавить класс active тому элементу, на который кликнули)
    
    // В данном примере для простоты я просто меняю стили кнопок. 
    // В реальном проекте тут бы менялся контент внутри .feature-box
    
    event.currentTarget.classList.add('active');
    
    console.log(`Tab switched to: ${tabName}`);
    // Здесь можно добавить логику смены текста/картинок в зависимости от tabName
}

// Инициализация Swiper
var swiper = new Swiper(".mySwiper", {
    effect: "slide",
    grabCursor: true,       // Курсор в виде руки
    centeredSlides: true,   // Активный слайд всегда по центру
    slidesPerView: "auto",  // Ширина слайда берется из CSS (width: 350px)
    spaceBetween: 30,       // Расстояние между слайдами
    initialSlide: 1,        // Начинаем со второго слайда (LiftGPT PRO)
    // loop: true,          // Можно включить бесконечную прокрутку, раскомментировав это
    
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    
    // Брейкпоинты для тонкой настройки (хотя мы уже задали slidesPerView: auto)
    breakpoints: {
        // На маленьких экранах уменьшим отступы
        320: {
            spaceBetween: 15
        },
        // На больших вернем стандартные
        1024: {
            spaceBetween: 40
        }
    }
});

// Логика переключения табов (из прошлого шага)
function openTab(tabName) {
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');
    console.log(`Tab switched to: ${tabName}`);
    // В реальном проекте тут меняем контент
}

// FAQ Accordion Logic
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        // 1. Переключаем активный класс для кнопки (для поворота плюсика)
        question.classList.toggle('active');

        // 2. Находим блок с ответом
        const answer = question.nextElementSibling;

        // 3. Если класс active добавлен, раскрываем блок
        if (question.classList.contains('active')) {
            // scrollHeight - это полная высота контента, даже если он скрыт
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            // Иначе сворачиваем
            answer.style.maxHeight = 0;
        }

        // (Опционально) Закрывать другие открытые вопросы при клике
        // Если хочешь режим "один открыт", раскомментируй код ниже:
        /*
        faqQuestions.forEach(otherQuestion => {
            if (otherQuestion !== question && otherQuestion.classList.contains('active')) {
                otherQuestion.classList.remove('active');
                otherQuestion.nextElementSibling.style.maxHeight = 0;
            }
        });
        */
    });
});