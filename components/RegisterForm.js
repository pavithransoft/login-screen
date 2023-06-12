import PasswordToggle from "@/components/PasswordToggle";
import Link from "next/link";

export default function RegisterForm() {
  const [passwordInputType, toggleEye] = PasswordToggle();
  return (
    <form>
      <label>Username</label>
      <input type="text" name="username" placeholder="username" autoFocus />
      <label>Email</label>
      <input
        type="email"
        name="email"
        placeholder="example@domain.com"
        autoFocus
      />
      <div className="password-layer">
        <div className="new-confirm">
          <label>New Password</label>
          <div className="relative">
            <input
              type={passwordInputType}
              name="newPassword"
              placeholder="****************"
            />
            {toggleEye}
          </div>
        </div>
        <div className="new-confirm">
          <label>Confirm Password</label>
          <div className="relative">
            <input
              type={passwordInputType}
              name="confirmPassword"
              placeholder="****************"
            />
            {toggleEye}
          </div>
        </div>
      </div>
      <div className="checkbox-layer">
        <input type="checkbox" className="checkbox" />
        <p>
          By creating an account, you agree
          <Link href="">Terms & Conditions</Link>
          and
          <Link href="">Privacy Policy</Link>
        </p>
      </div>
      <button className="signup-login">Sign up</button>
    </form>
  );
}
