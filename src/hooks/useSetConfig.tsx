import { useQuery } from "react-query";
import { useSessionStore } from "../store/session.store";
import { getExercises } from "../providers/backend-ts/exercise";
import { getRoutines } from "../providers/backend-ts/routine";
import { useEffect } from "react";

const useSetConfig = () => {
  const { setExercises, setRoutines, profile } = useSessionStore(
    (state) => state
  );

  const { refetch: refetchExercises, isFetched: fetchedExercises } = useQuery(
    "exercises",
    getExercises,
    {
      onSuccess: (response) => {
        setExercises(response);
      },
    }
  );
  const { refetch: refetchRoutines, isFetched: fetchedRoutines } = useQuery(
    "routines",
    getRoutines,
    {
      onSuccess: (response) => {
        setRoutines(response);
      },
    }
  );

  useEffect(() => {
    if (profile) {
      refetchExercises();
      refetchRoutines();
    }
  }, [profile, refetchExercises, refetchRoutines]);
};

export default useSetConfig;
