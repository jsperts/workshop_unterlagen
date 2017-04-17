class SendToServer {
  constructor($http, logFactory) {
    this.$http = $http;
    this.data = '';
    this.error = '';
    this.logFactory = logFactory;
  }

  send(data) {
    this.logFactory.log('Send data');
    return this.$http.post('/color', {data: data}).then((resp) => {
      this.data = resp.data;
      return 'DATA_RECEIVED';
    }).catch(() => {
      this.error = 'ERROR';
      return 'ERROR_DATA'
    });
  }
}
SendToServer.$inject = ['$http', 'Log'];

export default SendToServer;
export const name = 'SendToServerService';
