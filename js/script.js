 let profileDropdown = document.querySelector('.profileDropdownWrapper');
 let profileDropdownClick = document.querySelector('.advisorMyprofilePoppup');
 let advisorProfileDownArrow = document.querySelector('.advisorprofiledownarrow');

// this will close when click outside body

// window.addEventListener('mouseup',function(event){
//         if(event.target != profileDropdownClick && event.target.parentNode != profileDropdownClick){
//           profileDropdownClick.style.display = "none";
//           advisorProfileDownArrow.style.rotate ="0deg";
//         }
//   });  


profileDropdown.addEventListener('click',()=>{
  if (profileDropdownClick.style.display === "none") {
    profileDropdownClick.style.display = "block";
    advisorProfileDownArrow.style.rotate ="180deg";
    profileDropdownClick.style.transition = "0.2s";
  } else {
    profileDropdownClick.style.display = "none";
    advisorProfileDownArrow.style.rotate ="0deg";
  } 
})
