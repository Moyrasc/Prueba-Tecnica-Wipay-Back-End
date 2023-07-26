import passport from 'passport'
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt'
import { Strategy as LocalStrategy } from 'passport-local'

import 'dotenv/config'

const HARDUSER = {
  email: 'admin@admin.com',
  password: 'admin01'
}
passport.use('login', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
},
async (email, password, done) => {
  try {
    if (HARDUSER.email !== email || HARDUSER.password !== password) {
      return done(null, false, { message: 'Usuario no encontrado y/o contraseña incorrecta' })
    }
    return done(null, HARDUSER, { message: 'Logged in Successfully' })
  } catch (error) {

  }
}
))
// verificar la validez del token JWT proporcionado en la cabecera de autorización de una solicitud
passport.use(
  new JWTStrategy(
    {
      secretOrKey: process.env.SECRET_KEY,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    },
    async (token, done) => {
      try {
        return done(null, token.user)
      } catch (error) {
        done(error)
      }
    }
  )
)
