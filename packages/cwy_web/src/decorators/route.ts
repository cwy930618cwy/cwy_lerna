import { RouteConfig } from 'vue-router';

type ExtendedRouteConfig = RouteConfig & { childOf?: string | string[] }

const routes = [] as RouteConfig[]

function findRoute (routes: RouteConfig[], path: string) {
  return routes.find(r => r.path === path)
}

function getOrCreate (routes: RouteConfig[], paths: string[]): RouteConfig {
  if (paths.length === 0) throw Error('paths cannot be empty')
  const [first, ...reset] = paths
  let root = findRoute(routes, first)
  if (root === undefined) {
    root = { path: paths[0] }
    routes.push(root)
  }
  if (reset.length === 0) return root
  return getOrCreate(root.children || (root.children = []), reset)
}

function Route(config: ExtendedRouteConfig) {
  let parents = config.childOf
  delete config.childOf
  return function (component: any) {
    if (parents === undefined) {
      parents = []
    } else if (typeof parents === 'string') {
      parents = [parents]
    }
    const node = getOrCreate(routes, [...parents, config.path])
    if ((node as any).component) throw Error('路由定义重复 path: ' + config.path)
    Object.assign(node, config, { component })
  }
}

function filter(routes: RouteConfig[]) {
  return routes.filter(r => !!(r as any).component).map(r => {
    r.children = filter(r.children || [])
    if (r.children!.length === 0) delete r.children
    return r
  })
}

Object.defineProperty(Route, 'routes', { 
  get () { return filter(routes) }
})

function trace(route: RouteConfig) {
  const node = Boolean((route as any).component) ? route.path : `[${route.path}]`
  if (!route.children || route.children.length === 0) return [[node]]
  const str: string[][] = (route.children || []).reduce((prev, r) => {
    const t = trace(r)
    t.forEach(tt => tt.unshift(node))
    return prev.concat(t)
  }, [] as string[][])
  return str
}

Object.defineProperty(Route, 'disconnected', {
  get () {
    return trace({ path: '', children: routes })
    .map(([, ...rest]) => rest)
    .filter(p => p.reduce((prev: any, curr: any) => {
      return prev || /\[.*\]/.test(curr)
    }, false))
    .map(p => p.join(' -> '))
    .join('\n')
  }
})

// Route.clear暂时只做测试用，所以没有在类型声明中加入
Object.defineProperty(Route, 'clear', { value: () => routes.length = 0 })

namespace Route {
  export declare const routes: RouteConfig[]
  export declare const disconnected: string
}

export default Route