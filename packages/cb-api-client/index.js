import axios from 'axios';
import fs from 'fs';
import config from './config';
const MALE = 'male';
const FEMALE = 'female';

function getChat(key, message) {
  const params = {
    message,
    key
  };

  return axios.get(config.chatbotApi.endpoint, { params }).then((response) => {
    return response.data;
  });
}

class Client {
  constructor() {
    this._messageLog = [];
  }

  getKeyOf(person) {
    return config.chatbotApi.keys[person];
  }

  log(data) {
    this._messageLog.push(data);
  }

  getLog() {
    return this._messageLog;
  }

  async communicate(person, message) {
    const key = this.getKeyOf(person);

    const response = await getChat(key, message);

    const data = {
      name: person,
      message: response.result
    };
    // console.log('RESPONSE:', data);
    this.log(data);
    return data;
  }

  async communicateAll(count, initialMessage) {
    let message = initialMessage;

    for (let i = 0; i < count; i += 1) {
      message = await this.communicate(MALE, message);
      message = await this.communicate(FEMALE, message);
    }

    return this.getLog();
  }
}

function main() {
  const client = new Client();
  client.communicateAll(2, 'hello').then((log) => {
    fs.writeFileSync('result.log', JSON.stringify(log), 'utf8');
    console.log(log);
  }).catch((error) => {
    console.error(error);
  });
}

main();
