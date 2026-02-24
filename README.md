# Chrome-extension-for-time-tracking-and-productivity-analytics

CHROME EXTENSION FOR PRODUCTIVITY ANALYTICS

COMPANY: CODTECH IT SOLUTIONS

NAME: SEJAL SANJAY UMBARKAR

INTERN ID: CTIS4947

DOMAIN: FULL STACK WEB DEVELOPMENT

DURATION: 4 WEEKS

MENTOR: NEELA SANTOSH

TASK 4: CHROME EXTENSION FOR TIME TRACKING AND PRODUCTIVITY ANALYTICS
PROJECT TITLE:

FocusTrack – Chrome Extension for Time Tracking and Productivity Analytics

DESCRIPTION OF THE TASK

As part of my internship with CODTECH IT SOLUTIONS under the Full Stack Web Development domain, I developed Task 4: Chrome Extension for Time Tracking and Productivity Analytics.
The aim of this project was to design and build a Chrome Extension that helps users track their time spent on different websites, classify them as productive or unproductive, and provide insightful productivity analytics.

This extension, named FocusTrack, continuously monitors the active browser tabs and records the amount of time the user spends on each website. All this information is locally stored and displayed in a dynamic popup interface that summarizes the user’s online activity.

The project helps users identify how they spend their time online — whether on useful platforms like Stack Overflow, GitHub, or educational sites, or on unproductive websites such as entertainment and social media. It is a lightweight, privacy-focused tool built using modern Chrome Manifest V3, JavaScript, and HTML/CSS, with data stored using Chrome Storage APIs.

The extension includes a popup dashboard that displays total tracked sessions, total time spent, and top visited domains. Users can also open the Settings (options.html) page to customize their productive and unproductive website lists.
This project demonstrates strong understanding of browser API integration, event handling, asynchronous JavaScript, and local storage management — all of which are essential skills for full stack developers.

OBJECTIVES

To understand how Chrome Extensions work using Manifest V3.

To implement time tracking based on user’s active tabs and websites.

To use Chrome APIs such as tabs, storage, alarms, and idle.

To create a clean and interactive popup UI to display analytics.

To allow customization of productive/unproductive site lists through settings.

To gain practical experience in JavaScript event handling and asynchronous operations.

TECHNOLOGIES USED

HTML5 – Structure of popup and settings pages.

CSS3 – For attractive, responsive, and modern UI design.

JavaScript (ES6) – Core logic for time tracking and data handling.

Chrome Extension APIs – Tabs, Storage, Idle, and Alarm APIs.

Manifest V3 – Latest standard for secure and efficient Chrome extensions.

WORKFLOW / IMPLEMENTATION

Project Setup:
Created project structure with manifest, popup, background (service worker), and options files.

Manifest Configuration:
Configured permissions and declared background service worker in manifest.json.

Time Tracking Logic:
Implemented a service_worker.js to detect active tabs, track domains, and log durations.

Data Storage:
Used chrome.storage.local to store session data and flush it periodically using Chrome Alarms.

Popup Dashboard:
Built popup.html and popup.js to display total sessions, total tracked time, and domain-wise data dynamically.

Settings Page:
Developed options.html and options.js allowing users to configure productive and unproductive sites.

Testing & Debugging:
Loaded the extension via chrome://extensions, tested on multiple websites, and validated logs in the service worker console.

OUTCOME

This project successfully demonstrates how browser automation and API integration can help track and analyze productivity in real-time. It provides valuable insights for self-improvement and is a practical implementation of front-end scripting, Chrome APIs, and local data management — aligning perfectly with the goals of the CODTECH internship.
<img width="1854" height="1036" alt="Image" src="https://github.com/user-attachments/assets/2fdc9ed4-7d32-4f9e-b8e6-36c7336ceeb7" />
