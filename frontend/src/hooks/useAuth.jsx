import { useMutation, useQueryClient } from "@tanstack/react-query";

import { apiEndPoints } from "../lib/api";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export default function useRegister() {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (data) => apiEndPoints.register(data),
    onSuccess: (res) => {
      localStorage.setItem("token", res.data.token);
      queryClient.invalidateQueries(["user"]);
      navigate("/profile");
      toast.success("Registered is successfully!");
    },
    onError(error) {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Something went wrong!";
      console.error("Login error:", error);
      toast.error(message);
    },
  });
  return mutation;
}
export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (credential) => apiEndPoints.login(credential),

    onSuccess: (res) => {
      localStorage.setItem("token", res.data.token);
      queryClient.invalidateQueries(["user"]);
      navigate("/profile");
      toast.success("Logged in successfully!");
    },

    onError: (error) => {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Something went wrong!";
      console.error("Login error:", error);
      toast.error(message);
    },
  });

  return mutation;
}
