FROM node:alpine

WORKDIR /app

COPY package*.json ./

COPY prisma ./prisma

COPY .env ./

COPY tsconfig.json ./

COPY . .

RUN npm install

# RUN npx prisma migrate dev --name init --create-only && npx prisma generate

EXPOSE 4004

CMD CMD ["npm", "run", "dev"]