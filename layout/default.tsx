import { ReactNode } from "react";

type LayoutProps = { children?: ReactNode; type?: String };

export default function Layout({ children, type }: LayoutProps) {
  return (
    <>
      <main>
        <div>
          navbar ::: {type}
          {children}
          footer
        </div>
      </main>
    </>
  );
}
