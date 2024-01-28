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
RUN rm -rf ./*
COPY --from=builder /app/dist .
COPY nginx.conf /etc/nginx/conf.d/default.conf
ENTRYPOINT ["nginx", "-g", "daemon off;"]
