# reactapp-template

Outstanding actions: 
- connect github
- npm init -y 
- npm install dotenv express jsonwebtoken mongoose passport passport-jwt passport-local passport-local-mongoose concurrently
- npm install from client


package.json addition:

"scripts": {
    "start": "if-env NODE_ENV=production && npm run start:prod || npm run start:dev",
    "start:prod": "node server.js",
    "start:dev": "concurrently \"nodemon --ignore 'client/*' \" \"npm run client\"",
    "client": "cd client && npm run start",
    "install": "cd client && npm install",
    "build": "cd client && npm run build",
    "heroku-postbuild": "npm run build"
  },