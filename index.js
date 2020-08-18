


let express = require('express'),
    ejs = require('ejs'),
    encode = require( 'hashcode' ).hashCode,
    bodyParser = require('body-parser'),
    winston = require('winston');
const { exitOnError } = require('winston');
    mysql = require('mysql');

    const fs = require('fs'); 
const { join } = require('path');







// fs.readFile('/Users/christopherwilson/Desktop/PSDTOHTML/views/class_template.ejs', function (err, data) {
//   if (err) {
//         return console.error(err);
//     }
//      console.log("Asynchronous read: " + data.toString());
//      fs.writeFile('Output.txt', data.toString(), (err) => { 
      
//             // In case of a error throw err. 
//             if (err) throw err; 
//         })
//  });
  
// // Data which will write in a file. 
// let data = "Learning how to write in a file."
  
// // Write data in 'Output.txt' . 
// fs.writeFile('Output.txt', data, (err) => { 
      
//     // In case of a error throw err. 
//     if (err) throw err; 
// })




    const logger = winston.createLogger({
        level: 'info',
        format: winston.format.json(),
        defaultMeta: { service: 'user-service' },
        transports: [
          //
          // - Write all logs with level `error` and below to `error.log`
          // - Write all logs with level `info` and below to `combined.log`
          //
          new winston.transports.File({ filename: 'error.log', level: 'error' }),
          new winston.transports.File({ filename: 'combined.log' }),
        ],
      });

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

global.current_type = ""

global.values = 4

global.create_bool = false
global.create_footer = false
global.footer = ""
global.instructor_name = ""

function getFooter(){
    fs.readFile('views/Partials/Footer/footer.ejs', function (err, data) {
        if (err) {
              return console.error(err);
          }
           
          footer = data.toString();
});

}


getFooter();

app.use(function(req, res, next){
    res.locals.ejs = ejs;
    res.locals.type = current_type;
    res.locals.user_course_list = course_list;
    res.locals.announcement = course_announcement;
    res.locals.fs = fs;
    res.locals.val = 3;
    next();
 });


global.course_list = [];
global.current_user_id = "";
global.course_announcement = [];
global.current_course_name = "";
global.teachers = [];
global.classes = [];


// var sql = "INSERT INTO Student (student_id, first_name,middle_name, last_name," +
//     "street_address, city, town, course_id) VALUES ?";
//   var values = [
//     ['cw2636', 'Isatu1997']
//   ]
  


var mysqlconnection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'user',
        multipleStatements: true,
    }
);



 mysqlconnection.connect((err => {
    if(!err){
        console.log('connection successful')
    }else{
        console.log(err)
    }
}))

// mysqlconnection.query(sql, [values], function (err, result) {
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("success")
//     }
// })

// var sql1 = "TRUNCATE TABLE user"

// mysqlconnection.query(sql1, function (err, result) {
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("success")
//     }
// })





async function findUserInDb(username, password, res){

    var sql = "SELECT username, password FROM user WHERE username= ?, password= ?";
    var user = ""
    conn = mysqlconnection.query(sql, [username, password],async function (err, result) {
        if (err) {
            console.log(err);
            res.json({ message: 'error' })
        }
        else {
             console.log(result.length)
             if(result.length == 0){
                res.json({ message:  'error'})
            }
                Object.keys(result).forEach(function (key) {
                var row =   result[key];
                pass = row.password
                console.log(pass)
                if(pass != undefined){
                 res.json({ message:  pass})
                }
                else {
                    res.json({ message:  'error'})
                }
            });
        }
    })
 }


// JOIN
//  var sql = "SELECT user.user_id AS user, student_classes.course_id AS course_id FROM user JOIN student_classes ON user.user_id = student_classes.user_id";

//   mysqlconnection.query(sql, function (err, result) {
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(result)
//         console.log("successful class register");
//     }
//  })


//  var sql = "INSERT INTO student_classes(user_id, course_id) VALUES ?";
//  var values = [
//     [-2241225172, 1],
//     [-2241225172, 2],
//     [-2241225172, 3]
//  ]

//  mysqlconnection.query(sql, [values], function (err, result) {
//    if(err){
//        console.log(err)
//    }
//    else{
//        console.log("successful class register");
//    }
// })


