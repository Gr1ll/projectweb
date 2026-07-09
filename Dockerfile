FROM node:20

WORKDIR /app

RUN npm build

COPY package*.json ./

COPY .next/ ./.next/

RUN npm install

ENV PORT=8080

EXPOSE 8080

CMD ["npm", "run", "start"]
