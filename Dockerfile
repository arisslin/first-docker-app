FROM node:18.11.0

COPY src/index.mjs index.mjs

CMD ["node", "index.mjs"]