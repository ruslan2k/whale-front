-include .env

start: node_modules
	yarn start

node_modules:
	yarn install
