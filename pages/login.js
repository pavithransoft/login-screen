import LoginSVG from "@/components/LoginSVG";
import LoginForm from "@/components/LoginForm";
import LoginLink from "@/components/LoginLink";
import Link from "next/link";

export default function Login() {
  return (
    <div className="screen-split">
      <div className="screen-left">
        <LoginSVG />
      </div>
      <div className="screen-right">
        <h1>Sign in</h1>
        <p>Enter your account details</p>
        <LoginForm />
        <LoginLink />
        <div className="login-link">
          <p className="mt-1">Don't have an account?</p>
          <Link href="/register">Register</Link>
        </div>
      </div>
    </div>
  );
}
