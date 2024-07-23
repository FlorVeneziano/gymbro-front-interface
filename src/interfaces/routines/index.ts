export interface RoutineReq {
  name: string;
  description: string;
  routine: Exercises[];
}

export interface Exercises {
  exerciseId: number;
  series: number;
}
