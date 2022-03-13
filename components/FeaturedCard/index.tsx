import React from 'react';
import { Article } from '../../types/article';

interface FeaturedCardProps {
  article: Article;
}

const FeaturedCard = ({ article }: FeaturedCardProps) => {
  return (
    <div className="w-full h-64 overflow-hidden relative group">
      <div
        className="w-full h-full bg-center transition-all duration-500 group-hover:scale-110 absolute"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_REACT_IMAGE_BASE_URL}${article.attributes.image.data.attributes.url})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />
      <div className="w-full h-full flex items-end">
        <div className="bg-gradient-to-t from-black w-full h-1/2 bg-opacity-20 flex flex-col justify-end absolute">
          <h2 className="text-white text-2xl font-bold p-4">
            {article.attributes.title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
