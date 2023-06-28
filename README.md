# Microservices Scaffolding

This repository contains a scaffolding template for quickly setting up a microservice using Node.js, Express, and TypeScript. It provides a basic structure and configuration to help you get started with building a scalable and modular microservice.

## Features

- Uses Node.js and Express for building the microservice.
- Written in TypeScript for improved type safety and developer productivity.
- Follows the MVC (Model-View-Controller) architectural pattern for organizing the code.
- Includes a sample user and product microservice as an example.
- Uses Prisma as the ORM (Object-Relational Mapping) tool for working with databases.
- Provides a preconfigured logger using Winston for handling logging and error reporting.
- Uses environment variables with dotenv for easy configuration.
- Includes basic error handling middleware and request logging using Morgan.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone this repository: `git clone https://github.com/jossimunoz/node-express-typescript-microservice.git`
2. Change into the project directory: `cd node-express-typescript-microservice`
3. Install the dependencies: `yarn install`

### Configuration

1. Rename the `.env.example` file to `.env`.
2. Modify the `.env` file to set the desired environment variables, such as the database connection details and other configuration settings.

### Running the Microservice

1. Build the microservice: `yarn build`
2. Start the microservice: `yarn start`
3. The microservice will be accessible at the specified port (default: 3000). You can make HTTP requests to the defined routes and test the functionality.

## Project Structure

The project structure follows a modular approach to organize the codebase. Here is an overview of the main directories:

- `controllers`: Contains the controller logic for handling the API requests.
- `models`: Includes the data models and database schema using Prisma.
- `services`: Contains business logic and services for handling various operations.
- `routes`: Defines the API routes and their corresponding controller actions.
- `middlewares`: Includes custom middleware functions used in the request pipeline.
- `utils`: Contains utility functions, helpers, and common functionality.
- `tests`: Includes unit tests for the controllers and services.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request. Please make sure to follow the project's code style and guidelines.

## License

This project is licensed under the MIT License.
