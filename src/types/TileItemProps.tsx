import { ButtonProps } from './ButtonProps';

export interface CommonItemProps {
  metadata: {
    tags: Array<any>;
  };
  sys: {
    space: object;
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    environment: object;
    revision: number;
    contentType: object;
    locale: string;
  };
  fields: {
    commonType: string;
    content: Array<object>;
    featureImages: Array<object>;
    hero: object;
    slug: string;
    title: string;
  };
}

export interface CommonFields {
  fields: {
    commonType: string;
  };
}

export interface HeroFields {
  fields: {
    image: object;
  };
}

export interface CollectionItemProps {
  metadata: {
    tags: Array<any>;
  };
  sys: {
    space: object;
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    environment: object;
    revision: number;
    contentType: object;
    locale: string;
  };
  fields: {
    common: CommonFields;
    content: Array<object>;
    hero: HeroFields;
    slug: string;
    title: string;
  };
}


export interface SalesTilesItem {
  metadata: {
    tags: Array<any>;
  };
  sys: {
    space: object;
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    environment: object;
    revision: number;
    contentType: object;
    locale: string;
  };
  fields: {
    contactEmail: string;
    icon: object;
    subtitle: string;
    tertiaryButton: ButtonProps;
  };
}

export interface GeneralTilesItem {
  metadata: {
    tags: Array<any>;
  };
  sys: {
    space: object;
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    environment: object;
    revision: number;
    contentType: object;
    locale: string;
  };
  fields: {
    title: string;
    icon: object;
    text: string;
    tertiaryButton: ButtonProps;
  };
}