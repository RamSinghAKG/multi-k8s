docker build -t ramsinghcg/multi-client:latest -t ramsinghcg/multi-client:$SHA -f ./client/Dockerfile ./client
docker build -t ramsinghcg/multi-server:latest -t ramsinghcg/multi-server:$SHA -f ./server/Dockerfile ./server
docker build -t ramsinghcg/multi-worker:latest -t ramsinghcg/multi-worker:$SHA -f ./worker/Dockerfile ./worker

docker push ramsinghcg/multi-client:latest
docker push ramsinghcg/multi-server:latest
docker push ramsinghcg/multi-worker:latest

docker push ramsinghcg/multi-client:$SHA
docker push ramsinghcg/multi-server:$SHA
docker push ramsinghcg/multi-worker:$SHA

kubectl apply -f k8s
kubectl set image deployments/server-deployment server=ramsinghcg/multi-server:$SHA
kubectl set image deployments/client-deployment client=ramsinghcg/multi-client:$SHA
kubectl set image deployments/worker-deployment worker=ramsinghcg/multi-worker:$SHA
