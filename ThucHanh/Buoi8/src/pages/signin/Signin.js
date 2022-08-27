import { Link } from "react-router-dom";

const Signin = (props) => {
  return (
    <div className="signin">
      <h3>This is a signin page</h3>
      <div className="group-link">
        <p>
          <Link to="/forgot-password">Forgot password?</Link>
        </p>
        <p>
          <Link to="/signup">Don`t have a account? sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
