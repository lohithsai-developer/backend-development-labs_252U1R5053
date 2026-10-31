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
- Antigravity IDE

## Project Structure
<img width="1920" height="627" alt="{12A589DC-242B-4068-99D1-0D97814433FB}" src="https://github.com/user-attachments/assets/ddded848-b4c5-4758-92aa-acaf526b9243" />


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
<img width="1920" height="976" alt="{50DB8FCF-B8A4-4957-B2F7-E9763D30A479}" src="https://github.com/user-attachments/assets/90e0b861-39cf-4741-873c-8a041b45f9cf" />
<img width="1920" height="982" alt="{20353B15-2115-4DF4-A3AE-CA62CC7C4399}" src="https://github.com/user-attachments/assets/590dfbdf-c7e4-4632-a000-762d18279a04" />
<img width="1920" height="1005" alt="{DB018934-79E6-4708-B42A-A6D08D0DFC8A}" src="https://github.com/user-attachments/assets/8839e167-ecaa-40de-af66-5d49a2efef57" />
<img width="1920" height="974" alt="{5F62A5C8-CE11-4E54-ACDE-16F7125E669F}" src="https://github.com/user-attachments/assets/3698c595-85a4-42b8-aa41-eef3d727edb0" />



## Deployment

**Platform:** Render

**Live URL:** https://backend-labs-252u1r5053-lab-1.onrender.com

## Learning Outcomes

- Understood Node.js project initialization using npm.
- Learned how to install and use Express.js.
- Created an HTTP server.
- Implemented GET routes using Express.
- Understood request and response objects.
- Learned HTTP status codes and 404 error handling.

## Conclusion

Successfully created a Node.js and Express server with multiple GET endpoints, handled HTTP requests and responses, and tested the application using a web browser.
