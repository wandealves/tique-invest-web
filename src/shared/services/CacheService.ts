import { BaseDTO } from 'shared/dtos';

import { Util } from 'shared/util';

export class CacheService {
  add(data: BaseDTO) {
    const key = Util.getStorageKey();
    if (key) localStorage.setItem(key, Util.encodeBase64(JSON.stringify(data)));
  }
  update(data: BaseDTO) {
    this.remove();
    this.add(data);
  }
  remove() {
    const key = Util.getStorageKey();
    if (key) localStorage.removeItem(key);
  }
  get():string | null{
    const key = Util.getStorageKey() as string;

    const value = localStorage.getItem(
      key
    );

    if(value) return value;

    return null;
  }
}
