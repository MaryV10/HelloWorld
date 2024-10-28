import { axiosInstance } from "@/shared/lib/axiosInstance";
import { TagList } from "../model";

export class TagService {
    static async getAllTags(): Promise<TagList> {
        try {
            const { data } = await axiosInstance.get('/tags');
            
            return data.tags
        } catch (error) {
            console.error('Error fetching all places:', error);
        throw new Error('Failed to fetch places.');
        }
    }
}