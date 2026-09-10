/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
}


/* =========================
   WORKOUT GENERATOR
========================= */

function generateWorkout() {

    const goal = document.getElementById("goal").value;
    const experience = document.getElementById("experience").value;
    const days = Number(document.getElementById("days").value);

    let plan = [];

    if (days === 3) {

        plan = [
            {
                day: "DAY 1",
                title: "Push",
                exercises: [
                    "Bench Press — 3 × 8-12",
                    "Shoulder Press — 3 × 8-12",
                    "Incline Dumbbell Press — 3 × 10",
                    "Triceps Pushdown — 3 × 12"
                ]
            },
            {
                day: "DAY 2",
                title: "Pull",
                exercises: [
                    "Lat Pulldown — 3 × 10",
                    "Barbell Row — 3 × 8-12",
                    "Seated Cable Row — 3 × 10",
                    "Biceps Curl — 3 × 12"
                ]
            },
            {
                day: "DAY 3",
                title: "Legs",
                exercises: [
                    "Squat — 3 × 8-10",
                    "Leg Press — 3 × 10",
                    "Leg Curl — 3 × 12",
                    "Calf Raise — 3 × 15"
                ]
            }
        ];

    } else if (days === 4) {

        plan = [
            {
                day: "DAY 1",
                title: "Chest + Triceps",
                exercises: [
                    "Bench Press — 3 × 8-12",
                    "Incline Press — 3 × 10",
                    "Cable Fly — 3 × 12",
                    "Triceps Pushdown — 3 × 12"
                ]
            },
            {
                day: "DAY 2",
                title: "Back + Biceps",
                exercises: [
                    "Lat Pulldown — 3 × 10",
                    "Barbell Row — 3 × 8-12",
                    "Cable Row — 3 × 10",
                    "Biceps Curl — 3 × 12"
                ]
            },
            {
                day: "DAY 3",
                title: "Shoulders",
                exercises: [
                    "Overhead Press — 3 × 8-10",
                    "Lateral Raise — 3 × 12",
                    "Rear Delt Fly — 3 × 12",
                    "Face Pull — 3 × 15"
                ]
            },
            {
                day: "DAY 4",
                title: "Legs",
                exercises: [
                    "Squat — 3 × 8-10",
                    "Leg Press — 3 × 10",
                    "Romanian Deadlift — 3 × 10",
                    "Calf Raise — 3 × 15"
                ]
            }
        ];

    } else if (days === 5) {

        plan = [
            {
                day: "DAY 1",
                title: "Chest",
                exercises: [
                    "Bench Press — 4 × 8",
                    "Incline Press — 3 × 10",
                    "Cable Fly — 3 × 12"
                ]
            },
            {
                day: "DAY 2",
                title: "Back",
                exercises: [
                    "Lat Pulldown — 4 × 10",
                    "Barbell Row — 3 × 8",
                    "Cable Row — 3 × 10"
                ]
            },
            {
                day: "DAY 3",
                title: "Shoulders",
                exercises: [
                    "Overhead Press — 3 × 8",
                    "Lateral Raise — 4 × 12",
                    "Rear Delt Fly — 3 × 12"
                ]
            },
            {
                day: "DAY 4",
                title: "Legs",
                exercises: [
                    "Squat — 4 × 8",
                    "Leg Press — 3 × 10",
                    "Leg Curl — 3 × 12"
                ]
            },
            {
                day: "DAY 5",
                title: "Arms",
                exercises: [
                    "Barbell Curl — 3 × 10",
                    "Hammer Curl — 3 × 12",
                    "Triceps Pushdown — 3 × 12",
                    "Skull Crusher — 3 × 10"
                ]
            }
        ];

    } else {

        plan = [
            {
                day: "DAY 1",
                title: "Chest",
                exercises: ["Bench Press — 4 × 8", "Incline Press — 3 × 10"]
            },
            {
                day: "DAY 2",
                title: "Back",
                exercises: ["Lat Pulldown — 4 × 10", "Barbell Row — 3 × 8"]
            },
            {
                day: "DAY 3",
                title: "Shoulders",
                exercises: ["Overhead Press — 3 × 8", "Lateral Raise — 4 × 12"]
            },
            {
                day: "DAY 4",
                title: "Legs",
                exercises: ["Squat — 4 × 8", "Leg Press — 3 × 10"]
            },
            {
                day: "DAY 5",
                title: "Arms",
                exercises: ["Barbell Curl — 3 × 10", "Triceps Pushdown — 3 × 12"]
            },
            {
                day: "DAY 6",
                title: "Full Body",
                exercises: [
                    "Squat — 3 × 8",
                    "Bench Press — 3 × 8",
                    "Lat Pulldown — 3 × 10"
                ]
            }
        ];
    }

    let html = `
        <h2>Your ${days}-Day Workout Plan</h2>
        <p style="color:#888;margin-bottom:20px;">
            Goal: ${goal} | Experience: ${experience}
        </p>

        <div class="workout-plan">
    `;

    plan.forEach(workout => {

        html += `
            <div class="day-card">

                <h3>${workout.day}</h3>

                <h4>${workout.title}</h4>

                <ul>
                    ${workout.exercises.map(ex => `<li>${ex}</li>`).join("")}
                </ul>

            </div>
        `;
    });

    html += `</div>`;

    document.getElementById("workoutResult").innerHTML = html;
}
/* =========================
   EXERCISE LIBRARY
========================= */

