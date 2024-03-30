FROM node:14

WORKDIR /app

COPY package*.json ./

COPY build/ ./build/

RUN npm install

ENV PORT=8080

EXPOSE 8080

CMD ["npm", "run", "serve"]