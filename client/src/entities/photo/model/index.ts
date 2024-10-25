export type Photo = {
  id: number;
  placeId: number;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
};

export type PhotoList = Photo[];
