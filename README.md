# MySQL.IO
MySQL.IO is a simple module to use MySQL Databases

## Install
```
npm i @any.io/mysql.io
```

## Usage
```javascript
var MySQL = require('@any.io/mysql.io');

var Database = new MySQL({
    "host" : "dbHost", // String
    "user" : "dbUser", // String
    "password" : "dbPass", // String
    "database" : "dbName", // String
});
```
### INSERT
```javascript
var INTO = 'table';
var SET = {"column": 'value'};
var res = Database.INSERT(INTO).SET(SET).EXECUT();
var { error, success, data } = res;

if(!error){
    console.log('Success:', success);
    console.info('Data:', data, 'lastInsertId:', data.insertId);
}else{
    console.error('Error:', error);
}
```

### SELECT
```javascript
var FROM = 'table';
var COLOUMNS = ['*'];
var res = Database.SELECT(COLUMNS).FROM(FROM).EXECUT();
var { error, success, data } = res;

if(!error){
    console.log('Success:', success);
    console.info('Data:', data);
}else{
    console.error('Error:', error);
}
```

### UPDATE
```javascript
var TABLE = 'table';
var SET = {"column": 'value'};
var res = Database.UPDATE(TABLE).SET(SET).EXECUT();
var { error, success, data } = res;

if(!error){
    console.log('Success:', success);
    console.info('Data:', data, 'changedRows:', data.changedRows);
}else{
    console.error('Error:', error);
}
```

### DELETE
```javascript
var TABLE = 'table';
var WHERE = {"column": 'value'};
var res = Database.DELETE(TABLE).WHERE(SET).EXECUT();
var { error, success, data } = res;

if(!error){
    console.log('Success:', success);
    console.info('Data:', data, 'changedRows:', data.changedRows);
}else{
    console.error('Error:', error);
}
```