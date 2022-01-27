# Programming_task
A small React web frontend that gives an overview to all my personal repositories using the GitHub GraphQL API.
## Introduction
This project consists of a small react web frontend that displays all my personal repositories, For each repository:
*  shows Author, Date of creation and primary language
*  displays commits
*  displays open/closed issues and gives you the possibility to comment on a certain issue
*  displays content of a specific YAML named "test_file" if exists
*  you can **STAR/UNSTAR** or **WATCH/UNWATCH** the repository


Here is a quick overview on the website:

### HomePage

![HomePage](https://user-images.githubusercontent.com/63970415/151379676-a6473dc6-23b6-43bd-a2e1-10770cfb719f.PNG)

### Git Repositories Page

![Git_Repos](https://user-images.githubusercontent.com/63970415/151380659-01727f38-9867-4c0c-b163-6708e6f785b5.PNG)

## Feature
*  React with create-react-app
*  React Router 
*  Apollo with GitHub GraphQL API
*  Responsive
*  Material-UI 
*  CSS-in-JS styles

## hierarchical folder structure
```bash
Programming_task/
├─ node_modules/
├─ public/
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ manifest.json
├─ src/
│  ├─ App/
│  │  ├─ index.js
│  │  ├─ Navigation.js
│  │  ├─ Footer.js
│  ├─ components/
│  │  ├─ Button/
│  │  │  ├─ index.js
│  │  │  ├─ style.css
│  │  ├─ Comment/
│  │  │  ├─ CommentAdd/
│  │  │  │  ├─ index.js
│  │  │  │  ├─ mutations.js
│  │  │  ├─ CommentItem/
│  │  │  │  ├─ index.js
│  │  │  ├─ CommentList/
│  │  │  │  ├─ index.js
│  │  │  │  ├─ queries.js
│  │  │  ├─ index.js
│  │  ├─ commit/
│  │  │  ├─ commitItem/
│  │  │  ├─ commitList/
│  │  │  ├─ index.js
│  │  ├─ file/
│  │  │  ├─ fileItem/
│  │  │  ├─ fileList/
│  │  │  ├─ index.js
│  │  ├─ Input/
│  │  │  ├─ index.js
│  │  │  ├─ style.css
│  │  ├─ Issue/
│  │  │  ├─ issueItem/
│  │  │  ├─ issueList/
│  │  │  ├─ index.js
│  │  ├─ Loading/
│  │  │  ├─ index.js
│  │  │  ├─ style.css
│  │  ├─ Repository/
│  │  │  ├─ RepositoryItem/
│  │  │  ├─ RepositoryList/
│  │  │  ├─ mutations.js
│  │  │  ├─ fragments..js
│  │  │  ├─ index.js
│  │  ├─ Error.js
│  │  ├─ FetchMore.js
│  │  ├─ Link.js
│  │  ├─ Profile.js
│  │  ├─ routes.js
│  ├─ images/
│  ├─ style.css
│  ├─ index.js
├─ .gitignore
├─ package.json
├─ README.md
├─ .env
├─ test_file.yml
```

## Installation

*  git clone https://github.com/eyarouissi/Programming_task.git
*  cd Programming_task
*  add your own GitHub personal access token in a .env file in your root folder:
   1. scopes/permissions you need to check: admin:org, repo, user, notifications
   2. REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN=xxxXXX
*  npm install
*  npm start
*  visit http://localhost:3000
