export interface Stat {
  title: string,
  value: number,
  image: string,
  trend?: "up" | "down" | "stable",
  percentage?: string
}