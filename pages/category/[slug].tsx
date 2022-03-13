import Articles from '../../components/articles';
import Featureds from '../../components/Featureds';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import { fetchAPI } from '../../lib/api';
import { Article } from '../../types/article';
import { Category } from '../../types/category';

interface CategoryPageProps {
  category: Category;
  categories: { data: Category[] };
  featureds: Article[];
}

const CategoryPage = ({
  category,
  categories,
  featureds,
}: CategoryPageProps) => {
  const seo = {
    metaTitle: 'category.attributes.name',
    metaDescription: `All ${'category.attributes.name'} articles`,
  };

  return (
    <Layout categories={categories.data} seo={seo}>
      <Seo seo={seo} />
      <div className="flex">
        <div className="w-full">
          <h2 className="text-2xl font-semibold mb-8">
            {category.attributes.name}
          </h2>
          {category.attributes.articles?.data && (
            <Articles articles={category.attributes.articles?.data} />
          )}
        </div>
        <div className="w-96">
          <Featureds articles={featureds} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const categoriesRes = await fetchAPI('/categories', { fields: ['slug'] });

  return {
    paths: categoriesRes.data.map((category: any) => ({
      params: {
        slug: category.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const matchingCategories = await fetchAPI('/categories', {
    filters: { slug: params.slug },
    populate: {
      articles: {
        populate: '*',
      },
    },
  });
  const allCategories = await fetchAPI('/categories');

  const featuredRes = await fetchAPI('/articles', {
    populate: '*',
    sort: 'createdAt:DESC',
    filters: {
      featured: true,
      categories: {
        id: { $in: [matchingCategories.data[0].id] },
      },
    },
  });

  return {
    props: {
      category: matchingCategories.data[0],
      categories: allCategories,
      featureds: featuredRes.data,
    },
    revalidate: 1,
  };
}

export default CategoryPage;
