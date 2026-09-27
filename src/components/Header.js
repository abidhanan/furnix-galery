const Header = ({ activeSection, onNavigate }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') setIsMenuOpen(false);
        };
        const handleResize = () => {
            if (window.innerWidth >= 768) setIsMenuOpen(false);
        };

        document.addEventListener('keydown', handleKeyDown);
        window.addEventListener('resize', handleResize);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const navigate = (event, sectionId, resetCategory = false) => {
        setIsMenuOpen(false);
        onNavigate(event, sectionId, resetCategory);
    };

    const navLinkClass = (section) => `transition-all duration-300 relative py-2 ${
        activeSection === section ? 'text-brand-dark font-bold' : 'text-stone-600 hover:text-brand-accent'
    }`;

    return (
        <header id="main-header" className="sticky top-0 z-50 bg-brand-bg/95 backdrop-blur-md border-b border-stone-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                <div className="flex justify-between items-center">
                    <button
                        type="button"
                        className="group shrink-0 transition-transform duration-300 hover:scale-[1.02]"
                        onClick={(event) => navigate(event, 'beranda')}
                        aria-label="Kembali ke beranda"
                    >
                        <BrandLogo compact />
                    </button>

                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium" aria-label="Navigasi utama">
                        <a href="#beranda" onClick={(event) => navigate(event, 'beranda')} className={navLinkClass('beranda')}>
                            Beranda
                            {activeSection === 'beranda' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-dark rounded-full"></span>}
                        </a>
                        <a href="#katalog" onClick={(event) => navigate(event, 'katalog', true)} className={navLinkClass('katalog')}>
                            Katalog
                            {activeSection === 'katalog' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-dark rounded-full"></span>}
                        </a>
                        <a href="#kontak" onClick={(event) => navigate(event, 'kontak')} className={navLinkClass('kontak')}>
                            Kontak
                            {activeSection === 'kontak' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-dark rounded-full"></span>}
                        </a>
                        <a href={`https://wa.me/${STORE_INFO.phone.replace(/^0/, '62')}`} target="_blank" rel="noreferrer"
                           className="bg-brand-dark text-white px-6 py-2.5 rounded-full hover:bg-brand-accent transition-all duration-300 shadow-md">
                            Hubungi Kami
                        </a>
                    </nav>

                    <button
                        type="button"
                        className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-stone-300 bg-white text-brand-dark shadow-sm"
                        onClick={() => setIsMenuOpen((open) => !open)}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-navigation"
                        aria-label={isMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
                    >
                        <span className="sr-only">{isMenuOpen ? 'Tutup menu' : 'Buka menu'}</span>
                        <span className="relative block h-5 w-5" aria-hidden="true">
                            <span className={`absolute left-0 top-1 h-0.5 w-5 bg-current transition-transform ${isMenuOpen ? 'translate-y-1.5 rotate-45' : ''}`}></span>
                            <span className={`absolute left-0 top-2.5 h-0.5 w-5 bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`absolute left-0 top-4 h-0.5 w-5 bg-current transition-transform ${isMenuOpen ? '-translate-y-1.5 -rotate-45' : ''}`}></span>
                        </span>
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <nav id="mobile-navigation" className="absolute left-0 right-0 top-full border-t border-stone-200 bg-brand-bg shadow-xl md:hidden" aria-label="Navigasi mobile">
                    <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col text-sm font-medium">
                        <a href="#beranda" onClick={(event) => navigate(event, 'beranda')} className={navLinkClass('beranda')}>Beranda</a>
                        <a href="#katalog" onClick={(event) => navigate(event, 'katalog', true)} className={navLinkClass('katalog')}>Katalog</a>
                        <a href="#kontak" onClick={(event) => navigate(event, 'kontak')} className={navLinkClass('kontak')}>Kontak</a>
                        <a href={`https://wa.me/${STORE_INFO.phone.replace(/^0/, '62')}`} target="_blank" rel="noreferrer"
                           className="mt-2 flex min-h-11 items-center justify-center rounded-md bg-brand-dark px-4 py-2.5 text-white">
                            Hubungi Kami
                        </a>
                    </div>
                </nav>
            )}
        </header>
    );
};
