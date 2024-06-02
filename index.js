// Inspirational Quote: 

const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');

// Fetches a random quote from the Quotable API

async function getRandomQuote() {
    const url = "https://api.quotable.io/random";
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            quoteEl.textContent = `"${data.content}"`;
            authorEl.textContent = `- ${data.author}`;
        } else {
            quoteEl.textContent = "Failed to retrieve a quote.";
            authorEl.textContent = "";
        }
    } catch (error) {
        quoteEl.textContent = "An error occurred.";
        authorEl.textContent = "";
    }
}

// Sets a random background image from the Unsplash API
async function setRandomBackground() {
    const url = "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature";
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            const backgroundImage = data.urls.full;
            document.body.style.backgroundImage = `url(${backgroundImage})`;
        } else {
            console.error("Failed to fetch a background image.");
        }
    } catch (error) {
        console.error("An error occurred while fetching the background image.");
        document.body.style.backgroundImage = `url('./images/nature.jpg')`;
    }
}

// Load a quote and a background image when the page loads
window.onload = function() {
    getRandomQuote();
    setRandomBackground();
};