# Project "Notes App"

This is the backend part of the "Notes App" project built with [Node.js](https://nodejs.org/en) + [Express](https://expressjs.com/) + [Typescript](https://www.typescriptlang.org/), which allows managing notes.

## Overview

The Notes App project enables users to effortlessly manage a variety of notes, including general and specific ones. Users can perform tasks such as creating, editing, and deleting notes, while also gaining insights through comprehensive statistics (counts notes by categories: separately for active and archived.

## Installation

1. Clone the repository to your computer:

```bash
git clone https://github.com/free3et/notes-app-node.git
```
2. Navigate to the project folder:
```bash
cd notes-app-node
```
3. Install dependencies:
```bash
npm install
```

4. Start the server:
```bash
npm start
```
### API Routes
- GET /notes - Get all notes
- GET /notes/:id - Get a note by ID
- GET /notes/stats - Get notes statistics (counts notes by categories: separately for active and archived notes)
- POST /notes - Create a new note
- PATCH /notes/:id - Update a note by ID
- DELETE /notes/:id - Delete a note by ID

### Postman
- To interact with the project's API endpoints and test its functionality, you can use a tool like [Postman](https://www.postman.com/). Postman is a popular API testing and development tool that allows you to send HTTP requests to your API endpoints, view the responses, and test different scenarios. 
- Install Postman: If you haven't already, download and install Postman from the official website.
- Launch Postman: Open Postman on your computer.
- Set the request method (GET, POST, PATCH, DELETE) based on the endpoint you want to test.
Enter the URL of the endpoint you want to test. For example, http://localhost:3000/notes for retrieving all notes.
Customize the request headers, query parameters, and request body as needed for the specific endpoint.
Click the "Send" button to send the request.
- Viewing Responses: Postman will display the response received from the API server.
You can view the response status, headers, and the JSON body (if applicable).
- Use Postman to test different scenarios, such as creating a new note, editing an existing note, or deleting a note.







