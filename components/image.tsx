import { getStrapiMedia } from '../lib/media';
import NextImage from 'next/image';

const Image = ({
  image,
  className,
  objectFit = 'contain',
}: {
  image: any;
  className?: string;
  objectFit?: any;
}) => {
  const { url, alternativeText, width, height } = image.data.attributes;

  // const loader = () => {
  //   return getStrapiMedia(image)
  // }

  return (
    <NextImage
      // loader={loader}
      layout="fill"
      // width={width}
      // height={height}
      objectFit={objectFit}
      src={getStrapiMedia(image)}
      alt={alternativeText || ''}
      className={className}
    />
  );
};

export default Image;
