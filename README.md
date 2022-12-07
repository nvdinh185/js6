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

## Bài tập 2: Cho mảng sinh viên gồm các thông tin như sau:

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

- Sử dụng các hàm đã học ở trên để thực hiện các chức năng như: thêm, sửa, xóa sinh viên trong mảng đã cho

## Bài tập 3: Cho mảng sinh viên gồm các thông tin như sau:

```js
var students = [
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

- Viết các hàm (sử dụng vòng lặp for, while, do..while) để xử lý các công việc sau:

1. Kiểm tra xem có phải tất cả sinh viên đều có các môn trên điểm trung bình không? (biết điểm trung bình là 5)

2. Kiểm tra xem có sinh viên nào xếp loại giỏi không? (có các môn đều 8 điểm trở lên)

3. Lọc ra các sinh viên xếp loại giỏi và in ra thông tin gồm Tên, Toán, Lý, Hóa

4. Tìm 1 sinh viên xếp loại giỏi

5. Cộng cho mỗi sinh viên 1 điểm toán

6. Thêm thuộc tính tổng điểm 3 môn

7. Tính tổng điểm toán của các sinh viên, và tính điểm toán trung bình của các sinh viên

8. Sắp xếp danh sách sinh viên theo tổng điểm tăng dần

## Bài tập 4: Viết chương trình mô phỏng từ điển Anh Việt

Tạo menu chương trình như sau:
--------------------------------------
== TỪ ĐIỂN ANH VIỆT ==
--1. Nhập dữ liệu
--2. Xuất dữ liệu
--3. Dịch từ
--4. Thoát

Khi chọn 1: Nhập thông tin các từ tiếng Anh từ bàn phím.
Khi chọn 2: Hiển thị thông tin các từ tiếng Anh đã nhập.
Khi chọn 3: Nhập vào một từ tiếng Anh bất kỳ, tìm kiếm trong từ điển, nếu có thì in nghĩa tiếng Việt của từ đó. Nếu không có thì in ra không tìm thấy.
Khi chọn 4: Thoát khỏi chương trình và in ra dòng chữ “Cảm ơn đã sử dụng từ điển!”