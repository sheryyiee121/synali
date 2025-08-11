import { apiClient } from "@/src/config/api-config";
import {
  ICreatePhonePayload,
  IPhoneDataResponse,
} from "@/src/models/phone-model";

export const phoneApi = {
  async get_phones(payload: ICreatePhonePayload): Promise<IPhoneDataResponse> {
    try {
      const response = await apiClient.post<IPhoneDataResponse>(
        `get-phones`,
        payload
      );
      return response;
    } catch (error) {
      console.error("Error fetching jobs:", error);
      throw error;
    }
  },
};
