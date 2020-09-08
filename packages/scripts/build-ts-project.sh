#!/bin/bash
function F_check_exit() {
    MESSAGE=$1
    shift
    echo -en $MESSAGE\\r
    eval "$@"
    EXITCODE=$?
    if [ $EXITCODE -ne 0 ] ; then
            echo $MESSAGE failed with exit code $EXITCODE
            rm -rf .tmp lib
            safemv lib-bak lib
            exit $EXITCODE
    fi
    echo -en "\033[2K"
}

function safemv() {
  if [ -d $1 ]; then
    mv $1 $2
  fi
}

printf "\n"
F_check_exit "Backuping lib"  safemv lib lib-bak
F_check_exit "Removing .tmp lib" rm -rf .tmp lib
F_check_exit "Compiling typescript" tsc -p . --outDir .tmp
F_check_exit "Rollup" rollup -c -i .tmp/index.js -o lib/index.js
F_check_exit "Removing intermediate files" "find .tmp -not -name \"*.d.ts\" -type f -exec rm {} \;"
F_check_exit "Moving declaration files to lib" mv .tmp/* lib/
F_check_exit "Removing .tmp" rm -rf .tmp lib-bak