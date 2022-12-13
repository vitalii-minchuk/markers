FROM node:18.10.0 AS builder


WORKDIR /app
RUN yarn global add turbo
COPY . .
RUN turbo prune --scope=backend --docker

FROM node:18.10.0 AS installer


WORKDIR /app

COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/yarn.lock ./yarn.lock
RUN yarn install

COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json
RUN yarn turbo run build --filter=backend...

FROM node:18.10.0 AS runner
WORKDIR /app

COPY --from=installer /app .

WORKDIR /app/apps/backend

EXPOSE 8080
CMD [ "yarn", "start" ]
