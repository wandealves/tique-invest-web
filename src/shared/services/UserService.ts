import { CacheService } from 'shared/services';

import {UserAuthenticateDTO} from 'shared/dtos';
import api from './api';

export class UserService {
  private cacheService: CacheService;

  constructor() {
    this.cacheService = new CacheService();
  }

  async authenticate(
    email: string,
    password: string
  ): Promise<void> {
  //  if (!email || !password) return; //new ResponseHandle(null, handleError('Login ou senha inválida'))

    try {

      const payload = {
        identifier: email,
        password: password
      };

      const userAuthenticate:UserAuthenticateDTO = {
        id: '1',
        username: 'user test',
        email: 'test@email.com',
        token: 'token'
      };

      this.cacheService.add(userAuthenticate);

      /*const response = await api.post('auth/local', {
        identifier: email,
        password: password
      });

      if (response.status === 200) {
        const { user, jwt } = response.data;

        if (!user || !jwt) return;

        const userAuthenticate = {
          id: user.id,
          username: user.username,
          email: user.email,
          token: jwt
        };

        this.cacheService.add(userAuthenticate);

        return;
      }*/

      return;
    } catch (error) {
      return;
    }
  }
  isAuthenticated(): boolean {
    const userStorage = this.cacheService.get();

    if (!userStorage) return false;

    return true;
  }
}
