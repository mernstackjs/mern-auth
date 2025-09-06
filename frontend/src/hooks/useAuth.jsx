import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { apiEndPoints } from "../lib/api";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { useAuthContext } from "../content/authcontext";

export default function useRegister() {
  const queryClient = useQueryClient();
  const { setAuthUser } = useAuthContext();

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (data) => apiEndPoints.register(data),
    onSuccess: (res) => {
      localStorage.setItem("token", res.data.token);
      queryClient.invalidateQueries(["user"]);
      setAuthUser(res.data.user); // update context immediately
      navigate("/profile");
      toast.success("Logged in successfully!");
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
  const { setAuthUser } = useAuthContext();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (credential) => apiEndPoints.login(credential),

    onSuccess: (res) => {
      localStorage.setItem("token", res.data.token);
      queryClient.invalidateQueries(["user"]);
      setAuthUser(res.data.user); // update context immediately
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

export function useMe() {
  const token = localStorage.getItem("token");
  const { data, isLoading, error } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await apiEndPoints.me();
      return res.data.user;
    },
    enabled: !!token,
    retry: false,
  });

  return {
    user: data,
    isLoading,
    error,
  };
}
