import { ApiError } from "@/src/config/api-config";
import { IOrderResponse } from "@/src/models/bot-model";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { purchaseApi } from "../apis/purchase-apis";

export function useAddCustomData() {
  const queryClient = useQueryClient();
  return useMutation<IOrderResponse, ApiError, FormData>({
    mutationFn: (payload) => purchaseApi.purchase_bot(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["train"] });
    },
    onError: (error) => {
      console.error("Failed to create job:", error.message, error.status);
    },
  });
}

export function useStartTraining() {
  const queryClient = useQueryClient();
  return useMutation<IOrderResponse, ApiError, FormData>({
    mutationFn: (payload) => purchaseApi.purchase_bot(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["train"] });
    },
    onError: (error) => {
      console.error("Failed to create job:", error.message, error.status);
    },
  });
}
