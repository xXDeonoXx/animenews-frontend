import Link from 'next/link';
import React from 'react';
import { Article } from '../../types/article';
import Chip from '../Chip';

interface FeaturedBannerProps {
  article: Article;
  className?: string;
}

const FeaturedBanner = ({ className, article }: FeaturedBannerProps) => {
  return (
    <Link href={`/article/${article.attributes.slug}`}>
      <div
        className={`cursor-pointer flex overflow-hidden ${className} relative group`}
      >
        <div
          style={{
            backgroundImage: `url(${process.env.NEXT_PUBLIC_REACT_IMAGE_BASE_URL}${article.attributes.image.data.attributes.url})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
          className={`flex flex-col justify-between h-full w-full transition-all duration-500 group-hover:scale-105 absolute`}
        />
        <div className={`z-10 flex flex-col justify-between h-full w-full`}>
          <div className="border-l-4 border-red-700 m-4 flex items-center">
            {article.attributes.categories.data.map((category) => (
              <Chip className="mx-2">{category.attributes.name}</Chip>
            ))}
          </div>
          <div className="w-full h-4/5 bg-gradient-to-t from-black px-4">
            <h2 className="text-white text-2xl font-bold ">
              {article.attributes.title}
            </h2>
            <p className="text-lg line-clamp-2 text-white">
              {article.attributes.description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedBanner;
