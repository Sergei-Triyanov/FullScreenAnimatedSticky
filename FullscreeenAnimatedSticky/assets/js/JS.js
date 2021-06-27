// Константы
const header = document.querySelector("header"),
      navigation = document.querySelector(".navigation"),
      toggle = document.querySelector(".toggle"),
      nav = document.querySelector("nav");

// добавление класса при сколле
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
    // this.window.scrollY  условие выполнение добавления класса
});

// Добавляем активный класс навигации
for(let i = 0; i<navigation.children.length; i++){
    navigation.children[i].addEventListener("click", function(event){
        event.preventDefault();
        for (let j = 0; j<navigation.children.length; j++){
            navigation.children[j].classList.remove("active");
        }
        navigation.children[i].classList.add("active");
    })
}

// активный класс для бургера и навигации 
toggle.onclick = function(){
    this.classList.toggle("active");
    nav.classList.toggle("activeNav")
}
