import TranslateIcon from "@mui/icons-material/Translate";
import { Box, Button, Menu, MenuItem, Stack, Typography } from "@mui/material";
import { format } from "date-fns";
import { t } from "i18next";
import { useMemo, useState } from "react";
import TutorialFooter from "../TutorialFooter";
// import { t } from "i18next";
// import { useTranslation } from "react-i18next";
// import "./i18n";

const StartApp = (): JSX.Element => {
  //   const { t, i18n } = useTranslation();

  //   const changeLanguage = (lng: string) => {
  //     i18n.changeLanguage(lng);
  //   };
  const todaysDate = new Date().toString();
  const [userDate, setUserDate] = useState<string>("");

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const [userLang, setUserLang] = useState<string>("en");
  const [clickCount, setClickCount] = useState<number>(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };
  const handleMenuClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event: any) => {
    const newLang = event.target.id;
    // changeLanguage(newLang);
    setUserLang(newLang);

    //reset the menu and click count
    setAnchorEl(null);
    setClickCount(0);
  };

  useMemo(() => {
    setUserDate(format(todaysDate, "MMM/dd/yyyy"));
    // changeLanguage(userLang);
  }, [userLang]);

  return (
    <Box
      sx={{
        padding: { xs: 0, lg: 8 },
        width: { xs: "100%", lg: 900 },
        maxWidth: 1280,
        margin: { xs: 0, lg: "0 auto" },
      }}
    >
      <Box>
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body1">{userDate}</Typography>
          <Button onClick={handleMenuClick} variant="contained">
            <TranslateIcon />
            {t("language")}
          </Button>
          <Menu open={open} anchorEl={anchorEl}>
            <MenuItem onClick={handleMenuItemClick} id="ar">
              عربي
            </MenuItem>
            <MenuItem onClick={handleMenuItemClick} id="en">
              English
            </MenuItem>
            <MenuItem onClick={handleMenuItemClick} id="es">
              Español
            </MenuItem>
            <MenuItem onClick={handleMenuItemClick} id="ja">
              日本語
            </MenuItem>
          </Menu>
        </Stack>
      </Box>
      <Box>
        <Typography variant="h1" sx={{ marginTop: 10 }}>
          {t("greeting")}
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          sx={{
            marginBottom: 2,
          }}
        >
          {t("greeting_message")}
        </Typography>

        <Button
          variant="outlined"
          onClick={handleClick}
          sx={{
            marginTop: 2,
          }}
        >
          {t("button_cta")}
        </Button>
        <Typography
          variant="caption"
          gutterBottom
          sx={{
            display: "block",
            marginTop: "8px",
            marginBotom: 3,
          }}
        >
          {t("button_count_messages.click_message", { count: clickCount })}
        </Typography>
      </Box>

      <TutorialFooter />
    </Box>
  );
};

export default StartApp;
