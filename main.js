var gmail;


function refresh(f) {
  if(/in/.test(document.readyState)) {
    setTimeout('refresh(' + f + ')', 10);
  } else {
    f();
  }
}


var main = function(){
  gmail = new Gmail();
  console.log('Hello,', gmail.get.user_email())
  gmail.observe.on("open_email", function(id, url, body, xhr) {
    // console.log("id:", id, "url:", url, 'body', body, 'xhr', xhr);
    // console.log(gmail.get.email_data(id).people_involved);
    
    var emails = [];
    gmail.get.email_data(id).people_involved.forEach(function(arr) {
      if(arr[1].substring(arr[1].length - 9) != "gmail.com") {
        emails.push(arr[1]);
        console.log(arr[1]);
      }
    });
    
    $(emails).each(function(index, address) {
      $('span[email="' + address + '"].gD').each(function() {
        console.log(this);
        var $a = $('<a href="http://' + address.substring(address.indexOf("@") + 1) + '"> ' + address.substring(address.indexOf("@") + 1) + '</a>');
        $(this).parent().append($a);
        console.log("here!!");
      });
    });

  });
}


refresh(main);