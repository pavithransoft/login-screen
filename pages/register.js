import RegisterSVG from "@/components/RegisterSVG";
import RegisterForm from "@/components/RegisterForm";
import LoginLink from "@/components/LoginLink";
import Link from "next/link";

export default function Register() {
  return (
    <div className="screen-split">
      <div className="screen-left">
        <RegisterSVG />
      </div>
      <div className="screen-right">
        <h1>Create Account</h1>
        <RegisterForm />
        <LoginLink />
        <div className="login-link">
          <p className="mt-1">Already have an account?</p>
          <Link href="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}
