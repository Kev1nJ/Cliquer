# DishWatcher Recipe Search App

## Table of Contents
- [Introduction](#introduction)
- [Problem Statement](#problem-statement)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [User Authentication](#user-authentication)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

Welcome to DishWatcher, your go-to recipe searching app! DishWatcher is a web application built using the MERN stack (MongoDB, Express, React, Node.js). With DishWatcher, users can easily search for recipes based on their favorite foods, save their most-loved recipes, and enjoy a seamless cooking experience.

## Problem Statement

Cooking enthusiasts often struggle to find recipes that match their cravings or they lack a sense of direction for a recipe. DishWatcher aims to solve this problem by providing a user-friendly platform where users can quickly search for and save recipes tailored to their tastes.

## Features

- **Recipe Search:** Enter your favorite food into the search bar, hit search, and get a list of recipes matching your query.
- **Save Favorites:** Logged-in users can save their favorite recipes for easy access later.
- **User Authentication:** Secure user registration and login handled by JWT for a personalized experience.
- **MERN Stack:** Leverages the power of MongoDB, Express, React, and Node.js for a smooth and efficient application.

## Technologies Used

- MongoDB
- Express.js
- React.js
- Node.js
- Postman (API route testing)

## Installation

1. Clone the repository: `git clone https://github.com/Kev1nJ/DishWatcher.git`
2. Navigate to the project folder: `cd DishWatcher`
3. Install dependencies:
   ```bash
   npm install
   cd client
   npm install

## Usage

To start the application, run the following commands:

# In the root folder
npm start

Visit http://localhost:3006 to access DishWatcher.

## API Routes

DishWatcher provides the following API routes:

Search for Recipes: '/api/search?query={food}'
User Authentication: /routes/auth
Save Favorite Recipe: /routes/recipes/save , /routes/recipes/delete/:id

## Contact
For any inquiries or feedback, please contact:

Kevin Jerome
GitHub: https://github.com/Kev1nJ
Happy cooking with DishWatcher! 🍲✨







