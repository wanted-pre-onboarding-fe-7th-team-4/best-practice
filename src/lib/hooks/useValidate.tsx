import { useState } from "react";
import { REG_EXP } from "../Immutable";

const useValidate = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  const handleValidate = (value: string, type: "email" | "password") => {
    if (type === "email") {
      const isEmail = value.match(REG_EXP.email);

      return isEmail !== null ? setIsEmail(true) : setIsEmail(false);
    }

    if (type === "password") {
      const isPassword = value.match(REG_EXP.password);
      return isPassword !== null ? setIsPassword(true) : setIsPassword(false);
    }

    setIsEmail(false);
    setIsPassword(false);
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    isEmail,
    isPassword,
    handleValidate,
    setIsEmail,
    setIsPassword
  };
};

export default useValidate;
