import bcrypt from 'bcryptjs'
import crypto from 'crypto'
import mongoose from 'mongoose'

export interface User {
  email: string,
  password: string,
  passwordResetToken: string,
  passwordResetExpires: Date,

  facebook: string,
  twitter: string,
  google: string,
  tokens: IAuthToken[],

  profile: {
    name: string,
    gender: string,
    location: string,
    website: string,
    picture: string
  },
}

export interface UserModel extends User, mongoose.Document {
  comparePassword: comparePasswordFunction,
  gravatar (size: number): string
}

interface IAuthToken {
  accessToken: string,
  kind: string
}

type comparePasswordFunction = (candidatePassword: string, cb: (err: any, isMatch: any) => {}) => void

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  passwordResetToken: String,
  passwordResetExpires: Date,

  facebook: String,
  twitter: String,
  google: String,
  tokens: Array,
  profile: {
    name: String,
    gender: String,
    localtion: String,
    website: String,
    picture: String
  }
}, {
  timestamps: true
})

/**
 * Password hash middleware.
 */

userSchema.pre('save', function save (next) {
  const user: UserModel = (this as UserModel)
  if (!user.isModified('password')) { return next() }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) { return next(err) }
    bcrypt.hash(user.password, salt, (error: mongoose.Error, hash) => {
      if (error) { return next(error) }
      user.password = hash
      next()
    })
  })
})

const comparePassword: comparePasswordFunction = function (this: UserModel, candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err: mongoose.Error, isMatch: boolean) => {
    cb(err, isMatch)
  })
}

userSchema.methods.comparePassword = comparePassword

/**
 * Helper method for getting user's gravatar.
 */
userSchema.methods.gravatar = function (size: number) {
  if (!size) {
    size = 200
  }
  if (!this.email) {
    return `https://gravatar.com/avatar/?s=${size}&d=retro`
  }
  const md5 = crypto.createHash('md5').update(this.email).digest('hex')
  return `https://gravatar.com/avatar/${md5}?s=${size}&d=retro`
}

const User = mongoose.model('User', userSchema)
export default User

// export const User: mongoose.Model<UserModel> = mongoose.model<UserModel>('User', userSchema)
