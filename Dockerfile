FROM node:18.11.0

COPY src/index.js index.js

CMD ["node", "index.js"]