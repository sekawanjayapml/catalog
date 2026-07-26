// Data produk (semua produk)
const allProducts = [
    {
        category: "granit lantai",
        image: "https://i.imgur.com/fBbMjhR.jpeg",
        name: "GRANIT INFINITI ROMANIA GREY",
        price: "Rp 165.000 / dus",
        description: "Granit Infiniti Romania Grey 60 x 60 adalah ubin granit premium yang menonjolkan warna dasar abu-abu yang elegan, dengan ciri khas berupa corak urat (vein) alami yang tersebar secara acak (random) menyerupai tekstur batu marmer, seringkali dengan sentuhan warna putih atau abu-abu yang lebih gelap/terang, memberikan kesan kedalaman dan kemewahan yang dinamis. Granit ini sangat diminati dalam finishing Polished (mengkilap) untuk memaksimalkan kilau dan coraknya, menjadikannya pilihan ideal untuk desain interior modern minimalis pada lantai, dinding, maupun countertop, berkat tampilannya yang kontemporer sekaligus daya tahannya yang kuat.",
        features: ["Tampilan Premium", "Glazed Polish", "Daya Tahan Tinggi", "Aplikasi Fleksibel"],
        badge: "new"
    },
    {
        category: "granit lantai",
        image: "https://i.imgur.com/8V58O25.jpeg",
        name: "GRANIT INFINITI REVOLVER GREY",
        price: "Rp 165.000 / dus",
        description: "Granit Infiniti Revolver Grey 60 x 60 adalah ubin granit yang memiliki daya tarik elegan dan timeless karena desainnya meniru motif Marmer Carrara atau Calacatta, di mana warna dasarnya adalah abu-abu muda yang cenderung cerah atau mendekati putih, dihiasi dengan urat-urat halus berwarna abu-abu lembut yang menyebar secara acak. Finishingnya yang paling umum adalah Glazed Polish sehingga permukaannya sangat mengkilap (glowing), membuat ruangan terlihat bersih, terang, dan luas, menjadikannya pilihan favorit untuk desain interior bergaya klasik modern yang menginginkan tampilan mewah nan soft dan tidak terlalu mencolok seperti varian grey lainnya.",
        features: ["Tampilan Premium", "Glazed Polish", "Daya Tahan Tinggi", "Aplikasi Fleksibel"],
        badge: "bestseller"
    },
    {
        category: "granit lantai",
        image: "https://i.imgur.com/rt7zAa1.jpeg",
        name: "GRANIT INFINITI ROYSTON GREY",
        price: "Rp 165.000 / dus",
        description: "Granit Infiniti Royston Grey 60 x 60 adalah salah satu varian granit premium dari Infiniti yang berada dalam spektrum warna abu-abu muda hingga medium, seringkali diklasifikasikan dengan nuansa warna yang sedang (tidak terlalu gelap seperti Romania, tapi tidak seputih Revolver), dan memiliki ciri khas motif yang cenderung minimalis atau monokrom dengan tekstur urat atau flecks yang sangat halus dan samar, memberikan kesan polos yang bertekstur. Granit ini hadir dengan finishing Glazed Polished untuk memaksimalkan pantulan cahaya dan tampilan yang clean, menghasilkan lantai yang elegan, bersih, dan sangat cocok untuk aplikasi pada ruangan berkonsep minimalis kontemporer yang membutuhkan warna netral sebagai base yang tenang.",
        features: ["Tampilan Premium", "Glazed Polish", "Daya Tahan Tinggi", "Aplikasi Fleksibel"],
        badge: "new"
    },
    {
        category: "granit lantai",
        image: "https://i.imgur.com/IWYcK5Y.jpeg",
        name: "GRANIT INFINITI RAIVEN GOLD",
        price: "Rp 180.000 / dus",
        description: "Granit Infiniti Raiven Gold 60 x 60 adalah glazed porcelain tile yang didesain untuk menciptakan tampilan lantai atau dinding yang super mewah dengan mengadopsi motif marmer premium yang didominasi oleh perpaduan warna dasar putih cerah atau krem lembut dengan urat (vein) yang tebal dan mencolok berwarna emas (gold) dan cokelat tipis; urat emas ini memberikan kesan glamour dan hangat yang kuat, menjadikannya sangat berbeda dari seri grey yang minimalis. Granit ini umumnya memiliki finishing Glazed Polish (glossy) yang membuat permukaannya memantulkan cahaya secara dramatis, sehingga cocok banget digunakan sebagai statement floor di ruang tamu utama atau area lobi yang ingin menonjolkan kesan sangat elegan dan berkelas.",
        features: ["Tampilan Premium", "Glazed Polish", "Daya Tahan Tinggi", "Aplikasi Fleksibel"],
        badge: ""
    },
    {
        category: "keramik lantai",
        image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?fit=crop&w=600&h=400",
        name: "KERAMIK MULIA GILMORE GREY",
        price: "Rp 82.000 / dus",
        description: "Keramik lantai dengan pola geometris modern yang unik dan eye-catching. Tersedia dalam berbagai kombinasi warna yang dapat disesuaikan dengan tema interior Anda.",
        features: ["Pola geometris modern", "Berbagai pilihan warna", "Anti-selip", "Mudah dipasang"],
        badge: "sale"
    },
    {
        category: "granit lantai",
        image: "https://images.unsplash.com/photo-1598928635260-7d5dc0f240bd?fit=crop&w=600&h=400",
        name: "Granit Lantai Abu-abu Polos",
        price: "Rp 165.000 / dus",
        description: "Granit lantai berwarna abu-abu polos dengan tekstur halus. Cocok untuk gaya interior industrial and minimalis. Sangat kuat dan tahan terhadap beban berat.",
        features: ["Warna abu-abu netral", "Tekstur halus", "Tahan beban berat", "Cocok untuk interior industrial"],
        badge: ""
    },
    {
        category: "keramik dinding",
        image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?fit=crop&w=600&h=400",
        name: "Keramik Dinding Putih Polos",
        price: "Rp 75.000 / dusm²",
        description: "Keramik dinding putih polos dengan permukaan halus. Cocok untuk semua jenis ruangan. Mudah dibersihkan dan tahan lama dengan kualitas terjamin.",
        features: ["Warna netral", "Mudah dipadukan", "Permukaan halus", "Hemat budget"],
        badge: "sale"
    },
    {
        category: "granit lantai",
        image: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?fit=crop&w=600&h=400",
        name: "Granit Lantai Coklat Mocha",
        price: "Rp 155.000 / dusm²",
        description: "Granit lantai warna coklat mocha yang hangat. Memberikan kesan elegan dan cozy pada ruangan. Tahan terhadap goresan dan mudah dibersihkan.",
        features: ["Warna coklat mocha", "Tahan lama", "Permukaan anti-selip", "Easy maintenance"],
        badge: "new"
    },
    {
        category: "keramik lantai",
        image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?fit=crop&w=600&h=400",
        name: "Keramik Lantai Batu Alam",
        price: "Rp 75.000 / dus",
        description: "Keramik lantai dengan motif batu alam yang natural. Cocok untuk exterior dan interior. Memberikan kesan alami dan segar pada setiap ruangan.",
        features: ["Motif batu alam", "Tahan cuaca", "Anti-selip", "Natural look"],
        badge: ""
    },
    {
        category: "granit lantai",
        image: "https://i.imgur.com/oZLKGcc.jpeg",
        name: "GRANIT INFINITI RILLAN BLACK",
        price: "Rp 195.000 / dus",
        description: "Granit Infiniti Rillan Black 60 x 60 adalah granite tile dengan warna dasar hitam pekat yang memberikan kesan dramatis dan mewah, di mana motifnya berupa urat marmer yang tipis, halus, dan elegan, seringkali muncul dengan sentuhan warna putih atau abu-abu muda di atas latar belakang hitam tersebut, memberikan kontras yang tinggi dan visual yang sangat berkelas. Granit ini umumnya hadir dengan finishing Glossy (mengkilap) untuk menonjolkan kedalaman warna hitamnya dan memancarkan kilau layaknya cermin, sangat ideal untuk aplikasi lantai atau dinding di ruang yang ingin menonjolkan konsep industrial, modern-minimalis, atau gaya classic-dark, memberikan fondasi yang kuat dan powerful dalam desain interior.",
        features: ["Tampilan Premium", "Glazed Polish", "Daya Tahan Tinggi", "Aplikasi Fleksibel"],
        badge: "premium"
    },
    {
        category: "granit lantai",
        image: "https://images.unsplash.com/photo-1618220179428-22790b461013?fit=crop&w=600&h=400",
        name: "GRANIT VELLINO LUMINO",
        price: "Rp 125.000 / dus",
        description: "Granit Vellino Lumino (atau sering disebut Luminous White) 60 x 60 adalah glazed porcelain tile yang menawarkan kemewahan terang dengan base color putih bersih atau cream yang lembut, dan menonjolkan motif urat marmer yang halus berwarna abu-abu cerah, menyerupai marmer Calacatta atau Carrara, tapi dengan tingkat kelembutan yang lebih tinggi. Keunggulan utamanya terletak pada finishing Glossy (kilap) yang optimal, membuat ubin ini memantulkan cahaya dengan maksimal, sehingga memberikan ilusi ruangan yang sangat terang dan luas. Karena desainnya yang timeless dan netral, granit ini menjadi pilihan top buat yang mencari tampilan elegan minimalis untuk ruang keluarga, ruang tamu, atau hallway tanpa kesan yang terlalu ramai atau bold.",
        features: ["Tampilan Bersih", "Glazed Polish", "Daya Tahan Tinggi", "Aplikasi Fleksibel"],
        badge: "new"
    },
    {
        category: "granit lantai",
        image: "https://images.unsplash.com/photo-1579894329913-92c48d977f54?fit=crop&w=600&h=400",
        name: "Granit Lantai White Carrara",
        price: "Rp 165.000 / m²",
        description: "Granit lantai dengan motif Carrara putih yang elegan. Memberikan kesan luas dan bersih pada ruangan. Cocok untuk gaya interior modern dan minimalis.",
        features: ["Motif Carrara", "Kesan luas", "Elegan", "Easy maintenance"],
        badge: "bestseller"
    }
];

