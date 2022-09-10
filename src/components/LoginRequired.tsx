import { useRouter } from "next/router";

const LoginRequired = () => {
  const router = useRouter();

  console.log("RENDERED");

  return (
    <div className="h-screen w-screen bg-blue-600">
      <div className="flex w-full h-full justify-center items-center">
        <div className="w-1/2 h-1/2 flex flex-col bg-white shadow-md">
          <p className="font-bold text-2xl">Login Required</p>
          <button
            className="btn btn-success"
            onClick={() => {
              router.push("/api/auth/signin");
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginRequired;
