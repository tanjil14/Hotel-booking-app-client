import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
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
    errors: {},
  });
  console.log(info);
  const handleChange = (e) => {
    setInfo((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };
  const handleClick = (e) => {
    e.preventDefault();
    const { errors, isValid } = validation();
    setErrors(errors);
  };
  const validation = () => {
    const errors = {};
    const { username, email, password, phone, country, city } = info;
    if (!username) {
      errors.username = "Please Provide Your Name!";
    }
    if (!email) {
      errors.email = "Please Provide Your Email!";
    }
    if (!password) {
      errors.password = "Please Provide Your Password!";
    }
    if (!phone) {
      errors.phone = "Please Provide Your Phone!";
    }
    if (!country) {
      errors.country = "Please Provide Your Country!";
    }
    if (!city) {
      errors.city = "Please Provide Your City!";
    }
    if (!file) {
      errors.file = "Please Provide Your Photo!";
    }
    return {
      errors,
      isValid: Object.keys(errors).length === 0,
    };
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
              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              alt="User"
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image:
                  <FontAwesomeIcon icon={faFolderPlus} />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
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
                {errors.phone && (
                  <span className="error">{errors.phone}</span>
                )}
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
