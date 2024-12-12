import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export const getMonth = (month:number) => {
  const Months:string[] = [
    "January",
    "February",
    "March",
    "Arpil",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  if(month >= 0 && month <= 12){
    return Months[month];
  };

  return "Invalid Month"


}