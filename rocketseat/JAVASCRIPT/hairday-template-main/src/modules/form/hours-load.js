import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";

export function hoursLoad({ date }) {
  const opening = openingHours.map((hour) => {
    // Recupera somenta a hora.
    const [scheduleHour] = hour.split(":");

    // Adiciona a hora na data e verifica se está no passado.
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());

    return {
      hour,
      available: !isHourPast,
    };
  });

  console.log(opening);
}
