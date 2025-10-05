import React from "react";
import { Box, Button } from "@mui/material";
import Page1 from "../components/DummyPage/Page1";
import Page2 from "../components/DummyPage/Page2";
import { useUser } from "../Context/user";

export default function Dashboard() {
  const [page, setPage] = React.useState(null);
  const { user, logoutApi } = useUser();

  const handleClick = (pageName) => {
    setPage(pageName);
  };

  const handleLogOut = () => {
    logoutApi();
  };
  // Map strings to components
  const pages = {
    page1: <Page1 />,
    page2: <Page2 />,
  };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box>{user?.name || "No user Name Found"}</Box>
      </Box>
      <Box sx={{ mb: 2, display: "flex", justifyContent: "space-around" }}>
        <Button onClick={() => handleClick("page1")} variant="contained">
          Page1
        </Button>
        {user?.role == "admin" && (
          <Button
            onClick={() => handleClick("page2")}
            variant="contained"
            sx={{ ml: 1 }}
          >
            Page2
          </Button>
        )}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {page && pages[page]}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <Button
          onClick={() => handleLogOut()}
          variant="contained"
          sx={{ backgroundColor: "red" }}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
}
