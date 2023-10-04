import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ hits }) => {
  return (
    <ul className="ImageGallery">
      {hits.map(image => (
        <ImageGalleryItem
          key={image.id}
          id={image.id}
          webformatURL={image.webformatURL}
          tags={image.tags}
        />
      ))}
    </ul>
  );
};
