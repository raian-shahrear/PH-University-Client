import { Layout, Menu, MenuProps } from "antd";
import { CSSProperties } from "react";
import { adminRouteArray } from "../../routes/admin.routes";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { facultyRouteArray } from "../../routes/faculty.routes";
import { studentRouteArray } from "../../routes/student.route";

const { Sider } = Layout;

const sidebarLogoStyle: CSSProperties = {
  color: "#fff",
  height: "64px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const userRoles = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

const Sidebar = () => {
  const role = "admin";
  let items: MenuProps["items"];

  switch (role) {
    case userRoles.ADMIN:
      items = sidebarItemsGenerator(adminRouteArray, userRoles.ADMIN);
      break;
    case userRoles.FACULTY:
      items = sidebarItemsGenerator(facultyRouteArray, userRoles.FACULTY);
      break;
    case userRoles.STUDENT:
      items = sidebarItemsGenerator(studentRouteArray, userRoles.STUDENT);
      break;
    default:
      break;
  }
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div style={sidebarLogoStyle}>
        <h1>PH Uni</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={items}
      />
    </Sider>
  );
};

export default Sidebar;