const exercises = [
    {
        name: "Bench Press",
        category: "chest",
        image: "images/bench-press.jpg"
    },
    {
        name: "Incline Press",
        category: "chest",
        image: "images/incline-press.jpg"
    },
    {
        name: "Lat Pulldown",
        category: "back",
        image: "images/lat-pulldown.jpg"
    },
    {
        name: "Barbell Row",
        category: "back",
        image: "images/barbell-row.jpg"
    },
    {
        name: "Squat",
        category: "legs",
        image: "images/squat.jpg"
    },
    {
        name: "Leg Press",
        category: "legs",
        image: "images/leg-press.jpg"
    },
    {
        name: "Shoulder Press",
        category: "shoulders",
        image: "images/shoulder-press.jpg"
    },
    {
        name: "Lateral Raise",
        category: "shoulders",
        image: "images/lateral-raise.jpg"
    },
    {
        name: "Biceps Curl",
        category: "arms",
        image: "images/biceps-curl.jpg"
    },
    {
        name: "Triceps Pushdown",
        category: "arms",
        image: "images/triceps-pushdown.jpg"
    },
    {
        name: "Hammer Curl",
        category: "arms",
        image: "images/hammer-curl.jpg"
    },
    {
        name: "Face Pull",
        category: "back",
        image: "images/face-pull.jpg"
    }
];


function displayExercises(filter = "all") {

    const grid = document.getElementById("exerciseGrid");

    if (!grid) return;

    grid.innerHTML = "";

    const filteredExercises =
        filter === "all"
            ? exercises
            : exercises.filter(
                exercise => exercise.category === filter
            );

    filteredExercises.forEach(exercise => {

        const card = document.createElement("div");

        card.className = "exercise-card";

        card.innerHTML = `
            <div class="exercise-image">
                <img
                    src="${exercise.image}"
                    alt="${exercise.name}"
                    loading="lazy"
                    onerror="this.style.display='none'"
                >
            </div>

            <div class="exercise-info">
                <h3>${exercise.name}</h3>
                <p>${exercise.category}</p>
            </div>
        `;

        grid.appendChild(card);
    });

    {

    const grid = document.getElementById("exerciseGrid");

    if (!grid) return;

    grid.innerHTML = "";

    const filteredExercises =
        filter === "all"
            ? exercises
            : exercises.filter(
                exercise => exercise.category === filter
            );

    filteredExercises.forEach(exercise => {

        const card = document.createElement("div");

        card.className = "exercise-card";

        card.innerHTML = `
            <div class="exercise-image">
                <img 
                    src="${exercise.image}" 
                    alt="${exercise.name}"
                    loading="lazy"
                >
            </div>

            <div class="exercise-info">
                <h3>${exercise.name}</h3>
                <p>${exercise.category}</p>
            </div>
        `;

        grid.appendChild(card);
    });
}




/* =========================
   CALORIE CALCULATOR
========================= */

function calculateCalories() {

    const age = Number(document.getElementById("calAge").value);
    const gender = document.getElementById("calGender").value;
    const height = Number(document.getElementById("calHeight").value);
    const weight = Number(document.getElementById("calWeight").value);
    const activity = Number(document.getElementById("activity").value);

    if (!age || !height || !weight) {

        document.getElementById("calorieResult").innerHTML =
            "Please complete all fields.";

        return;
    }

    let bmr;

    if (gender === "male") {

        bmr = (10 * weight) +
              (6.25 * height) -
              (5 * age) +
              5;

    } else {

        bmr = (10 * weight) +
              (6.25 * height) -
              (5 * age) -
              161;
    }

    const calories = Math.round(bmr * activity);

    document.getElementById("calorieResult").innerHTML =
        `Estimated maintenance: ${calories} kcal/day`;
}


/* =========================
   REST TIMER
========================= */

let timerSeconds = 60;
let timerInterval = null;


function updateTimerDisplay() {

    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;

    document.getElementById("timerDisplay").innerText =
        `${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;
}


function startTimer() {

    if (timerInterval !== null) return;

    timerInterval = setInterval(() => {

        if (timerSeconds > 0) {

            timerSeconds--;

            updateTimerDisplay();

        } else {

            clearInterval(timerInterval);

            timerInterval = null;

            alert("Rest time finished! Get back to work.");

        }

    }, 1000);
}


function pauseTimer() {

    clearInterval(timerInterval);

    timerInterval = null;
}


function resetTimer() {

    clearInterval(timerInterval);

    timerInterval = null;

    timerSeconds = 60;

    updateTimerDisplay();
}


updateTimerDisplay();


/* =========================
   PROGRESS TRACKER
========================= */

let sets = 0;


function completeSet() {

    sets++;

    if (sets > 20) {
        sets = 20;
    }

    updateProgress();

}


function resetProgress() {

    sets = 0;

    updateProgress();

}


function updateProgress() {

    document.getElementById("completedSets").innerText = sets;

    const percentage = (sets / 20) * 100;

    document.getElementById("progressFill").style.width =
        percentage + "%";
}
