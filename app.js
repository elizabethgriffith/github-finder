// Instantiate classes
const github = new Github
const ui = new UI

// Event listener for user input
const searchInput = document.getElementById('searchInput')
searchInput.addEventListener('keyup', searchUser)

function searchUser(e){
  // Store user input
  const userSearch = e.target.value
  // Validate for empty input and make HTTP get request
  if(userSearch !== ''){
    github.getUser(userSearch)
    // Validate for found user and display profile
    .then(data => {
      if(data.profile.message === 'Not Found'){
        // show alert
        
      } else {
        // show profile
        ui.showProfile(data.profile)
      }
    })
  } else {
    // Remove profile
    ui.removeProfile()
  }
}