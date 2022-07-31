// lý thuyết
// 1
// 1.1 var let const trong jvsc dùng để khai báo biến
// 



// Bài tập
// 1.
// let a = prompt('nhập số vào đây:');
// if (a > 0 && a < 4.5){
//     alert("Lower half of 9")
// }else if (a > 4.5 && a < 9){
//     alert("Higher half of 9")
// }else alert("No included");

// 2.
// let n = Number(prompt("nhập số n:"));
// let x = Number(prompt("nhập số x:"));
// if (0 >= n && n > (x/2)){
//     alert(`${n} thuộc nửa bé của ${x}`)
// }else if ((x/2) < n && n <= x){
//     alert(`${n} thuộc nửa lớn của ${x}`)
// }else alert(`Không thuộc khoảng nào cả`);

// 3. nhap x va check xem la chan hay le
// let x = prompt("nhap số cần kiểm tra:");
// let chia = x % 2;
// if (chia === 0){
//     alert(`${x} là số chẵn`);"
// }else alert(`${x} là số lẻ`);

// 4. Tính chỉ số BMI
// let cn = Number(prompt("nhập số cân nặng (kg)"));
// let cc = Number(prompt("nhập chiều cao (cm)"));
// cc = cc / 100
// let BMI = cn /(cc * cc);
// if (BMI < 16){
//     alert("Mày là bộ xương à");
// }else if (16 <= BMI && BMI < 18.5){
//     alert("Mày là idol hàn quốc à");
// }else if (18.5 <= BMI && BMI <25){
//     alert("Mày đẹp zai đấy");
// }else if (25 <= BMI && BMI < 30){
//     alert("Mày phải giảm cân cấp tốc đi");
// }else alert("Thôi ông không cần giảm nữa đâu");

// 5. Viết một đoạn mã cho phép người dùng nhập vào điểm của 5 môn học Toán, Lý, Hoá, Văn, Anh
// Tính % Tổng điểm các môn trung bình cộng lại và so sánh với bảng bên dưới
// Sau đó in ra cho người dùng xếp hạng của mình

// let a = Number(prompt("Nhập điểm Toán:"));
// let b = Number(prompt("Nhập điểm Lý:"));
// let c = Number(prompt("Nhập điểm Hóa:"));
// let d = Number(prompt("Nhập điểm Văn:"));
// let e = Number(prompt("Nhập điểm Anh:"));
// let tong = a + b + c + d + e;
// let tb = tong/5
// let kiemtra = tb/10*100
// if (kiemtra >= 90){
//     alert("Grade A");
// }else if (kiemtra >= 80){
//     alert("Grade B");
// }else if (kiemtra >= 70){
//     alert("Grade C");
// }else if (kiemtra >= 60){
//     alert("Grade D");
// }else if (kiemtra >=40){
//     alert("Grade E");
// }else alert("Grade F");


// 6. Viết một đoạn mã cho phép người dùng nhập vào một năm bất kỳ.
// Kiểm tra xem năm người dùng nhập vào có hợp lệ hay không
// Sau khi đã hợp lệ thì kiểm tra xem năm đó có phải là năm nhuận hay không 
// let a = Number(prompt("Nhập năm:"));
// let nn = a % 4;
// if ( a > 0 && Number.isInteger(a) && nn === 0){
//     alert(" Năm đó là năm nhuận");
// }else if ( a > 0 && Number.isInteger(a) && nn !== 0){
//     alert(" Năm đó là năm không nhuận")
// }else alert(" năm không xác đinh, vui lòng nhập lại");

// 7.Viết một đoạn mã cho phép người dùng nhập vào chiều cao của người đó ở cm.
// let a = Number(prompt("Nhập chiều cao (cm)"));
// if (a < 150){
//     alert("Mày là người lùn à");
// }else if (150 <= a && a > 169){
//     alert("Trông mày cũng tàm tạm. Cho 3 điểm");
// }else alert("Mày trông cũng được đấy");

