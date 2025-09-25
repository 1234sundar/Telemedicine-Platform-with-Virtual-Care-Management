import { LightningElement, wire, track } from 'lwc';
import getTodaysAppointments from '@salesforce/apex/AppointmentService.getTodaysAppointments';
import { NavigationMixin } from 'lightning/navigation';

export default class DoctorSchedule extends NavigationMixin(LightningElement) {
    @track appointments = [];

    @wire(getTodaysAppointments)
    wiredAppointments({ data, error }) {
        if (data) { this.appointments = data; }
        else { this.appointments = []; }
    }

    navigateToAppointment(apptId) {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: { recordId: apptId, objectApiName: 'TeleAppointment__c', actionName: 'view' }
        });
    }

    handleNavigate(event) {
        const apptId = event.target.dataset.id;
        this.navigateToAppointment(apptId);
    }
}
