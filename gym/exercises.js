var dayTypes = {
    STRENGTH_TRAINING: {code:'STRENGTH_TRAINING', color:'darkBlue', icon:'dumbell'},
    CONDITIONING: {code:'CONDITIONING', color:'green', icon:'run'},
    CHALLENGE: {code:'CHALLENGE', color:'red', icon:'trophy-variant'}
}

// based on javasript date getDay() for day of week, monday-friday 1-5
var weeks = [
  {
    id: 2, // WEEK 2
    days: [
      {
        id: 1, // MONDAY
        type: dayTypes.STRENGTH_TRAINING.code,
        desc: 'Upper Body Push',
        exercises: [
          {id: 25, sets: 3, reps: '12-15', time: null, tofail: false, name: 'Physioball Push Up Plus', notes: 'Place the ball closer to your feet for more challenge'}
        ]
      },
      {
        id: 2, // TUESDAY
        type: dayTypes.CONDITIONING.code,
        desc: 'Crunches and Punches Circuit',
        exercises: [
          {id: 110, sets: 1, reps: '/', time: null, tofail: true, name: 'V-Up Russian Twist', notes: ''},
          {id: null, sets: 1, reps: null, time: '3min', tofail: true, name: 'Nonstop shadow/heavybag boxing', notes: ''}
        ]
      },
      {
        id: 3, // WEDNESDAY
        type: dayTypes.STRENGTH_TRAINING.code,
        desc: 'Lower Body / Core',
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
        exercises: [
          {id: 5, sets: 4, reps: '10-12', time: null, tofail: false, name: 'Lat Pulldowns', notes: 'Drape tubing over high bar if no pulldown unit available'},
          {id: 84, sets: 3, reps: '12', time: null, tofail: false, name: 'DB Renegade Row', notes: 'Each set consists of 12 rows on each arm'},
          {id: 82, sets: 4, reps: '10-12', time: null, tofail: false, name: 'DB Fielder Curls', notes: 'Maintain your solid lower back positioning '},
          {id: 32, sets: 3, reps: '15', time: null, tofail: false, name: 'Physioball Reverse Hyperext.', notes: 'Lift legs by contracting glutes and lower back'},
          {id: 108, sets: 3, reps: '/', time: null, tofail: true, name: 'Starfish Crunches', notes: 'Perform 3 sets to failure resting < 30 seconds between'}
        ]
      }
    ]
  }
];

var exercises = {
  5: {
    name:'Underhand Pulldowns',
    desc:'To perform the Underhand Pulldown, position yourself under a high pulley machine and grasp the bar with an underhand shoulder width grip. Keeping your torso upright and a slight arch in the low back for support; squeeze the shoulder blades together and pull the bar to the level of the sternum. Slowly return the bar to the starting position.',
    images: 2
  },
  32: {
    name:'Physioball Reverse Hyperextensions',
    desc:'To perform the Physioball Reverse Hyperextension, lie face down over a physioball, with the ball directly under the upper thighs. You should be able to put your forearms flat on the ground. Begin the exercise by squeezing your heels together and glutes to lift your legs towards the ceiling. Your legs should form a straight line with your upper torso at the top. Lower and repeat.',
    images: 2
  },
  37: {
    name:'Step Up Thrusts',
    desc:'To perform the Step Up Thrust, stand in front of a 16-20 inch plyometric box or platform and place one foot flat on the surface. Simultaneously drive through the front leg and with the opposite arm as you forcefully step up. At the top of the movement, continue up into full hip and knee extension as you propel yourself into a slight jump (2-3 inches). Land softly and descend back to the starting position.',
    images: 2
  },
  38: {
    name:'Kettlebell / DB Swings',
    desc:'To perform the Kettlebell/DB Swing, squat down from the hips and knees while keeping the head and chest up at all times. Grab either a kettlebell or a dumbbell by one end (see picture) while it is resting on the floor. From here, squeeze the glutes and straighten the legs as you power straight up to a standing position. Smoothly allow the bell to swing forward, as momentum allows. Avoid swing the bell with your arms. Perform the reps smoothly.',
    images: 2
  },
  58: {
    name:'Single Leg Squat w/ Rotation',
    desc:'To perform the Single Leg Squat w/ Rotation, hold a 6-25 lb medicine ball and put one foot behind you and on a bench or bar that is about knee height. Descend into a squat on the front leg, being sure to not let your knee travel past your toe, and simultaneously rotate the ball and trunk over that knee. Stop at 90 degrees of knee bend and push back to standing.',
    images: 2
  },
  67: {
    name:'Physioball Leg Curls',
    desc:'To perform the Physioball Leg Curl, lie on your back with your hands out to your sides and a physioball under your legs (the closer it is to the heels, the more of a challenge it is). Begin by contracting your glutes and abs and raising your butt off the floor until your trunk is in a straight line with your legs. Pull the ball in towards your butt by pulling with the heels. Slowly control the ball as it rolls back out. Don’t allow your butt to lower until the set is over.',
    images: 2
  },
  82: {
    name:'DB Fielder Curls',
    desc:'To perform the DB Fielder Curls, grab a pair of dumbbells (slightly lighter than what you would normally perform curls with) and lean forward at the waist about 45 degrees (letting your arms hang naturally between your legs). From here, curl the weights up until your elbows are bent 90 degrees. Without coming out of the “ready fielder” position, slowly lower and repeat.',
    images: 2
  },
  84: {
    name:'DB Renegade Row',
    desc:'To perform the DB Renegade Row, grab a pair of dumbbells and assume a push up position on the floor, using the dumbbells in each hand as a means of support. While contracting the abs and keeping the feet slightly spread for stability, row one dumbbell up keeping your elbow in close to your side. At this point you will have two feet and one dumbbell on the ground. Return the dumbbell to the ground and then lift the other one in the same fashion. Continue alternating arms until the prescribed number of reps are completed.',
    images: 2
  },
  108: {
    name:'Starfish',
    desc:'This exercise gets its name from the position of the body at the start. You should look like a starfish on the beach with your arms overhead and spread and legs outstretched and spread. The core should be engaged throughout to prevent the lower back from arching. From here, begin by crunching up into a V-sit position and rotate your trunk in either direction, to bring your arm towards your opposite toe. Return to the starting position and perform your next rep by rotating in the opposite direction. Continue alternating reps to set completion.',
    images: 2
  },
  113: {
    name:'Canoes',
    desc:'If you’ve ever been in a canoe, this exercise movement should be like second nature to you. If not, it will just require a little bit of coordination, that I’m sure you’ll get the hang of in no time. You can do this holding either a plate, a medicine ball, or nothing at all. Begin the exercise by establishing your “balance sit” position where you should have your feet in the air and your weight on your tailbone. Next, simply “paddle” down and to your left and then across your body and down to the right while pulling the knees to the chest slightly on ever downstroke. Continue to alternate direction of paddles until set is complete.',
    images: 2
  }
};
