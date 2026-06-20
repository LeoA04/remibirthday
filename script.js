document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const envelopeContainer = document.getElementById('envelope-container');
    const galleryContainer = document.getElementById('gallery-container');
    const lettersGrid = document.getElementById('letters-grid');
    const backgroundAnimation = document.getElementById('background-animation');
    
    const modal = document.getElementById('letter-modal');
    const closeBtn = document.getElementById('close-btn');
    const modalName = document.getElementById('modal-name');
    const modalMessage = document.getElementById('modal-message');

    // Create floating background items
    function createFloatingItems() {
        const items = ['🌸', '✨', '🎈', '💖', '🎉', '🦋'];
        for (let i = 0; i < 30; i++) {
            const el = document.createElement('div');
            el.className = 'floating-item';
            el.innerText = items[Math.floor(Math.random() * items.length)];
            el.style.left = `${Math.random() * 100}vw`;
            el.style.fontSize = `${Math.random() * 20 + 10}px`;
            el.style.animationDuration = `${Math.random() * 5 + 5}s`;
            el.style.animationDelay = `${Math.random() * 5}s`;
            backgroundAnimation.appendChild(el);
        }
    }
    
    createFloatingItems();

    // Handle Envelope Opening
    let envelopeOpened = false;
    envelope.addEventListener('click', () => {
        if (envelopeOpened) return;
        envelopeOpened = true;
        
        // Play music
        const bgMusic = document.getElementById('bg-music');
        if (bgMusic) bgMusic.play().catch(e => console.log("Audio autoplay prevented"));
        
        // Add open class to trigger CSS animation
        envelope.classList.add('open');
        
        const letterPreview = document.getElementById('letter-preview');
        const text1 = document.getElementById('preview-text-1');
        const text2 = document.getElementById('preview-text-2');

        setTimeout(() => {
            // Step 1: zoom in the letter
            letterPreview.classList.add('zoom');
            
            setTimeout(() => {
                // Step 2: show "To Our Special Friend"
                text1.classList.add('show');
                
                setTimeout(() => {
                    // Step 3: show "Remi" after 3 seconds delay
                    text2.classList.add('show');
                    
                    // Trigger confetti!
                    if (typeof confetti === 'function') {
                        confetti({
                            particleCount: 150,
                            spread: 70,
                            origin: { y: 0.6 },
                            colors: ['#ffb6b9', '#fae3d9', '#bbded6', '#8ac6d1', '#f4d160', '#fbc2eb']
                        });
                    }
                    
                    setTimeout(() => {
                        // Step 4: fade out envelope container and show gallery
                        envelopeContainer.style.animation = 'fadeOut 1s forwards';
                        
                        setTimeout(() => {
                            envelopeContainer.classList.remove('active');
                            envelopeContainer.classList.add('hidden');
                            
                            galleryContainer.classList.remove('hidden');
                            galleryContainer.classList.add('gallery-active');
                            
                            renderLetters();
                        }, 1000);
                    }, 2000); // 2s after Remi appears
                }, 3000); // 3s delay for Remi
            }, 1000); // 1s wait after zoom
        }, 1500); // Wait 1.5s after envelope click for sliding up
    });

    // Render Letters in Grid
    function renderLetters() {
        // Assume 'letters' array is loaded from data.js
        if (typeof letters === 'undefined' || !Array.isArray(letters)) {
            console.error("Letters data not found. Please ensure data.js is loaded correctly.");
            return;
        }

        const bgColors = ['#ffb6b9', '#fae3d9', '#bbded6', '#8ac6d1', '#f4d160', '#fbc2eb', '#a18cd1', '#ffc3a0'];
        
        lettersGrid.innerHTML = '';
        letters.forEach((letter, index) => {
            const card = document.createElement('div');
            card.className = 'letter-card';
            card.style.animation = `slideUpFade 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.1}s backwards`;
            
            const randomColor = bgColors[Math.floor(Math.random() * bgColors.length)];
            card.style.background = `linear-gradient(135deg, ${randomColor}88, rgba(255,255,255,0.9))`;
            
            card.innerHTML = `
                <h3 class="card-name">${letter.name}</h3>
                <p class="card-preview">${letter.message}</p>
            `;
            
            // 3D tilt effect on hover
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -10;
                const rotateY = ((x - centerX) / centerX) * 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
                card.style.transition = 'transform 0.5s ease';
            });
            
            card.addEventListener('mouseenter', () => {
                card.style.transition = 'none';
            });
            
            card.addEventListener('click', () => openModal(letter));
            lettersGrid.appendChild(card);
        });
    }

    // Modal logic
    function openModal(letter) {
        modalName.textContent = letter.name;
        modalMessage.textContent = letter.message;
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    function closeModal() {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    
    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
});
