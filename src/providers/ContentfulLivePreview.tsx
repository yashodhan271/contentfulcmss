'use client';

import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react';
import React from 'react';

export function LivePreviewProvider({
  children,
  isEnabled
}: {
  children: React.ReactNode;
  isEnabled: boolean;
}) {
  return (
    <ContentfulLivePreviewProvider
      locale="en-US"
      enableInspectorMode={true}
      enableLiveUpdates={true}
      debugMode // This allows you to toggle the debug mode which is off by default
      targetOrigin="https://app.contentful.com" 
    >
      {children}
    </ContentfulLivePreviewProvider>
  );
}
