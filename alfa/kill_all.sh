docker stop $(docker ps | awk '{print $1}'); docker container prune --force