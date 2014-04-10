var logger = require('winston');

module.exports = {
    backupNow: function (instanceName, dbNames) {
//        console.log('Starting directory: ' + process.cwd());
//        try {
//            process.chdir('');
//            console.log('New directory: ' + process.cwd());
//        }
//        catch (err) {
//            console.error('chdir: ' + err);
//        }

        var exec = require('child_process').exec;
        exec(path + 'mongodump -d ' + dbNames, function (error, stdout, stderr) {
            if (error || stderr) {
                logger.error(error);
                logger.error(stderr);
            }
            logger.log(stdout);
        });
    },
    schedule: function (opts) {

    }
};