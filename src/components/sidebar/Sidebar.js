import Links from "./Links";
import "./Sidebar.css";
import SomeInfo from "./SomeInfo";

function Sidebar() {
  return (
    <div className="sidebar">
      <SomeInfo />
      <Links />
    </div>
  );
}

export default Sidebar;
