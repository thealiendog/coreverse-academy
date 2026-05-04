#!/bin/sh
# pre-commit.sh — source file for the git pre-commit hook.
# Install into .git/hooks/ via: sh scripts/install-hooks.sh

cd "$(git rev-parse --show-toplevel)" || exit 1
npm run validate
