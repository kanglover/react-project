import {AsyncStorage} from 'react-native';
import langsData from '../resource/data/langs.json';
import keysData from '../resource/data/keys.json';

export const TYPE_LANGUAGE = {
  FLAG_LANGUAGE: 'language_flag',
  FLAG_KEY: 'language_key',
};

export default class LanguageService {
  constructor(flag) {
    this.flag = flag;
  }

  fetchData() {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(this.flag, (err, data) => {
        if (err) {
          reject(err);
          return;
        }

        if (!data) {
          this.flag === TYPE_LANGUAGE.FLAG_LANGUAGE ? langsData : keysData;
          this.saveData(data);
          resolve(data);
        } else {
          resolve(JSON.parse(result));
        }
      });
    });
  }

  saveData(data) {
    AsyncStorage.setItem(this.flag, JSON.stringify(data));
  }
}
