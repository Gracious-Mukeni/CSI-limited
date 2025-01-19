
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

document.getElementById('review-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const review = document.getElementById('review').value.trim();
    const rating = document.getElementById('rating').value;

    if (!name || !review || !rating) {
        alert('Please fill out all fields before submitting your review.');
        return;
    }

    const reviewsSection = document.getElementById('reviews');
    const newReview = document.createElement('div');
    newReview.className = 'user-review';
    newReview.innerHTML = `
        <p><strong>${name}</strong> (${rating} Stars)</p>
        <p>${review}</p>
    `;
    reviewsSection.appendChild(newReview);

    // Reset Form
    this.reset();
    alert('Thank you for your review!');
});


document.querySelector('footer p').innerHTML = `&copy; ${new Date().getFullYear()} CSI Security Company. All rights reserved.`;
