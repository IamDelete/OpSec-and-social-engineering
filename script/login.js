const form = document.getElementById('loginForm');
        const username = document.getElementById('username');
        const password = document.getElementById('password');
        const button = document.getElementById('formBtn');

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            let user = username.value.trim();
            let pass = password.value.trim();
        
            if (user !== '' && pass !== '') {
                window.location.href = 'index_main_page.html';
            } else {
                username.classList.add('error');
                password.classList.add('error');
                button.classList.add('error');
            }
        });
