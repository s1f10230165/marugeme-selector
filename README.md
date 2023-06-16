<!DOCTYPE html>
<html>
<head>
    <title>Menu Selector</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap');
        
        body {
            font-family: 'Open Sans', sans-serif;
            text-align: center;
            background-color: #f8f8f8;
            color: #3C3C3C;
        }
        
        h1 {
            font-family: 'Comfortaa', sans-serif;
            color: #56A8CB;
            font-size: 3em;
            text-shadow: 2px 2px 4px #000000;
        }
        
        .category {
            margin: 20px 0;
            padding: 10px;
            border: 1px solid #ffffff;
            border-radius: 10px;
            background-color: #fff;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
        }
        
        .item,
        .size-button,
        #createSet,
        .share-button {
            font-family: 'Open Sans', sans-serif;
            border-radius: 20px;
            padding: 10px 20px;
            margin: 10px;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
        }
        
        .item {
            border: none;
            background-color: #fff;
            color: #3C3C3C;
            position: relative;
        }
        
        .item:before {
            content: '\2713';
            display: none;
            position: absolute;
            top: -10px;
            right: -10px;
            width: 20px;
            height: 20px;
            background-color: #FF9F57;
            color: #fff;
            border-radius: 50%;
        }
        
        .item.selected:before {
            display: block;
        }
        
        .size-button,
        #createSet,
        .share-button {
            border: none;
            color: #000000;
        }
        
        .size-button {
            background-color: #ffffff;
        }
        
        .size-button:hover,
        .size-button.selected {
            background-color: #6bc2e1;
        }
        
        #createSet {
            background-color: #FF9F57;
            font-size: 1.5em;
        }
        
        #createSet:hover {
            background-color: #FF8F3C;
        }
        
        .share-button {
            background-color: #55acee;
        }
        
        .share-button:hover {
            background-color: #3C9DDD;
        }
        
        .total {
            font-size: 30px;
            color: #FF9F57;
            font-weight: bold;
        }
        
        .notification {
            font-size: 9em;
            color: #FF9F57;
            font-weight: normal;
        }
        
        .item.selected {
            background-color: #68e3ee;
            color: #000000;
            transform: scale(1.1);
        }
        @media only screen and (max-width: 600px) {
  /* 600px以下の画面サイズに対するスタイル */
  h1 {
    font-size: 2em;
  }
  
  .size-button,
  #createSet,
  .share-button {
    font-size: 0.8em;
    padding: 5px 10px;
  }
  
  .total {
    font-size: 20px;
  }
  
  .notification {
    font-size: 5em;
  }
  
  .item,
  .size-button,
  #createSet,
  .share-button {
    margin: 5px;
  }
}

@media only screen and (max-width: 400px) {
  /* 400px以下の画面サイズに対するスタイル */
  h1 {
    font-size: 1.5em;
  }
  
  .size-button,
  #createSet,
  .share-button {
    font-size: 0.6em;
    padding: 3px 8px;
  }
  
  .total {
    font-size: 16px;
  }
  
  .notification {
    font-size: 3em;
  }
  
  .item,
  .size-button,
  #createSet,
  .share-button {
    margin: 3px;
  }
}
    </style>
    

        
