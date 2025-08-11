import { apiClient } from "@/src/config/api-config";
import { IOrderResponse } from "@/src/models/bot-model";

export const purchaseApi = {
  async purchase_bot(payload: FormData): Promise<IOrderResponse> {
    try {
      const response = await apiClient.post<IOrderResponse>(`orders`, payload);
      return response;
    } catch (error) {
      console.error("Error in login:", error);
      throw error;
    }
  },

  async get_orders_bot(per_page: number = 1): Promise<IOrderResponse> {
    try {
      const response = await apiClient.get<IOrderResponse>(`get-orders`, {
        per_page,
      });
      return response;
    } catch (error) {
      console.error("Error in login:", error);
      throw error;
    }
  },
};
