# IT IS JUST DRAFT!

set -e

git clone ...

cd mirf
npm ci
npm run build
npm publish

cd ..

npx mirf start --host=0.0.0.0 --port=80 --root=$ROOT_COMPONENT
npx static-server start # or we can use google-bucket or amazon-s3

cd ..

cd frontend
npm ci
mirf build --recursively
mirf publish --recursively



# for frontend development
cd frontend
mirf component dev --port=8080
mirf start --port=3000 --root=$ROOT_COMPONENT
# for full development
cd frontend
mirf dev --port=8080
cd ../mirf
npm run dev --port=3000 --root=$ROOT_COMPONENT


# new
npx mirf-cli component build
npx serve dist --port=8080
npx mirf-server --port=3000 --root=$ROOT_COMPONENT