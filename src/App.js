const { useState, useEffect } = React;

const App = () => {
    const [activeCategory, setActiveCategory] = useState("Semua Kategori");
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [activeSection, setActiveSection] = useState('beranda');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY;
            const windowHeight = window.innerHeight;
            // Deteksi tinggi dokumen yang lebih presisi
            const docHeight = Math.max(
                document.body.scrollHeight, document.documentElement.scrollHeight,
                document.body.offsetHeight, document.documentElement.offsetHeight,
                document.body.clientHeight, document.documentElement.clientHeight
            );
            
            if (Math.ceil(scrollPos + windowHeight) >= docHeight - 20) {
                setActiveSection('kontak');
                return;
            }
            
            const sections = ['beranda', 'katalog', 'kontak'];
            let current = 'beranda';
            const headerHeight = document.getElementById('main-header')?.offsetHeight || 80;
            const triggerPoint = headerHeight + 100; // Jarak deteksi dari atas layar
            
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el) {
                    // Menggunakan getBoundingClientRect agar tidak terpengaruh parent ber-class relative
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= triggerPoint) {
                        current = sections[i];
                        break;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e, sectionId, resetCategory = false) => {
        e?.preventDefault();
        if (resetCategory) setActiveCategory("Semua Kategori");
        
        if (sectionId === 'beranda') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        const element = document.getElementById(sectionId);
        const header = document.getElementById('main-header');
        const headerHeight = header ? header.offsetHeight : 80;

        if (element) {
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerHeight;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    const handleCategoryChange = (category) => {
        setActiveCategory(category);

        window.requestAnimationFrame(() => {
            const catalog = document.getElementById('katalog');
            const header = document.getElementById('main-header');
            const headerHeight = header ? header.offsetHeight : 80;

            if (catalog) {
                const catalogTop = catalog.getBoundingClientRect().top + window.scrollY - headerHeight;
                window.scrollTo({ top: catalogTop, behavior: 'smooth' });
            }
        });
    };
    
    useEffect(() => {
        if (selectedProduct) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; }
    }, [selectedProduct]);

    const filteredProducts = activeCategory === "Semua Kategori" 
        ? PRODUCTS 
        : PRODUCTS.filter(p => p.category === activeCategory);

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header activeSection={activeSection} onNavigate={scrollToSection} />
            
            <main className="flex-grow flex flex-col">
                <Hero onNavigate={scrollToSection} />
                
                <div className="relative flex-grow flex flex-col">
                    <div id="katalog" className="absolute top-0 w-full h-1"></div>
                    
                    <FilterBar activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />
                    
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow w-full">
                        <div className="flex justify-between items-end mb-8">
                            <div>
                                <h2 className="text-3xl font-bold text-brand-dark mb-2">{activeCategory}</h2>
                                <p className="text-stone-500 font-medium">Menampilkan {filteredProducts.length} produk</p>
                            </div>
                        </div>

                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {filteredProducts.map((product) => (
                                    <ProductCard 
                                        key={product.id} 
                                        product={product} 
                                        onSelect={setSelectedProduct} 
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20">
                                <svg className="w-16 h-16 text-stone-300 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                <p className="text-stone-500 text-lg font-medium">Tidak ada produk ditemukan dalam kategori ini.</p>
                            </div>
                        )}
                    </div>

                    <Footer />
                </div>
            </main>
            
            <OrderModal 
                isOpen={!!selectedProduct} 
                onClose={() => setSelectedProduct(null)} 
                product={selectedProduct} 
            />
        </div>
    );
};
