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
        // console.log(this);
        var url = address.substring(address.indexOf("@") + 1);
        var $a = $('<a href="http://' + url + '"> ' + url + '</a>');
        $(this).parent().append($a);
        var $i = $('<img class="fav" src="http://www.google.com/s2/favicons?domain=www.' + url + '">');
        $(this).parent().prepend($i);
      });
    });

  });
}


refresh(main);