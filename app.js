// app.js

// Function to speak the response
function speakResponse(response) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = response;
    window.speechSynthesis.speak(speech);
}

// Function to handle user input
function handleInput() {
    const userInput = document.querySelector('.input-text').value.toLowerCase();
    let response;

    // Define responses based on user input
    switch (userInput) {
        case 'hi':
            response = 'Hello!';
            break;
        case 'how are you':
            response = 'I am fine, thank you!';
            break;
        // Add more cases for other possible inputs
        default:
            response = 'I did not understand that.';
    }

    // Speak the response
    speakResponse(response);
}

// Event listener for the submit button
document.querySelector('.submit-btn').addEventListener('click', handleInput);
