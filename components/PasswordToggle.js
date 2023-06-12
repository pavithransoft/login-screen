import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";

export default function PasswordToggle() {
  const [visible, setVisible] = useState(false);
  const toggleEye = () => {
    setVisible(!visible);
  };

  const Icon = visible ? (
    <FaEye onClick={toggleEye} className="eye-icon" />
  ) : (
    <FaEyeSlash onClick={toggleEye} className="eye-icon" />
  );

  const InputType = visible ? "text" : "password";

  return [InputType, Icon];
}
