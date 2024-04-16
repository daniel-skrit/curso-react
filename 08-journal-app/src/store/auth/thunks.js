import {
  loginWithEmailPassword,
  logoutfirebase,
  registerUserWithEmailPassword,
  signInWithGoogle,
} from "../../firebase/providers";
import { clearNotesLogout } from "../journal/journalSlice";
import { logout, checkingCredentials, login } from "./authSlice";
export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignin = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();
    if (!result.ok) {
      return dispatch(logout(result.errorMessage));
    }

    dispatch(login(result));
  };
};

export const startCreatinguserWithEmailPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const { ok, uid, photoURL, errorMessage } =
      await registerUserWithEmailPassword({ email, password, displayName });
    if (!ok) return dispatch(logout({ errorMessage }));
    dispatch(login({ uid, photoURL, displayName, email }));
  };
};

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const { ok, uid, photoURL, errorMessage, displayName } =
      await loginWithEmailPassword({ email, password });
    if (!ok) return dispatch(logout({ errorMessage }));
    dispatch(login({ uid, photoURL, displayName, email }));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await logoutfirebase();

    dispatch(clearNotesLogout());
    dispatch(logout({ errorMessage: "" }));
  };
};
