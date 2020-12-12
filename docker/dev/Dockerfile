FROM node:12.16.1-alpine as builder

# set workdir
WORKDIR /usr/src/app

# copy package.json & yarn.lock
COPY package.json .
COPY yarn.lock .

# install dependencies
RUN yarn

# copy other files/directories
COPY public /usr/src/app/public
COPY src /usr/src/app/src
COPY .env.dev .

RUN yarn run build

# pull official base image
FROM python:3.8.0-alpine

# set work directory
WORKDIR /usr/src/app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install dependencies
RUN apk update \
    && apk add gcc musl-dev python3-dev libffi-dev openssl-dev jpeg-dev zlib-dev postgresql-dev
RUN pip install --upgrade pip
RUN pip install 'pipenv==2018.11.26'
COPY pyproject.toml Pipfile Pipfile.lock manage.py /usr/src/app/
RUN pipenv install --system --deploy --ignore-pipfile
RUN pipenv install psycopg2

# copy project
COPY buying_selling /usr/src/app/buying_selling
COPY docker /usr/src/app/docker
COPY --from=builder /usr/src/app/build /usr/src/app/build
RUN ["chmod", "+x", "/usr/src/app/docker/dev/entrypoint.sh"]

COPY deploy /usr/src/app/deploy
RUN ["chmod", "+x", "/usr/src/app/deploy/build_local.sh"]
RUN ["/usr/src/app/deploy/build_local.sh"]

