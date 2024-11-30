# Backend API Project

## Overview
This project is built with **Node.js**, **Express.js** and **React.js** and serves as a RESTful API for managing users, notes, and authentication. The application employs secure coding practices, interacts with a **MongoDB** database, and includes middleware for enhanced security and performance.

---

## Features

### User Management
- **CRUD Operations**: Create, retrieve, update, and delete user data.
- **Password Hashing**: Ensures secure storage of user credentials.
- **Role Management**: Assigns and manages user roles.

### Note Management
- **CRUD Operations**: Manage notes linked to users.
- **User Integration**: Associates notes with user details for better traceability.

### Authentication
- **JWT Authentication**: Secures API endpoints with access and refresh tokens.
- **Secure Logout**: Clears cookies and tokens upon logout.
- **Rate Limiting**: Protects login endpoint from brute-force attacks.

### Middleware and Utilities
- **Custom Error Handling**: Handles application errors gracefully.
- **CORS Configuration**: Enables secure cross-origin requests.
- **Rate Limiting**: Restricts excessive requests to the login endpoint.
- **JWT Verification**: Validates token-based requests for protected routes.

---

## Installation

### Prerequisites
- **Node.js** and **npm**: Ensure Node.js and npm are installed.
- **MongoDB**: Setup a MongoDB instance (local or cloud).
- **Environment Variables**: Create a `.env` file with the following variables:
  ```env
  ACCESS_TOKEN_SECRET=<your_secret>
  REFRESH_TOKEN_SECRET=<your_secret>
  PORT=3500

