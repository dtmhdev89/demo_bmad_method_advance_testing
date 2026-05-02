.PHONY: test-api test-e2e test-all

test-api:
	cd apps/api && go test ./... -v

test-e2e:
	pnpm --filter e2e test

test-all: test-api test-e2e
