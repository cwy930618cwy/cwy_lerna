const Authentication = {
  saveToken: jest.fn(),
  deleteToken: jest.fn(),
  saveAccount: jest.fn(),
  updateAccountType: jest.fn()
}
const Meta = {
  countryCodes: [] as string[],
  saveCountryCodes: jest.fn()
}
export {
  Authentication,
  Meta
}