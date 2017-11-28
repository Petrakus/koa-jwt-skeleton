import { Context } from "koa";

export let protectedResource = async (ctx:Context) => {
  ctx.body = {
    decodedToken: ctx.state.user
  };

};