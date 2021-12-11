# CSV PARSER

## Introduction

A javascript application that calculates consecutive days based on a given set of data.

#### By **Bartholomew Kelly Egesa**

## Description

A command line interface application that calculates the client who has the most consecutive paid days. It takes two sets of input, file path to the csv and the number of clients the user expects the system to return.

## Behavior Driven Development

| BEHAVIOR:Our application should handle                      |          Input Example When it receives           |               Output Example It should return               |
| ----------------------------------------------------------- | :-----------------------------------------------: | :---------------------------------------------------------: |
| Valid csv path and an integer                               |  Inputs:-path:"valid path", number of clients 3   |               Returns clients Id in an array                |
| Invalid csv path                                            | Inputs:-path:"inValid path", number of clients 3  | Will display an error "There was an error reading the file" |
| Number of clients that is not an integer for example string | Inputs:-path:"valid path", number of clients 'KW' |                 Will return an empty array                  |

## Known Bugs

There are currently no known bugs

## Setup

Make sure to follow all these steps exactly as explained below. Do not miss any steps or you won't be able to run this application.

### Install NODE JS

To run this project, you need to install the latest version of Node javascript.

https://nodejs.org/en/download/

Once you install Node, make sure it's running.

### Clone the project

Setup git and clone to a folder:

    git clone git@github.com:KellyEgesa/csv-parser.git

### Install the Dependencies

Next, from the project folder, install the dependencies:

    npm i

### Start the Application

    node index.js

This will launch a command line application.

## Technologies Used

### DEVELOPMENT

- JAVASCRIPT

## Support and contact details

You can contact me via Email at bartholomew.egesa@gmail.com or via +254726359282.

### License

_M.I.T_
Copyright (c)2021 **KELLY EGESA**
