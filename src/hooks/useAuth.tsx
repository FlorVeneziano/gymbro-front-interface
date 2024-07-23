// src/hooks/useAuthenticate.ts
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LOGIN_URL } from "../helpers/envs";
import { getUser } from "../providers/backend-ts/user";
import { useSessionStore } from "../store/session.store";

const useAuthenticate = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const login = useSessionStore((state) => state.login);

  const profile = useSessionStore((state) => state.profile);

  useEffect(() => {
    if (profile) return;
    const token = localStorage.getItem("token");
    if (token) return;

    const queryParams = new URLSearchParams(location.search);
    const loginToken = queryParams.get("token");

    if (loginToken) {
      localStorage.setItem("token", loginToken);

      getUser().then((profile) => {
        if (profile) {
          login(profile);
          navigate("/");
        } else {
          window.location.replace(LOGIN_URL);
        }
      });
    }
    

  }, [location, navigate, login, profile]);
};

export default useAuthenticate;
