import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";
import { validation } from "../../utils/formValidator";
import "./newUser.css";
const NewUser = () => {
  const [file, setFile] = useState("");
  const [errors, setErrors] = useState({});
  const [info, setInfo] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    country: "",
    city: "",
  });
  console.log(info);
  const handleChange = (e) => {
    setInfo((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    const { errors, isValid } = validation(info,file);
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "booking-app");
    try {
      if (isValid) {
        const uploadRes = await axios.post(
          "https://api.cloudinary.com/v1_1/dqo2uejpy/image/upload",
          data
        );
        const { url } = uploadRes.data;
        const newUser = {
          ...info,
          img: url,
        };
        await axios.post("/auth/register", newUser);
      } else {
        setErrors(errors);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="register">
      <div className="rContainer">
        <div className="top">
          <h1>Register on Booking App</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt="User"
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image:
                  <FontAwesomeIcon className="icon" icon={faFolderPlus} />
                </label>
                <input
                  onChange={(e) => setFile(e.target.files[0])}
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                />
                {errors.file && <span className="error">{errors.file}</span>}
              </div>
              <div className="formInput">
                <label htmlFor="username">UserName:</label>
                <input
                  type="text"
                  placeholder="mr.xyz"
                  id="username"
                  onChange={handleChange}
                  value={info.username}
                />
                {errors.username && (
                  <span className="error">{errors.username}</span>
                )}
              </div>
              <div className="formInput">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  placeholder="Enter Your Email!"
                  id="email"
                  onChange={handleChange}
                  value={info.email}
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
              <div className="formInput">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  placeholder="*****"
                  onChange={handleChange}
                  value={info.password}
                />
                {errors.password && (
                  <span className="error">{errors.password}</span>
                )}
              </div>
              <div className="formInput">
                <label htmlFor="phone">Phone:</label>
                <input
                  type="text"
                  placeholder="+880123456789"
                  id="phone"
                  onChange={handleChange}
                  value={info.phone}
                />
                {errors.phone && <span className="error">{errors.phone}</span>}
              </div>
              <div className="formInput">
                <label htmlFor="country">Country:</label>
                <input
                  type="text"
                  placeholder="USA"
                  id="country"
                  onChange={handleChange}
                  value={info.country}
                />
                {errors.country && (
                  <span className="error">{errors.country}</span>
                )}
              </div>
              <div className="formInput">
                <label htmlFor="city">City:</label>
                <input
                  type="text"
                  placeholder="New York"
                  id="city"
                  onChange={handleChange}
                  value={info.city}
                />
                <br />
                {errors.city && <span className="error">{errors.city}</span>}
              </div>
              <button onClick={handleClick} className="rButton">
                Submit
              </button>
            </form>
          </div>
        </div>
        {/* <button disabled={loading} onClick={handleClick} className="lButton">
            Login
          </button> */}
        {/* {error && <span>{error.message}</span>} */}
      </div>
    </div>
  );
};

export default NewUser;
