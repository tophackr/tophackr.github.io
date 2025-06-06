interface Donate {
  once: Record<string, string>;
  monthly: string;
  crypto: Record<string, string>;
}

export const donate: Donate = {
  once: {
    projects: 'https://web.tribute.tg/l/AQ',
    paypal: 'https://paypal.me/tophackr2',
  },
  monthly: 'https://tophackr.gumroad.com/l/gmbns',
  crypto: {
    USDT_TON: 'UQDw_IxaBqpU-JzEF6gdSsBEKbbzfC-6kC8oBu5SSNM8_FM-',
    TON: 'UQDw_IxaBqpU-JzEF6gdSsBEKbbzfC-6kC8oBu5SSNM8_FM-',
    NOT: 'UQDw_IxaBqpU-JzEF6gdSsBEKbbzfC-6kC8oBu5SSNM8_FM-',
  },
};
