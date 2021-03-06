/**
 * Module dependencies.
 */

var env = process.env;

function on(variable) {
  return variable ? JSON.parse(variable) : undefined;
}

/**
 * Expose heroku helper
 */

module.exports = {
  protocol: env.PROTOCOL,
  host: env.HOST,
  publicPort: env.PUBLIC_PORT,
  privatePort: env.PORT,
  mongoUrl: env.MONGO_URL ? env.MONGO_URL : env.MONGOHQ_URL,
  mongoUsersUrl: env.MONGO_USERS_URL,
  client: env.CLIENT_CONF ? env.CLIENT_CONF.split(',') : [ "protocol", "host", "publicPort", "env", "locale", "logo", "favicon", "organization name", "organization url", "learn more url", "google analytics tracking id", "comments per page", "spam limit", "faq", "pp", "tos", "glossary" ],
  auth: {
    basic: {
      username: env.BASIC_USERNAME,
      password: env.BASIC_PASSWORD
    }
  },
  socialshare : {
    siteName : env.SOCIALSHARE_SITE_NAME,
    siteDescription : env.SOCIALSHARE_SITE_DESCRIPTION,
    image : env.SOCIALSHARE_IMAGE,
    domain : env.SOCIALSHARE_DOMAIN,
    twitter : {
      username : env.SOCIALSHARE_TWITTER_USERNAME
    }
  },
  locale : env.LOCALE,
  logo : env.LOGO,
  favicon : env.FAVICON,
  notifications: {
    url: env.NOTIFICATIONS_URL,
    token: env.NOTIFICATIONS_TOKEN
  },
  "organization name" : env.ORGANIZATION_NAME,
  "organization url" : env.ORGANIZATION_URL,
  "learn more url" : env.LEARN_MORE_URL,
  "staff": env.STAFF ? env.STAFF.split(',') : null,
  "google analytics tracking id" : env.GOOGLE_ANALYTICS_TRACKING_ID,
  "rss enabled" : env.RSS_ENABLED,
  "comments per page": env.COMMENTS_PER_PAGE,
  "spam limit": env.SPAM_LIMIT,
  faq: on(env.FAQ),
  tos: on(env.TERMS_OF_SERVICE),
  pp: on(env.PRIVACY_POLICY),
  glossary: on(env.GLOSSARY)
};