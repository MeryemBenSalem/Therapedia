// @mui material components
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";

export default styled(Avatar)(({ theme, ownerState }) => {
  // Provide default values for functions, boxShadows, and typography.size to prevent destructuring errors
  const { palette, functions = {}, typography = {}, boxShadows = {} } = theme;
  const { shadow, bgColor, size } = ownerState;

  const { gradients = {}, transparent = {}, white = {} } = palette;
  const { pxToRem, linearGradient } = functions;
  const { size: fontSize = {}, fontWeightRegular } = typography;

  // backgroundImage value
  const backgroundValue =
    bgColor === "transparent"
      ? (transparent.main || "transparent")
      : (linearGradient && gradients[bgColor])
        ? linearGradient(gradients[bgColor].main, gradients[bgColor].state)
        : white.main || "white";

  // size value
  let sizeValue;

  switch (size) {
    case "xs":
      sizeValue = {
        width: pxToRem ? pxToRem(24) : 24,
        height: pxToRem ? pxToRem(24) : 24,
        fontSize: fontSize.xs || "0.75rem",
      };
      break;
    case "sm":
      sizeValue = {
        width: pxToRem ? pxToRem(36) : 36,
        height: pxToRem ? pxToRem(36) : 36,
        fontSize: fontSize.sm || "0.875rem",
      };
      break;
    case "lg":
      sizeValue = {
        width: pxToRem ? pxToRem(58) : 58,
        height: pxToRem ? pxToRem(58) : 58,
        fontSize: fontSize.sm || "0.875rem",
      };
      break;
    case "xl":
      sizeValue = {
        width: pxToRem ? pxToRem(74) : 74,
        height: pxToRem ? pxToRem(74) : 74,
        fontSize: fontSize.md || "1rem",
      };
      break;
    case "xxl":
      sizeValue = {
        width: pxToRem ? pxToRem(110) : 110,
        height: pxToRem ? pxToRem(110) : 110,
        fontSize: fontSize.md || "1rem",
      };
      break;
    default: {
      sizeValue = {
        width: pxToRem ? pxToRem(48) : 48,
        height: pxToRem ? pxToRem(48) : 48,
        fontSize: fontSize.md || "1rem",
      };
    }
  }

  return {
    background: backgroundValue,
    color: white.main || "#FFF",
    fontWeight: fontWeightRegular || 400,
    boxShadow: boxShadows[shadow] || "none",
    ...sizeValue,
  };
});
