# IT IS JUST DRAFT!

set -e

git clone ...

cd mira
npm ci
npm run build
npm publish

cd ..

cd mira-cli
npm publish

cd ..

npx mira start --port=80 # just run package in a lambda
npx static-server start # or we can use google-bucket or amazon-s3

cd ..

cd frontend
npm ci
mira-cli build --recursively
mira-cli publish --recursively



# for frontend development
cd frontend
mira-cli dev --port=8080
mira start --port=3000 --root=http://localhost:8080/index.js
# for full development
cd frontend
mira-cli dev --port=8080
cd ../mira
npm run dev --port=3000 --root=http://localhost:8080/index.js
