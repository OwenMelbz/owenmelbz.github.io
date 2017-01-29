module.exports = function(grunt){

    grunt.initConfig({

        uglify: {
            js: {
                options: {
                    compress: true,
                    preserveComments: false,
                    sourceMap: false,
                    mangle: true
                },
                files: {
                    'app.js' : ['_scripts/vendor/**/*.js', '_scripts/*.js']
                }
            }
        },

        cssmin :{
            css: {
                options: {
                    keepSpecialComments: 0
                },
                files: {
                    '_site/app.css' : ['_site/style.css']
                }
            }
        },

        imagemin : {
            default: {
                files : [{
                    expand: true,
                    cwd: 'images/',
                    src: '**/*.{png,jpg,gif}',
                    dest: 'images/'
                }]
            }
        },

        watch : {

            livereload: {
                options: {
                    livereload: true,
                },
                files: ['_site/**/*'],
                tasks: []
            },

            js : {
                files: ['_scripts/**/*.js'],
                tasks: ['uglify:js']
            },

            img : {
                files: ['images/**/*'],
                tasks: ['newer:imagemin']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-newer');

    grunt.registerTask('default', ['uglify:js', 'watch']);
    grunt.registerTask('deploy', ['uglify:js', 'cssmin']);
};
