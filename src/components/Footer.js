const Footer = () => (
    <footer id="kontak" className="bg-brand-dark text-white pt-20 pb-10 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between gap-12 border-b border-stone-800 pb-12 mb-8">
                <div className="md:w-1/2">
                    <div className="mb-6">
                        <BrandLogo light />
                    </div>
                    <p className="text-stone-400 text-sm max-w-sm leading-relaxed">
                        Menyediakan berbagai macam furniture besi berkualitas untuk kebutuhan Cafe, Restoran, dan hunian modern Anda dengan sistem pembuatan custom dari Jepara.
                    </p>
                </div>
                <div className="md:w-1/2 md:flex md:justify-end">
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-stone-200">Kontak Kami</h3>
                        <ul className="space-y-4 text-stone-400 text-sm">
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 shrink-0 text-brand-accent mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                <span className="leading-relaxed">{STORE_INFO.address}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 shrink-0 text-brand-accent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                <span>{STORE_INFO.phone}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 shrink-0 text-brand-accent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                <span className="uppercase">{STORE_INFO.email}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center text-stone-500 text-sm">
                &copy; 2026 OD FURNIX GALERY. Hak cipta dilindungi. 
            </div>
        </div>
    </footer>
);
