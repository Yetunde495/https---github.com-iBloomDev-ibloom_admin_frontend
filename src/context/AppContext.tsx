import React, { PropsWithChildren, useContext, useReducer } from "react";

export const DATA_CENTER_USER = "@user";
export const DATA_CENTER_TOKEN = "@token";

const defaultContext = {
  user: null,
  isLoggedIn: false,
  signIn: (_data: any) => {},
  signOut: () => {},
  updateUser: (_user: Student | Tutor | Organisation) => {},
  loadData: () => {},
} as any;

interface AppContextInterface {
  user: Student | User | any | null;
  isLoggedIn: boolean;
  signIn: (data: any) => void;
  signOut: () => void;
  updateUser: (data:  Student | Tutor | Organisation) => void;
  loadData: () => void;
}

function reducer(state: any, action: any) {
  switch (action.type) {
    case "update":
      return { ...state, ...action.payload };
    case "reset":
      return { ...state, ...defaultContext };
    default:
      return state;
  }
}

export const AppContext =
  React.createContext<AppContextInterface>(defaultContext);

export const useApp = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, defaultContext);

  const update = (payload: any) => {
    dispatch({ type: "update", payload });
  };

  const signIn = (data: any) => {
    update({
      user: data,
      isLoggedIn: true,
    });
    localStorage.setItem(DATA_CENTER_TOKEN, data.token);
    localStorage.setItem(DATA_CENTER_USER, JSON.stringify(data));
  };

  const signOut = () => {
    localStorage.removeItem(DATA_CENTER_TOKEN);
    localStorage.removeItem(DATA_CENTER_USER);
    update({
      user: null,
      isLoggedIn: false,
    });
  };

  const loadData = () => {
    let d = localStorage.getItem(DATA_CENTER_USER);
    if (d) {
      signIn(JSON.parse(d));
      // update({ user: JSON.parse(d), isLoggedIn: true });
    }
  };

  const updateUser = (data: any) => {
    update({ user: data });
  };

  let value: AppContextInterface = {
    user: state?.user,
    isLoggedIn: state?.isLoggedIn,
    signIn,
    signOut,
    updateUser,
    loadData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};