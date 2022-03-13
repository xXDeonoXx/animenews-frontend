import Moment from 'react-moment';
import Layout from '../../components/layout';
import MarkdownVisualizer from '../../components/MarkdownVisualizer';
import Seo from '../../components/seo';
import { fetchAPI } from '../../lib/api';
import { getStrapiMedia } from '../../lib/media';
import { Article } from '../../types/article';
import { Category } from '../../types/category';
import 'moment/locale/pt-br';
import Chip from '../../components/Chip';

interface ArticleProps {
  article: Article;
  categories: Category[];
}

const ArticlePage = ({ article, categories }: ArticleProps) => {
  const imageUrl = getStrapiMedia(article.attributes.image);

  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article.attributes.image,
    article: true,
  };

  return (
    <Layout categories={categories} seo={seo}>
      <Seo seo={seo} />
      <div
        className={`h-[600px] flex justify-center items-center w-full`}
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        {/* <h1 className="text-white text-7xl">{article.attributes.title}</h1> */}
      </div>
      <div className="w-full flex justify-center">
        <div className="border w-3/4 -mt-32 bg-white z-10 p-8">
          <div className="flex w-full relative justify-center items-center mb-4">
            <h1 className="text-center text-5xl">{article.attributes.title}</h1>
          </div>
          <p className="uk-margin-remove-top text-gray-500 text-md mb-4">
            Publicado por{' '}
            <span className="font-bold">
              {article.attributes.author.data.attributes.name}
            </span>{' '}
            em{' '}
            <Moment format="LL" locale="pt-br">
              {article.attributes.publishedAt}
            </Moment>
          </p>
          <MarkdownVisualizer source={article.attributes.content} />
          <div className="py-8 flex items-center">
            <span className="font-semibold text-lg">Tags:</span>
            <div className="flex ml-4">
              {article.attributes.categories.data.map((category) => {
                return <Chip>{category.attributes.name}</Chip>;
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const articlesRes = await fetchAPI('/articles', { fields: ['slug'] });

  return {
    paths: articlesRes.data.map((article: Article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const articlesRes = await fetchAPI('/articles', {
    filters: {
      slug: params.slug,
    },
    populate: '*',
  });
  const categoriesRes = await fetchAPI('/categories');

  return {
    props: { article: articlesRes.data[0], categories: categoriesRes.data },
    revalidate: 1,
  };
}

export default ArticlePage;
