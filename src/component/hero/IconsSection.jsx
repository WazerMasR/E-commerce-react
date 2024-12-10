// import { useTheme } from "@emotion/react";
import { useTheme } from "@emotion/react";
import {
  AccessAlarmOutlined,
  CreditScoreOutlined,
  ElectricBolt,
  WorkspacePremiumOutlined,
} from "@mui/icons-material";
import { Box, Divider, Stack, Typography, useMediaQuery } from "@mui/material";

const IconsSection = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        bgcolor: theme.palette.mode === "dark" ? "#000" : "#fff",
        mt: 3,
        mx:5,
      }}
    >
      <Stack
        sx={{ flexWrap: "wrap" }}
        divider={
          useMediaQuery("(min-width: 600px)") ? (
            <Divider orientation="vertical" flexItem />
          ) : null
        }
        direction={"row"}
        alignItems={"center"}
      >
        <MyBox
          icon={<ElectricBolt fontSize="large" />}
          title={"Fast Delivery"}
          subTitle={"Start from $10"}
        />
        <MyBox
          icon={<WorkspacePremiumOutlined fontSize="large" />}
          title={"Money Guarantee"}
          subTitle={"7 Days Back"}
        />
        <MyBox
          icon={<AccessAlarmOutlined fontSize="large" />}
          title={"365 Days"}
          subTitle={"For free return"}
        />
        <MyBox
          icon={<CreditScoreOutlined fontSize="large" />}
          title={"Payment"}
          subTitle={"Secure system"}
        />
      </Stack>
    </Box>
  );
};

export default IconsSection;

// eslint-disable-next-line react/prop-types
const MyBox = ({ icon, title, subTitle }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: 250,
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        gap: 3,
        justifyContent: useMediaQuery("(min-width: 600px)") ? "center" : "left",
        py: 1.6,
      }}
    >
      {icon}
      <Box>
        <Typography variant="body1">{title}</Typography>
        <Typography
          sx={{ fontWeight: 300, color: theme.palette.text.primary }}
          variant="body1"
        >
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
};
