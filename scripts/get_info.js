window.onload = initPage;

function initPage() {
    
    // create the onclick function
    var image=document.getElementById('background');
    image.onclick = function() {
      //alert('hi?');
      var id='13037654320';
      getDetails(id);
    };
  
}

function getDetails(id) {
    request = createRequest();
    if (request == null) {
        alert("Unable to create request");
        return;
    }
    // Version for XML server-side script

    
    //request.onreadystatechange = displayDetails;
    /*
    var url = "get_info.php";
    requestData = "id=" + id;
    request.open("POST", url, true);
    request.setRequestHeader("Content-Type",
    "application/x-www-form-urlencoded");
    request.send(requestData);
    */
  var url= "get_info.php?id=" + escape(id);
  request.open("GET", url, true);
  request.onreadystatechange = displayDetails;
  request.send(null);
}

function displayDetails() {
    if (request.readyState == 4) {
        if (request.status == 200) {
            //var detailDiv = document.getElementById("description");
            var responseDoc = request.responseXML;
            
             var sexuality = responseDoc.getElementsByTagName('sexuality')[0];
             var birth = responseDoc.getElementsByTagName('birth')[0];
             var contact_way = responseDoc.getElementsByTagName('contact_way')[0];
             var entry_date = responseDoc.getElementsByTagName('entry_date')[0];
             var _from = responseDoc.getElementsByTagName('_from')[0];
             
            sexuality = '女';
            birth = '1999-01-01';
            contact_way = '123456789';
            _from = '关东';
            entry_date = '2013-01-01';

            var sexuality_node = document.createTextNode("性别： " + sexuality);
            var birth_node = document.createTextNode("出生日期：" + birth);
            var contact_way_node = document.createTextNode("联系方式：" + contact_way);
            var entry_date_node = document.createTextNode("入学日期：" + entry_date);
            var _from_node = document.createTextNode("籍贯：" + _from);

            var ul_detail = document.getElementById('background').getElementsByTagName('ul')[0];
                       
            two_level_append(ul_detail, 'li', 'sexuality', sexuality_node);
            two_level_append(ul_detail, 'li', 'birth', birth_node);
            two_level_append(ul_detail, 'li', '_from', _from_node);
            two_level_append(ul_detail, 'li', 'contact_way', contact_way_node);
            two_level_append(ul_detail, 'li', 'entry_date', entry_date_node);

            //alert('hi!');
            var image=document.getElementById('background');
            image.onclick = undisplayDetails;
        }
    }
}

function undisplayDetails() {
    //alert('undisplayDetails');

    var ul_detail = document.getElementById('background').getElementsByTagName('ul')[0];
    lis = ul_detail.getElementsByTagName('li');
   
    for (i = lis.length; i>0; i--) {
        switch(lis[i-1].id){
            case 'sexuality':
            case 'birth':
            case 'entry_date':
            case 'contact_way':
            case '_from':{
                ul_detail.removeChild(lis[i-1]);
                break;
            }
        }
    }

    var image = document.getElementById('background');
    image.onclick = getDetails;
}
 


