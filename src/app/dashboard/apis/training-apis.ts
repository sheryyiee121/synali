import { apiClient } from "@/src/config/api-config";
import { IOrderPayload, IPhoneResponse } from "@/src/models/bot-model";

export const trainApi = {
  async add_custom_data(payload: IOrderPayload): Promise<IPhoneResponse> {
    try {
      const response = await apiClient.post<IPhoneResponse>(`phones`, payload);
      return response;
    } catch (error) {
      console.error("Error in login:", error);
      throw error;
    }
  },

  async start_training(payload: IOrderPayload): Promise<IPhoneResponse> {
    try {
      const response = await apiClient.post<IPhoneResponse>(`phones`, payload);
      return response;
    } catch (error) {
      console.error("Error in login:", error);
      throw error;
    }
  },
};
