set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:AntonKozhukhar/rick-and-morty.git master:gh-pages

cd -