// var sql = "INSERT INTO Classes(course_id, teacher_id, course_name, course_level, day_taught, time_taught, location) VALUES ?";
// var values = [
//    [1, 1, 'Math', 'JSS', 'MWF', '1pm-2m', 'clyd'],
//    [2, 1, 'Css', 'JSS', 'MWF', '1pm-2m', 'clyd'],
//    [3, 1, 'Science', 'JSS', 'MWF', '1pm-2m', 'clyd'],
//    [4, 1, 'Economics', 'JSS', 'MWF', '1pm-2m', 'clyd'],
//    [5, 1, 'Geography', 'JSS', 'MWF', '1pm-2m', 'clyd'],
//    [6, 1, 'Physics', 'JSS', 'MWF', '1pm-2m', 'clyd'],

// ]

// mysqlconnection.query(sql, [values], function (err, result) {
//   if(err){
//       console.log(err)
//   }
//   else{
//       console.log("successful classes");
//   }
// })


// var sql = "INSERT INTO Teacher(course_id, teacher_id, first_name, middle_name, last_name, Street_address, city, town, username, password, email) VALUES (?);";
// var values = [
//     '2', '47', 'james', 'john', 'wilson', 'sdsddsd', 'dsdsdssd', 'dsdsdsds' , 'j123', 'jumboblah', 'james@email'
//     ];
//     mysqlconnection.query(sql, [values], function (err, result) {
    
//     if(err){
//         console.log(err);
//     } else {
//      console.log("successful user register");
//     }
//     });




function insert_user(body, res, req){
    var user_id = encode().value(body.username);
    var sql = "INSERT INTO user(user_id, username, password) VALUES (?);";
    var values = [
        user_id,
        body.username,
        body.password,
    ];
    mysqlconnection.query(sql, [values], function (err, result) {
    
    if(err){
        console.log(err);
        res.redirect('back');
    } else {
     console.log("successful user register");
     res.redirect('/student_center' + user_id)
    }
    });
}




 function insert_student(body,res, req){
  var sql = "INSERT INTO Student(Student_id, first_name, middle_name, last_name, Street_address, city, town, username, password, email) VALUES (?);";
  var values = [
      body.studentID, body.first_name, body.middle_name, body.last_name,
      body.street_address, body.city, body.town, body.username, body.password, 
      body.email
  ]

  mysqlconnection.query(sql, [values], function (err, result) {
    if(err){
        console.log(err)
        res.redirect('back');
    }
    else{
        console.log("successful student register");
        insert_user(body, res, req);
    }
})
 }

 function check_id(body, res,req) { 
    var sql = "SELECT * from ID where id=? AND first_name= ? AND last_name= ?;";
    mysqlconnection.query(sql, [body.studentID, body.first_name, body.last_name], function (err, result) {
        console.log(result);
        if(err){
            console.log(err);
            res.redirect('back');
        }
        else if(result.length == 0){
            console.log('id not in database');
            res.redirect('back');
        }
        else {
               console.log('id in database');
               insert_student(body, res, req);
        }
    });
 }



 function findStudentWithId(res, user_id){
    var sql = "SELECT * FROM user WHERE user_id= ?;";
    mysqlconnection.query(sql, [username, password], function (err, result) {
        if(err){
            console.log(err);
            res.redirect('back');
        }else {
            var string = JSON.stringify(result);
            var json =  JSON.parse(string);
            var username = json[0].username;
            sql = "SELECT * FROM Student WHERE username= ?;";
            mysqlconnection.query(sql, [username], function (err, st_result) {
             if(err){
                 console.log(err);
             }
             else {
                var string = JSON.stringify(result);
                var json =  JSON.parse(string);
                console.log('find student with id');
             }
            });

        }
    });


 }


 function multiple_statment(length, table, row){
     var sql = "";
     for (var i = 0; i < length; i++){
        if(i < 3-1) {
        sql += "SELECT * FROM " + table+" WHERE " +row+ "= ?; ";
        }else {
            sql += "SELECT * FROM " + table+" WHERE " +row+ "= ?";
        }
      }

      return sql;
 }


 async function findUser(username, password, res){

    var sql = "SELECT * FROM user WHERE username= ? AND password= ?;";
    conn = mysqlconnection.query(sql, [username, password], async function (err, result) {
        if (err) {
            console.log(err);
            logger.log(
              {
                 level:'error',
                  message: 'database error'
                }
            )
            res.redirect('back')

        }
        else {

             if(result.length == 0){
                logger.log(
                {
                 level:'error',
                  message: 'user not in database'
               })
               res.redirect('back')
            }
            else {
                logger.log({
                    level: 'info',
                    message: 'user in database'
                  })
                  var string = JSON.stringify(result);
                  var json =  JSON.parse(string);
                  current_type = json[0].type
                  res.redirect('/student_center' + json[0].user_id);
                }

        }
    })
 }


