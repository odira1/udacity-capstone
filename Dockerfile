FROM node:16.15-alpine3.15 AS builder

WORKDIR /opt/src

COPY package.json .
COPY yarn.lock .
COPY tsconfig.json .
COPY jest.config.js .

COPY . . 

RUN yarn
RUN yarn test
RUN yarn build

FROM node:16.15-alpine3.15

WORKDIR /opt/src

EXPOSE 8080

COPY --from=builder /opt/src/package.json .
COPY --from=builder /opt/src/yarn.lock .
COPY --from=builder /opt/src/dist . 

RUN yarn install --production

CMD ["node", "./index.js"]