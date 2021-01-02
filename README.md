# apiAwsLamdaNode
AWS Lambda API - Node Simple Http Endpoint

Este ejemplo muestra un API simple de AWS Lambda con Node.js

## Setup

```
npm install
npm install -g serverless@1.54.0
npm install -g yarn
serverless create --template aws-nodejs --path aws-lambda-api
serverless deploy
```

## Use Cases
Wrapping an existing internal or external endpoint/service

## Invoke the function locally

```bash
serverless invoke local -f hello
serverless invoke local -f bye
```

Scripts
```bash
yarn invoke
yarn invokeBye
```

Which should result in:

```bash
{
    "statusCode": 200,
    "body": "{\"message\":\"Hello world!\"}"
}
```
```bash
{
    "statusCode": 200,
    "body": "{\"message\":\"Bye world!\"}"
}
```

## Deploy

In order to deploy the endpoint, simply run:

```bash
serverless deploy
```

*READ*

```bash
curl -XGET -H "Content-type: application/json" 'https://le8elts6d9.execute-api.us-east-1.amazonaws.com/dev/helloWorld'
```
```json
{"message":"Hello world!"}
```

```bash
curl -XGET -H "Content-type: application/json" 'https://le8elts6d9.execute-api.us-east-1.amazonaws.com/dev/byeWorld'
```
```json
{"message":"Bye world!"}
```
