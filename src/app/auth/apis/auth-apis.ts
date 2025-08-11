import { apiClient } from "@/src/config/api-config";
import { ILoginPayload, ISignupPayload } from "@/src/models/api-payload-model";
import { IAuthResp, ISignupResponse } from "@/src/models/user-model";

export const authApi = {
  async login(payload: ILoginPayload): Promise<IAuthResp> {
    try {
      const response = await apiClient.post<IAuthResp>("login", payload);
      return response;
    } catch (error) {
      console.error("Error in login:", error);
      throw error;
    }
  },

  async register(payload: ISignupPayload): Promise<ISignupResponse> {
    try {
      const response = await apiClient.post<ISignupResponse>(
        "register",
        payload
      );
      return response;
    } catch (error) {
      console.error("Error in logout:", error);
      throw error;
    }
  },
};
