document.addEventListener('DOMContentLoaded', () => {
    
    const accordions = document.querySelectorAll('.accordion-item');

    accordions.forEach(item => {
        item.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            accordions.forEach(el => {
                el.classList.remove('active');
                el.querySelector('.accordion-content').style.maxHeight = null;
            });

            if (!isActive) {
                item.classList.add('active');
                const content = item.querySelector('.accordion-content');
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    const cardFooter = document.querySelector('.card-footer');
    const whiteCard = document.querySelector('.white-card');
    const moreBtn = document.querySelector('.more-btn');

    if(cardFooter) {
        cardFooter.addEventListener('click', () => {
            whiteCard.classList.toggle('expanded');
            if (whiteCard.classList.contains('expanded')) {
                moreBtn.textContent = "Close";
            } else {
                moreBtn.textContent = "More";
            }
        });
    }

    const missionBtn = document.querySelector('.mission-toggle-btn');
    const missionWrapper = document.querySelector('.mission-text-wrapper');
    const missionBtnText = missionBtn ? missionBtn.querySelector('span') : null;

    if (missionBtn && missionWrapper) {
        missionBtn.addEventListener('click', () => {
            missionWrapper.classList.toggle('open');
            if (missionWrapper.classList.contains('open')) {
                missionBtnText.textContent = "Close";
            } else {
                missionBtnText.textContent = "Open more";
            }
        });
    }

    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animItems = document.querySelectorAll('.anim-item');
    animItems.forEach(item => observer.observe(item));

    const revealImages = document.querySelectorAll('.image-reveal');
    revealImages.forEach(img => observer.observe(img));

    const btnOrder = document.querySelector('.btn-order');
    if(btnOrder) {
        btnOrder.addEventListener('mousemove', (e) => {
            const rect = btnOrder.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            btnOrder.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });

        btnOrder.addEventListener('mouseleave', () => {
            btnOrder.style.transform = `translate(0, 0)`;
        });
    }

    const portBtn = document.querySelector('.portfolio-footer');
    const portWrapper = document.querySelector('.portfolio-desc-wrapper');
    const portBtnText = portBtn ? portBtn.querySelector('.portfolio-btn-text') : null;

    if (portBtn && portWrapper) {
        portBtn.addEventListener('click', () => {
            portWrapper.classList.toggle('open');
            if (portWrapper.classList.contains('open')) {
                portBtnText.textContent = "Close";
            } else {
                portBtnText.textContent = "Open More";
            }
        });
    }

    const scrollTopBtn = document.querySelector('.scroll-top-btn');

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});