export type Upgrade = {
  id: string
  name: string
  basePrice: number
  incomePerTick: number
}

export type User = {
  displayName: string
  email: string
  password: string
  avatarImage: File
}
