import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
// import axios from "axios";
import { axiosInstance } from "../../config";



const Login = () => {

      const [credentials, setCredentials] = useState({
            email: undefined,
            password: undefined,
      });

      const { loading, error, dispatch } = useContext(AuthContext);

      const navigate = useNavigate();

      const handleChange = (e) => {
            setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
      };
        
      const handleClick = async (e) => {
            e.preventDefault();
            dispatch({ type: "LOGIN_START" });
            try {
                  const res = await axiosInstance.post("/auth/login", credentials);
                  if (res.data.isAdmin) {
                        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
                        navigate("/");
                  } else {
                        dispatch({
                              type: "LOGIN_FAILURE",
                              payload: { message: "You are not allowed!" },
                        });
                  }
            } catch (err) {
                  dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
            }
      };


      return (
            <div
                  style={{
                        height: "100vh",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: '#5bd1d7',
                        color: "#fbfbfd",
                  }}
            >

                  <h3
                        style={{
                              fontSize: '50px',
                              fontWeight: "bold",
                              marginBottom: "30px",
                              color: "#282828",
                        }}>
                        sheboss
                  </h3>

                  <input
                        style={{ padding: 10, marginBottom: 20, width: 200 }}
                        type="text"
                        placeholder="Email"
                        id="email"
                        onChange={handleChange}
                  />

                  <input
                        style={{ padding: 10, marginBottom: 20, width: 200 }}
                        type="password"
                        id="password"
                        placeholder="Password"
                        onChange={handleChange}
                  />

                  <button
                        disabled={loading} onClick={handleClick}
                        style={{ padding: 10, width: 220, fontSize: 15 }}
                  >
                        Login
                  </button>

                  {error && <span>{error.message}</span>}

            </div>
      );
};

export default Login;
