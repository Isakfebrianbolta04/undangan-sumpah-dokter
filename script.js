// ============================================
// OPENING COVER & MUSIC AUTOPLAY
// ============================================

const openingCover = document.getElementById('openingCover');
const btnOpen = document.getElementById('btnOpen');
const bgMusic = document.getElementById('bgMusic');
const floatingMusic = document.getElementById('floatingMusic');
const musicIconPlaying = floatingMusic.querySelector('.playing');
const musicIconPaused = floatingMusic.querySelector('.paused');

let isMusicPlaying = false;

// Get guest name from URL parameter (optional)
const urlParams = new URLSearchParams(window.location.search);
const guestName = urlParams.get('to');
if (guestName) {
    document.getElementById('guestName').textContent = guestName;
}

// Open invitation button
btnOpen.addEventListener('click', () => {
    openingCover.classList.add('hidden');
    document.body.classList.remove('no-scroll');

    // Auto-play music after opening
    setTimeout(() => {
        bgMusic.play().then(() => {
            isMusicPlaying = true;
            musicIconPlaying.classList.remove('hidden');
            musicIconPaused.classList.add('hidden');
        }).catch(err => {
            console.log('Autoplay prevented:', err);
        });
    }, 500);
});

// Prevent scroll when opening cover is visible
document.body.classList.add('no-scroll');

// Floating music button toggle
floatingMusic.addEventListener('click', () => {
    if (isMusicPlaying) {
        bgMusic.pause();
        musicIconPlaying.classList.add('hidden');
        musicIconPaused.classList.remove('hidden');
    } else {
        bgMusic.play();
        musicIconPlaying.classList.remove('hidden');
        musicIconPaused.classList.add('hidden');
    }
    isMusicPlaying = !isMusicPlaying;
});

// ============================================
// COUNTDOWN TIMER
// ============================================

const countdownDate = new Date('February 14, 2026 18:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance < 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Update countdown every second
updateCountdown();
setInterval(updateCountdown, 1000);

// ============================================
// SCROLL TO TOP BUTTON
// ============================================

const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============================================
// ============================================
// GALLERY SLIDER (Luxury Matting Style)
// ============================================

const sliderTrack = document.getElementById('sliderTrack');
const sliderPrev = document.getElementById('sliderPrev');
const sliderNext = document.getElementById('sliderNext');
const sliderDots = document.getElementById('sliderDots');
const sliderItems = document.querySelectorAll('.slider-item');

let currentSlide = 0;
const totalSlides = sliderItems.length;

// Create dots
if (sliderDots) {
    sliderDots.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        sliderDots.appendChild(dot);
    }
}

const dots = document.querySelectorAll('.slider-dot');

function updateSlider() {
    if (sliderTrack) {
        sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    // Update dots
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function goToSlide(index) {
    currentSlide = index;
    updateSlider();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
}

if (sliderNext) sliderNext.addEventListener('click', nextSlide);
if (sliderPrev) sliderPrev.addEventListener('click', prevSlide);

// Auto-play slider (optional)
let autoplayInterval = setInterval(nextSlide, 5000);

// Pause autoplay on hover
const sliderContainer = document.querySelector('.slider-container');
if (sliderContainer) {
    sliderContainer.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
    });

    sliderContainer.addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(nextSlide, 5000);
    });

    // Touch/Swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    sliderContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    sliderContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchEndX < touchStartX - 50) nextSlide();
        if (touchEndX > touchStartX + 50) prevSlide();
    });
}

// ============================================
// LIGHTBOX
// ============================================

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');
const mattingImages = document.querySelectorAll('.matting-img');

mattingImages.forEach((img) => {
    img.addEventListener('click', () => {
        lightbox.classList.add('active');
        lightboxImage.src = img.src;
        document.body.style.overflow = 'hidden';
    });
});

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

lightboxClose.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') closeLightbox();
});

// ============================================
// RSVP FORM
// ============================================

// ============================================
// DATABASE INTEGRATION (FIREBASE)
// ============================================

// Firebase Configuration (Placeholder - Replace with your own for personal use)
const firebaseConfig = {
    databaseURL: "https://undangan-dokter-default-rtdb.firebaseio.com/" // Placeholder DB
};

