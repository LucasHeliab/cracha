const linksSocialMedia = {
  github: 'LucasHeliab',
  youtube: 'channel/UCnhn2uVkWv2jc6MIpWA21eQ',
  facebook: 'lucasheliab.silva',
  instagram: 'lucas_heliab_',
  twitter: 'heliab02'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubApi() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userImg.src = data.avatar_url
      userName.textContent = data.name
      userBio.textContent = data.bio
      userGit.href = data.html_url
      userLoginGit.textContent = data.login
    })
}

getGitHubApi()
