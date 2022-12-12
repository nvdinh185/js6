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
    console.log(danhSachDoiBong);
} else if (input == 2) {
    console.log(danhSachDoiBong);
} else if (input == 3) {
    var id = prompt('Nhập id đội bóng muốn tìm: ');
    var doiBong = danhSachDoiBong.find(function (doibong) {
        return doibong.id === Number(id);
    })
    if (doiBong) {
        console.log(doiBong);
    } else {
        console.log('Không tìm thấy!');
    }
} else if (input == 4) {
    var id = prompt('Nhập id đội bóng muốn xóa: ');
    var idx = danhSachDoiBong.findIndex(function (doibong) {
        return doibong.id === Number(id);
    })
    if (idx != -1) {
        danhSachDoiBong.splice(idx, 1);
        console.log(danhSachDoiBong);
    } else {
        console.log('Không tìm thấy!');
    }
} else {
    console.log('Goodbye!');
}