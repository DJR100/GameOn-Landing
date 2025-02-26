document.addEventListener('DOMContentLoaded', function() {
    // Get form elements
    const emailForm = document.getElementById('email-form');
    const emailInput = document.getElementById('email');
    const confirmationMessage = document.getElementById('confirmation');
    
    // Add glitch effect to the title on hover
    const glitchTitle = document.querySelector('.glitch');
    if (glitchTitle) {
        glitchTitle.addEventListener('mouseover', function() {
            this.classList.add('active');
        });
        
        glitchTitle.addEventListener('mouseout', function() {
            this.classList.remove('active');
        });
    }
    
    // Handle form submission
    if (emailForm) {
        emailForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get email value
            const email = emailInput.value.trim();
            
            // Simple validation
            if (!isValidEmail(email)) {
                showError('Please enter a valid email address');
                return;
            }
            
            // Simulate API call to save email
            saveEmail(email)
                .then(response => {
                    // Hide form and show confirmation
                    emailForm.style.display = 'none';
                    confirmationMessage.classList.remove('hidden');
                    
                    // Add arcade sound effect
                    playArcadeSound();
                })
                .catch(error => {
                    showError('Something went wrong. Please try again.');
                    console.error('Error:', error);
                });
        });
    }
    
    // Validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Show error message
    function showError(message) {
        // Remove any existing error message
        const existingError = document.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        // Create and append error message
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.style.color = '#ff0000';
        errorElement.style.marginTop = '10px';
        errorElement.style.fontWeight = 'bold';
        errorElement.textContent = message;
        
        emailForm.appendChild(errorElement);
        
        // Auto-remove after 3 seconds
        setTimeout(() => {
            errorElement.remove();
        }, 3000);
    }
    
    // Simulate API call to save email
    function saveEmail(email) {
        return new Promise((resolve, reject) => {
            // In a real application, this would be an API call
            // For demo purposes, we'll simulate a successful response after a delay
            setTimeout(() => {
                // Store email in localStorage for demo purposes
                try {
                    const emails = JSON.parse(localStorage.getItem('gameOnWaitlist')) || [];
                    emails.push({
                        email: email,
                        timestamp: new Date().toISOString()
                    });
                    localStorage.setItem('gameOnWaitlist', JSON.stringify(emails));
                    resolve({ success: true });
                } catch (error) {
                    reject(error);
                }
            }, 1000);
        });
    }
    
    // Play arcade sound effect
    function playArcadeSound() {
        // Create audio element
        const audio = new Audio();
        
        // Set source to a classic arcade sound
        audio.src = 'https://www.soundjay.com/misc/sounds/coin-drop-1.mp3';
        
        // Play the sound
        audio.play().catch(e => {
            // Handle autoplay restrictions
            console.log('Audio playback failed:', e);
        });
    }
    
    // Add some arcade-style cursor effects
    document.addEventListener('mousemove', function(e) {
        // Create a small pixel effect at cursor position
        if (Math.random() > 0.97) { // Only create occasionally
            const pixel = document.createElement('div');
            pixel.className = 'pixel-effect';
            pixel.style.position = 'absolute';
            pixel.style.width = '4px';
            pixel.style.height = '4px';
            pixel.style.backgroundColor = getRandomColor();
            pixel.style.left = e.pageX + 'px';
            pixel.style.top = e.pageY + 'px';
            pixel.style.zIndex = '9999';
            pixel.style.pointerEvents = 'none';
            
            document.body.appendChild(pixel);
            
            // Animate and remove
            setTimeout(() => {
                pixel.style.transition = 'all 0.5s ease';
                pixel.style.opacity = '0';
                pixel.style.transform = 'translateY(-10px)';
                
                setTimeout(() => {
                    pixel.remove();
                }, 500);
            }, 100);
        }
    });
    
    // Get random neon color
    function getRandomColor() {
        const colors = [
            '#00ff00', // Green
            '#ff00ff', // Magenta
            '#00ffff', // Cyan
            '#ffff00', // Yellow
            '#ff0000'  // Red
        ];
        
        return colors[Math.floor(Math.random() * colors.length)];
    }
}); 