// Data untuk fitur-fitur
const featuresData = {
    quality: {
        icon: '<i class="fas fa-award"></i>',
        title: 'Kualitas Terjamin',
        description: 'Produk kami terbuat dari bahan berkualitas tinggi dengan standar internasional. Setiap produk melalui proses kontrol kualitas yang ketat untuk memastikan kepuasan pelanggan.'
    },
    shipping: {
        icon: '<i class="fas fa-truck"></i>',
        title: 'Gratis Pengiriman',
        description: 'Kami memberikan gratis biaya pengiriman untuk area tertentu tanps minimum pembelian. Area cakupan meliputi Pemalang dan sekitarnya dengan syarat dan ketentuan berlaku.'
    },
    price: {
        icon: '<i class="fas fa-tools"></i>',
        title: 'Harga Terjangkau',
        description: 'Kami menawarkan harga terbaik tanpa mengorbankan kualitas produk. Dapatkan produk berkualitas dengan harga kompetitif yang sesuai dengan budget Anda.'
    },
    service: {
        icon: '<i class="fas fa-medal"></i>',
        title: 'Layanan 24/7',
        description: 'Tim customer service kami siap membantu Anda kapan saja melalui WhatsApp. Konsultasi gratis untuk pemilihan produk yang tepat untuk kebutuhan Anda.'
    }
};

