import SignInForm from "@/components/SignIn";
import SignUpForm from "@/components/SignUp";




function AuthPage() {
    return (
        <div>
           <div>
            <h2> Sign Up</h2>
            <SignUpForm />
        </div>
        <div>
            <h2> Sign In</h2>
            <SignInForm/>
        </div> 
        </div>
        
    );
}
export default AuthPage