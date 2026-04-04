FROM node:18-alpine
WORKDIR /app
COPY . .
# Добавляем установку роутера
RUN npm install koa @koa/router 
CMD ["node", "index.js"]