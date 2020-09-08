import Authentication from '.'

describe('Authentication', () => {
  describe('saveToken', () => {
    let original: any
    let localStorage: any
    beforeAll(() => {
      original = (global as any)._localStorage
      ;(global as any)._localStorage = {
        setItem: jest.fn(),
        getItem: jest.fn(() => null),
        removeItem: jest.fn()
      }
      localStorage = (global as any)._localStorage
    })
    afterAll(() => {
      ;(global as any)._localStorage = original
    })
    beforeEach(() => {
      localStorage.setItem.mockClear()
      localStorage.getItem.mockClear()
    })
    it('saves token with expire time using localStorage', () => {
      const original = Date.now
      const now = Date.now()
      Date.now = jest.fn(() => now)
      new Authentication({}).saveToken('123')
      expect(localStorage.setItem).toHaveBeenCalledWith('hashfuture-token', JSON.stringify({
        value: '123',
        expire: now + 7 * 24 * 3600 * 1000
      }))
      Date.now = original
    })
    it('reads token from localStorage when constructing', () => {
      localStorage.getItem.mockImplementationOnce(() => JSON.stringify({ value: '321', expire: Date.now() + 100 }))
      const auth = new Authentication({})
      expect(localStorage.getItem).toHaveBeenCalledWith('hashfuture-token')
      expect(auth.token).toEqual('321')
    })
    it('does not respect localStorage when the expire time is over', () => {
      localStorage.getItem.mockImplementationOnce(() => JSON.stringify({ value: '123', expire: Date.now() - 100 }))
      expect(new Authentication({}).token).toBe(null)
    })
    it('deletes localStorage when deleting token', () => {
      const a = new Authentication({})
      a.token = '123'
      a.deleteToken()
      expect(a.token).toBe(null)
      expect(localStorage.removeItem).toHaveBeenCalledWith('hashfuture-token')
    })
  })
})