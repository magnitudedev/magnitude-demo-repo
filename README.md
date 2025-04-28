# Magnitude Demo Repo

Basic repository to demonstrate how to set up Magnitude test cases.

You must first make sure to add the proper LLM keys to your .env
Please follow the [Configure LLMs section](https://github.com/magnitudedev/magnitude?tab=readme-ov-file#configure-llms) in the main Magnitude repo

## Running locally
1. Clone repo:
```
git clone https://github.com/magnitudedev/magnitude-demo-repo.git
```

2. Install deps
```
npm i
```

3. Start local server (in a separate terminal)
```
npm run dev
```

3. Run Magnitude against the local server
```
npx magnitude
```


## GitHub Actions
See [magnitude.yaml](.github/workflows/magnitude.yaml) for an example of how to run your Magnitude test suite with GitHub Actions.

