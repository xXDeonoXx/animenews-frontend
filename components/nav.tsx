import React from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import { Category } from '../types/category';

const Nav = ({ categories }: { categories: Category[] }) => {
  return (
    <div className="">
      <nav className="flex">
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li className="w-32 relative ml-4">
              <Link href="/">
                <a>
                  <NextImage
                    layout="fill"
                    src="/images/animenews-logo.svg"
                    className="w-32"
                  />
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex ml-auto">
          <ul className="flex gap-x-8 p-8 font-semibold capitalize">
            {categories.map((category) => {
              return (
                <li key={category.id}>
                  <Link href={`/category/${category.attributes.slug}`}>
                    <a className="text-2xl text-gray-600">
                      {category.attributes.name}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      <div className="border-b border-gray-800 mx-4" />
    </div>
  );
};

export default Nav;
