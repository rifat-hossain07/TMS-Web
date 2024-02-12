import { useContext } from "react";
import { context } from "../Components/ContextProvider/Provider";

const useAuth = () => {
  // using auth for do not repeating same code twice
  const auth = useContext(context);
  return auth;
};

export default useAuth;
