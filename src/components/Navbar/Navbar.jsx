import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { useCart } from "../../contexts/CartContextProvider";
import { getCountProductsInCart } from "../../helpers/functions";
import sonyPl from "./img/ps2LogoGlavnyi.png";
import { useAuth } from "../../contexts/AuthContextProvider";
import { ADMIN } from "../../helpers/consts";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

const pages = [
  { name: "SonyPlaystation", link: "/", id: 1 },
  { name: "Информация", link: "/company", id: 2 },
  { name: "Аксессуары", link: "/products", id: 3 },
  { name: "Связаться с нами", link: "/contacts", id: 4 },
  { name: "", link: "/*", id: 5 },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const {
    handleLogout,
    user: { email },
  } = useAuth();

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [count, setCount] = React.useState(0);
  const { addProductToCart } = useCart();

  React.useEffect(() => {
    setCount(getCountProductsInCart());
  }, [addProductToCart]);

  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "white",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ borderRight: "1px solid red" }}>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <MenuIcon
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              style={{ backgroundColor: "blue" }}
            />
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <Link
                  style={{ textDecoration: "none" }}
                  key={index}
                  to={page.link}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography id="page_adapt_link" textAlign="center">
                      {page.name}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
              src={sonyPl}
              alt="Home"
              width={100}
            />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              borderLeft: "1px solid red",
              borderRight: "1px solid red",
            }}
          >
            {pages.map((page, index) => (
              <Link
                style={{ textDecoration: "none" }}
                key={index}
                to={page.link}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: "block" }}
                >
                  <Typography id="pages_link">{page.name}</Typography>
                </Button>
              </Link>
            ))}
          </Box>
          {/* <Typography id="pages_link">
            <GoogleIcon />
          </Typography> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={sonyPl} alt="error" width={100} />
          </Typography>
          {email === ADMIN ? (
            <Button
              onClick={() => navigate("/admin")}
              sx={{ my: 2, display: "block" }}
            >
              <Typography id="pages_link">
                <AdminPanelSettingsIcon />{" "}
              </Typography>
            </Button>
          ) : null}
          {email ? (
            <Button onClick={handleLogout} sx={{ my: 2, display: "block" }}>
              <Typography id="pages_link">
                <LogoutIcon />{" "}
              </Typography>
            </Button>
          ) : (
            <Button
              onClick={() => navigate("/auth")}
              sx={{ my: 2, display: "block" }}
            >
              <PersonIcon />{" "}
            </Button>
          )}
          <IconButton
            onClick={() => navigate("/cart")}
            style={{ color: "blue" }}
          >
            <Badge badgeContent={count}>
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
