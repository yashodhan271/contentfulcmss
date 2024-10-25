import { ButtonProps } from './ButtonProps';
import { Document } from '@contentful/rich-text-types';

export interface TextColumnItemProps {
  metadata: {
    tags: any[];
  };
  sys: {
    space: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    environment: {
      sys: {
        id: string;
        type: string;
        linkType: string;
      };
    };
    revision: number;
    contentType: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    locale: string;
  };
  fields: {
    internalName: string;
    title: string;
    text: Document;
    buttons: ButtonProps[];
  };
}
