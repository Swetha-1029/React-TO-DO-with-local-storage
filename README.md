# [PROJECT NAME]

**Intern ID:** CITS3094 
**Full Name:** Swetha C
**Domain:** React.js web development
**No. of Weeks:** 4 weeks
**Project Name:** React To-do with local storage

---

## Project Scope
This project is a task management web application built using React.js. 
It allows users to add, edit, delete, and filter tasks by priority (Low, Medium, High) and status (Active, Completed).
All tasks are saved to the browser's LocalStorage, ensuring data persists across page refreshes. 
The app demonstrates core React concepts including useState, useEffect, useMemo, custom hooks, and CSS Modules.

---

## Features

- Add tasks with low / medium / high priority
- Mark tasks complete or incomplete
- Edit tasks inline
- Delete tasks
- Filter by All / Active / Completed
- Progress bar showing completion percentage
- Data saved to LocalStorage — persists on page refresh

## Tech Stack

React 18
Create React App (CRA)
CSS Modules
LocalStorage 

## Project Structure

```
src/
├── hooks/
│   └── useLocalStorage.js
├── components/
│   ├── TodoInput.jsx
│   ├── TodoItem.jsx
│   ├── FilterBar.jsx
│   └── StatsBar.jsx
├── App.jsx
├── main.jsx
└── index.css
```
