# bot.devwithluv.dev

[Netlify Functions](https://www.netlify.com/products/functions/)를 활용한 serverless 봇 어플리케이션

Netlify Functions는 AWS Lambda를 래핑한 기능

Netlify의 AWS 계정으로 Lambda를 이용

- [Netlify Functions 문서](https://docs.netlify.com/functions/overview/#manage-your-serverless-functions)

### 로컬 개발

```
npm run dev
```

api 엔드포인트 및 로직 추가

1. .functions/{api-endpoint-이름}/{api-endpoint-이름}.js 으로 파일생성

1. aws lambda에서 사용하는 형태로 함수 작성

   - [함수 형식](https://docs.aws.amazon.com/ko_kr/lambda/latest/dg/nodejs-prog-model-handler.html)
   - [lambda 함수 반환 형식](https://docs.aws.amazon.com/ko_kr/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-output-format)
  
1. 실제 만들어지는 api-endpoint는 /.netlify/functions/{api-endpoint-이름}

### 슬랙봇 프로토타이핑 코드


```
.functions/tip-test/tip-test.js
```

URL : /.netlify/functions/tip-test

   - https://bot.devwithluv.dev/.netlify/functions/tip-test

