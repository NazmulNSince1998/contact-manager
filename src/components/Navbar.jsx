import { FcContacts } from "react-icons/fc";

const Navbar = () => {
  return (
    <nav className="w-full h-[10vh] bg-slate-900 text-white px-3 lg:px-16 flex items-center fixed">
      <div className="flex items-center gap-4 text-xl uppercase font-medium">
        <FcContacts />
        <p>
          contact <span>manager </span>
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
