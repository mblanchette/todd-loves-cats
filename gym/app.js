angular.module('gymApp', ['ngMaterial'])
  .config(function($mdIconProvider){
      $mdIconProvider
          .icon("menu"      ,"./img/menu.svg"                ,24)
          .icon("back"      ,"./img/keyboard-backspace.svg"  ,24)
          .icon("star"      ,"./img/star-outline.svg"        ,24)
          .icon("close"     ,"./img/close.svg"               ,24)
          .icon("dumbbell"  ,"./img/dumbbell.svg"            ,24)
          .icon("run"       ,"./img/run.svg"                 ,24)
          .icon("trophy"    ,"./img/trophy-variant.svg"      ,24)
          .icon("plus"      ,"./img/plus-circle.svg"         ,24)
          .icon("minus"     ,"./img/minus-circle.svg"        ,24);
  })
  .controller('AppController',function($scope, $location, $log, $window, $mdSidenav, $mdUtil, $mdDialog){
  
    $scope.setView = function(view) {
      $scope.view = view;
    };
    $scope.setView('home'); // default view
  
    $scope.navBack = function() {
      if( $scope.view === 'day' ) {
        $scope.setView('week');
      } else {
        $scope.setView('home');
      }
    };
  
    function buildToggler(navID) {
      var debounceFn =  $mdUtil.debounce(function(){
            $mdSidenav(navID).toggle();
          },200);
      return debounceFn;
    }
    function closeLeft() {
      $mdSidenav('left').close();
    };
    $scope.toggleLeft = buildToggler('left');
  
    $scope.showHome = function() {
      $scope.setView('home');
      closeLeft(); // Close sidenav incase open over view
    };
  
    var storageKey = 'gymAppConfig';
    function getConfigFromStorage() {
        try {
            var configStr = $window.localStorage.getItem(storageKey);
            if( configStr != null ) {
              $log.log('loaded config from local storage', configStr);
              var obj = angular.fromJson(configStr);
              // Convert date strings back to date objects
              if( obj.startDate ) {
                obj.startDate = new Date(obj.startDate);
              }
              if( obj.weeksOff && obj.weeksOff.length ) {
                for( var i = 0; i < obj.weeksOff.length; i++ ) {
                  obj.weeksOff[i] = new Date( obj.weeksOff[i] );
                }
              }
              return obj;
            }
        } catch (err) {
            $log.error('failed to read local storage, returning default config');
        }
        return null;
    }
    function writeConfigToStorage(data) {
        try {
            $window.localStorage.setItem(storageKey, angular.toJson(data));
        } catch (err) {
            $log.error('failed to write local storage, date will not be saved');
        }
    }
    var config = getConfigFromStorage();
    if( config === null ) { // Setting default start date and weeks off
      config = {
        startDate: new Date(2015, 7, 3, 0, 0, 0, 0), // Mon Aug 3, 2015  
        weeksOff: [
          new Date(2015, 7, 31, 0, 0, 0, 0) // Mon Aug 31, 2015  
        ]
      }
    }
    $scope.config = config;
    $log.log('config', $scope.config);
    
    function createDate(startdate, week, day) {
      var workDate = new Date(startdate.getTime());
      // adjust date by 1-based week and day for mon-fri
      workDate.setDate( workDate.getDate() + ((7 * (week-1)) + (day-1)) );
      return workDate;
    }
    
    var currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // clear time from date for comparison
    
    $scope.today = {};
    $scope.currentDate = currentDate;
    $scope.weeks = weeks;
    
    function getWeeksOffMap() {
      var weeksOffMap = {};
      angular.forEach($scope.config.weeksOff, function(weekOff, index) {
         this[weekOff.getTime()] = true;
      }, weeksOffMap);
      return weeksOffMap;
    }
    function setDateOnAllDays() {
      var start = $scope.config.startDate;
      var weeksOffMap = getWeeksOffMap();
      // reset today values for week/day, will change
      $scope.today = {};
      
      var skippedWeeks = 0;
      angular.forEach(weeks, function(week, index) {
        angular.forEach(week.days, function(day, index2) {
          var workDate = createDate(start, week.id + skippedWeeks, day.id);
          if( index2 === 0 ) { // Monday of week
            while( weeksOffMap[workDate.getTime()] ===  true ) {
              skippedWeeks++;
              workDate = createDate(start, week.id + skippedWeeks, day.id);
            }
          }
          day.date = workDate;
          
          var isToday = workDate.getTime() === currentDate.getTime();
          if( isToday ) {
            $scope.today.week = week;
            $scope.today.day = day;
          }
        });
      });
    }
    setDateOnAllDays();
    $log.log('today', $scope.today);
    
    function handleConfigChange() {
      writeConfigToStorage($scope.config);
      // Reset dates attached to all days when changed
      setDateOnAllDays();
    }
    $scope.changeStartDate = function() {
      var start = $scope.config.startDate;
      $log.log('changed start date', start);
      if( !start ) return; // invalid, no date is specified
      var dayofweek = start.getDay();
      if( dayofweek !== 1 ) {
        // adjust start date to monday of week
        start.setDate( start.getDate() - (dayofweek - 1) );
      }
      handleConfigChange();
    }
    $scope.changeWeeksOff = function(index) {
      var weekOff = $scope.config.weeksOff[index];
      $log.log('changed week off', index, weekOff);
      if( !weekOff ) return; // invalid, no date is specified
      var dayofweek = weekOff.getDay();
      if( dayofweek !== 1 ) {
        // adjust date to monday of week
        weekOff.setDate( weekOff.getDate() - (dayofweek - 1) );
      }
      handleConfigChange()
    }
    $scope.removeWeekOff = function(index) {
      $log.log('removed week off', index);
      $scope.config.weeksOff.splice(index, 1);
      handleConfigChange()
    }
    $scope.addWeekOff = function() {
      $scope.config.weeksOff.push( null );
    }
    
    function setDesriptionLines(exercise) {
      if( exercise.desc.indexOf('·') != -1 && !exercise.descLines ) {
        var lines;
        if( exercise.desc.indexOf('Reps:') != -1 ) {
          bullets = exercise.desc.substring(0, exercise.desc.indexOf('Reps:'));
          lines = bullets.split('·');
          
          var notes = exercise.desc.substring(exercise.desc.indexOf('Reps:'));
          if( notes.indexOf('Variations:') != -1 ) {
            var notes1 = notes.substring(0, notes.indexOf('Variations:'));
            var notes2 = notes.substring(notes.indexOf('Variations:'));
            lines.push(notes1);
            lines.push(notes2);
          } else {
            lines.push(notes);
          }
        } else {
          lines = exercise.desc.split('·');
        }
        if( lines[0].length === 0 ) {
          lines.splice(0, 1); // remove expected first empty section from first bullet
        }
        exercise.descLines = lines;
      }
    }
    $scope.showExercise = function(id, event) {
      $scope.exercise = exercises[id];
      if( !$scope.exercise ) return;
      $scope.exerciseId = id;
      setDesriptionLines($scope.exercise);
      
      $mdDialog.show({
        templateUrl: 'dialog.html',
        controller: function DialogController($scope, $mdDialog) {
            $scope.closeDialog = function() {
                $mdDialog.hide();
            };
        },
        scope: $scope,        // use parent scope in template
        preserveScope: true,  // do not forget this if use parent scope
        parent: angular.element(document.body),
        targetEvent: event,
        clickOutsideToClose: true
      });
    }

    $scope.getExerciseRestTime = function(weekId, day, exercisePairCode, exerciseId) {
      var exercise = exercises[exerciseId];
      var isCore = exercise && exercise.core ? true : false;
      if( weekId <= 4 ) {
        if( day.desc === 'Core' || isCore ) return '30sec';
        return '60sec';
      } else if ( weekId <= 8 ) {
        if( day.desc === 'Core' || isCore ) return '30sec';
        return '30-45sec';
      } else if ( weekId <= 12 ) {
        if( day.desc === 'Core' || isCore ) return '0sec (perform as 1 set)';
        if( day.type === dayTypes.STRENGTH_TRAINING.code ) {
          if( exercisePairCode === 'a' ) return '0sec (continue to next in pair)';
          if( exercisePairCode === 'b' ) return '60sec (between pair sets)';
        }
        return '30sec'; // valid fallback value?
      }
      return '';
    };
    
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
      closeLeft(); // Close sidenav incase open over view
      $scope.week = week;
      $scope.day = null;
      $scope.exercise = null;
      $scope.setView('week');
    }
    $scope.showDay = function(day) {
      $scope.day = day;
      $scope.exercise = null;
      $scope.challengeCounts = {};
      $scope.challengeExercise = null;
      $scope.setView('day');
    }
    $scope.showToday = function() {
      if( $scope.today.week ) {
        $scope.showWeek( $scope.today.week );
      }
      if( $scope.today.day ) {
        $scope.showDay( $scope.today.day );
      }
    }
    $scope.getDayTypeIcon = function(dayType) {
      return dayTypes[dayType].icon;
    }
    $scope.getDayTypeColor = function(dayType) {
      return dayTypes[dayType].color;
    }
    $scope.getDayTypeName = function(dayType) {
      return dayTypes[dayType].name;
    }
    
    // CHALLENGE
    
    var challengeIncrements = [];
    for( var i = 5; i <= 50; i+=5 ) {
      challengeIncrements.push(i);
    }
    $scope.challengeIncrements = challengeIncrements;
    
    $scope.incrementChallengeCount = function(amount) {
      if( !$scope.challengeExercise ) return;
      if( !$scope.challengeCounts[$scope.challengeExercise] ) {
        $scope.challengeCounts[$scope.challengeExercise] = 0;
      }
      $scope.challengeCounts[$scope.challengeExercise] += amount;
    }
    $scope.setChallengeExercise = function(exerciseName) {
      $scope.challengeExercise = exerciseName;
    }
  });