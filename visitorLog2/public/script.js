document.getElementById('visitorForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get values from the form
    const name = document.getElementById('name').value;
    const visiting = document.getElementById('visiting').value;
    const status = document.getElementById('status').value;
    const checkIn = document.getElementById('checkIn').value;
    const checkOut = document.getElementById('checkOut').value;
    const instructions = document.getElementById('instructions').value;

    // Create a new table row
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${visiting}</td>
        <td><button class="status ${status.toLowerCase().replace(' ', '-')}">${status}</button></td>
        <td>${checkIn}</td>
        <td>${checkOut}</td>
        <td>${instructions}</td>
    `;

    // Append the new row to the table
    const tableBody = document.querySelector('tbody');
    tableBody.appendChild(newRow);

    // Reset the form
    document.getElementById('visitorForm').reset();
});