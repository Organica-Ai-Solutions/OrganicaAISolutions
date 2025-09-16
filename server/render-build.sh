#!/bin/bash
# Custom build script for Render

# Print environment info
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"

# Clean install dependencies
echo "Cleaning node_modules..."
rm -rf node_modules

# Explicitly install OpenAI package first
echo "Installing OpenAI package..."
npm install openai@4.97.0

# Install all other dependencies
echo "Installing other dependencies..."
npm install

echo "Build completed successfully!" 