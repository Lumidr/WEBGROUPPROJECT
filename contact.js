$(document).ready(function () {

    // Contact Us Form Validation and Submission
    $('#contact-form').submit(function (e) {
        e.preventDefault();  // Prevent the form from submitting normally

        // Get form data
        const name = $('#name').val();
        const email = $('#email').val();
        const message = $('#message').val();

        // Basic validation
        if (name === '' || email === '' || message === '') {
            alert("Please fill in all fields.");
            return;
        }

        // Simulate sending the message (in a real scenario, you would use AJAX to submit the form to a server)
        alert("Your message has been sent. Thank you for contacting us!");

        // Clear form fields after submission
        $('#contact-form')[0].reset();
    });

    // Newsletter Subscription Form Validation and Submission
    $('#newsletter-form').submit(function (e) {
        e.preventDefault();  // Prevent the form from submitting normally

        // Get email data
        const newsletterEmail = $('#newsletter-email').val();

        // Basic validation
        if (newsletterEmail === '') {
            alert("Please enter your email.");
            return;
        }

        // Simulate subscribing to the newsletter (in a real scenario, you would use AJAX to submit the form to a server)
        alert("Thank you for subscribing to our newsletter!");

        // Clear email field after submission
        $('#newsletter-form')[0].reset();
    });

});
