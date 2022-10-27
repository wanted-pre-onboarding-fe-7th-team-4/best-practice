import { useEffect, useState } from "react";

interface IButtonDisabledHook {
  data: boolean[];
}

const useControlButtonDisabled = ({ data }: IButtonDisabledHook) => {
  const [isTrue, setIsTrue] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const validateArray = (array: boolean[]) => {
    setIsTrue(array.every((value) => value === true));
  };

  useEffect(() => {
    validateArray(data);
    if (isTrue) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [isTrue, data]);

  return buttonDisabled;
};

export default useControlButtonDisabled;
