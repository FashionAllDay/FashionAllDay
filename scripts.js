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
    const aboutBtn = document.getElementById('about-btn');
    const aboutSection = document.getElementById('about');

    if (aboutBtn && aboutSection) {
        aboutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const showLessBtn = document.getElementById('showLessBtn');
    const postsContainer = document.getElementById('posts-container');
    const buttonContainer = document.querySelector('.button-container');
    let newPost;

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

        // Add the new post to the container
        postsContainer.appendChild(newPost);

        // Hide the "Load More" button and show the "Show Less" button
        loadMoreBtn.style.display = 'none';
        showLessBtn.style.display = 'block';

        // Scroll to the new post
        setTimeout(() => {
            const newPostY = newPost.getBoundingClientRect().top + window.pageYOffset - 20;
            window.scrollTo({
                top: newPostY,
                behavior: 'smooth'
            });
        }, 100);
    });

    showLessBtn.addEventListener('click', function() {
        // Remove the last post
        if (newPost) {
            postsContainer.removeChild(newPost);
        }

        // Show the "Load More" button and hide the "Show Less" button
        loadMoreBtn.style.display = 'block';
        showLessBtn.style.display = 'none';

        // Scroll to the blog section
        setTimeout(() => {
            const blogSection = document.getElementById('blog');
            blogSection.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    });
});
