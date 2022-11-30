//Bat dau chuong trinh Sign In
var user = [
    // {"email":"dotridung94@gmail.com", "password":"123456789"},
   ];
  
if(localStorage["user"] !== undefined){ //Kiem tra localStorage có bị trống hay không, Nếu trống thì se không gán vào array user. Làm thế này để tránh bị lỗi gắn giá trị null vào user
var user = JSON.parse(localStorage["user"]); //Gán giá trị từ localStorage vào user.
} 

 function signup(){
   useremailSU = document.getElementById("useremailSU").value;
   userpwSU = document.getElementById("userpwSU").value;
   var newuser = {"email": useremailSU, "password": userpwSU};
   user.push(newuser);
   localStorage["user"] = JSON.stringify(user); //chuyen object cua array user thanh 1 chuoi sau do truyen vao localStorage co key la user
 }
 function signin(){
   useremailSI = document.getElementById("useremailSI").value;
   userpwSI = document.getElementById("userpwSI").value;
   var count =0 ;
  var x = document.getElementById("download");
  var y = document.getElementById("comment");
   for (var i=0; i<user.length; i++)
           {
               if(user[i].email == useremailSI && user[i].password == userpwSI){
                 count = 1;
               }
           };
     if (count == 1){
       alert("Sign In sucessed");
       x.style.display = "block";
       y.style.display = "block";
     }
     else{
       alert("Sign in not sucessed");
       x.style.display = "none";
       y.style.display = "none";
     }
 }
//Ket thuc chuong trinh Sign In, Sign Up
///CHuong trinh download va comment sau khi Sign In
function download(){
   alert("Please wait for a moment to download file!!!");
 }
function comment(){
   
}
function submit(){
    alert(" Cam on ban da comment!!!");
}