#!/bin/sh -l

if [ -z "${1+x}" ]; then
    name="No name given"
else
    name="${1}"
fi

echo "Hello, ${name}! Greetings from a docker action!"