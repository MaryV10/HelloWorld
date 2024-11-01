import { axiosInstance } from "@/shared/lib/axiosInstance";
import { Place, PlaceList } from "../model";
// import { Place, PlaceList } from '../model';

export class PlaceService {
  // параметризированный запрос для OnePlacePage (только со статусом "approved")
  static async getOnePlace(id: number): Promise<Place> {
    try {
      const { data } = await axiosInstance.get(`/places/${id}`);
      return data;
    } catch (error) {
      console.error("Error fetching all places:", error);
      throw new Error("Failed to fetch places.");
    }
  }

  //вывести все места которые есть в базе со статусом "approved" (для общей карты)
  static async getAllApprovedPlaces(): Promise<PlaceList> {
    try {
      const { data } = await axiosInstance.get(`/places`);
      return data.places;
    } catch (error) {
      console.error("Error fetching all places:", error);
      throw new Error("Failed to fetch places.");
    }
  }

  static async getAllMyPlaces(): Promise<PlaceList> {
    try {
      const { data } = await axiosInstance.get(`/places/my`);
      return data.places;
    } catch (error) {
      console.error("Error fetching all places:", error);
      throw new Error("Failed to fetch places.");
    }
  }

  //вывести все места которые есть в базе со статусом "pending" (для админки)
  static async getAllPendingPlaces(): Promise<PlaceList> {
    try {
      const { data } = await axiosInstance.get(`/places/pending`);
      return data.places;
    } catch (error) {
      console.error("Error fetching all places:", error);
      throw new Error("Failed to fetch places.");
    }
  }
  //создание одного места на общей карте
  static async createPlace(
    formData: FormData,
    title: string,
    description: string,
    longitude: string,
    width: string,
    tags: string[]
  ): Promise<Place> {
    try {
      const response = await axiosInstance.post("/places", {
        title,
        description,
        longitude,
        width,
      });

      if (tags) {
        tags.map(async (tag: string) => {
          await axiosInstance.post("/tagplace", {
            tagId: tag,
            placeId: response.data.place.id,
          });
        });
      }

      const placeId = response.data.place.id;
      await axiosInstance.post(
        `/photos/${placeId}`,

        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      return response.data.place;
    } catch (error) {
      console.error("Error creating place:", error);
      throw new Error("Failed to create place.");
    }
  }
  //одобрить заявку на добавление нового места
  static async approvePlace(id: number): Promise<Place> {
    try {
      const response = await axiosInstance.put(`/places/approve/${id}`);
      return response.data.place;
    } catch (error) {
      console.error("Error approving place:", error);
      throw new Error("Failed to approve place.");
    }
  }

  //отклонить заявку на добавление нового места
  static async rejectPlace(id: number): Promise<Place> {
    try {
      const response = await axiosInstance.put(`/places/reject/${id}`);
      return response.data.place;
    } catch (error) {
      console.error("Error rejecting place:", error);
      throw new Error("Failed to reject place.");
    }
  }

  //удалить место  по ID
  static async deletePlace(id: number): Promise<void> {
    try {
      await axiosInstance.delete(`/places/${id}`);
    } catch (error) {
      console.error("Error deleting place:", error);
      throw new Error("Failed to delete place.");
    }
  }

  static async updatePlace(
    formData: FormData,
    id: number,
    title: string,
    description: string,
    longitude: string,
    width: string
  ): Promise<Place> {
    try {
      const response = await axiosInstance.put(`/places/${id}`, {
        title,
        description,
        longitude,
        width,
      });

      const placeId = response.data.place.place.id;
      
      await axiosInstance.post(`/photos/${placeId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data.place;

    } catch (error) {
      console.error("Error fetching place:", error);
      throw new Error("Failed to fetch place.");
    }
  }
}
