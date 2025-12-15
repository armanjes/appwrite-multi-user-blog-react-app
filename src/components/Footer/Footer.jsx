import { Link } from "react-router-dom";
import { Container, Logo } from "../index";

export default function Footer() {
  return (
    <footer className="bg-white w-full border-t border-gray-200">
      <Container>
        <div className="max-w-7xl mx-auto py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <Link to="/">
                <Logo />
              </Link>
              <p className="text-sm text-gray-600  mt-1">
                Building the future, one step at a time.
              </p>
            </div>

            <nav className="flex flex-wrap justify-center gap-6">
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Services
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900  transition-colors duration-200"
              >
                Contact
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900  transition-colors duration-200"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Terms
              </a>
            </nav>
          </div>

          <div className="pt-8 border-t border-gray-200 dark:border-zinc-800 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2024 YourBrand. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
