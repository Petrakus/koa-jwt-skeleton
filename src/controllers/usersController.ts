import { Context } from "koa";
import * as jwt from 'jsonwebtoken';
import * as config from '../config';

export let login = async (ctx:Context) => {
  let user = ctx.request.body;
  if(user.email == 'test@example.com' && user.password == '1234') {
    let token = await jwt.sign(user, config.constants.jwtSecret);
    ctx.body = {
      token
    };
    return;
  }
  ctx.body = {
    error: 'Email or password doesnt match!'
  };

};