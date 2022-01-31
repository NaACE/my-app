const mysql = require('mysql');
//const mysql = null;

const Database = {
    signin: function (email, pass) {
        console.log(email + ' == ' + pass);
        var db = new DB('select *  from `users` where `username` = "' + email + '" and `password` = "' + pass + '"');
        db.run();
    },
    signup: function (email, pass, repass) {
        console.log(email + ' == ' + pass + ' == ' + repass);
        //var db = new DB("INSERT INTO users(id, username, password) VALUES( 2, '" + email + "', '" + user.password + "' )");
        //console.log(db.run());
        //callback(db.run()); // db.run()
    },
    reset: function (email) {
        console.log(email);
    }
}

class DB {
    constructor(select) {
        this.select = select;
    }

    run() {
        console.log('run');

        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'db'
        });

        connection.connect((err) => {
            if (err) {
                console.error('Ошибка: ' + err.message);
            } else {
                connection.query(this.select, function (err, results) {
                    console.log(results);
                    if (err) {
                        console.log(err);
                    } else {
                        return results;
                    }
                });
            }
            connection.end();
        });
    }
}

export default Database;