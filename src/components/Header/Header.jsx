import { Link } from "react-router-dom";
import { Button, Container, Logo } from "../index";
import { useSelector } from "react-redux";
import LogoutBtn from "./LogoutBtn";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const authStatus = useSelector((state) => state.auth.status);

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "All Blogs",
      slug: "/all-blogs",
      active: true,
    },
    {
      name: "Sign in",
      slug: "/sign-in",
      active: !authStatus,
    },
    {
      name: "Add Blog",
      slug: "/add-blog",
      active: authStatus,
    },
    {
      name: "My Blogs",
      slug: "/my-blogs",
      active: authStatus
    }
  ];

  return (
    <div className="py-4 sticky top-0 z-10 backdrop-blur-sm">
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <Link to="/">
              <Logo />
            </Link>
          </div>

          {/* nav links */}
          <ul className="hidden sm:flex justify-between items-center gap-4">
            {navItems.map((navItem) =>
              navItem.active ? (
                <Link key={navItem.name} to={navItem.slug}>
                  <Button
                    className={
                      navItem.name === "Sign in"
                        ? "px-4 py-2 rounded-sm bg-blue-200 text-blue-600"
                        : null
                    }
                  >
                    <li className="text-md">{navItem.name}</li>
                  </Button>
                </Link>
              ) : null
            )}
            {authStatus && <LogoutBtn />}
          </ul>

          <button
            onClick={() => (open ? setOpen(false) : setOpen(true))}
            aria-label="Menu"
            className="sm:hidden"
          >
            {/* Menu Icon SVG */}
            <svg
              width="21"
              height="15"
              viewBox="0 0 21 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="21" height="1.5" rx=".75" fill="#426287" />
              <rect
                x="8"
                y="6"
                width="13"
                height="1.5"
                rx=".75"
                fill="#426287"
              />
              <rect
                x="6"
                y="13"
                width="15"
                height="1.5"
                rx=".75"
                fill="#426287"
              />
            </svg>
          </button>

          {/* Mobile Menu */}
          <ul
            className={`${
              open ? "flex" : "hidden"
            } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-center gap-2 px-5 text-sm md:hidden`}
          >
            {navItems.map((navItem) =>
              navItem.active ? (
                <Link key={navItem.name} to={navItem.slug}>
                  <Button
                    className={
                      navItem.name === "Sign in"
                        ? "px-4 py-2 rounded-sm bg-blue-200 text-blue-600"
                        : null
                    }
                  >
                    <li className="text-md">{navItem.name}</li>
                  </Button>
                </Link>
              ) : null
            )}
            {authStatus && <LogoutBtn />}
          </ul>
        </div>
      </Container>
    </div>
  );
}
