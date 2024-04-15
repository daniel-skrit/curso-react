import { TurnedInNot } from "@mui/icons-material";
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useMemo } from "react";
import { setActiveNote } from "../../store/journal/journalSlice";
import { useDispatch } from "react-redux";

export const SideBarItem = ({ id, title, body, date, imageUrls = [] }) => {
  const newtitle = useMemo(() => {
    return title.length > 17 ? title.substring(0,17) + "..." : title;
  }, [title]);

  const dispatch = useDispatch();
  const onNoteClick = () => {
    dispatch(setActiveNote({id, title, body, date, imageUrls}))
  }

  return (
    <ListItem disablePadding onClick={onNoteClick}>
      <ListItemButton>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newtitle} />
          <ListItemText secondary={body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
