import { LightningElement, wire } from 'lwc';
import getAppointments from '@salesforce/apex/TeleAppointmentController.getAppointments';

const columns = [
    { label: 'Patient', fieldName: 'PatientName' },
    { label: 'Doctor', fieldName: 'DoctorName' },
    { label: 'Date', fieldName: 'AppointmentDate', type: 'date' },
    { label: 'Priority', fieldName: 'IsPriority', type: 'boolean' }
];

export default class TeleAppointmentList extends LightningElement {
    columns = columns;

    @wire(getAppointments)
    appointments;
}