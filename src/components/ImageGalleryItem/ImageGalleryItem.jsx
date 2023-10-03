export const ImageGalleryItem = ({ id, webformatURL, tags }) => {
  return (
    <li className="gallery-item">
      <p>id:{id}</p>
      <img src={webformatURL} alt={tags} />
    </li>
  );
};
