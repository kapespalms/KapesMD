import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Writing = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/work", { replace: true });
  }, [navigate]);
  return null;
};

export default Writing;
