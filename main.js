const userTableBody = document.getElementById('user-table-body');

// Fetch users' data from the API
fetch('https://api.escuelajs.co/api/v1/users')
  .then(response => response.json())
  .then(data => createUsersTable(data))
  .catch(error => console.error('Error fetching data:', error));

// Create the users' table using the fetched data
function createUsersTable(users) {
  userTableBody.innerHTML = ''; // Clear the table body

  users.forEach(user => {
    const userRow = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = user.name;
    userRow.appendChild(nameCell);

    const emailCell = document.createElement('td');
    emailCell.textContent = user.email;
    userRow.appendChild(emailCell);

    const accountCell = document.createElement('td');
    const accountLink = document.createElement('a');
    accountLink.href = `details.html?userId=${user.id}`;
    accountLink.textContent = 'View Account';
    accountCell.appendChild(accountLink);
    userRow.appendChild(accountCell);

    userTableBody.appendChild(userRow);
  });
}
