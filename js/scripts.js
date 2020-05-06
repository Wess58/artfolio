// $(window).scroll(function() {
// //
// if ($(window).scrollTop() >= 100) {
//
//   $(".rellax").eq($(this).index()).addClass("blur");
// } else {
//   $(".rellax").eq($(this).index()).removeClass("blur");
// }
// });

$(document).ready(function() {
  $('.image-link').each(function() {
    $(this).css({
      "left": Math.random() * $(".container").outerHeight,
      "left": Math.random() * $(".container-fluid").outerHeight
      // "top": Math.random() * window.outerHeight

    })
  });





// #sendMailForm takes the data from the form with given ID
$( '#sendMailForm' ).submit(function ( e ) {
    var data = {
        'name': $('#name').val(),
        'email': $('#email').val(),
        'contact': $('#contactNumber').val(),
        'message' : $('#message').val()
    };
    // POST data to the php file
    $.ajax({
        url: 'mail.php',
        data: data,
        type: 'POST',
        success: function (data) {
			// For Notification
            document.getElementById("sendMailForm").reset();
            var $alertDiv = $(".mailResponse");
            $alertDiv.show();
            $alertDiv.find('.alert').removeClass('alert-danger alert-success');
            $alertDiv.find('.mailResponseText').text("");
            if(data.error){
                $alertDiv.find('.alert').addClass('alert-danger');
                $alertDiv.find('.mailResponseText').text(data.message);
            }else{
                $alertDiv.find('.alert').addClass('alert-success');
                $alertDiv.find('.mailResponseText').text(data.message);
            }
        }
    });
    e.preventDefault();
});




});
