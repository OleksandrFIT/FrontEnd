var user= {}

user.name= "ПИЛИП";

user.lastname= "ШЕВЧЕНКО"

for(var key in user){
    console.log(key + " Value: " + user[key]);
}


//rename
user.name= "СЕРГІЙ";
console.log("================Renaming...================");

for(var key in user){
    console.log(key + " Value: " + user[key]);
}




delete user.name;
console.log("================Deleting...================");


for(var key in user){
    console.log(key + " Value: " + user[key]);
}