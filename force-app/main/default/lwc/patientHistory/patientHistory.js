import { LightningElement, api, track, wire } from 'lwc';
import getPatientDetails from '@salesforce/apex/PatientsService.getPatientDetails';

export default class PatientHistory extends LightningElement {
    @api recordId;
    @track patientData;
    @track error;

    @wire(getPatientDetails, { patientId: '$recordId' })
    wired({ data, error }) {
        if (data) {
            this.patientData = data;
            this.error = undefined;
        } else if (error) {
            this.patientData = undefined;
            this.error = error;
            console.error('Error loading patient details:', error);
        }
    }
}
