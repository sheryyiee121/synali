import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ApiError } from "@/src/config/api-config";
import {
  IAllocateServerPayload,
  IDeleteServer,
  IServer,
  IServerPayload,
  IServerResponse,
  IUpdateServerPayload,
} from "@/src/models/servers-model";
import { serverApi } from "../apis/server-apis";
import { IPhoneUserResponse } from "@/src/models/phone-model";

export function useGetServerById(id: number) {
  return useQuery<IServerResponse, ApiError, IServer>({
    queryKey: ["server", id],
    queryFn: () => serverApi.get_server_by_id(id),
  });
}

export function useGetServer() {
  return useQuery<IServerResponse[], ApiError>({
    queryKey: ["server"],
    queryFn: () => serverApi.get_servers(),
  });
}

export function useCreateServer() {
  const queryClient = useQueryClient();
  return useMutation<IServerResponse, ApiError, IServerPayload>({
    mutationFn: (payload) => serverApi.create_server(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["server"] });
    },
    onError: (error) => {
      console.error("Failed to create job:", error.message, error.status);
    },
  });
}

export function useAllocateBots() {
  const queryClient = useQueryClient();
  return useMutation<IPhoneUserResponse, ApiError, IAllocateServerPayload>({
    mutationFn: (payload) => serverApi.allocate_server_bots(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["server"] });
    },
    onError: (error) => {
      console.error("Failed to create job:", error.message, error.status);
    },
  });
}

export function useUpdateServer() {
  const queryClient = useQueryClient();
  return useMutation<IServerResponse, ApiError, IUpdateServerPayload>({
    mutationFn: ({ id, payload }) => serverApi.update_server(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["server"] });
    },
    onError: (error) => {
      console.error("Failed to create job:", error.message, error.status);
    },
  });
}

export function useDeleteServer() {
  const queryClient = useQueryClient();
  return useMutation<IDeleteServer, ApiError, number>({
    mutationFn: (id) => serverApi.delete_server(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["server"] });
    },
    onError: (error) => {
      console.error("Failed to delete job:", error.message, error.status);
    },
  });
}
