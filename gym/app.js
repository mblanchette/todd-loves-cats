angular.module('gymApp', [])//, ['ngMaterial', "ngRoute"])
/*   .config(["$routeProvider", function($routeProvider) {
      $routeProvider.when("/view1", {templateUrl: "partials/view1.html"});
      $routeProvider.when("/view2", {templateUrl: "partials/view2.html"});
      $routeProvider.when("/view3", {templateUrl: "partials/view3.html"});
      $routeProvider.otherwise({redirectTo: "/view1"});
  }])
*/
  /*.config(function($mdThemingProvider, $mdIconProvider){
      $mdIconProvider
          .defaultIconSet("./assets/svg/avatars.svg", 128)
          .icon("menu"       , "./assets/svg/menu.svg"        , 24)
          .icon("share"      , "./assets/svg/share.svg"       , 24)
          .icon("google_plus", "./assets/svg/google_plus.svg" , 512)
          .icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
          .icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
          .icon("phone"      , "./assets/svg/phone.svg"       , 512);
          $mdThemingProvider.theme('default')
              .primaryPalette('brown')
              .accentPalette('red');
  });*/
  .controller('AppController',function($scope, $location, $log, $window){
  
    var startDateKey = 'gymAppStartDate';
    function getStartDateFromStorage(key) {
        try {
            var dateStr = $window.localStorage.getItem(key);
            if( dateStr != null ) {
              $log.log('loaded start date from local storage', dateStr);
              return new Date( parseInt( dateStr ) );
            }
        } catch (err) {
            $log.error('failed to read local storage, returning default date');
        }
        return null;
    }
    function writeStartDateToStorage(key, date) {
        try {
            $window.localStorage.setItem(key, "" + date.getTime());
        } catch (err) {
            $log.error('failed to write local storage, date will not be saved');
        }
    }
    var start = getStartDateFromStorage(startDateKey);
    if( start === null ) { // Setting default start date
      start = new Date(2015, 7, 3, 0, 0, 0, 0); // Mon Aug 3, 2015
    }
    $scope.startDate = start;
    $log.log('start date', $scope.startDate);
    
    function createDate(startdate, week, day) {
      var workDate = new Date(startdate.getTime());
      // adjust date by 1-based week and day for mon-fri
      workDate.setDate( workDate.getDate() + ((7 * (week-1)) + (day-1)) );
      return workDate;
    }
    
    var today = {};
    var currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // clear time from date for comparison
    
    $scope.today = today;
    $scope.currentDate = currentDate;
    $scope.weeks = weeks;
    
    function setDateOnAllDays(start) {
      angular.forEach(weeks, function(week, index) {
        angular.forEach(week.days, function(day, index2) {
          var workDate = createDate(start, week.id, day.id);
          day.date = workDate;
          
          var isToday = workDate.getTime() === currentDate.getTime();
          if( isToday ) {
            today.week = week.id;
            today.day = day.id;
          }
        });
      });
    }
    setDateOnAllDays($scope.startDate);
    $log.log('today', $scope.today);
    
    $scope.changeStartDate = function() {
      var start = $scope.startDate;
      $log.log('changed start date', start);
      if( !start ) return; // invalid, no date is specified
      var dayofweek = start.getDay();
      if( dayofweek !== 1 ) {
        // adjust start date to monday of week
        start.setDate( start.getDate() - (dayofweek - 1) );
      }
      writeStartDateToStorage(startDateKey, start);
      
      // Reset dates attached to all days when changed
      setDateOnAllDays(start);
    }
    
    $scope.showExercise = function(id) {
      $scope.exercise = exercises[id];
      $scope.exerciseId = id;
    }
    $scope.getExerciseImages = function(id) {
      var exercise = exercises[id];
      var images = [];
      if( !exercise ) {
        return images;
      }
      for(var i = 1; i <= exercise.images; i++) {
        images.push( id + '_' + i );
      }
      return images;
    }
    $scope.closeExercise = function() {
      $scope.exercise = null;
      $scope.exerciseId = null;
    }
    
    $scope.showWeek = function(week) {
      $scope.week = week;
      $scope.day = null;
      $scope.exercise = null;
    }
    $scope.showDay = function(day) {
      $scope.day = day;
      $scope.exercise = null;
    }
  });