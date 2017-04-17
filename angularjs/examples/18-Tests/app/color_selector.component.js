import {name as serviceName} from './send_to_server.service';

class ColorSelector {
  constructor(sendToServer) {
    this.colors = ['black', 'red', 'blue', 'yellow'];
    this.currentColor = '';
    this.sendToServer = sendToServer;
    this.response = 'NO_RESPONSE_YET';
  }

  send() {
    this.sendToServer.send(this.currentColor).then((data) => {
      this.response = data;
    });
  }
}
ColorSelector.$inject = [serviceName];

const component = {
  templateUrl: 'app/color_selector.component.html',
  controller: ColorSelector
};

export default component;
export const name = 'colorSelector';
