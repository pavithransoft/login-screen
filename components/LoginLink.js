import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
export default function LoginLink() {
  return (
    <>
      <div className="hr-line">
        <hr />
        <h2>or</h2>
        <hr className="-ml-[3rem]" />
      </div>
      <button className="link-login">
        <FcGoogle className="link-icon" />
        Continue with google
      </button>
      <button className="link-login">
        <FaFacebook className="link-icon" />
        Continue with facebook
      </button>
    </>
  );
}