// DOM Elements
const header = document.getElementById('header');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const backToTop = document.getElementById('backToTop');
const loader = document.getElementById('loader');
const productModal = document.getElementById('productModal');
const closeModal = document.getElementById('closeModal');
const modalBody = document.getElementById('modalBody');
const filterButtons = document.querySelectorAll('.filter-button');
const productGrid = document.getElementById('productGrid');
const loadMoreButton = document.getElementById('loadMoreButton');
const paginationContainer = document.getElementById('paginationContainer');
const contactForm = document.getElementById('contactForm');
const cookiesBanner = document.getElementById('cookiesBanner');
const acceptCookies = document.getElementById('acceptCookies');
const cookieSettings = document.getElementById('cookieSettings');
const cookiesModal = document.getElementById('cookiesModal');
const cookiesClose = document.getElementById('cookiesClose');
const saveCookieSettings = document.getElementById('saveCookieSettings');
const acceptAllFromModal = document.getElementById('acceptAllFromModal');
const analyticsCookies = document.getElementById('analyticsCookies');
const marketingCookies = document.getElementById('marketingCookies');

// Elements untuk feature modal
const featureModal = document.getElementById('featureModal');
const featureModalIcon = document.getElementById('featureModalIcon');
const featureModalTitle = document.getElementById('featureModalTitle');
const featureModalDescription = document.getElementById('featureModalDescription');
const closeFeatureModal = document.getElementById('closeFeatureModal');
const closeFeatureModalButton = document.getElementById('closeFeatureModalButton');

