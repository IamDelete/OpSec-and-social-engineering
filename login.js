const form = document.getElementById('loginForm');
        const username = document.getElementById('username');
        const password = document.getElementById('password');
        const button = document.getElementById('formBtn');

        function submitForm(event) {
            let user = username.value;
            let pass = password.value;
        
            if (user === '' || pass === '') {
                username.classList.add('error');
                password.classList.add('error');
                button.classList.add('error');
                event.preventDefault();
            } else {
                window.location.href = '../index_main_page.html';
                username.classList.remove('error');
                password.classList.remove('error');
                button.classList.remove('error');
            }
        }

        form.addEventListener('submit', submitForm);