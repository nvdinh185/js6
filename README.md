# BÀI TẬP ĐỂ ÁP DỤNG CÁC HÀM CƠ BẢN ĐỐI VỚI MẢNG: pop, shift, push, unshift, splice, concat, slice

## Bài Tập 1: Cho mảng các số từ 1 đến 10 như sau:

```js
var arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```

1. in mảng theo thứ tự index tăng dần

2. in mảng theo thứ tự index giảm dần

3. Xóa phần tử cuối cùng của mảng

4. Xóa phần tử đầu tiên của mảng

5. Thêm phần tử 0 vào cuối mảng

6. Thêm phần tử 0 vào đầu mảng

7. Cắt mảng từ phần tử đầu tiên đến phần tử thứ 5 thành 1 mảng mới

8. Chèn thêm số 100 vào phần tử thứ 5 của mảng

9. Thay thế phần tử thứ 5 bằng số 100

10. copy từ mảng arrNumber thành 1 mảng mới từ phần tử 5 đến hết

11. copy từ mảng arrNumber thành 1 mảng mới từ phần tử đầu tiên đến phần tử thứ 5

12. Cho mảng sau:
```js
var arrNumber2 = [11, 22, 33, 44, 55];
```
- Nối mảng arrNumber2 vào mảng arrNumber

## Bài tập 2: Chạy chương trình sau và ghi chép những gì đã học được
```js
// Hàm tạo số ngẫu nhiên trong khoảng 0 đến max-1
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Hàm tìm chỉ số của một số trong mảng
function searchIndex(number, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) return i;
    }
    return -1;
}

// Hàm sắp xếp nổi bọt
function bubbleSort(array) {
    var size = array.length;

    for (var i = 0; i < size - 1; i++) {
        for (var j = 0; j < size - i - 1; j++) {

            if (array[j] > array[j + 1]) {

                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}

// Hàm tìm một số trong mảng
function search(number, array) {
    for (let n of array) {
        if (n === number) return n;
    }
}

var arrayNumber = [];

for (let i = 0; i < 10; i++) {
    arrayNumber.push(getRandomInt(10));
}
console.log(arrayNumber);

var input = prompt('Nhập số muốn tìm: ');

if (search(Number(input), arrayNumber)) {
    console.log('Có tìm thấy số ' + input + ' trong mảng');
} else {
    console.log('Không tìm thấy!');
}

var idx = searchIndex(Number(input), arrayNumber);
if (idx !== -1) {
    console.log("Vị trí tìm thấy số " + input + " là: " + idx);
}

bubbleSort(arrayNumber);
console.log(arrayNumber);
```

## Bài tập 3: Cho mảng sinh viên gồm các thông tin như sau:

```js
const students = [
    {
        id: 1,
        name: "Dinh",
        address: "hue"
    },
    {
        id: 2,
        name: "Nam",
        address: "quang nam"
    },
    {
        id: 3,
        name: "Tan",
        address: "da nang"
    },
    {
        id: 4,
        name: "Hung",
        address: "hue"
    },
    {
        id: 5,
        name: "Tri",
        address: "quang tri"
    },
    {
        id: 6,
        name: "Anh",
        address: "hue"
    },
    {
        id: 7,
        name: "Binh",
        address: "da nang"
    }
];
```

Tạo menu chương trình như sau:
--------------------------------------
== QUẢN LÝ SINH VIÊN ==
1. Xem danh sách sinh viên
2. Thêm sinh viên
3. Sửa sinh viên
4. Xóa sinh viên
--------------------------------------
- Khi chọn 1: Hiện thị tất cả sinh viên trong danh sách.
- Khi chọn 2: Nhập mới 1 sinh viên và thêm vào danh sách.
- Khi chọn 3: Sửa 1 sinh viên trong danh sách theo id nhập vào.
- Khi chọn 4: Xóa 1 sinh viên trong danh sách theo id nhập vào.

# BÀI TẬP ĐỂ ÁP DỤNG CÁC HÀM, VÒNG LẶP ĐỐI VỚI MẢNG

## Bài tập 4: Viết chương trình mô phỏng từ điển Anh Việt

Tạo menu chương trình như sau:
--------------------------------------
== TỪ ĐIỂN ANH VIỆT ==
1. Nhập dữ liệu
2. Xuất dữ liệu
3. Dịch từ
4. Thoát
--------------------------------------
- Khi chọn 1: Nhập thông tin các từ (gồm 2 thuộc tính: từ tiếng Anh và nghĩa tiếng Việt) từ bàn phím.
- Khi chọn 2: Hiển thị thông tin các từ đã nhập.
- Khi chọn 3: Nhập vào một từ tiếng Anh bất kỳ, tìm kiếm trong từ điển, nếu có thì in nghĩa tiếng Việt của từ đó. Nếu không có thì in ra không tìm thấy.
- Khi chọn 4: Thoát khỏi chương trình và in ra dòng chữ "Cảm ơn đã sử dụng từ điển!"

