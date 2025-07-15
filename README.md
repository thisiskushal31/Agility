<div align="center">
  <h1>Welcome to Agility 👋💻</h1>
</div>

##  About Agility

Agilty is a task management tool that allows you to plan, organise, and prioritise all of your tasks so that you can complete them in the shortest amount of time possible.   

## Agility Live Preview

![Agility-Live-Preview](./assets/Agility_Demo.gif)

## Features

- Modern UI/UX-inspired responsive pages
- Express.js for connecting frontend to backend
- Login and Register Using MongoDB using JSON Web Token keep user logged in using stored cookie
- Use of safe login so the only logged in used can view `\workspace` contains
- Kanban board's ability to add and remove cards and lists from local storage. 
- User/Team Member Remove and Add

##  Tech Stacks

![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)![Nodejs](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![Expressjs](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

## Workflow Setup
### Node

-   #### Node installation on Windows

    Just go on [official Node.js website](https://nodejs.org/) and download the installer.
    Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

-   #### Node installation on Ubuntu

    You can install nodejs and npm easily with apt install, just run the following commands.

        $ sudo apt install nodejs
        $ sudo apt install npm

-   #### Other Operating Systems
    You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

## See Agility in action

Firstly, we need to install all the dependencies in the backend and frontend folders

**For Frontend**   
```
cd frontend
yarn
```   
**For Backend**   
```
cd backend
yarn
```    
> Since npm gives some errors in this project, I recommend using yarn as the package manager.

Secondly, we need add `.env` file in `backend` folder in below format
```
MONGO_URI="<Your_MongoDB_URI>"
FRONTEND_ORIGIN="http://localhost:3000"
JWT_TOKEN="<your_jwt_token>"
```
Thirdly, run in local environment

**For Frontend**   
```
yarn start
```   
**For Backend**   
```
yarn start
``` 
Runs the app in the development mode.\
- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.   
- Backend running at [http://localhost:4000](http://localhost:4000) to test Login and Register API.

The page will reload when you make changes.\
You may also see any lint errors in the console.

**OR**, 

This [video](https://youtu.be/v2W6W7GKgro) shows this project live.

## Folder Structure

**Frontend Folder structure**   
```
.
├── public                  # Manifest, favicon and HTML file so you can tweak it.
├── src                     
│   ├── Assets              # all the assets i.e. files other then js  
│   ├── pages               # Components specific to each section called in App.js
│       ├── Form          
│       ├── Home          
│       ├── KanbanBoard
│           ├── Utils
|           └── Component Regarding Kanban Board     
│       ├── ProductLayout        
│       ├── User        
|       └── Workspace  
│   ├── Styles              # All Styles Files in respective folder compiled by scss
│       ├── Form          
│       ├── Home          
│       ├── KanbanBoard          
│       ├── ProductLayout        
│       ├── Utils        
│       ├── Workspace        
|       └── main.scss
│   ├── App.js
│   └── index.js            
├── yarn.lock     
└── package.json              
```   

**Backend Folder structure**   

```
.
├── controller             
├── middlewares
├── model 
├── routes
├── .env 
├── index.js
├── yarn.lock     
└── package.json              
```   

## Scope of Improvement

- Better UI at Dashboard, Kanban, Teams.
- REST API for functions in Kanban, Dashboard, Teams.
- User Respective Data to be shown after login.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/thisiskushal31/Agility/blob/main/LICENSE) file for details.
