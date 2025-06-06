interface NotFound {
  title: string;
  description: string;
  status: number;
  home: string;
}

export const notfound: NotFound = {
  title: "Oops! We can't find that page.",
  description: "The page you are looking for doesn't exist or has been moved.",
  status: 404,
  home: 'https://tophackr.com',
};
