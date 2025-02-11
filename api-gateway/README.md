## Description

This API Gateway serves as a single entry point for routing requests to the microservices (Book and User services) in the microservice-based application. It is built using the [Nest](https://github.com/nestjs/nest) framework and follows a modular architecture for scalability and maintainability.

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
   $ docker build -t api-gateway .
   ```
3. Run the container:
   ```bash
   $ docker run -p 3000:3000 api-gateway
   ```
The API Gateway will be accessible at ```http://localhost:3000```.

### License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
