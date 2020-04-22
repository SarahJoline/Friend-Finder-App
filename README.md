# Friend Finder

## What the app does

This is a dating app that has the user take a short quiz to determine who their best match is.

## How it works

This app uses Express to serve 2 static HTML files and 2 API routes to get and post data.

The data for this app is kept in friends.js

## To set it up on your machine

After cloning the repo to your machine just run

> npm install

This app uses Express and Path npm packages.

## The logic in the app

The user takes a quick survey of 10 questions. Each question's answer is a number between 1 and 5.

The answers are converted to an array and the total difference between the user and the available matches is calculated.

Example:
User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
Total Difference: 2 + 1 + 2 = 5

The pair with the lowest difference are matched.

## Link to deployed app

[Click here!](https://sajo-dating-app.herokuapp.com/)
