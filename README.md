# smart-profiler

A lightweight real-time system resource profiler built with **Node.js** and **React**.  
It displays live CPU utilization of the host machine on a clean, minimal dashboard.

---

## 🚀 Features

- Real-time CPU usage monitoring
- Live dashboard with auto-refresh
- Backend built with Node.js and Express
- Frontend built with React
- Simple REST-based communication
- No database, no authentication, no tracking

---

## 🧠 How It Works

- The **backend** periodically reads CPU usage using system utilities.
- CPU data is exposed via a local REST API (`/api/logs`).
- The **frontend** fetches this data every few seconds and displays it visually.

---

## 🔐 Data Privacy & Security

> **Important:** This project does **NOT** collect, store, or transmit any personal data.

- CPU usage is read **locally only**
- No files, user data, or system identifiers are accessed
- No data is sent outside the local machine
- No third-party analytics or external services are used
- No background processes run outside the app lifecycle

This project is **safe to share** and contains **no MacBook-specific or personal information**.

---
## 📁 Project Structure

smart-profiler/
├── server.js              # Backend server (Node.js)
├── package.json           # Backend dependencies
├── package-lock.json
├── frontend/              # React frontend
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── README.md
├── .gitignore
└── README.md

---

## ▶️ Running the Project Locally

### Backend

```bash
npm install
node server.js


Backend runs on:
http://localhost:5000
--
Frontend
cd frontend
npm install
npm start
Frontend runs on:
http://localhost:3000
--
🛠 Tech Stack
Frontend: React, JavaScript, CSS
Backend: Node.js, Express
System Stats: os-utils
Communication: REST API

📌 Use Cases
Learning system monitoring concepts
Demonstrating full-stack communication
Academic or portfolio projects
Lightweight local performance dashboards

✨ Author
Built as a full-stack learning project to demonstrate real-time system monitoring using modern web technologies.

