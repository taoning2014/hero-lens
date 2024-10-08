export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Losschart = {
  time: number;
  loss_amount: number;
};

export type LatestHeroUploads = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  hero: string;
};
