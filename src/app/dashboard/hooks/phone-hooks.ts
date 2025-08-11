import { ApiError } from "@/src/config/api-config";
import {
  ICreatePhonePayload,
  IPhoneDataResponse,
} from "@/src/models/phone-model";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { phoneApi } from "../apis/phone-apis";

export function useGetPhones() {
  const queryClient = useQueryClient();
  return useMutation<IPhoneDataResponse, ApiError, ICreatePhonePayload>({
    mutationFn: (payload) => phoneApi.get_phones(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["phone"] });
    },
    onError: (error) => {
      console.error("Failed to create job:", error.message, error.status);
    },
  });
}
