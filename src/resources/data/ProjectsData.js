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

// Data Visualization Images
import salesAndBudgetAnalysis from "../images/projects/data-visualization/SalesAndBudgetAnalysis.png";
import executiveSalesReport from "../images/projects/data-visualization/ExecutiveSalesReport.png";
import finanacialComplaintsTablueau from "../images/projects/data-visualization/FinanacialComplaintsTablueau.png";
import financialStatisticsIncomeSource from "../images/projects/data-visualization/FinancialStatisticsIncomeSource.png";
import insuranceComplaintsAnalysis from "../images/projects/data-visualization/InsuranceComplaintsAnalysis.png";
import basicSalesAnalysis from "../images/projects/data-visualization/BasicSalesAnalysis.png";

// Power BI Images
import pageNavigationv01 from "../images/projects/power-bi/page-navigation-v01.gif";
import infoBoxPopUpv01 from "../images/projects/power-bi/info-box-pop-up-v01.gif";
import duplicateNames from "../images/projects/power-bi/handling-duplicate-names.png";
import hideVisualBasedOnSelection from "../images/projects/power-bi/display-visual-based-on-selection.gif";

// PySpark Project Images
import simpleEtl from "../images/projects/pyspark-projects/simple-etl.jpg";

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
    linkTitle: "Project Link",
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
    linkTitle: "Project Link",
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
    linkTitle: "Project Link",
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
    linkTitle: "Project Link",
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
    linkTitle: "Project Link",
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
      "During the pandemic (COVID-19), I decided to create a single-page resume and publish it on the web. This small idea led me to create the current website. This is my first attempt at creating a website so feel free to inspect my code and reach me by email with any feedback.",
    linkTitle: "Project Link",
    link: "https://github.com/preetparmar/my-react-website",
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
    linkTitle: "Project Link",
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
    linkTitle: "Project Link",
    link: "https://github.com/preetparmar/Website-Animations/tree/main/Feedback%20UI",
  },

  // Split Landing Page
  {
    title: "Split Landing Page",
    style: "",
    type: "",
    image: splitLandingPageGif,
    detail: "A split landing page to showcase or compare any two products.",
    linkTitle: "Project Link",
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
    linkTitle: "Project Link",
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
    linkTitle: "Project Link",
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
    linkTitle: "Project Link",
    link: "https://github.com/preetparmar/Python-APIs/tree/main/Search-Console-API",
  },

  // Dropbox API
  {
    title: "Dropbox API",
    style: "",
    type: "text-only",
    image: null,
    detail:
      "I started to track my expenses on my phone, and the app that I was using had a feature where I could export my expenses in CSV format to my dropbox. The idea was to create a dashboard using Power BI and Tableau. To connect the data to dropbox, I decided to download the files to local storage. To avoid the manual download, I thought of automating that.",
    linkTitle: "Project Link",
    link: "https://github.com/preetparmar/Python-APIs/tree/main/Dropbox-API",
  },

  // Kaggle API
  {
    title: "Kaggle API",
    style: "",
    type: "text-only",
    image: null,
    detail:
      "An API to fetch data from Kaggle Competitions based off official Kaggle API. It can be used for searching, getting a list, and downloading files for competition.",
    linkTitle: "Project Link",
    link: "https://github.com/preetparmar/Python-APIs/tree/main/Kagge-API",
  },
];

// Python GUIs
const pythonGUI = [
  // NotePad
  {
    title: "Notepad",
    style: "row",
    type: "",
    image: notepadImage,
    detail:
      "A notepad created in python using tkinter library. I have added various functionalities like: creating a note, changing fonts, change font styles or font sizes, saving the file, and opening a saved file.",
    linkTitle: "Project Link",
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
    linkTitle: "Project Link",
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
    linkTitle: "Project Link",
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
    linkTitle: "Project Link",
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
    linkTitle: "Project Link",
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
    linkTitle: "Project Link",
    link: "https://github.com/preetparmar/Machine-Learning-Projects/blob/main/MNIST%20Data.ipynb",
  },
];

