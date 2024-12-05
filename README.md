# FullStackOpen 2024 course - Progress Tracker

This repository contains my progress as I work through the [FullStackOpen](https://fullstackopen.com/en) course. I will update this file every day as I complete new exercises.

## Course Overview

The FullStackOpen course is focused on modern web development. The course covers everything from the fundamentals of web applications, React, Node.js, MongoDB, GraphQL, and TypeScript.

## Progress by Part

### Part 0: Fundamentals of Web Applications

- [x] **0.1: HTML Basics** - Reviewed the HTML tutorial on Mozilla Developer Network (MDN).
- [x] **0.2: CSS Basics** - Reviewed the CSS tutorial on Mozilla Developer Network (MDN).
- [x] **0.3: HTML Forms** - Reviewed the form basics on MDN.
- [x] **0.4: New Note Diagram** - Created a diagram that describes the process of creating a new note on a web page.
- [x] **0.5: Single Page Application Diagram** - Diagrammed how a Single Page Application works.
- [x] **0.6: New Note in Single Page Application** - Diagrammed the process of creating a new note in a SPA.

### Part 1: Introduction to React

- [x] **1.1: Course Info, Step 1** - Set up a React application that displays course information.
- [x] **1.2: Course Info, Step 2** - Refactored the code to use separate components for course header, content, and total.
- [x] **1.3: Course Info, Step 3** - Continued refactoring the code, breaking down the course content into individual parts.
- [x] **1.4: Course Info, Step 4** - Refactored the application to use arrays and passed array data via props.
- [x] **1.5: Course Info, Step 5** - Completed the Course Info application by calculating the total number of exercises using the array method `.reduce()`.
- [x] **1.6: Unicafe, Step 1** - Set up state using React's `useState` hook for tracking feedback (good, neutral, bad).
- [x] **1.7: Unicafe, Step 2** - Expanded the Unicafe application to display the total count of feedbacks.
- [x] **1.8: Unicafe, Step 3** - Calculated the average score and percentage of positive feedback in the Unicafe application.
- [x] **1.9: Unicafe, Step 4** - Displayed the feedback statistics in a more structured way.
- [x] **1.10: Unicafe, Step 5** - Refactored the feedback buttons and statistics into separate components.
- [x] **1.11: Unicafe, Step 6** - Changed the feedback statistics display into a table format.
- [x] **1.12: Anecdotes, Step 1** - Created a React app to display random anecdotes from a predefined list.
- [x] **1.13: Anecdotes, Step 2** - Added a voting system to the Anecdotes app where each anecdote can be voted on.
- [x] **1.14: Anecdotes, Step 3** - Displayed the anecdote with the highest vote count in a separate section.

### Part 2: Communicating with Server

- [x] **2.1: Course Information, Step 6** - Extend the course information application to handle multiple courses.
- [x] **2.2: Course Information, Step 7** - Add support for multiple modules from different courses in the same structure.
- [x] **2.3: Course Information, Step 8** - Create a `Course` component to encapsulate rendering logic.
- [x] **2.4: Course Information, Step 9** - Refactor the structure by moving the `Course` component to its own file.
- [x] **2.5: Course Information, Step 10** - Finalize the application by further breaking down components if needed.
- [x] **2.6: The Phonebook, Step 1** - Set up the initial structure for a phonebook application with a form to add names.
- [x] **2.7: The Phonebook, Step 2** - Add functionality to prevent duplicate names and show a warning if the name already exists.
- [x] **2.8: The Phonebook, Step 3** - Extend the phonebook app to handle phone numbers in addition to names.
- [x] **2.9: The Phonebook, Step 4** - Add a filter for searching names within the phonebook.
- [x] **2.10: The Phonebook, Step 5** - Separate components for the filter, form, and contact list for cleaner code.
- [x] **2.11: The Phonebook, Step 6** - Connect the phonebook app to a JSON server for persisting contacts.
- [x] **2.12: The Phonebook, Step 7** - Retrieve the initial contact data from the server.
- [x] **2.13: The Phonebook, Step 8** - Add functionality to create new contacts on the server.
- [x] **2.14: The Phonebook, Step 9** - Implement error handling for adding duplicate contacts with server communication.
- [x] **2.15: The Phonebook, Step 10** - Add functionality to delete contacts from the server.
- [x] **2.16: The Phonebook, Step 11** - Improve the user experience by showing notifications for actions.
- [x] **2.17: The Phonebook, Step 12** - Ensure smooth operation when handling data in multiple browsers simultaneously.
- [x] **2.18: Country Data, Step 1** - Implement a search feature to view information about different countries.
- [x] **2.19: Country Data, Step 2** - Add buttons next to country names to show detailed information on demand.
- [x] **2.20: Country Data, Step 3** - Display weather information for the capital of the country selected.

### Part 3: Programming a Server with NodeJS and Express, deploying application, saving infomation on MongoDB and validating data with ESLint 

- [x] **3.1: Phonebook Backend, Step 1** - Implemented a Node.js application that returns a hardcoded list of phonebook entries at the endpoint /api/persons.
- [x] **3.2: Phonebook Backend, Step 2** - Added an endpoint /info to show the number of entries in the phonebook and the time of the request.
- [x] **3.3: Phonebook Backend, Step 3** - Implemented functionality to fetch information about a single phonebook entry using its ID.
- [x] **3.4: Phonebook Backend, Step 4** - Added functionality to delete a phonebook entry via an HTTP DELETE request.
- [x] **3.5: Phonebook Backend, Step 5** - Expanded the backend to support adding new entries with HTTP POST requests.
- [x] **3.6: Phonebook Backend, Step 6** - Implemented error handling for creating new entries, such as missing name/number or duplicate names.
- [x] **3.7: Phonebook Backend, Step 7** - Integrated the morgan middleware for logging HTTP requests in a concise format.
- [x] **3.8: Phonebook Backend, Step 8** - Configured morgan to log the request body for HTTP POST requests.
- [x] **3.9: Phonebook Backend, Step 9** - Connected the backend with the phonebook frontend and adjusted the API endpoints.
- [x] **3.10: Phonebook Backend, Step 10** - Deployed the backend to a cloud hosting service (e.g., Render or Fly.io).
- [x] **3.11: Full Stack Phonebook Deployment** - Built the frontend for production and served it via the backend.
- [x] **3.12: Command-Line MongoDB** - Added a script to manage phonebook entries in MongoDB from the command line.
- [x] **3.13: Phonebook Database, Step 1** - Updated the backend to fetch all phonebook entries from MongoDB.
- [x] **3.14: Phonebook Database, Step 2** - Modified the backend to save new phonebook entries to MongoDB.
- [x] **3.15: Phonebook Database, Step 3** - Ensured the deletion of phonebook entries is reflected in MongoDB.
- [x] **3.16: Phonebook Database, Step 4** - Moved error handling logic to a middleware for better organization.
- [x] **3.17: Phonebook Database, Step 5** - Added support for updating phone numbers with an HTTP PUT request.
- [x] **3.18: Phonebook Database, Step 6** - Ensured all routes, including /api/persons/:id and /info, work directly with the database.
- [x] **3.19: Phonebook Database, Step 7** - Implemented validation for Name and phone numbers to ensure correct length.
- [x] **3.20: Phonebook Database, Step 8** - Implemented validation for phone numbers to ensure correct formatting.
- [x] **3.21: Full Stack Production Deployment** - Deployed the full-stack application (backend serving the production frontend) to the cloud.
- [x] **3.22: Lint Configuration** - Added ESLint to the application and resolved all warnings.

### Future Parts

- Parts 4 and beyond will be added as I continue working through the course.

## How I Update This README

I will be updating this README daily after completing each exercise. My goal is to document my learning process, the challenges I face, and my overall progress in the course.

## About the Course

The FullStackOpen course is offered by the University of Helsinki and covers the following topics:
- Fundamentals of Web Development
- React
- Node.js & Express
- MongoDB
- GraphQL
- TypeScript

Feel free to follow my progress and explore the exercises in each part as I complete them!
