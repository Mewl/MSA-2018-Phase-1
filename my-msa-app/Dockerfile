FROM node:8

WORKDIR /my-msa-app

COPY . /my-msa-app

RUN npm install

EXPOSE 3000

CMD if [ ${APP_ENV} = production ]; \
	then \
	npm install -g http-server && \
	npm run build && \
	cd build && \
	hs -p 3000; \
	else \
	npm run start; \
	fi