// Variabel state
let currentPage = 1;
const productsPerPage = 6;
let currentFilter = 'all';
let filteredProducts = [...allProducts];

// Fungsi render produk
function renderProducts(productsToRender, page = 1) {
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToShow = productsToRender.slice(startIndex, endIndex);
    
    productGrid.innerHTML = '';
    
    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.setAttribute('data-category', product.category);
        productCard.setAttribute('data-product', JSON.stringify(product));
        
        let badgeHTML = '';
        if (product.badge) {
            let badgeClass = '';
            let badgeText = '';
            
            switch(product.badge) {
                case 'new':
                    badgeClass = 'new';
                    badgeText = 'Baru';
                    break;
                case 'bestseller':
                    badgeClass = '';
                    badgeText = 'Terlaris';
                    break;
                case 'sale':
                    badgeClass = 'new';
                    badgeText = 'Hemat';
                    break;
                case 'premium':
                    badgeClass = '';
                    badgeText = 'Premium';
                    break;
            }
            
            badgeHTML = `<span class="product-badge ${badgeClass}">${badgeText}</span>`;
        }
        
        productCard.innerHTML = `
            ${badgeHTML}
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image">
            </div>
            <div class="product-info">
                <h4>${product.name}</h4>
                <span class="price">${product.price}</span>
                <div class="product-actions">
                    <button class="detail-button">Detail Produk</button>
                    <button class="whatsapp-button"><i class="fab fa-whatsapp"></i> WhatsApp</button>
                </div>
            </div>
        `;
        
        productGrid.appendChild(productCard);
    });
    
    const totalPages = Math.ceil(productsToRender.length / productsPerPage);
    if (page >= totalPages) {
        loadMoreButton.style.display = 'none';
    } else {
        loadMoreButton.style.display = 'block';
        loadMoreButton.disabled = false;
        loadMoreButton.textContent = 'Lihat Produk Lainnya';
    }
    
    renderPagination(totalPages, page);
}

function renderPagination(totalPages, currentPage) {
    paginationContainer.innerHTML = '';
    if (totalPages <= 1) return;
    
    const prevButton = document.createElement('button');
    prevButton.innerHTML = '&laquo;';
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) changePage(currentPage - 1);
    });
    paginationContainer.appendChild(prevButton);
    
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.classList.toggle('active', i === currentPage);
        pageButton.addEventListener('click', () => changePage(i));
        paginationContainer.appendChild(pageButton);
    }
    
    const nextButton = document.createElement('button');
    nextButton.innerHTML = '&raquo;';
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) changePage(currentPage + 1);
    });
    paginationContainer.appendChild(nextButton);
}

