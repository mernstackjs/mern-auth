import useRegister from "../../hooks/useAuth";

export default function Register({ setIsLogin }) {
  const register = useRegister();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    register.mutate({ name, email, password });
    console.log("------------------");
  };

  return (
    <div className="border  w-96 p-5 rounded-md">
      <h1 className="text-xl">Register Form</h1>

      <form onSubmit={handleSubmit}>
        <input
          className="border p-2 w-full my-2 rounded-md"
          name="name"
          placeholder="Enter Your Name"
        />
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
        <button
          type="submit"
          className="bg-blue-700 text-white p-2 rounded-md cursor-pointer"
        >
          Register
        </button>
      </form>
      <div className="flex mt-4 gap-3">
        <h1>Already Have an account ? </h1>
        <button
          className=" underline italic cursor-pointer text-red-400"
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
      </div>
    </div>
  );
}
