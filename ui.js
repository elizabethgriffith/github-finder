class UI {
  constructor() {
    this.profile = document.getElementById('profile')
  }

  // showProfile method
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: <a href="https://${user.blog}" target="_blank">${user.blog}</a></li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `
   }
  // showRepos method
  // showAlert method
  showAlert (message, className){
    this.clearAlert()
    // create div, add classes, insert text
    const div = document.createElement('div')
    div.className = className
    div.appendChild(document.createTextNode(message))
    // grab elements to determine div insertion
    const container = document.querySelector('.searchContainer')
    const search = document.querySelector('.search')
    container.insertBefore(div, search)
  }
  // clearAlert method
  clearAlert(){
    const alert = document.querySelector('.alert')
    if (alert){
      alert.remove()
    }
  }
  // removeProfile method
  removeProfile() {
    this.profile.innerHTML = ''
  }
}