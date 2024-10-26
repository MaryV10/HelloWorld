import { Feedback } from "@/entities/feedback";
import { Photo } from "@/entities/photo";
import { Tag } from "@/entities/tag";

export type Place = {
  id: number;
  title: string;
  description: string;
  width: string;
  longitude: string;
  status: string;
  userId: number;
  createdAt: Date;
  updatedAt: Date;

  tags: Tag[];

  Photos: Photo[];

  Feedbacks: Feedback[];
};

export type PlaceWithoutStatusTagsPhotosFeedbacks = {
  id: number;
  title: string;
  description: string;
  width: string;
  longitude: string;
  userId: number;


};



export type PlaceList = Place[];

