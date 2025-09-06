import { useLogin } from "../../hooks/useAuth";

export default function Login({ setIsLogin }) {
  const login = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    login.mutate({ email, password });
    console.log("------------------");
  };
  return (
    <div className="border  w-96 p-5 rounded-md">
      <h1 className="text-xl">Login Form</h1>

      <form onSubmit={handleSubmit}>
        <input
          className="border p-2 w-full my-2 rounded-md"
          name="email"
          placeholder="Enter Your Email"
        />
        <input
          className="border p-2 w-full my-2 rounded-md"
          name="password"
          placeholder="Enter Your Password"
        />
        <button className="bg-blue-700 text-white p-2 rounded-md cursor-pointer">
          Login
        </button>
      </form>
      <div className="flex mt-4 gap-3">
        <h1>I'dont Have an account ? </h1>
        <button
          className=" underline italic cursor-pointer text-red-400"
          onClick={() => setIsLogin(false)}
        >
          Register
        </button>
      </div>
    </div>
  );
}
