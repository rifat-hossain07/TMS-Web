import { useContext } from "react";
import { context } from "../Components/ContextProvider/Provider";

const useAuth = () => {
  const auth = useContext(context);
  return auth;
};

export default useAuth;
