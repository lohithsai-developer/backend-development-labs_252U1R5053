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


<img width="1920" height="975" alt="{EDBF1AF8-38BB-43EC-BBAF-57B2E309867B}" src="https://github.com/user-attachments/assets/2eb35bc0-c722-4204-ada2-05daba36c685" />
<img width="1920" height="1037" alt="{09A347D4-B71B-465C-A439-AEFE9EAA2161}" src="https://github.com/user-attachments/assets/f823b00c-d6c5-4af8-93f6-de166a066d56" />
<img width="1920" height="1012" alt="{30479461-DA07-4E6B-BFF3-16C0BA008289}" src="https://github.com/user-attachments/assets/293be088-f3bb-496c-9350-47bb09a005f5" />
<img width="1920" height="988" alt="{3487F74A-1859-4C9E-81B1-58BFC07F274F}" src="https://github.com/user-attachments/assets/2e5ccce4-8092-4271-82da-e3e17b4592d4" />


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
