# Week 3 - Express and MongoDB Authentication Backend

This directory contains `Backend-2`, a Node.js REST API application demonstrating user authentication and database interactions using Express and MongoDB.

## Project Structure

- **Backend-2**: An Express application featuring:
  - **Mongoose**: For modeling MongoDB data.
  - **Authentication**: Uses `bcryptjs` for secure password hashing and `jsonwebtoken` (JWT) for authenticating user sessions.
  - **API Endpoints**: 
    - `/user-api`: Manages user operations and authentication.
    - `/product-api`: Manages product-related operations.
  - **Middleware**: Custom middleware for error handling, parsing cookies (`cookie-parser`), and protecting routes, ensuring certain routes are only accessible by authenticated users.

## How to Run

1. Navigate to the `Backend-2` directory:
   ```bash
   cd Backend-2
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```
3. Set up the environment variables:
   - Create a `.env` file in the root of `Backend-2`.
   - Add the necessary configurations, such as:
     ```env
     PORT=3000
     DB_URL=your_mongodb_connection_string
     ```
4. Start the server:
   ```bash
   node server.js
   ```

The server will run on `http://localhost:3000` (or your defined `PORT`).

## Key Technologies
- **Node.js & Express.js**
- **MongoDB & Mongoose**
- **JWT (JSON Web Token)**
- **Bcrypt.js**
- **cookie-parser**
- **dotenv**
