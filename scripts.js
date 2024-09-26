document.addEventListener('DOMContentLoaded', function() {
    const aboutBtn = document.getElementById('about-btn');
    const aboutSection = document.getElementById('about');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const showLessBtn = document.getElementById('showLessBtn');
    const postsContainer = document.getElementById('posts-container');
    let newPost;

    function smoothScrollTo(element, duration = 1000) {
        const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }

    if (aboutBtn && aboutSection) {
        aboutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            smoothScrollTo(aboutSection);
        });
    }

    loadMoreBtn.addEventListener('click', function() {
        newPost = document.createElement('div');
        newPost.className = 'post';
        newPost.innerHTML = `
            <a href="post4.html">
                <img src="images/DiorB.jpg" alt="Post Image">
                <div class="post-content">
                    <h3>Best Men's Fragrances for 2024: Elevate Your Scent Game</h3>
                    <p>As we enter 2024, men's fragrance trends are evolving toward bolder, more refined scents. From everyday wear to special occasions, the right fragrance can enhance your style and leave a lasting impression.</p>
                    <div class="post-footer">
                        <span class="author">By FashionAllDay</span>
                    </div>
                </div>
            </a>
        `;

        postsContainer.appendChild(newPost);
        loadMoreBtn.style.display = 'none';
        showLessBtn.style.display = 'block';

        setTimeout(() => {
            smoothScrollTo(newPost);
        }, 100);
    });

    showLessBtn.addEventListener('click', function() {
        if (newPost) {
            postsContainer.removeChild(newPost);
        }
        loadMoreBtn.style.display = 'block';
        showLessBtn.style.display = 'none';

        setTimeout(() => {
            const blogSection = document.getElementById('blog');
            smoothScrollTo(blogSection);
        }, 100);
    });
});
