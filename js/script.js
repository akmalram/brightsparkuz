window.addEventListener('load', () => {
    // Responsive menu toggling

    let menuToggler = () => {
        let btn = document.querySelector('.toggler');
        let menu = document.querySelector('.header-nav .menu');

        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
            menu.classList.toggle('active');
        });
        window.addEventListener('resize', (e) => {
            if(window.innerWidth > 720) {
                btn.classList.remove('active');
                menu.classList.remove('active');
            }
        })
    }

    menuToggler();

    // Scrolling to anchor

    let scrollToAnchor = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
        
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }

    scrollToAnchor();

    // Modal window toggling
    
    const modalToggler = () => {
        let btn = document.querySelectorAll('.call-order-btn'),
            modal = document.querySelector('.modal'),
            closetBtn = document.querySelector('.modal .close-btn'),
            modalBackground = document.querySelector('.modal-background'),
            form = document.querySelector('.call-order-form');

        btn.forEach(one => {
            one.addEventListener('click', () => {
                modal.classList.add('active'); 
            });
        });

        [closetBtn, modalBackground].forEach(one => {
            one.addEventListener('click', () => {
                modal.classList.remove('active');
            });
        });
        // form.addEventListener('submit', () => {
        //     modal.classList.remove('active');
        // });
    }

    modalToggler();
});
