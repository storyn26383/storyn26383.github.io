build:
	yarn generate
	make cname

cname:
	echo 'sasaya.me' > ./dist/CNAME

deploy:
	git subtree push --prefix dist origin master
