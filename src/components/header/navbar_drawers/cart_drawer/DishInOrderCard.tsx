import { Card, Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import {
  ColumnContainer,
  RowContainer,
} from "../../../shared/helper_components/MyContainers";
import {
  cardDishExtrasStyle,
  cardDishNameStyle,
  cardDishQuantityStyle,
  cardStyle,
} from "./styles";

export const DishInOrderCard = (props: {
  img: String;
  quantity: number;
  name: string;
  changes: [];
  side: [];
  price: number;
}) => {
  return (
    <Card sx={cardStyle}>
      <CardMedia
        width={"100px"}
        component="img"
        image={require(`../../../../assets/dishes-imgs/${props.img}`)}
        alt="dish-img"
        sx={{
          minWidth: "100px",
          maxWidth: "100px",
          objectFit: "cover",
          height: "100px",
          borderRadius: "5px",
        }}
      />
      <ColumnContainer style={{ padding: "10px", width:"100%", justifyContent:"space-between", overflowY:"scroll"  }}>
        <RowContainer>
          <Typography
            sx={cardDishQuantityStyle}
          >{`${props.quantity}x`}</Typography>
          <Typography sx={cardDishNameStyle}>{props.name}</Typography>
        </RowContainer>
        <Typography sx={cardDishExtrasStyle}>{props.side}</Typography>
        <ColumnContainer>
          <Typography sx={cardDishExtrasStyle}>
            {props.changes.map((el) => `${el} | `)}
          </Typography>
        </ColumnContainer>
        <RowContainer style={{ width: "100%", flexDirection: "row-reverse" }}>
          {props.price}
          <span>&#8362;</span>
        </RowContainer>
      </ColumnContainer>
    </Card>
  );
};
