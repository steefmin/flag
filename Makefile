production: functions/date/firebaseConfig.js generate

functions/date/firebaseConfig.js:
	cp functions/date/firebaseConfig.js.dist functions/date/firebaseConfig.js

.PHONY: generate
generate:
	nuxt generate
	npm run build-functions