// 8.Viết một đoạn mã cho phép người dùng nhập vào 2 số a và b. 
// Tiến hành kiểm tra xem số nào lớn hơn và in số đó ra màn hình console.
// let a = Number(prompt("Nhập số a:"));
// let b = Number(prompt("Nhập số b:"));
// if (a > b) {
//     alert("Số a lớn hơn số b");
// }else if (a = b){
//     alert("Số a bằng số b")
// }else alert("Số b lớn hơn số a");
// 9. Viết một đoạn mã cho phép người dùng nhập vào 2 số a và b và nhập vào phép tính toán (+, -, *, /,%,**)
// Sử dụng Switch-case mô phỏng lại chức năng của một máy tính cầm tay đơn giản 
// và sau đó in kết quả ra màn hình console

// let a = Number(prompt("nhập vào số a:"));
// let b = Number(prompt("nhập vào số b:"));
// let c = prompt("phép tính cần tính");
// switch(c){
//     case "+":
//         alert (a + b);
//         break;
//     case "-":    
//         alert (a - b);
//         break;
//     case "*":
//         alert (a * b);
//         break;
//     case "/":
//         alert(a / b);
//         break;
//     case "%":
//         alert(a % b);
//         break;
// }
// 10. Viết một đoạn mã cho phép người dùng nhập vào 3 số a, b và c. 
// Tiến hành kiểm tra xem số nào là max và số nào là min

// let a = prompt("Nhập biến a");
// let b = prompt("Nhập biến b");
// let c = prompt("Nhập biến c");
// alert(Math.max(Number(a), Number(b), Number(c)));

// 11. Viết một đoạn mã cho phép người dùng nhập vào một số. 
// Tiến hành kiểm tra xem số đó có phải là số chính phương hay không. 
// (Số chính phương là số có căn bậc 2 là một số nguyên)

// let a = Number(prompt("Nhập vào số cần kiểm tra:"));
// let b = Math.pow(a, 1/2);
// if (Number.isInteger(b)){
//     alert("Đây là số chính phương");
// }else alert("Đây không phải là số chính phương");

