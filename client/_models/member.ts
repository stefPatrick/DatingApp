import { Photo } from "./photo"

export interface Member {
    id: number
    username: string
    age: number
    photoUrl: string
    knownAs: string
    created: Date
    lastActive: Date
    gender: string
    introduction: string
    city: string
    country: string
    lookingFor:string
    interests:string
    photos: Photo[]
  }
  
  
  