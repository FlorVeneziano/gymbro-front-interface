import { create } from "zustand";
import type { Profile, SessionStore, StateCtx } from "./session.interface";

export const initialState: StateCtx = {
  profile: null,
  exercises: [],
  routines: [],
};

export const useSessionStore = create<SessionStore>((set) => ({
  ...initialState,
  login: (profile: Profile) => set({ profile }),
  logout: () => set({ profile: null }),
  setRoutines: (routines) => set({ routines }),
  setExercises: (exercises) => set({ exercises }),
}));
