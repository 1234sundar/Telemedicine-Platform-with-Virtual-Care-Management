#  Telemedicine Platform with Virtual Care Management – Phase 1

## 📌 Project Idea
A Salesforce-based telemedicine platform that allows patients to book appointments, consult doctors online, and track prescriptions and medical history.  
This phase focuses on **understanding the problem, defining objectives, and planning the solution**.

---

## 🎯 Problem Statement
Healthcare providers and patients face challenges like:
- Manual appointment booking causing double-bookings  
- No centralized tracking of patient medical history  
- Difficulty managing prescriptions digitally  
- Limited access to virtual consultations  
- Lack of real-time dashboards for doctors and patients  

---

## 💡 Objectives
- Understand user requirements (patients, doctors, admins)  
- Identify pain points in appointment scheduling and patient care  
- Define core functionalities needed for a telemedicine platform  
- Prepare a **data model** for patients, doctors, appointments, and prescriptions  
- Document problem statement, objectives, and social impact  

---

## 📌 Social Impact
- Improves access to healthcare through virtual consultations  
- Reduces manual errors in appointment management  
- Helps doctors track patient history and prescriptions digitally  
- Supports better decision-making with organized patient data  

---

## 📄 Phase 1 Document
The detailed Phase 1 submission is included in this repo:  
👉 **[📂 Telemedicine_Project_phase-1.docx](./Telemedicine_Project_phase-1.docx)**
 
 #  Telemedicine Platform with Virtual Care Management – Phase 2
 ⚙️ Phase 2 – Salesforce Org Setup & Configuration

This phase focuses on setting up the Salesforce org environment, configuring core settings, and establishing the foundation for security, access, and deployment.

🔑 Key Activities

Salesforce Editions & Company Profile Setup – Defined org details, company info, and platform edition.

Business Hours & Holidays – Configured working hours and holidays to manage appointment scheduling.

Fiscal Year Settings – Aligned Salesforce fiscal year with project requirements.

User Setup & Licenses – Created patient, doctor, and admin user accounts with proper licenses.

Profiles & Permission Sets – Controlled object/field-level access (Patients, Doctors, Admin).

Roles & Hierarchy – Established role hierarchy (e.g., System Admin > Doctor > Patient).

Organization-Wide Defaults (OWD) – Applied privacy rules (e.g., Prescriptions private to patients, shareable with doctors).

Sharing Rules – Implemented rules to share prescriptions with doctors automatically.

Login Access Policies – Configured security policies for safe login access.

Developer Org & Sandbox Setup – Prepared development and testing environments.

Deployment Basics – Laid the groundwork for pushing metadata using Change Sets / SFDX.

📌 Deliverables

Configured Org with Profiles, Roles, OWD, and Sharing Rules

User hierarchy established (Patient, Doctor, Admin)

Security & access policies enforced

## 📄 Phase 2 Document
The detailed Phase 2 submission is included in this repo:  
👉 **[📂 Phase 2 – Salesforce Org Setup & Configuration](./Phase2-Salesforce%20Org%20Setup%20&%20Configuration.docx)**

#  Telemedicine Platform with Virtual Care Management – Phase 3
Phase 3 of the Telemedicine Platform project focuses on data modeling and relationships in Salesforce. This phase ensures that all objects, fields, record types, page layouts, and relationships are correctly set up to manage patients, doctors, appointments, and prescriptions efficiently.

🎯 Key Objectives

Create custom objects to store project-specific data.

Define fields for each object, including lookups and master-detail relationships.

Set up record types to categorize records for different use cases.

Design page layouts and compact layouts to make data entry and viewing simple and intuitive.

Establish relationships between objects (lookup, master-detail, hierarchical) to model real-world connections between patients, doctors, appointments, and prescriptions.

Ensure that the app structure is ready for automation, reporting, and user access.

💡 Phase 3 Highlights

Custom Objects Created: Patient, Doctor, TeleAppointment, Prescription

Fields Defined: Includes text, picklist, date, number, lookup, master-detail

Record Types: Separate record types for appointments and prescriptions to manage workflows and display layouts

Page Layouts: Customized layouts for each object to ensure users see only relevant fields

Compact Layouts: Highlighted key information for quick access in lists and record previews

Relationships:

Patient ↔ TeleAppointment (Lookup)

Doctor ↔ TeleAppointment (Lookup)

TeleAppointment ↔ Prescription (Master-Detail)

Patient & Doctor ↔ Prescription (Lookup)

📌 Deployment to Salesforce

All Phase 3 metadata has been deployed to the Salesforce org using VS Code and Salesforce CLI. This includes objects, fields, record types, layouts, tabs, and relationships.

