import { useState } from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-primary/90 backdrop-blur-md text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">

        {/* BRAND */}
        <Link to="/" className="leading-tight group">
          <h1 className="font-bold text-accent text-lg tracking-wide group-hover:scale-105 transition">
            Aman Security Agency
          </h1>
          <p className="text-xs opacity-80">
            ISO 9001:2015 | PSARA Act 2005
          </p>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 font-medium">
          {["Home", "Services", "Gallery", "Contact"].map((item) => (
            <li key={item} className="relative group">
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="transition"
              >
                {item}
              </Link>

              {/* underline animation */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden relative w-8 h-8"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`absolute h-[2px] w-8 bg-white transition-all duration-300 ${
              open ? "rotate-45 top-4" : "top-2"
            }`}
          ></span>
          <span
            className={`absolute h-[2px] w-8 bg-white transition-all duration-300 ${
              open ? "opacity-0" : "top-4"
            }`}
          ></span>
          <span
            className={`absolute h-[2px] w-8 bg-white transition-all duration-300 ${
              open ? "-rotate-45 top-4" : "top-6"
            }`}
          ></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="bg-black/95 text-center py-6 space-y-4 font-medium">
          {["Home", "Services", "Gallery", "Contact"].map((item) => (
            <li key={item} onClick={() => setOpen(false)}>
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="block py-2 hover:text-accent transition"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
