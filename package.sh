#!/usr/bin/env bash
mvn clean package -Dmaven.test.skip=true
cp start/target/dingtou.jar .
