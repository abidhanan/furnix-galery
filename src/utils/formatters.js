const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
};

const getProductImageUrl = (product) => (
    `assets/products/product-${String(product.id).padStart(2, '0')}.webp`
);
