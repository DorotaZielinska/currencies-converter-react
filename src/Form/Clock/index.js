import { Wrapper } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const formatDate = (date) =>  date.toLocaleString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
});

export const Clock = () => {
  const date = useCurrentDate();

    return (
        <Wrapper>
            Dzisiaj jest 
            {" "} 
           {formatDate(date)}
        </Wrapper>
    )
};