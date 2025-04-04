
import AuthForm from "../../AuthForm";

export default function SignInPage() {
 

  return (
    <div className="authStyles  bg-primary   max-lg:mb-5  max-lg:pb-2  max-lg:rounded-4xl max-lg:mx-3">
      <AuthForm type="sign-in"  />
    </div>
  );
}
