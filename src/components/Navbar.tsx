import { useSession } from "next-auth/react";
import {
  ArchiveBoxIcon,
  Cog6ToothIcon,
  PlusIcon,
  PresentationChartLineIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

const Navbar = () => {
  const session = useSession();
  const router = useRouter();

  const NavButton = ({
    svg,
    text,
    selected,
    href,
  }: {
    svg: JSX.Element;
    text: string;
    selected: boolean;
    href?: string;
  }) => {
    return (
      <a
        href={href || "#"}
        className={`flex gap-2 btn w-full justify-start items-center ${
          !selected
            ? "bg-transparent stroke-slate-500 text-slate-500"
            : "bg-teal-500 text-white"
        } hover:bg-teal-500 border-none hover:text-white hover:stroke-transparent `}
      >
        {svg}
        <p>{text}</p>
      </a>
    );
  };

  return (
    <nav className="bg-white w-80 h-screen p-5">
      <div className="pt-10 pb-20">
        <p className="text-4xl font-extrabold">Planner-Zero</p>
      </div>
      <div className="flex flex-col gap-10 items-start justify-start w-full">
        <NavButton
          svg={<PresentationChartLineIcon className="w-5 h-5" />}
          text="Dashboard"
          selected
        />
        <NavButton
          svg={<StarIcon className="w-5 h-5" />}
          text="Favorite"
          selected={false}
        />
        <NavButton
          svg={<ArchiveBoxIcon className="w-5 h-5" />}
          text="My Recipes"
          selected={false}
        />
        <NavButton
          svg={<ArchiveBoxIcon className="w-5 h-5" />}
          text="My Ingredients"
          selected={false}
          href={"/ingredients"}
        />
        <NavButton
          svg={<PlusIcon className="w-5 h-5" />}
          text="New Ingredient"
          selected={false}
          href="/new-ingredient"
        />
        <NavButton
          svg={<PlusIcon className="w-5 h-5" />}
          text="New Recipe"
          selected={false}
          href={"/new-recipe"}
        />
        <NavButton
          svg={<Cog6ToothIcon className="w-5 h-5" />}
          text="Settings"
          selected={false}
        />
        <div className="divider"></div>
        {session.data ? (
          <button
            className="btn bg-indigo-500 border-none hover:bg-indigo-600 btn-block"
            onClick={() => {
              if (typeof window === "object") {
                router.push("/api/auth/signout");
              }
            }}
          >
            Sign out
          </button>
        ) : (
          <button
            className="btn bg-indigo-500 border-none hover:bg-indigo-600 btn-block"
            onClick={() => {
              if (typeof window === "object") {
                router.push("/auth/signin");
              }
            }}
          >
            Log in
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
