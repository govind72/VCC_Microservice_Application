# VCC Microservice Application

This repository contains a microservice-based application deployed across multiple Virtual Machines (VMs). It is designed to showcase the deployment and interaction of distributed services. The project comprises the following microservices:

1. **API Gateway**: Handles requests and routes them to the appropriate services.
2. **Book Service**: Manages book-related operations such as retrieval and creation.
3. **User Service**: Handles user-related operations such as user creation and retrieval.

## Project Structure

The repository is organized as follows:

- **`api-gateway/`**: Contains the source code and configuration for the API Gateway microservice.
- **`book-service/`**: Contains the source code and configuration for the Book Service microservice.
- **`user-service/`**: Contains the source code and configuration for the User Service microservice.

Each directory includes a `README.md` file with detailed instructions for deploying and running the respective microservice.

## Deployment Instructions

To deploy each microservice:
1. Navigate to the directory of the service you want to deploy.
2. Follow the instructions provided in the `README.md` file within that directory.

### Example:
```bash
cd book-service
cat README.md
```

## Prerequisites

Ensure that the following are installed on your system:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/) (if using containerization for deployment)
- [VirtualBox](https://www.virtualbox.org/) (for setting up VMs)

## Network Configuration

The microservices are deployed across separate Virtual Machines (VMs) connected via a VirtualBox network. Ensure that the network settings are configured correctly for communication between VMs.

## Testing the Application

- Use tools like [Postman](https://www.postman.com/) or `curl` to test the endpoints exposed by the services.
- The API Gateway can be used to route requests to the Book and User services.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

