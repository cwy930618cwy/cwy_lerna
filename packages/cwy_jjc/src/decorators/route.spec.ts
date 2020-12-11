describe('Login', () => {
  it('response', () => {
    expect(1)
  })
})

// import Route from './route'

// describe('@Route', () => {
//   beforeEach(() => {
//     (Route as any).clear()
//   })
//   it('add route to Route.routes', () => {
//     @Route({ path: 'mock path' })
//     class Comp {}
//     expect(Route.routes).toEqual([{
//       path: 'mock path',
//       component: Comp
//     }])
//   })
//   it('throws when route path is duplicated', () => {
//     @Route({ path: 'mock path' })
//     class Comp1 {}
//     expect(() => {
//       @Route({ path: 'mock path' })
//       class Comp2 {}
//     }).toThrow('路由定义重复 path: mock path')
//   })
//   describe('child routes', () => {
//     it('adds child route', () => {
//       @Route({ path: 'parent path' })
//       class Parent {}

//       @Route({ childOf: 'parent path', path: 'child path' })
//       class Child {}

//       expect(Route.routes).toEqual([{
//         path: 'parent path',
//         component: Parent,
//         children: [{
//           path: 'child path',
//           component: Child
//         }]
//       }])
//     })
//     it('does not override existing child route', () => {
//       @Route({ path: 'parent' }) class Parent {}
//       @Route({ childOf: 'parent', path: 'child 1' }) class Child1 {}
//       @Route({ childOf: 'parent', path: 'child 2' }) class Child2 {}

//       expect(Route.routes).toEqual([{
//         path: 'parent',
//         component: Parent,
//         children: [{
//           path: 'child 1',
//           component: Child1
//         }, {
//           path: 'child 2',
//           component: Child2
//         }]
//       }])
//     })
//     it('throw when path conflicts', () => {
//       @Route({ path: 'parent' }) class Parent {}
//       @Route({ childOf: 'parent', path: 'child' }) class Child1 {}

//       expect(() => {
//         @Route({ childOf: 'parent', path: 'child' }) class Child2 {}
//       }).toThrow('路由定义重复 path: child')
//     })
//     it('does not conflict with paths on other level', () => {
//       @Route({ path: 'parent' }) class Parent {}
//       @Route({ path: 'about' }) class TopAbout {}
//       expect(() => {
//         @Route({ childOf: 'parent', path: 'about' }) class NestedAbout {}
//       }).not.toThrow()
//     })
//     it('children can be registered before the parent does', () => {
//       @Route({ childOf: 'parent', path: 'child' }) class Child {}

//       @Route({ path: 'parent' }) class Parent {}
//       expect(Route.routes).toEqual([{
//         path: 'parent',
//         component: Parent,
//         children: [{
//           path: 'child',
//           component: Child
//         }]
//       }])
//     })
//     it('supports deep nesting', () => {
//       @Route({ path: 'grandparent' }) class GrandParent {}
//       @Route({ path: 'parent', childOf: 'grandparent' }) class Parent {}
//       @Route({ path: 'child', childOf: ['grandparent', 'parent'] }) class Child {}

//       expect(Route.routes).toEqual([{
//         path: 'grandparent',
//         component: GrandParent,
//         children: [{
//           path: 'parent',
//           component: Parent,
//           children: [{
//             path: 'child',
//             component: Child
//           }]
//         }]
//       }])
//     })
//   })
//   it('excludes disconnected routes', () => {
//     @Route({ childOf: 'parent', path: 'child' }) class Child {}
//     expect(Route.routes).toEqual([])
//   })
//   it('pretty formats disconnected routes', () => {
//     /* A --> D --> H --> M
//      * \            `--> N
//      *  `--> E -> [I] -> O
//      * B --> F --> J
//      * C -> [G] -> K
//      *        `--> L
//      */
//     const expected = 
// `A -> E -> [I] -> O
// C -> [G] -> K
// C -> [G] -> L`

//     const declareRoute = (path: string, ...childOf: string[]) => {
//       @Route({ path, childOf }) class Z {}
//     }
//     declareRoute('A')
//     declareRoute('B')
//     declareRoute('C')
//     declareRoute('D', 'A')
//     declareRoute('E', 'A')
//     declareRoute('F', 'B')
//     // G is omitted
//     declareRoute('H', 'A', 'D')
//     // I is omitted
//     declareRoute('J', 'B', 'F')
//     declareRoute('K', 'C', 'G')
//     declareRoute('L', 'C', 'G')
//     declareRoute('M', 'A', 'D', 'H')
//     declareRoute('N', 'A', 'D', 'H')
//     declareRoute('O', 'A', 'E', 'I')
//     expect(Route.disconnected).toEqual(expected)
//   })
// })