document.getElementById('search').addEventListener('click', function() {
    var url1_start = "https://od-api.oxforddictionaries.com:443/api/v1/entries/en/";
    var qry = document.getElementById('form').value;
    var url1_def = "/definitions";
    var url1_audio = "/pronunciations";
    var url1_expl  = "/examples";
    var url_def = url1_start + qry + url1_def;
    var url_audio = url1_start + qry + url1_audio;
    var url_exmpl = url1_start + qry + url1_expl;



    $.ajax({
      //  var qry = document.getElementById('form').value;
        url: url_def,
        //url: myurl,
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Accept", "application/json"),
            xhr.setRequestHeader("app_id", "c6c18d56"),
            xhr.setRequestHeader("app_key", "f8256e2d354a77484d2fd9ace07c8c1a")
        },
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        processData: false,
        success: function(data) {
            //var my_data = JSON.parse(data);
        var def = "<em>"+data.results[0].lexicalEntries[0].lexicalCategory+"</em>"+" : "+"<br>"+data.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0];
         def = def + "<br>" ;
              document.getElementById('no_result').innerHTML = "";
             document.getElementById('mera_btn').innerHTML = '<img src="mike.png" width="14px" height="14px"/>';

             document.getElementById('query_result').innerHTML = def;
        },
        error: function() {
          document.getElementById('no_result').innerHTML = "<img src='nores.png' width=273.55px height='auto'/>";
          document.getElementById('heading1').innerHTML = "";
          document.getElementById('mera_btn').innerHTML = "";
          document.getElementById('query_result').innerHTML = "";

        }
    });
    $.ajax({
      url:url_audio,
      beforeSend: function(xhr) {
          xhr.setRequestHeader("Accept", "application/json"),
          xhr.setRequestHeader("app_id", "c6c18d56"),
          xhr.setRequestHeader("app_key", "f8256e2d354a77484d2fd9ace07c8c1a")
      },
      type: 'GET',
      dataType: 'json',
      contentType: 'application/json',
      processData: false,
      success: function(data) {
        var ad = new Audio(data.results[0].lexicalEntries[0].pronunciations[0].audioFile)
        var hd = data.results[0].lexicalEntries[0].text + " <h>|<h> " + data.results[0].lexicalEntries[0].pronunciations[0].phoneticSpelling;
        document.getElementById('heading1').innerHTML = hd;
        document.getElementById('mera_btn').onmousedown = function() {
            ad.play();
        }
      },
      error: function(){
        document.getElementById('mera_btn').innerHTML = "";
      }
    });

    $.ajax({
      url:url_exmpl,
      beforeSend: function(xhr) {
          xhr.setRequestHeader("Accept", "application/json"),
          xhr.setRequestHeader("app_id", "c6c18d56"),
          xhr.setRequestHeader("app_key", "f8256e2d354a77484d2fd9ace07c8c1a")
      },
      type: 'GET',
      dataType: 'json',
      contentType: 'application/json',
      processData: false,
      success: function(data) {
        var ef ="<em>"+"<b>Examples</b>"+"</em>"+" : "+"<br>"+data.results[0].lexicalEntries[0].entries[0].senses[0].examples[0].text;
         ef = "<br>" + ef + "<br>" ;
              document.getElementById('no_result').innerHTML = "";
             document.getElementById('mera_btn').innerHTML = '<img src="mike.png" width="14px" height="14px"/>';
             document.getElementById('query_result').innerHTML = document.getElementById('query_result').innerHTML+ef;
        }
    });
  });

  document.onkeydown = function(){
    if(window.event.keyCode=='13')
    {
      var url1_start = "https://od-api.oxforddictionaries.com:443/api/v1/entries/en/";
      var qry = document.getElementById('form').value;
      var url1_def = "/definitions";
      var url1_audio = "/pronunciations";
      var url1_expl  = "/examples";
      var url_def = url1_start + qry + url1_def;
      var url_audio = url1_start + qry + url1_audio;
      var url_exmpl = url1_start + qry + url1_expl;



      $.ajax({
        //  var qry = document.getElementById('form').value;
          url: url_def,
          //url: myurl,
          beforeSend: function(xhr) {
              xhr.setRequestHeader("Accept", "application/json"),
              xhr.setRequestHeader("app_id", "c6c18d56"),
              xhr.setRequestHeader("app_key", "f8256e2d354a77484d2fd9ace07c8c1a")
          },
          type: 'GET',
          dataType: 'json',
          contentType: 'application/json',
          processData: false,
          success: function(data) {
              //var my_data = JSON.parse(data);
          var def = "<em>"+data.results[0].lexicalEntries[0].lexicalCategory+"</em>"+" : "+"<br>"+data.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0];
           def = def + "<br>" ;
                document.getElementById('no_result').innerHTML = "";
               document.getElementById('mera_btn').innerHTML = '<img src="mike.png" width="14px" height="14px"/>';

               document.getElementById('query_result').innerHTML = def;
          },
          error: function() {
            document.getElementById('no_result').innerHTML = "<img src='nores.png' width=273.55px height='auto'/>";
            document.getElementById('heading1').innerHTML = "";
            document.getElementById('mera_btn').innerHTML = "";
            document.getElementById('query_result').innerHTML = "";

          }
      });
      $.ajax({
        url:url_audio,
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Accept", "application/json"),
            xhr.setRequestHeader("app_id", "c6c18d56"),
            xhr.setRequestHeader("app_key", "f8256e2d354a77484d2fd9ace07c8c1a")
        },
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        processData: false,
        success: function(data) {
          var ad = new Audio(data.results[0].lexicalEntries[0].pronunciations[0].audioFile)
          var hd = data.results[0].lexicalEntries[0].text + " <h>|<h> " + data.results[0].lexicalEntries[0].pronunciations[0].phoneticSpelling;
          document.getElementById('heading1').innerHTML = hd;

          document.getElementById('mera_btn').onmousedown = function() {
              ad.play();
          }
        },

        error: function(){
          document.getElementById('mera_btn').innerHTML = "";
        }
      });

      $.ajax({
        url:url_exmpl,
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Accept", "application/json"),
            xhr.setRequestHeader("app_id", "c6c18d56"),
            xhr.setRequestHeader("app_key", "f8256e2d354a77484d2fd9ace07c8c1a")
        },
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        processData: false,

        success: function(data) {
          var ef ="<em>"+"<b>Examples</b>"+"</em>"+" : "+"<br>"+data.results[0].lexicalEntries[0].entries[0].senses[0].examples[0].text;
           ef = "<br>" + ef + "<br>" ;
                document.getElementById('no_result').innerHTML = "";
               document.getElementById('mera_btn').innerHTML = '<img src="mike.png" width="14px" height="14px"/>';
               document.getElementById('query_result').innerHTML = document.getElementById('query_result').innerHTML+ef;
          }
      });
    }
};
