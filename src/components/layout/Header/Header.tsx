// React
import React from "react";

// Components
import { Avatar as MuiAvatar, IconButton as MuiIconButton } from "@mui/material";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

// i18n
import { useTranslation } from "react-i18next";

// Styles
import StyledHeader from "./Header.style";

// Footer
export default function Header(): JSX.Element {
  const { t } = useTranslation("app");

  const handleLogout = () => {
    console.log("Logout");
  };

  function stringAvatar(name: string, surname: string) {
    return {
      children: `${name[0]}${surname[0]}`
    };
  }

  // TODO: Get Account details to show user
  return (
    <StyledHeader>
      <div className="logo">
        <img src="/logo.svg" alt="Customer Logo" />
        <span>Project Name</span>
      </div>
      <div className="user">
        <MuiAvatar className="avatar" {...stringAvatar("Name", "Surname")} />
        <span className="username">Name Surname</span>
        <MuiIconButton aria-label={t("action.logout")} onClick={handleLogout} size="small">
          <LogoutRoundedIcon />
        </MuiIconButton>
      </div>
    </StyledHeader>
  );
}
