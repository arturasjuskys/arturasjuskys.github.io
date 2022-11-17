import Shop from "../screenShots/Shop.jpg";
import Reddit from "../screenShots/Reddit.jpg";
import Natours from "../screenShots/Natours.jpg";
import Guess from "../screenShots/Guess.jpg";
import Dice from "../screenShots/Dice.jpg";
import Dashboard from "../screenShots/Dashboard.jpg";
import Bank from "../screenShots/Bank.jpg";
import Map from "../screenShots/Map.jpg";
import Page from "../screenShots/Page.jpg";
import Restaurant from "../screenShots/Restaurant.jpg";

export const skills = {
  frontEnd: [
    "JavaScript",
    "React",
    "React-Redux",
    "React-Routing",
    "HTML",
    "CSS",
    "SASS",
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

      "API folder, holds connection to MongoDB database, api and Stripe endpoints, and data models. Client folder contains React, React-Redux, and Stripe code required to create a user interface with the shop.",

      "Access products page by featured categories or following link to all products page, sort them by list of categories. Product page gives access to choose product colour, size, and quantity before adding it to the cart. Inside the cart page use Stripe checkout button, and dummy card details to finish payment method and send order details to stripe dashboard.",
    ],
    img: Shop,
    url: "https://ajuskys-shop.netlify.app/",
    hosted: "netlify",
    github: "https://github.com/arturasjuskys/ajuskys-shop",
    tech: [
      "MERN Stack (MongoDB, Express, React, Node)",
      "Client Side Rendering",
      "Client/Server Side Routing",
      "Stripe",
      "HTML, CSS, JS",
      "Responsive Design",
      "API",
      "Netlify Hosting",
    ],
  },
  {
    id: "restaurant",
    title: "Restaurant - AJ Cuisine",
    desc: "Static multi-page restaurant website with functional contact and booking forms. Pages are developed using plain HTML, CSS, and JavaScript. Scroll animations are achieved using AOS (Animate On Scroll Library).",
    design: [
      "Whole website consists of five pages: Home, Menu, About, Contact, and Booking. Contact and Booking pages have functional forms that send form data to the Netlify dashboard. Websites text content is Lorem to fill and represent page layout.",
    ],
    img: Restaurant,
    url: "https://ajuskys-restaurant.netlify.app/",
    hosted: "netlify",
    github: "https://github.com/arturasjuskys/ajuskys-restaurant",
    tech: [
      "Static Multi-page Website",
      "HTML, CSS, JS",
      "HTML Forms",
      "AOS (Animate On Scroll Library)",
      "Mobile First Design",
      "Netlify Hosting",
    ],
  },
  {
    id: "reddit-api-reader",
    title: "Reddit API Reader",
    desc: "This is a front-end development project, and the main objective is to receive json data, handle it and display it using `React-Redux`. This is not meant to be a copy of the existing reddit platform.",
    design: [
      "React enables creation of a web page that feels fast and instant like an application. SASS mixins and style nesting provides clean and easy to read CSS. Searching feed and opening posts to read comments is implemented with React-Redux.",

      "Page state is managed by React-Redux library that allows to manage all of the data in one place. Making calls to Reddit API, formatting received json data and displaying it to the page, all done with redux slices and persisted redux store.",
    ],
    img: Reddit,
    url: "https://ajuskys-reddit.netlify.app/",
    hosted: "netlify",
    github: "https://github.com/arturasjuskys/ajuskys-reddit",
    tech: [
      "React",
      "Client Side Rendering",
      "Client Side Routing",
      "HTML, SASS, JS",
      "Responsive Design",
      "Reddit API",
      "Netlify Hosting",
    ],
  },
  {
    id: "bank-page",
    title: "Bank Website",
    desc: "Minimalistic landing page meant to market banking platform. Page includes sticky navbar, lazy image loading, content with tabs, slider, and pop-up windows.",
    design: [
      "Static HTML page, animated using JavaScript and Intersection Observer API. Intersection Observer allows animate page scroll and lazy image loading.",

      "Tabbed content, slider and pop-up windows are coded using JavaScript  and CSS without the use of any external libraries.",
    ],
    img: Page,
    url: "https://ajuskys-bank-page.netlify.app/",
    hosted: "netlify",
    github: "https://github.com/arturasjuskys/ajuskys-bank_page",
    tech: [
      "HTML, CSS, JS",
      "Responsive Design",
      "Intersection Observer API",
      "Neltify Hosting",
    ],
  },
  {
    id: "bank-app",
    title: "Bank App",
    desc: "Dummy login, single page banking application. Sample login details provided next to the login button. Focus in this app is mainly on manipulating dataset and displaying changes on to the page.",
    design: [
      "Dummy login performed by checking user credentials and if correct, sets CSS opacity value from 0 to 100. Bank functionality allows users to transfer funds, request loans, and close current account. All of the actions are temporary and after page refresh reverts to the original dataset.",
    ],
    img: Bank,
    url: "https://ajuskys-bank-app.netlify.app/",
    hosted: "netlify",
    github: "https://github.com/arturasjuskys/ajuskys-bank_app",
    tech: ["HTML, CSS, JS", "Responsive Design", "Netlify Hosting"],
  },
  {
    id: "natours",
    title: "Natours - Traveling Agency",
    desc: "This is a Full-Stack application employing RESTful API and server side rendering with Pug templates.",
    design: [
      "The root of this application contains back-end code, while the public folder contains all the front-end code. App server and API are designed using Node and Express to create industry standard MVC architecture, model, view, and controller.",

      "This type of concerns division allows to create complex but readable codebase that can be modified and extended without changing all of the code.",
    ],
    img: Natours,
    url: "https://natours-arturas.herokuapp.com/",
    hosted: "heroku",
    github: "https://github.com/arturasjuskys/Node.js_Bootcamp_2021-Natours",
    tech: [
      "Server Side Rendering",
      "Server Side Routing",
      "Node",
      "Express",
      "MongoDB",
      "RESTful API",
      "Node Mailer",
      "Pug Templates",
      "Stripe",
      "Heroku Hosting",
    ],
  },
  {
    id: "map-workouts",
    title: "Map Workouts",
    desc: "Static single page application developed using HTML, CSS and Leaflet open-source interactive maps. Interactivity with the app is controlled by JavaScript and Document Object Model (DOM). This app is an example of Object Oriented Programming (OOP) in JavaScript.",
    design: [
      "Workout is the main class template that defines workout description, and holds geolocation info. Cycling and Running classes extend Workout class to add additional functionality to workout objects without repeating Workout class functionality code. ",

      "App class encompases whole application logic including creation of Running and Cycling objects. Most of the methods belonging to the App class are _privateMethods, except one public reset() method to clear local storage if needed.",
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
      "Static page",
      "Object Oriented Programming (OOP)",
      "Leaflet maps",
      "HTML, CSS, JS",
      "Responsive Design",
    ],
  },
  {
    id: "dice-game",
    title: "Dice Game",
    desc: "Two players minigame, roll the dice multiple times to add each roll to the current value and try not to roll 1, otherwise the other player gets the turn. Win the game by reaching 50 points before your opponent.",
    design: [
      "One page application developed using HTML and CSS. Interactivity with the game is controlled by JavaScript and Document Object Model (DOM).",

      "The game is controlled by three event listeners attached to Roll Dice, Hold, and New Game buttons.",
    ],
    img: Dice,
    url: "https://ajuskys-game-dice.netlify.app/",
    hosted: "netlify",
    github: "https://github.com/arturasjuskys/ajuskys-Dice_Game",
    tech: ["Static page", "HTML, CSS, JS", "Responsive Design"],
  },
  {
    id: "guess-the-number",
    title: "Guess the Number",
    desc: "Retro style simple number guessing game.",
    design: [
      "One page application developed using HTML and CSS. Interactivity with game elements is controlled by JavaScript and Document Object Model (DOM).",

      "The game is controlled by two event listeners attached to the Check and Again buttons. Check button runs if/else statement that defines the game outcome. Again button resets game variables to initial conditions, so the game could be played another time.",
    ],
    img: Guess,
    url: "https://ajuskys-game-guess.netlify.app/",
    hosted: "netlify",
    github: "https://github.com/arturasjuskys/ajuskys-Guess_my_Number",
    tech: ["Static page", "HTML, CSS, JS", "Responsive Design"],
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
    tech: [
      "Client Side Rendering",
      "React",
      "HTML, SASS, JS",
      "Responsive Design",
    ],
  },
];