function changePage(page) {
    currentPage = page;
    renderProducts(filteredProducts, currentPage);
    window.scrollTo({ top: productGrid.offsetTop - 100, behavior: 'smooth' });
}

function filterProducts(filterValue) {
    currentFilter = filterValue;
    currentPage = 1;
    
    if (filterValue === 'all') {
        filteredProducts = [...allProducts];
    } else {
        filteredProducts = allProducts.filter(product => 
            product.category.includes(filterValue)
        );
    }
    
    renderProducts(filteredProducts, currentPage);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    paginationContainer.style.display = totalPages <= 1 ? 'none' : 'flex';
}

// Event listener filter
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        filterProducts(button.getAttribute('data-filter'));
    });
});

// Load more
loadMoreButton.addEventListener('click', () => {
    currentPage++;
    renderProducts(filteredProducts, currentPage);
});

// DOM ready
document.addEventListener('DOMContentLoaded', () => {
    filterProducts('all');
    setTimeout(() => loader.classList.remove('active'), 1000);
    showCookiesBanner();

    // Tambah tombol close (X) di menu mobile
    const navMenuEl = document.querySelector('.nav-menu');
    if (navMenuEl && !navMenuEl.querySelector('.close-menu-btn')) {
        const closeBtn = document.createElement('button');
        closeBtn.className = 'close-menu-btn';
        closeBtn.innerHTML = '&times;';
        closeBtn.setAttribute('aria-label', 'Tutup menu');
        navMenuEl.prepend(closeBtn);
        closeBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            const toggle = document.querySelector('.menu-toggle');
            const menu = document.querySelector('.nav-menu');
            if (toggle && menu) {
                toggle.classList.remove('active');
                menu.classList.remove('active');
            }
        });
    }
});

// Sticky header & back to top
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 100);
    backToTop.classList.toggle('active', window.scrollY > 500);
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Tutup menu saat klik link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = header.offsetHeight;
            window.scrollTo({
                top: targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight,
                behavior: 'smooth'
            });
        }
    });
});

backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Modal produk
function showProductModal(productData) {
    modalBody.innerHTML = `
        <div class="modal-image-container">
            <img src="${productData.image}" alt="${productData.name}" class="modal-image">
        </div>
        <div class="modal-info">
            <h3>${productData.name}</h3>
            <span class="modal-price">${productData.price}</span>
            <p class="modal-description">${productData.description}</p>
            <div class="modal-features">
                ${productData.features.map(f => `<div class="modal-feature"><i class="fas fa-check"></i><span>${f}</span></div>`).join('')}
            </div>
            <div class="modal-actions">
                <a href="https://wa.me/6288216124228?text=Saya%20tertarik%20dengan%20produk%20${encodeURIComponent(productData.name)}%20dari%20SEKAWAN%20JAYA" class="cta-button" target="_blank">
                    <i class="fab fa-whatsapp"></i> Pesan via WhatsApp
                </a>
                <button class="cta-button secondary" id="closeModalButton">
                    <i class="fas fa-times"></i> Tutup
                </button>
            </div>
        </div>
    `;
    productModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    document.getElementById('closeModalButton').addEventListener('click', closeModalFunction);
}

function closeModalFunction() {
    productModal.classList.remove('active');
    document.body.style.overflow = '';
}

