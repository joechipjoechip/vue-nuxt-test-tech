# Test technique VueJS x NuxtJS

### Ideal Node version : v14.18.0

## How to :

```bash
# 1 : install dependencies
$ npm i

# 2 : launch in dev (with watchers) on localhost:3000
$ npm run dev

# Next : build for production and launch server
$ npm run build
$ npm run start

# Next : generate static project (/dist)
$ npm run generate
```
#### Used API is Mediastack, it's pretty simple to use and the doc is here : https://mediastack.com/documentation

#### The data is made at the created() component hook of the manager (@/components/articles/manager.vue)

#### Note : if you want to test the app on a real mobile device in dev mode, see nuxt.config.js, uncomment server{} and restart your 'npm run dev', then take your mobile, connect it on your localnetwork and check http://yourlocalip:8000

#### Any question ? ig -> @leelo.js


