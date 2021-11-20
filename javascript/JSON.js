/**
 * JSON
 * (JavaScript Object Notation)
 * Data representation Format
 * Commonly Used for APIs and Configs
 * Lightweight and Easy to read and write
 * 
 */
/**
 * JSON types
 * Strings
 * Numbers
 * Booleans: true or false
 * null: null
 * Arrays
 * Objects
 */
/**
 * Convention
 * {
 * "key":"value",
 * "name":"Kyle",
 * "isProgramer": true,
 * "hobbies":["Weight Lifting", "Bowling"],
 * }
 */

let companies=
[
{
    "name": "Big Corporation",
    "numberOfEmployees":10000,
    "ceo":"Mary",
    "rating": 3.6
},
{
    "name":"Small Startup",
    "numberOfEmployees":3,
    "ceo": null,
    "rating": 4.3

}
]
console.log(companies);
/**
 * Convert Javascript to JSON
 * JSON.stringify()
 */
var jsonObject= JSON.stringify(companies);
console.log(jsonObject);


// Convert JSON to JavaScript
//JSON.parse()
var json= `{
    "books":{
         "Name":"Harry Potter",
         "Author":"J.K.Rolling",
         "Chapter":1
    }
}`
var obj= JSON.parse(json);
console.log(obj);