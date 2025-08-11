import { ApiError } from "@/src/config/api-config";
import { ILoginPayload, ISignupPayload } from "@/src/models/api-payload-model";
import { IAuthResp, ISignupResponse } from "@/src/models/user-model";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authApi } from "../apis/auth-apis";

export function useLogin() {
  const queryClient = useQueryClient();

  return useMutation<IAuthResp, ApiError, ILoginPayload>({
    mutationFn: (payload) => authApi.login(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error) => {
      console.error("Login failed:", error.message, error.status);
    },
  });
}

export function useSignup() {
  const queryClient = useQueryClient();

  return useMutation<ISignupResponse, ApiError, ISignupPayload>({
    mutationFn: (payload) => authApi.register(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error) => {
      console.error("Login failed:", error.message, error.status);
    },
  });
}
