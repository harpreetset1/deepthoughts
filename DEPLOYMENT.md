# Deploying Deep Thought Networks to Google Cloud

This guide walks through the steps to deploy the Deep Thought Networks website to Google App Engine.

## Prerequisites

1. [Google Cloud SDK](https://cloud.google.com/sdk/docs/install) installed and configured
2. A Google Cloud project with billing enabled
3. Node.js and npm installed locally

## Deployment Steps

### 1. Authenticate with Google Cloud

```bash
gcloud auth login
```

### 2. Set your Google Cloud project

```bash
gcloud config set project YOUR_PROJECT_ID
```

Replace `YOUR_PROJECT_ID` with your actual Google Cloud project ID.

### 3. Enable required APIs

```bash
gcloud services enable appengine.googleapis.com
```

### 4. Build your React application

From the root directory of your project:

```bash
npm run build
```

This creates a production-ready build in the `build` directory.

### 5. Deploy to App Engine

With the `app.yaml` file already configured in your project root, deploy with:

```bash
gcloud app deploy
```

When prompted, select a region close to your target audience.

### 6. View your deployed application

```bash
gcloud app browse
```

This will open your deployed application in a browser.

### 7. Set up a Custom Domain (Optional)

1. Go to the App Engine service in the Google Cloud Console
2. Navigate to Settings > Custom Domains
3. Click "Add a custom domain" and follow the instructions

## Continuous Deployment

For continuous deployment, you can:

1. Connect your GitHub repository to Cloud Build
2. Create a trigger that builds your application and deploys to App Engine
3. Configure a `cloudbuild.yaml` file with the appropriate steps

```yaml
steps:
  # Install dependencies
  - name: 'node:18'
    entrypoint: npm
    args: ['install']
  
  # Build the app
  - name: 'node:18'
    entrypoint: npm
    args: ['run', 'build']
  
  # Deploy to App Engine
  - name: 'gcr.io/google.com/cloudsdktool/cloud-sdk'
    entrypoint: 'bash'
    args: ['-c', 'gcloud app deploy --quiet']
```

## Troubleshooting

- **Build Issues**: Check that your React build completes successfully
- **Deployment Issues**: Review the App Engine logs in the Google Cloud Console
- **Routing Issues**: Ensure your `app.yaml` file correctly routes all requests

## Cost Management

App Engine has a generous free tier, but monitor your usage in the Google Cloud Console to avoid unexpected charges. The standard environment scales to zero when not in use, which helps control costs.
