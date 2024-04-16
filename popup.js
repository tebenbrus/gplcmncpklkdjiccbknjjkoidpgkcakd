document.getElementById('submitText').addEventListener('click', function() {
    const content = document.getElementById('textToCheck').value;
    chrome.runtime.sendMessage({ action: 'checkContent', content: content }, function(response) {
        if (response.error) {
            // If there is an error, display it
            document.getElementById('results').textContent = response.error;
        } else {
            // Otherwise, display the results
            displayResults(response.aiResult, response.plagiarismResult);
        }
    });
});

function displayResults(aiResult, plagiarismResult) {
    // Example debug log to see what's being received (remove in production)
    console.log('AI Result:', aiResult);
    console.log('Plagiarism Result:', plagiarismResult);

    let resultsText = `AI Detection: ${aiResult ? 'Detected' : 'Not Detected'}\n` +
                      `Plagiarism Detected: ${plagiarismResult ? 'Yes' : 'No'}`;

    document.getElementById('results').textContent = resultsText;
}
