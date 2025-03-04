# 📝 To-Do List App (MERN Stack)

## 🚀 Overview
This is a **full-stack To-Do List application** built using **MERN (MongoDB, Express, React, Node.js)**.  
It allows users to **register, log in, create tasks, set due dates, mark tasks as completed/pending, and filter tasks**.  
The app also supports **Dark Mode** and has a clean, modern UI.  

## 🎯 Features
✅ User Authentication (JWT-based Login & Registration)  
✅ Add, Edit, and Delete Tasks  
✅ Set Due Dates for Tasks  
✅ Mark Tasks as **Completed** or **Pending**  
✅ Filter Tasks by **Status (All / Completed / Pending)**  
✅ Dark Mode Support  
✅ Responsive Design  

---

## 📂 Folder Structure
/todo-list-app
 ├── /client                    # React Frontend
 │   ├── /src
 │   │   ├── /components        # UI Components
 │   │   │   ├── TaskForm.js    # Form to add/edit tasks
 │   │   │   ├── TaskItem.js    # Single task display & actions
 │   │   ├── /pages             # Application Pages
 │   │   │   ├── Login.js       # User Login Page
 │   │   │   ├── Register.js    # User Registration Page
 │   │   │   ├── TodoList.js    # Main Task List Page
 │   │   ├── App.js             # Main React Component
 │   │   ├── index.js           # React Entry Point
 │   ├── package.json           # Frontend Dependencies
 │   ├── tailwind.config.js     # Tailwind CSS Configuration (if used)
 │   ├── README.md              # Project Documentation
 │
 ├── /server                    # Node.js Backend
 │   ├── /models                # Mongoose Models
 │   │   ├── Task.js            # Task Schema (Title, Due Date, Status)
 │   │   ├── User.js            # User Schema (Auth Info)
 │   ├── /routes                # Express Routes
 │   │   ├── authRoute.js       # User Authentication Routes (Login, Register)
 │   │   ├── taskRoute.js       # Task CRUD Operations
 │   ├── /middleware            # Authentication Middleware
 │   │   ├── authMiddleware.js  # JWT Token Validation
 │   ├── /config                # Database Configuration
 │   │   ├── db.js              # MongoDB Connection
 │   ├── server.js              # Main Backend Server File
 │   ├── package.json           # Backend Dependencies
 │   ├── .env                   # Environment Variables (MongoDB URL, JWT Secret)
 │
 ├── README.md                  # Complete Documentation
