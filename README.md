# Lab 1: Node.js and Express Server

## Student Details

- **Name:** Lohith Sai Guthhikonda
- **Registration Number:** 252U1R5053
- **Section:** AI/DE - 2A [106]

## Objective

To set up a Node.js project and build a web server using the built-in HTTP module and Express.js. Implement different GET routes to handle HTTP requests and responses.

## Technologies Used

- Node.js
- Express.js
- JavaScript
- Visual Studio Code / Antigravity IDE

## Project Structure

```text
```
<img width="1906" height="757" alt="{2AECE0DC-CF17-45A7-BA27-29895B3E3494}" src="https://github.com/user-attachments/assets/5ad18d41-272d-4135-ab09-c3fe0a1e18f9" />


## Installation and Setup

**1. Install dependencies**

```bash
npm install
```

**2. Start the server**

```bash
npm start
```

**3. Open in browser**

```text
http://localhost:3000/
```

## API Endpoints

| Method | Endpoint   | Description                      | Status |
| ------ | ---------- | -------------------------------- | ------ |
| GET    | `/`        | Welcome message                  | 200    |
| GET    | `/about`   | Returns name and section in JSON | 200    |
| GET    | `/time`    | Returns current date and time    | 200    |
| GET    | `/unknown` | Returns page not found           | 404    |

## Testing the Application

The following endpoints were tested successfully using a web browser:

- Home route: `http://localhost:3000/`
- About route: `http://localhost:3000/about`
- Time route: `http://localhost:3000/time`
- 404 route: `http://localhost:3000/unknown`

## Screenshots

Add screenshots of the working application here.

## Deployment

**Platform:** Render

**Live URL:** To be updated after deployment.

## Learning Outcomes

- Understood Node.js project initialization using npm.
- Learned how to install and use Express.js.
- Created an HTTP server.
- Implemented GET routes using Express.
- Understood request and response objects.
- Learned HTTP status codes and 404 error handling.

## Conclusion

Successfully created a Node.js and Express server with multiple GET endpoints, handled HTTP requests and responses, and tested the application using a web browser.
