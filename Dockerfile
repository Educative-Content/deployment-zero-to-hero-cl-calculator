FROM node:19.5.0-alpine
WORKDIR /simple-test/
COPY public/ /simple-test/public
COPY src/ /simple-test/src
COPY package.json /simple-test/
RUN npm config set update-notifier false
RUN npm install
CMD [“npm”, “start”]
