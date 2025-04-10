import AuthForm from "../../AuthForm";

export default function SignInPage() {
  return (
    <div className="authStyles  bg-primary max-lg:mb-10 max-lg:py-10 lg:py-50    max-lg:rounded-4xl max-lg:mx-3">
      <AuthForm type="sign-in" />
    </div>
  );
}
