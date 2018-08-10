function handleMeatOnChange() {
    let checkBox = document.getElementById("Meat");

    if (checkBox.checked) {
        let e1 = document.getElementsByClassName('meatItem');

        for (let i = 0; i < e1.length; i++) {
            e1[i].style.visibility = 'visible';
        }

    } else {
        let e2 = document.getElementsByClassName('meatItem');

        for (let i = 0; i < e2.length; i++) {
            e2[i].style.visibility = 'hidden';
        }
    }
}

function handleFruitOnChange() {
    let checkBox = document.getElementById("Fruit");

    if (checkBox.checked) {
        let e1 = document.getElementsByClassName('fruitItem');

        for (let i = 0; i < e1.length; i++) {
            e1[i].style.visibility = 'visible';
        }

    } else {
        let e2 = document.getElementsByClassName('fruitItem');

        for (let i = 0; i < e2.length; i++) {
            e2[i].style.visibility = 'hidden';
        }
    }
}

function handleVegetableOnChange() {
    let checkBox = document.getElementById("Vegetable");

    if (checkBox.checked) {
        let e1 = document.getElementsByClassName('vegetableItem');

        for (let i = 0; i < e1.length; i++) {
            e1[i].style.visibility = 'visible';
        }

    } else {
        let e2 = document.getElementsByClassName('vegetableItem');

        for (let i = 0; i < e2.length; i++) {
            e2[i].style.visibility = 'hidden';
        }
    }
}