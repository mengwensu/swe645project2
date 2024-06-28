# Use the official Nginx image from the Docker Hub
FROM nginx:alpine

# Copy the static website files into the Nginx web directory
COPY src /usr/share/nginx/html
COPY images /usr/share/nginx/html/images 

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
