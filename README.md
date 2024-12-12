# Notez Frontend

Welcome to the Notez Frontend repository! Notez is a web application designed to help you organize and manage your notes in an intuitive and efficient way. The frontend is built using React.js and provides a clean, user-friendly interface for interacting with your notes.

## Live Demo

You can check out the live version of Notez at [notez.online](https://notez.online).

## Technologies Used

- **React.js** for building the user interface
- **Context API** for state management
- **React Router** for routing
- **Axios** for making API requests
- **Styled-components** for styling
- **AWS (Amazon Web Services)**:
  - **ECR (Elastic Container Registry)** for storing Docker images
  - **ECS (Elastic Container Service)** for container orchestration

## Features

- Create, edit, and delete notes
- Organize notes into categories
- Responsive design for mobile and desktop users
- User authentication and authorization

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Tosin-dotcom/notez-frontend.git
   ```


2. Navigate to the project directory:

    ```bash
    cd notez-frontend
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

Your app will be available at http://localhost:3000.

## Deployment
This application is deployed on AWS using:

- **Amazon ECS** for hosting the Dockerized frontend.
- **Amazon ECR** for storing Docker images.
To build the project for production:

    ```bash
    npm run build
    ```

This will create a build/ directory with a production-ready version of the app.