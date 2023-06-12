import PasswordToggle from "@/components/PasswordToggle";
import Link from "next/link";

export default function LoginForm() {
  const [passwordInputType, toggleEye] = PasswordToggle();
  return (
    <form>
      <label>Email</label>
      <input
        type="email"
        name="email"
        placeholder="example@domain.com"
        autoFocus
      />
      <div className="relative">
        <label>Password</label>
        <input
          type={passwordInputType}
          name="password"
          placeholder="****************"
        />
        {toggleEye}
      </div>
      <div className="rememberme-layer">
        <div className="rememberme-checkbox">
          <input type="checkbox" className="checkbox" />
          <p>Remember me</p>
        </div>
        <Link href="">Forget Password</Link>
      </div>
      <button className="signup-login">Login</button>
    </form>
  );
}
