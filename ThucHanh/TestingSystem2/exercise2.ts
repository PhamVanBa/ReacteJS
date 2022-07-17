//Template String

// Question 1:
// Tạo String có nội dung như sau:
// "Tôi tên là ???, năm nay ??? tuổi, đang ế!"
// Với 2 variable là fullName và age. Hãy tạo template String và điền vào
// tên của bạn
var fullName: string = "Pham Tieu Vien";
var age: number = 18;

var welcomeText = `Tôi tên là ${fullName} , năm nay ${age} tuổi, đang ế!`;
console.log(welcomeText);


// Question 2:
// Khai báo 2 số a = 5, b = 20. In ra câu sau:
// "Tổng của {a} và {b} là {a+b}"
var a: number = 5;
var b: number = 20;

var ab = `Tổng của ${a} và ${b} là ${a+b}`;
console.log(ab);



// Question 3:
// Sử dụng template string để in ra hình như sau
var c: string = "CHẢ GIÒ NÓN LÁ";
var d: string = "BÒ LÚC LẮC HẠT ĐIỀU";
var e: string = "CÁ TAI TƯỢNG CHIÊN XÙ";
var f: string = "CẢI THÌA SỐT THỊT CUA";
var g: string = "CƠM CHIÊN CÁ MẶN";
var h: string = "LẨU HẢI SẢN";
var i: string = "RAU CÂU";

var text = `1. ${c}
            2. ${d}
            3. ${e}
            4. ${f}
            5. ${g}
            6. ${h}
            7. ${i}`;
console.log(text);
