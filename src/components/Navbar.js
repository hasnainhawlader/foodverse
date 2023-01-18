import { NavLink } from "react-router-dom";

const Navbar = ({
  searchHandeler,
  searchQuery,
  setSearchQuery,
  inputField,
}) => {
  const navActive = ({ isActive }) => {
    return {
      color: isActive ? "#f43f5e" : null,
    };
  };
  return (
    <div
      className="navbar flex justify-between items-center container mx-auto py-8 flex-col lg:flex-row gap-5 lg:gap-0 
    "
    >
      <h2 className="logo text-2xl font-bold lowercase italic">
        food<span className="text-rose-500">verse</span>
      </h2>
      <form className="search-bar" onSubmit={searchHandeler}>
        <input
          ref={inputField}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="search"
          placeholder="search something"
          required
          className="bg-white/75 p-3 px-8 lg:w-96 rounded-full outline-none shadow-lg shadow-rose-100 focus:shadow-rose-200 duration-300"
        />
      </form>
      <ul className="manu flex gap-5">
        <li>
          <NavLink
            style={navActive}
            end
            to="/"
            className="text-gray-400 hover:text-gray-600"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={navActive}
            to="/favorites"
            className="text-gray-400 hover:text-gray-600"
          >
            Favorites{""}
            <span className="favorites-count text-sky-400 font-bold">(10)</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
