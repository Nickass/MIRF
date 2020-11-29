# IT IS JUST DRAFT!

set -e

git clone ...

cd mira
npm ci
npm run build
npm publish

cd ..

npx mira start --host=0.0.0.0 --port=80 --root=$ROOT_COMPONENT
npx static-server start # or we can use google-bucket or amazon-s3

cd ..

cd frontend
npm ci
mira build --recursively
mira publish --recursively



# for frontend development
cd frontend
mira component dev --port=8080
mira start --port=3000 --root=$ROOT_COMPONENT
# for full development
cd frontend
mira dev --port=8080
cd ../mira
npm run dev --port=3000 --root=$ROOT_COMPONENT


# new
npx mira-cli component build
npx serve dist --port=8080
npx mira-server --port=3000 --root=$ROOT_COMPONENT