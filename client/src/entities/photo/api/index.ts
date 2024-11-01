import { axiosInstance } from '@/shared/lib/axiosInstance';
import { Place } from '@/entities/place';



export class PhotoService {

   //загрузка фото place
  static async uploadPhoto(imageUrl: string, placeId: number): Promise<Place> {
    try {
      const response = await axiosInstance.post('/photos', {imageUrl, placeId},
      );
      
      return response.data.place;
    } catch (error) {
      console.error('Error creating place:', error);
      throw new Error('Failed to create photo.');
    }
  }


  //удалить фото  по ID
  static async deletePhoto( id: number): Promise<Place> {
    try {
      return await axiosInstance.delete(`/photos/${id}`);
      
    } catch (error) {
      console.error('Error deleting place:', error);
      throw new Error('Failed to delete place.');
    }
  }



 

}
