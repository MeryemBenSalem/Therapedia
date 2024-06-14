# Therapedia: A Mental Health Web App

Therapedia is a mental health web application designed to facilitate virtual appointments between therapists and patients. The application provides an admin dashboard for managing users and appointments, along with a journaling feature for patients.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)

## Features
- User Management: View, add , edit, and delete therapist and patient profiles.
- Appointment Management: Schedule, view, and manage appointments.
- Dashboard Analytics: Display key metrics and generate reports.
- Blogs : Patients and Doctors can read mental health related Blogs.
- Journal Feature: Patients can log in, create sessions, and manage their journal entries.
- Forum Discussion : Users can ask questions, share ideas, and provide feedback.
- Responsive and modern UI.

## Technologies Used
- **Frontend**: React.js
- **Backend**: Spring Boot
- **Database**: PostgreSQL

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) 
- [npm](https://www.npmjs.com/) 
- [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html) 
- [PostgreSQL](https://www.postgresql.org/) 

### Installation
1. **Clone the repository**
    ```sh
    git clone https://github.com/MeryemBenSalem/Therapedia.git
    ```

2. **Install frontend dependencies**
    ```sh
    npm install --force
    ```

3. **Set up the backend**
    - Navigate to the backend directory and configure the `application.properties` file with your PostgreSQL database credentials.
    ```properties
    spring.datasource.url=jdbc:postgresql://localhost:5432/your_database
    spring.datasource.username=your_username
    spring.datasource.password=your_password
    spring.jpa.hibernate.ddl-auto=update
    ```

### Running the Application

1. **Start the backend**
    ```sh
    ./mvnw spring-boot:run
    ```

2. **Start the frontend**
    ```sh
    npm start
    ```

3. **Access the application**
    - Frontend: `http://localhost:3000`
    - Backend: `http://localhost:8080`
