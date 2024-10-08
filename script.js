document.addEventListener('DOMContentLoaded', () => {
    // Initialize Plyr for each video with unique IDs
    const player1 = new Plyr('#player1', {
        controls: ['play', 'progress', 'current-time', 'mute', 'fullscreen'],
        fullscreen: { enabled: true, fallback: true, iosNative: true },
        autoplay: true,
        muted: true,
        loop: { active: true },
    });

    const player2 = new Plyr('#player2', {
        controls: ['play', 'progress', 'current-time', 'mute', 'fullscreen'],
        fullscreen: { enabled: true, fallback: true, iosNative: true },
        autoplay: true,
        muted: true,
        loop: { active: true },
    });
});


document.addEventListener('keyup', function(event) {
    const slides = document.querySelectorAll('.slide');
    let currentSlideIndex = Array.from(slides).findIndex(slide => slide.classList.contains('current'));
    
    if (event.key === 'ArrowUp') {
        if (currentSlideIndex > 0) {
            changeSlide(currentSlideIndex, currentSlideIndex - 1);
        }
    } else if (event.key === 'ArrowDown') {
        if (currentSlideIndex < slides.length - 1) {
            changeSlide(currentSlideIndex, currentSlideIndex + 1);
        }
    }

    function changeSlide(currentIndex, newIndex) {
        slides[currentIndex].classList.remove('current');
        slides[newIndex].classList.add('current');
        slides[newIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
});