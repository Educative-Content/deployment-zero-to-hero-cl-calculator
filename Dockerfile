FROM node:18-alpine
WORKDIR /simple-test/
COPY public/ /simple-test/public
COPY src/ /simple-test/src
COPY package.json /simple-test/
RUN npm install --loglevel=error
CMD ["npm", "start"]
