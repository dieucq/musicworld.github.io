//Bat dau chuong trinh Sign In
var user = [
    // {"email":"dotridung94@gmail.com", "password":"123456789"},
   ];
  
if(localStorage["user"] !== undefined){ //Kiem tra localStorage có bị trống hay không, Nếu trống thì se không gán vào array user. Làm thế này để tránh bị lỗi gắn giá trị null vào user
var user = JSON.parse(localStorage["user"]); //Gán giá trị từ localStorage vào user.
} 

var signinbutton = document.getElementById("signin");
var signoutbutton = document.getElementById("signout");
var signupbutton = document.getElementById("signup")
var x = document.getElementById("download");
var y = document.getElementById("comment");

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

  var count =0;
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
       signoutbutton.style.display = "block";
       signinbutton.style.display = "none";
       signupbutton.style.display =  "none"
     }
     else{
       alert("Sign in not sucessed");
       x.style.display = "none";
       y.style.display = "none";
       signoutbutton.style.display = "none";
     }
 }
 function signout(){
  signoutbutton.style.display = "none";
  signinbutton.style.display = "block";
  signupbutton.style.display = "block"
  x.style.display = "none";
  y.style.display = "none";
 }
//Ket thuc chuong trinh Sign In, Sign Up
///CHuong trinh download va comment sau khi Sign In
function download(){
   alert("Please wait for a moment to download file");
   
 }

function submit(){
    var submitcomment = document.getElementById("id03");
    submitcomment.style.display.none;
    alert(" Thanks for your comment");
}