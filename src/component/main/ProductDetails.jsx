/* eslint-disable react/prop-types */
import { AddShoppingCartOutlined} from "@mui/icons-material";
import {
  Box,
  Button,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";

const ProductDetails = ({ clickedEye }) => {
  const [changeIndex, setChangeIndex] = useState(0);



  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        gap: 2.5,
      }}
    >
      <Box
        sx={{display: "flex"}}
        >
        <img
          width={400}
          src={clickedEye.entry.productImage[changeIndex].url}
          alt=""
        />
      </Box>
      <Box
        sx={{
          py: 2,
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        <Typography variant="h5">{clickedEye.entry.productTitle}</Typography>
        <Typography
          my={0.4}
          variant="body1"
          fontSize={"22px"}
          color={"crimson"}
        >
          {clickedEye.entry.productPrice} $
        </Typography>
        <Typography variant="body1">
          {clickedEye.entry.productDescription}
        </Typography>

        <Stack
          sx={{ justifyContent: { xs: "center", sm: "left" }}}
          direction={"row"}
          alignItems={"center"}
          gap={1}
          my={2}
        >
          <ToggleButtonGroup
            value={changeIndex}
            exclusive
            sx={{
              ".Mui-selected": {
                border: "1px solid royalblue !important",
                borderRadius: "5px !important",
                opacity: "1",
                backgroundColor: "initial",
              },
            }}
          >
            {clickedEye.entry.productImage.map((item, index) => {
              return (
                <ToggleButton
                  key={item.id}
                  value={index}
                  sx={{
                    width: "110px",
                    height: "110px",
                    mx: 1,
                    p:0,
                    opacity:"0.5"
                  }}
                >
                  <img
                    onClick={() => {
                      setChangeIndex(index);
                    }}
                    style={{ borderRadius: 3 }}
                    width={"100%"}
                    height={"100%"}
                    src={item.url}
                    alt=""
                  />
                </ToggleButton>
              );
            })}
          </ToggleButtonGroup>
        </Stack>

        <Button
          sx={{
            mb: { xs: 1, sm: 0 },
            textTransform: "capitalize",
          }}
          variant="contained"
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          buy now
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
