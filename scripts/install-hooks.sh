#!/bin/sh
# install-hooks.sh — copies git hooks into .git/hooks/ and makes them executable.
# Run once after cloning: sh scripts/install-hooks.sh

HOOKS_DIR="$(git rev-parse --show-toplevel)/.git/hooks"

cp scripts/pre-commit.sh "$HOOKS_DIR/pre-commit"
chmod +x "$HOOKS_DIR/pre-commit"

echo "Git hooks installed."