// 12. Viết đoạn mã nhập đại lượng ngày sinh
// Từ đó tra ra chòm sao (dùng switch case)
let a = Number(prompt("Nhập ngày sinh:"));
let b = Number(prompt("Nhập tháng sinh:"));
switch (b) {
    case 1:
        switch(a){
            case 1:case 2:case 3:case 4:case 5:case 6:case 7:
            case 8:case 9:case 10:case 11:case 12:case 13:
            case 14:case 15:case 16:case 17:case 18: case 19:
                alert("Ma kết");
                break;
            case 20:case 21: case 22: case 23: case 24: case 25:
            case 26: case 27: case 28: case 29: case 30: case 31:
                alert("Bảo Bình");
                break;
        }
    break;
    case 2:    
        switch(a){
            case 1:case 2:case 3:case 4:case 5:case 6:case 7:
            case 8:case 9:case 10:case 11:case 12:case 13:
            case 14:case 15:case 16:case 17:case 18:
                alert("Bảo Bình");
                break;
            case 20:case 21: case 22: case 23: case 24: case 25:
            case 26: case 27: case 28: case 29: case 19:
                alert("Song Ngư");
                break;
        }
    break;
    case 3:
        switch (a){
            case 1:case 2:case 3:case 4:case 5:case 6:case 7:
            case 8:case 9:case 10:case 11:case 12:case 13:
            case 14:case 15:case 16:case 17:case 18: case 19: case 20:
                alert("Song Ngư:");
                break;
            case 21: case 22: case 23: case 24: case 25:
            case 26: case 27: case 28: case 29: case 30: case 31:
                alert("Bạch Dương");
                break;
         }        
    break;
    case 4:
        switch (a){
            case 1:case 2:case 3:case 4:case 5:case 6:case 7:
            case 8:case 9:case 10:case 11:case 12:case 13:
            case 14:case 15:case 16:case 17:case 18: case 19:
                alert("Bạch Dương");
                break;
            case 21: case 22: case 23: case 24: case 25:
            case 26: case 27: case 28: case 29: case 30: case 20:
                alert("Kim Ngưu");
                break;
        }
    break;
    case 5:
        switch (a){
            case 1:case 2:case 3:case 4:case 5:case 6:case 7:
            case 8:case 9:case 10:case 11:case 12:case 13:
            case 14:case 15:case 16:case 17:case 18: case 19: case 20:
                alert("Kim Ngưu:");
                break;
            case 21: case 22: case 23: case 24: case 25:
            case 26: case 27: case 28: case 29: case 30: case 31:
                alert("Song Tử");
                break;
        }
    break;
    case 6:
        switch (a){
            case 1:case 2:case 3:case 4:case 5:case 6:case 7:
            case 8:case 9:case 10:case 11:case 12:case 13:
            case 14:case 15:case 16:case 17:case 18: case 19: case 20: case 21:
                alert("Song Tử:");
                break;
            case 22: case 23: case 24: case 25:
            case 26: case 27: case 28: case 29: case 30: 
                alert("Cự Giải:");
                break;
        }
    break;
    case 7:
        switch (a){
            case 1:case 2:case 3:case 4:case 5:case 6:case 7:
            case 8:case 9:case 10:case 11:case 12:case 13:
            case 14:case 15:case 16:case 17:case 18: case 19: case 20: case 21: case 22:
                alert("Cự Giải:");
                break;
            case 23: case 24: case 25: case 31:
            case 26: case 27: case 28: case 29: case 30: 
                alert("Sư Tử:");
                break;
        }      
    break;
    case 8:
        switch (a){
            case 1:case 2:case 3:case 4:case 5:case 6:case 7:
            case 8:case 9:case 10:case 11:case 12:case 13: case 23:
            case 14:case 15:case 16:case 17:case 18: case 19: case 20: case 21: case 22:
                alert("Sư Tử:");
                break;
            case 23: case 24: case 25: case 31:
            case 26: case 27: case 28: case 29: case 30: 
                alert("Xử Nữ:");
                break;
        }      
    break;
    case 9:
        switch (a){
            case 1:case 2:case 3:case 4:case 5:case 6:case 7:
            case 8:case 9:case 10:case 11:case 12:case 13:
            case 14:case 15:case 16:case 17:case 18: case 19: case 20: case 21: case 22:
                alert("Xử Nữ:");
                break;
            case 23: case 24: case 25: case 31:
            case 26: case 27: case 28: case 29: case 30: 
                alert("Thiên Bình:");
                break;
        }      
    break;
    case 10:
        switch (a){
            case 1:case 2:case 3:case 4:case 5:case 6:case 7:
            case 8:case 9:case 10:case 11:case 12:case 13: case 23:
            case 14:case 15:case 16:case 17:case 18: case 19: case 20: case 21: case 22:
                alert("Thiên Bình:");
                break;
            case 24: case 25: case 31:
            case 26: case 27: case 28: case 29: case 30: 
                alert("Bò Cạp");
                break;
        }      
    break;
    case 11:
        switch (a){
            case 1:case 2:case 3:case 4:case 5:case 6:case 7:
            case 8:case 9:case 10:case 11:case 12:case 13: case 23:
            case 14:case 15:case 16:case 17:case 18: case 19: case 20: case 21:
                alert("Bò Cạp:");
                break;
            case 22: case 23: case 24: case 25: 
            case 26: case 27: case 28: case 29: case 30: 
                alert("Nhân Mã");
                break;
        }      
    break;
    case 12:
        switch (a){
            case 1:case 2:case 3:case 4:case 5:case 6:case 7:
            case 8:case 9:case 10:case 11:case 12:case 13: case 23:
            case 14:case 15:case 16:case 17:case 18: case 19: case 20: case 21:
                alert("Nhân Mã:");
                break;
            case 22: case 23: case 24: case 25: 
            case 26: case 27: case 28: case 29: case 30: case 31:
                alert("Ma Kết");
                break;
        }      
    break;
}

// 13.
// // Nhập vào 3 số a, b, c
// // Tìm nghiệm của ptrinh bậc 3 ax^2 + bx + c =0
// let a = prompt("nhap so a");
// let b = prompt("nhap so b");
// let c = prompt("nhap so c");
// let del = Math.pow(Number(b),2); - 4 * Number(a) * Number(b);
// let x1 = (-Number(b) + Math.sqrt(del))/(2 * Number(a));
// let x2 = (-Number(b) - Math.sqrt(del))/(2 * Number(a));
// if (a = 0){
//     alert(`nghiem cua phuong trinh la ${-Number(c)/ Number (b)}`);
// }else if (del < 0){
//     alert(`phuong trinh vo nghiem`);
// }else if (del === 0){
//     alert(`phuong trinh co nghiem kep la x = ${-Number(b)/(2*Number(a))}`);
// }else alert(`phuong trinh co 2 nghiem la ${x1} và ${x2}`);