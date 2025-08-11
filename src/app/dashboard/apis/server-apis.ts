import { apiClient } from "@/src/config/api-config";
import { IPhoneUserResponse } from "@/src/models/phone-model";
import {
  IAllocateServerPayload,
  IDeleteServer,
  IServerPayload,
  IServerResponse,
} from "@/src/models/servers-model";

export const serverApi = {
  async get_servers(): Promise<IServerResponse[]> {
    try {
      const response = await apiClient.get<IServerResponse[]>(
        `vicidial-settings`
      );
      return response;
    } catch (error) {
      console.error("Error fetching jobs:", error);
      throw error;
    }
  },

  async get_server_by_id(id: number): Promise<IServerResponse> {
    try {
      const response = await apiClient.get<IServerResponse>(
        `vicidial-settings/${id}`
      );
      return response;
    } catch (error) {
      console.error("Error fetching jobs:", error);
      throw error;
    }
  },

  async create_server(payload: IServerPayload): Promise<IServerResponse> {
    try {
      const response = await apiClient.post<IServerResponse>(
        `vicidial-settings`,
        payload
      );
      return response;
    } catch (error) {
      console.error("Error in login:", error);
      throw error;
    }
  },

  async allocate_server_bots(
    payload: IAllocateServerPayload
  ): Promise<IPhoneUserResponse> {
    try {
      const response = await apiClient.post<IPhoneUserResponse>(
        `phones`,
        payload
      );
      return response;
    } catch (error) {
      console.error("Error in login:", error);
      throw error;
    }
  },

  async update_server(
    id: number,
    payload: IServerPayload
  ): Promise<IServerResponse> {
    try {
      const response = await apiClient.put<IServerResponse>(
        `vicidial-settings/${id}`,
        payload
      );
      return response;
    } catch (error) {
      console.error("Error updating job:", error);
      throw error;
    }
  },

  async delete_server(id: number): Promise<IDeleteServer> {
    try {
      const response = await apiClient.delete<IDeleteServer>(
        `vicidial-settings/${id}`
      );
      return response;
    } catch (error) {
      console.error("Error updating job:", error);
      throw error;
    }
  },
};
