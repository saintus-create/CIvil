import { Logo } from "@/components/Logo";
import { Models } from "appwrite";
import { Button } from "@/components/Button";
import { Avatar } from "@/components/Avatar";
import { signout } from "@/tools/account";
import Link from "next/link";
import { redirect } from "next/navigation";
import clsx from "clsx";

type NavbarLoggedInProps = {
  user: Models.User<Models.Preferences>;
  clearUser: () => void;
};

export const NavbarLoggedIn = ({ user, clearUser }: NavbarLoggedInProps) => {
  const handleSignout = async () => {
    await signout();
    clearUser();
    redirect("/");
  };

  return (
    <nav
      className={clsx(
        "flex items-center justify-between px-4 py-2",
        "border-b border-black bg-black"
      )}
      aria-label="Logged-in navigation"
    >
      <Link href="/hacker" aria-label="Dashboard">
        <Logo />
      </Link>
      <div className="flex items-center gap-4">
        <Button
          buttonSize="small"
          buttonType="secondary"
          onClick={handleSignout}
        >
          Sign out
        </Button>
        <Avatar name={user.name} />
      </div>
    </nav>
  );
};
