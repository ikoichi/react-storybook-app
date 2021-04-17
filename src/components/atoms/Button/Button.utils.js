import theme from "../../theme"

export const buttonVariants = {
  isPrimary: {
    rest: {
      color: theme.colors.primary800,
      backgroundColor: theme.colors.primary500,
      border: "1px solid " + theme.colors.primary500,
    },
    hover: {
      color: theme.colors.primary800,
      backgroundColor: theme.colors.primary400,
      border: "1px solid " + theme.colors.primary400,
    },
    active: {
      color: theme.colors.primary900,
      backgroundColor: theme.colors.primary600,
      border: "1px solid " + theme.colors.primary600,
    },
  },
  isSecondary: {
    rest: {
      color: theme.colors.primary700,
      backgroundColor: "white",
      border: "1px solid " + theme.colors.primary600,
    },
    hover: {
      color: theme.colors.primary800,
      backgroundColor: "white",
      border: "1px solid " + theme.colors.primary700,
    },
    active: {
      color: theme.colors.primary800,
      backgroundColor: theme.colors.primary100,
      border: "1px solid " + theme.colors.primary800,
    },
  },
}

export const BUTTON_STATE = {
  rest: "rest",
  hover: "hover",
  active: "active",
}

export const getButtonStyleProp = (state) => (stylePropName) => ({
  isPrimary,
}) =>
  isPrimary
    ? buttonVariants.isPrimary[state][stylePropName]
    : buttonVariants.isSecondary[state][stylePropName]
