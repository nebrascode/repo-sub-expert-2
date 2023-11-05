import UrlParser from '../../routes/url-parser';
import TheRestoDbSource from '../../data/therestodb-source';
import { createDetailRestoTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="resto" class="detail-resto"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await TheRestoDbSource.detailResto(url.id);
    const restoContainer = document.querySelector('#resto');
    restoContainer.innerHTML = createDetailRestoTemplate(resto);
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.error === false) {
          console.log('Ulasan berhasil ditambahkan');
        } else {
          console.error('Gagal menambahkan ulasan:', responseData.message);
        }
      })
      .catch((error) => {
        console.error('Terjadi kesalahan saat menambahkan ulasan:', error);
      });
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto,
    });
  },
};

export default Detail;
