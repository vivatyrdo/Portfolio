document.addEventListener('DOMContentLoaded', () => {
    
    // Элементы
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
    
    const toLoginBtn = document.getElementById('to-login-btn');
    const toRegisterBtn = document.getElementById('to-register-btn');

    // Кнопки переключения форм
    toLoginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        registerForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    });

    toRegisterBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
    });

    // Обработка отправки формы РЕГИСТРАЦИИ
    registerForm.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Тут типа отправка на сервер...
        const btn = registerForm.querySelector('.auth-btn');
        const originalText = btn.innerText;
        btn.innerText = 'ОБРАБОТКА...';
        
        setTimeout(() => {
            alert('Регистрация успешна! Теперь вы можете войти.');
            btn.innerText = originalText;
            
            // Переключаем на вход
            registerForm.classList.add('hidden');
            loginForm.classList.remove('hidden');
        }, 1000); // Задержка 1 секунда для реалистичности
    });

    // Обработка отправки формы ВХОДА
    loginForm.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const btn = loginForm.querySelector('.auth-btn');
    btn.innerText = 'ВХОД...';
    
    setTimeout(() => {
        // Убираем алерт, если он бесит, или оставляем
        // alert('Вы успешно вошли в аккаунт!'); 
        
        // Меняем на profile.html
        window.location.href = 'profile.html'; 
        
    }, 1000);
});

});