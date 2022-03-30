import { Link } from "gatsby";

export const MenuItem = ({ label, path, toggleMenu }) => {
  const handleCloseMenu = () => {
    toggleMenu();
  };

  return (
    <Link
      to={path}
      onClick={handleCloseMenu}
      className="font-black uppercase cursor-pointer text-[6vh] md:text-[10vw] lg:text-[7vh] xl:text-[10vh] font-brother text-stroke-white text-stroke-2 text-fill-transparent"
    >
      {label}
    </Link>
  );
};
