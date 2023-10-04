export const ImageGalleryItem = ({ id, webformatURL, tags }) => {
  return (
    <li className="ImageGalleryItem">
      <p>id:{id}</p>
      <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
    </li>
  );
};
