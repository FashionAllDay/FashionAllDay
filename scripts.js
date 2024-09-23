// Function to display blog posts
function displayPosts() {
    const postsContainer = document.getElementById('posts');

    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        postElement.innerHTML = `
            <img src="${post.image}" alt="${post.title}">
            <h3>${post.title}</h3>
            <p>${post.content}</p>
        `;

        postsContainer.appendChild(postElement);
    });
}

// Call the function to display the posts on page load
document.addEventListener('DOMContentLoaded', displayPosts);

document.querySelectorAll('.table-of-contents a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    function smoothScrollTo(element) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const extraPadding = 20; // Adjust this value as needed
        const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
        const scrollToPosition = elementTop - headerHeight - extraPadding;
        
        window.scrollTo({
            top: scrollToPosition,
            behavior: 'smooth'
        });
    }

    // About button functionality
    const aboutBtn = document.getElementById('about-btn');
    const aboutBtnMobile = document.getElementById('about-btn-mobile');
    const aboutSection = document.getElementById('about');
    if (aboutBtn && aboutSection) {
        aboutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            smoothScrollTo(aboutSection);
        });
    }
    if (aboutBtnMobile && aboutSection) {
        aboutBtnMobile.addEventListener('click', function(e) {
            e.preventDefault();
            smoothScrollTo(aboutSection);
        });
    }

    // Check if we've just navigated to #about from another page
    if (window.location.hash === '#about') {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            // Use setTimeout to ensure the scroll happens after the page loads
            setTimeout(() => {
                smoothScrollTo(aboutSection);
            }, 100);
        }
    }

    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            if (target === '#top') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                const targetElement = document.querySelector(target);
                if (targetElement) {
                    smoothScrollTo(targetElement);
                }
            }
        });
    });

    // Load More and Show Less functionality
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const showLessBtn = document.getElementById('showLessBtn');
    const postsContainer = document.getElementById('posts-container');
    let newPost;

    function smoothScroll(targetY, duration) {
        const startY = window.pageYOffset;
        const difference = targetY - startY;
        const startTime = performance.now();

        function step() {
            const progress = (performance.now() - startTime) / duration;
            const amount = easeInOutCubic(progress);
            window.scrollTo(0, startY + difference * amount);
            if (progress < 1) {
                requestAnimationFrame(step);
            }
        }

        function easeInOutCubic(t) {
            return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        }

        requestAnimationFrame(step);
    }

    function scrollToSection() {
        const blogSection = document.getElementById('blog');
        const headerHeight = document.querySelector('header').offsetHeight;
        const yOffset = -headerHeight - 20;
        const targetY = blogSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        smoothScroll(targetY, 1500);
    }

    loadMoreBtn.addEventListener('click', function() {
        newPost = document.createElement('div');
        newPost.className = 'post';
        newPost.innerHTML = `
            <a href="post4.html">
                <img src="images/Dior.jpg" alt="Post Image">
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
            const newPostY = newPost.getBoundingClientRect().top + window.pageYOffset - 20;
            smoothScroll(newPostY, 1500);
        }, 100);
    });

    showLessBtn.addEventListener('click', function() {
        if (newPost) {
            postsContainer.removeChild(newPost);
        }
        loadMoreBtn.style.display = 'block';
        showLessBtn.style.display = 'none';
        setTimeout(scrollToSection, 100);
    });
});
