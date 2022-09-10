import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import LoginRequired from "../components/LoginRequired";

const Account = () => {
  const { data: session } = useSession();

  const router = useRouter();

  console.log(router);

  if (!session) {
    return <LoginRequired />;
  }
  return (
    <div>
      <h1>This is an account!</h1>
    </div>
  );
};

export default Account;
