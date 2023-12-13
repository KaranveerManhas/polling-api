# Polling API


## Overview

The Polling API is a simple yet powerful RESTful API for conducting polls and surveys. It provides a flexible and easy-to-use interface for creating, managing, and analyzing polls.

## Features

- **Create Polls:** Easily create polls with customizable options.
- **Vote:** Users can vote for their preferred options in a poll.
- **Results:** Retrieve real-time results and statistics for each poll.
- **Scalable:** Designed to handle a large number of polls and votes.
- **Open Source:** Feel free to contribute, modify, and use the Polling API according to your needs.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB server up and running

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/KaranveerManhas/polling-api.git
   ```
2. Install dependencies:
    ```
    cd polling-api
    npm install
    ```
3. Configure environment variables: 
    Create a `.env` file in the root directory and set the following variables:
    ```
    MONGODB_URI = "Your_custom_mongodb_cluster_url"
    ```
4. Run the Application:
    ```
    npm start
    ```

The Polling API should now be running at `http://localhost:1000`.

## Routes
**The API has the following Routes**:
**Make sure to prefix /api/v1/ to each route**
- /questions/create : To create a question
- /questions/:id : To view question
- /questions/:id/options/create - To create an option for a question
- /questions/:id/delete - To delete a question
- /options/:id/add_vote - To add a vote to an option
- /options/:id/delete - To delete an option

## Contributing

I welcome contributions! If you find any issues or have any suggestions for improvements, please open an issue or submit a pull request.

Happy Polling!