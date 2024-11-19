import { Stack, Button, Typography, Link } from "@mui/material";
import { t } from "i18next";
import DownloadIcon from '@mui/icons-material/Download';

const TutorialFooter = () => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      justifyContent={{ xs: "space-between", md: "space-evenly" }}
      sx={{
        borderTop: "1px solid #000",
        textAlign: "left",
        maxWidth: { sm: "500px", lg: "900px" },
        margin: { md: "32px auto 0" },
      }}
    >
      <Button
        sx={{ marginTop: 2 }}
        color={"primary"}
        startIcon={<DownloadIcon />}
      >
        <Link
          href="./Translation-Tokens_of_Clarity.pdf"
          target="_blank"
          title={t("slides_link")}
        >
          <Typography variant="body1">{t("slides_link")}</Typography>
        </Link>
      </Button>
      <Button variant="text" sx={{ marginTop: 2 }}>
        <Link
          href="https://stacy-davis.medium.com/translation-tokens-of-clarity-45823baac081"
          target="_blank"
          title={t("tutorial_link")}
        >
          <Typography variant="body1">{t("tutorial_link")}</Typography>
        </Link>
      </Button>
      <Button variant="text" sx={{ marginTop: 2 }}>
        <Link
          href="https://github.com/hurrendor/l8n-seattlejs"
          target="_blank"
          title={t("code_link")}
        >
          <Typography variant="body1">{t("code_link")}</Typography>
        </Link>
      </Button>
    </Stack>
  );
};

export default TutorialFooter;
