import { Login as LoginAPI } from 'api'
jest.mock('api')
import { Authentication } from 'data'
jest.mock('data')
import { required } from '../validators/vuelidate-wrappers'
jest.mock('../validators/vuelidate-wrappers')

import Login from '.'
import defer from 'defer-promise'
import { expectUsecase } from '../test-helpers/expect-validate';

describe('Login', () => {
  const expectLogin = expectUsecase(Login)
  // phone
  expectLogin
    .toValidate('phone')
    .using(required as any, 'required')
    .withParams('请输入手机号')
  // password
  expectLogin
    .toValidate('password')
    .using(required as any, 'required')
    .withParams('请输入密码')

  describe('execute', () => {
    const mockedLoginAPI = LoginAPI as any as jest.MockInstance<any>
    let deferred: DeferPromise.Deferred<any>
    let usecase: Login
    beforeAll(() => {
      mockedLoginAPI.mockImplementation(() => ({
        response: deferred.promise
      }))
    })
    beforeEach(() => {
      mockedLoginAPI.mockClear()
      usecase = new Login()
      deferred = defer()
      const originalResolve = deferred.resolve
      deferred.resolve = ({
        token = '',
        account = {}
      } = {}) => originalResolve({ token, account })
    })
    it('sends Login api', () => {
      usecase.phone = 'mock phone'
      usecase.password = 'mock password'
      usecase.execute()
      expect(LoginAPI).toBeCalledWith('mock phone', 'mock password')
    })
    it('resolves when LoginAPI.response resolves', async () => {
      const result = usecase.execute()
      let resolved = false
      setTimeout(() => {
        resolved = true
        deferred.resolve()
      })
      await result.then(() => {
        if (!resolved) throw 'usecase resolved before api.response resolves'
      })
    })
    it('saves token to the Authentication', async () => {
      deferred.resolve({ token: 'mock token' })
      await usecase.execute()
      expect(Authentication.saveToken).toBeCalledWith('mock token')
    })
    it('saves account data to the Authentication', async () => {
      deferred.resolve({ account: { id: 'mock account' } })
      await usecase.execute()
      expect(Authentication.saveAccount).toBeCalledWith({ id: 'mock account' })
    })
  })
})