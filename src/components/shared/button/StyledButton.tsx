import ButtonBase from "@mui/material/ButtonBase";

export const StyledButton = (args: {
  buttonText: String;
  buttonType: String;
  onClick: () => void;
  alignSelf?: String;
  disabled?: boolean;
}) => {
  const baseStyle = {
    border: "1px solid #000000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    width: "206px",
    height: "48px",
    textTransform: "uppercase",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "20px",
    textAlign: "center",
    letterSpacing: "2.7px",
    alignSelf: `${args.alignSelf ? args.alignSelf : "auto"}`,
    "@media(min-width: 601px)": {
      alignSelf: "center",
    },
  };

  const darkMode = {
    background: "#000000",
    color: "#FFFFFF",
    cursor: "pointer"
  };
  const ligthMode = {
    background: "transparent",
    color: "#000000",
    cursor: "pointer"
  };
  const disabledMode = {
    background: "#979797",
    color: "#000000",
    cursor: "not-allowed"
  };
  const buttonStyle =
    args.buttonType === "dark"
      ? darkMode
      : args.buttonType === "light"
      ? ligthMode
      : disabledMode;

  return (
    <ButtonBase
      sx={{ ...baseStyle, ...buttonStyle }}
      onClick={args.onClick}
      disabled={args.buttonType === 'disabled'}
    >
      {args.buttonText}
    </ButtonBase>
  );
};
