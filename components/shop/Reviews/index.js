import { Review } from "./Review";

export const Reviews = ({ data }) => {
    return data.map(review => <Review {...review}/>);
}