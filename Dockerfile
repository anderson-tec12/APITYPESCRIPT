FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i
COPY ./dist .
EXPOSE 3050
CMD ["npm", "start"]
