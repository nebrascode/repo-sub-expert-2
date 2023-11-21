/* eslint-disable class-methods-use-this */
import { createListResto } from '../../templates/template-creator';

class FavoriteRestoView {
  getTemplate() {
    return `
      <div class="content">
        <input id="query" type="text">
        <h2 class="content__heading">Your Liked Resto</h2>
  
        <div id="restos" class="restos">
        </div>
      </div>
    `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  _showFavoriteResto(restos) {
    let html;
    if (restos.length) {
      html = restos.reduce((carry, resto) => carry.concat(createListResto(resto)), '');
    } else {
      html = this._getEmptyRestoTemplate();
    }

    document.getElementById('restos').innerHTML = html;

    document.getElementById('restos').dispatchEvent(new Event('restos:updated'));
  }

  _getEmptyRestoTemplate() {
    return `
      <div class="resto-item__not__found">
        Tidak ada resto untuk ditampilkan
      </div>
    `;
  }
}

export default FavoriteRestoView;
