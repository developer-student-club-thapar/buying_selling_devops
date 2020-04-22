# Welcome to the contributions of Thapar Buying / Selling - OLX (Full Stack + DevOps) project

## Setup of project (Backend)
- Fork the repo and clone it.
- Go in the repo and setup virtualenvironment using <br>
```python -m virtualenv env``` 
- Then activate the environment using <br>
```source env/Scripts/activate```
- At the root of your project directory <br>
```bash 
pip install -r requirements.txt
pre-commit install
```
- This will setup the project requirements and pre-commit test hooks!

- Rename ```.env.example``` to ```.env```
- Inside ```.env``` file set secret key for your django project.
- You can use [https://djecrety.ir/] to generate your secret key
- Set ```DEBUG = True``` during development in ```.env``` file

- After the above setup, run <br>
```python manage.py makemigrations```
```python manage.py migrate```

## Setup of project (Frontend)
- At your root directory run `yarn install` to install all the dependencies

## How to start the backend server
- ```python manage.py runserver```

Runs the backend server at default port ```8000```.<br />
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

The page will reload if you make edits.<br />

## How to start react dev server
- ```yarn start```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### Note
- If you are adding any new requirements for the project, make sure that you are adding it to ```requirements.txt```


### To keep your fork master insync, use these -
- [Add Upstream to your clone] (https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork)
- [Syncing with upstream] (https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork)