/* eslint-disable react/prop-types */
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import LogoutIcon from "@mui/icons-material/Logout";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import GetAppIcon from "@mui/icons-material/GetApp";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SidebarDistributorLogout from "./SidebarLogout";
import SidebarDistributorCollapse from "./SidebarCollapse";
import SidebarDistributorItem from "./SidebarItem";

function SidebarDistributor({ handleDrawerToggle }) {
  const { t } = useTranslation();

  const [activeItem, setActiveItem] = useState(location.pathname);

  const user = useSelector((state) => state.auth.user);
  const handleItemClick = (itemId) => {
    localStorage.setItem("test", itemId);
    setActiveItem(itemId);
    handleDrawerToggle();
  };
  useEffect(() => {
    const pathname = location.pathname;
    setActiveItem(pathname);
  }, [location.pathname]);

  const menuItems = [
    {
      id: "/dashboard",
      translationKey: "menu_dashboard",
      name: "Dashboard",
      icon: <DashboardIcon />,
      subItems: null,
    },
    {
      id: "/subscriptions",
      translationKey: "menu_membership",
      name: "Subscriptions",
      icon: <MonetizationOnIcon />,
      subItems: [
        {
          id: "/subscriptions/get",
          translationKey: "menu_memberships_get",
          name: "Get",
          icon: <GetAppIcon />,
        },
        {
          id: "/subscriptions/cancel",
          translationKey: "menu_memberships_cancel",
          name: "Cancel",
          icon: <GetAppIcon />,
        },
      ],
    },
    {
      id: "/rockobits",
      translationKey: "menu_rockobits",
      name: "Rockobits",
      icon: <AttachMoneyIcon />,
      subItems: [
        {
          id: "/rockobits/buy",
          translationKey: "menu_buy",
          name: "Buy",
          icon: <ShoppingCartIcon />,
        },
        {
          id: "/rockobits/transfer",
          translationKey: "menu_transfer",
          name: "Transfer",
          icon: <ShoppingCartIcon />,
        },
      ],
    },
    {
      id: "/subcompanies",
      translationKey: "menu_subcompanies",
      name: "Subcompanies",
      icon: <AttachMoneyIcon />,
      subItems: [
        {
          id: "/subcompanies/create-subcompany",
          translationKey: "menu_create",
          name: "Create",
          icon: <ShoppingCartIcon />,
        },
        {
          id: "/subcompanies/list-subcompanies",
          translationKey: "menu_list",
          name: "List",
          icon: <ShoppingCartIcon />,
        },
      ],
    },
    {
      id: "/transactions",
      translationKey: "menu_transactions",
      name: "Transactions",
      icon: <DashboardIcon />,
      subItems: null,
    },
  ];

  return (
    <div className="bg-[#555CB3] overflow-y-auto h-full flex flex-col">
      <div className="flex flex-col mx-8 justify-center items-center space-x-2 my-4">
        <h2
          style={{ textShadow: "2px 2px 1px #B45946", color: "white" }}
          className="font-semibold text-white text-xl tracking-widest text-shadow-lg"
        >
          PSROCKOLA
        </h2>
        <h2
          style={{ textShadow: "2px 2px 1px #B45946", color: "white" }}
          className="font-semibold text-white text-xl tracking-widest text-shadow-lg"
        >
          {t("psrockola_distributor")}
        </h2>
      </div>
      <Divider />
      <List>
        {menuItems.map((item, index) => {
          // Renderizar el elemento normalmente si no se cumple la condición anterior
          console.log(item)
          return item.subItems ? (
            <SidebarDistributorCollapse
              item={item}
              key={index}
              handleDrawerToggle={handleDrawerToggle}
              handleItemClick={handleItemClick}
              activeItem={activeItem}
              t={t}
            />
          ) : (
            <SidebarDistributorItem
              item={item}
              key={index}
              handleDrawerToggle={handleDrawerToggle}
              handleItemClick={handleItemClick}
              activeItem={activeItem}
              t={t}
            />
          );
        })}
      </List>

      <div className="mt-auto mb-5">
        <SidebarDistributorLogout
          item={{
            id: "logout",
            translationKey: "view_logout",
            icon: <LogoutIcon />,
            subItems: null,
          }}
        />
      </div>
    </div>
  );
}

export default SidebarDistributor;
