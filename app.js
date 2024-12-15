
const tabButtons = document.querySelectorAll(" .tablinks");

for (var i = 0; i < tabButtons.length; i++) {
    tabButtons[i].addEventListener("click", function () {
        var tabName = this.dataset.tab;
        var tabcontent = document.getElementById(tabName);

        var allTabcontent = document.querySelectorAll(".tabcontent");
        var allTabButtons = document.querySelectorAll(".tablinks");

        for( var a=0; a< allTabcontent.length; a++){
            allTabcontent[a].style.display= "none"
        }
        for( var x=0; x < allTabButtons.length; x++){
            allTabButtons[x].classList.remove("active");    
        }

        tabcontent.style.display = "block";
        this.classList.add("active");
    });
}
document.querySelector('.tablinks').click();