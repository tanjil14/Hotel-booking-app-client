import { faFolderPlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NewUser";


const NewUser = () => {
const handleClick=(e)=>{
    e.preventDefault()
}
  return (
    <div className="register">
      <div className="rContainer">
        <div className="top">
          <h3>Register</h3>
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
                  Image:{" "}
                  <FontAwesomeIcon icon={faFolderPlus} />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <div className="formInput">
                  <label htmlFor="username">UserName:</label>
                  <input
                    type="text"
                    placeholder="mr.xyz"
                    id="username"

                  />
                </div>
                <button onClick={handleClick}>Submit</button>
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
