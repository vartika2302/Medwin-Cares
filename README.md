# Medwin-Cares

## Table of Contents
* [Origin of the name](#origin-of-the-name)
* [General info](#general-info)
* [Technologies Used](#technologies-used)
* [Website Image](#website-image)
* [Problem Statement](#problem-statement)
* [Individual pages images](#individual-page-images)

### Origin of the name - Medwin-Cares
The name Medwin is primarily a name of German origin that means **POWERFUL FRIEND** or a **STRONG FRIEND**. A strong friendship means that both of you are on the same 
level. This means that decisions aren't always being made by the same person while the other just follows along. Medwin-Cares is there for you, no matter what, doesn't
judge you, doesn't put you down, is kind and respectful to you, is loyal and is trustworthy.

### General info
MERN project for the doctors of a Hospital which has been allocated by the govt for testing and quarantine + well being of COVID-19 patients.

### Technologies Used
* **For Frontend** - ReactJS, SCSS.
* **For Backend** - MongoDB, ExpressJS
* **For authentication** - JWT
* **For testing API** - Postman

### Website Image

### Problem Statement
**Theme**: - We’re going to design a website for the doctors of a Hospital which has been allocated by the govt for testing and quarantine + well being of COVID-19 patients.
##### 1. There can be 2 types of Users - 
* Doctors 
* Patients 
##### 2. Doctors can log in.
##### 3. Each time a patient visits, the doctor will follow 2 steps - 
* Register the patient in the app (using phone number, if the patient already exists, just return the patient info).
* After the checkup, create a Report.
##### 4. Patient Report will have the following fields - 
* Created by doctor 
* Status (You can use enums if you want to): - Can be either of: [Negative, Travelled-Quarantine, Symptoms-Quarantine, Positive-Admit] 
* Date

**Required Routes**
* /doctors/register → with username and password 
* /doctors/login → returns the JWT to be used 
* /patients/register - /patients/:id/create_report
* /patients/:id/all_reports → List all the reports of a patient oldest to latest 
* /reports/:status → List all the reports of all the patients filtered by a specific status
