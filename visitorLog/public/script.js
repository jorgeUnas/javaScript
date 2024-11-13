// script.js

// Function to handle visitor form submission
document.getElementById('visitorForm')?.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send POST request to log visitor details
    await fetch('/log', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
    });

    // Clear the form
    document.getElementById('visitorForm').reset();
    alert('Visitor details logged successfully!');
});

// Function to fetch and display visitor logs on the home page
async function fetchVisitors() {
    const response = await fetch('/visitors');
    const visitors = await response.json();
    const visitorList = document.getElementById('visitorList');

    // Clear existing visitor logs
    visitorList.innerHTML = '';

    // Populate the visitor list
    visitors.forEach(visitor => {
        const li = document.createElement('li');
        li.textContent = `${visitor.name} (${visitor.email}): ${visitor.message} - ${new Date(visitor.timestamp).toLocaleString()}`;
        visitorList.appendChild(li);
    });
}

// Call fetchVisitors if on the home page
if (document.getElementById('visitorList')) {
    fetchVisitors();
}