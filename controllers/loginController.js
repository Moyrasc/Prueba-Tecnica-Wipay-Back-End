import passport from 'passport'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

const secretWord = (process.env.SECRET_KEY !== undefined) ? process.env.SECRET_KEY : 'secret'

export const loginController = async (req, res, next) => {
  passport.authenticate('login', async (err, user, info) => {
    try {
      if (!user || err) {
        return res.status(401).send('Credenciales Erróneos!')
      }
      req.login(user, { session: false }, (error) => {
        if (error) {
          return res.status(401)
        } else {
          return res.json(
            jwt.sign(
              { user: { email: user.email } },
              secretWord
            )
          )
        }
      })
    } catch (error) {
      return next(error)
    }
  })(req, res, next)
}
