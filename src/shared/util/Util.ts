import { Base64 } from 'js-base64';

/* eslint-disable no-undef */
export class Util {
  static getStorageKey = (): string | null => {
    const key = process.env.REACT_APP_STORAGE_KEY;
    return key ? key.toString() : null;
  };

  static encodeBase64 = (json: string) => {
    return Base64.btoa(json);
  };

  static decodeBase64 = (value: string) => {
    return Base64.atob(value);
  };

  static formatNumber = (value: number) => {
    return new Intl.NumberFormat('pt-br', {
      style: 'decimal',
      currency: 'BRL',
      minimumFractionDigits: 2
    }).format(value);
  };

  static getReactAppApiURL = () => {
    return process.env.REACT_APP_API_URL;
  };
  static getReactAppIntervalRenew = () => {
    return process.env.REACT_APP_INTERVAL_RENEW;
  };
}
