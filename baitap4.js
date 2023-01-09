const arrWords = [];

const menu = `== TỪ ĐIỂN ANH VIỆT ==
1. Nhập dữ liệu:
2. Xuất dữ liệu:
3. Dịch từ:
4. Thoát:

Nhập thao tác lựa chọn:`;

var cont = true;
do {
    var input = prompt(menu);

    switch (input) {
        case '':
            alert("Vui lòng nhập thao tác lựa chọn!");
            break;
        case '1':
            var eng = prompt("Nhập từ tiếng Anh: ");
            var vie = prompt("Nhập nghĩa tiếng Việt: ");
            var newWord = {
                id: arrWords.length + 1,
                eng: eng,
                vie: vie
            }

            arrWords.push(newWord);
            break;
        case '2':
            console.log(arrWords);
            break;
        case '3':
            var engWord = prompt("Nhập từ tiếng Anh muốn tra: ");

            var searchWord = search(engWord, arrWords);
            if (!searchWord) {
                alert("Không tìm thấy!");
            } else {
                console.log(searchWord);
            }
            break;
        case '4':
            console.log("Cám ơn đã sử dụng từ điển!");
            cont = false;
            break;
    }
} while (cont);

function search(str, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].eng === str) return array[i];
    }
}