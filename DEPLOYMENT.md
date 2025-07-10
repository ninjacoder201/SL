# Speedy Liquor Website - Deployment Guide

## Vercel Deployment

### Prerequisites
1. A Vercel account
2. Git repository hosted on GitHub/GitLab/Bitbucket

### Environment Variables
Set these in your Vercel dashboard:

```bash
REACT_APP_API_URL=https://your-api-domain.com
```

### Deployment Steps

1. **Connect Repository**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your Git repository

2. **Configure Build Settings**
   - Framework Preset: Create React App
   - Build Command: `npm run build`
   - Output Directory: `build`

3. **Set Environment Variables**
   - In project settings, add the environment variables listed above

4. **Deploy**
   - Click "Deploy"
   - Your site will be available at `https://your-project-name.vercel.app`

### API Configuration
The frontend expects an API running at the URL specified in `REACT_APP_API_URL`. 

For development, you can run the JSON server:
```bash
npm run json-server
```

### Security Features
- Security headers configured via `vercel.json`
- No hardcoded secrets
- Environment variables for API configuration
- Proper .gitignore for sensitive files

### Post-Deployment
1. Test all pages and functionality
2. Verify API connections work properly
3. Check mobile responsiveness
4. Test form submissions
5. Verify all images load correctly
