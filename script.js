// Character counter
const textarea = document.getElementById('q2');
const charCount = document.getElementById('charCount');

textarea.addEventListener('input', () => {
    charCount.textContent = `${textarea.value.length} / 1000 characters`;
});

// Form submission
const form = document.getElementById('stockholmForm');
const responsesList = document.getElementById('responsesList');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const name = formData.get('name') || "Anonymous";
    const q1 = formData.get('question1');
    const q1Other = formData.get('otherText');
    const q2 = formData.get('question2');

    const answer1 = q1 === 'Other' && q1Other ? q1Other : q1;

    // Create a new response element
    const div = document.createElement('div');
    div.classList.add('response-item');
    div.innerHTML = `
        <h3>${name} says:</h3>
        <p><strong>Most underrated thing:</strong> ${answer1 || "No answer"}</p>
        <p><strong>Funniest subway story:</strong> ${q2 || "No answer"}</p>
    `;

    responsesList.prepend(div); // Show latest on top

    form.reset();
    charCount.textContent = `0 / 1000 characters`;
});
