FROM node:8.9-alpine as apps-builder
LABEL maintainer="micjoyce <micjoyce90@gmail.com>"

# RUN apt-get update && apt-get install libssl-dev -y
WORKDIR /app
COPY package.json .
COPY yarn.lock .

RUN yarn install --production

FROM node:8.9-alpine
LABEL maintainer="micjoyce <micjoyce90@gmail.com>"

RUN mkdir -p /app
WORKDIR /app

COPY --from=apps-builder /app/node_modules /app/node_modules
COPY . /app

EXPOSE 3000
CMD [ "npm", "start" ]
