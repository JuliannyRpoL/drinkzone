import Home from "../pages/home";
import KnockOut from "../pages/knockOut";
import Hipodromo from "../pages/hipodromo";
import Games from "../pages/games";

const routes = [
    {
      path: "/",
      exact: true,
      page: Home,
    },
    {
      path: "/games/knock-out",
      exact: true,
      page: KnockOut,
    },
    {
      path: "/games/hipodromo",
      exact: true,
      page: Hipodromo,
    },
    {
      path: "*",
      page: Home,
    },
];

export default routes;
