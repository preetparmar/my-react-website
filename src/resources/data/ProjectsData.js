// Use style key for setting the style of layout: 'row' or blank for column layout
// Use type key for defining if the content contains no image: 'text-only' (with link) | 'single' (without link)

// Importing Images
import trexGif from "../images/projects/python-games/trex.gif";
import flappyGif from "../images/projects/python-games/flappy.gif";
import asteroidClashImage from "../images/projects/python-games/asteroid-clash.png";
import snakeImage from "../images/projects/python-games/snake.png";
import expandingImageGif from "../images/projects/website-animations/expanding-image.gif";
import feedbackUiGif from "../images/projects/website-animations/feedback-ui.gif";
import inputWaveGif from "../images/projects/website-animations/input-wave.gif";
import splitLandingPageGif from "../images/projects/website-animations/split-landing-page.gif";
import notepadImage from "../images/projects/python-gui/notepad.png";
import calculatorImage from "../images/projects/python-gui/calculator.png";
import checklistGif from "../images/projects/python-gui/checklist.gif";
import metricsConverterGif from "../images/projects/python-gui/metrics-converter.gif";

// PYTHON GAMES
const pythonGames = [
  // T Rex Run
  {
    title: "T Rex Run",
    style: "",
    type: "",
    image: trexGif,
    detail:
      "The famous Dino Game in Python using PyGame. I have incorporated sprites for animations, included sounds for jump, score and a highscore counter.",
    link: "https://github.com/preetparmar/Python-Games/tree/master/TRex-Rush",
  },

  // Flappy Bird
  {
    title: "Flappy Bird",
    style: "row",
    type: "",
    image: flappyGif,
    detail:
      "This is one of the most annoying yet entertaining games. I recreated the classic version in Python using the PyGame module.",
    link: "https://github.com/preetparmar/Python-Games/tree/master/Flappy-Bird",
  },

  // Asteroid Clash
  {
    title: "Asteroid Clash",
    style: "row",
    type: "",
    image: asteroidClashImage,
    detail:
      "The famouse Asteroid game recreated using Pygame and Object Oriented Programming concepts in python",
    link: "https://github.com/preetparmar/Python-Games/tree/master/Asteroid%20Clash",
  },

  // Snake Game
  {
    title: "Snake",
    style: "row",
    type: "",
    image: snakeImage,
    detail:
      "Being a 90s kid this game is very close to my heart. I wanted to make this game my own and in process widen my skill and knowledge about python modules.",
    link: "https://github.com/preetparmar/Python-Games/tree/master/Snake-Game",
  },
  // Blackjack
  {
    title: "Blackjack",
    style: "",
    type: "",
    image: null,
    detail:
      "A CLI python game focusing on the implementaion and use of Python Classes. I decided on doing this project to get the basic understanding of using Python as an Object Oriented Progamming Language.",
    link: "https://github.com/preetparmar/Python-Games/tree/master/Blackjack",
  },
];

// MY WEBSITE
const myWebsite = [
  {
    title: null,
    style: "",
    type: "single",
    image: null,
    detail:
      "During the pandemic (COVID-19), I decided to create a single page resume and publish it to the web. This small idea led me to create the current website. This is my first attempt at creating a website so feel free to inspect my code and reach me at my email with any feedback.",
    link: null,
  },
];

// WEBSITE ANIMATION
const websiteAnimations = [
  // Expanding Cards
  {
    title: "Expanding Cards",
    style: "",
    type: "",
    image: expandingImageGif,
    detail:
      "A very cool animation which can be used for showcasing your catalog or navigating your site.",
    link: "https://github.com/preetparmar/Website-Animations/tree/main/Expanding%20Images",
  },

  // Feedback UI
  {
    title: "Feedback UI",
    style: "row",
    type: "",
    image: feedbackUiGif,
    detail:
      "Clean and simple animation to register feedback from customers. I have used Element Bubbling to select various elements.",
    link: "https://github.com/preetparmar/Website-Animations/tree/main/Feedback%20UI",
  },

  // Split Landing Page
  {
    title: "Split Landing Page",
    style: "",
    type: "",
    image: splitLandingPageGif,
    detail: "A split landing page to showcase or compare any two products.",
    link: "https://github.com/preetparmar/Website-Animations/tree/main/Split%20Landing%20Page",
  },

  // Input Wave Animation
  {
    title: "Input Wave Animation",
    style: "row",
    type: "",
    image: inputWaveGif,
    detail:
      "A cool looking animation which triggers when you select an input field.",
    link: "https://github.com/preetparmar/Website-Animations/tree/main/Input%20Wave%20Animation",
  },
];

