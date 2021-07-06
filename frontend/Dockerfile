FROM node:14.8.0-alpine3.11 as BUILDER

WORKDIR /app

ADD package.json package-lock.json ./

RUN npm install

ADD .browserslistrc .prettierrc .eslintrc.js babel.config.js vue.config.js .env.production ./

ADD src ./src
ADD public ./public

RUN npm run build

FROM node:14.8.0-alpine3.11

WORKDIR /app

RUN npm i -g serve

COPY --from=BUILDER /app/dist ./

CMD serve -l $PORT