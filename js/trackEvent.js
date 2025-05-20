function activeBtn() {
    var stdEvent = document.getElementById('stdEvent');
    var btn = document.getElementById('submit');

    if (stdEvent.value != 'select') {
        btn.disabled = false;
    }
    else {
        btn.disabled = true;
    }
}

function trackEvent() {
    let trackId = document.getElementById('trackId');
    let stdEvent = document.getElementById('stdEvent');
    let tag = document.getElementById('customEvent');
    let productId = document.getElementById('pId');

    const r = " 완료";

    const productIdA = Math.floor(Math.random() * 10000000);
    const productIdB = Math.floor(Math.random() * 10000000);
    const productQtyA = Math.floor(Math.random() * 10);
    const productQtyB = Math.floor(Math.random() * 10);
    const productQtyTotal = productQtyA + productQtyB;
    const productPriceA = Math.floor(Math.random() * 100) * 1000;
    const productPriceB = Math.floor(Math.random() * 100) * 1000;
    const productPriceTotal = productPriceA + productPriceB;
    const productNameA = "상품A " + productIdA;
    const productNameB = "상품B " + productIdB;

    // console.log("productId: " + productIdA);
    // console.log("productIdB: " + productIdB);
    // console.log("productQtyA: " + productQtyA);
    // console.log("productQtyB: " + productQtyB);
    // console.log("productQtyTotal: " + productQtyTotal);
    // console.log("productPriceA: " + productPriceA);
    // console.log("productPriceB: " + productPriceB);
    // console.log("productPriceTotal: " + productPriceTotal);
    // console.log("productNameA: " + productNameA);
    // console.log("productNameB: " + productNameB);

    if(stdEvent.value == 'select') {
        event.preventDefault();
        alert('표준이벤트를 선택하세요.');
    }
    else {
        if(!trackId.value){
            event.preventDefault();
            alert('트랙 ID를 입력하세요.');
        }
        else{
            let standard = stdEvent.value;
            event.preventDefault();
            console.log("트랙 ID: " + trackId.value);
            console.log("표준이벤트: " + standard);
            console.log("태그값: " + tag.value);
            console.log("상품 정보: " + productId.value);
            
            if(standard == "pageView"){
                kakaoPixel(trackId.value).pageView(tag.value);
                document.getElementById('result').innerText = stdEvent.value + r;
            }
            else if(standard == "search"){
                kakaoPixel(trackId.value).pageView();
                kakaoPixel(trackId.value).search(tag.value);
                document.getElementById('result').innerText = stdEvent.value + r;
            }
            else if(standard == "viewCart"){
                kakaoPixel(trackId.value).pageView();
                kakaoPixel(trackId.value).viewCart(tag.value);
                document.getElementById('result').innerText = stdEvent.value + r;
            }
            else if(standard == "completeRegistration"){
                kakaoPixel(trackId.value).pageView();
                kakaoPixel(trackId.value).completeRegistration(tag.value);
                document.getElementById('result').innerText = stdEvent.value + r;
            }
            else if(standard == "participation"){
                kakaoPixel(trackId.value).pageView();
                kakaoPixel(trackId.value).participation(tag.value);
                document.getElementById('result').innerText = stdEvent.value + r;
            }
            else if(standard == "viewContent" || standard == "addToWishList" || standard == "addToCart" || standard == "purchase") {
                if(!productId.value || !tag.value){
                    event.preventDefault();
                    alert('상품 ID와 태그 정보를 입력하세요.');
                }
                else {
                    if(standard == "addToCart"){
                        kakaoPixel(trackId.value).pageView();
                        kakaoPixel(trackId.value).addToCart({
                            id: productId.value,
                            tag: tag.value
                        });
                    }
                    else if(standard == "viewContent"){
                        kakaoPixel(trackId.value).pageView();
                        kakaoPixel(trackId.value).viewContent({
                            id: productId.value,
                            tag: tag.value
                        });
                    }
                    else if(standard == "addToWishList"){
                        kakaoPixel(trackId.value).pageView();
                        kakaoPixel(trackId.value).addToWishList({
                            id: productId.value,
                            tag: tag.value
                        });
                    }
                    else if(standard == "purchase"){
                        kakaoPixel(trackId.value).pageView();
                        kakaoPixel(trackId.value).purchase({
                        total_quantity: productQtyTotal, // 주문 내 상품 개수(optional)
                        total_price: productPriceTotal,  // 주문 총 가격(optional)
                        currency: "KRW",     // 주문 가격의 화폐 단위(optional, 기본 값은 KRW)
                        products: [          // 주문 내 상품 정보(optional)
                            {id: productIdA, name: productNameA, quantity: productQtyA, price: productPriceA},
                            {id: productIdB, name: productNameB, quantity: productQtyB, price: productPriceB}
                        ],
                        tag: tag.value
                    });

                    const r = " 구매 완료";
                    document.getElementById('result').innerText = trackId.value + r;
                    document.getElementById('productId').innerText = "상품 ID: " + productIdA + ", " + productIdB;
                    document.getElementById('productName').innerText = "상품 이름: " + productNameA + ", " + productNameB;
                    document.getElementById('productQty').innerText = "상품 수량: " + productQtyA + ", " + productQtyB;
                    document.getElementById('productPrice').innerText = "상품 가격: " + productPriceA + ", " + productPriceB;
                    }
                    document.getElementById('result').innerText = stdEvent.value + r;
                }
            }   
            else {
                document.getElementById('sub_result').innerText = stdEvent.value + " 이벤트를 생성할 수 없습니다.";
            }
        }
    }
};

