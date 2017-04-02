 var language = "it";
 $("#eng").click(function () {
     language = "en";
     console.log('il sito è in inglese');
 })
 $('#ita').click(function () {
     language = "it";
     console.log('il sito è in italiano');
 });
 $("#searchterm").keyup(function (e) {
     var q = $("#searchterm").val();
     console.log(language)
     var URL = "http://" + language + ".wikipedia.org/w/api.php?callback=?";
     var DATA = {
         srsearch: q
         , action: "query"
         , list: "search"
         , format: "json"
     }
     var SUCCESS = function (data) {
         $("#results").empty();
         $("#results").append("<h1>Risultati per <span>" + q + "</span></h1>");
         if (data.query) {
             $.each(data.query.search, function (i, item) {
                 $("#results").append("<div class='tab'><h2><a href='http://" + language + ".wikipedia.org/wiki/" + encodeURIComponent(item.title) + "'>" + item.title + "</a></h2><p>" + item.snippet + " [...]</p></div>");
             });
         }
     }
     $.getJSON(URL, DATA, SUCCESS).fail(function () {
         console.log('failed!')
     })
 });
 //
 //
 //----------------------------------------
 //ERROR REPORT
 //
 /*      if ($(q) == '') {
             $('#results').empty();
         }; */
 //
 //----------------------------------------
 //INPUT AUTOCOMPLETE
 //
 /*      $("#searchterm").autocomplete({
             source: function (request, response) {
                 $.ajax({
             url: "http://it.wikipedia.org/w/api.php"
             , dataType: "jsonp"
             , data: {
                 'action': "opensearch"
                 , 'format': "json"
                 , 'search': request.term
             }
             , success: function (data) {
                 response(data[1]);
             }
         });
     }
 });*/