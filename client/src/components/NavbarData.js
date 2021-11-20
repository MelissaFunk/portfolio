import React from "react"
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io"


export const NavbarData = [
  {
    title: "Home",
    path: "/",
    icons: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "About",
    path: "/about-me",
    icons: <IoIcons.IoIosPaper />,
    cName: "nav-text"
  },
  {
    title: "Blogs",
    path: "/my-blogs",
    icons: <FaIcons.FaCartPlus />,
    cName: "nav-text"
  },
  {
    title: "Projects",
    path: "/my-projects",
    icons: <IoIcons.IoMdPeople />,
    cName: "nav-text"
  },
  {
    title: "Resume",
    path: "/my-resume",
    icons: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text"
  }
]