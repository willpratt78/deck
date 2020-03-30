$(document).ready(function() {
  $('form#list').submit(function(event) {

    var suits = [spades, hearts, diamonds, clubs];
    var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    suits.forEach(function(value) {
      values.forEach(function(suits)

      event.preventDefault();
    $(".output").append("<li>" + value + "of" + suit + "</li>")
    });
  });
});