


$(function() {
    $("#datePicker").datepicker();
  
});

$(function() {
    var programmingLanguages = [
        "JavaScript",
        "Python",
        "Java",
        "C"
    ];
    $("#languages").autocomplete( {
        source: programmingLanguages
    }); 
});
