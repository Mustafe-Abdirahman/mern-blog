import React from "react";
import { Button, Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

const Header = () => {
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Mustafa's
        </span>
        Blog
      </Link>
      <form>
        <div className="relative hidden lg:inline">
          <TextInput
            type="text"
            placeholder="Search..."
            className="pl-4 pr-12"
          />
          <AiOutlineSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </form>
      <Button
        className="w-12 h-10 flex items-center justify-center lg:hidden"
        color="gray"
        pill
      >
        <AiOutlineSearch className="text-gray-500 rounded-lg" />
      </Button>
      <div className="flex space-x-2 ">
        <Button
          color="gray"
          pill
          className="w-10 h-10 rounded-lg hidden sm:inline"
        >
          <FaMoon />
        </Button>
        <Link to="/signin">
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded">
            Sign In
          </button>
        </Link>
        <Navbar.Collapse>
          <Navbar.Link as={"div"}>
            <Link to="/signin">Sign In</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
