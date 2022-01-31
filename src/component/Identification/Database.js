const mysql = require('mysql');

const Database = {
    signin: function(email, pass) {
        var db = new DB('select *  from `users` where `username` = "' + email + '" and `password` = "' + pass + '"');
        //db.run();
    },
    signup: function(email, pass, repass) {
        //var db = new DB("INSERT INTO users(id, username, password) VALUES( 2, '" + email + "', '" + user.password + "' )");
        //console.log(db.run());
        //callback(db.run()); // db.run()
    },
    reset: function() {

    }
}

class DB { 
    constructor(select) {
        this.select = select;
        this.test();
    }

    /*test() {
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'db'
        });
        var sql = 'TRUNCATE TABLE users';

        connection.query(sql, function (err, results) {
            if (err) console.log(err);
            connection.end;
        });

        var sql1 = `INSERT INTO users(id, username, password) VALUES(1, 'test1', 'test1')`;

        connection.query(sql1, function (err, results) {
            if (err) console.log(err);
            connection.end;
        });
    } */

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