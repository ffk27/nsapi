#!/bin/sh
gnome-terminal --working-directory=$(pwd)/api -e "npm run start:dev"
gnome-terminal --working-directory=$(pwd)/angular -e "npm start"