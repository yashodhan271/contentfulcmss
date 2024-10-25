import { Entry, EntrySkeletonType } from "contentful";

export interface MenuItemProps {
  menuItem: MenuItem,
  index?: number,
}

export interface MenuItem extends EntrySkeletonType<MenuItem> {
  name: string;
  slug?: string;
  navigationLinks?: any;
  isExternalLink?: boolean;
  externalUrl?: string;
  subMenu?: [MenuItem];
  page?: any;
}