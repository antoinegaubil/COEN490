# EasySanté - Mental Health Support Application

## The idea
EasySanté addresses the issues of mental-health 'silent killers' by providing a user-friendly platform connecting individuals with mental health professionals. The project integrates video/audio API for virtual therapy sessions and wearable technology, including a custom-made hardware bracelet. This bracelet collects user data, such as heart rate and sleep patterns, and seamlessly transmits the information to healthcare professionals (HCPs) for comprehensive mental health monitoring.

The EasySanté web application is built with the MERN (MongoDB, Express.js, React, Node.js) stack, utilizing MongoDB as the primary storage solution for efficient collection and management of user data. 

### Background
EasySanté aims to bridge the gap between Canadians facing mental health challenges and certified therapists. Alarming statistics from the Canadian Mental Health Association (CMHA) underscore the urgency of this project. The application focuses on treatment and continuing care, addressing two crucial pillars of the mental health healing process.

### Scope
EasySanté targets a broad spectrum of mental disorders, connecting users with therapists, mental health specialists, neurologists, and more. It addresses issues ranging from stress management to bipolarity and depression.

### Objectives
- **User-Friendly Interface:** Prioritizing simplicity for non-tech-savvy users with clear and concise prompts.
- **Swift Response Time:** Ensuring quick access to patient files for healthcare professionals (HCP) and prompt responses to users.
- **Cloud-Based Data Storage:** Storing pertinent user data on the cloud to minimize storage costs for clinics and HCPs.
- **Clear Communication:** Facilitating clear audio/video calls between HCPs and patients, crucial during emergencies.

## Design Specifications

### Website Architecture
The EasySanté website features two user types: Healthcare Professionals (HCP) and Patients. HCPs receive "@easysante.com" logins for accessing their dedicated portal. Users can log in or create an account. The user dashboard displays heart rate data, providing insights into sleep quality and stress levels.

#### User Side Architecture:
- **Dashboard:** Displays heart rate data and related insights.
- **Connect:** Enables direct communication with assigned HCP for scheduled appointments.
- **Book Appointments:** Allows users to browse and book appointments with registered HCPs.
- **Profile:** Users can view and edit personal data, past appointments, and privacy settings.

#### HCP Side Architecture:
- **Calendar:** Displays future appointments for HCPs.
- **Connect:** Facilitates direct communication with assigned users.
- **Profile:** Allows HCPs to view and edit their data and appointments.

The integrated chat system ensures a direct channel between users and HCPs, fostering real-time communication for remote consultations and emergency diagnoses.

## Hardware Overview

![PCB](https://github.com/antoinegaubil/EasySante-Web-Application/assets/90474617/4445f3ec-0665-4419-bc08-551d13c63f3a) ![pcb2](https://github.com/antoinegaubil/EasySante-Web-Application/assets/90474617/1f8e0195-f577-4567-822c-96771e4beb09)

The two sensors are seamlessly integrated into a custom-made PCB bracelet with a 3D-printed casing, providing a compact and wearable solution that monitors body movement, sleep analysis, heart rate, and stress levels, offering insightful visualizations for users.

### Accelerometer (ADXL346/362)

The accelerometer monitors body movement, aiding in sleep analysis and sedentary behavior detection. It provides insights into sleep stages, distinguishing between stages 1, 2, and 3/REM. The data also includes activity breakdowns such as time spent moving, walking, and engaging in physical activities. Graphs visualize the distribution of time across sleep stages and activity types.

### Pulse Sensor (MAX30102)

Designed to detect anxiety, fear, depression, stress, or PTSD, the pulse sensor measures heart rate beats per minute and heart rate variability. It tracks heart rate variability between beats, indicating stress levels. The application displays baseline and live heart rates, highlighting differences. Graphs illustrate heart rate variations, assisting in stress level analysis (high or low).


