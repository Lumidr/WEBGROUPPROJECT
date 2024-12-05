$(document).ready(function () {
    // Initialize the chat with a welcoming message
    const assistantMessages = [
        "Hello! I'm your Makeup Assistant. How can I help you today?",
        "Are you looking for skincare or makeup products?",
        "What type of makeup are you interested in? (e.g., foundation, mascara, lip gloss)"
    ];
    
    let userMessages = [];
    
    // Show assistant's first message
    function showMessage(message, sender) {
        const messageElement = $('<div>').addClass('message').addClass(sender + '-message').text(message);
        $('#chatbox-content').append(messageElement);
        $('#chatbox-content').scrollTop($('#chatbox-content')[0].scrollHeight); // Scroll to bottom
    }

    // Function to handle sending the user message
    $('#send-message').click(function () {
        const userInput = $('#user-input').val().trim();
        if (userInput) {
            showMessage(userInput, 'user'); // Show user message
            $('#user-input').val(''); // Clear the input box
            
            // Handle user responses and show assistant's next message
            setTimeout(function () {
                handleUserResponse(userInput);
            }, 1000);
        }
    });

    // Handle user input and simulate AI assistant response
    function handleUserResponse(input) {
        let response = "";
        if (input.toLowerCase().includes("makeup")) {
            response = "Great! Are you looking for face products, eyes, lips, or cheeks?";
        } else if (input.toLowerCase().includes("foundation")) {
            response = "I recommend checking out our best-selling foundations! Do you have a specific shade in mind?";
        } else if (input.toLowerCase().includes("mascara")) {
            response = "Mascara is a must-have! Would you prefer a volumizing or lengthening formula?";
        } else if (input.toLowerCase().includes("blush")) {
            response = "Blush is a great choice! Do you like powder or cream blushes?";
        } else if (input.toLowerCase().includes("lipstick")) {
            response = "Lipstick is a great option! Do you prefer bold colors or more neutral tones?";
        } else {
            response = "Sorry, I didn't quite understand that. Can you please clarify?";
        }
        showMessage(response, 'assistant');
    }

    // Close the chatbox
    $('#close-chatbox').click(function () {
        $('#chatbox').hide();
    });

    // Open chatbox when the user clicks the AI assistant icon
    $('#open-chatbox').click(function () {
        $('#chatbox').show();
    });
});
