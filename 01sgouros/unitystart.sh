DATE="$(date +"%Y.%b.%d_%H.%M")"
MYAPP="unity"

echo -n "1. deleting tmp files...\n"
rm -rf ~/ember/code/$MYAPP/tmp/*

echo -n "2. fetching application source from Github (git pull origin)...\n"
	cd ~/ember/code/$MYAPP
	git pull origin

echo -n "3. starting IDE...\n"
	cd ~/WebStorm-143.1184.19/bin/
	sh webstorm.sh





