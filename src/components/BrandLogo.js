const BrandLogo = ({ light = false, compact = false }) => (
    <span
        className="inline-flex items-center gap-3"
        role="img"
        aria-label={`${STORE_INFO.name} - ${STORE_INFO.slogan}`}
    >
        <span className={`relative shrink-0 overflow-hidden ${compact ? 'w-12 h-12' : 'w-14 h-14'}`}>
            <img
                src={light ? STORE_INFO.logoLight : STORE_INFO.logo}
                alt=""
                aria-hidden="true"
                className={`absolute max-w-none ${compact ? 'w-[167px] -left-[55px] -top-[9px]' : 'w-[195px] -left-[64px] -top-[11px]'}`}
            />
        </span>
        <span className="flex flex-col text-left whitespace-nowrap">
            <span className={`font-extrabold leading-none text-sm sm:text-base ${light ? 'text-white' : 'text-brand-dark'}`}>
                {STORE_INFO.name}
            </span>
            <span className={`text-[8px] sm:text-[9px] leading-none mt-1.5 ${light ? 'text-stone-300' : 'text-stone-500'}`}>
                {STORE_INFO.slogan}
            </span>
        </span>
    </span>
);
