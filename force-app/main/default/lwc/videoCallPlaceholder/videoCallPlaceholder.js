import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

import TELEMEDICINE_URL_FIELD from '@salesforce/schema/TeleAppointment__c.Telemedicine_URL__c';

export default class VideoCallPlaceholder extends LightningElement {
    @api recordId;
    meetUrl;

    @wire(getRecord, { recordId: '$recordId', fields: [TELEMEDICINE_URL_FIELD] })
    wiredRecord({ error, data }) {
        if (data) {
            this.meetUrl = data.fields.Telemedicine_URL__c.value;
        } else if (error) {
            console.error('Error loading video call URL: ', error);
            this.meetUrl = null;
        }
    }

    openMeetUrl() {
        if (this.meetUrl) {
            window.open(this.meetUrl, '_blank');
        }
    }
}
