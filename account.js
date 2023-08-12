const userDetailsElement = document.getElementById('user-details');

// Get the user ID from the URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('userId');

// Fetch user's detailed data using the user ID
fetch(`https://api.escuelajs.co/api/v1/users/${userId}`)
  .then(response => response.json())
  .then(data => displayUserDetails(data))
  .catch(error => console.error('Error fetching user data:', error));

// Display the detailed user information
function displayUserDetails(user) {
  userDetailsElement.innerHTML = `
   <div><img src="${user.avatar}" class="user-avatar" alt="User Avatar"></div>
       <div class="user-info">
          <div class="users-info">id:${user.id}</div>
         <h2 class="users-info">${user.name}</h2>
         <div class="users-info">Email: ${user.email}</div>
         <div class="users-info">role:${user.role}</div>
        <div class="users-info">Password: ${user.password}</div>
        <div class="users-info">Created At: ${new Date(user.creationAt).toLocaleString()}</div>
        <div class="users-info">Updated At: ${new Date(user.updatedAt).toLocaleString()}</div>
        <button class="user-btn">
        <a href="index.html">
            Back to
        </a>
    </button>
      </div>
     
     `;
}
