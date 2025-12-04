document.addEventListener('DOMContentLoaded', () => {
    
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.desktop-nav');
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('mobile-active');
        
        if(nav.classList.contains('mobile-active')) {
            nav.style.display = 'flex';
            nav.style.flexDirection = 'column';
            nav.style.position = 'absolute';
            nav.style.top = '70px';
            nav.style.left = '0';
            nav.style.width = '100%';
            nav.style.background = '#fff';
            nav.style.padding = '20px';
            nav.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
        } else {
            nav.style.display = '';
        }
    });

    const statusBtn = document.getElementById('statusBtn');
    const modal = document.getElementById('statusModal');
    const closeModal = document.querySelector('.close-modal');

    statusBtn.addEventListener('click', () => {
        modal.classList.add('open');
    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove('open');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('open');
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                if(nav.classList.contains('mobile-active')) {
                    nav.classList.remove('mobile-active');
                    nav.style.display = '';
                }
            }
        });
    });
});