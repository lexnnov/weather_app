cd ./server
npm run build
mv ./build ../production
cd ../client
npm run build
cd ..
mv ./client/build/ ./production/client
cp ./server/package.json ./production/
cd ./production
npm install

