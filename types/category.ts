import { Article } from './article';

export interface Category {
  id: number;
  attributes: {
    name: string;
    slug: string;
    createdAt: Date;
    updatedAt: Date;
    articles?: { data: Article[] };
  };
}
