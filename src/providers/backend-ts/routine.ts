import axios from "axios";
import { BACKEND_TS_URL } from "../../helpers/envs";
import type { RoutineReq } from "../../interfaces/routines";

export const API = axios.create({
  baseURL: `${BACKEND_TS_URL}/api/v1/routines`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const getRoutines = async () => {
  try {
    const response = await API.get("/");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createRoutine = async ({
  name,
  description,
  routine,
}: RoutineReq) => {
  try {
    const response = await API.post("/create", {
      name,
      description,
      routine,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getRoutine = async (routineId: string) => {
  try {
    const response = await API.get(`/${routineId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
