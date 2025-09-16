#!/bin/bash

# Script to download NIS Protocol assets for the Organica AI Solutions website

echo "Downloading NIS Protocol assets..."

# Create required directories if they don't exist
mkdir -p public/images/nis-protocol
mkdir -p public/docs/nis-protocol

# Clone the NIS Protocol repository temporarily
TMP_DIR=$(mktemp -d)
git clone https://github.com/Organica-AI-Solutions/NIS_Protocol.git "$TMP_DIR"

# Copy images
if [ -d "$TMP_DIR/assets/images" ]; then
  cp $TMP_DIR/assets/images/* public/images/nis-protocol/
  echo "Images copied successfully."
else
  echo "Warning: Images directory not found in repository."
fi

# Copy the whitepaper
if [ -f "$TMP_DIR/docs/NIS_Protocol_Whitepaper.html" ]; then
  # For a PDF version, you'd need to convert the HTML to PDF
  # For now, we'll just copy the HTML file
  cp $TMP_DIR/docs/NIS_Protocol_Whitepaper.html public/docs/nis-protocol/
  echo "Whitepaper copied successfully."
else
  echo "Warning: Whitepaper not found in repository."
fi

# Copy logo files
if [ -f "$TMP_DIR/assets/nis-protocol-logo.png" ]; then
  cp $TMP_DIR/assets/nis-protocol-logo.png public/images/
  echo "Logo copied successfully."
else
  # Create a placeholder image if logo not found
  echo "Warning: Logo not found. Creating placeholder."
  # This command requires ImageMagick to be installed
  # convert -size 500x300 gradient:green-white -gravity center -annotate 0 "NIS Protocol" public/images/nis-protocol-logo.png
fi

# Clean up
rm -rf "$TMP_DIR"
echo "Cleanup complete."

echo "Asset download completed. Please verify the files are correctly placed."
