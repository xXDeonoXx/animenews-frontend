import Link from 'next/link';
import React from 'react';
import { Article } from '../../types/article';
import Chip from '../Chip';

interface ColumnLikeCard {
  className?: string;
  article: Article;
}

const ColumnLikeCard = ({ className, article }: ColumnLikeCard) => {
  return (
    <Link href={`/article/${article.attributes.slug}`}>
      <div
        className={`w-full h-full flex flex-col justify-between items-start cursor-pointer ${className} `}
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_REACT_IMAGE_BASE_URL}${article.attributes.image.data.attributes.url})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div>
          <div className="border-l-4 border-red-700 m-4 flex items-center">
            {article.attributes.categories.data.map((category) => (
              <Chip className="mx-2">{category.attributes.name}</Chip>
            ))}
          </div>
        </div>
        <div className="w-full h-3/5 sm:h-2/5 bg-gradient-to-t from-black px-4">
          <h2 className="text-white text-2xl font-bold ">
            {article.attributes.title}
          </h2>
          <p className="mt-2 mb-4 text-lg line-clamp-2 text-white">
            {article.attributes.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ColumnLikeCard;
