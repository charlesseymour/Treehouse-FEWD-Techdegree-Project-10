const gridBoxes = document.getElementsByClassName('grid-box-inner');
const modal = document.getElementById('modal');
const modalName = document.getElementById('modal-name');
const modalEmail = document.getElementById('modal-email');
const modalHometown = document.getElementById('modal-hometown');
const modalPhone = document.getElementById('modal-phone');
const modalAddress = document.getElementById('modal-address');
const modalBirthday = document.getElementById('modal-birthday');

$.ajax({
  url: 'https://randomuser.me/api/?results=12',
  dataType: 'json',
  success: function(data) {
    for (let i = 0; i < gridBoxes.length; i++) {
      let box = gridBoxes[i];
      let user = data.results[i];
      box.querySelector('img').src = user.picture.large;
      box.querySelector('.name').innerHTML = user.name.first + " " + user.  name.last;
      let email = user.email;
      let email_name = email.match(/^([^@]*)@/)[1] + "@";
      box.querySelector('.email_name').innerHTML = email_name;
      box.querySelector('.email_domain').innerHTML = email.slice(     
        email_name.length);
      box.querySelector('.hometown').innerHTML = user.location.city;
      box.addEventListener('click', function(){        
        modal.style.display = 'block';
        document.getElementById('modal-thumbnail').src = user.picture.large;
        modalName.innerHTML = user.name.first + " " + user.name.last;
        modalEmail.innerHTML = user.email;
        modalHometown.innerHTML = user.location.city;
        modalPhone.innerHTML = user.phone;
        modalAddress.innerHTML = user.location.street + " " + user.location.    city + ", " + user.location.state + " " + user.location.postcode;
        modalBirthday.innerHTML = "Birthday: " + user.dob.date.slice(5,7) + "/" + user.dob.date.slice(8,10) + "/" + user.dob.date.slice(0,4);
      });
    }
  }
});

document.getElementById('close').addEventListener('click', function(){
  modal.style.display = 'none';
});

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};