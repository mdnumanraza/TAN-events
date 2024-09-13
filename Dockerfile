FROM node:16 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 3000
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
