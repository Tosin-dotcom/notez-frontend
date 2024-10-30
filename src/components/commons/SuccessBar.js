import { useGlobalContext } from "../../Context";
import "../../assests/styles/bar.css";

const SuccessBar = () => {
  const { successMessage } = useGlobalContext();

  if (successMessage) {
    return <div className="successBar">{successMessage}</div>;
  }
};

export default SuccessBar;
