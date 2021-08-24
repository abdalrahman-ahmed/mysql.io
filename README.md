# MySQL.IO
MySQL.IO is a simple module to use MySQL Databases

## Install
```bash
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
#
### INSERT
#### `Database.INSERT( table = `String` )` => `Object`
<BR>

##### Example
</BR>

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
#
### SELECT 
#### `Database.SELECT( columns = `Array` )` => `Object`
<BR>

##### Example
</BR>

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
#
### UPDATE
#### `Database.UPDATE( table = `String` )` => `Object`
<BR>

##### Example
</BR>

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
#
### DELETE
#### `Database.UPDATE( table = `String` )` => `Object`
#### `return {`WHERE`(condtions = `Object`),`EXECUT`()}`

```JavaScript
{
    WHERE: (condtions = Object) => ({ EXECUT }),
    EXECUT: () => ({ error, success, data })
}
```
</BR>

##### Example
</BR>

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