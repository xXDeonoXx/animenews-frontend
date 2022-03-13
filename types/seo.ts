import { ImageProps } from './image';

export default interface Seo {
  metaTitle: string;
  metaDescription: string;
  shareImage?: ImageProps;
  article?: boolean;
}
