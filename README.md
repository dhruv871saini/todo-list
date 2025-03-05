# 📝 To-Do List App (MERN Stack)

## 🚀 Overview
This is a **full-stack To-Do List application** built using **MERN (MongoDB, Express, React, Node.js)**.  
It allows users to **register, log in, create tasks, set due dates, mark tasks as completed/pending, and filter tasks**.  
The app also supports **Dark Mode** and has a clean, modern UI.  

## 🎯 Features
- ✅ **User Authentication** (JWT-based Login & Registration)  
- ✅ **Add, Edit, and Delete Tasks**  
- ✅ **Set Due Dates for Tasks**  
- ✅ **Mark Tasks as Completed or Pending**  
- ✅ **Filter Tasks by Status (All / Completed / Pending)**  
- ✅ **Dark Mode Support**  
- ✅ **Responsive Design**  

## 🛠 Installation & Setup
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/todo-list-app.git
cd todo-list-app
```

### 2️⃣ Install Dependencies
#### Install backend dependencies:
```bash
cd server
npm install
```
#### Install frontend dependencies:
```bash
cd ../client
npm install
```

### 3️⃣ Environment Variables Setup
Create a `.env` file in the `/server` directory and add the following:
```env
MONGO_URI= mongodb+srv://gouravsaini:L10IaR10RHLUEhOQ@cluster0.pk3q9.mongodb.net/practice?retryWrites=true&w=majority
JWT_SECRET=dkdjfkjjdkjfkj
PORT=5000
```

### 4️⃣ Start the Application
#### Start the Backend Server
```bash
cd server
npm start
```
#### Start the Frontend React App
```bash
cd ../client
npm start
```

---

## 📂 Folder Structure
```
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
```

## 📌 Technologies Used
### 🌐 Frontend:
- React.js
- Tailwind CSS (Optional)
- React Router
- Axios

### 🔥 Backend:
- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Token (JWT)

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing
Contributions are welcome! If you’d like to contribute, please fork the repository and submit a pull request.

## 📬 Contact
For any questions or feedback, feel free to reach out:
- Email: your-email@example.com
- LinkedIn: [Your LinkedIn](https://www.linkedin.com/in/yourprofile)
- GitHub: [Your GitHub](https://github.com/your-username)

