function createContacts(){
    var count = document.getElementById('count');
    if(!count.value){
            event.preventDefault();
            alert('필요한 전화번호 개수를 입력하세요.');
        }
    else{
        var csvText = "";
        for(let i = 0; i < count.value; i++){
            csvText += getRandomNumber() + "\r\n";
        }

        var downloadLink = document.createElement("a");
        var blob = new Blob([csvText], {type: "text/csv;charset=utf-8"});
        var url = URL.createObjectURL(blob);
        downloadLink.href = url;
        downloadLink.download = "contacts_" + count.value + "ea.csv";

        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);

        document.getElementById('result').innerText = count.value + "개의 전화번호가 생성되었습니다. 다운로드된 CSV 파일을 확인하세요.";
    }
}

function getRandomNumber(){
    let phone = "014";
    while(phone.length < 11) phone += Math.floor(Math.random() * 10);
    phone = phone.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
    return phone;
}