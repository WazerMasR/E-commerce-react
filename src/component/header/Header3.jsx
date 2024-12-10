import {
  Accordion,
  AccordionSummary,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";

import MenuICon from "@mui/icons-material/Menu";
import {
  Close,
  ElectricBikeOutlined,
  ExpandMore,
  KeyboardArrowRightOutlined,
  LaptopChromebookOutlined,
  MenuBookOutlined,
  SportsEsportsOutlined,
  Window,
} from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import Links from "./Links";

export const Header3 = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Box
      sx={{
        mx: 3,
        mt: 5,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          width: 230,
          bgcolor: theme.palette.myColor.main,
          color: "inherit",
        }}
      >
        <Window />
        <Typography
          sx={{
            p: 0,
            textTransform: "capitalize",
            ml: 1,
            mr: 9,
          }}
        >
          categories
        </Typography>
        <KeyboardArrowRightOutlined />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          ".MuiPaper-root": { width: 230, bgcolor: theme.palette.myColor.main },
        }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ElectricBikeOutlined />
          </ListItemIcon>
          <ListItemText> Bikes</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <LaptopChromebookOutlined />
          </ListItemIcon>
          <ListItemText> Electronics</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <MenuBookOutlined />
          </ListItemIcon>
          <ListItemText> Books</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <SportsEsportsOutlined />
          </ListItemIcon>
          <ListItemText> Games</ListItemText>
        </MenuItem>
      </Menu>

      {useMediaQuery("(min-width:1200px)") && (
        <Stack gap={4} direction={"row"} alignItems={"center"}>
          <Links title={"Home"} />
          <Links title={"Mega Menu"} />
          <Links title={"Full Screen Menu"} />
          <Links title={"Pages"} />
          <Links title={"User Account"} />
          <Links title={"Vendor Account"} />
        </Stack>
      )}

      {/* Media Queries */}
      {useMediaQuery("(max-width:1200px)") && (
        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuICon />
        </IconButton>
      )}

      <Drawer
        anchor={"right"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{
          ".MuiPaper-root.css-k1yagv-MuiPaper-root-MuiDrawer-paper": {
            height: "100%",
          },
        }}
      >
        <Box
          sx={{
            width: { xs: 250, sm: 400, md: 500 },
            mx: "auto",
            mt: 6,
            position: "relative",
            pt: 10,
          }}
        >
          <IconButton
            onClick={toggleDrawer("top", false)}
            sx={{
              position: "absolute",
              top: 0,
              right: 10,
              "&:hover": { rotate: "180deg", transition: "0.3s", color: "red" },
            }}
          >
            <Close />
          </IconButton>

          {[
            { mainlink: "Home", subLink: ["Link1", "Link2", "Link3"] },
            { mainlink: "Mega Menu", subLink: ["Link1", "Link2", "Link3"] },
            {
              mainlink: "Full Screen Menu",
              subLink: ["Link1", "Link2", "Link3"],
            },
            { mainlink: "Pages", subLink: ["Link1", "Link2", "Link3"] },
            { mainlink: "User Account", subLink: ["Link1", "Link2", "Link3"] },
            {
              mainlink: "Vendor Account",
              subLink: ["Link1", "Link2", "Link3"],
            },
          ].map((item) => {
            return (
              <Accordion
                key={item.mainlink}
                elevation={0}
                sx={{ bgcolor: "initial" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  {item.mainlink}
                </AccordionSummary>

                <List sx={{ py: 0, my: 0 }}>
                  {item.subLink.map((item2) => {
                    return (
                      <ListItem key={item2} sx={{ py: 0, my: 0 }}>
                        <ListItemButton>
                          <ListItemText primary={item2} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Accordion>
            );
          })}
        </Box>
      </Drawer>
    </Box>
  );
};
