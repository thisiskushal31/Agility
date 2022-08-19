<div align="center">
  <h1>Welcome to Agility 👋💻</h1>
  <h3>Live Website for Agility : <a href="#">Click Here!</a></h3>
</div>

<br>

<p align="center">
<a href="https://github.com/thisiskushal31/Agility"><img src="https://img.shields.io/github/workflow/status/dwyl/auth_plug/Elixir%20CI?label=build&style=flat-square&logo=github"></a>
<a href="https://github.com/thisiskushal31/Agility"><img src="https://img.shields.io/website-up-down-green-red/http/fakesite.invalid.svg"></a>
<a href="https://github.com/thisiskushal31/Agility"><img src="https://img.shields.io/badge/Maintained%3F-yes-green.svg"></a>
</p> 

##  About Agility

Agilty is a task management tool that allows you to plan, organise, and prioritise all of your tasks so that you can complete them in the shortest amount of time possible.   

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
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Folder Structure
Folder structure of this project for your reference   
```
.
├── public                  # Manifest, favicon and HTML file so you can tweak it.
├── src                     
│   ├── assets              # all the assets i.e. files other then js
│   ├── components          # All shared components such as buttons, checkboxes, etc. used throughout the project
│       ├── form            # form components
|       ├── ui              # ui components
|       └── js_files        # Various components that do not fit the above file description 
│   ├── context             # any kind of context will be here with their's test file
│       ├── _test_            
|       └── js_files        
│   ├── data                # contains contanst's and json's
│   ├── hooks               # all the hooks with their's test file
│       ├── _test_          
|       └── js_files        
│   ├── pages               # Components specific to each section (this can be customized according to your requirements)
│       ├── Home            # components that unique for Home with "_test_" inside
│       ├── Login           # components that unique for Login with "_test_" inside
│       ├── Settings        # components that unique for Setting with "_test_" inside
|       └── Signup          # components that unique for Signup with "_test_" inside 
│   ├── utils               # utility functions with their's test file
│       ├── _test_          
|       └── js_Files        
│   └── CSS & JS Files      # all Utility Css & Js Files
├── .gitignore              
├── package-lock.json       
├── package.json              
└── Readme.md               # Project's Readme
```

##  License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/thisiskushal31/DTaxy-Ridesharing-app/blob/main/LICENSE) file for details.

## About Me

I am CS Undergrad Student learning Full Stack Web Development by building projects. 

## Let's Connect
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/thisiskushalgupta/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/thisis_kushal)
[![github](https://img.shields.io/badge/github-3d4653?style=for-the-badge&logo=github&logoColor=white)](https://github.com/thisiskushal31/)

<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->
