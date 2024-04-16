const API_KEY = 'ee0fbfa5-a767-49ad-8d71-9a5132a7c0ad';
const COPILEAKS_ID_SERVER = 'https://id.copyleaks.com';
const COPILEAKS_API_SERVER = 'https://api.copyleaks.com';

// Function to get the Copyleaks access token
function getCopyleaksToken(callback) {
    fetch(`${COPILEAKS_ID_SERVER}/v3/account/login/api`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: 'kuzuhara938@gmail.com',
            key: API_KEY
        })
    })
    .then(response => response.json())
    .then(data => callback(null, data))
    .catch(error => callback(error));
}

// Simple UUID generator for scanId
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (Math.random() * 16 | 0), v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// Function to check if the content is AI-generated
function checkAIContent(base64Content, accessToken, callback) {
    const scanId = generateUUID(); // Generate a unique scanId
    fetch(`${COPILEAKS_API_SERVER}/v2/writer-detector/${scanId}/check`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: base64Content
        })
    })
    .then(response => response.json())
    .then(data => callback(null, data))
    .catch(error => callback(error));
}

// Function to check for plagiarism
function checkForPlagiarism(base64Content, accessToken, callback) {
    const scanId = generateUUID(); // Generate a unique scanId
    fetch(`${COPILEAKS_API_SERVER}/v3/scans/submit/file/${scanId}`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            base64: base64Content,
            filename: 'document.txt',
            properties: {
                sandbox: true // Set to false for production
            }
        })
    })
    .then(response => response.json())
    .then(data => callback(null, data))
    .catch(error => callback(error));
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'checkContent') {
        getCopyleaksToken((err, tokenData) => {
            if (err) {
                console.error('Error getting Copyleaks token:', err);
                sendResponse({ error: 'Failed to authenticate with Copyleaks.' });
                return;
            }
            const accessToken = tokenData.access_token;
            
            // Convert content to base64 for submission
            const base64Content = btoa(request.content);

            // Perform the AI content check
            checkAIContent(base64Content, accessToken, (aiError, aiResult) => {
                if (aiError) {
                    console.error('Error checking AI content:', aiError);
                    sendResponse({ error: 'Failed to check for AI-generated content.' });
                    return;
                }

                // Perform the plagiarism check
                checkForPlagiarism(base64Content, accessToken, (plagiarismError, plagiarismResult) => {
                    if (plagiarismError) {
                        console.error('Error checking for plagiarism:', plagiarismError);
                        sendResponse({ error: 'Failed to check for plagiarism.' });
                        return;
                    }

                    // Send back the combined results
                    sendResponse({
                        aiResult: aiResult,
                        plagiarismResult: plagiarismResult
                    });
                });
            });
        });
        return true; 
    }
});
