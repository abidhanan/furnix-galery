const OrderModal = ({ isOpen, onClose, product }) => {
    if (!isOpen || !product) return null;

    const waText = encodeURIComponent(`Halo OD Furnix Galery, saya tertarik untuk memesan produk:\n\nNama: ${product.name}\nHarga: ${formatCurrency(product.price)}\n\nMohon info ketersediaan dan proses pemesanannya. Terima kasih.`);
    const waLink = `https://wa.me/${STORE_INFO.phone.replace(/^0/, '62')}?text=${waText}`;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4">
            <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[calc(100svh-1.5rem)] overflow-y-auto overscroll-contain transform transition-all animate-in fade-in zoom-in duration-200">
                <button onClick={onClose} className="absolute top-3 right-3 text-stone-500 hover:text-brand-dark hover:bg-stone-100 bg-white rounded-full p-2 z-10 transition-colors shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
                
                <div className="h-44 sm:h-52 bg-stone-100 relative">
                     <img src={getProductImageUrl(product)} alt={product.name} className="w-full h-full object-contain" />
                </div>
                
                <div className="p-5 sm:p-6">
                    <div className="uppercase tracking-widest text-xs font-bold text-brand-accent mb-2">Detail Pemesanan</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-brand-dark mb-4">{product.name}</h3>
                    
                    <div className="bg-stone-50 rounded-lg p-4 mb-5 border border-stone-200">
                        <div className="grid grid-cols-2 gap-y-2.5 text-sm">
                            <div className="text-stone-500">Kategori</div>
                            <div className="font-medium text-right line-clamp-1">{product.category}</div>
                            <div className="text-stone-500">Material</div>
                            <div className="font-medium text-right">{product.material}</div>
                            
                            {product.size && product.size !== "-" && (
                                <>
                                    <div className="text-stone-500">Ukuran</div>
                                    <div className="font-medium text-right">{product.size}</div>
                                </>
                            )}
                            
                            {product.desc && (
                                <div className="col-span-2 mt-2 pt-2 border-t border-stone-200 text-stone-600 italic text-xs">
                                    {product.desc}
                                </div>
                            )}
                            
                            <div className="col-span-2 mt-3 pt-3 border-t border-stone-200 flex justify-between items-center">
                                <div className="text-stone-500">Harga</div>
                                <div className="font-bold text-xl text-brand-dark text-right">{formatCurrency(product.price)}</div>
                            </div>
                        </div>
                    </div>
                    
                    <a href={waLink} target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3.5 px-5 rounded-lg hover:bg-[#1EBE5A] transition-colors shadow-lg shadow-[#25D366]/30">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                        Pesan via WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
};
