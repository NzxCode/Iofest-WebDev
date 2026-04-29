import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Beranda', path: '/' },
    { label: 'Daftar Makanan', path: '/daftar-makanan' },
    { label: 'Tips Sehat', path: '/tips-sehat' },
    { label: 'Tentang', path: '/tentang' },
  ]

  const navClass = ({ isActive }) =>
    isActive
      ? 'text-emerald-700 font-semibold'
      : 'text-slate-600 hover:text-emerald-700'

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-3 font-bold text-emerald-700">
          <div className="h-10 w-10 overflow-hidden rounded-xl bg-emerald-50 p-1 shadow-sm">
            <img
              src={logo}
              alt="Logo Kalories"
              className="h-full w-full object-contain"
            />
          </div>
        <span className="text-lg">Kalories</span>
      </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={navClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/kalkulator"
          className="hidden rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 md:inline-block"
        >
          Mulai Hitung
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-slate-200 p-2 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-4 text-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={navClass}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}

            <Link
              to="/kalkulator"
              onClick={() => setOpen(false)}
              className="rounded-full bg-emerald-600 px-4 py-2 text-center font-semibold text-white"
            >
              Mulai Hitung
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar