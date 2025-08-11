import { ApiError } from "@/src/config/api-config";
import {
  IDeleteServer,
  IServer,
  IServerPayload,
  IServerResponse,
} from "@/src/models/servers-model";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { serverApi } from "../apis/server-apis";

export function useGetNotifications(id: number) {
  return useQuery<IServerResponse, ApiError, IServer>({
    queryKey: ["server", id],
    queryFn: () => serverApi.get_server_by_id(id),
  });
}

export function useReadNotification() {
  return useQuery<IServerResponse[], ApiError>({
    queryKey: ["server"],
    queryFn: () => serverApi.get_servers(),
  });
}

export function useReadAllNotifications() {
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

export function useDeleteNotification() {
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
