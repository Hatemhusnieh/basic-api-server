# basic-api-server  

### Author : Hatem Husnieh  

## install  
1. copy the link of the repo
1. clone the repo on your local machine by `git clone repo-url`
1. download independencies by `npm i`
1. create a `.env`, then cope the content of `.env.sample` file inside the `.env` file.
1. fill the variables of `.env`
1. run the app

## Deploy, Run and Test
- [test report](https://github.com/Hatemhusnieh/basic-api-server/actions)
- [deployed link](https://hatem-basic-api-server.herokuapp.com/)
- [Pull Request](https://github.com/Hatemhusnieh/basic-api-server/commit/ceb9f36d46d4d04dcd0310069f9ae14e0baa9cbf)

### Setup  
#### `.env` requirement
  - `PORT` - port number  

#### Running the app  
- either:
  1. `npm start`
  1. `nodemon`
- Endpoint: `/api/v1/games`
  - returns Object  

    ![Object](img/res1.png)  

- Endpoint: `/api/v1/players`
  - returns Object  

    ![Object](img/res2.png)  
      
#### Test 
- Unit test: `npm run test`
- Lint test: `npm run lint`

### UML:  
![uml](img/basic-api-server.jpg)