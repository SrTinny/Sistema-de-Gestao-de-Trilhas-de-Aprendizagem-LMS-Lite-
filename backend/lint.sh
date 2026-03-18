#!/bin/sh
set -e

cd /app
flake8 .
