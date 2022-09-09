class Github {
  constructor(){
    this.client_id = '0134ad26a176c8c3dc3f'
    this.client_secret = 'd49bbaead0cdfc52b0b14974c49fcd20cd6b9a54'
    this.repo_count = 3
    this.repo_sort = 'created: asc'
  }

  async getUser(user) {
    // await url profile and repo data + convert to json
    const profileResponse = await fetch (`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const repoResponse = await fetch (`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const profile = await profileResponse.json()
    const repos = await repoResponse.json()

    // return profile data to app.js
    return {
      profile,
      repos
    }
  }
}


