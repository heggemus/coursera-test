/* 
My Module 4 solution

This is the expected output:
Hello Karim
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
*/

(function () {

    var names = ["Karim", "Donald Trump", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var i = 0; i < names.length; i++) {
      var firstletter = names[i].charAt(0).toLowerCase();
      if (firstletter === 'j' || firstletter === 'd') {
        byeSpeaker.speak(names[i]);
      } else {
        helloSpeaker.speak(names[i]);
      }
    }
})();
