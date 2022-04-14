import React from "react";
import { useState } from "react";
import "./Home.css";

function Welcome() {
  const [clinic, setClinic] = useState(true);
  const [location, setLocation] = useState("");
  const [dr, setDr] = useState([]);
  const [drName, setdrName] = useState();
  const [slot, setSlot] = useState(false);
  const [timing, setTimeing] = useState("");

  var doctors;
  let locationFn = (city) => {
    if (city == "mumbai") {
      doctors = [
        {
          name: "Mr.Suni",
          special: "Brain",
        },
        {
          name: "Mrs.Arati",
          special: "Heart",
        },
        {
          name: "Mr.Jacob",
          special: "Skin",
        },
      ];
    }

    if (city == "bangalore") {
      doctors = [
        {
          name: "Mr.Manual",
          special: "Brain",
        },
        {
          name: "Mrs.Ann",
          special: "Heart",
        },
        {
          name: "Mr.pater",
          special: "Skin",
        },
      ];
    }
    setDr(doctors);
    console.log(doctors);
  };
  let doctorFn = (drData) => {
    console.log(drData);
    setdrName(drData);
  };
  let patientDetailsFn = () => {
    let name = document.getElementById("name").value;
    let number = document.getElementById("number").value;
    let age = document.getElementById("age").value;
    let date = document.getElementById("date").value;
    let symptoms = document.getElementById("symptoms").value;

    let patientForm = {
      name: name,
      number: number,
      age: age,
      date: date,
      time: timing,
      symptoms: symptoms,
      drName: drName.name,
      city: location,
    };

    let patients = JSON.parse(localStorage.getItem("doctors")) || [];
    patients.push(patientForm);
    localStorage.setItem("patientForm", JSON.stringify(patients));
    console.log(patientForm);
  };
  let timeFn = (t) => {
    setTimeing(t);
  };
  return (
    <div>
      {clinic && (
        <div className="containerr">
          <div className="left">
          <button
          className="booking"
          onClick={() => {
            setClinic(false);
          }}
        >
         Take an appointment
        </button>
        </div>
        <div className="right">
          <img className="doc_img" src="https://www.rdasia.com/wp-content/uploads/sites/2/2019/06/digital_doctors_770.jpg"/>
        </div>
        </div>
        
      )}

      {!clinic && !location && (
        <div className="locationDiv">
          <h1 className="chooseLocation">Choose Clinic Location</h1>

          <button
            onClick={() => {
              locationFn("mumbai");
              setLocation("mumbai");
            }}
          >
            Delhi
          </button>

          <button
            onClick={() => {
              locationFn("bangalore");
              setLocation("bangalore");
            }}
          >
            Bangalore
          </button>
        </div>
      )}

      {!clinic && location && !drName && (
        <div className="drListDiv">
          <h1>Choose Doctor</h1>
          <div className="drList">
            {dr.map((e) => (
              <button
                key={e.name}
                onClick={() => {
                  doctorFn(e);
                }}
              >
                Name:{e.name} Specalization:{e.special}
              </button>
            ))}
          </div>
        </div>
      )}

      {!clinic && location && drName && (
        <div className="drListDiv">
          <h1>Add Patient</h1>
          <div className="patientList">
            <form action="">
              <label htmlFor="">Patient name:</label>{" "}
              <input id="name" type="text" />
              <br />
              <label htmlFor="">Phone No.:</label>{" "}
              <input id="number" type="number" />
              <br />
              <label htmlFor="">Age:</label> <input id="age" type="number" />
              <br />
              <label htmlFor="">Choose Date:</label>{" "}
              <input id="date" type="date" />
              <br />
              <label htmlFor="">Symptoms:</label>{" "}
              <textarea name="" id="symptoms" cols="30" rows="10"></textarea>
              <br />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setSlot(true);
                }}
              >
                Check Availability
              </button>
            </form>
            <button
            className="save_btn"
              onClick={() => {
                patientDetailsFn();
              }}
            >
            Save &submit
            </button>
          </div>
        </div>
      )}
      {slot && (
        <div className="schedule_btn">
          <button
            onClick={() => {
              timeFn("09:00-09:20");
            }}
          >
            09:00 - 09:20
          </button>

          <button
            onClick={() => {
              timeFn("10:00-10:20");
            }}
          >
            10:00 - 10:20
          </button>

          <button
            onClick={() => {
              timeFn("10:30-10:50");
            }}
          >
            10:30 - 10:50
          </button>

          <button
            onClick={() => {
              timeFn("05:00-05:20");
            }}
          >
            05:00 - 05:20
          </button>

          <button
            onClick={() => {
              timeFn("06:00-06:20");
            }}
          >
            06:00 - 06:20
          </button>

          <button
            onClick={() => {
              timeFn("06:30-06:50");
            }}
          >
            06:30 - 06:50
          </button>
        </div>
      )}
    </div>
  );
}

export default Welcome;
