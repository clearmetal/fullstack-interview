FROM node:10-slim
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm ci \
 && npm cache clean --force \
 && mv /app/node_modules /node_modules
COPY . .
ENV PORT 80
EXPOSE 80
CMD ["npm", "start"]