</head>
<body>
    <h1>丸亀製麵 セレクター</h1> 

    <div id="udon" class="category">
        <h1>うどん</h1>
        <div class="size-button">
            <button class="size-button" id="cancelButton">キャンセル</button>
            <button class="size-button" id="largeButton">大</button>
            <button class="size-button" id="extraLargeButton">得</button>
        </div>
    </div>     

    <div id="tempura" class="category">
        <h1>天ぷら</h1>
    </div> 

    <div id="topping" class="category">
        <h1>トッピング</h1>
    </div> 

    <div id="rice" class="category">
        <h1>ご飯もの</h1>
    </div> 

    <button id="createSet">セット作成</button>

    <div class="total">
        <h1>合計: <span id="totalPrice">0</span>円</h1>
    </div> 

    <div id="notification"></div>

    <div class="share-buttons">
        <a class="share-button" href="#" id="facebookShareButton">Share on Facebook</a>
        <a class="share-button" href="#" id="twitterShareButton">Share on Twitter</a>
        <a class="share-button" href="https://jp.marugame.com/">丸亀製麵　公式サイト</a>
    </div>

    <script>
        const menu = {
            udon: [
                { name: '釜揚げうどん 並', price: 340, desc: '小麦の風味そのものを味わう。丸亀製麺の代名詞' },
                { name: 'かけうどん 並', price: 390, desc: '定番の味だからこそ無限大に。アレンジを楽しめる一品' },
                { name: 'ぶっかけうどん 並', price: 390, desc: 'だしを"ぶかっけ"ていただく。本場・讃岐の定番' },
                { name: 'ざるうどん 並', price: 390, desc: '歯ごたえしっかり。のどごしつるり' },
                { name: 'おろし醤油うどん 並', price: 490, desc: 'すだちと大根おろしのさっぱりとした味わい' },
                { name: '釜玉うどん 並', price: 480, desc: '茹であげ麺によく絡む玉子としょうゆのマリアージュ' },
                { name: '明太釜玉うどん 並', price: 560, desc: 'まろやか玉子と明太子の濃厚な味わい' },
                { name: 'きつねうどん 並', price: 540, desc: 'ジューシーなきつねあげと香り高いだしのハーモニー' },
            ],
            tempura: [
                { name: 'かしわ', price: 180, desc: '丸亀製麺の天ぷら人気№1特製のたれでジューシーに' },
                { name: '野菜かき揚げ', price: 170, desc: '野菜の甘み・旨みを驚きの大きさで' },
                { name: 'えび天', price: 180, desc: 'みんなが大好きな“天ぷらの王様”' },
                { name: 'ちくわ天', price: 140, desc: '讃岐うどんに欠かせない最高のパートナー' },
                { name: 'ちくわ磯部天', price: 100, desc: '磯の香りをまとったサクもち食感のちくわ天' },
                { name: 'さつまいも天', price: 140, desc: 'やさしい甘みとほっくり食感はおかずにも、おやつにも' },
                { name: 'れんこん天', price: 140, desc: 'シャキシャキとした食感に、ほんのりとした甘み' },
                { name: 'いか天', price: 140, desc: '外はサクサク、中はぷりぷりぷりっとした歯ごたえが人気' },
            ],
            topping: [
                { name: '明太子', price: 90, desc: 'ピリッとした辛さと程よい塩味が後そそる' },
                { name: 'とろろ', price: 90, desc: 'うどんだけでなく、ごはんとも' },
                { name: 'おろし', price: 90, desc: 'うどんにはもちろん天ぷらともご一緒に' },
                { name: 'きつねあげ', price: 150, desc: '丼からはみ出るほどの大きさ言わずと知れたかけうどんのお供' },
            ],
            rice: [
                { name: '白ごはん', price: 140, desc: 'おお好きな天ぷらをのせて                オリジナル天丼に' },
                { name: 'いなり', price: 130, desc: 'ごま入り酢飯をジューシーなきつねあげで包みました' },
                { name: '鮭おにぎり', price: 140, desc: '香ばしく焼いた鮭がたっぷり' },
                { name: '明太子おにぎり', price: 140, desc: 'みんなが好きな明太子はあっさりとしたうどんと相性抜群' },
                { name: 'こんぶおにぎり', price: 180, desc: '甘辛く煮つけた昆布をふわふわのごはんで握りました' },
            ]
        };

        let totalPrice = 0;
        let selectedSize = '';

        function createMenuItems(category, items) {
            const categoryElement = document.getElementById(category);
            
            items.forEach(item => {
                const div = document.createElement('div');
                div.classList.add('item');
                div.dataset.price = item.price; // 価格を保存するためのデータ属性を追加
                div.innerHTML = `
                    <h3>${item.name}</h3>
                    <p class="description">${item.desc}</p>
                    <p>${item.price}円</p>
                `;
                div.addEventListener('click', function() {
                    const selectedItems = categoryElement.querySelectorAll('.item.selected');
                    
                    if (category === 'udon') {
                        cancelButton.click();
                    }

                    if (category === 'udon') {
                        const selectedUdon = categoryElement.querySelector('.item.selected');
                        if (selectedUdon && selectedUdon !== this) {
                            selectedUdon.classList.remove('selected');
                            const previousPrice = parseInt(selectedUdon.dataset.price); // 前のうどんの価格を取得
                            if (selectedSize === 'large') {
                                previousPrice -= 140;
                            } else if (selectedSize === 'extraLarge') {
                                previousPrice -= 280;
                            }
                            totalPrice -= previousPrice; // 前のうどんの価格を合計から引く
                        }
                    } else if (category === 'topping') {
                        if (selectedItems.length >= 2 && !this.classList.contains('selected')) {
                            return;
                        }
                    }

                    this.classList.toggle('selected');
                    if (this.classList.contains('selected')) {
                        totalPrice += parseInt(this.dataset.price); // アイテムの価格を取得して合計に加算
                    } else {
                        totalPrice -= parseInt(this.dataset.price); // アイテムの価格を取得して合計から減算
                    }
                    document.getElementById('totalPrice').innerText = totalPrice;
                });
                categoryElement.appendChild(div);
            });
        }

        createMenuItems('udon', menu.udon);
        createMenuItems('tempura', menu.tempura);
        createMenuItems('topping', menu.topping);
        createMenuItems('rice', menu.rice);

        const largeButton = document.getElementById('largeButton');
        const extraLargeButton = document.getElementById('extraLargeButton');
        const cancelButton = document.getElementById('cancelButton');

        function updateUdonSize(udonElement, size) {
            const sizeElement = udonElement.querySelector('.size');
            if (sizeElement) {
                sizeElement.remove();
            }
            if (size) {
                udonElement.innerHTML += `<p class="size">${size}</p>`;
            }
        }

        largeButton.addEventListener('click', function() {
            const selectedUdon = document.getElementById('udon').querySelector('.item.selected');
            if (selectedUdon) {
                if (selectedSize === 'large') {
                    return;
                }
                if (selectedSize === 'extraLarge') {
                    totalPrice -= 280;
                }
                selectedSize = 'large';
                updateUdonSize(selectedUdon, '大');
                totalPrice += 140;
                document.getElementById('totalPrice').innerText = totalPrice;
                this.classList.add('selected');
                extraLargeButton.classList.remove('selected');
            }
        });

        extraLargeButton.addEventListener('click', function() {
            const selectedUdon = document.getElementById('udon').querySelector('.item.selected');
            if (selectedUdon) {
                if (selectedSize === 'extraLarge') {
                    return;
                }
                if (selectedSize === 'large') {
                    totalPrice -= 140;
                }
                selectedSize = 'extraLarge';
                updateUdonSize(selectedUdon, '得');
                totalPrice += 280;
                document.getElementById('totalPrice').innerText = totalPrice;
                this.classList.add('selected');
                largeButton.classList.remove('selected');
            }
        });

        cancelButton.addEventListener('click', function() {
            const selectedUdon = document.getElementById('udon').querySelector('.item.selected');
            if (selectedUdon) {
                if (selectedSize === 'large') {
                    totalPrice -= 140;
                } else if (selectedSize === 'extraLarge') {
                    totalPrice -= 280;
                }
                selectedSize = '';
                updateUdonSize(selectedUdon, '');
                document.getElementById('totalPrice').innerText = totalPrice;
                this.classList.add('selected');
                largeButton.classList.remove('selected');
                extraLargeButton.classList.remove('selected');
            }
        });

        function createRandomSet(maxPrice) {
            const selectedItems = [];
            let currentPrice = 0;

            const randomUdon = menu.udon[Math.floor(Math.random() * menu.udon.length)];
            if (randomUdon.price <= maxPrice) {
                selectedItems.push(randomUdon);
                currentPrice += randomUdon.price;
            }

            const randomTempura = menu.tempura[Math.floor(Math.random() * menu.tempura.length)];
            if (currentPrice + randomTempura.price <= maxPrice) {
                selectedItems.push(randomTempura);
                currentPrice += randomTempura.price;
            }

            const selectedToppings = [];
            while (currentPrice < maxPrice && selectedToppings.length < 2) {
                const randomTopping = menu.topping[Math.floor(Math.random() * menu.topping.length)];
                if (currentPrice + randomTopping.price <= maxPrice) {
                    selectedToppings.push(randomTopping);
                    currentPrice += randomTopping.price;
                } else {
                    break;
                }
            }
            selectedItems.push(...selectedToppings);

            const remainingPrice = maxPrice - currentPrice;
            if (remainingPrice > 0) {
                const randomRice = menu.rice[Math.floor(Math.random() * menu.rice.length)];
                if (randomRice.price <= remainingPrice) {
                    selectedItems.push(randomRice);
                }
            }

            return selectedItems;
        }

        document.getElementById('createSet').addEventListener('click', function() {
            const maxPrice = parseInt(prompt('上限金額を入力してください'));

            if (isNaN(maxPrice) || maxPrice <= 0) {
                alert('無効な金額が入力されました。');
                return;
            }

            const set = createRandomSet(maxPrice);

            totalPrice = 0;
            document.querySelectorAll('.item').forEach(function(item) {
                item.classList.remove('selected');

                for (const selectedItem of set) {
                    if (item.querySelector('h3').innerText === selectedItem.name) {
                        item.classList.add('selected');
                        totalPrice += selectedItem.price;
                    }
                }
            });

            document.getElementById('totalPrice').innerText = totalPrice;
        });

    </script>
</body>
</html>
