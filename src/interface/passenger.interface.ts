export interface WhyFeatureInterface {
  id: number;
  title: string;
  imagePath: string;
}

export type DriverProps = {
  name: string;
  role: string;
  phone: string;
  image: string;
};

export type CarouselCardProps = {
  id?: number;
  image: string;
  name: string;
  role: string;
  text: string;
};

export type HeroBannerSlide = {
  title: string;
  subtitle: string;
  image: string;
};
