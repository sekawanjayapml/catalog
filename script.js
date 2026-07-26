// ============================================================
// SCRIPT.JS - TERINTEGRASI DENGAN GOOGLE SHEETS
// DENGAN FORMAT HARGA OTOMATIS + UKURAN + KATEGORI BERJEJER
// ============================================================

// ===== KONFIGURASI =====
const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-g2_pLN1ojcW1B3U-aTOPqp_mT9zXWdEooCpj8HpDc5RpypnfEx4DxEBEEyVd5Z1RlFGAy_g2glAW/pub?output=csv'; // <-- GANTI!

// ============================================================
// FUNGSI FORMAT HARGA
// ============================================================
function formatPrice(value) {
    if (!value) return '';
    if (/[Rp$€£]/.test(value)) return value;
    const clean = value.replace(/[^0-9,]/g, '');
    const number = parseFloat(clean.replace(',', '.'));
    if (isNaN(number)) return value;
    const formatted = new Intl.NumberFormat('id-ID').format(number);
    return `Rp ${formatted}`;
}

// ============================================================
// 1. AMBIL DATA DARI GOOGLE SHEETS
// ============================================================
let allProducts = [];
let currentPage = 1;
const productsPerPage = 6;
let currentFilter = 'all';
let filteredProducts = [];

async function fetchProductsFromSheet() {
    try {
        const response = await fetch(SHEET_URL);
        const csvText = await response.text();
        const rows = csvText.split('\n').filter(row => row.trim() !== '');
        
        const headers = rows[0].split(',').map(h => h.trim().toLowerCase());
        const required = ['name', 'price', 'description', 'image', 'category', 'badge', 'features', 'size'];
        const missing = required.filter(col => !headers.includes(col));
        if (missing.length > 0) {
            console.error('Kolom yang hilang di Sheets:', missing.join(', '));
            alert('Error: Kolom di Google Sheets tidak lengkap. Pastikan ada: ' + required.join(', '));
            return [];
        }

        const products = [];
        for (let i = 1; i < rows.length; i++) {
            const values = rows[i].split(',').map(v => v.trim());
            if (values.length < headers.length) continue;
            
            const obj = {};
            headers.forEach((header, index) => {
                let val = values[index] || '';
                if (header === 'features') {
                    obj[header] = val ? val.split(',').map(f => f.trim()) : [];
                } else {
                    obj[header] = val;
                }
            });
            
            if (obj.name) {
                products.push(obj);
            }
        }
        return products;
    } catch (error) {
        console.error('Gagal mengambil data dari Google Sheets:', error);
        alert('Gagal memuat data produk. Periksa koneksi internet dan URL Sheets.');
        return [];
    }
}

