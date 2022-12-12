import {randInt, sleep} from "@/composables/rand";
import {defineEventHandler} from "h3";
import {Post} from "@/types/post";

export default defineEventHandler(async ()=>{
  return [ ...Array(5).keys() ].map(x=> ({
    id: randInt(0)(100),
    name: `Mike ${randInt(0)(5)}`,
    age: randInt(0)(60)
  })) as Post[]
})
