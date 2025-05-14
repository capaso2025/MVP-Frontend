export interface Module {
  title: string;
  objective: string;
  image: string;
  imagePosition: 'left' | 'right';
  levels: {
    level: number;
    title: string;
    type?: string;
  }[];
}
