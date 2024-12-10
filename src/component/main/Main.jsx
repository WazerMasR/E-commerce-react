import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Main = () => {
  const handleAlignment = (event, newValue) => {
    setFilter(newValue);
  };

  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [filter, setFilter] = useState(""); // لتخزين الفئة المطلوبة
  const [mydataa, setMyData] = useState([]);

  const [activeButton, setActiveButton] = useState(""); // تتبع الزر النشط

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId); // تحديث الزر النشط
  };

  const [clickedEye, setClickedEye] = useState({});

  // جلب المنتجات المفلترة
  useEffect(() => {
    fetch(
      `http://localhost:3100/data/${filter ? `?entry.category=${filter}` : ""}`
    )
      .then((res) => res.json())
      .then((data) => setMyData(data));
  }, [filter]); // يتم التحديث عند تغيير الفلتر
  return (
    <Container sx={{ py: 9 }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        gap={3}
      >
        <Box>
          <Typography variant="h6">Selected Products</Typography>
          <Typography variant="body1">
            All our new arrivals in a exclusive brand selection
          </Typography>
        </Box>

        <ToggleButtonGroup
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          sx={{
            ".Mui-selected": {
              border: "2px solid #1f2937 !important",
              borderRadius: "8px !important",
              color: "#E9EDF8 !important",
              backgroundColor: "#1f2937 !important",
            },
          }}
        >
          {[
            {
              title: "ALL Product",
              category: "",
            },
            {
              title: "Men Category",
              category: "men",
            },
            {
              title: "Women Category",
              category: "women",
            },
          ].map((item) => {
            return (
              <ToggleButton
                className={activeButton === item.category ? "Mui-selected" : ""}
                onClick={() => handleButtonClick(item.category)}
                key={item.category}
                sx={{
                  mx: "6px !important",
                  color: theme.palette.text.primary,
                }}
                id="myButton"
                value={item.category}
              >
                {item.title}
              </ToggleButton>
            );
          })}
        </ToggleButtonGroup>
      </Stack>

      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-evenly"}
      >
        <AnimatePresence>
          {mydataa.map((item) => {
            return (
              <Card
              component={motion.section}
              layout
              initial={{transform: "scale(0)"}}
              animate={{transform: "scale(1)"}}
              transition={{duration: 1.6, type: "spring", stiffness: 60}}
              
                key={item.id}
                sx={{
                  position: "relative",
                  maxWidth: 333,
                  mt: 6,
                  ":hover .MuiCardMedia-root": {
                    scale: "1.1",
                    transition: "0.3s",
                  },
                  ":hover .MuiBox-root": {
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 0,
                  },
                }}
              >
                <CardMedia
                  sx={{
                    height: 277,
                  }}
                  // @ts-ignore
                  image={`${item.entry.productImage[0].url}`}
                  title="green iguana"
                />
                <CardContent>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    mt={3}
                  >
                    <Typography gutterBottom variant="h6" component="div">
                      {item.entry.productTitle}
                    </Typography>
                    <Typography variant="subtitle1" component="p">
                      {item.entry.productPrice} $
                    </Typography>
                  </Stack>
                  <Typography variant="body2" color="text.secondary">
                    {item.entry.productDescription}
                  </Typography>
                </CardContent>

                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Button
                    sx={{
                      textTransform: "capitalize",
                    }}
                    size="large"
                  >
                    <AddShoppingCartIcon sx={{ mr: 1 }} fontSize="small" />
                    add to cart
                  </Button>

                  <Rating
                    name="read-only"
                    value={item.entry.productRating}
                    readOnly
                    precision={0.1}
                  />
                </CardActions>

                <Box sx={{ display: "none" }} className="eyeIcon">
                  <IconButton
                    onClick={() => {
                      handleClickOpen();
                      setClickedEye(item);
                    }}
                  >
                    <VisibilityIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Card>
            );
          })}
        </AnimatePresence>
      </Stack>

      <Dialog
        sx={{
          ".MuiPaper-root": {
            minWidth: { 
              xs: "100%", 
              md: 800 },
            color: "#000",
          },
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: 0,
            right: 10,
            "&:hover": { 
              rotate: "180deg", 
              transition: "0.3s", 
              color: "red" },
          }}
        >
          <Close />
        </IconButton>
        <ProductDetails clickedEye={clickedEye} />
      </Dialog>
    </Container>
  );
};

export default Main;
