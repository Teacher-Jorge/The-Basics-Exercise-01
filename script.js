let input1 =document.getElementById('input1')
let check1 = document.getElementById('check1')
let score = document.getElementById('score')
let value = score.innerHTML
let audioSword = document.getElementById('audioSword')
let translation = document.getElementById('translation')

input1.addEventListener('keyup', (e) => {
    if (input1.value === 'are') {
        audioSword.play()
        input1.textContent = 'are'
        input1.style.color = 'lime'
        check1.style.visibility = 'visible'
        value++
        document.getElementById('score').innerHTML = value
        input1.disabled = true
        document.getElementById('input2').focus()
    }
})  

input1.addEventListener('keyup', (e) => {
    if (input1.value != 'are') {
        input1.style.color = 'red'
    } 
}) 
input1.addEventListener('keyup', (e) => {
    if (input1.value === 'a') {
        input1.style.color = 'lime'
    } 
}) 
input1.addEventListener('keyup', (e) => {
    if (input1.value === 'ar') {
        input1.style.color = 'lime'
    } 
}) 

btn1T.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    btn1T.style.backgroundColor = 'red'
    btn1T.style.color = 'yellow'
    translation.innerHTML = 'Como vai você?'
    setTimeout(function() {
        btn1T.style.backgroundColor = 'white'
        btn1T.style.color = 'darkcyan'
        translation.innerHTML = ''
    }, 2000)
})

//Question 02
let input2 = document.getElementById('input2')
let check2 = document.getElementById('check2')


input2.addEventListener('keyup', (e) => {
    if (input2.value === 'Is') {
        audioSword.play()
        input2.style.color = 'lime'
        check2.style.visibility = 'visible'
        value++
        document.getElementById('score').innerHTML = value
        input2.disabled = true
        document.getElementById('input3').focus()
    }
})      

input2.addEventListener('keyup', (e) => {
    if (input2.value != 'Is') {
        input2.style.color = 'red'
    } 
}) 

input2.addEventListener('keyup', (e) => {
    if (input2.value === 'I') {
        input2.style.color = 'lime'
    } 
}) 

input2.addEventListener('keyup', (e) => {
    if (input2.value === 'Is') {
        input2.style.color = 'lime'
    } 
})

btn2T.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    btn2T.style.backgroundColor = 'red'
    btn2T.style.color = 'yellow'
    translation.innerHTML = 'Ele é médico?'
    setTimeout(function() {
        btn2T.style.backgroundColor = 'white'
        btn2T.style.color = 'darkcyan'
        translation.innerHTML = ''
    }, 2000)
})

//Question 03
let input3 = document.getElementById('input3')
let check3 = document.getElementById('check3')

input3.addEventListener('keyup', (e) => {
    if (input3.value === 'is') {
        audioSword.play()
        input3.style.color = 'lime'
        check3.style.visibility = 'visible'
        value++
        document.getElementById('score').innerHTML = value
        input3.disabled = true
        document.getElementById('input4').focus()
    }
})    

input3.addEventListener('keyup', (e) => {
    if (input3.value != 'is') {
        input3.style.color = 'red'
    } 
}) 

input3.addEventListener('keyup', (e) => {
    if (input3.value === 'i') {
        input3.style.color = 'lime'
    } 
}) 

input3.addEventListener('keyup', (e) => {
    if (input3.value === 'is') {
        input3.style.color = 'lime'
    } 
})

btn3T.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    btn3T.style.backgroundColor = 'red'
    btn3T.style.color = 'yellow'
    translation.innerHTML = 'Como está o tempo/clima?'
    setTimeout(function() {
        btn3T.style.backgroundColor = 'white'
        btn3T.style.color = 'darkcyan'
        translation.innerHTML = ''
    }, 2000)
})

//Question 04
let input4 = document.getElementById('input4')
let check4 = document.getElementById('check4')

input4.addEventListener('keyup', (e) => {
    if (input4.value === 'Are') {
        audioSword.play()
        input4.style.color = 'lime'
        check4.style.visibility = 'visible'
        value++
        document.getElementById('score').innerHTML = value
        input4.disabled = true
        document.getElementById('input5').focus()
    }
})    

input4.addEventListener('keyup', (e) => {
    if (input4.value != 'Are') {
        input4.style.color = 'red'
    } 
}) 

input4.addEventListener('keyup', (e) => {
    if (input4.value === 'A') {
        input4.style.color = 'lime'
    } 
}) 

input4.addEventListener('keyup', (e) => {
    if (input4.value === 'Ar') {
        input4.style.color = 'lime'
    } 
})

btn4T.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    btn4T.style.backgroundColor = 'red'
    btn4T.style.color = 'yellow'
    translation.innerHTML = 'Você é um(a) aluno(a) de inglês?'
    setTimeout(function() {
        btn4T.style.backgroundColor = 'white'
        btn4T.style.color = 'darkcyan'
        translation.innerHTML = ''
    }, 2000)
})

//Question 05
let input5 = document.getElementById('input5')
let check5 = document.getElementById('check5')


input5.addEventListener('keyup', (e) => {
    if (input5.value === 'Am') {
        let song = document.getElementById('happy')
        song.play()
        audioSword.play()
        input5.style.color = 'lime'
        check5.style.visibility = 'visible'
        value++
        document.getElementById('score').innerHTML = value
        input5.disabled = true
    }
})    

input5.addEventListener('keyup', (e) => {
    if (input5.value != 'Am') {
        input5.style.color = 'red'
    } 
}) 

input5.addEventListener('keyup', (e) => {
    if (input5.value === 'A') {
        input5.style.color = 'lime'
    } 
}) 

btn5T.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    btn5T.style.backgroundColor = 'red'
    btn5T.style.color = 'yellow'
    translation.innerHTML = 'Eu sou feliz?'
    setTimeout(function() {
        btn5T.style.backgroundColor = 'white'
        btn5T.style.color = 'darkcyan'
        translation.innerHTML = ''
    }, 2000)
})



