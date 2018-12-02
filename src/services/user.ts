import User from '../models/User'

export const createUser = async () => {
  const user = new User({
    email: Math.round(Math.random() * 10 ** 10) + '@gmail.com',
    password: 'password',
    profile: {
      name: 'michael',
      gender: 'male',
      localtion: 'china',
      website: 'https://www.micjoycetop.com',
      picture: 'https://www.micjoycetop.com/aa.png'
    }
  })
  const record = await user.save()
  return record
}
