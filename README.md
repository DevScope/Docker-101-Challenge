# Docker Challenge 2022

## Create and Build a Docker image for frontend and backend apps

1. Analyse the `meme-reviewer-backend` application and try to create and build a simple docker image

2. Run a container using the previously created docker image

3. Using a REST cli/tool, send a GET request to the app using the following URL: `http://localhost:5000/api/meme`. It should return a status code of 200 (Success)

4. Repeat the process for the `meme-reviewer-frontend` (Steps 1 and 2). 
    * Note: The frontend image should derive from the `node:node:16.14.0-alpine`.

5. Run the two applications and check if the frontend is communicating with the backend successfully

6. The created docker images should not include some files/folders like `node_modules`, `__pycache__`, etc. How can you ignore them when building an image?

## Managing containers using a docker-compose.yml

1. In the root of the repository create a file named `docker-compose.yml`. Try to create a service for backend first and test it.

2.  After the backend is up and running try to run the frontend.

3. How can you pass a different backend URL to the application using the Docker CLI (e.g. docker run)? And using the `docker-compose.yml`?

## Optimizing build process and size of Docker images

1. Try to optimize the frontend image now deriving it from the `nginx:latest` image. 
    * Tip 1: `npm start` does not build the application right?
    * Tip 2: How about multistage builds?

