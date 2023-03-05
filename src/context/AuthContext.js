import axios from "axios";
import { createContext, useContext, useEffect } from "react";
import { toast } from "react-hot-toast";
export const AuthContext = createContext();
export const AuthContextDispatcher = createContext();
import { useReducerAsync } from "use-reducer-async";
import Router from "next/router";

const initialState = {
  loading: true,
  user: null,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SIGNIN_PENDING":
      return { loading: true, user: null, error: null };
    case "SIGNIN_SUCCESS":
      return { loading: false, user: action.payload, error: null };
    case "SIGNIN_REJECT":
      return { loading: false, user: null, error: action.error };
    case "SIGNUP_PENDING":
      return { loading: true, user: null, error: null };
    case "SIGNUP_SUCCESS":
      return { loading: false, user: action.payload, error: null };
    case "SIGNUP_REJECT":
      return { loading: false, user: null, error: action.error };
    case "LOAD_USER":
      return { loading: false, user: action.payload, error: null };
    case "SIGNOUT":
      return { loading: false, user: null, error: null };
    default:
      return { ...state };
  }
};

const asyncActionHandlers = {
  SIGNIN:
    ({ dispatch }) =>
    (action) => {
      // ?loading
      dispatch({ type: "SIGNIN_PENDING " });
      axios
        .post("http://localhost:5000/api/user/signin", action.payload, {
          withCredentials: true,
        })
        .then(({ data }) => {
          toast.success("خوش آمدید");
          //   *Success
          dispatch({ type: "SIGNIN_SUCCESS", payload: data });
          Router.push("/");
        })
        // !reject
        .catch((err) => {
          dispatch({
            type: "SIGNIN_REJECT",
            error: err?.response?.data?.message,
          });
          toast.error(err?.response?.data?.message);
        });
    },

  LOAD_USER:
    ({ dispatch }) =>
    (action) => {
      // ?loading
      dispatch({ type: "SIGNIN_PENDING " });
      axios
        .get("http://localhost:5000/api/user/load", {
          withCredentials: true,
        })
        .then(({ data }) => {
          //   *Success
          dispatch({ type: "SIGNIN_SUCCESS", payload: data });
        })
        // !reject
        .catch((err) => {
          dispatch({
            type: "SIGNIN_REJECT",
            error: err?.response?.data?.message,
          });
        });
    },

  SIGNUP:
    ({ dispatch }) =>
    (action) => {
      // ?loading
      dispatch({ type: "SIGNUP_PENDING " });
      axios
        .post("http://localhost:5000/api/user/signup", action.payload, {
          withCredentials: true,
        })
        .then(({ data }) => {
          toast.success("ثبت نام با موفقیت انجام شد");
          //   *Success
          dispatch({ type: "SIGNUP_SUCCESS", payload: data });
          Router.push("/");
        })
        // !reject
        .catch((err) => {
          dispatch({
            type: "SIGNUP_REJECT",
            error: err?.response?.data?.message,
          });
          toast.error(err?.response?.data?.message);
        });
    },
  SIGNOUT:
    ({ dispatch }) =>
    (action) => {
      axios
        .get("http://localhost:5000/api/user/logout", {
          withCredentials: true,
        })
        .then((res) => {
          window.location.href = "/"
          // dispatch({type : "SIGNOUT"})
        })
        .catch(() => {});
    },
};

const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducerAsync(
    reducer,
    initialState,
    asyncActionHandlers
  );
  useEffect(() => {
    dispatch({ type: "LOAD_USER" });
  }, []);
  return (
    <AuthContext.Provider value={user}>
      <AuthContextDispatcher.Provider value={dispatch}>
        {children}
      </AuthContextDispatcher.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
export const useAuthActions = () => useContext(AuthContextDispatcher);
