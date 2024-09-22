import React from "react";
import { useGlobalContext } from "../../Context";
import "../../assests/styles/bar.css";

const ErrorBar = () => {
  const { errorMessage } = useGlobalContext();

  if (!errorMessage) return null;

  return <div className="errorBar">{errorMessage}</div>;
};

export default ErrorBar;
