import type { TUtil } from './types';

const util = (): TUtil => {

  return {
    today: () => {
      const current = new Date();
      return `${current.getTime()}`;
    },
  };
};

export default util;
