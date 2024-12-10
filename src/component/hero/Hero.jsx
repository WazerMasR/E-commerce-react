import { useTheme } from "@emotion/react";
import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Link, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";

const mySlider = [
  {
    text: "MEN",
    link: "src/imges/banner-15.jpg",
    discount: "30%",
  },
  {
    text: "WOMEN",
    link: "src/imges/banner-25.jpg",
    discount: "40%",
  },
];

const Hero = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        mt: 3,
        pt: 3,
        gap: 2,
        mx: 5,
      }}
    >
        <Swiper
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {mySlider.map((item) => {
            return (
              <SwiperSlide key={item.link} className="parent-slider">
                <img src={item.link} alt="" />
                <Box
                  sx={{
                    [theme.breakpoints.up("sm")]: {
                      position: "absolute",
                      left: "10%",
                      textAlign: "left",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#222",
                    }}
                    variant="h6"
                  >
                    LIFESTYLEE COLLECTION
                  </Typography>

                  <Typography
                    sx={{
                      color: "#222",
                      fontWeight: 400,
                      my: 1,
                    }}
                    variant="h4"
                  >
                    {item.text}
                  </Typography>
                  <Stack
                    sx={{
                      justifyContent: { xs: "center", sm: "left" },
                    }}
                    direction={"row"}
                    alignItems={"center"}
                  >
                    <Typography variant="h5" color={"#333"} mr={1}>
                      SALE UP TO
                    </Typography>
                    <Typography variant="h5" color={"#D23F57"}>
                      {item.discount} OFF
                    </Typography>
                  </Stack>
                  <Typography
                    sx={{
                      color: "#000",
                      fontWeight: 300,
                      my: 1,
                    }}
                    variant="body2"
                  >
                    Get Free Shipping on orders over $99.00
                  </Typography>
                  <Button
                    sx={{
                      [theme.breakpoints.down("sm")]: {
                        fontSize: 12,
                        borderRadius: "8px",
                      },
                      px: 5,
                      py: 1,
                      mt: 2,
                      mb: 4,
                      bgcolor: "#222",
                      boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                      color: "#fff",
                      borderRadius: "1px",
                      "&:hover": {
                        bgcolor: "#151515",
                        boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                      },
                    }}
                    variant="contained"
                  >
                    shop now
                  </Button>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
      <Box sx={{ display: { xs: "none", md: "block" }, minWidth: "26.6%" }}>
        <Box sx={{ position: "relative" }}>
          <img width={"100%"} src="src/imges/banner-17.jpg" alt="" />
          <Stack
            sx={{
              position: "absolute",
              transform: "translateY(-50%)",
              top: "50%",
              left: "31px",
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "#2B3445",
                fontSize: "13px",
              }}
            >
              NEW ARRIVALS
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "#2B3445",
                lineHeight: "16px",
                mt: 1,
              }}
            >
              SUMMER
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "#2B3445",
              }}
            >
              SALE 20% OFF
            </Typography>

            <Link
              sx={{
                fontWeight: 500,
                fontSize: 14,
                color: "#2B3445",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "0.2s",
                mt: 1.5,

                "&:hover": {
                  color: "#D23F57",
                },
              }}
              href="#"
              underline="none"
            >
              Shop Now
              <ArrowForward sx={{ fontSize: "13px" }} />
            </Link>
          </Stack>
        </Box>

        <Box sx={{ position: "relative" }}>
          <img width={"100%"} src="src/imges/banner-16.jpg" alt="" />

          <Stack
            sx={{
              position: "absolute",
              transform: "translateY(-50%)",
              top: "50%",
              left: "31px",
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "#2B3445",
                fontSize: "13px",
              }}
            >
              GAMING 4K
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "#2B3445",
                lineHeight: "16px",
                mt: 1,
              }}
            >
              DESKTOPS &
              <Box sx={{ mb: 1 }} />
              LAPTOPS
            </Typography>

            <Link
              sx={{
                fontWeight: 500,
                fontSize: 14,
                color: "#2B3445",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "0.2s",
                mt: 1.5,

                "&:hover": {
                  color: "#D23F57",
                },
              }}
              href="#"
              underline="none"
            >
              Shop Now
              <ArrowForward sx={{ fontSize: "13px" }} />
            </Link>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
