document.addEventListener('DOMContentLoaded', function() {
    const navContainer = document.querySelector('.news__navigation-container');
    const navList = document.querySelector('.news__navigation-list');
    let isDragging = false;
    let initialPosition = 0;
    let currentTransform = 0;

    const containerWidth = navContainer.offsetWidth;
    const totalWidth = navList.scrollWidth;

    const maxScrollRight = Math.max(totalWidth - containerWidth, 0);

    navContainer.addEventListener('mousedown', e => {
        isDragging = true;
        initialPosition = e.clientX;
    });

    window.addEventListener('mousemove', e => {
        if (!isDragging) return;

        const xDelta = e.clientX - initialPosition;
        const newTransform = currentTransform + xDelta / 2;

        if (newTransform >= 0) {
            currentTransform = 0;
        } else if (-newTransform <= maxScrollRight) {
            currentTransform = newTransform;
        } else {
            currentTransform = -(maxScrollRight);
        }

        navList.style.transform = `translateX(${currentTransform}px)`;
        initialPosition = e.clientX;
    });

    window.addEventListener('mouseup', () => {
        isDragging = false;
    });
});