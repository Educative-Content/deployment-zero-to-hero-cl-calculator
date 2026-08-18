FROM node:20-alpine

WORKDIR /simple-test/

COPY package.json package-lock.json* /simple-test/
RUN npm config set update-notifier false && \
    npm ci --no-audit --no-fund

COPY public/ /simple-test/public
COPY src/ /simple-test/src

CMD ["npm", "start"]
