import { Box, Button, Typography } from "@mui/material"

const Footer = () => {
  return (
    <Box
    sx={{
      bgcolor :"#2b3445",
      py: 1.3,
      BorderTopLeftRadius: 8,
      BorderTopRightRadius: 8,
    }}
    >
      <Typography 
      justifyContent={"center"}
      display={"flex"}
      alignItems={"center"}
      color="HighlightText"
      variant="h6" 
      sx={{fontSize: 18}}
      >
        Designed and developed by
        <Button
        sx={{
          mx: 0.5,
          fontSize: 18,
          textTransform: "capitalize",
          color: "#90caf9"
        }}
        variant="text"
        color="primary"
        >
          islam hassan
        </Button>
        ©2024
      </Typography>
    </Box>
  )
}

export default Footer
