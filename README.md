# Docker Challenge

## Ex.1 - Create and build a Docker image for the backend app

1. Analyse the `meme-reviewer-backend` application and try to create a Dockerfile.

2. Build the image with the tag `mr-backend:latest`.

3. Run a container using the backend docker image.

3. Using a REST CLI/tool or your browser, send a GET request to the app using the following URL: [`http://localhost:5000/api/meme`](http://localhost:5000/api/meme). It should return a status code of 200 (Success) with a JSON response body.

## Ex.2 - Create and build a Docker image for the frontend app

1. Analyse the `meme-reviewer-frontend` application and try to create a Dockerfile.

2. Build the image with the tag `mr-frontend:latest`.

3. Run a container using the frontend docker image.

4. Check if the two containers are running.

5. The two applications are running in containers. They should be able to communicate successfully. Go to the frontend ([`http://localhost:3000`](http://localhost:3000)) and interact with the website a bit.

6. Cleanup your containers using the `docker rm` command.

## Ex.3 - Optimising build process and size of Docker images

1. Check the size of the two Docker images.

2. There are many ways of optimising images. What changes will you do to your backend Dockerfile to ensure images have the lowest size possible? After modifying the Dockerfile, build the image again.

3. And to your frontend Dockerfile? After modifying the Dockerfile, build the image again.

4. Check the size of the two Docker images and compare with the previous output in step 1.

## Ex.4 - Managing multiple containers with Docker Compose 

1. In the root of the repository create a file named `docker-compose.yml`. Try to create a service for the backend and test it.

2. Use `docker-compose` command to create and run the backend container.

3.  After the backend is up and running try to create another service for the frontend.

4. Use `docker-compose` command to create and run the frontend container.

## Ex.5 - Publishing Docker images to a registry

1. Go to [https://portal.azure.com](https://portal.azure.com) or if you're feeling cocky, login instead with the Azure CLI. You can do it by typing `az login`.

~2. Create a resource group with the following notation: `rg-dc<year>-<your_name>`.~

3. Create an Azure Container Registry (ACR) with the following notation `dc<year><your_initials>`.

4. Publish the previously built Docker images in the registry.

## Ex.6 - Deploy containers to an app service

1. Create a web app for the backend in Azure using the portal or the CLI. See if you can select a Docker image from your registry for the web app.

2. Now, do it for the frontend. Do not forget about environment variables for a successful communication!

3. Test your deployed applications.
