const arrWords = [];

const menu = `== TỪ ĐIỂN ANH VIỆT ==
1. Nhập dữ liệu:
1. Xuất dữ liệu:
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

            var idx = arrWords.findIndex(function (word) {
                return word.eng == engWord;
            })
            if (idx == -1) {
                alert("Không tìm thấy!");
            } else {
                var searchWord = arrWords.find(function (word) {
                    return word.eng == engWord;
                })
                console.log(searchWord);
            }
            break;
        case '4':
            console.log("Cám ơn đã sử dụng từ điển!");
            cont = false;
            break;
    }
} while (cont);