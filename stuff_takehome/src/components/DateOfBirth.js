import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

var months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

var years = [];
var currentMonth = 0;
var currentDay = 0;
var currentYear = 0;

function setup() {
  let yearFirst = 1900;
  let yearEnd = 2021;

  for (var i = yearFirst; i <= yearEnd; i++) {
    years.push(i);
  }
  currentYear = years.length - 1;
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth());
  currentDay = dd;
  currentMonth = mm;

}

var onDiv = false;
setup();
var dateValue =
  months[currentMonth] + " " + currentDay + ", " + years[currentYear];

export default class DateOfBirth extends Component {
  render() {
    currentYear = years.length - 1;

    /*hide date picker if clicked outside */
    window.onclick = function (e) {
      if (e.target.id !== "date" && onDiv === false) {
        hideDatePicker();
      }
    };

    function isOnDiv(n) {
      //is on date picker box
      onDiv = n;
    }

    function showDatePicker() {
      document.getElementById("date").style.display = "flex";
      onDiv = true; // dont hide it until user leaves date picker
    }

    function hideDatePicker() {
      if (!onDiv) {
        document.getElementById("date").style.display = "none";

        /* Reset borders */
        document.getElementById("day").classList.remove("border");
        document.getElementById("month").classList.remove("border");
        document.getElementById("year").classList.remove("border");
      }
    }

    /*Make sure day variable doesnt exceed days in certain months*/
    function checkDay() {
      if (months[currentMonth] === "Feb" && currentDay > 28) {
        currentDay = 28;
        document.getElementById("day").innerHTML = currentDay;
        dateValue =
          months[currentMonth] + " " + currentDay + ", " + years[currentYear];
        document.getElementById("dateInput").value = dateValue;

      } else if (
        currentDay > 30 &&
        (months[currentMonth] === "Apr" ||
          months[currentMonth] === "Jun" ||
          months[currentMonth] === "Sep" ||
          months[currentMonth] === "Nov")
      ) {
        currentDay = 30;
        document.getElementById("day").innerHTML = currentDay;
        dateValue =
          months[currentMonth] + " " + currentDay + ", " + years[currentYear];
        document.getElementById("dateInput").value = dateValue;
      }
    }

    function showPrevMonth() {
      if (currentMonth !== 0) {
        currentMonth -= 1;
      
        document.getElementById("month").innerHTML = months[currentMonth];
        dateValue =
          months[currentMonth] + " " + currentDay + ", " + years[currentYear];
        document.getElementById("dateInput").value = dateValue;
        document.getElementById("month").classList.add("border");

        document.getElementById("day").classList.remove("border");
        document.getElementById("year").classList.remove("border");

        checkDay();
      }
    }

    function showNextMonth() {
      if (currentMonth !== months.length - 1) {
        currentMonth += 1;
        document.getElementById("month").innerHTML = months[currentMonth];
        dateValue =
          months[currentMonth] + " " + currentDay + ", " + years[currentYear];
        document.getElementById("dateInput").value = dateValue;
        document.getElementById("month").classList.add("border");
        document.getElementById("day").classList.remove("border");
        document.getElementById("year").classList.remove("border");

        checkDay();
      }
    }

    function showPrevDay() {
      if (currentDay !== 1) {
        currentDay -= 1;

        if(currentDay < 10) {
          document.getElementById("day").innerHTML = "0" + currentDay;
          dateValue =
          months[currentMonth] + " " + "0" + currentDay + ", " + years[currentYear];
        }
        else {
        document.getElementById("day").innerHTML = currentDay;
        dateValue =
        months[currentMonth] + " " + currentDay + ", " + years[currentYear];
        }

       
        document.getElementById("dateInput").value = dateValue;
        document.getElementById("day").classList.add("border");
        document.getElementById("month").classList.remove("border");
        document.getElementById("year").classList.remove("border");
      }
    }

    function showNextDay() {
      if (currentDay === 28 && months[currentMonth] === "Feb") {
        return;
      } else if (
        currentDay === 30 &&
        (months[currentMonth] === "Apr" ||
          months[currentMonth] === "Jun" ||
          months[currentMonth] === "Sep" ||
          months[currentMonth] === "Nov")
      ) {
        return;
      } else {
        if (currentDay !== 31) {
          currentDay += 1;

          if(currentDay < 10) {
            document.getElementById("day").innerHTML = "0" + currentDay;
            dateValue =
            months[currentMonth] + " " + "0" + currentDay + ", " + years[currentYear];
          }
          else {
          document.getElementById("day").innerHTML = currentDay;
          dateValue =
          months[currentMonth] + " " + currentDay + ", " + years[currentYear];
          }

          document.getElementById("dateInput").value = dateValue;
          document.getElementById("day").classList.add("border");
          document.getElementById("month").classList.remove("border");
          document.getElementById("year").classList.remove("border");
        }
      }
    }

    function showPrevYear() {
      if (currentYear !== 0) {
        currentYear -= 1;
        document.getElementById("year").innerHTML = years[currentYear];
        dateValue =
          months[currentMonth] + " " + currentDay + ", " + years[currentYear];
        document.getElementById("dateInput").value = dateValue;
        document.getElementById("year").classList.add("border");
        document.getElementById("month").classList.remove("border");
        document.getElementById("day").classList.remove("border");
      }
    }

    function showNextYear() {
      if (currentYear !== years.length - 1) {
        currentYear += 1;
        document.getElementById("year").innerHTML = years[currentYear];
        dateValue =
          months[currentMonth] + " " + currentDay + ", " + years[currentYear];
        document.getElementById("dateInput").value = dateValue;
        document.getElementById("year").classList.add("border");
        document.getElementById("month").classList.remove("border");
        document.getElementById("day").classList.remove("border");
      }
    }

    return (
        <div className="dateOfBirth">
          <p id="title">Date of Birth</p>
          <input
            class="dateInput"
            type="text"
            value={dateValue}
            id="dateInput"
            onFocus={() => showDatePicker()}
          />
          <div
            className="date"
            id="date"
            onMouseLeave={() => {
              isOnDiv(false);
            }}
          >
            <div className="month">
              <button className="upIcon" onClick={() => showPrevMonth()}>
                <FontAwesomeIcon icon={faChevronUp} />
              </button>
              <div id="month">{months[currentMonth]}</div>
              <button className="downIcon" onClick={() => showNextMonth()}>
                <FontAwesomeIcon icon={faChevronDown} />
              </button>
            </div>

            <div className="day">
              <button className="upIcon" onClick={() => showPrevDay()}>
                <FontAwesomeIcon icon={faChevronUp} />
              </button>
              <div id="day">{currentDay}</div>
              <button className="downIcon" onClick={() => showNextDay()}>
                <FontAwesomeIcon icon={faChevronDown} />
              </button>
            </div>

            <div className="year">
              <button className="upIcon" onClick={() => showPrevYear()}>
                <FontAwesomeIcon icon={faChevronUp} />
              </button>
              <div id="year">{years[currentYear]}</div>
              <button className="downIcon" onClick={() => showNextYear()}>
                <FontAwesomeIcon icon={faChevronDown} />
              </button>
            </div>
          </div>
        </div>
    );
  }
}
