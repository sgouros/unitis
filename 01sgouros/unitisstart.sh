DATE="$(date +"%Y.%b.%d_%H.%M")"
MYAPP="unitis"

echo -n "1. deleting tmp files...\n"
rm -rf ~/ember/code/$MYAPP/tmp/*

echo -n "2. fetching application source from Github (git pull origin)...\n"
	cd ~/ember/code/$MYAPP
	git pull origin

echo -n "3. starting IDE...\n"
	atom --dev
