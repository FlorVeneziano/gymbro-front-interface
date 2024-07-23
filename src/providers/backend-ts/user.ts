import axios from "axios";
import { BACKEND_TS_URL } from "../../helpers/envs";

export const API = axios.create({
  baseURL: `${BACKEND_TS_URL}/api/v1`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const getUser = async () => {
  try {
    const response = await API.get("/users");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateUser = async ({
  name,
  weight,
}: {
  name: string;
  weight: number;
}) => {
  try {
    const response = await API.put("/user", { name, weight });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
