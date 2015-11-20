module.exports = function(grunt){

    grunt.initConfig({

        uglify: {
            production: {
                options: {
                    compress: true,
                    preserveComments: false,
                    mangle: false
                },
                files: {
                    'scripts.js' : ['_scripts/vendor/**/*.js', '_scripts/*.js']
                }
            },
            dev: {
                options: {
                    compress: false,
                    preserveComments: true,
                    sourceMap: true,
                    mangle: false
                },
                files: {
                    'scripts.js' : ['_scripts/vendor/**/*.js', '_scripts/*.js']
                }
            }
        },

        cssmin :{
            production: {
                options: {
                    keepSpecialComments: 0
                },
                files: {
                    '_site/style.css' : ['_site/style.css']
                }
            }
        },

        imagemin : {
            default: {
                files : [{
                    expand: true,
                    cwd: 'images/',
                    src: '**/*.{png,jpg,gif,svg}',
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
                tasks: ['uglify:dev']
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

    grunt.registerTask('default', ['uglify:dev', 'watch']);
    grunt.registerTask('deploy', ['uglify:production', 'cssmin']);
};