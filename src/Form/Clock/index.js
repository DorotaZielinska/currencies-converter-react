import "./style.css"
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
        <p className="clock">
            Dzisiaj jest 
            {" "} 
           {formatDate(date)}
        </p>
    )
};