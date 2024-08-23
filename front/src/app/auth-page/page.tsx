import SignInForm from "@/components/SignIn";
import SignUpForm from "@/components/SignUp";

function AuthPage() {
    return (
        <div className="flex flex-col md:flex-row min-h-screen md:items-center md:justify-evenly bg-gray-100 p-4">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md mb-6 md:mb-0 w-full md:w-1/3">
                <h2 className="text-lg md:text-xl font-semibold mb-4 text-center text-gray-700">Don't have an account yet?</h2>
                <SignUpForm />
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md w-full md:w-1/3">
                <h2 className="text-lg md:text-xl font-semibold mb-4 text-center text-gray-700">Sign In</h2>
                <SignInForm />
            </div> 
        </div>
    );
}

export default AuthPage;
