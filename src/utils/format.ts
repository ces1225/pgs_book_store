import dayjs from "dayjs";

export const formatNumber = (number : number) : string => {
    return number.toLocaleString();
}

// 포맷을 바꿀 수도 있으니 확장성을 위함.
export const formatDate = (date : string , format? : string) => {
    return dayjs(date).format(format ? format : "YYYY년 MM월 DD일");
}