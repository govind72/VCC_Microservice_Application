## Description

The User Service is a microservice in the VCC Microservice Application responsible for managing user-related operations. It is built using the [Nest](https://github.com/nestjs/nest) framework, following a modular architecture for scalability and maintainability.

## Project Setup

You can set up the project in two ways: Normal Setup or using Docker.

### 1. Normal Setup

1. Clone the repository:
   ```bash
   $ git clone https://github.com/govind72/VCC_Microservice_Application.git
   $ cd api-gateway
   ```
2. Install Dependencies
  ```bash
  $ npm install
  ```
3. Start the application
  ```bash
  $ npm run start
  ```

### 2. Setup with Docker
1. Ensure that Docker is installed and running on your system.
2. Build the Docker image:
   ```bash
   $ docker build -t user-service .
   ```
3. Run the container:
   ```bash
   $ docker run -p 3001:3001 user-service
   ```


### License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