// TELEGRAM BOT
const telegramBot = [
  {
    title: null,
    style: "single",
    type: "text-only",
    image: null,
    detail:
      "Created my very own Telegram Bot using Python and utilised some APIs like Oxford API, Dark Sky Weather API, Google's Geo Location API and TheCocktailDB API. I have added some useful as well some fun functionalites to the bot.",
    link: "https://github.com/preetparmar/Telegram-Bot",
  },
];

// MY APIs
const apiProjects = [
  // Google Search Console API
  {
    title: "Google Search Console API",
    style: "",
    type: "text-only",
    image: null,
    detail:
      "The Google Search Platform has a limitaion of exporting only 1000 rows at a given time, and the data can't be exported by Day, Keyword, Pages and Devices all together. I created a GUI based API in Python which exports the data with all the dimensions and also bypasses the limiation on number of rows.",
    link: "https://github.com/preetparmar/Search-Console-API",
  },

  // Kaggle API
  {
    title: "Kaggle API",
    style: "",
    type: "text-only",
    image: null,
    detail:
      "An API to fetch data from Kaggle Competitions based off official Kaggle API",
    link: "https://github.com/preetparmar/Kaggle-API",
  },
];

// MY APIs
const pythonGUI = [
  // NotePad
  {
    title: "Notepad",
    style: "row",
    type: "",
    image: notepadImage,
    detail:
      "A notepad created in python using tkinter library. I have added various functionalities like: creating a note, changing fonts, change font styles or font sizes, saving the file, and opening a saved file.",
    link: "https://github.com/preetparmar/My-GUI/tree/main/05.%20Notepad",
  },

  // Calculator
  {
    title: "Calculator",
    style: "row",
    type: "",
    image: calculatorImage,
    detail:
      "Fully functional calculator with features like Addition, Substraction, Division, Multiplication, Inverse, Square, and Exponential created in python.",
    link: "https://github.com/preetparmar/My-GUI/tree/main/04.%20Calculator",
  },

  // Simple Checklist
  {
    title: "Simple Checklist",
    style: "",
    type: "",
    image: checklistGif,
    detail:
      "A simple checklist with features like Adding, Removing, Clearing and Saving the checklist.",
    link: "https://github.com/preetparmar/My-GUI/tree/main/03.%20Simple%20Checklist",
  },

  // Simple Checklist
  {
    title: "Metrics Converter",
    style: "",
    type: "",
    image: metricsConverterGif,
    detail:
      "Metrics Converter where you can enter the base value and select the unit you want to convert your base value into.",
    link: "https://github.com/preetparmar/My-GUI/tree/main/02.%20Metric%20Helper",
  },
];

// Machine Learning Projects
const machineLearningProjects = [
  // California House Prices
  {
    title: "California House Prices",
    style: "single",
    type: "text-only",
    image: null,
    detail:
      "Analysed California House Prices and applied some of Machine Learning Algorithms like Linear Regression, Decision Tree Regressor, and Random Forest Regressor. This project is more focused the cleaning, analyzing and visualizing the data.",
    link: "https://github.com/preetparmar/Machine-Learning-Projects/blob/main/California%20House%20Prices.ipynb",
  },

  // MNIST Categorization
  {
    title: "MNIST Categorization",
    style: "single",
    type: "text-only",
    image: null,
    detail:
      "Analysed MNIST data and applied few classification algorithms. This project is a start-up project, where I go over some of the evaluation techniques for classification models.",
    link: "https://github.com/preetparmar/Machine-Learning-Projects/blob/main/MNIST%20Data.ipynb",
  },
];

export {
  pythonGames,
  myWebsite,
  websiteAnimations,
  telegramBot,
  apiProjects,
  pythonGUI,
  machineLearningProjects,
};
