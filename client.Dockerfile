FROM node:18.11.0 AS build
WORKDIR /build
COPY package-lock.json package.json ./
RUN npm ci
COPY . .
CMD ["npm", "run", "client:build"]

FROM nginx:latest
COPY --from=build /build/dist /usr/share/nginx/html