document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

const click = document.getElementById("submit")

function handleSubmit(){
    alert("Your form has been successfully submitted")
    click.innerText = "Submitted";
}