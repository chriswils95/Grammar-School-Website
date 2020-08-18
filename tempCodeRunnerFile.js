
// var sql = "INSERT INTO user (username, password) VALUES ?";
//   var values = [
//     ['John', 'Highway 71'],
//     ['Peter', 'Lowstreet 4'],
//     ['Amy', 'Apple st 652'],
//     ['Hannah', 'Mountain 21'],
//     ['Michael', 'Valley 345'],
//     ['Sandy', 'Ocean blvd 2'],
//     ['Betty', 'Green Grass 1'],
//     ['Richard', 'Sky st 331'],
//     ['Susan', 'One way 98'],
//     ['Vicky', 'Yellow Garden 2'],
//     ['Ben', 'Park Lane 38'],
//     ['William', 'Central st 954'],
//     ['Chuck', 'Main Road 989'],
//     ['Viola', 'Sideway 1633']
//   ];

// var mysqlconnection = mysql.createConnection(
//     {
//         host: 'localhost',
//         user: 'root',
//         password: 'password',
//         database: 'user',
//         multipleStatements: true,
//     }
// );



//  mysqlconnection.connect((err => {
//     if(!err){
//         console.log('connection successful')
//     }else{
//         console.log(err)
//     }
// }))

// mysqlconnection.query(sql, [values], function (err, result) {
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("success")
//     }
// })

// var sql1 = "TRUNCATE TABLE user"