# flag

> Online flag pole

[![Netlify Status](https://api.netlify.com/api/v1/badges/ba45bf16-187a-4ad7-9a1f-17c38d9be9d5/deploy-status)](https://app.netlify.com/sites/determined-archimedes-425052/deploys)

## Functionality

The index page will show the flag according to the [Dutch flag instructions](https://www.royal-house.nl/topics/flags/flag-of-the-netherlands)

On `/create` a custom combination of assets can be picked together and send to a friend with a personal message. 
This custom set will be displayed on the `/view` page, which will decode the payload and display its contents. 

## Build steps

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev
```

This project is set up as a JAM stack. So to deploy to production, the static assets will need to be built.
```
# generate static project
$ npm run generate
```

The results will by default be exposed in `/dist`. 

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
