import React from 'react';
import Articles from '../components/articles';
import FeaturedBanner from '../components/FeaturedBanner';
import Featureds from '../components/Featureds';
import Layout from '../components/layout';
import NewsCarousel from '../components/NewsCarousel';
import Seo from '../components/seo';
import { fetchAPI } from '../lib/api';
import { Article } from '../types/article';
import { Category } from '../types/category';

const Home = ({
  articles,
  categories,
  homepage,
  featureds,
  bannerArticles,
}: {
  articles: Article[];
  categories: Category[];
  homepage: any;
  featureds: Article[];
  bannerArticles: Article[];
}) => {
  return (
    <Layout categories={categories} seo={homepage.attributes.seo}>
      <Seo seo={homepage.attributes.seo} />
      <div className=" w-full flex flex-col">
        <div className="flex-col h-full sm:flex-row w-full sm:h-96 flex justify-between items-center mb-8 ">
          <NewsCarousel articles={articles} />
          <div className="h-full w-full mt-4 sm:mt-0 sm:pl-2 flex flex-col">
            {bannerArticles?.length >= 2 && (
              <>
                <FeaturedBanner
                  article={bannerArticles[0]}
                  className="h-64 sm:h-1/2 mb-2"
                />
                <FeaturedBanner
                  article={bannerArticles[1]}
                  className="h-64 sm:h-1/2 mt-2 "
                />
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="w-full mt-8 lg:mt-0">
            <h2 className="text-2xl font-semibold mb-4">Newest articles</h2>
            <Articles articles={articles} />
          </div>
          <div className="lg:w-96">
            <Featureds articles={featureds} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, categoriesRes, homepageRes, featuredRes, bannerRes] =
    await Promise.all([
      fetchAPI('/articles', { populate: '*', sort: 'createdAt:DESC' }),
      fetchAPI('/categories', { populate: '*' }),
      fetchAPI('/homepage', {
        populate: {
          hero: '*',
          seo: { populate: '*' },
        },
      }),
      fetchAPI('/articles', {
        populate: '*',
        sort: 'createdAt:DESC',
        filters: {
          featured: true,
        },
        pagination: { pageSize: 8 },
      }),
      fetchAPI('/articles', {
        populate: '*',
        sort: 'createdAt:DESC',
        filters: {
          isBanner: true,
        },
        pagination: { pageSize: 2 },
      }),
    ]);

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
      featureds: featuredRes.data,
      bannerArticles: bannerRes.data,
    },
    revalidate: 1,
  };
}

export default Home;
