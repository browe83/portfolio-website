import proj1Img1 from './images/Project_1_Img_1.png';
import proj1Img2 from './images/Project_1_Img_2.png';
import proj1Img3 from './images/Project_1_Img_3.png';
import proj2Img1 from './images/Project_2_Img_1.png';
import proj2Img2 from './images/Project_2_Img_2.png';
import proj2Img3 from './images/Project_2_Img_3.png';
import proj3Img1 from './images/Project_3_Img_1.png';
import proj3Img2 from './images/Project_3_Img_2.png';
// import proj3Img3 from './images/Project_3_Img_3.png';
import proj4Img1 from './images/Project_4_Img_1.png';
import proj4Img2 from './images/Project_4_Img_2.png';
import proj4Img3 from './images/Project_4_Img_3.png';
import proj5Img1 from './images/Project_5_Img_1.png';
import proj5Img2 from './images/Project_5_Img_2.png';
import proj5Img3 from './images/Project_5_Img_3.png';
import proj6Img1 from './images/Project_6_Img_1.png';
import proj6Img2 from './images/Project_6_Img_2.png';
import proj6Img3 from './images/Project_6_Img_3.png';
import proj7Img1 from './images/Project_7_Img_1.png';
import proj7Img2 from './images/Project_7_Img_2.png';
import proj8Img1 from './images/Project_8_Img_2.png';
import proj8Img2 from './images/Project_8_Img_1.png';
import proj8Img3 from './images/Project_8_Img_3.png';


export const projects = [
    {
      id: 0,
      project_name: "A Random Quote Generator",
      description: "This project creates an app that displays random motivational quotes that are updated every 10 seconds or with the click of a mouse. The images below show example quotes.",
      technologies: ["VSCode", "GitHub", "JavaScript"],
      live_link: "https://browe83.github.io/A-Random-Quote-Generator/a_random_quote_generator-v1/index.html",
      github_link: "https://github.com/browe83/A-Random-Quote-Generator",
      images: [
        proj1Img1,
        proj1Img2,
        proj1Img3,
      ]
    },
    {
      id: 1,
      project_name: "List Pagination and Filtering",
      description: "This project enhances a web page using pagination and filtering.  Starting with a list of 54 fictional students with photos and emails, the application displays 10 students at a time and adds a navigation system, a series of links at the bottom of page, to allow users to click through students, 10 at a time.  Users can also filter students by name, using the search bar.  The first image below shows the initial pagination links, while the second shows a filtered page after a user search.",
      technologies: ["VSCode",  "GitHub", "JavaScript"],
      live_link: "https://browe83.github.io/List-Pagination-and-Filtering/list_pagination_and_filtering-v1/index.html",
      github_link: "https://github.com/browe83/List-Pagination-and-Filtering",
      images: [
        proj2Img1,
        proj2Img2,
        proj2Img3,
      ]
    },
    {
      id: 2,
      project_name: "Interactive Form",
      description: "This project enhances an interactive registration form for a fictional conference called 'FullStack Conf.' by adding customized and conditional behavior and interactivity and validating user input as well as providing helpful error messages when the user enters invalid information into the form fields. The images below show the form with user validation messages.",
      technologies: ["VSCode", "GitHub", "JavaScript"],
      live_link: "https://browe83.github.io/Interactive-Form/interactive-form-v2/index.html",
      github_link: "https://github.com/browe83/Interactive-Form",
      images: [
        proj3Img1,
        proj3Img2,
        // proj3Img3,
      ]
    },
    {
      id: 3,
      project_name: "OOP Game Show App",
      description: "This project creates a browser-based, word guessing game: `Phrase Hunter.' Using JavaScript and Object-Oriented Programming, it selects a random, hidden phrase, which a player tries to guess, by clicking letters on an onscreen or physical keyboard.  The first image shows initial state of a new game, while the second shows a partially completed game. The hearts at the bottom indicate how many incorrect attempts a player has before losing.",
      live_link: "https://browe83.github.io/OOP-Game-Show/oop_game-v2/index.html",
      technologies: ["VSCode",  "GitHub", "JavaScript"],
      github_link: "https://github.com/browe83/OOP-Game-Show",
      images: [
        proj4Img1,
        proj4Img2,
        proj4Img3,
      ]
    },
    {
      id: 4,
      project_name: "Public API Requests",
      description: "This project builds an app for a fictional company called Awesome Startup, a distributed company with remote employees working all over the world. It simulates requests a JSON object from the API and parses the data so that 12 employees are listed in a grid with their thumbnail image, full name, email, and location. Clicking the employee’s image or name will open a modal window with more detailed information, such as the employee’s birthday and address.",
      technologies: ["VSCode",  "GitHub", "JavaScript"],
      github_link: "https://github.com/browe83/Public-API-Requests",
      live_link: "https://browe83.github.io/Public-API-Requests/public_api_request-v1/index.html",
      images: [
        proj5Img1,
        proj5Img2,
        proj5Img3,
      ]
    },
    {
      id: 5,
      project_name: "SQL Library Mangager",
      description: "This project creates a an application for fictional local library to help them manage their collection of books.  The application includes pages to list, add, update, an delete books.  The images below show examples of pages to add and update books.",
      technologies: ["VSCode", "PUG", "SQLite", "Sequelize ORM", "Node.js" ],
      github_link: "https://github.com/browe83/SQL-Library-Manager",
      images: [
        proj6Img1,
        proj6Img2,
        proj6Img3,
      ]
    },
    {
      id: 6,
      project_name: "React Gallery App",
      description: "This project bootstraps an image gallery application using the Create React App and the Flickr API.  After submitting a query, users receive a collection of related-images.",
      technologies: ["VSCode", "GitHub", "React.js"],
      github_link: "https://github.com/browe83/React-Gallery-App",
      images: [
        proj7Img1,
        proj7Img2,
      ]
    },
    {
      id: 7,
      project_name: "Full Stack App with React and a REST API",
      description: "This project creates a full stack application with a React front-end and a RESTful Express API.  It provides a way for users to adminster a school database containing information about courses: users can interact with the database by retrieving a list of courses, viewing details for a specific course, as well as creating, updating and deleting courses in the database.  The app requires users to create an account and sign in to make changes to the database.",
      technologies: ["VSCode", "GitHub", "Express", "ReactJS", "NodeJS",  "Sequelize ORM", "SQLite"],
      github_link: "https://github.com/browe83/Full-Stack-App-with-React-and-a-REST-API",
      images: [
        proj8Img1,
        proj8Img2,
        proj8Img3,
      ]
    }
  ]

