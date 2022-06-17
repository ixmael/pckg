import { TUser } from '../../domain/types';

const UserService = () => {

  const service = {
    Login: (username: string): TUser => {
      const user: TUser = {
        username: username,
      };

      return user;
    },
  };

  return service;
};

export default UserService;
