# Setting Up Vertex AI for OrganicaAI Chatbot

This guide helps you set up Google Cloud Vertex AI integration for the chatbot.

## Prerequisites

1. A Google Cloud Platform account
2. Access to the Google Cloud Console
3. Billing enabled on your GCP account

## Steps to Set Up

### 1. Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Select a project" at the top of the page
3. Click "New Project"
4. Name your project (e.g., "organicaai-project")
5. Click "Create"

### 2. Enable Vertex AI API

1. In your new project, go to "APIs & Services" > "Library"
2. Search for "Vertex AI API"
3. Click on it and then click "Enable"

### 3. Create a Service Account

1. Go to "IAM & Admin" > "Service Accounts"
2. Click "Create Service Account"
3. Name your service account (e.g., "organicaai-vertexai")
4. Grant the following roles:
   - "Vertex AI User"
   - "Storage Object Viewer"
5. Click "Continue" and then "Done"

### 4. Create and Download Credentials

1. Find your new service account in the list
2. Click on the service account email
3. Go to the "Keys" tab
4. Click "Add Key" > "Create New Key"
5. Choose "JSON" and click "Create"
6. Save the downloaded file as `google-credentials.json` in your server directory

### 5. Configure Environment Variables

Add the following to your server's `.env` file:

```
GOOGLE_CLOUD_PROJECT=your-project-id
GOOGLE_CLOUD_LOCATION=us-central1
GOOGLE_APPLICATION_CREDENTIALS=./google-credentials.json
```

Replace `your-project-id` with your actual Google Cloud project ID.

### 6. Test the Integration

Run the test script to verify everything is working:

```
cd server
node test-vertex-ai.js
```

## Troubleshooting

### Common Issues:

1. **Authentication Error**: Make sure your credentials file is in the correct location and has the right permissions.

2. **API Not Enabled**: Ensure the Vertex AI API is enabled for your project.

3. **Billing Issue**: Verify billing is enabled for your Google Cloud project.

4. **Model Access**: If you're using advanced models, ensure your project has access to them.

For more information, visit [Google Cloud Vertex AI documentation](https://cloud.google.com/vertex-ai/docs). 