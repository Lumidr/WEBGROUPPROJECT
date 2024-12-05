$(document).ready(function () {
    let cartCount = 0;
    let favCount = 0;

    // Update Cart Count
    $('.cart-icon').click(function () {
        cartCount++;
        $('#cart-count').text(cartCount);
        alert("Item added to the cart!");
    });

    // Update Favorites Count
    $('.fav-icon').click(function () {
        favCount++;
        $('#fav-count').text(favCount);
        alert("Item added to favorites!");
    });

    // Sign-In Button Interaction
    $('#sign-in-btn').click(function () {
        alert("Sign-In functionality coming soon!");
    });

    // Community Link Alert
    $('.community-link').click(function (event) {
        event.preventDefault();
        alert("Welcome to our community page! Feature under development.");
    });
});

