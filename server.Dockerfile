# build stage
FROM node:18.11.0 AS build
WORKDIR /build
COPY package-lock.json package.json ./
RUN npm ci
COPY . .

# runtime stage
FROM alpine:3.16.2
RUN apk add --update nodejs npm
RUN addgroup -S node && adduser -S node -G node
USER node

RUN mkdir /home/node/code
WORKDIR /home/node/code
COPY --from=build --chown=node:node /build .

RUN npm run test:ci
CMD ["npm", "run", "server"]