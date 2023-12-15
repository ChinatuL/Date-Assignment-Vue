import { ref } from "vue";

export const useDate = () => {
    let date = ref(new Date());

    const getDay = () => {
        const day = date.value.getDate();
        return day;
    };

    const getMonth = () => {
        const month = date.value.getMonth();
        return month;
    };

    const addDay = (numberOfDays) => {
        return date.value.setDate(date.value.getDate() + Number(numberOfDays));
    };

    const addMonth = (numberOfMonths) => {
        return date.value.setMonth(
            date.value.getMonth() + Number(numberOfMonths)
        );
    };

    return { date, getDay, getMonth, addDay, addMonth };
};
