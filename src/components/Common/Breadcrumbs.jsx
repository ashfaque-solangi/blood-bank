import React from "react";
import { Breadcrumbs as MUIBreadcrumbs, Link as MUILink } from "@mui/material";
import { Link } from "react-router-dom";

function Breadcrumbs({ options = [] }) {
  return (
    <MUIBreadcrumbs aria-label="breadcrumb">
      <MUILink
        component={Link}
        underline="none"
        color="inherit"
        to="/dashboard"
      >
        Dashboard
      </MUILink>
      {options.map((option, index) => (
        <MUILink
          key={index}
          component={Link}
          underline="none"
          color={options.length - 1 === index ? "text.primary" : "inherit"}
          to={option.href}
        >
          {option.title}
        </MUILink>
      ))}
    </MUIBreadcrumbs>
  );
}

export default Breadcrumbs;
