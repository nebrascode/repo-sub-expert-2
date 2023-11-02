import UrlParser from '../../routes/url-parser';
import TheRestoDbSource from '../../data/therestodb-source';
import { createDetailRestoTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div id="resto" class="detail-resto"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await TheRestoDbSource.detailResto(url.id);
    const restoContainer = document.querySelector('#resto');
    restoContainer.innerHTML = createDetailRestoTemplate(resto);
  },
};

export default Detail;
