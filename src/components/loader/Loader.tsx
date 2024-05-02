import CircularProgress from "@mui/material/CircularProgress";
import "./loader.css";
const Loader = () => {
  return (
    <div>
      <CircularProgress
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      />
    </div>
  );
};

export default Loader;