function showFeatureModal(featureKey) {
    const feature = featuresData[featureKey];
    if (feature) {
        featureModalIcon.innerHTML = feature.icon;
        featureModalTitle.textContent = feature.title;
        featureModalDescription.textContent = feature.description;
        featureModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeFeatureModalFunction() {
    featureModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Event delegation untuk tombol produk
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('detail-button') || e.target.closest('.detail-button')) {
        const button = e.target.classList.contains('detail-button') ? e.target : e.target.closest('.detail-button');
        const productCard = button.closest('.product-card');
        if (productCard && productCard.getAttribute('data-product')) {
            try {
                const productData = JSON.parse(productCard.getAttribute('data-product'));
                showProductModal(productData);
            } catch (error) {
                alert('Terjadi kesalahan saat memuat detail produk.');
            }
        }
    }
    
    if (e.target.classList.contains('whatsapp-button') || e.target.closest('.whatsapp-button')) {
        const button = e.target.classList.contains('whatsapp-button') ? e.target : e.target.closest('.whatsapp-button');
        const productCard = button.closest('.product-card');
        if (productCard && productCard.getAttribute('data-product')) {
            try {
                const productData = JSON.parse(productCard.getAttribute('data-product'));
                window.open(`https://wa.me/6288216124228?text=Saya%20tertarik%20dengan%20produk%20${encodeURIComponent(productData.name)}%20dari%20SEKAWAN%20JAYA`, '_blank');
            } catch (error) {
                window.open('https://wa.me/6288216124228', '_blank');
            }
        }
    }
    
    if (e.target.closest('.feature-card') && window.innerWidth <= 768) {
        const featureCard = e.target.closest('.feature-card');
        const featureKey = featureCard.getAttribute('data-feature');
        if (featureKey) {
            e.preventDefault();
            showFeatureModal(featureKey);
        }
    }
});

closeModal.addEventListener('click', closeModalFunction);
closeFeatureModal.addEventListener('click', closeFeatureModalFunction);
closeFeatureModalButton.addEventListener('click', closeFeatureModalFunction);

productModal.addEventListener('click', function(e) {
    if (e.target === productModal) closeModalFunction();
});
featureModal.addEventListener('click', function(e) {
    if (e.target === featureModal) closeFeatureModalFunction();
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (productModal.classList.contains('active')) closeModalFunction();
        if (featureModal.classList.contains('active')) closeFeatureModalFunction();
    }
});

// Form
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    loader.classList.add('active');
    setTimeout(() => {
        alert('Terima kasih! Pesan Anda telah berhasil dikirim. Kami akan menghubungi Anda segera.');
        contactForm.reset();
        loader.classList.remove('active');
    }, 1500);
});

// Animasi scroll
const animatedElements = document.querySelectorAll('.animate__animated');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__fadeInUp');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });
animatedElements.forEach(el => {
    el.classList.remove('animate__fadeInUp');
    observer.observe(el);
});

// Cookies
function showCookiesBanner() {
    if (!localStorage.getItem('cookiesAccepted')) {
        setTimeout(() => cookiesBanner.classList.add('active'), 2000);
    }
}

function acceptAllCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    localStorage.setItem('analyticsCookies', 'true');
    localStorage.setItem('marketingCookies', 'true');
    cookiesBanner.classList.remove('active');
    cookiesModal.classList.remove('active');
}

function saveCookiePreferences() {
    localStorage.setItem('cookiesAccepted', 'true');
    localStorage.setItem('analyticsCookies', analyticsCookies.checked);
    localStorage.setItem('marketingCookies', marketingCookies.checked);
    cookiesModal.classList.remove('active');
    cookiesBanner.classList.remove('active');
}

function closeCookiesBanner() {
    cookiesBanner.classList.remove('active');
}

acceptCookies.addEventListener('click', acceptAllCookies);
cookieSettings.addEventListener('click', () => cookiesModal.classList.add('active'));
cookiesClose.addEventListener('click', closeCookiesBanner);
saveCookieSettings.addEventListener('click', saveCookiePreferences);
acceptAllFromModal.addEventListener('click', acceptAllCookies);

cookiesModal.addEventListener('click', (e) => {
    if (e.target === cookiesModal) cookiesModal.classList.remove('active');
});
