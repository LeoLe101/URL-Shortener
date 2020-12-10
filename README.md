# NodeJS Server API

### __Installation
- ```npm install```
- ```npm run dev```

### __Question 1__
- Will be used as the client that will consume this API

### __Question 2__

##### Search Bar APIs
| METHOD| ROUTES         |          API               |
|-------|----------------|:--------------------------:|
| GET   | /api/search    | Get Search Data by Query   |
| GET   | /api/data?page | Get Data by Page           |

##### Random Data API Generator (simulate 1 mil requests)
- https://random-data-api.com/documentation


### __Question 3__

##### URL Shortener APIs
| METHOD| ROUTES         |          API               |
|-------|----------------|:--------------------------:|
| GET   | /              | Get Home Page              |
| GET   | /api/url/:code | Get Shortened URL Redirect |
| POST  | /api/url       | Shorten the original URL   |
| GET   | /api/not-found | 404 Not Found Page         |

##### Server: http://localhost:8080/
1. NanoID
2. Express
3. NodeJS
4. Mongoose
5. MongoDB

##### Client: 
1. ReactJS
2. NextJS

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
