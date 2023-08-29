import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";
import withAuth from "./withAuth";

function Header({ loggedInUser, setLoggedInUser }) {
  const { theme } = useContext(ThemeContext);

  function LoggedIn({ loggedInUser, setLoggedInUser }) {
    return (
      <span>
        <b>Logged In User: </b> {loggedInUser}{" "}
        <button  
        onClick={() => {
          setLoggedInUser("");
        }}
        className="btn btn-secondary"
        >
          Log Out
        </button>
      </span>
    );
  }


  function NotLoggedIn({ loggedInUser, setLoggedInUser }) {
    return (
      <span>
        <button
          onClick={(e) => {
            e.preventDefault();
            const username = window.prompt("Please enter your name:", "");
            setLoggedInUser(username);
          }}
          className="btn btn-secondary"
        >
          Login
        </button>
      </span>
    );
  }
  return (
    <div className="padT4 padB4">
      <div className="container mobile-container">
        <div className="d-flex justify-content-between">
          <div>
            <img alt="SVCC Home Page" src="/images/SVCCLogo.png" />
          </div>
          <div className={theme === "light" ? "" : "text-info"}>
            <h4 className="header-title">Silicon Valley Code Camp</h4>
          </div>
          <div className={theme === "light" ? "" : "text-info"}>
            {loggedInUser && loggedInUser.length > 0 ? (
              <LoggedIn
                loggedInUser={loggedInUser}
                setLoggedInUser={setLoggedInUser}
              />
            ) : (
              <NotLoggedIn
                loggedInUser={loggedInUser}
                setLoggedInUser={setLoggedInUser}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuth(Header);
