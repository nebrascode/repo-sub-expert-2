import NotificationHelper from './notification-helper';
import CONFIG from '../globals/config';

const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
    webSocket.onerror = this._onErrorHandler;
  },

  _onMessageHandler(message) {
    const restaurant = JSON.parse(message.data);
    NotificationHelper.sendNotification({
      title: `${restaurant.name} is perfect place to dinner!`,
      options: {
        body: restaurant.overview,
        image: `${CONFIG.IMAGE_BASE_URL}/${restaurant.pictureId}`,
      },
    });
  },

  _onErrorHandler(error) {
    console.error('WebSocket Error:', error);
  },
};

export default WebSocketInitiator;
