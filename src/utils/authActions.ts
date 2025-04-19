
export  const handleSignIn = (data: { email: string; password: string }) => {
    console.log("Sign In Data:", {
      email: data.email,
      password: data.password,
    });
    //sign logic
  };

 export const handleSignUp = (data: {
    fullName?: string;
    username: string;
    phoneNumber: string;
    email: string;
    password: string;
    industry: string;
    yearOfExperience: string;
    location: string;
    confirmPassword: string;
  }) => {
    console.log("Sign Up Data:", data);
    // Add your sign-up logic here (e.g., API call)
  };

