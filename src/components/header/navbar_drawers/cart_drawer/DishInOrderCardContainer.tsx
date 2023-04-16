import { useSelector } from "react-redux";
import { ColumnContainer } from "../../../shared/helper_components/MyContainers";
import { DishInOrderCard } from "./DishInOrderCard";

export const DishInOrderCardContainer = () => {
  const dishesInOrder = useSelector((state: any) => state.order.dishes);

  return (
    <ColumnContainer
      style={{
        maxHeight: "200px",
        overflowY: "scroll",
        padding: "10px",
        paddingBottom: 0,
      }}
    >
      {dishesInOrder.map((dish: any, idx: number) => (
        <DishInOrderCard
          key={`${dish.name}${idx}`}
          img={dish.dishImg}
          quantity={dish.quantity}
          name={dish.dishName}
          changes={dish.dishChanges}
          side={dish.dishSides}
          price={dish.finalPrice}
        />
      ))}
    </ColumnContainer>
  );
};
