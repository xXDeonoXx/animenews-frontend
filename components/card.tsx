import Link from 'next/link';
import React from 'react';
import { Article } from '../types/article';
import getAgoValue from '../util/getAgoValue';
import Chip from './Chip';
import NextImage from './image';

const Card = ({ article }: { article: Article }) => {
  return (
    <Link href={`/article/${article.attributes.slug}`}>
      <div className="w-full py-2 group">
        <div className=" flex w-full max-w-4xl h-48">
          <div className="h-full w-48 md:w-96 overflow-hidden">
            <div className="h-full transition-all duration-500 group-hover:scale-125 relative">
              <NextImage
                image={article.attributes.image}
                className={'h-full w-full'}
                objectFit="cover"
              />
            </div>
          </div>
          <div className="px-4 w-2/3 flex flex-col justify-between">
            <div>
              <p id="title" className="font-semibold text-xl text-orange-700">
                {article.attributes.title}
              </p>
              <p className="h-20 mt-2 mb-4 text-lg line-clamp-3">
                {article.attributes.description}
              </p>
            </div>
            <div className="flex w-full justify-between">
              <div className="w-full items-center">
                {article.attributes.categories.data?.map((category) => {
                  return <Chip>{category.attributes.name}</Chip>;
                })}
              </div>

              <p className="w-full text-right">
                Por {article.attributes.author.data.attributes.name},{' '}
                {getAgoValue(
                  new Date(article.attributes.createdAt),
                  new Date()
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
