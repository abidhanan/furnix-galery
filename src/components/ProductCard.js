const ProductCard = ({ product, onSelect }) => (
    <div 
        onClick={() => onSelect(product)}
        className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col border border-stone-200 transform hover:-translate-y-1.5"
    >
        <div className="relative aspect-[4/3] overflow-hidden m-3 mb-0 rounded-md bg-stone-100 border border-stone-200 shadow-inner">
            <img 
                src={getProductImageUrl(product)} 
                alt={product.name} 
                className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
            />
            <div className="absolute top-3 left-3 flex flex-col gap-1">
                {product.category.includes("NEW") && (
                    <span className="bg-brand-terracotta text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">New</span>
                )}
            </div>
        </div>
        <div className="p-5 flex flex-col flex-grow">
            <h3 className="text-lg font-bold text-brand-dark mb-2 leading-tight line-clamp-2 group-hover:text-brand-accent transition-colors">{product.name}</h3>
            
            <div className="text-sm text-stone-500 mb-4 flex-grow flex flex-col gap-1">
                {product.size !== "-" && <p>Size: {product.size}</p>}
                {product.desc && <p className="text-xs italic line-clamp-2 mt-1">{product.desc}</p>}
            </div>
            
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-100">
                <span className="text-lg font-extrabold text-brand-dark">{formatCurrency(product.price)}</span>
                <div className="bg-brand-accent/10 text-brand-accent group-hover:bg-brand-accent group-hover:text-white p-3 rounded-full transition-colors duration-300" aria-label="Pesan Sekarang">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                </div>
            </div>
        </div>
    </div>
);
