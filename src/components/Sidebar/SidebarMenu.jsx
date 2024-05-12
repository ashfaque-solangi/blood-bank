import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { BiSolidDashboard } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import { BiSolidDonateBlood } from "react-icons/bi";
import { MdBloodtype } from "react-icons/md";
import { Link } from "react-router-dom";

const ICON_SIZE = 22;

const menuLinks = [
  {
    id: "dashboard",
    title: "Dashboard",
    href: "/dashboard",
    icon: <BiSolidDashboard fontSize={ICON_SIZE} />,
  },
  {
    id: "donors",
    title: "Donors",
    href: "/donors",
    icon: <BiSolidDonateBlood fontSize={ICON_SIZE} />,
  },
  {
    id: "patients",
    title: "Patients",
    href: "/patients",
    icon: <IoIosPeople fontSize={ICON_SIZE} />,
  },
  {
    id: "bloods",
    title: "Bloods",
    href: "/blood-groups",
    icon: <MdBloodtype fontSize={ICON_SIZE} />,
  },
  {
    id: "cross-match",
    title: "Cross Match",
    href: "/cross-match",
    icon: <MdBloodtype fontSize={ICON_SIZE} />,
  },
  {
    id: "blood-exchange",
    title: "Blood Exchange",
    href: "/blood-exchange",
    icon: <MdBloodtype fontSize={ICON_SIZE} />,
  },
];

export default function NestedList() {
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {menuLinks.map((menu) => {
        return (
          <ListItemButton key={menu.title} component={Link} to={menu.href}>
            <ListItemIcon sx={{ minWidth: 35 }}>{menu.icon}</ListItemIcon>
            <ListItemText primary={menu.title} />
          </ListItemButton>
        );
      })}
    </List>
  );
}
