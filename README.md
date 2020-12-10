# NodeJS Server API

### __Question 1__
- Will be used as the client that will consume this API

### __Question 2__

##### Random Data API Generator (simulate 1 mil requests)
- https://random-data-api.com/documentation


### __Question 3__

##### APIs
| METHOD| ROUTES         |          API               |
|-------|----------------|:--------------------------:|
| GET   | /              | Get Home Page              |
| GET   | /api/url/:code | Get Shortened URL Redirect |
| POST  | /api/url       | Shorten the original URL   |
| GET   | /api/not-found | 404 Not Found Page         |

##### TechStack Used: NanoID, Express, NodeJS, Mongoose, MongoDB

##### Reference Articles:
- https://mongoosejs.com/docs/
- https://cloudnweb.dev/2019/04/mongoose-connection-in-express-js/
- https://expressjs.com/en/guide/routing.html

##### NPM Packages Used:
- https://www.npmjs.com/package/nanoid
- https://www.npmjs.com/package/mongoose
- https://www.npmjs.com/package/nodemon
- https://www.npmjs.com/package/express
- https://www.npmjs.com/package/valid-url
