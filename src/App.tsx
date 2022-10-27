import { useContext, useEffect } from "react";

import useLocalStorage from "@/lib/hooks/useLocalStorage";
import { AuthContext } from "@/lib/states/ContextProvider";
import Router from "./Routes/Router";

function App() {
  const { setAuth } = useContext(AuthContext);
  const { getLocalStorage } = useLocalStorage();

  useEffect(() => {
    const token = getLocalStorage("access_token") as string;
    if (token) {
      setAuth({ authToken: token, isLogin: true });
    }
  }, []);

  return <Router />;
}

export default App;
