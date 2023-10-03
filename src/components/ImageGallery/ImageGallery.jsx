import axios from 'axios';
import { toast } from 'react-toastify';

// <ul class="gallery">
//   <!-- Набір <li> із зображеннями -->
// </ul>

const baseUrl = "https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12"

export class ImageGallery extends Component {
  state = {
  photos: []
  }

  async componentDidMount() { //componentDidUpdate
    try {
      const response = await axios.get(baseUrl);
      this.state({ response.data.photos })
    } catch (error) {
      toast.error(error.message)
    }
  }

render()

}