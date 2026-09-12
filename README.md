Waste Management Dashboard

A simple Waste Management Dashboard built using HTML, CSS, JavaScript,
and React. The application provides basic features for managing waste
bins, events, truck routes, feedback, reports, and waste data
visualization.

Features

View bin statistics and bin fill levels

Add new bins with location, bin type, bin level, and assigned truck

Manage and add events

View and filter truck routes

Search truck routes

Generate a formatted waste management report

Report issues and submit feedback

View submitted feedback

Visualize bin-level data using Chart.js

Simple React state management using useState, useEffect, and
useRef

Responsive dashboard layout

Technologies Used

HTML5

CSS3

JavaScript

React 18

ReactDOM 18

Chart.js

Project Structure

Waste-Management-Dashboard/
├── index.html
├── styles.css
├── app.js
└── README.md

How to Run the Project

Download or clone the project.

Keep index.html, styles.css, and app.js in the same folder.

Open the project folder in Visual Studio Code.

Run index.html using Live Server, or open index.html directly in
a browser.

The Waste Management Dashboard will open in the browser.

An internet connection is required to load React, ReactDOM, and
Chart.js from their CDN links.

Dashboard Options

View Bin Statistics

Displays the available waste bins along with their location, fill level,
waste type, and assigned truck. Bin colors indicate their current fill
level.

Add New Bin

Allows a user to add a new bin by providing Location, Bin Type, Bin
Level, and Assigned Truck. The fields are validated before the new bin
is added.

Manage Events

Displays existing events and allows new events to be added with event
type, date, location, and required truck count.

View Truck Routes

Displays truck routes and their current status. Routes can be filtered
by status or searched by route name.

Generate Report

Opens a formatted Waste Management Report in a new browser tab. The
report contains separate sections for bins, trucks, and events.

Report an Issue

Allows users to enter and submit feedback or report an issue.

View Feedback

Displays feedback submitted during the current application session.

Visualize Data

Uses Chart.js to display a bar chart showing the number of Full,
Half-Full, and Empty bins.

React Usage

The dashboard uses React for its main application functionality. React
concepts used in the project include functional components, props,
useState, useEffect, useRef, React event handling, controlled form
inputs, conditional rendering, list rendering with map(), and ReactDOM
createRoot().

Notes

The application stores its data in React state, so newly added bins,
events, and feedback are available only during the current browser
session.

Refreshing the page resets the application to its initial data.

The Generate Report option may require pop-ups to be allowed in the
browser.

No backend or database is connected to this project.

Purpose

The project demonstrates a simple front-end waste management system
where waste collection information can be viewed and managed through an
easy-to-use dashboard interface.
