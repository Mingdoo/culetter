import Link from "next/link";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Divider from "@mui/material/Divider";

function MenuListItem({ text, index, icon, href }) {
  return (
    <>
      <Link href={href}>
        <ListItem
          button
          key={index}
          sx={{
            "white-space": "nowrap",
          }}
        >
          <ListItemIcon sx={{ color: "white" }}>{icon}</ListItemIcon>
          <ListItemText sx={{ color: "white" }} primary={text} />
        </ListItem>
      </Link>
      <Divider></Divider>
    </>
  );
}

export default MenuListItem;