// ============================================================
// 2. RENDER PRODUK (dengan tata letak baru)
// ============================================================
function renderProducts(productsToRender, page = 1) {
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToShow = productsToRender.slice(startIndex, endIndex);
    
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';
    
    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.setAttribute('data-category', product.category || '');
        productCard.setAttribute('data-product', JSON.stringify(product));
        
        let badgeHTML = '';
        if (product.badge) {
            let badgeClass = '';
            let badgeText = '';
            switch(product.badge.toLowerCase()) {
                case 'new': badgeClass = 'new'; badgeText = 'Baru'; break;
                case 'bestseller': badgeClass = ''; badgeText = 'Terlaris'; break;
                case 'sale': badgeClass = 'new'; badgeText = 'Hemat'; break;
                case 'premium': badgeClass = ''; badgeText = 'Premium'; break;
                default: badgeText = product.badge;
            }
            badgeHTML = `<span class="product-badge ${badgeClass}">${badgeText}</span>`;
        }
        
        const imageUrl = product.image || 'https://via.placeholder.com/400x300?text=No+Image';
        const priceDisplay = formatPrice(product.price);
        
        // Category dengan kurung, size di samping
        const categoryDisplay = product.category ? `<span class="product-category">(${product.category})</span>` : '';
        const sizeDisplay = product.size ? `<span class="product-size">${product.size}</span>` : '';
        
        productCard.innerHTML = `
            ${badgeHTML}
            <div class="product-image-container">
                <img src="${imageUrl}" alt="${product.name}" class="product-image" loading="lazy">
            </div>
            <div class="product-info">
                <h4>${product.name}</h4>
                <div class="product-meta">
                    ${categoryDisplay}
                    ${sizeDisplay}
                </div>
                <span class="price">${priceDisplay}</span>
                <div class="product-actions">
                    <button class="detail-button">Detail Produk</button>
                    <button class="whatsapp-button"><i class="fab fa-whatsapp"></i> WhatsApp</button>
                </div>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
    
    const totalPages = Math.ceil(productsToRender.length / productsPerPage);
    const loadMoreButton = document.getElementById('loadMoreButton');
    if (page >= totalPages || totalPages === 0) {
        loadMoreButton.style.display = 'none';
    } else {
        loadMoreButton.style.display = 'block';
        loadMoreButton.disabled = false;
        loadMoreButton.textContent = 'Lihat Produk Lainnya';
    }
    
    renderPagination(totalPages, page);
}

function renderPagination(totalPages, currentPage) {
    const paginationContainer = document.getElementById('paginationContainer');
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
    window.scrollTo({ top: document.getElementById('productGrid').offsetTop - 100, behavior: 'smooth' });
}

// ============================================================
// FILTER (CASE-INSENSITIVE)
// ============================================================
function filterProducts(filterValue) {
    currentFilter = filterValue;
    currentPage = 1;
    if (filterValue === 'all') {
        filteredProducts = [...allProducts];
    } else {
        const lowerFilter = filterValue.toLowerCase();
        filteredProducts = allProducts.filter(product => 
            product.category && product.category.toLowerCase().includes(lowerFilter)
        );
    }
    renderProducts(filteredProducts, currentPage);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    document.getElementById('paginationContainer').style.display = totalPages <= 1 ? 'none' : 'flex';
}

// ============================================================
// 3. EVENT LISTENER & INISIALISASI
// ============================================================
document.addEventListener('DOMContentLoaded', async () => {
    const loader = document.getElementById('loader');
    loader.classList.add('active');
    
    allProducts = await fetchProductsFromSheet();
    
    if (allProducts.length === 0) {
        console.warn('Tidak ada data dari Sheets, gunakan data cadangan jika ada.');
    }
    
    filteredProducts = [...allProducts];
    renderProducts(filteredProducts, 1);
    loader.classList.remove('active');
    
    document.querySelectorAll('.filter-button').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.filter-button').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterProducts(button.getAttribute('data-filter'));
        });
    });
    
    document.getElementById('loadMoreButton').addEventListener('click', () => {
        currentPage++;
        renderProducts(filteredProducts, currentPage);
    });
    
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
    });
    
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                const key = this.getAttribute('data-feature');
                if (key) showFeatureModal(key);
            }
        });
    });
});

// ============================================================
// 4. FUNGSI MODAL (dengan kategori dan ukuran)
// ============================================================
function showProductModal(productData) {
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');
    const imageUrl = productData.image || 'https://via.placeholder.com/400x300?text=No+Image';
    const priceDisplay = formatPrice(productData.price);
    const sizeDisplay = productData.size ? `<p><strong>Ukuran:</strong> ${productData.size}</p>` : '';
    const categoryDisplay = productData.category ? `<p><strong>Kategori:</strong> ${productData.category}</p>` : '';
    
    modalBody.innerHTML = `
        <div class="modal-image-container">
            <img src="${imageUrl}" alt="${productData.name}" class="modal-image">
        </div>
        <div class="modal-info">
            <h3>${productData.name}</h3>
            <span class="modal-price">${priceDisplay}</span>
            ${sizeDisplay}
            ${categoryDisplay}
            <p class="modal-description">${productData.description || 'Deskripsi produk belum tersedia.'}</p>
            <div class="modal-features">
                ${(productData.features || []).map(f => `<div class="modal-feature"><i class="fas fa-check"></i><span>${f}</span></div>`).join('')}
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
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    document.getElementById('closeModalButton').addEventListener('click', closeModalFunction);
}

function closeModalFunction() {
    document.getElementById('productModal').classList.remove('active');
    document.body.style.overflow = '';
}