## Bài tập 5: Cho danh sách các đội bóng tham dự World Cup như sau:

```js
const danhSachDoiBong = [
    {
        id: 1,
        ten: 'Brazin',
        huanLuyenVien: 'Tite',
        soLanVoDich: 15
    },
    {
        id: 2,
        ten: 'Đức',
        huanLuyenVien: 'Hansi Flick',
        soLanVoDich: 10
    },
    {
        id: 3,
        ten: 'Pháp',
        huanLuyenVien: 'Deschamps',
        soLanVoDich: 12
    }
]
```

Tạo menu như sau:
---------------------------------------
1. Nhập dữ liệu
2. Xuất dữ liệu
3. Tìm thông tin
4. Xóa thông tin đội bóng
5. Thoát
---------------------------------------

- Khi chọn 1: Nhập đội bóng tham gia World Cup.
- Khi chọn 2: Hiển thị thông tin các đội bóng đã nhập
- Khi chọn 3: Nhập vào id và hiển thị thông tin đội bóng có id đó. Nếu không có thì thông báo "Không tìm thấy"
- Khi chọn 4: Nhập vào id và xóa thông tin đội bóng có id đó. Nếu không có thì thông báo "Không tìm thấy đội bóng nào để xóa".
- Khi chọn 0: Thoát khỏi hệ thống và in ra dòng chữ: "Goodbye!"

## Bài tập 6: Cho danh sách các quân bài như sau:

```js
const danhSachQuanBai = [
    {
        id: 1,
        name: 'Ba bích', // Tên quân bài, ví dụ: Năm cơ, Sáu bích...
        exp: 3, //Hệ số quân bài (từ 1 đến 13)
        point: 1 // Điểm của quân bài (từ 1 đến 4)
    },
    {
        id: 2,
        name: 'Năm rô',
        exp: 5,
        point: 3
    },
    {
        id: 3,
        name: 'Bốn cơ',
        exp: 4,
        point: 4
    }
]
```

Tạo menu như sau:
---------------------------------------
1. Nhập 1 quân bài
2. Nhập mảng các quân bài
3. Sắp xếp tăng dần
4. Sắp xếp giảm dần
5. Xuất dữ liệu
6. Thoát
---------------------------------------

- Khi chọn 1: Nhập 1 quân bài và thêm vào danh sách
- Khi chọn 2: Nhập mảng các quân bài và thêm vào danh sách
- Khi chọn 3: Sắp xếp các quân bài theo hệ số tăng dần
- Khi chọn 4: Sắp xếp các quân bài theo hệ số giảm dần
- Khi chọn 5: Hiển thị danh sách các quân bài
- Khi chọn 0: Thoát khỏi hệ thống và in ra dòng chữ: "Goodbye!"

## Bài tập 7: Cho mảng sinh viên gồm các thông tin như sau:


```js
const students = [
    {
        id: 1,
        name: "Dinh",
        toan: 5,
        ly: 6,
        hoa: 7
    },
    {
        id: 2,
        name: "Nam",
        toan: 10,
        ly: 8,
        hoa: 5,
    },
    {
        id: 3,
        name: "Tan",
        toan: 3,
        ly: 4,
        hoa: 5,
    },
    {
        id: 4,
        name: "Hung",
        toan: 9,
        ly: 7,
        hoa: 7,
    },
    {
        id: 5,
        name: "Tri",
        toan: 9,
        ly: 8,
        hoa: 9,
    },
    {
        id: 6,
        name: "Anh",
        toan: 9,
        ly: 10,
        hoa: 9,
    },
    {
        id: 7,
        name: "Binh",
        toan: 3,
        ly: 6,
        hoa: 9,
    }
];
```

- Viết chương trình (sử dụng function, vòng lặp for, switch...case) để xử lý các công việc sau:

1. Kiểm tra xem có phải tất cả sinh viên đều có các môn trên điểm trung bình không? (biết điểm trung bình là 5)

2. Kiểm tra xem có sinh viên nào xếp loại giỏi không? (có các môn đều 8 điểm trở lên)

3. Lọc ra các sinh viên xếp loại giỏi và in ra thông tin gồm Tên, Toán, Lý, Hóa

4. Tìm 1 sinh viên xếp loại giỏi

5. Cộng cho mỗi sinh viên 1 điểm toán

6. Thêm thuộc tính tổng điểm 3 môn

7. Tính tổng điểm toán của các sinh viên

8. Tính điểm toán trung bình của các sinh viên (làm tròn 2 chữ số thập phân)

9. Sắp xếp danh sách sinh viên theo tổng điểm tăng dần
