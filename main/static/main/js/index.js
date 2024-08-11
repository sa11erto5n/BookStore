const navButton = document.getElementById('nav-button');
const Menu = document.getElementById('nav-menu');

navButton.addEventListener('click', () => {
    if (Menu.classList.contains('show-menu')) {
        Menu.classList.remove('show-menu');

        // Change the icon with a fade-in animation
        navButton.innerHTML = '<i class="ph ph-list"></i>';
        const icon = navButton.querySelector('i');
        icon.classList.add('icon-fade');

    } else {
        // Show menu and apply animations to children
        Menu.classList.add('show-menu');
        // Animate the menu title
        const menuTitle = Menu.querySelector('h4');
        menuTitle.style.animationDelay = `0.1s`;

        menuTitle.classList.add('animate__animated', 'animate__backInLeft');

        // Animate each list item
        const menuItems = Menu.querySelectorAll('li');
        menuItems.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.1}s`;
            item.classList.add('d-flex', 'animate__animated', 'animate__backInLeft');
        });
        // Animat the icon
        navButton.innerHTML = '<i class="ph ph-x"></i>';
        const icon = navButton.querySelector('i');
        icon.classList.add('icon-fade');
        // Add a header to the menu 

    }
});
// Select all section elements
const sections = document.querySelectorAll('section');

// Create an Intersection Observer instance
const intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // Check if the element is intersecting (visible in the viewport)
        if (entry.isIntersecting) {
            // Replace the opacity class to make the section visible
            entry.target.classList.replace('opacity-0', 'opacity-1');
            entry.target.classList.add('animate__animated','animate__backInLeft')
            // Optional: Stop observing the element after it becomes visible
            intersectionObserver.unobserve(entry.target);
        }
    });
});

// Add the initial opacity class and start observing each section
sections.forEach(section => {
    section.classList.add('opacity-0');
    intersectionObserver.observe(section);
});
