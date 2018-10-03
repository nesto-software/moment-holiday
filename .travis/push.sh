#!/bin/sh

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

commit_website_files() {
  git checkout -b typedoc
  git add . typedocs/*
  git commit --message "Travis build: $TRAVIS_BUILD_NUMBER"
}

upload_files() {
  git remote add origin-pages https://${GH_TOKEN}@github.com/nesto-software/moment-holiday.git > /dev/null 2>&1
  git push --quiet --set-upstream origin-pages typedoc
}

setup_git
commit_website_files
upload_files