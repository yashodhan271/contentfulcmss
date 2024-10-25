// utils/previewConfig.ts

interface PreviewData {
    slug?: string;
    secret?: string;
  }
  
  export const enableContentfulPreview = (previewData: PreviewData | null) => {
    if (!previewData) {
      return false;
    }
  
    const { secret } = previewData;
    
    // Replace this with your actual preview secret from Contentful
    const CONTENTFUL_PREVIEW_SECRET = process.env.CONTENTFUL_PREVIEW_SECRET;
  
    if (!CONTENTFUL_PREVIEW_SECRET) {
      console.warn('CONTENTFUL_PREVIEW_SECRET is not set in environment variables');
      return false;
    }
  
    // Validate the preview secret
    if (secret !== CONTENTFUL_PREVIEW_SECRET) {
      return false;
    }
  
    return true;
  };
  
  // Optional: Helper function to get preview client if needed
  export const getContentfulPreviewClient = () => {
    const space = process.env.CONTENTFUL_SPACE_ID;
    const accessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;
    const environment = process.env.CONTENTFUL_ENVIRONMENT || 'master';
  
    if (!space || !accessToken) {
      throw new Error('Contentful preview credentials are not properly configured');
    }
  
    const contentful = require('contentful');
    return contentful.createClient({
      space,
      accessToken,
      environment,
      host: 'preview.contentful.com'
    });
  };