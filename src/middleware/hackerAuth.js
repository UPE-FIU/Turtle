import passport from "passport";
import { Strategy as BearerStrategy } from "passport-http-bearer";
import jwt from "jsonwebtoken";
const { SECRET_KEY, DASHBOARD_PASSWORD } = process.env;

passport.use(
    new BearerStrategy(async (token,done) => {
        console.log(token);
        let decoded;
        try{
            decoded = await jwt.verify(token,SECRET_KEY);
            return done(null,true)
        }catch(err){
            return done(null,false)
        }
    })
)

const hackerAuthMiddleware = passport.authenticate("bearer",{session:false});

export default hackerAuthMiddleware;

