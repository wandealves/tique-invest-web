export class UserService {

  isAuthenticated(): boolean {
    const userStorage = localStorage.getItem(
      process.env.REACT_APP_STORAGE_KEY as string
    );

    if (!userStorage) return false;

    return true;
  }
}
