FROM node:18.11.0

USER node

WORKDIR /home/node/code

COPY --chown=node:node src/index.mjs .

CMD ["node", "index.mjs"]