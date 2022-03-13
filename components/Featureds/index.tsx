import Link from 'next/link';
import React from 'react';
import { Article } from '../../types/article';
import FeaturedCard from '../FeaturedCard';

const Featureds = ({ articles }: { articles: Article[] }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 pl-1 border-l-4 border-red-700">
        Destaques que podem te interessar
      </h2>
      <div>
        {articles?.map((article) => {
          return (
            <Link href={`/article/${article.attributes.slug}`}>
              <a href="">
                <div className="mb-2">
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
