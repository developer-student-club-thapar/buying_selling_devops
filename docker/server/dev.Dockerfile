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
RUN pip install poetry
RUN poetry config virtualenvs.create false
COPY pyproject.toml poetry.lock manage.py /usr/src/app/
RUN poetry install --no-dev
RUN poetry add psycopg2-binary

# copy project
COPY buying_selling /usr/src/app/buying_selling
COPY static /usr/src/app/static