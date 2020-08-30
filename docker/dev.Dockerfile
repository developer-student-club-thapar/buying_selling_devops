# pull official base image
FROM nikolaik/python-nodejs:python3.8-nodejs12-alpine
# set work directory
WORKDIR /usr/src/app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install dependencies
RUN apk update \
    && apk add gcc musl-dev python3-dev libffi-dev openssl-dev jpeg-dev zlib-dev postgresql-dev
RUN pip install --upgrade pip
RUN pip install poetry
RUN poetry config virtualenvs.create false
COPY pyproject.toml poetry.lock manage.py /usr/src/app/
RUN poetry install --no-dev
RUN poetry add psycopg2-binary

COPY buying_selling /usr/src/app/buying_selling

COPY package.json .
COPY yarn.lock .
RUN yarn

COPY public .
COPY src .
COPY .env .

COPY docker /usr/src/app/docker
COPY deploy .
RUN ["/usr/src/app/deploy/build_local.sh"]
RUN python manage.py runserver 0.0.0.0:8000

