document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('subscribe-modal');
    const closeButton = modal.querySelector('.modal__close');

    function getCookie(name) {
        const cookies = document.cookie.split('; ');
        for (const cookie of cookies) {
            const [cookieName, cookieValue] = cookie.split('=');
            if (cookieName === name) {
                return cookieValue;
            }
        }
        return null;
    }

    if (getCookie('modalClosed') !== 'true') {
        modal.classList.add('modal_active');
    }

    closeButton.addEventListener('click', () => {
        modal.classList.remove('modal_active');
        document.cookie = 'modalClosed=true; max-age=31536000; path=/';
    });
});