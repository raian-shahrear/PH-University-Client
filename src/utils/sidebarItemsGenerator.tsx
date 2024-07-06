import { NavLink } from "react-router-dom";
import { TRouteArray, TSidebarItem } from "../types";

export const sidebarItemsGenerator = (
  sidebarItems: TRouteArray[],
  role: string
) => {
  const items = sidebarItems.reduce((acc: TSidebarItem[], item) => {
    if (item.name && item.path) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    }
    if (item.children) {
      const children = item.children.map((child) => {
        return {
          key: child.name,
          label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
        };
      });
      acc.push({
        key: item.name,
        label: item.name,
        children: children,
      });
    }
    return acc;
  }, []);

  return items;
};
