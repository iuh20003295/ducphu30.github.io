
function checkname() {
    var name = document.getElementById("txtname").value;
    var er1 = document.getElementById("er1");
    pt1 = /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/;
    if(name.trim() == "") {
        er1.innerHTML = "Bắt buộc nhập";
        return false;
    }
    if(!pt1.test(name)) {
        er1.innerHTML = "Họ và tên phải viết hoa đầu mỗi từ";
    }
    else {
        er1.innerHTML = "";
        return true;
    }
}

function checkuser() {
    var user = document.getElementById("txtuser").value;
    var er2 = document.getElementById("er2");
    pt2 = /^[A-Za-z0-9\._@]{6,32}$/;

    if(user.trim() == "") {
        er2.innerHTML = "Bắt buộc nhập";
        return false;
    }
    if(!pt2.test(user)) {
        er2.innerHTML = "Tên đăng nhập từ 6-32 ký tự, không bao gồm ký tự đặc biệt";
    }
    else {
        er2.innerHTML = "";
        return true;
    }
}

function checkpass() {
    var pass = document.getElementById("tpass").value;
    var er3 = document.getElementById("er3");
    pt3 = /^[A-Z]([A-Za-z0-9]).{6,32}$/;

    if(pass.trim() == "") {
        er3.innerHTML = "Bắt buộc nhập";
        return false;
    }
    if(!pt3.test(pass)) {
        er3.innerHTML = "Mật khẩu từ 6-32 ký tự, chữ cái đầu tiên viết hoa";
    }
    else {
        er3.innerHTML = "";
        return true;
    }
}

function checkrepass() {
    var pass = document.getElementById("tpass").value
    var repass = document.getElementById("trepass").value;
    var er4 = document.getElementById("er4");
    
    if(repass.trim() == "") {
        er4.innerHTML = "Bắt buộc nhập";
        return false;
    }
    if(pass != repass) {
        er4.innerHTML = "Nhập lại phải khớp với mật khẩu";
    }
    else {
        er4.innerHTML = "";
        return true;
    }
}

function checkmail() {
    var mail = document.getElementById("txtmail").value;
    var er5 = document.getElementById("er5");
    pt5 = /^[A-Za-z0-9\._]{6,24}(@[a-z]+)(\.[a-z]+)$/;

    if(mail.trim() == "") {
        er5.innerHTML = "Bắt buộc nhập";
        return false;
    }
    if(!pt5.test(mail)) {
        er5.innerHTML = "Mail phải đúng định dạng. Vd: ducphu@gmail.com";
        return false;
    }
    else {
        er5.innerHTML = "";
        return true;
    }
}

function checkphone() {
    var phone = document.getElementById("txtphone").value;
    var er6 = document.getElementById("er6");
    pt6 = /^[0-9]{10}$/;

    if(phone.trim() == "") {
        er6.innerHTML = "Bắt buộc nhập";
        return false;
    }
    if(!pt6.test(phone)) {
        er6.innerHTML = "Số điện thoại gồm 10 số";
        return false;
    }
    else {
        er6.innerHTML = "";
        return true;
    }
}

// click form
var i = 1; 
$(document).ready(function() {
    $("#btn-regis").click(function() {
        if(!checkname() || !checkuser() || !checkpass() || !checkrepass() || !checkmail() || !checkphone()) {
            $('#notifi').html("Mời bạn nhập đúng và đầy đủ thông tin");
            return false;
        }
        else {
            var name = $('#txtname').val();
            var user = $('#txtuser').val();
            var pass = $('#tpass').val();
            var repass = $('#txtre').val();
            var mail = $('#txtmail').val();
            var phone = $('#txtphone').val();

            var add = "<tr><td>"+ (i++) +"</td><td>" + name + "</td><td>" + user + "</td><td>" + pass + "</td><td>" + mail + "</td><td>" + phone + "</td><tr>";
            $("table tbody").append(add);
            return true; 
        }
    })
});
