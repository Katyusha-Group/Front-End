#Stage 1
FROM node:17-alpine as builder
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install --force
COPY . .
RUN npm run build
#Stage 2
FROM nginx:1.24.0
WORKDIR /usr/share/nginx/html
RUN rm -ft ./*
COPY --from=builder /app/build .
ENTRYPOINT ["nginx", "-g", "deamon off;"]
