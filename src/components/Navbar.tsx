"use client";

import { Logo } from "@/components/Logo";
import Link from "next/link";
import { useUser } from "@/components/UserProvider";
import { signout } from "@/tools/account";
import clsx from "clsx";

type NavbarProps = {
  selectedRoute?: string;
};

export const Navbar = ({ selectedRoute }: NavbarProps) => {
  const { user, loading, clearUser } = useUser();

  const handleSignout = async (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    await signout();
    clearUser();
  };

  return (
    <nav
      className={clsx(
        "sticky top-7 z-10 flex w-[90%] flex-row items-center justify-between",
        "rounded-2xl border border-black bg-black/80 p-4 backdrop-blur-xl",
        "md:w-[51rem]"
      )}
      aria-label="Main navigation"
    >
      <Link href="/" aria-label="Home">
        <Logo />
      </Link>
      <ul className="flex gap-4 text-white sm:gap-10">
        <li>
          <Link
            href="/rules"
            className={clsx(
              "transition-colors duration-200 hover:text-neutral-300",
              selectedRoute === "rules" ? "font-semibold" : "font-normal"
            )}
          >
            Rules
          </Link>
        </li>

        {!loading && (
          <li>
            <Link
              href={user ? "/" : "/sign-in"}
              onClick={user ? handleSignout : undefined}
              className={clsx(
                "transition-colors duration-200 hover:text-neutral-300",
                selectedRoute === "sign-in" ? "font-semibold" : "font-normal"
              )}
            >
              {user ? "Sign out" : "Sign in"}
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
