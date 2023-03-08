window.addEventListener('DOMContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.title'));
    const playerDisplay = Array.from(document.querySelectorAll('.display-player'));
    const resetButton = Array.from(document.querySelectorAll('#reset'));
    const announcer = Array.from(document.querySelectorAll('.announcer'));


    resetButton.addEventListener('click', resetboard);
});
        