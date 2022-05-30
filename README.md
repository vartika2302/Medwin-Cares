# Medwin-Cares

## Table of Contents
* [Origin of the name](#origin-of-the-name)
* [General info](#general-info)
* [Technologies Used](#technologies-used)
* [Website Image](#website-image)
* [Problem Statement](#problem-statement)
* [Individual pages images](#individual-pages-images)

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
![collage](https://user-images.githubusercontent.com/88293497/171059400-2efb1876-a07e-4a2b-bab4-fdc3b686800e.png)




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
* Firstname, Lastname, age, dob, address, phone number.

**Required Routes**
* /doctor/register → with multiple informations like firstname, lastname, phoneNo, specialization, etc. 
* /doctor/login → returns the JWT to be used 
* /settings/:id -> update doctor's information
* /patient/register - with firstname, lastname & phoneNum
* /patient/:id/create_report -> To create report of patient with Id 'id'
* /allReports - List of all the reports of all the patients
* /reports/:phonenumber/:nameOfPatient → List all the reports of a patient from recent to oldest 
* /reports/:status → List all the reports of all the patients filtered by a specific status
* /patients/patientInfo/:id -> Information of a particular patient, also update happens via this route

### Individual pages images

>> Home Page
![Web capture_31-5-2022_21046_localhost](https://user-images.githubusercontent.com/88293497/171059592-e8f54196-7faf-4ed1-90d6-9e7ff2b7b1d6.jpeg)

>> About Page
![Web capture_31-5-2022_21147_localhost](https://user-images.githubusercontent.com/88293497/171059610-0c4098b3-7631-40b4-82f5-6cb5e5142e73.jpeg)

>> Guidelines Page
![Web capture_31-5-2022_2122_localhost](https://user-images.githubusercontent.com/88293497/171059639-f2174f70-1c52-45e9-a523-8dbd00b7b5a4.jpeg)

>> Doctor Register Page
![Web capture_31-5-2022_21223_localhost](https://user-images.githubusercontent.com/88293497/171059682-5185833f-bebd-451b-8437-93f6d17a5c1c.jpeg)

>> Doctor Login Page
![Web capture_31-5-2022_21236_localhost](https://user-images.githubusercontent.com/88293497/171059709-e342d86d-a2ab-4aeb-9efc-fbdb9b8540d6.jpeg)

>> Patient Register Page
![Web capture_31-5-2022_21311_localhost](https://user-images.githubusercontent.com/88293497/171059767-44131f58-05f9-4c96-97c1-79a6a3fd9cd4.jpeg)

>> Doctor Information and Update Page
![Web capture_31-5-2022_21330_localhost](https://user-images.githubusercontent.com/88293497/171060248-51c321c9-7ab1-45d3-9ab2-e5398fb53e62.jpeg)
![Web capture_31-5-2022_21410_localhost](https://user-images.githubusercontent.com/88293497/171060267-1cf0cae0-9172-48aa-a7ac-5acaa5d60ce8.jpeg)

>> Patient Information and Update Page
![Web capture_31-5-2022_2153_localhost](https://user-images.githubusercontent.com/88293497/171060355-3bc51534-c095-43ff-82e1-ff0755c1a752.jpeg)
![Web capture_31-5-2022_21451_localhost](https://user-images.githubusercontent.com/88293497/171060358-83738bf2-0d3c-4ec6-9170-588bcedcb426.jpeg)

>> Create Report Page
![Web capture_31-5-2022_21518_localhost](https://user-images.githubusercontent.com/88293497/171060404-0f91252e-25a7-444f-96da-22543fd78c32.jpeg)

>> All Reports Page
![Web capture_31-5-2022_21534_localhost](https://user-images.githubusercontent.com/88293497/171060441-c0904c6e-3dd4-4597-8f03-b96385f5f1a9.jpeg)

>> Filtered Reports Page
![Web capture_31-5-2022_22434_localhost](https://user-images.githubusercontent.com/88293497/171060453-a76ea542-e838-4d52-8460-95853b256ddb.jpeg)












