import { Chip, ClickAwayListener, Dialog, Typography } from "@mui/material";
import { useState } from "react";
import SetWindowSize from "../../../../helpers/setWindowSize";
import { StyledButton } from "../../../shared/button/StyledButton";
import {
  ColumnContainer,
  StyledSeperatorWithText,
} from "../../../shared/helper_components/MyContainers";
import { ReactComponent as CloseIcon } from "./../../../../assets/icons/X.svg";
import { helpStyle } from "./TextStyles";
import { LoginView } from "./LoginView";
import { RegisterView } from "./RegisterView";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { DoubleEmptyLines } from "../../../shared/helper_components/EmptyLines";

export const ProfileDialog = (props: {
  open: boolean;
  handleClose: () => void;
}) => {
  const fullScreen = SetWindowSize() <= 501;
  const [loginView, setLoginView] = useState(true);

  const containerStyle = {
    justifyContent: "center",
    margin: "0 3rem",
    paddingBottom: "3rem",
  };

  const handleCloseDialog = () => {
    props.handleClose();
    setLoginView(true);
  };

  return (
    <Dialog open={props.open} fullScreen={fullScreen} maxWidth="xs">
      <ColumnContainer>
        <CloseIcon
          onClick={handleCloseDialog}
          cursor={"pointer"}
          display="block"
          style={{ margin: "1rem" }}
        />
      </ColumnContainer>
      <ClickAwayListener onClickAway={handleCloseDialog}>
        <ColumnContainer style={containerStyle}>
          {loginView ? (
            <ColumnContainer>
              <LoginView closeDialog={handleCloseDialog} />
              <Typography sx={helpStyle}>Forget password?</Typography>
              <StyledSeperatorWithText text={"or"} />
              <StyledButton
                alignSelf={"center"}
                buttonText={"sign up"}
                buttonType={"light"}
                onClick={() => {
                  setLoginView(false);
                }}
              />
            </ColumnContainer>
          ) : (
            <ColumnContainer>
              <RegisterView closeDialog={handleCloseDialog} />
              <DoubleEmptyLines />
              <ColumnContainer
                onClick={() => {
                  setLoginView(true);
                }}
              >
                <Chip
                  sx={{
                    width: "fit-content",
                    cursor: "pointer",
                    alignSelf: "center",
                  }}
                  label="Back to login"
                  icon={<ArrowBackIcon />}
                />
              </ColumnContainer>
            </ColumnContainer>
          )}
        </ColumnContainer>
      </ClickAwayListener>
    </Dialog>
  );
};
