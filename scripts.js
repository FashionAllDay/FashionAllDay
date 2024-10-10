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
        // Create new post for post4.html
        const newPost4 = document.createElement('div');
        newPost4.className = 'post';
        newPost4.innerHTML = `
            <a href="post4.html">
                <img src="images/DiorBn.jpg" alt="Post Image">
                <div class="post-content">
                    <h3>Best Men's Fragrances for 2024: Elevate Your Scent Game</h3>
                    <p>As we enter 2024, men's fragrance trends are evolving toward bolder, more refined scents. From everyday wear to special occasions, the right fragrance can enhance your style and leave a lasting impression.</p>
                    <div class="post-footer">
                        <span class="author">By FashionAllDay</span>
                    </div>
                </div>
            </a>
        `;

        // Append post4 to the posts container
        postsContainer.appendChild(newPost4);

        // Create new post for post5.html
        const newPost5 = document.createElement('div');
        newPost5.className = 'post';
        newPost5.innerHTML = `
            <a href="post5.html">
                <img src="images/autumn.JPG" alt="Post Image">
                <div class="post-content">
                    <h3>Men's Fall Fashion Guide 2024: Essential Trends and Style Tips</h3>
                    <p>As the leaves start to fall, it's time to refresh your wardrobe for the cooler months ahead. Men's fall fashion in 2024 combines classic styles with modern twists, blending functionality with aesthetics.</p>
                    <div class="post-footer">
                        <span class="author">By FashionAllDay</span>
                    </div>
                </div>
            </a>
        `;

        // Append post5 to the posts container
        postsContainer.appendChild(newPost5);

        // Create new post for post6.html
        const newPost6 = document.createElement('div');
        newPost6.className = 'post';
        newPost6.innerHTML = `
            <a href="post6.html">
                <img src="images/leaf.jpg" alt="Post Image">
                <div class="post-content">
                    <h3>The Best Budget Men's Fall Fashion 2024: Amazon Edition</h3>
                    <p>Looking stylish this fall doesn't have to cost much. Whether you're revamping your wardrobe or looking for affordable pieces to keep you warm, these picks will help you achieve the fall look without breaking the bank.</p>
                    <div class="post-footer">
                        <span class="author">By FashionAllDay</span>
                    </div>
                </div>
            </a>
        `;

        // Append post6 to the posts container
        postsContainer.appendChild(newPost6);

        loadMoreBtn.style.display = 'none';
        showLessBtn.style.display = 'block';

        setTimeout(() => {
            smoothScrollTo(newPost4);
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
