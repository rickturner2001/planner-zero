import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { trpc } from "../utils/trpc";
import foodImage from "../media/food-hero.jpg";
import PageContainer from "../components/PageContainer";

const Home: NextPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  console.log("Session: " + session);

  return (
    <>
      <Head>
        <title>Diet Track</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer title={`Hello, ${session?.user?.name ?? "Guest"}`}>
        <div className="hero h-[80vh] mt-10 bg-gradient-to-r from-emerald-300 to-emerald-600 rounded ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={foodImage.src}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Planner-Zero</h1>
              <p className="py-6">
                Keep track of what you eat by planning every single meal. Create
                new recipies with customized ingredients in a simple way.
                <span className="font-bold"> Try it out right now!</span>
              </p>
              <div className="flex w-full gap-6 mt-10">
                <button
                  className="btn bg-indigo-600 hover:bg-indigo-600 border-none"
                  onClick={() => {
                    router.push("/new-ingredient");
                  }}
                >
                  New Ingredient
                </button>
                <button className="btn">New Recipe</button>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </>
  );
};

export default Home;
