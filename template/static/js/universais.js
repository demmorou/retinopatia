function readURL(input) {
     if (input.files && input.files[0]) {
         var reader = new FileReader();
         reader.onload = function (e) {
             $('#blah')
                 .attr('src', e.target.result)
                 .width(550)
                 .height(550);
               var name = document.getElementById('selectedFile'); 
               // alert('Selected file: ' + name.files.item(0).name);
               document.getElementById('image_name').innerHTML = name.files.item(0).name;
         };
         reader.readAsDataURL(input.files[0]);
     }
 }

// document.getElementById('selectedFile').onchange = function () {
//      alert('Selected file: ' + this.value);
// };