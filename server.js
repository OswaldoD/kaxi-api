var express = require('express'), 
    app = express(), 
    mysql = require('mysql'),
    port = process.env.PORT || 3000;
    
var connection = mysql.createConnection({
    host : '192.168.100.7',
    port : 3308, 
    user : 'root', 
    password : 'karsisgod', 
    database : 'KAXIDB', 
    multipleStatements : true
}); 

let sqlCall = `CALL GetUser(?, ?);`;

connection.connect();
connection.query('SELECT * FROM UsersLogin', function (error, results, fields) {
     if(error) throw error;
     console.log('The solution is: ', results);
 });

//connection.end();

//connection.connect();
connection.query(sqlCall, 
        ['odavila', '2CC64656EAB960C1AAA9178FF62C1DDD271C4390A7DE32F06AAC82EEB8E596A0'], 
        function (error, results, fields) {
            if(error) throw error;
            console.log('The solution is: ', results[0]);
});

connection.end();

app.listen(port);
console.log('todo list RESTFUL API Server started on: ' + port);

