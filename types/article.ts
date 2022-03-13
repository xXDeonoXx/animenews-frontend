import { Author } from './author';
import { Category } from './category';
import { ImageProps } from './image';

export interface Article {
  id: number;
  attributes: {
    title: string;
    description: string;
    content: string;
    slug: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    categories: { data: Category[] };
    author: { data: Author };
    image: ImageProps;
  };
}
