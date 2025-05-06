
console.log("JavaScript file is working!");
alert("Welcome to our restaurant site!");
// Toggle menu (for mobile/responsive design)
const checkBtn = document.querySelector('.checkbtn');
const navUl = document.querySelector('nav ul');

checkBtn?.addEventListener('click', () => {
  navUl.classList.toggle('open');
});

// Active state for category menu
const categoryItems = document.querySelectorAll('.category li');

categoryItems.forEach(item => {
  item.addEventListener('click', () => {
    categoryItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
    // You can add menu filtering functionality here
  });
});

// Smooth FAQ toggle (optional enhancement)
const details = document.querySelectorAll("details");

details.forEach(detail => {
  detail.addEventListener("toggle", () => {
    if (detail.open) {
      details.forEach(el => {
        if (el !== detail) el.open = false;
      });
    }
  });
});
