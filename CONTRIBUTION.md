# Welcome to the contributions of Thapar Buying / Selling - OLX (Full Stack + DevOps) project
We follow a systematic Git Workflow -
- Create a fork of this repo.
- Clone your fork of your repo on your pc.
- [Add Upstream to your clone](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork)
- **Every change** that you do, it has to be on a branch. Commits on master would directly be closed.
- Make sure that before you create a new branch for new changes,[syncing with upstream](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork) is neccesary.

## Setup and running of project (Backend)
- Fork the repo and clone it.
- Go in the repo and setup virtualenvironment using <br>
```python -m virtualenv env``` 
- Then activate the environment using <br>
```source env/Scripts/activate```
- If you had a previous version of the project, please delete the old env folder and create a new one
- The project now uses ```poetry``` to manage dependencies.
- Install [Poetry](https://python-poetry.org/docs/)
- At the root of your project directory <br>
```bash 
poetry install
pre-commit install
```
- This will setup the project requirements and pre-commit test hooks!

- Make a new file named ```.env``` exactly similar to ```.env.example```.
- Inside ```.env``` file set secret key for your django project.
- You can use [https://djecrety.ir/] to generate your secret key
- Set ```DEBUG = True``` during development in ```.env``` file

- After the above setup, run <br>
```python manage.py makemigrations```
```python manage.py migrate```

- Start the backend server 
```python manage.py runserver```
Runs the backend server at default port ```8000```.<br />
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

The page will reload if you make edits.<br />

## Setup and running of project (Frontend)
- At your root directory run `yarn install` to install all the dependencies
- Start react dev server
- ```yarn start```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### Note
- As the project now uses ```poetry``` to manage dependencies, you need to run ```poetry add <package_name>``` to install the new package.
- Use only ```yarn add package_name``` to add new packages to the frontend part.
