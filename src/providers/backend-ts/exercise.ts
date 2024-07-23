import axios from "axios";
import { BACKEND_TS_URL } from "../../helpers/envs";
import type { ExerciseReq } from "../../interfaces/exercises";

export const API = axios.create({
  baseURL: `${BACKEND_TS_URL}/api/v1/exercises`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const getExercises = async () => {
  try {
    const response = await API.get("/");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createExercise = async (exercise: ExerciseReq) => {
  try {
    const response = await API.post("/create", exercise);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getExercise = async (exerciseId: number) => {
  try {
    const response = await API.get(`/${exerciseId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateExercise = async (
  exerciseId: number,
  exercise: ExerciseReq
) => {
  try {
    const response = await API.put(`/${exerciseId}`, exercise);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteExercise = async (exerciseId: number) => {
  try {
    const response = await API.delete(`/${exerciseId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
