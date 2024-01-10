# EasySanté - Mental Health Support Application

## The idea
In a world dominated by digital screens and social media, mental health issues, often termed 'silent killers,' are on the rise. EasySanté addresses this challenge by providing a user-friendly platform connecting individuals with mental health professionals. The project integrates video/audio API for virtual therapy sessions and wearable technology, such as rechargeable bracelets, to monitor heart rates and sleep quality.

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


