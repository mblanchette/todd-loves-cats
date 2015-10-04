var dayTypes = {
    STRENGTH_TRAINING: {code:'STRENGTH_TRAINING', name:"Strength Training", color:'blue', icon:'dumbbell'},
    CONDITIONING: {code:'CONDITIONING', name:"Conditioning", color:'green', icon:'run'},
    CHALLENGE: {code:'CHALLENGE', name:"Challenge", color:'red', icon:'trophy'}
}

var challenges = {
  WEEK4: {
    exercises: [
      {id: null, sets: null, reps: '100', time: null, tofail: false, name: 'Pushups', notes: ''},
      {id: 19,   sets: null, reps: '100', time: null, tofail: false, name: 'Inverted Row/Pullups', notes: ''},
      {id: 1,    sets: null, reps: '100', time: null, tofail: false, name: 'Bodyweight Squats', notes: ''},
      {id: null, sets: null, reps: '100', time: null, tofail: false, name: 'Full Sit Ups', notes: ''}
    ],
    note: 'The manner in which you complete your 100 reps of each is totally up to you! You can do 5 sets of 20 each, 10 sets of 10, whatever! Just get it done in good form and in your fastest time possible!',
    rankings: [
      'Elite - Under 8 Minutes',
      'Xtreme - Between 8 minutes and 11 minutes',
      'Pro - Between 11 minutes and 14 minutes',
      'Solid - Between 14 minutes and 17 minutes',
      'Rookie - Over 17 minutes (recommend not advance yet)'
    ]
  },
/*
week 8 monday - same as week 4
*/
  WEEK8: {
    exercises: [
      {id: null, sets: 20, reps: '10', time: null, tofail: false, name: 'Pushups', notes: ''},
      {id: 19,   sets: 20, reps: '5', time: null, tofail: false, name: 'Inverted Row/Pullups', notes: ''},
      {id: 1,    sets: 20, reps: '10', time: null, tofail: false, name: 'Bodyweight Squats', notes: ''},
      {id: null, sets: 20, reps: '10', time: null, tofail: false, name: 'Jumping Jacks', notes: ''}
    ],
    note: 'Perform the four exercises every minute for 20 straight minutes without missing any reps.',
    rankings: [
      'Elite - Make it through all 20 rounds in 20 minutes',
      'Xtreme - Make it through all 20 rounds in > 20 minutes',
      'Pro - Make it through 16-19 rounds before failure',
      'Solid - Make it through 12-15 rounds before failure',
      'Rookie - Reach muscular failure before 11 rounds'
    ]
  },
  /*
week 12 monday - same as week 4
  */
  WEEK12: {
    exercises: [
      {id: 81, sets: 12, reps: '10', time: null, tofail: false, name: 'Burpee Pushups (no pyramind)', notes: ''},
      {id: 38, sets: 12, reps: '10', time: null, tofail: false, name: 'Kettlebell Swings', notes: ''},
      {id: 19, sets: 12, reps: '10', time: null, tofail: false, name: 'Inverted Rows/Pullups', notes: ''},
      {id: 117, sets: 12, reps: '10', time: null, tofail: false, name: 'Physioball Knee Tucks (no circles)', notes: ''}
    ],
    note: 'Perform 12 rounds of the 4 exercises as fast as you can!',
    rankings: [
      'Elite - Make it through 12 rounds in <15 minutes',
      'Xtreme - Make it through 12 rounds in 15-20 minutes',
      'Pro - Make it through 12 rounds in 20-25 minutes',
      'Solid - Make it through 12 rounds in 25-30 minutes (recommend repeat)',
      'Rookie - Make it through 12 rounds in >30 minutes (recommend repeat)'
    ]
  }
}