app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");



app.get('/', (req, res) => {
    res.render('index');
});

app.get('/login', (req, res) => {
    res.render('sign_in')
})

app.get('/message_center', (req, res) => {
    res.render('message_center')
})

app.get('/logout', (req, res) =>{
    res.redirect('/')
})

app.get('/signup', (req,res) => {
  res.render('sign_up')
})

app.post('/signup', (req,res) => {
    check_id(req.body, res, req)
  })


app.get('/student_center:id',(req, res) => {
    var sql = "SELECT * FROM student_classes WHERE user_id= ?;";
    var arr_of_arr = [[]];

   var arr_of_classes = [];
   var arr_of_teachers = [];
   var arr_of_courses = [];
   var temp = [];
   var temp1 = [];

    mysqlconnection.query(sql, [req.params.id], async function (err, result) {
        if(err){
            console.log(err);
            res.redirect('back');
        }
        else {
            // if(result.length > 0) {}
            var string = JSON.stringify(result);
            var json =  JSON.parse(string);
            var arr_of_course_id = [];
            arr_of_arr.length = 0;
            for (var i = 0; i < result.length; i++){
                arr_of_course_id = [];
                
                arr_of_course_id.push(json[i].course_id);
                arr_of_arr.push(arr_of_course_id)

            }
            
            var sql = multiple_statment(arr_of_arr.length, "Classes", "course_id");
            mysqlconnection.query(sql, arr_of_arr, async function (err, result) {
            var d_teachers = [[]];
            d_teachers.length = 0;
            if(err){
                console.log(err);
            }
            else {
             var string = JSON.stringify(result);
             var json =  JSON.parse(string);
             for (var i = 0; i < json.length; i++){
                 temp = [];
                 arr_of_classes.push(json[i][0]);
                 temp.push(json[i][0].teacher_id);
                 d_teachers.push(temp);
             }

             course_list = arr_of_classes;
             var sql = multiple_statment(arr_of_arr.length, "Teacher", "teacher_id");
             mysqlconnection.query(sql, d_teachers, async function (err, result) {
              if(err){
                  console.log(err);
              }
              else {
                 
                 var string = JSON.stringify(result);
                 var json =  JSON.parse(string);
                 for (var i = 0; i < json.length; i++){
                     arr_of_teachers.push(json[i][0]);
                 }  
                 console.log("successful user data retrieve");
                 current_user_id = req.params.id;
                 teachers = arr_of_teachers
                 classes = arr_of_classes
                 res.render('student_centers', {user_id: req.params.id, classes: arr_of_classes, teachers: arr_of_teachers});     
              }
             });             
            }
            });

            }
    });
})

app.get('/learning_center:id', (req, res) => {
    console.log("console");
    res.render('learning_center');
})

app.post('/login', (req, res) => {
    username = req.body.username
    password = req.body.password
    findUser(username, password, res)
})


app.get('/class_link:id', (req,res) =>{
  res.render(req.params.id, {user_id: current_user_id});
})


/* 
 Wtriting to a class with the provided class name
 syntax id: directory-filename-data
*/
app.get('write_to_class:id', (req, res) => {

})

function checkIndex() {
    var temp = current_course_name.split("-")
    console.log(temp[0])
    for (var i = 0; i < classes.length; i++){
        if(classes[i].course_name == temp[0]){
            return i;
        }
    }
}

