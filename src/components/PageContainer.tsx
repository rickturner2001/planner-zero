import { ReactNode } from "react";

const PageContainer = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <main className="w-full bg-base-200 p-8">
      <section>
        <p className="text-2xl font-extrabold">{title}</p>
        {children}
      </section>
    </main>
  );
};

export default PageContainer;
