require('dotenv').config();
const express = require('express');
const app = express();
const port = 4000;

const githubData_object = {
    login: "Harmain89",
    id: 88616082,
    node_id: "MDQ6VXNlcjg4NjE2MDgy",
    avatar_url: "https://avatars.githubusercontent.com/u/88616082?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/Harmain89",
    html_url: "https://github.com/Harmain89",
    followers_url: "https://api.github.com/users/Harmain89/followers",
    following_url: "https://api.github.com/users/Harmain89/following{/other_user}",
    gists_url: "https://api.github.com/users/Harmain89/gists{/gist_id}",
    starred_url: "https://api.github.com/users/Harmain89/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/Harmain89/subscriptions",
    organizations_url: "https://api.github.com/users/Harmain89/orgs",
    repos_url: "https://api.github.com/users/Harmain89/repos",
    events_url: "https://api.github.com/users/Harmain89/events{/privacy}",
    received_events_url: "https://api.github.com/users/Harmain89/received_events",
    type: "User",
    site_admin: false,
    name: "Harmain Rizwan",
    company: null,
    blog: "",
    location: null,
    email: null,
    hireable: null,
    bio: "Web Developer, Codeigniter, Laravel, PHP\r\nApp Developer, Java, C#",
    twitter_username: null,
    public_repos: 8,
    public_gists: 0,
    followers: 2,
    following: 7,
    created_at: "2021-08-08T10:49:55Z",
    updated_at: "2024-06-06T13:42:00Z"
}

const githubData = [
    {
        "login": "Harmain89",
        "id": 88616082,
        "node_id": "MDQ6VXNlcjg4NjE2MDgy",
        "avatar_url": "https://avatars.githubusercontent.com/u/88616082?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/Harmain89",
        "html_url": "https://github.com/Harmain89",
        "followers_url": "https://api.github.com/users/Harmain89/followers",
        "following_url": "https://api.github.com/users/Harmain89/following{/other_user}",
        "gists_url": "https://api.github.com/users/Harmain89/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/Harmain89/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/Harmain89/subscriptions",
        "organizations_url": "https://api.github.com/users/Harmain89/orgs",
        "repos_url": "https://api.github.com/users/Harmain89/repos",
        "events_url": "https://api.github.com/users/Harmain89/events{/privacy}",
        "received_events_url": "https://api.github.com/users/Harmain89/received_events",
        "type": "User",
        "site_admin": false,
        "name": "Harmain Rizwan",
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": "Web Developer, Codeigniter, Laravel, PHP\r\nApp Developer, Java, C#",
        "twitter_username": null,
        "public_repos": 8,
        "public_gists": 0,
        "followers": 2,
        "following": 7,
        "created_at": "2021-08-08T10:49:55Z",
        "updated_at": "2024-06-06T13:42:00Z"
    }
];




app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/ht', (req, res) => {
    res.send('<h1 style="text-align: center;">Hello World</h1>');
})

app.get('/data', (req, res) => {
    res.json(githubData_object);
})

app.listen(process.env.PORT, () => {
    console.log(`example app listening on port no ${process.env.PORT}`);
})