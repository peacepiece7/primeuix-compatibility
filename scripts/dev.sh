#!/bin/bash

case $1 in
    ng)
        cd submodules/primeng && pnpm run dev
        ;;
    vue)
        cd submodules/primevue-compatibility && pnpm run hot:dev
        ;;
    react)
        cd submodules/primereact && pnpm run dev
        ;;
    *)
        echo "Usage: $0 {ng|vue|react}"
        exit 1
        ;;
esac
