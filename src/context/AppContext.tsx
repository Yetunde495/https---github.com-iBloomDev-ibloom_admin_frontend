import React, { useContext, useReducer, ReactNode } from "react";

export const DATA_CENTER_USER = "";
export const DATA_CENTER_TOKEN = "@urdct";

interface ContextType {
  user: any;
  isAdmin: boolean;
}

const defaultContext: ContextType = {
  user: null,
  isAdmin: false,
};

type ActionType =
  | { type: "update"; payload: Partial<ContextType> }
  | { type: "reset" };

function reducer(state: ContextType, action: ActionType): ContextType {
  switch (action.type) {
    case "update":
      return { ...state, ...action.payload };
    case "reset":
      return { ...state, ...defaultContext };
    default:
      return state;
  }
}

export const AppContext = React.createContext<ContextType>(defaultContext);

export const useApp = () => {
  return useContext(AppContext);
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultContext);

  const update = (payload: Partial<ContextType>) => {
    dispatch({ type: "update", payload });
  };

  const signIn = (data: any) => {
    const isAdmin = /^(admin|superadmin)$/.test(data?.user_type);
    data.isAdmin = isAdmin;
    update({
      user: data,
      isAdmin,
    });
    localStorage.setItem(DATA_CENTER_TOKEN, data.token);
    localStorage.setItem(
      DATA_CENTER_USER,
      JSON.stringify({
        username: data.username,
        isAdmin,
        id: data?.id,
      })
    );
  };

  const signOut = () => {
    localStorage.removeItem(DATA_CENTER_TOKEN);
    localStorage.removeItem(DATA_CENTER_USER);
    update({
      user: null,
      isAdmin: false,
    });
  };

  const loadData = () => {
    let d = localStorage.getItem(DATA_CENTER_USER);
    if (d) {
      update({
        user: d,
        isAdmin: d?.isAdmin,
      });
    }
  };

  const updateUser = (data: any) => {
    update({ user: data });
  };

  let value = {
    user: state?.user,
    isAdmin: state?.isAdmin,
    signIn,
    signOut,
    updateUser,
    loadData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
