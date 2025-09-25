import { LightningElement, api, track, wire } from 'lwc';
import getPatientPrescriptions from '@salesforce/apex/PrescriptionService.getPatientPrescriptions';

export default class PrescriptionViewer extends LightningElement {
    @api recordId;
    @track prescriptions = [];

    @wire(getPatientPrescriptions, { patientId: '$recordId' })
    wiredPrescriptions({ data, error }) {
        if (data) { this.prescriptions = data; }
        else { this.prescriptions = []; }
    }
}
