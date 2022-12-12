export const randInt = (min = 0) => (max) => Math.floor(Math.random() * (max - min + 1)) + min

export const sleep = async (ms) => await new Promise((res) => setTimeout(res, ms))
