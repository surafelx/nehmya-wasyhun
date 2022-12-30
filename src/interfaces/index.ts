type CursorType = 'default' | 'hover-link' | 'hover-image';

interface Specs {
  aspect?: string;
  format?: string;
  camera?: string;
  lenses?: string;
}

interface Credits {
  direc?: string;
  photoDirec?: string;
  colorist?: string;
  prod?: string;
  postProd?: string;
}

interface Album {
  key: string;
  name: string;
  tag: string;
  images: string[];
  specs: Specs;
  credits: Credits;
}

export type { CursorType, Album, Specs, Credits };