app.get('/basic:id', (req, res) => {
    current_course_name = req.params.id;
    course_announcement.length = 0;
    console.log(req.params.id)
    var sql = "SELECT * FROM announcements WHERE username= ? AND course= ?;";
    console.log(classes)
    var index = checkIndex()
    console.log(index)
    console.log(teachers)
    var teacher_name = teachers[index].last_name + " " + teachers[index].middle_name + " " + teachers[index].first_name;
    mysqlconnection.query(sql, [teacher_name, current_course_name], async function (err, result) {     
        if(err){
            console.log(err);
            res.redirect('back')
        }
        else {
           if(result.length == 0){
               logger.log(
               {
                level:'error',
                 message: 'user not in database'
              })
              res.render('Classes/' + req.params.id + '.ejs')
            }
           else {
               logger.log({
                   level: 'info',
                   message: 'user in database'
                 })
                 var string = JSON.stringify(result);
                 var json =  JSON.parse(string);
                 for (var i = 0; i < result.length; i++){
                   var temp = {title: String,
                    username: String,
                   message: String,
                   date: String,
                   time: String
                   }

                   temp.title = json[i].title;
                   temp.username = json[i].username;
                   temp.message = json[i].message;
                   temp.date = json[i].date;
                   temp.time =json[i].time;
                   course_announcement.push(temp)
                 }
                 console.log(course_announcement)
                 res.render('Classes/' + req.params.id + '.ejs')
                }
            }
        })
})

app.post('/SLGS_APP',async (req, res) => {
    username = req.body.username
    password = req.body.password
    findUserInDb(username, password, res)
})


app.post('/announcement', (req, res) =>{
    console.log(req.body);

})


app.get('/add_announcement', (req, res) =>{
     var sql = "SELECT * FROM announcements WHERE id= ? AND course= ?;";
     course_announcement.length = 0;
     mysqlconnection.query(sql, [current_user_id, current_course_name], async function (err, result) {     
         if(err){
             console.log(err);
             res.redirect('back')
         }
         else {
            if(result.length == 0){
                logger.log(
                {
                 level:'error',
                  message: 'user not in database'
               })
               res.redirect('back')
            }
            else {
                logger.log({
                    level: 'info',
                    message: 'user in database'
                  })
                  var string = JSON.stringify(result);
                  var json =  JSON.parse(string);
                  for (var i = 0; i < result.length; i++){
                    var temp = {title: String,
                    username: String,
                    message: String,
                    date: String,
                    time: String
                    }

                    temp.title = json[i].title;
                    temp.username = json[i].username;
                    temp.message = json[i].message;
                    temp.date = json[i].date;
                    temp.time =json[i].time;
                    course_announcement.push(temp)
                  }
                  console.log(temp)
                  res.redirect('back');
                }
         }
     })


})


app.post('/add_announcement', (req, res) =>{
    console.log(req.body);
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(date)
    console.log(time)
    console.log(classes)
    var index = checkIndex()
    var teacher_name = teachers[index].last_name + " " + teachers[index].middle_name + " " + teachers[index].first_name;
    var sql = "INSERT INTO announcements(username, title, message, date, time, course) VALUES (?);";
    var values = [
        teacher_name, req.body.title, req.body.message, date, time, current_course_name
    ]
  
    mysqlconnection.query(sql, [values], function (err, result) {
      if(err){
          console.log(err)
          res.redirect('back');
      }
      else{
           res.redirect('/add_announcement');
      }
    })
})




app.get('/create_quiz:id', (req, res) => {
    res.render('create_page');
})


app.post('/learning_center', (req, res) => {
    res.render('sign_in')
})
app.post('/create_quiz',async (req, res) => {
    var body = req.body.body;



await fs.readFile('views/Partials/Header/question_header.ejs', function (err, data) {
        if (err) {
              return console.error(err);
          }
           
          fs.appendFile('views/Assignments/temp.ejs', data.toString() + "\n" + body + footer, (err) => { 
                  // In case of a error throw err. 
                  if (err) throw err; 
                  res.redirect("/create_quiz");
              })
    });
    
})


const port = process.env.PORT || 8012;
app.listen(port, () => console.log('listening on ' + port));





