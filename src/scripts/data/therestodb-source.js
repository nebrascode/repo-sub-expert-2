import API_ENDPOINT from '../globals/api-endpoint';

class TheRestoDbSource {
  static async listResto() {
    const response = await fetch(API_ENDPOINT.LIST_RESTO);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default TheRestoDbSource;
