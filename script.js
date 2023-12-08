document.addEventListener('DOMContentLoaded', function () {
    // Add a click event listener to the "warre.dhaeyer" link
    var scrollToTopLink = document.getElementById('scrollToTop');

    if (scrollToTopLink) {
        scrollToTopLink.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default behavior of the link

            // Get the target section
            var topSection = document.getElementById('top');

            // Check if the target section exists
            if (topSection) {
                // Scroll to the top section with custom easing function
                scrollTo(topSection, 1000, easeInOutCubic);
            }
        });
    }

    // Custom easing function (cubic-bezier)
    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t ** 3 : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    // Function for smooth scrolling with custom easing
    function scrollTo(target, duration, easingFunction) {
        const start = window.scrollY || window.pageYOffset;
        const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

        function scroll() {
            const currentTime = 'now' in window.performance ? performance.now() : new Date().getTime();
            const timeElapsed = currentTime - startTime;
            const percentage = timeElapsed / duration;

            if (percentage < 1) {
                window.scrollTo(0, start + (target.offsetTop - start) * easingFunction(percentage));
                requestAnimationFrame(scroll);
            } else {
                window.scrollTo(0, target.offsetTop);
            }
        }

        scroll();
    }
});


