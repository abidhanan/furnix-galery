const Hero = ({ onNavigate }) => (
    <div id="beranda" className="relative bg-stone-900 text-white overflow-hidden flex items-center justify-center h-[calc(100svh-71px)] min-h-[560px] py-16 md:min-h-[640px] md:py-24">
        <div className="absolute inset-0">
            <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop" 
                alt="Cafe Interior" 
                className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/60 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto flex flex-col items-center justify-center">
            <img
                src={STORE_INFO.logoLight}
                alt={`${STORE_INFO.name} - ${STORE_INFO.slogan}`}
                className="w-56 sm:w-64 md:w-[22rem] lg:w-96 max-w-[76vw] h-auto mb-6 drop-shadow-2xl"
            />
            <p className="text-base md:text-lg text-stone-300 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
                Koleksi furnitur besi premium bergaya industrial untuk kebutuhan cafe, restoran, dan hunian Anda. Tahan lama, estetik, dan elegan.
            </p>
            <button 
                onClick={(e) => onNavigate(e, 'katalog', true)}
                className="bg-brand-accent text-white px-7 py-3.5 rounded-full font-semibold hover:bg-[#5a5e4d] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
                Jelajahi Katalog
            </button>
        </div>
    </div>
);
