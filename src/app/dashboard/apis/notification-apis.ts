import { apiClient } from "@/src/config/api-config";
import { IOrderPayload, IPhoneResponse } from "@/src/models/bot-model";

export const notificationApi = {
  async get_notifications(payload: IOrderPayload): Promise<IPhoneResponse> {
    try {
      const response = await apiClient.post<IPhoneResponse>(`phones`, payload);
      return response;
    } catch (error) {
      console.error("Error in login:", error);
      throw error;
    }
  },

  async read_notifications(payload: IOrderPayload): Promise<IPhoneResponse> {
    try {
      const response = await apiClient.post<IPhoneResponse>(`phones`, payload);
      return response;
    } catch (error) {
      console.error("Error in login:", error);
      throw error;
    }
  },

  async read_all_notifications(
    payload: IOrderPayload
  ): Promise<IPhoneResponse> {
    try {
      const response = await apiClient.post<IPhoneResponse>(`phones`, payload);
      return response;
    } catch (error) {
      console.error("Error in login:", error);
      throw error;
    }
  },

  async delete_notifications(payload: IOrderPayload): Promise<IPhoneResponse> {
    try {
      const response = await apiClient.post<IPhoneResponse>(`phones`, payload);
      return response;
    } catch (error) {
      console.error("Error in login:", error);
      throw error;
    }
  },
};
