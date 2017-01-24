# Setup a Basic WordPress Local Dev
This is a basic local dev site setup that I'm refining as I go.

  1. `composer install`
  2. move `index.php` from `wp/` to the root and change the `wp-blog-header.php` path
  3. move wp-content from `wp/` to the root and update `wp-config.php` with the defintions below
  4. create the db (command line instructions below)
  5. install WordPress with the GUI steps
  6. change the home url value from the wp directory to root (command line instructions below)
  7. npm install node_modules for gulp
  8. create the `dev/` directory to your liking for editing theme css and js
  9. add your theme and child theme
  10. add plugins to composer.json as needed and run `composer update`
  11. `git init`, etc.

# Insert into wp-config.php on line 88

    define('WP_CONTENT_DIR', dirname(__FILE__) . '/wp-content');
    define('WP_CONTENT_URL', 'http://<HOSTNAME>/<ROOT_DIR>/wp-content');

# Enter basic mysql command prompt
Set command prompt alias in .bash_profile. Create and move to the db to edit.

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






