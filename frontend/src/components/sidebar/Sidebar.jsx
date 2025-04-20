import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <aside
      className="
        w-full        /* full width on mobile */
        sm:w-72       /* 18rem wide on tablet+ */
        h-screen      /* full viewport height */
        flex flex-col
        bg-white bg-opacity-10 backdrop-blur-lg
        border-r border-white border-opacity-20
      "
    >
      {/* Search at top */}
      <div className="p-4">
        <SearchInput />
      </div>

      {/* Divider */}
      <hr className="border-white border-opacity-20" />

      {/* Scrollable conversation list */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        <Conversations />
      </div>

      {/* Logout at bottom */}
      <div className="p-4">
        <LogoutButton />
      </div>
    </aside>
  );
};

export default Sidebar;
