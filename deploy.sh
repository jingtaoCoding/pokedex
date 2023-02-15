# Deploy this to my pi in local network
# 
# `sudo chmod 755 -R /var/www/pi/`
# `sudo chown -R jingtao:www-data /var/www/pi/`
# `sudo nginx -t`
# `sudo unlink /etc/nginx/sites-enabled/default`
# `sudo ln -s /etc/nginx/sites-available/pi /etc/nginx/sites-enabled/`
echo "Switch to branch master"
git checkout master 

echo "Building app now ... "
npm run build 

echo "Deploy files to server ..."
scp -r build/* jingtao@192.168.0.14:/var/www/pi/

echo "Done!"