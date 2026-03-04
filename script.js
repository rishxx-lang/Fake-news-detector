function analyzeNews() {
    const input = document.getElementById("newsInput").value.toLowerCase();
    const resultDiv = document.getElementById("result");

    if (input.trim() === "") {
        resultDiv.innerHTML = "Please enter some news content.";
        return;
    }

    const fakeKeywords = [
        "shocking", "breaking", "secret", "exposed",
        "you won't believe", "click here", "viral",
        "conspiracy", "fake", "hoax"
    ];

    let score = 0;

    fakeKeywords.forEach(keyword => {
        if (input.includes(keyword)) {
            score++;
        }
    });

    let probability = Math.min(score * 15, 90);

    if (score >= 2) {
        resultDiv.innerHTML = `⚠️ Likely Fake News (${probability}% probability)`;
        resultDiv.style.color = "red";
    } else {
        resultDiv.innerHTML = `✅ Likely Real News (${100 - probability}% confidence)`;
        resultDiv.style.color = "lightgreen";
    }
}