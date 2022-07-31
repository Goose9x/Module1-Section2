// Bài 1: Nhập vào hai số a và b, và kiểm tra xem a có chia hết cho b hay không
// let a = Number(prompt("Nhập vào số a:"));
// let b = Number(prompt("Nhập vào số b:"));
// let c = a % b;
// if (c === 0 ){
//     alert("Số a chia hết cho số b");
// }else alert(" Số a không chia hết cho b");

// Bài 2: Nhập tuổi và in ra kết quả nếu tuổi học sinh đó không đủ điều kiện vào học lớp 10.
// let a = Number(prompt("Nhập tuổi:"));
// if (a === 15){
//     alert("Đủ tuổi");
// }else alert("Không đủ tuổi");

// Bài 3: Nhập một số nguyên bất kỳ và in kết quả ra màn hình để nói cho người dùng biết số đó là lớn hay nhỏ hơn 0
// let a= Number(promtp("Nhập số nguyên:"))
// if (Number.isInteger(a) && a > 0){
//     alert("A là số nguyên lớn hơn 0");
// }else if (Number.isInteger(a) && a < 0){
//     alert("A là số nguyên nhỏ hơn không");
// }else alert("Vui lòng nhập lại:");

// Bài 4: Nhập 3 số nguyên và tìm giá trị lớn nhất của ba số nguyên đó
// let a = Number(prompt("Nhập vào số a:"));
// let b = Number(prompt("Nhập vào số b:"));
// let c = Number(prompt("Nhập vào số c:"));
// if (Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c)){
//     alert(Math.max(a,b,c));
// }else alert("Vui lòng nhập lại");


// Bài 5: Xếp hạng học lực của học sinh dựa trên các điểm bài kiểm tra, điểm thi giữa kỳ, điểm thi cuối kỳ
// let a = Number(prompt("Nhập vào số a:"));
// let b = Number(prompt("Nhập vào số b:"));
// let c = Number(prompt("Nhập vào số c:"));
// let TB = 0.1 * a + 0.2 * b + 0.7 * c
// if ( TB <= 3.9 ){
//     alert("Kém");
// }else if ( TB >= 4 && TB <= 5.4){
//     alert("Trung bình yếu");
// }else if (TB >= 5.5 && TB <= 6.9){
//     alert("Trung bình");
// }else if (TB >= 7 && TB <= 8.4){
//     alert("Khá");
// }else if (TB >= 8.5 && TB <= 10){
//     alert("Giỏi");
// }else if ( a < 0 || b < 0 || c < 0){
//     alert("Vui lòng nhập lại số điểm");
// }else if (a > 10 || b > 10 || c > 10){
//     alert("Vui lòng nhập lại số điểm");
// }else alert("Vui lòng nhập lại số điểm");

// Bài 6: Tính hoa hồng nhận được tuỳ theo mức doanh số bán hàng
// bài này làm theo biểu thuế lũy tiến từng phần
// let a = Number(prompt("Nhập vào số tiền cần tính:"));
// if ( a > 0 && a <= 5000000){
//     alert(`Số tiền thuế là ${a * 5 /100}`);
// } else if (5000000 <= a && a < 10000000){
//     alert(`Số tiền thuế là ${(5000000 * 5 /100) +((a-5000000)* 10 /100)}`);
// } else if (10000000 <= a && a < 18000000 ){
//     alert(`Số tiền thuế là ${(5000000 * 5 /100) +(5000000* 10 /100) +(a - 10000000)*15/100}`);
// } else if (a<= 18000000){
//     alert(`Số tiền thuế là ${(5000000 * 5 /100) +(5000000* 10 /100)+(8000000*10/100)+((a-18000000)*20/100)}`);
// } else alert ('Lỗi, Vui lòng nhập lại');

// Bai 7:
// let cc = prompt("Nhap chieu cao (m)");
// let cn = prompt("Nhap can nang (kg)")
// let BMI= Number(cn)/(Number(cc)*2);
// if(BMI < 18.5){
//     alert(`you are underweight with BMI is ${BMI} `);
// }else if(18.5 <= BMI && BMI <= 24.9){
//     alert(`you are normal with BMI is ${BMI}`);
// }else if(25 <= BMI && BMI <= 29.9 ){
//     alert(`you are overweight with BMI is ${BMI}`);
// }else if(30 <= BMI && BMI <= 34.9){
//     alert(`you are obese with BMI is ${BMI} `);
// }else alert(`you are extremly obese with BMI is ${BMI} `);
