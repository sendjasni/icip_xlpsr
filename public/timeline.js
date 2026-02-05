// Timeline-specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Simple animation for timeline items on scroll
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    // Set initial state and observe each timeline item
    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(item);
    });

    // Add current date indicator
    const currentDate = new Date();
    const currentDateStr = currentDate.toISOString().split('T')[0];
    
    // You can add logic here to highlight the current phase based on date
    // Example: Compare dates and add/remove 'current-phase' class
    
    // Add click event for timeline items (optional)
    timelineItems.forEach(item => {
        item.addEventListener('click', function() {
            this.querySelector('.timeline-content').classList.toggle('expanded');
        });
    });

    // Update badge text based on current date
    updateCurrentPhaseBadge();
});

function updateCurrentPhaseBadge() {
    const currentDate = new Date();
    const timelineDates = document.querySelectorAll('.timeline-date');
    
    // This is a simple example - you would need to implement proper date comparison
    // based on your actual timeline dates
    const challengeDates = [
        new Date('2026-02-11'), // Launch
        new Date('2026-02-11'), // Validation release
        new Date('2026-05-13'), // Submission deadline
        new Date('2026-05-14'), // Evaluation start
        new Date('2026-05-31'), // Evaluation end
        new Date('2026-06-10'), // Notification
        new Date('2026-07-01'), // Camera-ready
        new Date('2026-09-13')  // Conference start
    ];
    
    // Find which phase we're currently in
    let currentPhaseIndex = -1;
    for (let i = 0; i < challengeDates.length; i++) {
        if (currentDate >= challengeDates[i]) {
            currentPhaseIndex = i;
        }
    }
    
    // Update badges (you can customize this based on your needs)
    const badges = document.querySelectorAll('.badge-phase');
    badges.forEach(badge => {
        badge.textContent = 'Phase';
    });
    
    if (currentPhaseIndex >= 0 && badges[currentPhaseIndex]) {
        badges[currentPhaseIndex].textContent = 'Current Phase';
        badges[currentPhaseIndex].classList.add('bg-primary');
    }
}