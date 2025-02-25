import StarRatings from "react-star-ratings";

interface Props {
    rating: number;
}

const Stars = ({ rating }: Props ) => {
  return (
    <>
        <StarRatings rating={rating} starRatedColor="#f97316" name="rating" starDimension="24px" starSpacing="2px"></StarRatings>
        <span className="sr-only">Rating {rating} out of 5 stars!</span>
    </>
  )
}

export default Stars


