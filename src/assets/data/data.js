import Shop from "../screenShots/Shop.jpg";
import Reddit from "../screenShots/Reddit.jpg";
import Natours from "../screenShots/Natours.jpg";
import Sky from "../screenShots/Sky.jpg";
import Guess from "../screenShots/Guess.jpg";
import Dice from "../screenShots/Dice.jpg";
import Dashboard from "../screenShots/Dashboard.jpg";
import Bank from "../screenShots/Bank.jpg";
import Map from "../screenShots/Map.jpg";

export const skills = {
  frontEnd: [
    "HTML",
    "CSS",
    "SASS",
    "JavaScript",
    "React",
    "React-Redux",
    "React-Routing",
    "Stripe",
  ],
  backEnd: [
    "NodeJS",
    "Express",
    "MongoDB",
    "Postgres",
    "Pug Templates",
    "Stripe",
  ],
  other: ["GitHub", "Postman", "VS Code", "Netlify", "Heroku", "MongoDB"],
};

export const projects = [
  {
    id: "clothing-shop",
    title: "Clothing Shop",
    desc: "MERN (MongoDB, Express, React, Node) stack project. Back-end encompases MongoDB and API to access database, and front-end is designed using React and React-Redux to display and make checkouts using Stripe payment authentication.",
    design: [
      "Codebase is split into two folders, api and client. This design path allows to separate front-end and back-end application concerns from each other.",

      "Api folder, holds connection to MongoDB database, api and Stripe endpoints, and data models. Client folder contains React, React-Redux, and Stripe code required to create a user interface with the shop.",
    ],
    functionality: [
      "Access products page by featured categories or following link to all products page, sort them by list of categories. Product page gives access to choose product colour, size, and quantity before adding it to the cart. Inside the cart page see the list of products that are added to your cart and if needed remove any of them, finally click the Checkout button to be redirected to Stripe payment page, using dummy card details, finish payment method and send order details to stripe dashboard.",
    ],
    img: Shop,
    url: "https://ajuskys-shop.netlify.app/",
    hosted: "netlify",
    github: "https://github.com/arturasjuskys/ajuskys-shop",
    tech: [
      "React",
      "React-Redux",
      "Redux-Persist",
      "React-Router-Dom",
      "Styled-Components",
      "Material-UI Icons",
      "Axios",
      "Stripe",
      "Node",
      "Express",
      "CORS",
      "Dotenv",
      "MongoDB",
      "API",
      "Netlify",
    ],
  },
  {
    id: "reddit-api-reader",
    title: "Reddit API Reader",
    desc: "This is a front-end development project, and the main objective is to receive json data, handle it and display it using `React-Redux`. This is not meant to be a copy of the existing reddit platform.",
    design: [
      "React enables creation of a web page that feels fast and instant like an application. SASS mixins and style nesting provides clean and easy to read CSS. Searching feed and opening posts to read comments is implemented with React-Redux.",
    ],
    functionality: [
      "Page state is managed by React-Redux library that allows to manage all of the data in one place. Making calls to Reddit API, formatting received json data and displaying it to the page, all done with redux slices and persisted redux store.",
    ],
    img: Reddit,
    url: "https://ajuskys-reddit.netlify.app/",
    hosted: "netlify",
    github: "https://github.com/arturasjuskys/ajuskys-reddit",
    tech: [
      "React",
      "React-Redux",
      "React-Router-Dom",
      "Redux-Persist",
      "React-Markdown",
      "SASS",
      "Material-UI Icons",
      "Netlify",
    ],
  },
  {
    id: "natours",
    title: "Natours - Traveling Agency",
    desc: "Travel the world with the help of this platform, browse selected beautiful locations and plan your next adventure.",
    design: [""],
    functionality: [""],
    img: Natours,
    url: "https://natours-arturas.herokuapp.com/",
    hosted: "heroku",
    github: "https://github.com/arturasjuskys/Node.js_Bootcamp_2021-Natours",
    tech: [
      "Node",
      "express",
      "dotenv",
      "mongoose",
      "nodemailer",
      "pug",
      "bcryptjs",
      "cookie-parser",
      "stripe",
      "Heroku",
    ],
  },
  {
    id: "bank-app",
    title: "Bank App",
    desc: "Dummy login, single page banking application. Sample login details provided next to the login button. Focus in this app is mainly on manipulating simple dataset and displaying changes on to the page.",
    design: [
      "HTML and CSS Flexbox single page app, JavaScript functional programming, and Document Object Model (DOM).",
    ],
    functionality: [
      "JavaScript code is split into 4 files, data.js holds two account dummy data, helperFunctions.js formats transaction dates and currency, updatingUI.js runs all the functions required to display UI, script.js defines event listeners and performs data manipulation.",

      "Dummy login performed by checking user credentials and if correct, sets CSS opacity value from 0 to 100. Bank functionality allows users to transfer funds, request loans, and close current account. All of the actions are temporary and after page refresh reverts to the original dataset.",
    ],
    img: Bank,
    url: "https://ajuskys-bank-app.netlify.app/",
    hosted: "netlify",
    github: "https://github.com/arturasjuskys/ajuskys-bank_app",
    tech: ["HTML", "CSS", "JavaScript", "DOM", "Netlify"],
  },
  {
    id: "map-workouts",
    title: "Map Workouts",
    desc: "Mark places on the map where you workout, scroll through a list of your running and cycling bookmarks that will focus the map to selected session.",
    design: [
      "One page application developed using HTML, CSS and Leaflet open-source interactive maps. Interactivity with the app is controlled by JavaScript and Document Object Model (DOM).",
      "JavaScript code is split between 4 class files, 3 of which are located in /assets/js.",
    ],
    functionality: [
      "This app is an example of Object Oriented Programming (OOP) in JavaScript. Whole application is split into four classes to provide full functionality and interactivity with the page.",

      "Workout is the main class template that defines workout description, and holds geolocation info. Cycling and Running classes extend Workout class to add additional functionality to workout objects without repeating Workout class functionality code.",

      "App class encompases whole application logic including creation of Running and Cycling objects. Most of the methods belonging to the App class are _privateMethods, except one public reset() method to clear local storage if needed.",
    ],
    img: Map,
    url: "https://ajuskys-map.netlify.app/",
    hosted: "netlify",
    github: "https://github.com/arturasjuskys/ajuskys-map",
    tech: [
      "Object Oriented Programming (OOP)",
      "Leaflet maps",
      "DOM",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
  {
    id: "personal-dashboard",
    title: "Personal Dashboard",
    desc: "Single page React application. Designed to have useful resources in one place accessible from the web.",
    design: ["Working progress in design of this project."],
    functionality: [
      "Enables to keep project links, useful resources, and package installation snippets hosted online.",
    ],
    img: Dashboard,
    url: "https://ajuskys-game-dice.netlify.app/",
    hosted: "netlify",
    github: "https://github.com/arturasjuskys/ajuskys-dashboard",
    tech: ["React", "SASS", "Material-UI Icons"],
  },
  {
    id: "dice-game",
    title: "Dice Game",
    desc: "Two players minigame, roll the dice multiple times to add each roll to the current value and try not to roll 1, otherwise the other player gets the turn. Win the game by reaching 50 points before your opponent.",
    design: [
      "One page application developed using HTML and CSS. Interactivity with the game is controlled by JavaScript and Document Object Model (DOM).",
    ],
    functionality: [
      "The game is controlled by three event listeners attached to Roll Dice, Hold, and New Game buttons.",

      "Roll Dice button initiales random number from 1 to 6 and displays according dice image, dice values will be added to current score, if 1 is rolled switchPlayer function will run.",

      "Hold button checks for current player and adds current value to score and runs switchPlayer function.",

      "New Game button runs a function to reset variables to initial game conditions and set player 1 as the current active player.",
    ],
    img: Dice,
    url: "https://ajuskys-game-dice.netlify.app/",
    hosted: "netlify",
    github: "https://github.com/arturasjuskys/ajuskys-Dice_Game",
    tech: ["HTML", "CSS", "JavaScript", "DOM"],
  },
  {
    id: "gmn",
    title: "Guess the Number",
    desc: "Retro style simple number guessing game.",
    design: [
      "One page application developed using HTML and CSS. Interactivity with game elements is controlled by JavaScript and Document Object Model (DOM).",
    ],
    functionality: [
      "The game is controlled by two event listeners attached to the Check and Again buttons. Check button runs if/else statement that defines the game outcome. Again button resets game variables to initial conditions, so the game could be played another time.",
    ],
    img: Guess,
    url: "https://ajuskys-game-guess.netlify.app/",
    hosted: "netlify",
    github: "https://github.com/arturasjuskys/ajuskys-Guess_my_Number",
    tech: ["HTML", "CSS", "JavaScript", "DOM"],
  },
  {
    id: "northern-night-sky",
    title: "Northern Night Sky",
    desc: "",
    design: ["Working progress in design of this project."],
    functionality: ["Working progress in functionality of this project."],
    img: Sky,
    url: "https://ajuskys-sky.netlify.app/",
    hosted: "netlify",
    github: "https://github.com/arturasjuskys/ajuskys-sky",
    tech: [
      "React",
      "React-Router",
      "Axios",
      "React Icons",
      "SASS",
      "Node",
      "Express",
      "dotenv",
      "Postgres API",
      "Neltify",
      "Heroku",
    ],
  },
];
