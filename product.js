$(document).ready(function () {
    let cartCount = 0;
    let favCount = 0;

    // Product data
    const products = {
        new: [
            { id: 1, name: "New Lipstick", price: 20, category: 'new', description: "Long-lasting lipstick.", details: "Shade: Red, Weight: 5g." },
            { id: 2, name: "New Foundation", price: 30, category: 'new', description: "Full coverage foundation.", details: "Shade: Medium, Weight: 30ml." }
        ],
        face: [
            { id: 3, name: "Foundation", price: 35, category: 'face', description: "Full coverage foundation.", details: "Shade: Beige, Weight: 30ml." },
            { id: 4, name: "BB Cream", price: 25, category: 'face', description: "Lightweight BB cream.", details: "Shade: Light, Weight: 40ml." },
            { id: 5, name: "Concealer", price: 18, category: 'face', description: "Perfect for dark circles.", details: "Shade: Light, Weight: 10g." }
        ],
        eye: [
            { id: 6, name: "Eyeshadow Palette", price: 45, category: 'eye', description: "12 shades of eyeshadow.", details: "Weight: 12g." },
            { id: 7, name: "Mascara", price: 15, category: 'eye', description: "Volumizing mascara.", details: "Weight: 10ml." }
        ],
        lip: [
            { id: 8, name: "Lip Gloss", price: 12, category: 'lip', description: "Shiny lip gloss.", details: "Weight: 10g." }
        ],
        cheeks: [
            { id: 9, name: "Blush", price: 22, category: 'cheeks', description: "Soft pink blush.", details: "Weight: 10g." },
            { id: 10, name: "Bronzer", price: 28, category: 'cheeks', description: "Golden bronzer.", details: "Weight: 10g." }
        ]
    };

    // Render products by category
    function renderProducts(category) {
        const selectedProducts = products[category];
        $('.product-list').empty();
        selectedProducts.forEach(product => {
            $('.product-list').append(`
                <div class="product-item" data-product-id="${product.id}">
                    <h4>${product.name}</h4>
                    <p>$${product.price}</p>
                    <button class="view-details-btn">View Details</button>
                    <button class="add-to-cart">Add to Cart</button>
                    <button class="add-to-fav">Add to Favorites</button>
                </div>
            `);
        });
    }

    // Show product details modal
    function showProductDetails(product) {
        $('#product-name').text(product.name);
        $('#product-price').text(product.price);
        $('#product-description').text(product.description);
        $('#product-details').text(product.details);
        $('#product-details-modal').show();
    }

    // Close modal
    $('.close').click(function () {
        $('#product-details-modal').hide();
    });

    // Category buttons click
    $('.category-btn').click(function () {
        const category = $(this).data('category');
        renderProducts(category);
    });

    // View product details
    $(document).on('click', '.view-details-btn', function () {
        const productId = $(this).closest('.product-item').data('product-id');
        const product = Object.values(products).flat().find(p => p.id === productId);
        showProductDetails(product);
    });

    // Add to Cart functionality
    $(document).on('click', '.add-to-cart', function () {
        cartCount++;
        $('#cart-count').text(cartCount);
    });

    // Add to Favorites functionality
    $(document).on('click', '.add-to-fav', function () {
        favCount++;
        $('#fav-count').text(favCount);
    });

    // Initial render
    renderProducts('new');
});
