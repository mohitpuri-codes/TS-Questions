const fruits=["apple","banana","mango"] as const
type AllFruits = typeof fruits[number] // type of AllFruits should be  "apple" | "banana" | "mango"