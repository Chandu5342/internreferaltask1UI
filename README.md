# 🌟 Referral Task Frontend (React + Vite)

This is the **frontend** for the Referral Task project, built using **React.js** and styled with **Bootstrap**. It interacts with the backend API for user authentication and donation tracking.

---

## 🌐 Live Frontend URL

👉 **Deployed on Vercel**:  
`https://your-vercel-url.vercel.app/`  


---

## Features

-  User Signup & Login
-  View Referral Code
-  Track Total Donations
- See Donor Reward Badges (Bronze / Gold)

---

 Tech Stack

- React.js (with Vite)
- Axios
- React Router DOM
- Bootstrap 5
- JWT for token-based login

---

##  Folder Structure

src/
├── Pages/ 
│ ├── Login.jsx
│ ├── Signup.jsx
│ └── Dashboard.jsx
├── Utils/
│ └── api.js
├── App.jsx
└── main.jsx


---

## 🔗 API Integration

The frontend connects to the backend API using Axios. It reads the base URL from the `.env` file.

VITE_API_BASE_URL=https://internreferaltaskserver-1.onrender.com/api




