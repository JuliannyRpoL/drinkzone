import Home from "../pages/home";
import KnockOut from "../pages/knockOut";
import Games from "../pages/games";

const routes = [
    {
      path: "/",
      exact: true,
      page: Home,
    },
    {
      path: "/games",
      exact: true,
      page: Games,
    },
    {
      path: "/games/knock-out",
      exact: true,
      page: KnockOut,
    },
    {
      path: "*",
      page: Home,
    },
];

export default routes;
