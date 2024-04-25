const numList = document.querySelector('.numList'),
    toDo = document.querySelector('.do')


toDo.addEventListener('click', (e) => {
    let n = +numList.value
    if (n % 4 != 0) { n = n + 4 - n % 4; console.log(n); }
    if (n % 4 == 0) {
        const front = document.querySelector('.front'),
            back = document.querySelector('.back')
        const array = [],
            frontNum = [],
            backNum = []

        for (let i = 0; i < n; i++) {
            array.push(i + 1);
        }

        for (let i = 0; i < n / 2; i++) {
            if (i % 2 == 0) {
                frontNum.push(array[(n - i) - 1] + ', ' + array[i])
            } else {
                backNum.push(array[i] + ', ' + array[(n - i) - 1])
            }
        }
        front.innerHTML = "1-tomon: " + frontNum
        back.innerHTML = "2-tomon: " + backNum
    } else { alert("Sahilar soni 4 ga karrali emas") }

})
