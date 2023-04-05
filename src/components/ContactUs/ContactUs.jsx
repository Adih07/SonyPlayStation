import { Box } from "@mui/system";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

const ContactUs = () => {
  return (
    <Box textAlign={"center"}>
      <Box>
        <h2>Свяжитесь с нами</h2>

        <p>
          Здесь находятся контакты для наших покупателей и партнеров. Пишите нам
          в любое время. Наши менеджеры постараются ответить на все ваши вопросы
          в течение 24 часов.
        </p>
      </Box>
      <Box>
        <Box>
          <h3>Наши контакты</h3>
          <Box>
            <p>+996 777 013-062</p>
          </Box>
          <Box>
            <p>Время работы поддержки: Ежедневно, круглосуточно</p>
          </Box>

          <a href="https://www.instagram.com/playstation/">
            <InstagramIcon id="InstagramIcon" />
          </a>
          <a href="https://www.facebook.com/playstation/">
            <FacebookIcon id="FacebookIcon" />
          </a>
          <a href="https://www.youtube.com/channel/UCuxCfwN3SbOX2LR2sG-MoLw">
            <YouTubeIcon id="YouTubeIcon" />
          </a>
          <a href="https://twitter.com/PlayStationRU">
            <TwitterIcon id="TwitterIcon" />
          </a>
        </Box>
        <hr color="red" />
      </Box>
    </Box>
  );
};

export default ContactUs;
