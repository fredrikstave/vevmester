const compose = require('koa-compose');
const OktaJwtVerifier = require('@okta/jwt-verifier');

const jwtVerifier = new OktaJwtVerifier({
  issuer: 'https://dev-737474.oktapreview.com/oauth2/default',
  clientId: '0oajlds2eseJspUBa0h7',
  assertClaims: {
    aud: 'api://default',
  },
});

const authMiddleware = async (ctx, next) => {
  const authHeader = ctx.headers.authorization || '';
  const match = authHeader.match(/Bearer (.+)/);

  if (!match) {
    ctx.throw(401, 'Bad authorization request');
  }

  const accessToken = match[1];

  const jwt = await jwtVerifier.verifyAccessToken(accessToken).catch((err) => {
    ctx.throw(401, err.message);
  });

  const { sub } = jwt.claims;
  const users = await ctx.db('users').select().where({
    user_id: sub,
  });

  if (users.length !== 1) {
    ctx.throw(401, 'Unauthorized');
  }

  // @todo check if the newsroom exists

  // Add user to context state
  ctx.state.user = users.shift();

  await next();
};

module.exports = function auth(middlewares = []) {
  // Middlewares in Koa are cascading, so the authMiddleware must be
  // the first middleware to be applied, otherwise the routes other middlewares
  // will be publicly available.
  return compose([
    authMiddleware,
    ...middlewares,
  ]);
};
