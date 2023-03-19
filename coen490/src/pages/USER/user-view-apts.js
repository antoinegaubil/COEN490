import axios from 'axios';
import { useContext, useState, useEffect } from "react";
import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBBtn,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBContainer,
  MDBCardText,
  MDBCol,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter

} from 'mdb-react-ui-kit';
import '../../style/user/user-dashboard.css';

const formatDate = (date) => {
  const options = { hour: 'numeric', minute: '2-digit' };
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

export default function UserViewApt(){
  const [dbDate, setDbDate] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [data, setData] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedAppointments, setSelectedAppointments] = useState([]);
  const [number, setNumber] = useState('...');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4444/user/viewapts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: null,
        });
        const data = await response.json();
        setDbDate(data);
        console.log(data)
        setNumber(data.length)


        const meetingDates = data.map(item => item.MeetingDate);
        const meetingTimes = data.map(item => item.MeetingTime);
        const userMeeting = data.map(item => item.HCP);

        const userResponse = await fetch('http://localhost:4444/user/viewapts/HCPinfo', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(userMeeting),
        });
        const userInfo = await userResponse.json();
        setData(userInfo);
        const appointments = meetingDates.map((date, index) => {
            const [month, day, year] = date.split('.').map((str) => parseInt(str));
            const [hour, minute] = meetingTimes[index].match(/\d+/g).map((str) => parseInt(str));
            const isPM = /pm/i.test(meetingTimes[index]);



            return {
              title: `Appointment with ${userInfo[index].firstname}`,
              date: new Date(year, month - 1, day, hour, 0),
              description: `Please View The Connect Page to Join Your Meeting Or To Converse With ${userInfo[index].firstname}.`,
            };
          })

        setAppointments(appointments);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);



  const handleCalendarChange = (date) => {
    setSelectedDate(date);
    var currIndex = 0;
    const filteredAppointments = appointments.filter(
      (appointment) =>
        appointment.date.getFullYear() === date.getFullYear() &&
        appointment.date.getMonth() === date.getMonth() &&
        appointment.date.getDate() === date.getDate()
    );

    appointments.map((appointment, index) => {
      if (appointment.date.toDateString() === date.toDateString()) {
        currIndex = index;
      }
    });


    setSelectedAppointments(filteredAppointments.map((appointment, index) => ({
      ...appointment,
      data: data[currIndex],
      appointment: dbDate[index]
    })));
  };


  return (
    <>
    <main className="hero-section">
    <section className="container">
    <div className="hero-content">
      <nav className="navbar">
        <h1 className="nav-logo">EasySante</h1>
        <ul className="nav-links">
          <a href="/user-dashboard">Dashboard</a>
          <a href="/user-connect">Connect</a>
          <a href="/user-view-apt">View Appointments</a>
          <a href="/user-book-apt">Book Appointments</a>
          <a href="/user-profile">Profile</a>
        </ul>
      </nav>
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle style ={{color: 'black'}}>
            Welcome back, Hugh! You have {number} upcoming appointments:{' '}
          </MDBCardTitle>
          <div
            style={{
              display: 'flex',
              justifyContent: 'left',
              height: '700px',
              width: '100%',
            }}
          >
            <Calendar value={selectedDate} onChange={handleCalendarChange} />
            <div style={{ marginLeft: '20px', width: '600px', color: 'black' }}>
              {selectedAppointments.length > 0 ? (
                <div>
                  <h4>Appointments for {selectedDate.toDateString()}:</h4>
                  {selectedAppointments.map((appointment, index) => (
                    <div key={index}>
                      <h5>
                        {appointment.title} at {formatDate(appointment.date)}
                      </h5>
                      <p>{appointment.description}</p>
                    </div>
                  ))}
                </div>
              ) : selectedDate.toDateString() === new Date().toDateString() ? (
                <p>No appointments today, book an appointment with a patient!</p>
              ) : (
                <p>No appointments on {selectedDate.toDateString()}</p>
              )}

              {selectedAppointments.length > 0 && (
                <>
                {selectedAppointments.map((appointment, index) => (
                    <div key={index}>
                  <MDBCardImage
                    src={`../../Digital-Identity/logo-1.png`}
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: '150px' }}
                    fluid
                  />
                  <MDBCardBody className="pt-1">
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Name</MDBCardText>
                      </MDBCol>
                      <MDBCol>
                        <MDBCardText className="text-muted">
                          {selectedAppointments ? selectedAppointments[index].data.firstname + ' ' + selectedAppointments[index].data.lastname : 'Loading...'}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Email</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          {selectedAppointments ? selectedAppointments[index].data.email : 'Loading...'}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Profession</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          {selectedAppointments ? selectedAppointments[index].data.profession : 'Loading...'}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Specialty</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          {selectedAppointments ? selectedAppointments[index].data.specialty : 'Loading...'}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>City</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          {selectedAppointments ? selectedAppointments[index].data.city : 'Loading...'}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                  </div>
                ))}
                </>
              )}
            </div>
          </div>
        </MDBCardBody>
      </MDBCard>
    </div>
    </section>
    </main>
    </>
  );
}
