import React from 'react';
import { Article } from '../types/article';
import Card from './card';

const Articles = ({ articles }: { articles: Article[] }) => {
  return (
    <div className="">
      <div className="flex flex-wrap w-full">
        {articles.map((article, i) => {
          return (
            <Card
              article={article}
              key={`article__left__${article.attributes.slug}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Articles;
