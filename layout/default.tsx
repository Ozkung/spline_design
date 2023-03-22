import { ReactNode } from "react";

type LayoutProps = { children?: ReactNode; type?: String };

export default function Layout({ children, type }: LayoutProps) {
  return (
    <>
      add head
      <main>
        <div>
          navbar
          {children} ::: {type}
          footer
        </div>
      </main>
    </>
  );
}
