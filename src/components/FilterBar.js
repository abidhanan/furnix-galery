const FilterBar = ({ activeCategory, onCategoryChange }) => {
    const [headerHeight, setHeaderHeight] = React.useState(76);
    
    React.useEffect(() => {
        const header = document.getElementById('main-header');
        if (header) setHeaderHeight(header.offsetHeight);
    }, []);

    return (
        <div 
            className="sticky z-40 bg-brand-bg/95 backdrop-blur-sm py-4 border-b border-stone-200"
            style={{ top: `${headerHeight}px` }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex overflow-x-auto category-scrollbar gap-3 pb-3 pt-1">
                    {CATEGORIES.map((cat, idx) => (
                        <button
                            key={idx}
                            onClick={() => onCategoryChange(cat)}
                            className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                                activeCategory === cat 
                                ? 'bg-brand-dark text-white border-brand-dark shadow-md' 
                                : 'bg-white text-stone-600 border-stone-200 hover:border-brand-dark hover:text-brand-dark'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
