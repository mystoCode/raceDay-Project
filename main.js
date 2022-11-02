// Race Day Project //

let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegister = true

let runnerAge = 37

if (runnerAge >= 18 && earlyRegister){
    raceNumber += 1000
}

if (runnerAge >= 18 && earlyRegister){
    console.log(`Thanks for being early! Your racetime is at 9:30 am. Your race number is ${raceNumber}`)
} else if (runnerAge >= 18 && earlyRegister !== true){
    console.log(`Your Late! racetime for you is at 11:00 am. Your lousy race number is ${raceNumber}`)
}

if (runnerAge < 18){
    console.log(`Child your race begins at 12:30 pm your race number is ${raceNumber}, now go drink some soda!`)
}
