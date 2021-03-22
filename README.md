**Activate the virtual environment**

```
source blockchain-env/bin/activate      (linux)
.\blockchain-env\Scripts\activate.ps1   (windows)
```

**Install all packages**
Make sure to activate the virtual environment.

```
pip3 install -r requirements.txt
```

**Run the tests**
Make sure to activate the virtual environment.

```
python -m pytest backend/tests
```

**Run the application and API**

```
python -m backend.app
```

**Run the application and API in peer mode**

Make sure to activate the virtual environment (must be on powershell)

```
$env:PEER="True"; python -m backend.app
```

**Seed the backend with data**

Make sure to activate the virtual environment (must be on powershell)

```
$env:SEED_DATA="True"; python -m backend.app
```

**Run the frontend**

Make sure to execute in the frontend directory.

```
npm run start
```
