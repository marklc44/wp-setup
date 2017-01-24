# Insert into wp-config.php on line 88

    define('WP_CONTENT_DIR', dirname(__FILE__) . '/wp-content');
    define('WP_CONTENT_URL', 'http://<HOSTNAME>/<ROOT_DIR>/wp-content');

# Enter basic mysql command prompt
## set in .bash_profile
    start_local_mysql
    ='/Applications/MAMP/Library/bin/mysql --host=localhost -uroot -proot'

    create database db_name;
    show databases;
    use db_name;

# Update home in wp_options
    update wp_options
      -> set option_value='<ROOT_DOMAIN>'
      -> where option_name='home';

# Create dev folder, scss folder, js folder
    mkdir dev
    mkdir dev/scss
    mkdir dev/js

# NPM install
    npm install

# Create Child Theme and Plugins
  - rsync to external themes dir
  - rsync to external plugins dir`

# Free Plugins List
  - advanced-custom-fields-pro
  - cms-tree-page-view
  - leadin
  - ninja-forms
  - wordpress-seo
  - wp-native-php-sessions






