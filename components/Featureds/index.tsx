import Link from 'next/link';
import React from 'react';
import { Article } from '../../types/article';
import FeaturedCard from '../FeaturedCard';

const Featureds = ({ articles }: { articles: Article[] }) => {
  const articless = [...articles, ...articles];
  return (
    <div className="w-full h-full">
      <h2 className="text-xl font-semibold mb-4 pl-1 border-l-4 border-red-700">
        Destaques que podem te interessar
      </h2>
      <div className="flex flex-row justify-between lg:flex-col">
        {articless?.map((article, index) => {
          return (
            <Link href={`/article/${article.attributes.slug}`}>
              <a className="contents" href="">
                <div
                  className={`${
                    index + 1 < articless.length && 'mr-2'
                  } h-64 w-1/4 lg:w-full lg:h-full lg:mb-2 lg:mr-0`}
                >
                  <FeaturedCard article={article} />
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Featureds;
