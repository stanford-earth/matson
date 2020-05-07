# Matson

Matson is a custom Stanford theme for Stanford Earth. 

## Developing with Matson

To get started developing in this theme, make sure npm is installed and you've run 'npm install' in this theme directory.

Run 'grunt' to make sure gulp is installed and available.

Run 'grunt devmode' to watch files, process scss to css and perform other tasks.

### Adding new files
If you add a partial "\_newfile.scss" 
inside scss/components folder, it will be included automatically.

Remember that each new scss file to be processed needs to be added specifically to the gruntfile at the root of the theme folder.

## Troubleshooting Problems

If you get an error like this (possibly on a linux machine):
Fatal error: watch /your/directories/Earth/se3_blt/docroot/themes/stanford/matson/css ENOSPC
It is running out of space or thinks it is.

Try running:
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

The system has a limit to how many files can be watched by a user. You can run out of 
watches pretty quickly if you have Grunt running with other programs like Dropbox. This
command increases the maximum amount of watches a user can have.
