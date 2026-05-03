# Task Manager (Role-Based)

## Overview

A full-stack task management system with role-based access (Admin & Member). Admins can create projects and tasks; members can view and update task status.

## Features

* JWT Authentication (Signup/Login)
* Role-based access (Admin / Member)
* Project creation (Admin only)
* Task creation under projects
* Task status update (Pending → Completed)
* Simple dashboard UI

## Tech Stack

* Backend: Node.js, Express
* Database: MongoDB (Atlas)
* Frontend: HTML, CSS, JavaScript

## Setup

1. Clone repo
2. Run `npm install`
3. Add `.env`:

   * MONGO_URI=your_mongodb_uri
   * JWT_SECRET=your_secret
4. Run `node server.js`
5. Open frontend/index.html

## Demo Flow

* Login as Admin → Create project → Create task → Update task
* Login as Member → View tasks → Cannot create project/task

