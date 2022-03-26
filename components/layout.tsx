import { Category } from '../types/category';
import Seo from '../types/seo';
import Nav from './nav';

interface LayoutProps {
  categories: Category[];
  seo: Seo;
}

const Layout: React.FC<LayoutProps> = ({ children, categories, seo }) => (
  <div className="flex justify-center items-center flex-col">
    <div className="max-w-6xl w-full px-4">
      <div className="w-full min-h-screen">
        <div className="w-full ">
          <Nav categories={categories} />
          <div className="py-8">{children}</div>
        </div>
      </div>
    </div>
    <div className="h-28 bg-gray-800 w-full flex flex-col justify-center items-center text-white">
      <p className="text-gray-400 text-center">
        © 2022 <span className="text-white">Rômullo Cordeiro Rodrigues</span>.
        Todos os direitos reservados.
      </p>
    </div>
  </div>
);

export default Layout;
