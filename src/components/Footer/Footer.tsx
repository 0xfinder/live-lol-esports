import React from "react";
import "./styles/footerStyle.css";

import { ReactComponent as DiscordSVG } from "../../assets/images/discord.svg";
import { ReactComponent as GitHubLogoSVG } from "../../assets/images/github.svg";
import { ReactComponent as TwitterSVG } from "../../assets/images/twitter.svg";

export function Footer() {
  return (
    <nav className="footer-container">
      <a target="_blank" rel="noreferrer" href="https://github.com/0xfinder/live-lol-esports">
        <GitHubLogoSVG className="footer-img" />
      </a>
      <a target="_blank" rel="noreferrer" href="https://x.com/0xfinder">
        <TwitterSVG className="footer-img" />
      </a>
      <a target="_blank" rel="noreferrer" href="https://discord.com/users/107390189353103360">
        <DiscordSVG className="footer-img" />
      </a>
    </nav>
  );
}
