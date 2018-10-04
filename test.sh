#!/bin/bash

#test all js files
for file in $(ls|grep '.js');
do
  node $file
done;
