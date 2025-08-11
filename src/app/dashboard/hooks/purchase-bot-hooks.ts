import { ApiError } from "@/src/config/api-config";
import { IOrderResponse } from "@/src/models/bot-model";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { purchaseApi } from "../apis/purchase-apis";

export function useOrderBot() {
  const queryClient = useQueryClient();
  return useMutation<IOrderResponse, ApiError, FormData>({
    mutationFn: (payload) => purchaseApi.purchase_bot(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["order"] });
    },
    onError: (error) => {
      console.error("Failed to create job:", error.message, error.status);
    },
  });
}

export function useGetOrders(page: number = 1) {
  return useQuery<IOrderResponse, ApiError>({
    queryKey: ["order", page],
    queryFn: () => purchaseApi.get_orders_bot(page),
  });
}
