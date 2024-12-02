# Use the Playwright base image
FROM mcr.microsoft.com/playwright:v1.41.0-jammy
LABEL app_name="html-to-image-api"

# Install Node.js 20
RUN apt-get update && \
    apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Verify Node.js installation
RUN node -v && npm -v

# Set the working directory
WORKDIR /app

# Copy your application code
COPY . .

# Install application dependencies
RUN npm install

# Expose the port your app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]