var tlcApp = angular.module('tlcApp', []);

tlcApp.controller('MainCtrl', function ($scope) {
  var currentDate = new Date();
  // Special rendering of ui for these params
  $scope.sitedown404 = false;
  $scope.retro = true;
  $scope.xmas = currentDate.getMonth() === 11 && currentDate.getDate() >= 25; // months are 0-11, starting at jan
  $scope.saturday = currentDate.getDay() === 6; // days are 0-6, starting at sunday
   
  var sections = [
    {'name': 'Time',
     'heading': 'Time spent with cats is never wasted',
     'text': 'Volunteering at the local animal shelter. I love the kitten room. So soft! From left to right: Snuggle, Stewie, Snuggle Paw, Yellow, Black, Grey, and Fluffy.',
     'images':['todd_kittens.jpg'],
     'retroImages':['dancing-cat.gif','smilingcat.jpg'],
     'retroXmasImages':['xmas-giphy.gif','wrap.gif']},
    {'name': 'Cool',
     'heading': 'Cool cats are rare',
     'text': 'My 7th grade school photo with my cat Mr. Snuggle Muffin',
     'images':['lasers.jpg'],
     'retroImages':['kittyloaf.gif','keyboard-cat.gif']},
    {'name': 'Most',
     'heading': 'Most are assholes',
     'text': 'Big kitty. Part coon cat',
     'images':['todd_black_cat.jpg'],
     'retroImages':['tiny1.gif','tiny2.gif','tiny3.gif','tiny4.gif']},
    {'name': 'Worth',
     'heading': 'Cats = not worth it',
     'text': 'Like twins huh?',
     'images':['kitten_mohawk.jpg','mohawktodd.jpg'],
     'retroImages':['hypno-cat.gif','poptartcat.gif']}
  ];
  var footerSections = []
  for( var i = 0; i < sections.length; i++ ) {
      sections[i].nav = 'section' + i;
      footerSections.push({'name':'divider'});
      footerSections.push(sections[i]);
  }
  $scope.sections = sections;
  $scope.footerSections = footerSections;
});