// Data Visualization
const dataVisualization = [
  // Insurance Complaints Analysis
  {
    title: "Insurance Complaints Analysis using Power BI",
    style: "row",
    type: "",
    image: insuranceComplaintsAnalysis,
    detail:
      "Insurance Complaints Analysis which focuses on enhancing user interactions using a custom theme, navigation buttons, dynamic measures, and much more...",
    linkTitle: "Project Link",
    link: "https://github.com/preetparmar/Data-Visualization/tree/main/Insurance%20Complaints%20Analysis%20using%20Power%20BI",
  },

  // Executive Sales Report
  {
    title: "Executive Sales Report using Power BI",
    style: "row",
    type: "",
    image: executiveSalesReport,
    detail:
      "An Executive Sales Dashboard with some advanced features like dynamic measures, dynamic titles, button to clear all filters and more...",
    linkTitle: "Project Link",
    link: "https://github.com/preetparmar/Data-Visualization/tree/main/Executive%20Sales%20Report%20using%20Power%20BI",
  },

  // Financial Complaints in Tableau
  {
    title: "Financial Complaints Report using Tableau",
    style: "row",
    type: "",
    image: finanacialComplaintsTablueau,
    detail:
      "A replication of a very interesting dashbaord I came across in Tableau. It goes over Financial Complaints Dataset and used various advanced visuals.",
    linkTitle: "Project Link",
    link: "https://public.tableau.com/app/profile/preet.parmar6806/viz/FinancialComplaints_16446649411580/FCOVERVIEW?publish=yes",
  },

  // Financial Statistics using Excel
  {
    title: "Financial Statistics using Excel",
    style: "row",
    type: "",
    image: financialStatisticsIncomeSource,
    detail:
      "Analyzing Financial data and taking Excel to a next level with some customized visual like a donut chart & a speed gauge chart, and advanced formating techniques.",
    linkTitle: "Project Link",
    link: "https://github.com/preetparmar/Data-Visualization/tree/main/Financial%20Statistics%20using%20Excel",
  },

  // Sales and Budget Analysis
  {
    title: "Sales & Budget Analysis using Power BI",
    style: "row",
    type: "",
    image: salesAndBudgetAnalysis,
    detail:
      "Analysed Sales and Budget using a random dataset with the help of various visuals and metrics. Also used different visuals as tooltips for a more granular presentation.",
    linkTitle: "Project Link",
    link: "https://github.com/preetparmar/Data-Visualization/tree/main/Sales%20and%20Budget%20Analysis%20using%20Power%20BI",
  },

  // Basic Sales Analysis using Power BI
  {
    title: "Basic Sales Analysis using Power BI",
    style: "row",
    type: "",
    image: basicSalesAnalysis,
    detail:
      "This dashboard is perfect for someone starting with Power BI. It is one of the fundamental projects I've created. For some advanced dashbaords, refer to my other projects.",
    linkTitle: "Project Link",
    link: "https://github.com/preetparmar/Data-Visualization/tree/main/Basic%20Sales%20Analysis%20using%20Power%20BI",
  },
];

// Power BI Mini Projects
const powerBiMiniProjects = [
  // Page Navigation v1
  {
    title: "Page Navigation v1",
    style: "row",
    type: "",
    image: pageNavigationv01,
    detail:
      "A custom page navigation bar using the built in navigator in Power BI with the help of the new page navigation buttons.",
    linkTitle: "Project Link",
    link: "https://github.com/preetparmar/PowerBI-Mini-Projects/tree/main/Page%20Navigation%20-%2001",
  },

  // Display Visual Based on Selection
  {
    title: "Display Visual Based on Selection",
    style: "row",
    type: "",
    image: hideVisualBasedOnSelection,
    detail:
      "Displaying visual based on a specific condition. A custom solution to a very common problem faced while using Power BI.",
    linkTitle: "Project Link",
    link: "https://blog.preetparmar.com/display-visuals-based-on-selection/",
  },

  // Info Box PopUp v1
  {
    title: "Info Box Pop Up v1",
    style: "row",
    type: "",
    image: infoBoxPopUpv01,
    detail:
      "A picture does say a thousand words. But sometimes we need additional information to make sense of the visual. A pop up text box for adding that additional information.",
    linkTitle: "Project Link",
    link: "https://github.com/preetparmar/PowerBI-Mini-Projects/tree/main/Page%20Navigation%20-%2001",
  },

  // Handling Duplicate Names
  {
    title: "Handling Duplicate Names",
    style: "row",
    type: "",
    image: duplicateNames,
    detail:
      "Tired of getting duplicate names in your dataset? A better way to handle those duplicates by using a special unicode: Zero-Width space. ",
    linkTitle: "Project Link",
    link: "https://blog.preetparmar.com/power-bi-handling-customer-with-same-name/",
  },
];

// PySpark Projects
const pysparkProjects = [
  // Simple ETL
  {
    title: "Simple ETL",
    style: "row",
    type: "",
    image: simpleEtl,
    detail:
      "Since Tableau doesn't allow us to pivot data coming from different connections. I decided to take this process to PySpark.",
    linkTitle: "Project Link",
    link: "https://github.com/preetparmar/PySpark-Projects/tree/main/01.%20Pivoting%20Data",
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
  dataVisualization,
  powerBiMiniProjects,
  pysparkProjects,
};
