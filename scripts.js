const gridBoxes = document.getElementsByClassName('grid-box-inner');

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
    }
  }
});