install:
	 npm ci

publish:
	npm publish --dry-run	 

brain-games:
	node bin/brain-games.js

make lint:
	npx eslint .
	
make lintfix:
	npx eslint . --fix

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js