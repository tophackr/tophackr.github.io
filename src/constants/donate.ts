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
    USDT_TON: 'UQCVLISp4nuwasrQlnENC-kVDjeZYmq4zHhAeTRu_UI86cgo',
    USDT_TRC20: 'TE4hhkDFdkmF7RjoTkA6pQwPJNuXGtdCat',
    TON: 'UQCVLISp4nuwasrQlnENC-kVDjeZYmq4zHhAeTRu_UI86cgo',
    BTC: '13cAm4BtJ8sSTmCsn4kygy4hUdF7a2x6LS',
    NOT: 'UQCVLISp4nuwasrQlnENC-kVDjeZYmq4zHhAeTRu_UI86cgo',
  },
};