// based on javasript date getDay() for day of week, monday-friday 1-5
var weeks = [
  {
    id: 1, // WEEK 1
    days: [
      {
        id: 1, // MONDAY
        type: dayTypes.STRENGTH_TRAINING.code,
        desc: 'Upper Body Push',
        showRestTime: true,
        exercises: [
          {id: 99, sets: 2, reps: '10', time: null, tofail: false, name: 'Spiderman Crawls', notes: '10 crawls forward and backward each set'},
          {id: 40, sets: 3, reps: '10', time: null, tofail: false, name: 'Alternate DB Press (neutral grip)', notes: 'Alternate 10 presses on each arm per set'},
          {id: 78, sets: 3, reps: '12', time: null, tofail: false, name: 'Rotational DB Shoulder Press', notes: 'Alternate 6 reps on each arm per set'},
          {id: 69, sets: 3, reps: '12', time: null, tofail: false, name: 'Shoulder "L" Raises', notes: '6 raises forward and 6 to the side each arm each set.'},
          {id: 36, sets: 4, reps: '10-12', time: null, tofail: false, name: 'Woodchopper Pushdowns', notes: '2 sets from high right to low left and vice versa'},
          {id: 65, sets: 3, reps: '15', time: null, tofail: false, name: 'Rotator Cuff Tubing ER', notes: '3 sets each on right and left arm'}
        ]
      },
      {
        id: 2, // TUESDAY
        type: dayTypes.CONDITIONING.code,
        desc: 'Quick Feet',
        showRestTime: true,
        exercises: [
          {id: 121, sets: 8, reps: 'through', time: null, tofail: false, name: 'QFL Lateral Run', notes: ''},
          {id: 118, sets: 8, reps: 'through', time: null, tofail: false, name: 'QFL In In Out Out', notes: ''},
          {id: 119, sets: 8, reps: 'through', time: null, tofail: false, name: 'QFL Icky Shuffle', notes: ''},
          {id: 120, sets: 8, reps: 'through', time: null, tofail: false, name: 'QFL Ali Shuffle', notes: ''}
        ]
      },
      {
        id: 3, // WEDNESDAY
        type: dayTypes.STRENGTH_TRAINING.code,
        desc: 'Lower Body / Core',
        showRestTime: true,
        exercises: [
          {id: 1, sets: '3-4', reps: '10-12', time: null, tofail: false, name: 'Dumbbell Squat', notes: 'Use heavy enough weight to fail in 10-12 reps'},
          {id: 62, sets:  3, reps: '12', time: null, tofail: false, name: 'Dumbbell Side Lunge', notes: 'Alternate 6 reps to right and left each set'},
          {id: 3, sets:   3, reps: '10-12', time: null, tofail: false, name: 'DB Single Leg RDL', notes: '3 sets of 10-12 on each leg'},
          {id: 11, sets:  4, reps: '10-12', time: null, tofail: false, name: 'Physioball High Bridges', notes: 'Keep your feet flat on the top of the physioball'},
          {id: 108, sets: 2, reps: '/', time: null, tofail: true, name: 'Starfish Crunch', notes: 'Do as many reps as you can to failure'},
          {id: 105, sets: 2, reps: '/', time: null, tofail: true, name: 'Heels to the Heavens', notes: 'Do as many reps as you can to failure'}
        ]
      },
      {
        id: 4, // THURSDAY
        type: dayTypes.CONDITIONING.code,
        desc: 'SPR-Interval Intensity',
        exercises: [
          {id: null, sets: null, reps: null, time: '5min', tofail: false, name: 'Warmup jog', notes: ''},
          {id: null, sets: null, reps: null, time: '10min', tofail: false, name: 'Interval sprint/jog', notes: '20 second all out sprint / 40 second jog'},
          {id: null, sets: null, reps: null, time: '5min', tofail: false, name: 'Cooldown jog', notes: ''}
        ]
      },
      {
        id: 5, // FRIDAY
        type: dayTypes.STRENGTH_TRAINING.code,
        desc: 'Upper Body Pull / Core',
        showRestTime: true,
        exercises: [
          {id: 19, sets: 4, reps: '12', time: null, tofail: false, name: 'Inverted Row', notes: 'Can do either with knees bent or straight for more challenge'},
          {id: 5, sets:  3, reps: '10-12', time: null, tofail: false, name: 'Underhand Pulldowns', notes: 'Drape tubing over high bar if no pulldown machine available'},
          {id: 41, sets: 3, reps: '12', time: null, tofail: false, name: 'Reverse Lunge Curls', notes: '6 reps stepping back with right and 6 on left each set'},
          {id: 9, sets:  3, reps: '10-12', time: null, tofail: false, name: 'DB Hammer Curls', notes: 'Slowly control the lowering of the dumbbells'},
          {id: 110, sets: 4, reps: '/', time: null, tofail: true, name: 'V-Up Russian Twists', notes: '4 sets to failure. Minimize rest between sets to 30 seconds.'}
        ]
      }
    ]
  }, 
  {
    id: 2, // WEEK 2
    days: [
      {
        id: 1, // MONDAY
        type: dayTypes.STRENGTH_TRAINING.code,
        desc: 'Upper Body Push',
        showRestTime: true,
        exercises: [
          {id: 25, sets: 3, reps: '12-15', time: null, tofail: false, name: 'Physioball Push Up Plus', notes: 'Place the ball closer to your feet for more challenge'},
          {id: 33, sets: 4, reps: '12', time: null, tofail: false, name: 'Cable Rotational Push Press', notes: '2 sets with right arm and 2 sets with left arm'},
          {id: 64, sets: 3, reps: '10-12', time: null, tofail: false, name: 'Side Laterals', notes: 'Keep slight bend in your elbows throughout'},
          {id: 72, sets: 3, reps: '10-12', time: null, tofail: false, name: 'Standing DB Row and Kickback', notes: 'Keep your lower back flat for support'},
          {id: 15, sets: 3, reps: '12', time: null, tofail: false, name: 'Cable/Tubing Tricep Push Aways', notes: 'Use fairly thick tubing if you don’t have cable column'}
        ]
      },
      {
        id: 2, // TUESDAY
        type: dayTypes.CONDITIONING.code,
        desc: 'Crunches and Punches Circuit',
        showRestTime: true,
        exercises: [
          {id: 110, sets: 1, reps: '/', time: null, tofail: true, name: 'V-Up Russian Twist', notes: ''},
          {id: null, sets: 1, reps: null, time: '3min', tofail: true, name: 'Nonstop shadow/heavybag boxing', notes: ''},
          {id: 106, sets: 1, reps: '/', time: null, tofail: true, name: 'Ball Passes', notes: ''},
          {id: null, sets: 1, reps: null, time: '3min', tofail: true, name: 'Nonstop shadow/heavybag boxing', notes: ''},
          {id: 105, sets: 1, reps: '/', time: null, tofail: true, name: 'Heels to the Heavens', notes: ''},
          {id: null, sets: 1, reps: null, time: '3min', tofail: true, name: 'Nonstop shadow/heavybag boxing', notes: ''}
        ]
      },
      {
        id: 3, // WEDNESDAY
        type: dayTypes.STRENGTH_TRAINING.code,
        desc: 'Lower Body / Core',
        showRestTime: true,
        exercises: [
          {id: 58, sets: 3, reps: '10-12', time: null, tofail: false, name: 'Single Leg Squat w/ Rot.', notes: '3 sets of 10-12 reps on each leg with weight'},
          {id: 37, sets: 3, reps: '10-12', time: null, tofail: false, name: 'Step Up Thrusts', notes: '3 sets of 10-12 on each leg. Explosiveness is key!'},
          {id: 38, sets: 4, reps: '15', time: null, tofail: false, name: 'Kettlebell/DB Swing', notes: 'Explode through the hips and glutes, don’t lift with the back'},
          {id: 67, sets: 3, reps: '15', time: null, tofail: false, name: 'Physioball Leg Curls', notes: 'Place the ball under the heels and keep your bridge lifted'},
          {id: 113, sets: 3, reps: '/', time: null, tofail: true, name: 'Canoes', notes: 'Perform 3 sets to failure'}
        ]
      },
      {
        id: 4, // THURSDAY
        type: dayTypes.CONDITIONING.code,
        desc: 'Line Drills for conditioning and footwork',
        showRestTime: true,
        exercises: [
          {id: 122, sets: 4, reps: null, time: '60sec', tofail: false, name: 'Line Drill – Crossovers', notes: ''},
          {id: 124, sets: 6, reps: null, time: '30sec', tofail: false, name: 'Line Drill – X Jump Turns', notes: ''},
          {id: 125, sets: 4, reps: null, time: '30sec', tofail: false, name: 'Line Drill – Side to Side Double Hops', notes: ''},
          {id: 122, sets: 4, reps: null, time: '60sec', tofail: false, name: 'Line Drill – Crossovers', notes: ''}
        ]
      },
      {
        id: 5, // FRIDAY
        type: dayTypes.STRENGTH_TRAINING.code,
        desc: 'Upper Body Pull / Core',
        showRestTime: true,
        exercises: [
          {id: 12, sets: 4, reps: '10-12', time: null, tofail: false, name: 'Lat Pulldowns', notes: 'Drape tubing over high bar if no pulldown unit available'},
          {id: 84, sets: 3, reps: '12', time: null, tofail: false, name: 'DB Renegade Row', notes: 'Each set consists of 12 rows on each arm'},
          {id: 82, sets: 4, reps: '10-12', time: null, tofail: false, name: 'DB Fielder Curls', notes: 'Maintain your solid lower back positioning '},
          {id: 32, sets: 3, reps: '15', time: null, tofail: false, name: 'Physioball Reverse Hyperext.', notes: 'Lift legs by contracting glutes and lower back'},
          {id: 108, sets: 3, reps: '/', time: null, tofail: true, name: 'Starfish Crunches', notes: 'Perform 3 sets to failure resting < 30 seconds between'}
        ]
      }
    ]
  }, 
  {
    id: 3, // WEEK 3
    days: [
      {
        id: 1, // MONDAY
        type: dayTypes.STRENGTH_TRAINING.code,
        desc: 'Upper Body Push',
        showRestTime: true,
        exercises: [
          {id: 81, sets: 3, reps: '8P', time: null, tofail: false, name: 'Burpee Push Up Pyramid', notes: '8,7,6,5,4,3,2,1 reps with burpees in between'},
          {id: 33, sets: 4, reps: '12', time: null, tofail: false, name: 'Cable/Tubing Rotational Chest Press', notes: '2 sets each with the right and left arm'},
          {id: 70, sets: 3, reps: '10-12', time: null, tofail: false, name: 'Plate Squeeze Stances', notes: 'Use 5-10 lb plates for this exercise'},
          {id: 94, sets: 3, reps: '10', time: null, tofail: false, name: 'Eccentric Triceps (The Big Catch)', notes: 'Wrap thick tubing around middle of foot for this'},
          {id: 65, sets: 3, reps: '15', time: null, tofail: false, name: 'Rotator Cuff Tubing ER', notes: '3 sets each on right and left arm'}
        ]
      },
      {
        id: 2, // TUESDAY
        type: dayTypes.CONDITIONING.code,
        desc: 'The CONE ZONE Workout',
        showRestTime: true,
        exercises: [
          {id: 129, sets: null, reps: '5', time: null, tofail: false, name: 'Cone Drill - 5-10-5 right and left', notes: ''},
          {id: 126, sets: null, reps: '5', time: null, tofail: false, name: 'Cone Drill – Star Drill', notes: ''},
          {id: 127, sets: null, reps: '5', time: null, tofail: false, name: 'Cone Drill – 4 Corners', notes: ''},
          {id: 128, sets: null, reps: '5', time: null, tofail: false, name: 'Cone Drill – Agility Wheel', notes: ''}
        ]
      },
      {
        id: 3, // WEDNESDAY
        type: dayTypes.STRENGTH_TRAINING.code,
        desc: 'Lower Body / Core',
        showRestTime: true,
        exercises: [
          {id: 73, sets: 3, reps: '7', time: null, tofail: false, name: '3 Way Lunge Reach', notes: 'Do 1 set of 7 for straight, side, and pivot lunges in a row without rest. Do other leg. Perform 3 sets'},
          {id: 77, sets: 3, reps: null, time: '45sec', tofail: false, name: 'Skier (Skater) Hops', notes: 'Land softly into squat position and explode out!'},
          {id: 86, sets: 3, reps: '10-12', time: null, tofail: false, name: 'Crossover Step Ups', notes: '3 sets of 10-12 on each leg'},
          {id: 4,  sets: 3, reps: '10', time: null, tofail: false, name: 'Hip Miniband Forw/Back Walk', notes: 'Walk 10 steps forward and then backward each '},
          {id: 109, sets: 3, reps: '/', time: null, tofail: true, name: 'Windshield Wipers', notes: 'Perform 3 sets to failure'}
        ]
      },
      {
        id: 4, // THURSDAY
        type: dayTypes.CONDITIONING.code,
        desc: 'Sprint',
        exercises: [
          {id: 141, sets: null, reps: '6', time: null, tofail: false, name: 'Sprint/Walk/Jog', notes: ''},
          {id: 138, sets: 6, reps: null, time: '1min', tofail: false, name: 'Full Gassers', notes: ''},
          {id: 136, sets: 4, reps: null, time: '30sec', tofail: false, name: 'Half Gassers', notes: ''},
          {id: 137, sets: null, reps: '4', time: null, tofail: false, name: '30 Yard Jumps', notes: ''}
        ]
      },
      {
        id: 5, // FRIDAY
        type: dayTypes.STRENGTH_TRAINING.code,
        desc: 'Upper Body Pull / Core',
        showRestTime: true,
        exercises: [
          {id: 76, sets: 3, reps: '/', time: null, tofail: true, name: 'Pull Ups', notes: 'Perform 3 sets to positive and negative failure'},
          {id: 63, sets: 3, reps: '10-12', time: null, tofail: false, name: 'Standing Barbell Row', notes: 'Make sure to keep your lower back arched and supported'},
          {id: 26, sets: 4, reps: '12', time: null, tofail: false, name: 'Rotational High Row', notes: 'Do 2 sets each with the right and left arms'},
          {id: 79, sets: 4, reps: '10-12', time: null, tofail: false, name: 'Incline DB Curls', notes: 'Be sure to get a full stretch on the biceps at the bottom of the rep'},
          {id: 111, sets: 3, reps: '/', time: null, tofail: true, name: 'ISO Crunches', notes: 'Perform 3 sets to failure'}
        ]
      }
    ]
  },
  {
    id: 4, // WEEK 4
    days: [
      {
        id: 1, // MONDAY
        type: dayTypes.CHALLENGE.code,
        desc: 'Challenge I',
        exercises: challenges.WEEK4.exercises,
        note: challenges.WEEK4.note,
        rankings: challenges.WEEK4.rankings,
        showChallengeCounter: true
      },
      {
        id: 2, // TUESDAY
        type: dayTypes.STRENGTH_TRAINING.code,
        desc: 'Core',
        showRestTime: true,
        exercises: [
          {id: 103, sets: 2, reps: '12', time: null, tofail: false, name: 'Rollups', notes: 'Lower yourself down very slowly'},
          {id: 105, sets: 2, reps: '15', time: null, tofail: false, name: 'Heels to the Heavens', notes: 'Clear your whole tailbone off the mat'},
          {id: 106, sets: 2, reps: '12', time: null, tofail: false, name: 'Ball Pass', notes: '6 passes each to the legs and arms'},
          {id: 104, sets: 2, reps: '15', time: null, tofail: false, name: 'Jackknifes', notes: '15 reps with right leg high and 15 with the left leg high each set. No rest in between'},
          {id: 32,  sets: 2, reps: '10', time: null, tofail: false, name: 'Physioball Reverse Hyperext.', notes: 'Keep your feet together and squeeze glutes / lower back to lift'}
        ]
      },
      {
        id: 3, // WEDNESDAY
        type: dayTypes.CONDITIONING.code,
        desc: 'Jumping',
        showRestTime: true,
        exercises: [
          {id: 130, sets: null, reps: '50', time: null, tofail: false, name: 'Jump Rope – Two Foot Hops', notes: '50 jumps'},
          {id: 132, sets: null, reps: '50', time: null, tofail: false, name: 'Jump Rope – Side to Side Hops (2 Feet)', notes: ''},
          {id: 131, sets: null, reps: '50', time: null, tofail: false, name: 'Jump Rope – Single Leg Jumps', notes: '50 jumps each'},
          {id: 133, sets: null, reps: '50', time: null, tofail: false, name: 'Jump Rope – Side to Side Hops (1 Foot)', notes: ''},
          {id: 132, sets: null, reps: '50', time: null, tofail: false, name: 'Jump Rope – Side to Side Hops (2 Feet)', notes: ''},
          {id: 130, sets: null, reps: '50', time: null, tofail: false, name: 'Jump Rope – Two Foot Hops', notes: '50 jumps'}
        ]
      },
      {
        id: 4, // THURSDAY
        type: dayTypes.STRENGTH_TRAINING.code,
        desc: 'Core',
        showRestTime: true,
        exercises: [
          {id: 107, sets: 3, reps: '30', time: null, tofail: false, name: 'Plank Straight Leg March', notes: 'Alternate 15 reps on each leg per set'},
          {id: 112, sets: 2, reps: '30', time: null, tofail: false, name: 'Plank Opposite Knee to Elbow', notes: '15 reps right elbow to left knee and 15 reps left elbow to right knee each set'},
          {id: 116, sets: 2, reps: '15', time: null, tofail: false, name: 'Plank Same Side Knee to Elbow', notes: 'Right elbow to right knee 15 times and left elbow to left knee 15 times two sets each'}
        ]
      },
      {
        id: 5, // FRIDAY
        type: dayTypes.CHALLENGE.code,
        desc: 'Challenge Retest',
        exercises: challenges.WEEK4.exercises,
        note: challenges.WEEK4.note,
        rankings: challenges.WEEK4.rankings,
        showChallengeCounter: true
      }
    ]
  },
  {
    id: 5, // WEEK 5
    days: [
      {
        id: 1, // MONDAY
        type: dayTypes.STRENGTH_TRAINING.code,
        desc: 'Total Body',
        showRestTime: true,
        exercises: [
          {id: 38, sets: 3, reps: '15', time: null, tofail: false, name: 'DB Swing', notes: 'Lift weight with hip thrust...not your arms'},
          {id: 29, sets: 3, reps: '10', time: null, tofail: false, name: 'DB Drop Squat', notes: 'Drop down until thighs are parallel to ground'},
          {id: 71, sets: 3, reps: '12', time: null, tofail: false, name: 'DB Curl and Press', notes: 'Don’t cheat the weights up....muscle them up'},
          {id: null, sets: 3, reps: '/', time: null, tofail: true, name: 'Clapping Plyo Push Ups', notes: 'Perform 3 sets to failure'},
          {id: 56, sets: 3, reps: '12', time: null, tofail: false, name: 'Rot. Tubing Pushdowns', notes: 'Alternate 6 reps to the right and left on each set'},
          {id: 89, sets: 4, reps: '12', time: null, tofail: false, name: 'Sword Raises', notes: 'Perform 2 sets on the right and left arms'}
        ]
      },
      {
        id: 2, // TUESDAY
        type: dayTypes.CONDITIONING.code,
        desc: 'SPR-Interval Intensity',
        exercises: [
          {id: null, sets: null, reps: null, time: '5min', tofail: false, name: 'Warmup jog', notes: ''},
          {id: null, sets: null, reps: null, time: '12min', tofail: false, name: 'Interval sprint/jog', notes: '25 second all out sprint / 35 second jog'},
          {id: null, sets: null, reps: null, time: '5min', tofail: false, name: 'Cooldown jog', notes: ''}
        ]
      },
      {
        id: 3, // WEDNESDAY
        type: dayTypes.STRENGTH_TRAINING.code,
        desc: 'Core',
        showRestTime: true,
        exercises: [
          {id: 103, sets: 2, reps: '10', time: null, tofail: false, name: 'Rollups', notes: 'Pain the spine onto the floor on the descent'},
          {id: 111, sets: 2, reps: '15', time: null, tofail: false, name: 'ISO Crunches', notes: 'Initiate movement from the core...not the legs'},
          {id: 115, sets: 2, reps: '15', time: null, tofail: false, name: 'Bench Tuck Crunches', notes: 'Done on a bench this time instead of BOSU'},
          {id: 112, sets: 2, reps: '30', time: null, tofail: false, name: 'Plank Opposite Knee to Elbow', notes: '15 reps right to left and vice versa'}
        ]
      },
      {
        id: 4, // THURSDAY
        type: dayTypes.CONDITIONING.code,
        desc: 'Burpee and Box Jump Combo',
        exercises: [
          {id: null, sets: 20, reps: '10', time: null, tofail: false, name: 'Burpee (squat thrust with pushup)', notes: 'Perform 10 every even minute (rest balance of minute), alternate for 20 minutes'},
          {id: null, sets: 20, reps: '12', time: null, tofail: false, name: 'Box Jump (onto 18-24" box)', notes: 'Perform 12 every odd minute (rest balance of minute), alternate for 20 minutes'}
        ]
      },
      {
        id: 5, // FRIDAY
        type: dayTypes.STRENGTH_TRAINING.code,
        desc: 'Total Body',
        showRestTime: true,
        exercises: [
          {id: 66, sets: 3, reps: '12-15', time: null, tofail: false, name: 'DB Deadlift', notes: 'The heavier the weight you hold the more forearm work'},
          {id: 75, sets: 3, reps: '10-12', time: null, tofail: false, name: 'DB Clean and Press', notes: 'Explosively clean the weights and stabilize as you push'},
          {id: 35, sets: 3, reps: '10', time: null, tofail: false, name: 'Tubing Squat to Stand Rows', notes: 'Pull as you power yourself up to a standing position'},
          {id: 68, sets: 3, reps: '/', time: null, tofail: true, name: 'Diamond Push Ups', notes: 'Perform 3 sets to failure'},
          {id: 83, sets: 3, reps: '12', time: null, tofail: false, name: 'Alternating DB Incline Bench', notes: 'Alternate 6 reps with right and left hand each set'},
          {id: 96, sets: 2, reps: '10', time: null, tofail: false, name: 'Eccentric Step Aways', notes: 'Perform 2 sets on each arm for this exercise'}
        ]
      }
    ]
  },
  {
    id: 6, // WEEK 6
    days: [
      {
        id: 1, // MONDAY
        type: dayTypes.STRENGTH_TRAINING.code,
        desc: 'Total Body',
        showRestTime: true,
        exercises: [
          {id: 80, sets: 3, reps: '12-15', time: null, tofail: false, name: 'Single Leg Squat with Mini Jumps', notes: 'Explosively push off the ground and land softly'},
          {id: 52, sets: 2, reps: '12', time: null, tofail: false, name: '3-Way DB RDL', notes: 'Perform 4 “rounds” of 3 reps ? out, in, and @knee'},
          {id: 54, sets: 3, reps: '10-12', time: null, tofail: false, name: 'Low Tubing Rotational Row', notes: '3 sets of 10-12 reps on each arm with tubing'},
          {id: 48, sets: 3, reps: '10', time: null, tofail: false, name: 'Straight Arm Pushdowns (50/50s)', notes: 'Do these reps slowly and in good form'},
          {id: 45, sets: 3, reps: '/', time: null, tofail: true, name: 'Physioball Incline Push Up Plus', notes: 'Place ball in a corner so it won’t roll away. To failure'},
          {id: 36, sets: 3, reps: '12', time: null, tofail: false, name: 'Woodchopper Pushdowns', notes: 'Alternate 6 reps to the right and 6 to the left each set'}
        ]
      },
      {
        id: 2, // TUESDAY
        type: dayTypes.CONDITIONING.code,
        desc: 'Sprints - baseball diamond',
        exercises: [
          {id: null, sets: null, reps: '10', time: null, tofail: false, name: 'Single sprints', notes: 'Sprint from Home to First base (90ft)'},
          {id: null, sets: null, reps: '8', time: null, tofail: false, name: 'Triple sprints', notes: 'Sprint from Home to Third base (90ft x 3)'},
          {id: null, sets: null, reps: '6', time: null, tofail: false, name: 'Double then Score sprints', notes: 'Sprint Home to 2nd (90ft x 2), Rest 30sec, Sprint 2nd to Home (90ft x 2)'},
          {id: null, sets: null, reps: '3', time: null, tofail: false, name: 'Homerun sprints', notes: 'Sprint Home around all bases back to Home (90ft x 4), Inside the park homerun'}
        ]
      },
      {
        id: 3, // WEDNESDAY
        type: dayTypes.STRENGTH_TRAINING.code,
        showRestTime: true,
        desc: 'Core',
        exercises: [
          {id: 105, sets: 2, reps: '/', time: null, tofail: true, name: 'Heel to the Heavens', notes: 'Do 2 sets of as many reps as you can'},
          {id: 104, sets: 2, reps: '15', time: null, tofail: false, name: 'Jackknifes', notes: '2 sets of 15 on each leg without resting in between'},
          {id: 107, sets: 2, reps: '30', time: null, tofail: false, name: 'Plank March', notes: '30 marches each foot per set while in plank'},
          {id: 116, sets: 2, reps: '30', time: null, tofail: false, name: 'Plank Same Side Knee to Elbow', notes: '15 reps right to left and vice versa'}
        ]
      },
      {
        id: 4, // THURSDAY
        type: dayTypes.CONDITIONING.code,
        desc: 'Cardio - 400m track',
        exercises: [
          {id: null, sets: null, reps: '1 lap', time: null, tofail: false, name: 'Warmup jog', notes: ''},
          {id: null, sets: null, reps: '4-5 laps', time: null, tofail: false, name: 'Sprint and Jog', notes: 'Sprint straight-aways and jog curves. Alternate 100m sprint to 100m jog twice per lap'},
          {id: null, sets: null, reps: '1 lap', time: null, tofail: false, name: 'Cooldown jog', notes: ''}
        ]
      },
      {
        id: 5, // FRIDAY
        type: dayTypes.STRENGTH_TRAINING.code,
        showRestTime: true,
        desc: 'Total Body',
        exercises: [
          {id: 85, sets: 3, reps: '12', time: null, tofail: false, name: 'Crossover Lunge', notes: 'Alternate 6 reps to each side each set'},
          {id: 10, sets: 3, reps: '10-12', time: null, tofail: false, name: 'Forward Step Ups', notes: 'Optional wear either weighted vest or hold db’s '},
          {id: 6,  sets: 3, reps: '10-12', time: null, tofail: false, name: '1 Arm DB Row', notes: '3 sets of 10-12 on each arm'},
          {id: 16, sets: 3, reps: '40', time: null, tofail: false, name: 'Standing Tubing Bicep Curls', notes: 'Yes....40 reps! Make it burn!'},
          {id: 17, sets: 3, reps: '20', time: null, tofail: false, name: 'Minibox Upper Body Step Ups', notes: 'Hands go up, up, down, down = 1 rep'},
          {id: 69, sets: 3, reps: '12', time: null, tofail: false, name: 'Shoulder DB/Tubing“L” Raises', notes: '6 reps forward and 6 to the side each set'}
        ]
      }
    ]
  },
  {
    id: 7, // WEEK 7
    days: [
      {
        id: 1, // MONDAY
        type: dayTypes.STRENGTH_TRAINING.code,
        desc: 'Total Body',
        showRestTime: true,
        exercises: [
          {id: 50, sets: 3, reps: '12', time: null, tofail: false, name: 'Side Step Ups', notes: 'Perform 3 sets of 12 on each leg'},
          {id: 60, sets: 3, reps: '10-12', time: null, tofail: false, name: 'Slick Floor Bridge and Curl', notes: 'Just take off your shoes and do this on a hardwood floor or slippery surface. Slide legs in and out'},
          {id: 99, sets: 3, reps: '10', time: null, tofail: false, name: 'Spiderman Push Ups', notes: 'Same as the spiderman crawl, except do a pushup with every step up and back...yes it’s hard!'},
          {id: 71, sets: 3, reps: '10-12', time: null, tofail: false, name: 'DB Curl and Press', notes: 'Keep your core tight throughout this exercise'},
          {id: 76, sets: 3, reps: '/', time: null, tofail: true, name: 'Pull Ups', notes: 'Perform as many reps as you can to failure each set'},
          {id: 93, sets: 2, reps: '8-10', time: null, tofail: false, name: 'Eccentric "Brake Slammers"', notes: 'Do 2 sets on each arm to strengthen rotator cuffs'}
        ]
      },
      {
        id: 2, // TUESDAY
        type: dayTypes.CONDITIONING.code,
        desc: 'Circuit - Fantastic Four',
        // showRestTime: true,
        exercises: [
          {id: null, sets: 4, reps: null, time: '1min', tofail: false, name: 'Jumping Jacks', notes: 'No rest'},
          {id: null, sets: 4, reps: null, time: '1min', tofail: false, name: 'Mountain Climbers', notes: 'No rest'},
          {id: null, sets: 4, reps: null, time: '1min', tofail: false, name: 'Inchworms', notes: 'No rest'},
          {id: null, sets: 4, reps: null, time: '1min', tofail: false, name: 'Bodyweight Squats', notes: 'End of round, Rest 1 min'}
        ],
        note: 'Perform each exercise in a row without rest. This is 1 round. Rest 1 minute after a round. Perform 4 rounds!'
      },
      {
        id: 3, // WEDNESDAY
        type: dayTypes.STRENGTH_TRAINING.code,
        showRestTime: true,
        desc: 'Core',
        exercises: [
          {id: 111, sets: 2, reps: '15', time: null, tofail: false, name: 'ISO Crunches', notes: 'Initiate movement from the core...not the legs'},
          {id: 117, sets: 2, reps: '16', time: null, tofail: false, name: 'Around The Worlds', notes: '8 circles CW and 8 circles CCW'},
          {id: 110, sets: 2, reps: '/',  time: null, tofail: true, name: 'V-Up Russian Twist', notes: 'Do as many reps as you can until failure'},
          {id: 113, sets: 2, reps: '40', time: null, tofail: false, name: 'Canoes', notes: 'Each "canoe stroke" is considered one rep'}
        ]
      },
      {
        id: 4, // THURSDAY
        type: dayTypes.CONDITIONING.code,
        desc: 'Cycling Tour',
        // showRestTime: true,
        exercises: [
          {id: null, sets: 1, reps: null, time: '5min', tofail: false, name: 'Warmup spin', notes: ''},
          {id: null, sets: 8, reps: null, time: '1.5min', tofail: false, name: '', notes: 'Cycles of 30 second sprint pedaling w/ 1 minute casual spin'},
          {id: null, sets: 1, reps: null, time: '5min', tofail: false, name: 'Cooldown', notes: ''}
        ],
        notes: 'Perform this sequence while riding either an upright or recumbent bike, spin cycle, or bicycle'
      },
      {
        id: 5, // FRIDAY
        type: dayTypes.STRENGTH_TRAINING.code,
        showRestTime: true,
        desc: 'Total Body',
        exercises: [
          {id: 38, sets: 3, reps: '20', time: null, tofail: false, name: 'Kettlebell / DB Swing', notes: 'Increase your reps to 20 per set for more intensity'},
          {id: 24, sets: 3, reps: '15', time: null, tofail: false, name: 'Hip Bucks', notes: 'Push through your heels and activate the glutes'},
          {id: 4,  sets: 3, reps: '10', time: null, tofail: false, name: 'Hip Miniband Monster Walk ', notes: 'Squat down and keep feet shoulder width as you walk'},
          {id: 75, sets: 3, reps: '10-12', time: null, tofail: false, name: 'DB Clean and Press', notes: 'Explosiveness is key to moving the weight here!'},
          {id: 14, sets: 3, reps: '10-12', time: null, tofail: false, name: 'Tubing/Cable Chest Press', notes: 'Perform 3 sets of 10-12 with each arm'},
          {id: 19, sets: 3, reps: '/', time: null, tofail: true, name: 'Inverted Row ', notes: 'End with everything you’ve got! Try to keep the legs straight if you can for as many reps as possible'}
        ]
      }
    ]
  },
  {
    id: 8, // WEEK 8
    days: [
      {
        id: 1, // MONDAY
        type: dayTypes.CHALLENGE.code,
        desc: 'Challenge Retest',
        exercises: challenges.WEEK4.exercises,
        note: challenges.WEEK4.note,
        rankings: challenges.WEEK4.rankings,
        showChallengeCounter: true
      },
      {
        id: 2, // TUESDAY
        type: dayTypes.STRENGTH_TRAINING.code,
        desc: 'Core',
        exercises: [
          {id: 107, sets: 3, reps: '30', time: null, tofail: false, name: 'Plank Straight Leg March', notes: '15 lifts on each leg while maintaining plank'},
          {id: 116, sets: 3, reps: '30', time: null, tofail: false, name: 'Plank Same Side Knee to Elbow', notes: '15 elbow to knee touches on each side per set'},
          {id: 112, sets: 3, reps: '30', time: null, tofail: false, name: 'Plank Opposite Knee to Elbow', notes: '15 elbow to knee touches on each side per set'},
          {id: 32,  sets: 3, reps: '15', time: null, tofail: false, name: 'Physioball Reverse Hypers', notes: 'Lift your legs straight using your glutes/low back'}
        ]
      },
      {
        id: 3, // WEDNESDAY
        type: dayTypes.CONDITIONING.code,
        desc: 'Day Off',
        exercises: [
        ]
      },
      {
        id: 4, // THURSDAY
        type: dayTypes.STRENGTH_TRAINING.code,
        desc: 'Core',
        exercises: [
          {id: 108, sets: 2, reps: '/', time: null, tofail: true, name: 'Starfish Crunches', notes: 'Do as many reps as you can to failure'},
          {id: 104, sets: 2, reps: '15', time: null, tofail: false, name: 'Jackknifes', notes: '15 reps with right leg high and 15 with the left leg high each set. No rest in between'},
          {id: 115, sets: 2, reps: '20', time: null, tofail: false, name: 'BOSU Tuck Crunch', notes: 'Can be done on end of bench as well'},
          {id: 117, sets: 2, reps: '20', time: null, tofail: false, name: 'Physioball Around The Worlds', notes: '10 clockwise circles and 10 ccw circles'}
        ]
      },
      {
        id: 5, // FRIDAY
        type: dayTypes.CHALLENGE.code,
        desc: 'Challenge II',
        exercises: challenges.WEEK8.exercises,
        note: challenges.WEEK8.note,
        rankings: challenges.WEEK8.rankings,
        showChallengeCounter: false
      }
    ]
  },
  {
    id: 9, // WEEK 9
    days: [
      {
        id: 1, // MONDAY
        type: dayTypes.STRENGTH_TRAINING.code,
        desc: 'Upper Body',
        showRestTime: true,
        exercises: [
          {id: 98, sets: 3, reps: '10', time: null, tofail: false, name: '1a. Inchworms', notes: 'Cover distance as you walk into each rep', exercisePairCode:'a'},
          {id: 74, sets: 3, reps: '12-15', time: null, tofail: false, name: '1b. BOSU Plyo Push Up', notes: 'Explode off the ground and clear the BOSU', exercisePairCode:'b'},
          {id: 27, sets: 3, reps: '10-12', time: null, tofail: false, name: '2a. Tubing Tricep Kickbacks', notes: 'Squeeze at the end of each rep', exercisePairCode:'a'},
          {id: 12, sets: 3, reps: '10-12', time: null, tofail: false, name: '2b. Lat Pulldowns', notes: 'Use a shoulder width grip or slightly narrower', exercisePairCode:'b'},
          {id: 82, sets: 3, reps: '10', time: null, tofail: false, name: '3a. DB Fielder Curls', notes: ' Maintain a flat back throughout the exercise', exercisePairCode:'a'},
          {id: 78, sets: 3, reps: '12', time: null, tofail: false, name: '3b. Rotational DB Shoulder Press', notes: 'Try to perform these one arm at a time', exercisePairCode:'b'}
        ]
      },
      {
        id: 2, // TUESDAY
        type: dayTypes.CONDITIONING.code,
        desc: 'Cardio - Playing Cards',
        // showRestTime: true,
        exercises: [
          {id: null, sets: 4, reps: '10-20', time: null, tofail: false, name: 'Jump Squats', notes: 'Jacks, reps 10,12,15,20 for suit'},
          {id: null, sets: 4, reps: '10-20', time: null, tofail: false, name: 'Mountain Climbers', notes: 'Queens, reps 10,12,15,20 for suit'},
          {id: null, sets: 4, reps: '10-20', time: null, tofail: false, name: 'High Knees', notes: 'Kings, reps 10,12,15,20 for suit'},
          {id: 105, sets: 4, reps: '10-20', time: null, tofail: false, name: 'Heels to the Heavens', notes: 'Aces, reps 10,12,15,20 for suit'}
        ],
        notes: 'Use only the 16 face cards and aces of a deck. The suit represent the number of reps, the card represents the exercise. Shuffle the deck and randomly draw for exercises to perform without rest. Use the following key: Spades=10reps, Diamonds=12reps, Hearts=15reps, Clubs=20reps. Jacks=Jump Squats, Queens=Mountain Climbers, Kings=High Knees, Aces=Heels to the Heavens'
      },
      {
        id: 3, // WEDNESDAY
        type: dayTypes.STRENGTH_TRAINING.code,
        showRestTime: true,
        desc: 'Lower Body',
        exercises: [
          {id: 101, sets: 3, reps: '12', time: null, tofail: false, name: '1a. Drop Step Lunge and Lean', notes: 'Do 12 reps on each leg then, without resting, ...', exercisePairCode:'a'},
          {id: 23, sets: 3, reps: '12', time: null, tofail: false, name: '1b. Single Leg DB Squat', notes: 'go to part b and do 12 reps on each leg', exercisePairCode:'b'},
          {id: 3,  sets: 3, reps: '10-12', time: null, tofail: false, name: '2a. DB Single Leg RDL', notes: 'Do 10-12 reps on each leg and then, without resting, ...', exercisePairCode:'a'},
          {id: 11, sets: 3, reps: '12', time: null, tofail: false, name: '2b. Physioball High Bridges', notes: 'proceed to part b and do 12 bridges', exercisePairCode:'b'},
          {id: 37, sets: 3, reps: '12', time: null, tofail: false, name: '3a. Step Up Thrusts', notes: 'Do 12 reps on each leg and then, without resting, ...', exercisePairCode:'a'},
          {id: 42, sets: 3, reps: null, time: '30sec', tofail: false, name: '3b. Split Squat Jumps', notes: 'proceed to part b and do 30 seconds', exercisePairCode:'b'}
        ]
      },
      {
        id: 4, // THURSDAY
        type: dayTypes.CONDITIONING.code,
        desc: 'Jump Rope',
        // showRestTime: true,
        exercises: [
          {id: 130, sets: null, reps: '100', time: null, tofail: false, name: 'Two Foot Hops', notes: ''},
          {id: 132, sets: null, reps: '75', time: null, tofail: false, name: 'Side to Side Hops (2 Feet)', notes: ''},
          {id: 134, sets: null, reps: null, time: '5min', tofail: false, name: 'Boxer Shuffle', notes: ''},
          {id: 135, sets: null, reps: '25', time: null, tofail: false, name: 'Double Jumps', notes: ''}
        ]
      },
      {
        id: 5, // FRIDAY
        type: dayTypes.STRENGTH_TRAINING.code,
        showRestTime: true,
        desc: 'Total Body',
        exercises: [
          {id: 66, sets: 4, reps: '10-12', time: null, tofail: false, name: '1a. Dumbbell Deadlifts', notes: 'Keep your head up and back flat throughout', exercisePairCode:'a'},
          {id: 35, sets: 4, reps: '10-12', time: null, tofail: false, name: '1b. Cable/Tubing Squat to Stand Rows', notes: 'Tie in the upper and lower body together', exercisePairCode:'a'},
          {id: 19, sets: 4, reps: '10-12', time: null, tofail: false, name: '2a. Inverted Row (Inverted Chin Up)', notes: 'Definitely try and keep your legs out now', exercisePairCode:'a'},
          {id: 56, sets: 4, reps: '12', time: null, tofail: false, name: '2b. Rotational Pushdowns', notes: 'Alternate 6 reps to right and left each set', exercisePairCode:'a'},
          {id: 81, sets: 2, reps: '10', time: null, tofail: false, name: '3. Burpee Push Up Pyramid', notes: '1,2,3,4,5,6,7,8,9,10 reps with burpees in between each round'}
        ]
      }
    ]
  }
  // 10
  // 11
  // 12 - challenge  
  
];

