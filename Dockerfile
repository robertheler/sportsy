FROM node:12.16.3

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install
# At this point, the mongo container is sill being built
# Seeding the database here will result in an error
#RUN npm run seed-database does not belong here

EXPOSE 3001

CMD [ "npm", "run", "start-container" ]
# "start-container": "npm run seed-database && npm run start"
# seed-database should be first!
# make sure database is closed otherwise npm run won't be executed
# and container won't work
