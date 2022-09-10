import { OAuthProvider } from "next-auth/providers";
import { getProviders, signIn } from "next-auth/react";
import { AppContext } from "next/app";
import googleLogo from "../../media/google-logo-9808.png";
import discordLogo from "../../media/discord-logo.png";

export default function SignIn({ providers }: { providers: OAuthProvider }) {
  return (
    <div className="w-screen h-[95vh] flex justify-center items-center">
      <div className="flex flex-col h-1/3 w-1/3    justify-center items-center gap-10">
        <p className="text-4xl font-extrabold">Autorization Requried</p>
        <div className="flex gap-3">
          {Object.values(providers).map((provider) => {
            return (
              <div key={provider.name}>
                {provider.name === "Google" ? (
                  <button
                    className="btn btn-accent flex gap-2 shadow-md"
                    onClick={() => signIn(provider.id)}
                  >
                    <p>Sign in with Google</p>
                    <img className="w-5" src={googleLogo.src} />
                  </button>
                ) : (
                  <button
                    className="btn btn-ghost border border-black flex gap-2 shadow-md"
                    onClick={() => signIn(provider.id)}
                  >
                    <p>Sign in with Discord</p>
                    <img className="w-5" src={discordLogo.src} />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: AppContext) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
