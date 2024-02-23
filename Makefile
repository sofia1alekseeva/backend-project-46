start:
	make install
	npm link
install:
	npm ci
gendiff:
	./bin/gendiff.js
publish:
	npm publish --dry-run
lint:
	npx eslint .