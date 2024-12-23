# server1
##ws mkdir server1
###cd server1
#mkdir public src
cd server1
npm init -y
touch public/index.html
touch public/index.js
touch public/style.css
touch src/app.js
npm pkg set scripts.start="node ./src/app.js"
npm pkg set scripts.dev="node --watich ./src/app.js"
npm pkg set cripts.test="jest"
npm i express
npm i favicon 
npm i path 
npm i nodemon

git init 
echo "node_modules" > .gitignore
git add .
git commit -m "initial commit "

