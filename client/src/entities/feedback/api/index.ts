import { axiosInstance } from '@/shared/lib/axiosInstance';
import { Place } from '@/entities/place';




export class FeedbackService {


  static async createFeedback(comment: string, score:number, placeId: number): Promise<Place> {
    try {
      // console.log({comment, score, placeId}, "KFKFKFKF")
      const response = await axiosInstance.post('/feedbacks', {comment, score, placeId},
      );
      // console.log(response.data, 'daaaaataaaaaaaa')
      return response.data.place;
    } catch (error) {
      console.error('Error creating feedback:', error);
      throw new Error('Failed to create feedback.');
    }
  }


  static async deleteFeedback( id: number): Promise<Place> {
    try {
      return await axiosInstance.delete(`/feedbacks/${id}`);
      
    } catch (error) {
      console.error('Error deleting feedback:', error);
      throw new Error('Failed to delete feedback.');
    }
  }

  static async updateFeedback( id: number, comment: string, score:number, placeId: number): Promise<Place> {
    try {
      return await axiosInstance.put(`/feedbacks/${id}`, {comment, score, placeId});
      
    } catch (error) {
      console.error('Error updating feedback:', error);
      throw new Error('Failed to update feedback.');
    }
  }



 

}
