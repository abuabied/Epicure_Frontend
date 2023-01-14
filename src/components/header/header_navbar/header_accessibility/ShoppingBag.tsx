import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { ReactComponent as BagLogo } from "./../../../../assets/icons/bag.svg";

export const ShoppingBag = (handler: { openBag: () => void }) => {
  const itemsCount = useSelector((state: any) => state.order.counter);
  

  const cartLogoBoxStyle = {
    fontSize: "10px",
    height: "content",
    width: "content",
    maxWidth: "20px",
    minWidth: "14px",
    position: "absolute",
    color: "white",
    backgroundColor: "black",
    borderRadius: "50%",
    textAlign: "center",
  };

  return (
    <Box paddingTop="5px" onClick={handler.openBag}>
      <Box sx={cartLogoBoxStyle}>{itemsCount}</Box>
      <BagLogo cursor={"pointer"} height="85%" />
    </Box>
  );
};
