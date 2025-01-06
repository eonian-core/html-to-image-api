# Use the Playwright base image
FROM mcr.microsoft.com/playwright:v1.41.0-jammy as base

LABEL app_name="html-to-image-api"
LABEL fly_launch_runtime="Node.js"

# Node.js app lives here
WORKDIR /app

# Set production environment
ENV NODE_ENV="production"

# Throw-away build stage to reduce size of final image
FROM base as build

# Install Node.js 20
RUN apt-get update && \
    apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Install packages needed to build node modules
# RUN apt-get update -qq && \
#     apt-get install -y --fix-broken node-mkdirp node-nopt node-tar node-which build-essential node-gyp pkg-config python-is-python3

# Verify Node.js installation
RUN node -v && npm -v

# Install node modules
COPY --link package-lock.json package.json ./
RUN npm ci --ignore-scripts --include=dev 

# Copy application code
COPY --link . .

# Build application
RUN npm run build

# Expose the port your app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]