// Initialize Firebase
if (typeof firebase !== 'undefined') {
    firebase.initializeApp(firebaseConfig);
    const database = firebase.database();
    const messagesRef = database.ref('messages');

    const rsvpForm = document.getElementById('rsvpForm');
    const nameInput = document.getElementById('nameInput');
    const messageInput = document.getElementById('messageInput');
    const messagesList = document.getElementById('messagesList');

    // Handle Form Submission
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = nameInput.value.trim();
            const message = messageInput.value.trim();

            if (name && message) {
                // Push to Firebase
                messagesRef.push({
                    name: name,
                    message: message,
                    timestamp: Date.now()
                }).then(() => {
                    // Reset Form
                    nameInput.value = '';
                    messageInput.value = '';

                    // Show confirmation (optional)
                    const btn = rsvpForm.querySelector('button');
                    const originalText = btn.innerHTML;
                    btn.innerHTML = '✅ Terkirim!';
                    btn.style.background = '#28a745';
                    setTimeout(() => {
                        btn.innerHTML = originalText;
                        btn.style.background = '';
                    }, 3000);
                }).catch((error) => {
                    console.error("Error saving message:", error);
                    alert("Gagal mengirim pesan. Silakan coba lagi.");
                });
            }
        });
    }

    // Listen for Real-time Updates
    if (messagesList) {
        messagesList.innerHTML = '<p class="text-center">Memuat ucapan...</p>';

        messagesRef.on('value', (snapshot) => {
            const data = snapshot.val();
            messagesList.innerHTML = '';

            if (data) {
                const sortedMessages = Object.entries(data)
                    .map(([id, msg]) => msg)
                    .sort((a, b) => b.timestamp - a.timestamp); // Sort by newest

                sortedMessages.forEach(msg => {
                    const msgElement = document.createElement('div');
                    msgElement.classList.add('message-item');
                    msgElement.innerHTML = `
                        <div class="message-header">
                            <span class="message-name">${escapeHTML(msg.name)}</span>
                            <span class="message-time">${formatTime(msg.timestamp)}</span>
                        </div>
                        <p class="message-text">${escapeHTML(msg.message)}</p>
                    `;
                    messagesList.appendChild(msgElement);
                });
            } else {
                messagesList.innerHTML = '<p class="text-center opacity-60">Belum ada ucapan</p>';
            }
        });
    }
}

// Utility: Escape HTML to prevent XSS
function escapeHTML(str) {
    const p = document.createElement('p');
    p.textContent = str;
    return p.innerHTML;
}

// Utility: Format Timestamp
function formatTime(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.querySelectorAll('.detail-card, .timeline-item, .countdown-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// PARALLAX EFFECT (Disabled for smoother scroll)
// ============================================

// Parallax effect disabled for better scroll performance
// Uncomment below if you want parallax effect back

// window.addEventListener('scroll', () => {
//     const scrolled = window.pageYOffset;
//     const hero = document.querySelector('.hero');
//     
//     if (hero && scrolled < window.innerHeight) {
//         hero.style.transform = `translateY(${scrolled * 0.5}px)`;
//     }
// });

// ============================================
// SCROLL REVEAL ANIMATIONS
// ============================================

const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.1
});

revealElements.forEach(el => revealObserver.observe(el));

// ============================================
// SHARE FUNCTIONALITY (Web Share API)
// ============================================

// You can add a share button if needed
function shareInvitation() {
    if (navigator.share) {
        navigator.share({
            title: 'Syukuran Sumpah Dokter - Dr. Abraham Daniel Boltal S.Ked',
            text: 'Dengan penuh syukur, kami mengundang Anda untuk merayakan pencapaian luar biasa ini',
            url: window.location.href
        }).catch(err => console.log('Error sharing:', err));
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(window.location.href);
        alert('Link undangan telah disalin!');
    }
}

// ============================================
// CONSOLE MESSAGE
// ============================================

console.log('%c🎉 Selamat atas pencapaian luar biasa ini! 👨‍⚕️', 'color: #0066CC; font-size: 20px; font-weight: bold;');
console.log('%cDr. Abraham Daniel Boltal S.Ked', 'color: #D4AF37; font-size: 16px;');
