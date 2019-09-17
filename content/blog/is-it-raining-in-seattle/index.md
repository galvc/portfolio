---
title: "Is it raining in Seattle?"
author: Chelsea Galvez
featuredImage: "./raining-cover.png"
date: "2019-03-01"
description: "Website created with React, OpenWeatherMap and Unsplash API"
category: "project"
tag: "React"
---

#View the demo
Click [here](https://github.com/galvc/isitraining-inseattle) to view the github repository.

View the website [here](https://is-it-raining-in-seattle.netlify.com/).

![cover](./ii-1.png)

#Overview
This is an individual project meant to practice developing with the React framework.
This project focuses on communicating with APIs using React.

##Using Axios with OpenWeatherMap and Unsplash
Axios is incredibly useful for asynchronous HTTP requests. It's very convenient and dependable especially when trying to communicate with two APIs at the same time.

The app communicated with OpenWeatherMap by trying to ask if the weather in Seattle matches the rain, drizzle, or thunderstorm response. The appropriate response updates the state and displays it on the screen.

Unsplash provides free, public use of their images using their API. The API query asks specifically for photos that match the 'Seattle' word. It then gives back a list of photos including user details, which is essential for crediting Unsplash and the owner.

#Learning Experience
Learning asynchronous events and promises seem easy when learning through concepts, however it takes some time getting used to writing the correct code. But axios has definitely made it fun and easy. I also learned how to hide API keys using process environment variables.

It's also important to read each API's documentation and terms of use carefully. Unsplash, for example, has very specific rules for crediting back.

Navigating API documentation and async processes were my biggest learning experiences with this project.
