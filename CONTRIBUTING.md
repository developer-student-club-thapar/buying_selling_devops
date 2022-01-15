# Welcome to the contributions of Thapar Buying / Selling - OLX (Full Stack + DevOps) project

We follow a systematic Git Workflow -

- Create a fork of this repo.
- Clone your fork of your repo on your pc.
- [Add Upstream to your clone](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork)
- **Every change** that you do, it has to be on a branch. Commits on master would directly be closed.
- Make sure that before you create a new branch for new changes,[syncing with upstream](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork) is neccesary.

## Setup and running of project (Backend)

- Fork the repo and clone it.
- If you had a previous version of the project, please delete the old env folder and create a new one
- The project now uses `pipenv` to manage dependencies. So, virtual environment creation will also be handled by pipenv
- Install [Pipenv](https://pypi.org/project/pipenv/)

- (Only for Linux users) At the root of your project directory <br>
  `sudo apt-get update`<br>
  `sudo apt-get install libpq-dev python-dev`

- Run these commands
```bash
pipenv install
pre-commit install
```

- This will setup the project requirements and pre-commit test hooks!

- Ensure you have [PostgreSQl](https://www.postgresql.org/download/) installed on your machine and don't forget to add that in your environment variables.
- Open Command prompt or Terminal, and login into postgres by entering the following command:<br>
  `psql -U postgres -h localhost`<br>
- Create a new admin user in postgres with username `thapar_olx` and password `thapar_olx` by using the following command:<br>
  `CREATE USER thapar_olx WITH ENCRYPTED PASSWORD 'thapar_olx'`<br>
- You can confirm that user is created or not by using the following command<br>
  `\du`
- Create a new database in postgres with name `thapar_olx` owned by the user created in previous step by using the following command:<br>
  `create database thapar_olx`<br>
- You can confirm that your database is created or not by using the following command<br>
  `\l`<br>
- Now, to grant priviledges, use the following command:<br>
  `GRANT ALL PRIVILEDGES ON DATABASE thapar_olx TO thapar_olx;`<br>
  this message appears stating that you have successfully granted priviledges to user `thapar_olx` for database `thapar_olx`:<br>
```bash
GRANT
```
- Check via entering the following command:<br>
  `\l`
     
- Ensure that postgres server is running on default port **5432**.

- To activate the virtual environment made by pipenv run `pipenv shell`

- After the above setup, run <br>
  `python manage.py makemigrations`
  `python manage.py migrate`

- Start the backend dev server
  `python manage.py runserver`
  Runs the backend server at default port `8000`.<br />
  Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

- To exit the pipenv virtual environment run `exit`.

## Setup and running of project (Frontend)

- At your root directory run `yarn install` to install all the dependencies
- Start react dev server
- `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Running with Docker (Backend)

- Ensure that you have `docker` and `docker-compose` already installed.
- At the root of the project directory run `docker-compose build` to build the image for the first time.
- To start the backend run `docker-compose up -d`.
- Ensure that the backend is running by going to [http://127.0.0.1:8000](http://127.0.0.1:8000).

## Generating a CLIENT ID for Google OAuth Login

- Create a new project with name **Thapar OLX** in _Google Cloud Platform_.
- Enable **Cloud OS Login API** from the API Library in _Google Cloud Platform_.
- Go to **API & Services** section and click on **Create Credential**.
- Choose _OAuth Client ID_.
- Setup the consent screen if asked to do so.
- Select **Web Application** as the _Application Type_.
- Whitelist `localhost:3000` under _Authorised Javascript Origins_.
- Click on **Create**
- Copy the **ClientID** and paste it in `.env` file alongside **REACT_APP_OAUTH_CLIENT_ID**.

## Using Google Cloud Storage for storing _static_ and _media_ files (Only required for PRODUCTION)

- First, you need a service account for connecting to GCP
- Head over to this [page](https://cloud.google.com/docs/authentication/getting-started) and click on **Create Service Account**
- Select the relavant project
- From the dropdown for _Service Account_ choose _New-service account_
- Download the `JSON` file and store it at your project root.
- Rename the file to `service-account.json`
- Set `GOOGLE_APPLICATION_CREDENTIALS` to the path to `service-account.json` in above point in the `.env` file.
- Create a bucket on GCP with the relavant name
- Copy the bucket name and in `.env` file set `GS_BUCKET_NAME` to your bucket name.

#### Note

- As the project now uses `pipenv` to manage dependencies, you need to run `pipenv install <package_name>` to install the new package.
- Use only `yarn add package_name` to add new packages to the frontend part.
