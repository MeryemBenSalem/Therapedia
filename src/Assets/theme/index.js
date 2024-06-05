// @mui material components
import { createTheme } from "@mui/material/styles";

// Material Kit 2 React base styles
import colors from "./base/colors";
import breakpoints from "./base/breakpoints";
import typography from "./base/typography";
import boxShadows from "./base/boxShadows";
import borders from "./base/borders";
import globals from "./base/globals";

// Material Kit 2 React helper functions
import boxShadow from "./functions/boxShadow";
import hexToRgb from "./functions/hexToRgb";
import linearGradient from "./functions/linearGradient";
import pxToRem from "./functions/pxToRem";
import rgba from "./functions/rgba";

// Material Kit 2 React components base styles for @mui material components
import list from "./components/list";
import listItem from "./components/list/listItem";
import listItemText from "./components/list/listItemText";
import card from "./components/card";
import cardMedia from "./components/card/cardMedia";
import cardContent from "./components/card/cardContent";
import button from "./components/button";
import iconButton from "./components/iconButton";
import divider from "./components/divider";
import linearProgress from "./components/linearProgress";
import slider from "./components/slider";
import avatar from "./components/avatar";
import appBar from "./components/appBar";
import flatpickr from "./components/flatpickr";
import container from "./components/container";
import popover from "./components/popover";
import buttonBase from "./components/buttonBase";
import icon from "./components/icon";
import svgIcon from "./components/svgIcon";
import link from "./components/link";

// Removed stepper components

export default createTheme({
  breakpoints: { ...breakpoints },
  palette: { ...colors },
  typography: { ...typography },
  boxShadows: { ...boxShadows },
  borders: { ...borders },
  functions: {
    boxShadow,
    hexToRgb,
    linearGradient,
    pxToRem,
    rgba,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...globals,
        ...flatpickr,
        ...container,
      },
    },
    MuiList: { ...list },
    MuiListItem: { ...listItem },
    MuiListItemText: { ...listItemText },
    MuiCard: { ...card },
    MuiCardMedia: { ...cardMedia },
    MuiCardContent: { ...cardContent },
    MuiButton: { ...button },
    MuiIconButton: { ...iconButton },
    MuiDivider: { ...divider },
    MuiLinearProgress: { ...linearProgress },
    MuiSlider: { ...slider },
    MuiAvatar: { ...avatar },
    MuiAppBar: { ...appBar },
    MuiPopover: { ...popover },
    MuiButtonBase: { ...buttonBase },
    MuiIcon: { ...icon },
    MuiSvgIcon: { ...svgIcon },
    MuiLink: { ...link },
  },
});
