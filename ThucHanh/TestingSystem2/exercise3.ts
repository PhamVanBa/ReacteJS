// operator

// Question 1:
// Khai báo array thứ 1 gồm các số chẵn từ 2 tới 10
// Sau đó khai báo array thứ 2 bao gồm các số của array thứ 1 và thêm
// các số lẻ từ 5 tới 9
var chan: number[] = [2, 4, 6, 8, 10];
var chanLe: number[] = [...chan,5, 7, 9];
console.log(chanLe);


// Question 2:
// Copy array thứ 2 ở Question 1 ra 1 array mới
var arrayMoi = chanLe;
console.log(arrayMoi);


// Question 3:
// Khai báo array có tên cold, bao gồm các value 'autumn', 'winter'
// Khai báo array có tên warm, bao gồm các value ['spring', 'summer']
// Gộp 2 array này thành 1 array mới có tên là seasons
var cold: string[] = ["autumn", "winter"];
var warm: string[] = ["spring", "summer"];
var seasons: string[] = [...cold, ...warm];
console.log(seasons);

