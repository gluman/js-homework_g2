document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('subscribe-modal');
    const closeButton = modal.querySelector('.modal__close');

    // Функция для получения значения cookie
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

    // Проверяем, закрыто ли окно ранее
    if (getCookie('modalClosed') !== 'true') {
        modal.classList.add('modal_active');
    }

    // Обработчик закрытия окна
    closeButton.addEventListener('click', () => {
        modal.classList.remove('modal_active');
        // Устанавливаем cookie с сроком действия 1 год
        document.cookie = 'modalClosed=true; max-age=31536000; path=/';
    });
});