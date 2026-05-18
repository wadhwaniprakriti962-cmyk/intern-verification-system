# Intern Verification System

The Intern Verification System is a full-stack web application developed to generate and verify internship certificates digitally. The main purpose of this project is to make certificate verification easy, secure, and fast using unique verification IDs.

This project allows users to:
- Generate internship certificates
- Verify certificate authenticity
- Manage records through a dashboard
- Access a clean and responsive interface

---

## Tech Stack Used

### Frontend
- React.js
- Vite
- CSS
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js

### Database
- MongoDB

---

## Features

- Generate certificate with unique details
- Verify certificate using verification code
- Responsive user interface
- API integration between frontend and backend
- Dashboard for managing verification data

---

## Folder Structure

```bash
intern-verification-system/
│
├── client/
│   └── frontend/
│       ├── src/
│       ├── public/
│       └── package.json
│
├── server/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── package.json
│
└── README.md
```

---

## Installation and Setup

### Clone the Repository

```bash
git clone https://github.com/wadhwaniprakriti962-cmyk/intern-verification-system.git
```

### Install Frontend Dependencies

```bash
cd client/frontend
npm install
```

### Install Backend Dependencies

```bash
cd server
npm install
```

---

## Run the Project

### Start Frontend

```bash
npm run dev
```

### Start Backend

```bash
npm start
```

---

## Available Pages

- `/generate` → Generate Internship Certificate
- `/verify` → Verify Certificate
- `/dashboard` → Dashboard Page

---

## Future Improvements

- QR Code Integration
- Authentication System
- PDF Certificate Download
- Email Verification
- Improved Dashboard Analytics

---

## Author

Prakriti Wadhwani

---

## Note

This project was created for internship assignment and learning purposes.
