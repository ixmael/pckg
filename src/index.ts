import type { TPckg } from './types';
import { TUser } from './core/domain/types';

import UserService from './core/services/user';
import util from './util';

const pckg = (): TPckg => {
  const tl = util();
  const userService = UserService();

  const user: TUser = userService.Login('kuvira');

  const lib: TPckg = {
    today: (): string => {
      return tl.today();
    },
    name: (): string => {
      return user.username;
    },
  };

  return lib;
};

export default pckg;
