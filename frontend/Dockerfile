FROM node:10-slim
WORKDIR /app
COPY package.json /app/package.json
RUN npm install
COPY . /app
ENV PORT 80
EXPOSE 80
CMD ["npm", "start"]
