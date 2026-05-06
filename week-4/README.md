# Week 4: API Routing & HTML Basics

This folder contains the assignments and exercises for Week 4, which focus on implementing backend API routes using Express.js and building basic HTML structure.

## Contents

### Backend API (`adminAPI.js` & `commonAPI.js`)
These files contain Express.js routing logic for a user management and authentication system:

- **`commonAPI.js`**: Handles common user functionalities.
  - User registration (`/users`) with roles `USER` and `AUTHOR`.
  - User login (`/login`) with JWT token generation and secure cookie storage.
  - User logout (`/logout`) by clearing cookies.
  - Change password functionality (`/password`) with proper password hashing and validation.
- **`adminAPI.js`**: Handles administrative capabilities.
  - Fetching all users (`/users`).
  - Activating or blocking user accounts (`/users`) using `isUserActive` toggle.

### HTML Basics (`h1.html`, `h2.html`, `h3.html`)
These files demonstrate fundamental HTML concepts:
- Building webpage structures with standard tags (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`).
- Working with text elements like headings (`<h1>`) and paragraphs (`<p>`).
- Implementing navigation using links (`<a>`).
- Creating ordered and unordered lists (`<ul>`, `<li>`).
- Advanced HTML components demonstrated in `h3.html` (forms, tables, etc.).

## Setup & Running the Code

### Prerequisites
- Node.js installed.
- Express.js, bcryptjs, jsonwebtoken, and dotenv dependencies.

### Running the Backend
Since these files are routers, they are meant to be mounted in a main `server.js` or `app.js` file (not included in this specific folder). Ensure your MongoDB database is running, configure your `.env` variables (`SECRET_KEY`), and start your server.

### Viewing the HTML
Simply open the `.html` files in any web browser to view their contents.
