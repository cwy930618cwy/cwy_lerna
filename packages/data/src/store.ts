const listeners = [] as Function[]

export function onStore (callback: Function) {
  listeners.push(callback)
}

export async function setStore (store: any) {
  listeners.forEach(f => f(store))
}
