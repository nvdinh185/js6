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

const menu = `1. Nhập dữ liệu
2. Xuất dữ liệu
3. Tìm thông tin
4. Xóa thông tin đội bóng
0. Thoát

Nhập thao tác lựa chọn:`;

var input = prompt(menu);

if (input == 1) {
    them();
    console.table(danhSachDoiBong);
} else if (input == 2) {
    console.table(danhSachDoiBong);
} else if (input == 3) {
    console.table(danhSachDoiBong);
    tim();
} else if (input == 4) {
    console.table(danhSachDoiBong);
    xoa();
    console.table(danhSachDoiBong);
} else {
    console.log('Goodbye!');
}

// 1. Thêm đội bóng
function them() {
    var ten = prompt('Nhập tên đội bóng:');
    var huanLuyenVien = prompt('Nhập tên huấn luyện viên:');
    var soLanVoDich = prompt('Nhập số lần vô địch: ');
    var doiBongMoi = {
        id: danhSachDoiBong.length + 1,
        ten: ten,
        huanLuyenVien: huanLuyenVien,
        soLanVoDich: Number(soLanVoDich)
    }
    danhSachDoiBong.push(doiBongMoi);
}

// 2. Tìm đội bóng
function tim() {
    var id = prompt('Nhập id đội bóng muốn tìm: ');
    var doiBong = search(Number(id), danhSachDoiBong);
    if (doiBong) {
        console.log(doiBong);
    } else {
        console.log('Không tìm thấy!');
    }
}

// 3. Xóa đội bóng
function xoa() {
    var id = prompt('Nhập id đội bóng muốn xóa: ');
    var idx = searchIndex(Number(id), danhSachDoiBong);
    if (idx != -1) {
        danhSachDoiBong.splice(idx, 1);
    } else {
        console.log('Không tìm thấy!');
    }
}

function searchIndex(id, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) return i;
    }
    return -1;
}

function search(id, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) return array[i];
    }
}