var exercises = {
  1: {
    name:'Bodyweight / DB Squat',
    desc:'To perform the Bodyweight / DB Squat, stand holding a dumbbell on end between your legs, keeping your back and shoulders up.  Slowly descend straight down until the dumbbell reaches just above the ground.  Squeeze the glutes and drive with your legs back to an upright position.',
    images: 2
  },
  2: {
    name:'Bodyweight Lunge',
    desc:'To perform the lunge. Stand with hands on hips and begin by stepping forward (being careful not to overstride too far).  On foot contact, slowly descend towards the ground, keeping your trunk and shoulders high, and only as low as it takes to establish a 90 degree bend in the front and back knees.  From this position, push through the heel off your front foot back into the standing position.',
    images: 2
  },
  3: {
    name:'DB Single Leg RDL',
    desc:'To perform the DB Single Leg RDL, grab a dumbbell in one hand and stand / balance on the opposite leg.  Slowly bend forward at the waist until the dumbbell is just below knee height.  Make sure to maintain a slight arch in the low back for support, and return to the starting position by squeezing the glutes on the stance leg, NOT by simply standing up.',
    images: 2
  },
  4: {
    name:'Hip Miniband Series',
    desc:'The Hip Miniband Series includes 5 exercises: Forward walk, Backward walk, Side step, Carioca, and Monster walk. Perform when scripted in Lower Body workouts.',
    images: 7
  },
  5: {
    name:'Underhand Pulldowns',
    desc:'To perform the Underhand Pulldown, position yourself under a high pulley machine and grasp the bar with an underhand shoulder width grip.  Keeping your torso upright and a slight arch in the low back for support; squeeze the shoulder blades together and pull the bar to the level of the sternum.  Slowly return the bar to the starting position.',
    images: 2
  },
  6: {
    name:'1 Arm DB Row',
    desc:'To perform the 1 Arm DB Row, grab a dumbbell in one hand and rest your opposite knee and hand on a stabile bench for support.  Start with the dumbbell hanging at arm\'s length beneath your shoulder.  Squeeze your shoulder blade and pull the dumbbell towards your chest, making sure to keep your elbow in tight to your side as you pull.  Slowly lower dumbbell and repeat.',
    images: 2
  },
  7: {
    name:'Bodyweight Incline Pushup',
    desc:'To perform the Bodyweight Incline Pushup, set up either a bar in a squat rack (at approximately knee height), or find a stabile bench.  Take a shoulder width overhand grip and assume an inclined pushup position with your feet behind you.  Lower your body until your elbows are bent 90 degrees.',
    images: 2
  },
  8: {
    name:'Tricep Pushdowns',
    desc:'To perform the Triceps Pushdown attach either a tricep bar or a v-bar to an overhead pulley and grip the bar.  Start with the bar just below chest height and push it down until your elbows are fully extended, making sure to keep your elbows held close to your side throughout.',
    images: 2
  },
  9: {
    name:'DB Hammer Curls',
    desc:'To perform the DB Hammer Curls, grab a dumbbell in each hand and hold them at your side from a standing position.  Curl the dumbbells by bending your elbows to 90 degrees and making sure to keep your thumbs pointed up throughout to maximize forearm involvement.',
    images: 2
  },
  10: {
    name:'Bodyweight Forward Step Ups',
    desc:'To perform the Forward Step Up, stand in front of a box that is 14-20" in height.  Place one foot squarely on top of the box to start, and begin by pushing through the front foot and driving powerfully upward.  Push all the way up until your knee and hip are almost fully extended and straight.  Lower slowly.',
    images: 2
  },
  11: {
    name:'Physioball High Bridges',
    desc:'To perform the Physioball Supine Bridge, lie on your back with your knees bent and your feet flat on the top of the physioball.  Keep your hands out to your sides and begin by pushing straight down through your feet, lifting your butt until your hips and thighs are level with your trunk.  Lower your butt slowly and repeat.',
    images: 2
  },
  12: {
    name:'Lat Pulldowns',
    desc:'To perform the Lat Pulldown, attach a straight bar to an overhead pulley and grab the bar at shoulder width with an overhand grip.  Lean back slightly and arch the low back slightly for support.  Squeeze the shoulder blades and pull the bar down to a point just above your breast bone.  Slowly return the bar to the starting position and repeat.',
    images: 2
  },
  13: {
    name:'Standing Low Row',
    desc:'To perform the Standing Low Row, attach a V-handle or straight bar to a low pulley and grip it with either a neutral (palms facing) or overhand grip.  Bend your knees slightly and stabilize your low back by arching slightly.  Squeeze the shoulder blades and pull the bar into your lower abdomen.',
    images: 2
  },
  14: {
    name:'Standing Tubing Chest Press',
    desc:'To perform the Standing Tubing Chest Press, grab one handle of the tubing in each hand (thumbs in first grip) and walk a few steps away from the anchor point of the bands to create tension.  Face away and push your arms straight out, at chest height.  Return slowly and repeat.',
    images: 2
  },
  15: {
    name:'Tubing Tricep Push Away',
    desc:'To perform the Tubing Tricep Push Away, grab one handle of the tubing in each hand and walk a few steps away from the anchor point of the bands to create tension.  Stand facing away, lean your trunk slightly forward, and hold the handles next to your ears (keeping your elbows in).  Push away until your elbows are straight and then slowly return the bands to the starting position.',
    images: 2
  },
  16: {
    name:'Standing Tubing Biceps Curls',
    desc:'To perform the Standing Tubing Biceps Curls, stand with feet shoulder width apart and placed on top of a band (sufficiently thick to be of adequate resistance).  Grip the handles with your hands facing away from you.  Keep your elbows into your side as you curl the bands up towards your shoulders.',
    images: 2
  },
  17: {
    name:'Minibox Upper Body Step Ups',
    desc:'To perform the Minibox Upper Body Step Up, position yourself to the left (or right) of a 6 inch plyometric box or platform in a pushup position (begin on your knees if necessary).  Start by lifting your right hand onto the box, then your left hand (at this point both hands are on the box).  Lower the left hand back down, followed by the right hand.  Continue for the prescribed number of reps and perform the next set from the opposite side. 1',
    images: 5
  },
  18: {
    name:'Tubing Rotational Chest Press',
    desc:'To perform the Tubing Rotational Chest Press, anchor fairly thick tubing to a sturdy post and grasp one handle with one hand.  Place the opposite foot (left foot if you are holding the tubing in the right hand) in front of you in a staggered stance.  Hold the tubing at chest height and simultaneously press out and rotate the trunk away from the anchor point (over your left foot).',
    images: 2
  },
  19: {
    name:'Inverted Row (Feet Flat)',
    desc:'To perform the Inverted Row, set up a bar at approximately waist height in a squat rack and lie on your back beneath the bar with your knees bent and your feet flat on the ground.  Grip the bar overhand, squeeze the shoulder blades together and pull your chest up (making contact with the bar).',
    images: 2
  },
  20: {
    name:'Straight Arm Pulldown (Lats)',
    desc:'To perform the Straight Arm Pulldown, attach a straight bar to a high pulley, grab it with a shoulder width overhand grip, and stand facing the bar.  Keeping the arms locked out throughout, pull the bar down from neck height all the way to the thighs and then slowly return.  Repeat for prescribed rep count.',
    images: 2
  },
  21: {
    name:'Tricep Rope Pushdowns',
    desc:'To perform the Tricep Rope Pushdowns, attach a rope handle to a high pulley and stand facing the machine.  Keeping your elbows in tight to your sides, and starting with hands at chest height, push your hands down and extend your elbows until they are almost completely straight.  Return slowly.',
    images: 3
  },
  22: {
    name:'3-Way Forearm Series',
    desc:'To perform the 3-Way Forearm Series, grip a dumbbell that is of adequately challenging weight and perform wrist curls (palm down), wrist extensions (palm up), and radial deviations (thumb up), as pictured below, for the prescribed number of reps.',
    images: 3
  },
  23: {
    name:'Single Leg DB Squat',
    desc:'To perform the Single Leg DB Squat, grip a dumbbell in one hand and place the opposite foot behind you and on a bench or bar that is about knee height.  Descend into a squat on the front leg, being sure to not let your knee travel past your toe.  Stop at 90 degrees of knee bend and push back to standing.',
    images: 2
  },
  24: {
    name:'Hip Bucks',
    desc:'To perform the Hip Bucks, choose a surface that is stabile and approximately 18-24 inches in height.  Lie on your back and place your heels on the platform.  With hands out to your sides, push through your heels and squeeze your glutes until your hips are in a straight line with your trunk.  Lower slowly.',
    images: 1
  },
  25: {
    name:'Physioball Push Up Plus',
    desc:'Begin by lying face down on top of a physioball with the ball centered near your knees (lower towards your feet is more difficult). Walk out into a pushup position with your hands directly below your shoulders.  Begin your pushup, and stop your descent when your elbows are bent 90 degrees.  After returning to the starting position, push with extra force to protract your shoulders into the "plus" position.',
    images: 2
  },
  26: {
    name:'Rotational High Row',
    desc:'To perform the Rotational High Row, attach a grip to a high pulley and hold it with one hand.  Stagger your stance so that your opposite foot is closest to the machine.  As you pull down, keep your elbow tight to your side.  Loosely pivot off the back leg as you return the pulley to the starting position.',
    images: 2
  },
  27: {
    name:'Tubing Tricep Kickbacks',
    desc:'To perform Tubing Tricep Kickbacks, grab a handle in each hand and back away from the anchor point until the tension is sufficient.  Bend forward at the waist; tuck your elbows into your sides and slightly behind your body.  Squeeze your triceps as you straighten your elbows behind your body.',
    images: 2
  },
  28: {
    name:'Hammer Pronation/Supination',
    desc:'To perform Hammer Pronation / Supination grab an adjustable dumbbell handle and load up only one end with 3-8 lbs.  Bend your elbow to 90 degrees and stabilize your forearm on a bench.  Slowly drop the weights to the left and back to center (supination), and to the right and back to center (pronation).',
    images: 3
  },
  29: {
    name:'Kettlebell or DB Drop Squat',
    desc:'To perform the Kettlebell or DB Drop Squat, stand upright with your shoulders back and chest high holding either a kettlebell or a dumbbell by one end, loosely between your legs.  Simply lower yourself straight down by flexing the hips and knees, until the bell touches the floor.  Power back up to standing.',
    images: 2
  },
  30: {
    name:'Hands Overhead Lunge',
    desc:'To perform the Hands Overhead Lunge, stand upright with our arms extended over your head.  Step out with one leg into a lunge and drop down until the front and rear knees are bent 90 degrees.  Be sure not to allow your trunk to drop forward as you descend.  Stay tall throughout.',
    images: 2
  },
  31: {
    name:'Follow Through DB RDL',
    desc:'To perform the Follow Through DB RDL grab a dumbbell in one hand (right hand for right handed pitcher and vice versa).  Go through a delivery motion and when you step down on your landing leg, rotate your trunk over the leg and perform an RDL; lowering the db to about knee height.  Return to standing and repeat for the prescribed number of reps.',
    images: 2
  },
  32: {
    name:'Physioball Reverse Hyperextensions',
    desc:'To perform the Physioball Reverse Hyperextension, lie face down over a physioball, with the ball directly under the upper thighs.  You should be able to put your forearms flat on the ground.  Begin the exercise by squeezing your heels together and glutes to lift your legs towards the ceiling.  Your legs should form a straight line with your upper torso at the top.  Lower and repeat.',
    images: 2
  },
  33: {
    name:'Cable Rotational Push Press',
    desc:'To perform the Cable Rotational Push Press grasp one cable handle placed at chest height.  Place the opposite foot (left foot if you are holding the handle in the right hand) in front of you in a staggered stance.  Simultaneously press out and rotate the trunk over your left foot.  Make sure you control your return by contracting your abdominals and glutes.',
    images: 2
  },
  34: {
    name:'DB Reverse Flys',
    desc:'To perform the DB Reverse Fly, grab a pair of fairly light dumbbells and position yourself behind an incline bench press.  Rest your head gently on the seat as you bend over at the waist and stabilize your lower back.  Raise the db\'s out to your sides (leading with the elbows) staying in line with your shoulders until the elbows are slightly behind the back.',
    images: 2
  },
  35: {
    name:'Tubing Squat to Stand Rows',
    desc:'To perform the Tubing Squat to Stand Row, anchor sufficiently thick tubing to a rack, low to the ground, and grab one handle in each hand.  Back away far enough, so your arms are out straight and there is tension in the bands.  Squat down, then stand and pull your elbows back behind you simultaneously.',
    images: 2
  },
  36: {
    name:'Woodchopper Pushdowns',
    desc:'To perform the Woodchopper Pushdowns, attach a rope handle to a high pulley and angle your body approximately 45 degrees to the cable.  Simultaneously pull down the rope and rotate the torso away from the stack.  Pivot off the back foot and drive your elbows into extension.  Slowly reverse the movement and repeat for the desired number of repetitions.',
    images: 2
  },
  37: {
    name:'Step Up Thrusts',
    desc:'To perform the Step Up Thrust, stand in front of a 16-20 inch plyometric box or platform and place one foot flat on the surface.  Simultaneously drive through the front leg and with the opposite arm as you forcefully step up.  At the top of the movement, continue up into full hip and knee extension as you propel yourself into a slight jump (2-3 inches).  Land softly and descend back to the starting position.',
    images: 2
  },
  38: {
    name:'Kettlebell / DB Swings',
    desc:'To perform the Kettlebell/DB Swing, squat down from the hips and knees while keeping the head and chest up at all times.  Grab either a kettlebell or a dumbbell by one end (see picture) while it is resting on the floor. From here, squeeze the glutes and straighten the legs as you power straight up to a standing position.  Smoothly allow the bell to swing forward, as momentum allows.  Avoid swing the bell with your arms.  Perform the reps smoothly.',
    images: 2
  },
  39: {
    name:'Tubing Power Push Outs',
    desc:'To perform the Tubing Power Push Out, grasp one handle of fairly high resistance tubing in each hand.  Face away and walk out until good tension is felt.  Start with your arms extended and push the hands another 2-4 inches away, making sure not to bend the elbows.  This is a very small exercise, covering just these extra few inches, so be specific and precise.',
    images: 2
  },
  40: {
    name:'Alternate DB Press (neutral grip)',
    desc:'To perform the Alternate DB Press, grasp a pair of dumbbells and lie on your back on a flat bench.  With your arms extended straight over your chest, your hands should be facing each other (neutral grip) throughout.  Begin by slowly lowering one dumbbell until the elbow is bent no more than 90 degrees.  Press it back up and then lower the other dumbbell.  Alternate to completion.',
    images: 2
  },
  41: {
    name:'Reverse Lunge Curls',
    desc:'To perform the Reverse Lunge Curl, grab a pair of dumbbells (choose a weight you can curl them in good form) and hold them at your sides.  Start by simultaneously lunging with one leg and curling the dumbbells.  You should complete your curl as your front knee reaches 90 degrees of knee bend.  Next, push off the front leg to rise back to standing and slowly lower the dumbbells back to your sides.  Alternate legs',
    images: 2
  },
  42: {
    name:'Split Squat Jumps',
    desc:'To perform the Split Squat Jump, simply stand in a lunge position (with your front and rear knees bent to 90 degrees and your knees just above the ground).  To start, rapidly jump (for quickness not height) and switch positions of the legs, with the rear leg ending up in front and the front leg behind.  Complete these alternating "quick switch" jumps for time/reps.',
    images: 2
  },
  43: {
    name:'Single Leg Squat w/ Med Ball Press',
    desc:'Hold a medicine ball (6-25lbs) with two hands and place one leg behind you and on top of either a bench or a bar that is approximately knee height.  As you descend into your squat, make sure your front knee does not travel past your toes, and bring the medicine ball just to the outside of the knee.  As you push back up, simultaneously straighten the front leg and press the ball overhead.  Make sure to keep the weight on the front leg throughout the exercise.',
    images: 2
  },
  44: {
    name:'1 Leg Bucks (Feet Elevated)',
    desc:'. Description:  To perform the 1 Leg Buck, lie on your back with your feet elevated onto a 16-24" stabile platform or bench.  Your hands are out to your sides.  Prior to starting, lift one foot off the bench about 5-6 inches and keep it there throughout the exercise.  Next, dig the heel of the grounded leg into the bench and fire your glutes as you lift your butt off the floor.  Continue until the torso is in a straight line with your thighs.  Slowly lower and repeat.',
    images: 2
  },
  45: {
    name:'Physioball Incline Pushup Plus',
    desc:'To perform the Physioball Push Up Plus, place a physioball firmly into the corner of a room so that it can\'t roll away.  Assume a push up position with your hands on the sides of the ball and fingers pointing down.  Descend until your chest touches the ball, press up to full extension at the elbows, and then add an extra push to protract your shoulders.',
    images: 2
  },
  46: {
    name:'Cable Rotational Row (chest height)',
    desc:'To perform the Cable Rotational Row, grab a cable handle at chest height and back away from the machine until your arm is straight out in front of you.  Position your left foot closer to the machine in a staggered stance.  As you pull the handle toward the chest, keep the elbow close to your side.  Pivot off the back foot as you return the handle to the starting position.',
    images: 2
  },
  47: {
    name:'Inverted Row (Legs Straight)',
    desc:'To perform the Inverted Row, set up a bar at approximately waist height in a squat rack and lie on your back beneath the bar with your legs out straight and your heels on the ground.  Grip the bar overhand, squeeze the shoulder blades together and pull your chest up (making contact with the bar).',
    images: 2
  },
  48: {
    name:'Straight Arm Pushdown 50/50\'s',
    desc:'To perform the Straight Arm Pushdown 50/50\'s, attach a straight bar to an overhead pulley and grip it with an overhand shoulder width grip.  Keeping the arms straight, pull the bar down halfway and pause two seconds.  Next, push from the midway point down to the bottom and pause two seconds.  Slowly return the bar to the starting position to a count of two.',
    images: 3
  },
  49: {
    name:'Pitcher\'s Lunge and Reach',
    desc:'To perform the Pitcher\'s Lunge and Reach, grab a fairly light dumbbell in your throwing hand.  Start by performing a simulated windup from the stretch.  Step out with your landing leg into a lunge position and rotate your torso over the leg.  Reach your throwing hand and dumbbell over your front knee in the finish position.  Push off the front leg back into the pitcher\'s prayer position and repeat.  Perform on both legs.',
    images: 2
  },
  50: {
    name:'Side Step Ups',
    desc:'To perform the Side Step Up, stand to the side of a box that is 14-20" in height.  Place the inside foot squarely on top of the box to start, and begin by pushing through the foot and driving powerfully upward.  Push all the way up until your knee and hip are almost fully extended and straight.  Lower slowly.',
    images: 2
  },
  51: {
    name:'DB / Medball Rotational Reverse Lunge',
    desc:'To perform the Rotational Reverse Lunge, hold a medicine ball or db weighing approximately 6-25 lbs.  Drop one leg back, landing on your toe, and drop straight down (keeping the head/trunk upright) until both knees are bent 90 degrees and the knees are not touching the floor.  Twist the medicine ball and trunk around the front leg as you descend.',
    images: 2
  },
  52: {
    name:'3-Way DB RDL',
    desc:'To perform the 3-Way DB RDL, grab a dumbbell in one hand and balance on the opposite leg only.  Keeping a slight arch in your back throughout the exercise for support, lean forward at the hips and let the dumbbell travel to just below knee height.  Squeeze the glutes on the grounded leg and "pull" yourself back to standing.  Perform the next rep by bringing the dumbbell to the outside of the knee.  Perform the last rep of the cycle to the inside of the knee.  This cycle of three should be performed 4 times for a total of 12 reps.',
    images: 3
  },
  53: {
    name:'Tubing / Cable Pitchers Push Press',
    desc:'To perform the Tubing / Cable Pitchers Push Press grab one handle of either tubing or a cable in your throwing hand and face away from the anchor point.  Starting with your arm at chest height and your elbow in tight to your side, explosively press the arm out, pivot off of your back foot, and rotate around your front leg.  Return the handle to the chest and immediately fire again.  Perform on both sides.',
    images: 2
  },
  54: {
    name:'Low Pulley Rotational Row',
    desc:'To perform the Low Pulley Rotational Row, stand at about a 45 degree angle to a low pulley and grip the pulley with the hand that is further away (you should be reaching across your body).  Start with your inside leg bent slightly and your outside knee bent and turned toward the machine (hip internally rotated).  Next, simultaneously pull the handle to the outside hip and rotate your torso away from the machine.',
    images: 2
  },
  55: {
    name:'Follow Through Reverse Fly',
    desc:'To perform the Follow Through Reverse Fly, anchor a fairly high resistant tubing low on a sturdy rack or pole.  Position your body as if in the "follow through" phase of the delivery and angled as shown below.  With your arm beginning in a fully extended position across your body, pinch your shoulder blade and retract the band straight out to the side until level with your back.',
    images: 2
  },
  56: {
    name:'Rotational Pushdowns',
    desc:'To perform the Rotational Pushdown, attach a rope handle to a high pulley.  While facing the machine, start with the pulley pulled down until your hands are at chest height.  Next, simultaneously push down, pivot off your back foot and rotate your torso around your front leg.  You will look as though you are taking a cut at a fastball just on the lower outside corner of the strike zone.',
    images: 2
  },
  57: {
    name:'DB Hammer Curls w/ Pronation',
    desc:'To perform the DB Hammer Curl with Pronation, hold a pair of dumbbells in each hand and hold them at your sides with a "thumbs up" grip.  Curl the dumbbells up by flexing the elbows.  At the top of the curl, turn the hands "palms down" and slowly lower.',
    images: 2
  },
  58: {
    name:'Single Leg Squat w/ Rotation',
    desc:'To perform the Single Leg Squat w/ Rotation, hold a 6-25 lb medicine ball and put one foot behind you and on a bench or bar that is about knee height.  Descend into a squat on the front leg, being sure to not let your knee travel past your toe, and simultaneously rotate the ball and trunk over that knee.  Stop at 90 degrees of knee bend and push back to standing.',
    images: 2
  },
  59: {
    name:'Slide Board Push Off Lunge',
    desc:'To perform the Slide Board Push Off Lunge, stand to the side of one end of the board.  Place the inside foot onto the board.  As you begin your descent, allow the foot on the board to smoothly slide out as you keep the majority of your weight on your outside leg.  When you reach 90 degrees of knee bend, pull back to a standing position, using the groin of the board leg and the quad on the outside leg.  Perform sets with each leg taking a turn on the board.',
    images: 2
  },
  60: {
    name:'Slide Board Bridge and Curl',
    desc:'Lie on your back at one end of the slide board.  Place both feet on.  Start by bridging your pelvis (squeezing your glutes) until your thighs are in a straight line with your torso.  From here, slowly let your feet slide out until your knees are almost straight.  Make sure not to let your butt drop as you slide out.  Pull the feet back by using your butt and hamstrings.',
    images: 2
  },
  61: {
    name:'Leg Press / DB Squat / Squat',
    desc:'To perform the Leg Press, utilize a local gym that has a 45 degree leg press machine.  Be careful not to lower the sled too far that it causes your lower back to round out.  For the squat, perform either a bar squat or hold a pair of dumbbells (to take the loading stress off the spine).  Squat no lower than 90 degrees, or until your thighs are parallel to the ground, to protect the knees and back.',
    images: 6
  },
  62: {
    name:'DB Side Lunges',
    desc:'To perform the DB Side Lunge, hold a pair of fairly light dumbbells at your sides.  Begin by stepping out to your right side and shifting your weight over the right foot as you descend into the lunge.  Touch the dumbbells to the inside and outside of the foot.  Push back to the starting position and repeat the lunge, this time to the left.  Complete in alternating fashion.',
    images: 2
  },
  63: {
    name:'Standing Barbell Row',
    desc:'To perform the Standing Barbell Row, set up a loaded barbell in a squat rack.  Grip the bar with a slightly wider than shoulder width palms down grip.  Bend forward at the waist, maintain a slight arch in the low back for stability, and pull the bar to the chest by concentrating on pulling with the elbows.',
    images: 2
  },
  64: {
    name:'Side Laterals',
    desc:'To perform Side Laterals, grasp a pair of dumbbells and hold them at your sides as you assume a slight forward lean.  Begin by raising the arms out to your sides (slight bend in the elbow) until the dumbbells are at shoulder height.  Try to keep your elbows slightly higher than your wrists at the top.',
    images: 2
  },
  65: {
    name:'Rotator Cuff Tubing ER',
    desc:'To perform the Rotator Cuff Tubing External Rotation exercise, roll up a small towel and place it underneath your armpit.  Bend the elbow to 90 degrees and tuck your elbow into your side (keeping the towel firmly in place.)  While grasping the band, slowly rotate your forearm away from your body.  Bring it back slowly and repeat. Comments',
    images: 2
  },
  66: {
    name:'Dumbbell Deadlift',
    desc:'To perform the Dumbbell Deadlift, grasp a pair of heavier dumbbells and hold them in front of your thighs.  As you descend into your squat, bend at the hips and knees and let the dumbbells travel just in front of your shins to the floor.  From the bottom position, push through the legs and stand up, making sure to keep your head up and shoulders back.',
    images: 2
  },
  67: {
    name:'Physioball Leg Curls',
    desc:'To perform the Physioball Leg Curl, lie on your back with your hands out to your sides and a physioball under your legs (the closer it is to the heels, the more of a challenge it is).  Begin by contracting your glutes and abs and raising your butt off the floor until your trunk is in a straight line with your legs.  Pull the ball in towards your butt by pulling with the heels.  Slowly control the ball as it rolls back out.  Don\'t allow your butt to lower until the set is over.',
    images: 2
  },
  68: {
    name:'Diamond  Push Ups',
    desc:'To perform the Tricep Push Up, assume a standard pushup position, except this time you are going to place your hands close together (touching your thumbs and index fingers together) and under your shoulders.  Lower your body slowly, making sure to keep your elbows tucked into your sides throughout.  Press back up and repeat.',
    images: 2
  },
  69: {
    name:'Shoulder "L" Raises',
    desc:'To perform the Shoulder "L" Raises, grab a pair of dumbbells in each hand and stand with a slight forward tilt of your torso.  Stabilize your core and lift the dumbbells simultaneously.  One will be lifted straight to the front, while the other will be lifted out to the side to form an "L" at the top.  Lower slowly and alternate to complete.',
    images: 2
  },
  70: {
    name:'Plate Squeeze Stances',
    desc:'To perform the Plate Squeeze Stances, grab a pair of 5 or 10lb Olympic plates and place them together (smooth sides facing) squeezing them with your hands.  Get into your batting stance and begin by raising the hands up to shoulder height (right shoulder for a right handed hitter and vice versa).  Once at the top, hold for a count of 3 seconds, then slowly lower and repeat.  Do not let the plates slip or fail to reach the proper height during the lift.',
    images: 2
  },
  71: {
    name:'DB Curl and Press',
    desc:'To perform the DB Curl and Press, grab a pair of dumbbells and stand with them at your sides, keeping your shoulders back and head tall.  Begin by bending the elbows to curl the dumbbells up to the shoulders.  From here, quickly turn the palms away from you and press the dumbbells straight overhead (keeping your upper arms close to your ears).  Lower slowly and repeat.',
    images: 3
  },
  72: {
    name:'Standing DB Row and Kickback',
    desc:'To perform the Standing DB Row and Kickback, grab a pair of dumbbells that will allow you to perform a kickback with good form, and bend forward from the waist until your torso is almost parallel to the ground.  With your arms hanging freely below your chest, pull the elbows up towards the ceiling (keeping them tight to your sides) until they are just past your torso.  From here, press the dumbbells straight back by extending the elbows.  Lower slowly.',
    images: 3
  },
  73: {
    name:'3 Way Lunge Reach',
    desc:'To perform the 3 Way Lunge Reach, grab a pair of fairly light dumbbells and perform a series of lunges (4-10 reps each), with an exaggerated reach, to the front, side, and rear.  Alternate legs for each direction until all reps are completed and then immediately proceed to the next direction without resting.  See pictures below for the proper finish positions.',
    images: 3
  },
  74: {
    name:'BOSU Plyo Push-Ups',
    desc:'To perform the BOSU Plyo Push Up, turn a BOSU over (dome side down) and grab hold of the sides as you assume a standard push up position.  Descend into your push up as normal, however on the ascent, explosively push through the arms, lifting the BOSU and upper body off the ground slightly.  Land softly and immediately proceed into your next rep.',
    images: 2
  },
  75: {
    name:'DB Clean and Press',
    desc:'To perform, squat between a pair of dumbbells on the floor and grip one in each hand.  In one smooth but explosive move, push through the feet and power up to a standing position.  As the dumbbells pass the knees, powerfully bend the elbows back to "flip" them, while you "catch" them by squatting slightly.  Once at shoulder height, press the dumbbells overhead without resting.  Return to starting position by reversing the original lift in a smooth continuous manner.  Proceed immediately into next rep.',
    images: 3
  },
  76: {
    name:'Pull Ups',
    desc:'To perform the Pull Up, position yourself under a bar in a squat rack.  Grab the bar with a slightly wider than shoulder width palms down grip.  Cross your feet, bend the head back slightly and pull your body up to the bar.  Try to touch your chest to the bar at sternum height and lower slowly.',
    images: 2
  },
  77: {
    name:'Skier Hops',
    desc:'To perform the Skier Hops, perform them either on flat ground or over the domed side of a BOSU.  Start by pushing off the right foot and jumping to your left.  Come down on the left foot and try to stick the landing.  Load up on the left leg by squatting to absorb the impact, then explosively push up and jump back to the right, this time sticking the landing on the right foot.  Continue to perform the jumps right to left for the prescribed number of reps/time.',
    images: 2
  },
  78: {
    name:'Rotational DB Shoulder Press',
    desc:'To perform the Rotational DB Shoulder Press, grab a pair of dumbbells (slightly lighter than what you would normally use for a regular shoulder press) and hold them at shoulder height with your elbows slightly angled forward and palms facing you.  As you press up, rotate the DB\'s so that your hands are facing away.  You can do this one arm at a time and pivot off one foot as you press up and across your body for variation.',
    images: 2
  },
  79: {
    name:'Incline DB Curls',
    desc:'Start by grabbing a pair of DB\'s and sit on an incline bench angled to 60 degrees.  Curl the dumbbells by flexing the elbows (be sure to keep them tight to your sides throughout).  Do not rest at the bottom of the exercise.  Rebound forcefully from the stretch into the next rep.',
    images: 2
  },
  80: {
    name:'Single Leg Squat w/ Mini Jumps',
    desc:'To perform the Single Leg Squat w/ Mini Jumps, position yourself as if performing the already described single leg squat.  Begin by descending into your first rep.  However, instead of simply pushing up, this time you will jump up (clearing the ground by about 2 inches).  Land softly and immediately descend into your next rep.  The jumps can be varied by changing the landing point randomly, or by jumping in a small circular pattern.',
    images: 2
  },
  81: {
    name:'Burpee Push Up Pyramid',
    desc:'To perform the Burpee Push Up Pyramid, start in a standing position.  Begin by quickly hitting the ground and assuming a pushup position.  Perform 8 pushups and immediately return to a standing position by jumping your feet in close to your hands and then springing up.  Once again, hit the ground, this time performing 6 push ups.  Quickly stand again.  Continue this pyramid performing 4 reps then 2 reps.  The entire pyramid equals one set',
    images: 3
  },
  82: {
    name:'DB Fielder Curls',
    desc:'To perform the DB Fielder Curls, grab a pair of dumbbells (slightly lighter than what you would normally perform curls with) and lean forward at the waist about 45 degrees (letting your arms hang naturally between your legs).  From here, curl the weights up until your elbows are bent 90 degrees.  Without coming out of the "ready fielder" position, slowly lower and repeat.',
    images: 2
  },
  83: {
    name:'Alternating DB Incline Bench Press',
    desc:'To perform the Alternating DB Incline Bench Press, grab a pair of dumbbells and lie on an incline bench angled to 30-45 degrees.  Begin with the dumbbells held at arms length over the upper chest.  Lower one dumbbell until the elbow is bent 90 degrees.  Press back up to the top and then lower the opposite arm to 90 degrees.  Continue in alternating fashion until all reps of the set are complete.',
    images: 2
  },
  84: {
    name:'DB Renegade Row',
    desc:'To perform the DB Renegade Row, grab a pair of dumbbells and assume a push up position on the floor, using the dumbbells in each hand as a means of support.  While contracting the abs and keeping the feet slightly spread for stability, row one dumbbell up keeping your elbow in close to your side.  At this point you will have two feet and one dumbbell on the ground.  Return the dumbbell to the ground and then lift the other one in the same fashion.  Continue alternating arms until the prescribed number of reps are completed.',
    images: 2
  },
  85: {
    name:'Crossover Lunge',
    desc:'To perform the Crossover Lunge, use either a light pair of dumbbells bodyweight.  Cross the left foot over the right and lunge to the right (as if backhanding a ground ball in the hole).  Push off the left leg back into a standing position.  On the next rep, cross the right foot over in similar fashion.  Continue alternating to finish the set.',
    images: 2
  },
  86: {
    name:'Crossover Step Up',
    desc:'To perform the Crossover Step Up, stand to the side of a 14 – 20" plyometric box or platform.  Step across with the outside leg and place the foot flat on top of the platform.  You should feel a stretch in the inside leg hip.  From here, push through the foot on the platform and power yourself on top of the box.  Slowly lower the inside foot to the ground.',
    images: 2
  },
  87: {
    name:'Tubing External Rotation',
    desc:'To perform the Tubing External Rotation exercise, anchor a piece of fairly light tubing to a sturdy post and grip the handle.  Place a folded up towel underneath your arm and hold it tight to your side throughout.  Keep your elbow bent to 90 degrees and slowly rotate your hand away from your stomach.  You knuckles should be facing behind you at the end of the movement.  Slowly return to the starting position and repeat.',
    images: 2
  },
  88: {
    name:'90/90 External Rotation',
    desc:'To perform the 90/90 External Rotation exercise, anchor a piece of tubing to a sturdy post, approximately 1-2 feet off the ground.  Position your arm into a 90/90 position.  In other words, bend your elbow to 90 degrees and align your upper arm with your trunk at a 90 degree position.  From here, start with your forearm parallel to the floor and your knuckles pointed straight ahead.  Rotate your arm up, until your forearm is perpendicular to the floor and your knuckles are facing the ceiling.  Slowly return and repeat for desired number of reps.',
    images: 2
  },
  89: {
    name:'Sword Raises',
    desc:'To perform the Sword Raise exercise, anchor a piece of tubing to a low point on a sturdy post and face your body perpendicular to the post (with your working arm furthest away from anchor point).  Begin with your working hand palm down and in front of your opposite thigh.  From here, pull your arm up and across your body while rotating your hand up.  At the top your palm should be facing up and your arm should be straight and above shoulder height.  Slowly return and repeat for desired number of reps.',
    images: 2
  },
  90: {
    name:'Prone I\'s, Y\'s, T\'s, and W\'s',
    desc:'To perform the Prone I\'s, Y\'s, T\'s, W\'s simply grab a pair of light dumbbells (generally no heavier than 8-10 lbs) and lie face down on a slightly inclined bench.  From here you are simply going to make the shapes of the specific letters using your arms and body.  For the I, the arms should stay close to the sides and travel straight back.  For the Y, the arms should come out front and at a 45 degree angle.  For the T, the arms should go straight out to the sides.  Lastly, for the W, the arms should travel behind the body as you turn your thumbs behind you (like pouring pitchers of water over your shoulders).',
    images: 4
  },
  91: {
    name:'The "OK" Raise',
    desc:'To perform the "OK" Raise grab a pair of fairly light dumbbells and stand up straight with your hands resting on your thighs to start.  From here, raise the dumbbells to shoulder height by lifting them out at 45 degree angles to the body.  They should neither be lifted straight in front or straight out to the sides, but rather halfway between the two.',
    images: 2
  },
  92: {
    name:'Tubing Scarecrows',
    desc:'To perform Tubing Scarecrows, wrap a piece of handled tubing around a sturdy post and grasp one handle in each hand.  Step far enough away to start so that you have adequate tension on the bands.  From here, position both elbows at 90 degrees, however one will be facing down and one will be facing up.  Begin the exercise by simply alternating the arm positions.  The one facing down will rotate up and the one facing up will rotate down.  Continue to alternate reps in this fashion until the set is completed.',
    images: 2
  },
  93: {
    name:'Eccentric "Brake Slammers"',
    desc:'Lie on your back on the floor.  Position the throwing arm at 90 degrees abduction and 90 degrees of elbow flexion ("L" position).  Hold one end of the jump stretch cord with your throwing hand and loop the other end of the band around your same side foot.  Start the exercise by bending the knee up and positioning the throwing arm in slight ER.  There should be just a little tension on the band at this point.  Next, rapidly extend and straighten the knee and work to control the resulting IR at the shoulder.  Aim for 2-3 seconds for each rep.',
    images: 2
  },
  94: {
    name:'The "Big Catch"',
    desc:'Start by lying on your back on the floor with one end of a jump stretch band around the soles of both feet and the other end held in the throwing hand.  Begin by bending both knees towards the chest and positioning the throwing arm with the elbow bent 90 degrees and the wrist extended back.  Arm should be in a "triceps pushdown" like position.  Next, explosively extend both knees out and eccentrically control the extending of the elbow and flexion of the wrist by taking 2-3 seconds to complete the motion.  Immediately perform the next repetition by bending the knees up again and repositioning the elbow as described earlier.  Repeat for 12 reps.',
    images: 2
  },
  95: {
    name:'Follow Through Jump Outs',
    desc:'Grab a band of significant tension with your throwing hand and position yourself at a 45 degree angle to the anchor point with your throwing shoulder furthest from the wall.  To begin the exercise, position your throwing shoulder at 90 degrees of abduction and in the same plane as the chest, and extend your wrist back.  There should be a good amount of tension on the shoulder and wrist at this point.  Next, take a big jump step towards the direction of your throwing shoulder.  The band will try to pull your arm across your body and toward the target (anchor wall) and your wrist into flexion.  Eccentrically attempt to control this motion over 2-3 seconds.',
    images: 3
  },
  96: {
    name:'Eccentric Step Aways',
    desc:'Start by standing with your elbow bent at 90 degrees and tucked into your side.  Hold one end of a fairly resistant tubing (enough to pull you back once the exercise begins). With just enough tension in the band to get it to straighten, externally rotate the shoulder by bringing your hand and forearm towards your back (like in the earlier Tubing ER exercise from the workout section of the manual).  Now, begin the exercise by taking a big step (small leap is ok) away from the point where the band is anchored.  If the band is of sufficient tension and the step/leap is big enough, your hand and forearm will be rotated back in the direction of your stomach.  You should try and slow down this movement so that it occurs over 2-3 seconds.  Reset into the externally rotated position and then step/leap out again for the next rep.  Repeat until the 12 reps are complete.',
    images: 2
  },
  97: {
    name:'Crossover Toe Touch',
    desc:'Take a wide step sideways with the right leg (placing a good stretch on the groin muscles).  Squat down to parallel and further stretch the groin.  Stand up and cross the left leg over the right, placing the left foot close to the right.  Bend over and touch the toes, keeping the knees straight.  Return to standing and continue to walk sideways 8-10 steps.  Continue facing the same direction and side stepping back to the starting point.',
    images: 3
  },
  98: {
    name:'Inchworm',
    desc:'Stand upright with hands at your sides.  Bend over at the waist and walk yourself out onto the floor into a plank or pushup position.  Be sure to drive your heels into the ground and your knees back as you do this!  Next, from the plank position, slowly walk your feet towards your hands as you raise your butt up and resume a standing position.  Perform this for 6 reps.',
    images: 3
  },
  99: {
    name:'Spiderman Crawl',
    desc:'Very simply, when doing this exercise you should look like Spiderman climbing the side of a building.  Start in a plank position with your knees off the floor.  Crawl forward by advancing your left hand and your right knee at the same time.  Be sure to reach high with the right knee, opening the hips and nearly touching your right elbow with it.  After feeling a good stretch in the hips, groin and hip flexor, switch sides and advance the right hand and left knee.  Perform 10 total reps as you "climb" the floor.',
    images: 3
  },
  100: {
    name:'Lunge Rotation Hip Press',
    desc:'Take a large step forward with your left leg, as if doing a lunge.  Place and support weight on your right hand, even with your left foot.  Take your left elbow and reach down to the instep of your forward leg while keeping your back knee off the ground.  Lastly, move your left hand outside your left foot and push your hips straight to the sky, before moving into the next lunge.',
    images: 3
  },
  101: {
    name:'Drop Step Lunge and Lean',
    desc:'Stand with your hands reaching over your head.  Step back and across with the left foot, placing it to the outside of the right foot.  Sink down into a squat, bending both knees and trying to keep the heel of the front leg down on the ground.  At the bottom of the squat, bend your torso to the side of the front leg to increase the stretch in the rib cage and core.  Stand and repeat in the other direction.',
    images: 2
  },
  102: {
    name:'Air/Ground Alternating Toe Touch Attack',
    desc:'Stand tall and start by kicking out the right leg in front of you and reaching to touch the toe with your left hand.  Once touched, lower the foot back to the ground and immediately bend at the waist, letting the left leg lift up behind you.  Touch the toe of the right foot, which is firmly planted on the ground.  Repeat 10 times and perform on the other side, using the left toe as the focus of your stretch.',
    images: 2
  },
  103: {
    name:'Rollup',
    desc:'The Rollup is a classic Pilates exercise that has a tremendous ability for building up core strength from the inside out (by working both the transverse and rectus abdominus muscles at the same time).  Begin by lying on your back with your arms reached straight out overhead and your legs pointed straight out in the opposite direction.  Inhale, tighten the core and then exhale as you raise up and reach for your toes.  On the return, it is extremely important to try and "paint" your spine back onto the mat one vertebra at a time.  This descent should take about 5 seconds…so slowness is key. 10',
    images: 2
  },
  104: {
    name:'Jackknife',
    desc:'To perform the Jackknife exercise start the same way you did in the Rollup, with your arms stretched out straight overhead and your legs straight out.  However this time, your legs should be held 1-2 inches off the floor to engage the core immediately.  Start by simultaneously raising your trunk and one leg towards the top (into a V position) and reach your hands past your knee.  Return to the start and alternate to the other leg.',
    images: 2
  },
  105: {
    name:'Heels to the Heavens',
    desc:'To perform the Heels to the Heavens exercise, begin by lying on your back on a padded mat and position your arms out to your sides and your legs in the air at about 60 degrees.  From here, activate the lower abdominals and lift the legs until they are perpendicular to the ground.  Once there, lift the pelvis off the floor and press the feet straight up towards the sky.  Always remember to try and control the lowering of the pelvis back down to the floor.  That part is key.  Lower the legs to the 60 degree starting position and repeat.  Try to minimize the amount of involvement of the hands pushing in this exercise.',
    images: 2
  },
  106: {
    name:'Ball Passes',
    desc:'To perform the Ball Pass exercise, begin by lying on your back on a padded mat while holding a physioball.  The smaller the size of the physioball the easier the exercise will be.  Start by positioning your legs 45 degrees off the floor and your shoulder blades clear of the ground.  Your arms should be outstretched with the ball being held high over the head.  Begin by crunching both the hands and legs together until you reach the middle of the "V" sit position.  From here, pass the ball to your legs (grip it between the ankles and shins) and lower to the starting position.  Repeat the crunch and this time grab the ball from the legs with the hands.  Continue to alternate the passes each rep until set completion.',
    images: 2
  },
  107: {
    name:'Plank March',
    desc:'To perform the Plank March exercise simply position your body in a plank position with only your forearms and toes as your point of ground contact.  Engage the core muscles and prevent your lower back from sagging at any point in the exercise.  Begin by slowly lifting one foot 1-2 feet off the ground without allowing the pelvis to tip.  Continue alternating the foot marches ,trying to be sure that you keep your leg straight with each march, until the prescribed number of reps are completed.',
    images: 2
  },
  108: {
    name:'Starfish',
    desc:'This exercise gets its name from the position of the body at the start.  You should look like a starfish on the beach with your arms overhead and spread and legs outstretched and spread.  The core should be engaged throughout to prevent the lower back from arching.  From here, begin by crunching up into a V-sit position and rotate your trunk in either direction, to bring your arm towards your opposite toe.  Return to the starting position and perform your next rep by rotating in the opposite direction.  Continue alternating reps to set completion.',
    images: 2
  },
  109: {
    name:'Windshield Wipers',
    desc:'To perform the Windshield Wiper exercise, simply lie on your back on a padded mat and lift your legs up to about 45 degrees off the floor while squeezing your feet and inner thighs together.  Place your hands out to your sides to support the weight of your legs.  Begin by slowly dropping your legs down to the left either until they are 45 degrees off the floor to your side OR you feel the abs contract and engage to brake or slow down any additional movement.  At this point, further contract the abs to bring the legs back to the center starting position.  Next, drop the legs to the other side and recenter again using the abs…NOT by moving the legs.  Continue to alternate directions until the set is complete.',
    images: 2
  },
  110: {
    name:'V-Up Russian Twist',
    desc:'The V-Up Russian Twist is one of the greatest abdominal / core exercises ever.  To perform it, simply lie on your back holding a medicine ball behind your head and keep your legs about 30 degrees off the floor.  Start by crunching your upper torso up into a V-Sit position and make sure to establish your balance at the top.  Then, rotate to both the right and left side, slamming the medicine ball to the floor each time, reestablish center balance, and then return to the starting position again.  Repeat for the prescribed number of reps.',
    images: 2
  },
  111: {
    name:'ISO Reverse Crunch',
    desc:'The ISO Reverse Crunch may be the smallest movement you\'ve ever done for your abs, but it delivers huge results…particularly for the internal obliques.  To perform it, lie on your back with your hands at your sides and your thighs perpendicular to the ground.  Bend your knees all the way so that your calves are in contact with your hamstrings.  From here, attempt to curl your lower back and butt off the ground without using ANY momentum.  Don\'t allow your heels to swing up or loose contact with the backs of your legs at any point.  The pelvic lift should come completely from the contraction of the abs/obliques and nothing else.  Lower slowly back to the starting position and repeat for the prescribed number of reps.',
    images: 2
  },
  112: {
    name:'Opposite Knee to Elbow',
    desc:'To perform the Opposite Knee to Elbow exercise, assume the plank position with your forearms and toes on the ground.  Engage the abs throughout and prevent any sagging of the lower back at any point.  Now, lift the opposite elbow and knees and touch them together at a point beneath the chest.  Don\'t allow your hips to tilt at all during this part of the exercise.  Slowly return the limbs to their starting points and proceed to the next rep, this time using the other arm and leg combo.  Continue to alternate reps until the set is completed.',
    images: 2
  },
  113: {
    name:'Canoes',
    desc:'If you\'ve ever been in a canoe, this exercise movement should be like second nature to you.  If not, it will just require a little bit of coordination, that I\'m sure you\'ll get the hang of in no time.  You can do this holding either a plate, a medicine ball, or nothing at all.  Begin the exercise by establishing your "balance sit" position where you should have your feet in the air and your weight on your tailbone.  Next, simply "paddle" down and to your left and then across your body and down to the right while pulling the knees to the chest slightly on ever downstroke.  Continue to alternate direction of paddles until set is complete.',
    images: 2
  },
  114: {
    name:'Scissor V-Ups',
    desc:'This one may seem a bit tough at first because of the coordination involved, but once you get the hang of it you will see big dividends from it, as it is one of the toughest ab exercises known to man.  To do it, lie on your back and position your legs straight out about 30 degrees off the floor.  Begin by scissoring them over and back.  Once you\'ve established a rhythm (and lit up your lower abs in the process), bring your upper body up into a V-Sit position while reaching for your toes.  Establish the balance at the top for a second or so and then slowly lower yourself back to the starting position, all the while maintaining your scissor.  Continue to perform the prescribed number of V-Ups while scissoring the whole time.  Keep your lower back flat throughout.  If you feel as if you are beginning to arch, then either stop entirely or raise your legs higher to allow you to continue.',
    images: 2
  },
  115: {
    name:'BOSU Tuck Crunch',
    desc:'To do the BOSU Tuck Crunch you obviously need to have (or at least have access to) a BOSU.  Position your body just front of center on the blue, domed side of the BOSU. Now sit back, keep your arms tucked in to your sides and establish your balance using your core.  Your legs should now be moved out until they are almost straight.  This will require you to lean your trunk back just a little bit more to maintain your balance.  Now, from here, contract your core and attempt to bring your knees and chest together while keeping yourself balanced delicately on top of the dome.  Recline again, extending both the upper torso and legs apart, and repeat for the desired number of reps.',
    images: 2
  },
  116: {
    name:'Same Side Elbow to Knee',
    desc:'Once again, we return to the plank position, but this time we up the difficulty another notch.  To perform the Same Side Elbow to Knee exercise you simply establish a prone plank position.  Prevent the lower back from sagging at any point by engaging your core muscles.  Start by lifting the same side elbow and knee and attempt to touch them at a point directly beneath your chest without losing your balance or overly tilting your pelvis.  Slowly return the elbow and knee to their starting position and on the next rep, lift the limbs on the other side.  Continue the reps in alternating fashion until the set is complete.',
    images: 2
  },
  117: {
    name:'Physioball Around the World',
    desc:'The Physioball Around the World is a great core power and stability exercise…and it happens to be another extremely difficult one, that also begs for some upper body strength as well in order to complete it.  To perform the exercise, position your body on top of a physioball with your shins or toes on top of the ball (the further towards your toes the ball is, the harder the exercise is).  Begin by tucking the knees in the direction of the chest, but instead of coming directly straight in, rotate the ball in a circular direction.  You should be drawing big circles on the ground with the ball.  Do half of your reps in one set in the clockwise position and the other half moving your legs counterclockwise.',
    images: 3
  },
  118: {
    name:'In In Out Out',
    desc:'· Start facing the side of the ladder in front of the first box. · Begin by stepping in with the left foot, then in with the right foot. · Step outside the second box with the left foot followed by the right foot. · Continue working your way down the ladder in this alternating "In In Out Out" footwork pattern.',
    images: 1
  },
  119: {
    name:'Icky Shuffle',
    desc:'· Start by facing down ladder and to the side.  · Using a 1-2-3 rhythm, step in first square with the inside foot, then the outside foot.  · Step to the outside of the second square with the lead foot.  · Step into the second square with the trail foot.  · Step with the lead foot into square two.  · Repeat the exercise leading with the other foot.',
    images: 1
  },
  120: {
    name:'Ali Shuffle',
    desc:'· Begin by putting your left foot into the first box and your right foot on the outside of the first box. · Simultaneously scissor hop and place your right foot into the first box while you progress down the ladder by putting your left foot outside the second box. · Scissor again, this time putting your right foot on the outside of the second box and your left foot inside it. · Continue this pattern to the end of the ladder.  You should look like Ali doing his thing.',
    images: 1
  },
  121: {
    name:'Lateral Run (2 Feet in)',
    desc:'· Start facing laterally in front of the ladder. · Place your left foot into the first box followed by your right foot. · Continue this pattern of two feet in each box as you rapidly progress down the ladder.',
    images: 1
  },
  122: {
    name:'Cross Over',
    desc:'· Stand straddling a line that is either painted in the grass or created with a strip of tape on a firm surface, with your left foot over and in front of your right. · Begin by jumping straight up in the air, enough to clear your feet and quickly cross them landing softly on the balls of your feet with your right now over and in front of your left. · Continue this quick switch jump for 30 seconds.',
    images: 1
  },
  123: {
    name:'Two Foot Figure 8',
    desc:'· Create a "line box" in either the grass (with paint) or on a firm surface with tape and stand in the lower right hand box with both feet close together. · Start by quickly hopping both feet diagonally into the upper left hand box. · Quickly jump to your right into the box on the upper right. · Finish by jumping diagonally backward into the box in the lower left hand corner. · Jump back to the starting box and repeat for the 30 seconds.',
    images: 1
  },
  124: {
    name:'X Jump and Turn',
    desc:'· Create a "line box" in the grass with spray paint or on a firm surface using tape and begin by straddling the midline so that your right foot is in the lower right hand box and your left foot is in the lower left hand box. · Quickly jump and land at the center of the box (where the two lines intersect) and bring your feet closer together (so that each one is just to the outside of the midline. · Next, jump forward and again spread the feet out and land with your right foot in the upper right hand box and the left foot in the upper left hand box. · From here, rapidly jump and turn your body 180 degrees so that you land in the same two boxes, but this time you are facing in the opposite direction. · Proceed to jump back to the starting position in this "hopscotch" manner for 30 sec.',
    images: 1
  },
  125: {
    name:'Side to Side Line Hop (Two feet and Right / Left Solo)',
    desc:'· Stand with both feet on one side of a line that is either painted in the grass or created with a strip of tape on a firm surface.  This drill can alternately be done on one leg (as shown in the two pictures on the right above). · Quickly, and without much height, jump laterally to the other side of the line, landing softly on the balls of your feet. · Continue rapidly jumping side to side for 30 seconds.',
    images: 1
  },
  126: {
    name:'Star Drill',
    desc:'· Set up 8 cones in a half-star pattern 5-7 yards apart.  · Start in an athletic position with head and shoulders up and knees slightly bent at cone 1.  · Sprint to cone 2, touch the cone with your hand, and sprint back to cone 1.  · Sprint to cone 3, touch the cone with your hand, and sprint back to 3.  · Continue this pattern until you have touched every cone.  Reps: 4-10 / Rest: 1 minute Variations: You can vary this drill by performing different agility skills in each leg of the drill, by altering the distance of the cones, or by changing the order of the skills.',
    images: 1
  },
  127: {
    name:'Corner Drill',
    desc:'· Start with four cones in a square pattern, spread out 5 yards apart. · Begin on the right side of cone 1 and sprint to cone 2. · Stay to the outside of the cone and sprint to cone 3. · Sprint around the outside of cone 3 to cone 4.  · Stay to the outside of cone 4 and sprint to the finish line. Reps: 4-10 / Rest: 1 minute Variations: You can vary this drill by performing different agility skills in each leg of the drill, by altering the distance of the cones, or by changing the order of the skills.',
    images: 1
  },
  128: {
    name:'Agility Wheel',
    desc:'· Set up 9 cones in a circle, with each cone 5 yards apart (see drawing above).  · Stand in the center of the circle at cone 9.  · Start by sprinting to cone 1, and then back-pedal back to the center. · Sprint to cone 2 and sprint back to the center. · Shuffle to cone 3 and shuffle back to the center.  · Sprint to cone 4 and sprint back to the center.  · Backpedal to cone 5 and sprint back to the center.  · Sprint to cone 6 and sprint back to the center.  · Shuffle to cone 7 and shuffle back to the center.  · Sprint to cone 8 and sprint through the center.  Reps: 4-10 / Rest: 1 minute Variations:  The drill can be varied by changing either the distance between the cones or the skills performed during each leg of the drill.',
    images: 1
  },
  129: {
    name:'Pro Agility Drill (5-10-5)',
    desc:'· This is the same 5-10-5 drill that you did previously during the field testing portion of the manual.  This drill is an excellent drill for developing acceleration / deceleration and foot quickness and is extremely productive drill for both infielders looking to improve their ability to drop their center of gravity to field ground balls or for pitchers looking to get better at fielding bunts). · Start in a 2-point stance straddling the starting line.  · Open to your right or left; sprint 5 yards; touch the line with your hand.  · Turn and sprint 10 yards and touch the line with your hand.  · Turn and sprint 5 yards through the finish line. Reps: 4-10 / Rest: 1 minute Variations:  This drill can be varied by either changing the distance between the lines or the direction in which you start (i.e. first step to the right or to the left).',
    images: 1
  },
  130: {
    name:'Jump Rope – Two Foot Hops',
    desc:'The standard jump rope drill.  Keep your feet low to the ground and land on the balls of your feet.  Jump with both feet together and work on improving your agility and soft foot contact.',
    images: 0
  },
  131: {
    name:'Jump Rope – Single Leg Jumps',
    desc:'As the name implies, you are going to be hopping on one foot throughout this drill.  You may switch half way through to the other foot if you wish.  Stay light on your feet, land on the ball of the foot and keep your rope moving quickly.',
    images: 0
  },
  132: {
    name:'Jump Rope – Side to Side Hops (two feet)',
    desc:'Just like in the Two Foot Hops, you will perform the same basic pattern.  However, this time you are going to hop back and forth left to right.  This lateral pattern enhances agility even more than just a basic rope jump.',
    images: 0
  },
  133: {
    name:'Jump Rope – Side to Side Hops (one foot)',
    desc:'This time you are going to perform the side to side hop, but are going to do it on one foot (as the name implies).  You may switch to the other foot half way through the set if you like.  Most importantly however is to land on the ball of your foot and land softly.  Keep the rope moving quickly.',
    images: 0
  },
  134: {
    name:'Jump Rope – Boxer Shuffle',
    desc:'The Boxer Shuffle gets its name for the fact that this is the drill you usually see boxers doing when they are prepping for a fight.  It is the ultimate "light foot" drill, where you actually look like you\'re floating while jumping.  You should try and casually bounce from left to right foot, throwing in some heel taps as well.  Really whatever you feel as you jump is what you should do.  Go for smooth dancelike movement here for best results.',
    images: 0
  },
  135: {
    name:'Jump Rope – Single Single Double',
    desc:'Bring some power to your rope jumping by doing this exercise.  Start by getting into a rhythm with a normal two foot hop.  Once you feel like you\'re ready to start, perform two consecutive single jumps followed by an explosive double jump.  The double jump requires you to jump higher than usual and try to clear the rope twice on one jump.  If successful, immediately repeat the pattern, continuing with two single jumps and a double.',
    images: 0
  },
  136: {
    name:'Half Gassers',
    desc:'Place two cones in a straight line 30 yards apart.  While holding a stopwatch to time yourself, sprint from the first cone to the second.  When you reach the second cone, turn and change direction sprinting back to the first cone.  Try to complete the round trip in about 8-10 seconds.  Regardless of how long it takes you to complete the trip, you have the remainder of the 30 seconds (approximately 20 seconds) to rest until you have to perform your next rep.  Continue in this manner, completing the run and then getting your rest, all within 30 seconds.',
    images: 0
  },
  137: {
    name:'30 yard Jumps',
    desc:'Place two cones 30 yards apart (the distance from home plate to first base).  Start by taking a few hopping steps, as if taking a secondary lead while on first base.  Imagining a ball hit through the hole for a base hit, turn and sprint towards the second cone.  Walk back to the first cone, turn and repeat.',
    images: 0
  },
  138: {
    name:'Full Gassers',  
    desc:'Place two cones in a straight line 60 yards apart.  While holding a stopwatch to time yourself, sprint from the first cone to the second.  When you reach the second cone, turn and change direction sprinting back to the first cone.  Try to complete the round trip in about 18-20 seconds.  Regardless of how long it takes you to complete the trip, you have the remainder of the 60 seconds (approximately 40 seconds) to rest until you have to perform your next rep.  Continue in this manner, completing the run and then getting your rest, all within 1 minute.',
    images: 0
  },
  139: {
    name:'10 and 5\'s',
    desc:'This is generally a short distance run, either a 30 or 60 yard distance.  The "10" portion of it describes running 10 sprints to a distance of 30 or 60 yards, and walking back to the starting point between each one.  Whichever distance you choose to run for that day, the "5" portion then refers to cutting that distance in half (30 yards for the 60 yard sprints and 15 yards for the 30 yard sprints) and doing 5 backpedals to that distance.  In total, there are a combination of 15 sprints and backpedals performed on that day.',
    images: 0
  },
  140: {
    name:'60 Yard S-Runs',
    desc:'Place two cones 60 yards apart.  Sprint from the first cone to the second, while incorporating S-turns into the run.  The difficulty of the run is increased by tightening up the turns and completing more within the 60 yards.  Change of direction skills and agility are stressed more when the turns are kept tight and frequent.  Regardless of how you perform the run, walk back to the first cone after each run.  This will serve as your rest period.  Turn and sprint upon return to the first cone and repeat for the prescribed number of reps.',
    images: 0
  },
  141: {
    name:'Sprint / Walk / Jog',
    desc:'Mark off a distance of 90 yards and place a cone at the half way mark as well.  The drill begins with you sprinting to the cone 90 yards away. Turn around and walk back to the half way mark 45 yards away, and then jog back to the starting cone.  Turn and repeat this cycle of sprint/walk/jog for the prescribed number of reps.',
    images: 0
  }
};

// Setting flag for core exercises
exercises[32].core = true;
for( var i = 103; i <= 117; i++ ) {
  exercises[i].core = true;
}