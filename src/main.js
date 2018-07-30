import { Entry } from './journal';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function(){
  $('#thisForm').submit(function(e){
    e.preventDefault();
    //console.log($("#journal-title").val());
    var journalTitle = $("#journal-title").val();
    var body = $("#journal-body").val();
    var userEntry = new Entry(journalTitle, body);
    // userEntry.for(function(output) {
    //       $('#journalEntry').append("<p>" + body + "</p>");
    // });
    $("#journalEntry").prepend(
      "<h3>" + userEntry.journal + "</h3>",
      "<p>" + userEntry.body + "</p>"
    );
  });
});
