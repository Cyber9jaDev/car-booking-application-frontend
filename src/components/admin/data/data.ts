import smartphone from "../../../assets/images/smartphone.png";
import insurance from "../../../assets/images/insurance.png";
import choices from "../../../assets/images/choices.png";
import { Stat } from "@/interface/admin.interface";

export const stats: Stat[] = [
  { title: "Total Trip", value: 100, image: smartphone.src },
  { title: "Total Ticket Booking", value: 10, image: insurance.src },
  { title: "Total Booking Amount", value: 12, image: choices.src },
  { title: "Total Passenger", value: 0, image: choices.src },
];
