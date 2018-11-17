#!/bin/bash

#Executa tots els tests
cd tests

#recorre els fitxers *.test.js
for file in $(ls *.test.js);do

  #executa i guarda el codi de sortida
  node $file > /dev/null
  exit_code=$?

  #comprova el codi de sortida
  if [ $exit_code != 0 ]; then
    exit $exit_code;
  else
    echo "$file : (ok: $exit_code)"
  fi

done
