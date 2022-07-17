// Parameter

// Question 1: khai báo 1 function multiply() có 2 tham số a,b. Và có b có
// default value
// Kết quả:
// multiply(5,3)  15
// multiply(5)  5
function multiply(a, b: string = "b") {
    console.log(b);
    
}

// Question 2: khai báo 1 function multiply() có tham số không giới hạn
// Kết quả:
// multiply(5)  5
// multiply(5,3)  15
// multiply(5,3,2)  30

// Question 3: khai báo 1 function printInformation() có 2 tham số name, email.
// Và có email là optional parameter
// Kết quả:
// printInformation("Nam","Namvv20@gmail.com")
//  tôi là Nam. Email của tối là Namvv20@gmail.com
// printInformation("Nam")
//  tôi là Nam. Tôi chưa có Email

function printInformation(name:string, email?:string) {

    if(email != undefined) {
        console.log("tôi là " + name + ". Email của tối là" + email);
        
    } else {
        console.log("tôi là" + name + ". Tôi chưa có Email");
        
    }
}
printInformation("Nam","Namvv20@gmail.com");
printInformation("Nam");