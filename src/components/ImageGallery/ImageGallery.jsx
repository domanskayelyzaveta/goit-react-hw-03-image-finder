import axios from 'axios';
import { toast } from 'react-toastify';

export const ImageGallery = ({ arr }) => {
  return (
    <ul className="gallery">
      {arr.map(({ id, webformatURL, tags }) => (
        <ImageGalleryItem
          key={id} 
          id={id}
          webformatURL={webformatURL}
          tags={tags}
        />
      )}
    </ul>
  );
};
