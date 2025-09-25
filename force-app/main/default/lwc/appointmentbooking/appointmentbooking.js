import { LightningElement, api, track, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import createAppointment from '@salesforce/apex/AppointmentService.createAppointment';
import getDoctors from '@salesforce/apex/DoctorService.getDoctors';
import { NavigationMixin } from 'lightning/navigation';

export default class AppointmentBooking extends NavigationMixin(LightningElement) {
    @api recordId;
    @track doctorOptions = [];
    @track selectedDoctor = '';
    @track notes = '';
    @track isLoading = false;

    @wire(getDoctors)
    wiredDoctors({ data, error }) {
        if (data) {
            this.doctorOptions = data.map(doc => ({
                label: `${doc.Name} (${doc.Specialty__c})`,
                value: doc.Id
            }));
        } else {
            this.doctorOptions = [];
            console.error('Error loading doctors', error);
        }
    }

    handleDoctorChange(event) {
        this.selectedDoctor = event.detail.value;
    }

    handleNotesChange(event) {
        this.notes = event.target.value;
    }

    handleBookAppointment() {
        if (!this.selectedDoctor || !this.recordId) {
            this.showToast('Error', 'Doctor and patient are required.', 'error');
            return;
        }

        this.isLoading = true;

        createAppointment({
            doctorId: this.selectedDoctor,
            patientId: this.recordId,
            notes: this.notes
        })
        .then(appointmentId => {
            this.showToast('Success', 'Appointment booked successfully!', 'success');
            this.navigateToAppointment(appointmentId);
        })
        .catch(error => {
            this.showToast('Error', error.body?.message || 'Failed to book appointment.', 'error');
        })
        .finally(() => {
            this.isLoading = false;
        });
    }

    navigateToAppointment(recordId) {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId,
                objectApiName: 'TeleAppointment__c',
                actionName: 'view'
            }
        });
    }

    showToast(title, message, variant='info') {
        this.dispatchEvent(new ShowToastEvent({ title, message, variant }));
    }
}
