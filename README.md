## Gulp Starter

Contains initial project structure and configuration files of gulp task manager to automate routine optimization tasks.

### Folder structure

- `src` folder contains the source project files which are the input files for the gulp plugins
- `build` folder contains the optimized deployment files

### Gulp plugins

- Sass (gulp-sass)
- CSS Minification (gulp-cssnano)
- Autoprefixer (gulp-autoprefixer)
- File Concatination (gulp-concat)
- JavaScript Minification (gulp-uglify)
- JavaScript Quality Tool (gulp-jshint)
- Image Optimization (gulp-imagemin)
- Source Map (gulp-sourcemaps)
- Fix pipe breaking (gulp-plumber)
- Delete files/folders (del)
- Run tasks in sequence (run-sequence)
- Browser synchronization (browser-sync)

## How to start

1. Install Node.js and npm (tested on Node.js 6.0.0 & npm 3.8.6)
2. Clone this repo or download zipped project
3. Open Terminal and go to the project folder
3. Run `npm install` to install required dependences
4. Now you are able to use all gulp tasks listed in `gulpfile.js`