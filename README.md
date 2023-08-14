# Tim-agotchi - Virtual Pet Game

Welcome totim-agotchi!
Tim-agotchi is a virtual pet game where you can create your own tim-agotchi and take care of it. you can feed it, play with it, and even clean up after it! you can also visit other users and see their tim-agotchis.

## User Interface

### Signup

![alt text](/public/Signup.png)

### Login

![alt text](/public/Login.png)

### Single Timagotchi

![alt text](/public/SingleTimagotchi.png)

This is the image of a single timagotchi page. You can view all the information of a single timagotchi here like their name and age. You can also interact with them by pressing one of the 3 buttons displayed at the bottom.

### Navbar

![alt text](/public/Navbar.png)

By clicking on the icon at the top right of the page. You can display the navbar which allows you to view your profile, create a new timagotchi or visit other users' profiles. When you are finished taking care of your timagotchis for the day, you can also logout from here.

This navbar will slightly change when you are not logged in as it will ask you to sign up before creating a new timagotchi; you can however still visit other people's profiles.

### Profile Page

![alt text](/public/Profile.png)

Here we have the profile page. It displays all of the user's timagotchis, information such as the first name, last name, and email. Also, it is possible to choose a custom picture to add to your profile.

### Create a new Timagotchi

![alt text](/public/CreateNewTimagotchi.png)

When clicking on "Create new Tim-agotchi" on the navbar, you will be redirected to this webpage in which you will be able to choose a name, gender, and type for your timagotchi.

### All Users/Visit Other Users

![alt text](/public/AllUsers.png)

On this page, you can see all of the users with their profile picture, first name, last name, and email. Clicking on their profile picture will redirect you to their profile page.

## Features

- FEED

Feed your pet by pressing the feed button; doing so will raise the hunger bar by 30%.

![alt text](/public/FeedButton.png)
![alt text](/public/HungerBar.png)

- PLAY

Play with your pet by pressing the play button; doing so will raise the mood bar by 30%.

![alt text](/public/PlayButton.png)
![alt text](/public/MoodBar.png)

- CLEAN

Clean your pet by pressing the clean button; doing so will raise the cleanliness by 30% and lower the friendship bar 1%.

![alt text](/public/CleanButton.png)
![alt text](/public/CleanlinessAndFriendship.png)

- POOP

Approximately every 3 hours, your timagotchi will need to excrete. Leaving the poop will have a permanent effect on the friendship and cleanliness until the poop is picked up. Picking up the poop is as easy as a simple click.

![alt text](/public/POOP.png)

## Wireframes

### Signup

![alt text](/public/Signup-Wireframe.png)

### Login

![alt text](/public/Login-Wireframe.png)

### Single Timagotchi

![alt text](/public/SingleTimagotchi-Wireframe.png)

### Navbar

![alt text](/public/Navbar-Wireframe.png)

We initially planned to make a main page that had would then have the instructions on how to play and also have buttons to redirect you to certain parts of our website. Later, we figured we could put all this information into our navbar for much easier access.

### Profile Page

![alt text](/public/Profile-Wireframe.png)

### Create a new Timagotchi

![alt text](/public/CreateNewTimagotchi-Wireframe.png)

### All Users/Visit Other Users

![alt text](/public/AllUsers-Wireframe.png)

### Features

![alt text](/public/Features-Wireframe.png)

## Installation Instructions

Timagotchi is a full stack web application using MongoDB, Express, Next.js, React.js (a.k.a MERN stack) along with Bootstrap CSS framework. Follow these steps below to get this application up and running. Before you continue, ensure you have installed the following software:

Node.js
npm
MongoDB
Clone the repository:

Install Dependencies: npm install

Configuring Enviornment Variables: Create a .env file at the root directory and include your enviornment variable like so: MONGO_URI=<Your MongoDB URI

Replace <Your MongoDB URI> with the actual connection string to your MongoDB database.

Running the Application Start the application in development mode: npm run dev

## Stretch Goals

- More timagotchi types with images (currently only cat and dog)
- More things to do with your timagotchi besides feed,play, and clean

## Developed By:

**Caleb-Joshua Monzon** (Front-End)

**Jay Lee** (Full-Stack)

**Jonathan Davila** (Full-Stack)

**Tim Pierce** (Back-End Development)
