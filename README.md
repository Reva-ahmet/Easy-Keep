# Easy-Keep - Full-Stack Personal Bookmark Manager 🔖

## Project Title
**Easy-Keep** – Full-Stack Web Application for Bookmark Management

---

## Research Problem
Users often have difficulty managing important academic and personal links across different devices and browsers. Standard bookmarking tools can be cluttered with unnecessary features, making it hard to find essential resources like university portals and study tools quickly.

---

## Motivation
The goal of this project is to develop **Easy-Keep**, a streamlined web-based dashboard that centralizes essential links. By using a decoupled architecture (FastAPI for the backend and React for the frontend), the project demonstrates how to build a responsive, real-time interface.

---

## Control Flow
*   **Initialization**: The user opens the web application, and the React frontend sends a **GET** request to the FastAPI server.
*   **Link Display**: The fetched data is mapped into a dynamic card-based grid layout for easy viewing.
*   **Adding Content**: The user enters a site name and URL into the form. Upon submission, a **POST** request is sent to the backend.
*   **Deletion**: When the user clicks the "Delete" button, a **DELETE** request is sent with a specific ID.

---

## Implementation Strategy
*   **Frameworks**: Built using **React.js** for the frontend and **FastAPI (Python)** for the backend.
*   **API Architecture**: Utilizes a RESTful design to handle communication.
*   **Security & Access**: Implements **CORS (Cross-Origin Resource Sharing)** middleware.
*   **Data Management**:
    *   Links are structured as **JSON objects** with unique IDs.
    *   Data is managed in-memory on the server for fast response times.

---

## App Structure
*   `backend/main.py`: The FastAPI server containing the API routes and data logic.
*   `frontend/src/App.js`: The main React component handling the UI and API calls.

---

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