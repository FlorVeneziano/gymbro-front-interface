export interface SessionStore extends StateCtx {
  login: (profile: Profile) => void;
  logout: () => void;
  setRoutines: (routines: Routine[]) => void;
  setExercises: (exercises: Exercise[]) => void;
}

export interface StateCtx {
  profile: Profile | null;
  exercises: Exercise[] | [];
  routines: Routine[] | [];
}

export interface Profile {
  name: string;
  email: string;
  id: number;
}

interface Exercise {
  id: number;
  name: string;
  description: string;
}

interface Routine {
  name: string;
  description: string;
  createdAt: string;
  routine: ExerciseRoutine[];
}

interface ExerciseRoutine {
  exerciseId: number;
  series: number;
}
