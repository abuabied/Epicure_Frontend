import { NoStyleContainer } from "../../helper_components/MyContainers";
import { ReactComponent as EmptyStar } from "./../../../../assets/icons/star_empty.svg";
import { ReactComponent as FilledStar } from "./../../../../assets/icons/star_filled.svg";
export const StarRating = (args: { rating: number }) => {
  let stars = [
    { filled: false, key: 1 },
    { filled: false, key: 2 },
    { filled: false, key: 3 },
    { filled: false, key: 4 },
    { filled: false, key: 5 },
  ];
  let i = 0;
  while (i < 5) {
    if (i < args.rating) stars[i].filled = true;
    i++;
  }
  return (
    <NoStyleContainer style={{ margin: 0, maxWidth: "fit-content" }}>
      {stars.map((star) =>
        star.filled ? (
          <FilledStar key={star.key} style={{ margin: "0 2px" }} />
        ) : (
          <EmptyStar key={star.key} style={{ margin: "0 2px" }} />
        )
      )}
    </NoStyleContainer>
  );
};
