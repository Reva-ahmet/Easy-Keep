```markdown
# Easy-Keep – Full-Stack Personal Bookmark Manager 🔖

## Research Problem
Users often have difficulty managing important academic and personal links across different devices and browsers. Standard bookmarking tools can be cluttered with unnecessary features, making it hard to find essential resources like university portals and study tools quickly. There is a need for a lightweight, focused dashboard that allows for instant access and simple management of high-priority links.

## Motivation
The goal of this project is to develop **Easy-Keep**, a streamlined web-based dashboard that centralizes essential links. By using a decoupled architecture (FastAPI for the backend and React for the frontend), the project demonstrates how to build a responsive, real-time interface for data management that enhances academic productivity.

## Control Flow
*   **Initialization**: The user opens the web application, and the React frontend sends a **GET** request to the FastAPI server to retrieve the existing bookmark list.
*   **Link Display**: The fetched data is mapped into a dynamic card-based grid layout for easy viewing.
*   **Adding Content**: The user enters a site name and URL into the form. Upon submission, a **POST** request is sent to the backend, which updates the server's data list and reflects the change instantly on the UI.
*   **Deletion**: When the user clicks the "Delete" button, a **DELETE** request is sent with a specific ID. The backend filters the data list, and the frontend updates the state to remove the corresponding card.

## Implementation Strategy
*   **Frameworks**: Built using **React.js** for the frontend and **FastAPI (Python)** for the backend.
*   **API Architecture**: Utilizes a RESTful design to handle communication between the client and the server.
*   **Security & Access**: Implements **CORS (Cross-Origin Resource Sharing)** middleware to allow secure data transfer between the local development server and the web interface.
*   **Data Management**:
    *   Links are structured as **JSON objects** with unique IDs.
    *   Data is managed in-memory on the server for fast response times during the session.

## App Structure
*   `backend/main.py`: The FastAPI server containing the API routes and data logic.
*   `frontend/src/App.js`: The main React component handling the UI, state management, and API calls.
*   `frontend/public/`: Contains the static assets and the main HTML entry point.

## How to Run
1.  **Start the Backend**:
    ```bash
    cd backend
    uvicorn main:app --reload
    ```
2.  **Start the Frontend**:
    ```bash
    cd frontend
    npm start
    ```