// Fitur modal (tetap)
const featuresData = {
    quality: {
        icon: '<i class="fas fa-award"></i>',
        title: 'Kualitas Terjamin',
        description: 'Produk kami terbuat dari bahan berkualitas tinggi dengan standar internasional.'
    },
    shipping: {
        icon: '<i class="fas fa-truck"></i>',
        title: 'Gratis Pengiriman',
        description: 'Gratis biaya pengiriman untuk area tertentu tanpa minimum pembelian.'
    },
    price: {
        icon: '<i class="fas fa-money-bill-wave"></i>',
        title: 'Harga Terjangkau',
        description: 'Kami menawarkan harga terbaik tanpa mengorbankan kualitas produk.'
    },
    service: {
        icon: '<i class="fas fa-clock"></i>',
        title: 'Layanan 24/7',
        description: 'Tim customer service kami siap membantu Anda kapan saja melalui WhatsApp.'
    }
};

function showFeatureModal(key) {
    const feature = featuresData[key];
    if (!feature) return;
    document.getElementById('featureModalIcon').innerHTML = feature.icon;
    document.getElementById('featureModalTitle').textContent = feature.title;
    document.getElementById('featureModalDescription').textContent = feature.description;
    document.getElementById('featureModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeFeatureModalFunction() {
    document.getElementById('featureModal').classList.remove('active');
    document.body.style.overflow = '';
}

document.getElementById('closeModal').addEventListener('click', closeModalFunction);
document.getElementById('closeFeatureModal').addEventListener('click', closeFeatureModalFunction);
document.getElementById('closeFeatureModalButton').addEventListener('click', closeFeatureModalFunction);
document.getElementById('productModal').addEventListener('click', function(e) {
    if (e.target === this) closeModalFunction();
});
document.getElementById('featureModal').addEventListener('click', function(e) {
    if (e.target === this) closeFeatureModalFunction();
});
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (document.getElementById('productModal').classList.contains('active')) closeModalFunction();
        if (document.getElementById('featureModal').classList.contains('active')) closeFeatureModalFunction();
    }
});

// ============================================================
// 5. FUNGSI LAIN (BACK TO TOP, HEADER, FORM, COOKIES)
// ============================================================
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    const backToTop = document.getElementById('backToTop');
    header.classList.toggle('scrolled', window.scrollY > 100);
    backToTop.classList.toggle('active', window.scrollY > 500);
});

document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelector('.menu-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav-menu').classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.menu-toggle').classList.remove('active');
        document.querySelector('.nav-menu').classList.remove('active');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = document.getElementById('header').offsetHeight;
            window.scrollTo({
                top: targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight,
                behavior: 'smooth'
            });
        }
    });
});

document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const loader = document.getElementById('loader');
    loader.classList.add('active');
    setTimeout(() => {
        alert('Terima kasih! Pesan Anda telah berhasil dikirim. Kami akan menghubungi Anda segera.');
        document.getElementById('contactForm').reset();
        loader.classList.remove('active');
    }, 1500);
});

function showCookiesBanner() {
    if (!localStorage.getItem('cookiesAccepted')) {
        setTimeout(() => document.getElementById('cookiesBanner').classList.add('active'), 2000);
    }
}

function acceptAllCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    localStorage.setItem('analyticsCookies', 'true');
    localStorage.setItem('marketingCookies', 'true');
    document.getElementById('cookiesBanner').classList.remove('active');
    document.getElementById('cookiesModal').classList.remove('active');
}

function saveCookiePreferences() {
    localStorage.setItem('cookiesAccepted', 'true');
    localStorage.setItem('analyticsCookies', document.getElementById('analyticsCookies').checked);
    localStorage.setItem('marketingCookies', document.getElementById('marketingCookies').checked);
    document.getElementById('cookiesModal').classList.remove('active');
    document.getElementById('cookiesBanner').classList.remove('active');
}

document.getElementById('acceptCookies').addEventListener('click', acceptAllCookies);
document.getElementById('cookieSettings').addEventListener('click', () => {
    document.getElementById('cookiesModal').classList.add('active');
});
document.getElementById('cookiesClose').addEventListener('click', () => {
    document.getElementById('cookiesBanner').classList.remove('active');
});
document.getElementById('saveCookieSettings').addEventListener('click', saveCookiePreferences);
document.getElementById('acceptAllFromModal').addEventListener('click', acceptAllCookies);
document.getElementById('cookiesModal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) document.getElementById('cookiesModal').classList.remove('active');
});

showCookiesBanner();
