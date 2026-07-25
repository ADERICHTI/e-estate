const toggleBtn = document.getElementById("btn")
const content = document.getElementsById("vav")
 
const toggleVisibility = ()=>{
    content.classList,toggle('is-hidden')
}
if (toggleBtn){
    toggleBtn.addEventListener('click', toggleVisibility);
};
