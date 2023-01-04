import ButtonBase from "@mui/material/ButtonBase";

export const StyledButton = (args: {
  buttonText: String;
  buttonType: String;
  onClick: () => void;
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
    alignSelf: "left",
    "@media(min-width: 601px)": {
      alignSelf: "center",
    },
  };

  const darkMode = {
    background: "#000000",
    color: "#FFFFFF",
  };
  const ligthMode = {
    background: "transparent",
    color: "#000000",
  };
  const buttonStyle = args.buttonType === "dark" ? darkMode : ligthMode;

  return (
    <ButtonBase sx={{ ...baseStyle, ...buttonStyle }} onClick={args.onClick}>
      {args.buttonText}
    </ButtonBase>
  );
};
