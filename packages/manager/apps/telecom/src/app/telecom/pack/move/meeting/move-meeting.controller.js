import get from 'lodash/get';

export default class MoveMeetingCtrl {
  /* @ngInject */
  constructor(
    $scope,
    $translate,
    OvhApiConnectivityEligibilitySearch,
    TucToast,
  ) {
    this.$scope = $scope;
    this.$translate = $translate;
    this.OvhApiConnectivityEligibilitySearch = OvhApiConnectivityEligibilitySearch;
    this.TucToast = TucToast;
  }

  $onInit() {
    this.offer = {
      meetingSlots: {
        fakeMeeting: false,
        slot: null,
      },
      selected: {
        contactName: null,
      },
    };

    this.showMeetingSlots = false;
    this.meetingSlots = {};

    this.loading = true;
    this.meetings = [];
    return this.OvhApiConnectivityEligibilitySearch.v6()
      .searchMeetings(this.$scope, {
        eligibilityReference: this.eligibilityReference,
        productCode: this.productCode,
      })
      .then((data) => {
        if (data.result) {
          this.meetingSlots.canBookFakeMeeting = data.result.canBookFakeMeeting;
          this.meetingSlots.slots = data.result.meetingSlots;

          let slots = [];
          let prevTitle;
          data.result.meetingSlots.forEach((slot, index) => {
            const title = moment(slot.startDate)
              .utc()
              .format('ddd DD MMM YYYY');
            if (!prevTitle) {
              prevTitle = title;
              slots.push({
                id: index,
                start: slot.startDate,
                end: slot.endDate,
                startTime: moment(slot.startDate)
                  .utc()
                  .format('HH:mm'),
                endTime: moment(slot.endDate)
                  .utc()
                  .format('HH:mm'),
                selected: false,
              });
            } else if (prevTitle !== title) {
              this.meetings.push({
                title: prevTitle,
                slots,
              });
              slots = [];
              slots.push({
                id: index,
                start: slot.startDate,
                end: slot.endDate,
                startTime: moment(slot.startDate)
                  .utc()
                  .format('HH:mm'),
                endTime: moment(slot.endDate)
                  .utc()
                  .format('HH:mm'),
                selected: false,
              });
              prevTitle = title;
            } else {
              slots.push({
                id: index,
                start: slot.startDate,
                end: slot.endDate,
                startTime: moment(slot.startDate)
                  .utc()
                  .format('HH:mm'),
                endTime: moment(slot.endDate)
                  .utc()
                  .format('HH:mm'),
                selected: false,
              });
            }
          });
          this.showMeetingSlots = true;
        }
      })
      .catch((error) => {
        this.TucToast.error(
          [
            this.$translate.instant('pack_move_meeting_error'),
            get(error, 'data.message', ''),
          ].join(' '),
        );
      })
      .finally(() => {
        this.loading = false;
      });
  }

  checkConfirm() {
    const checkContact = !!this.contactName;
    const checkSlot = this.offer.meetingSlots.slot !== null;
    return !(checkContact && checkSlot);
  }

  selectSlot(slotId) {
    this.offer.meetingSlots.fakeMeeting = this.meetingSlots.canBookFakeMeeting;
    this.offer.meetingSlots.slot = this.meetingSlots.slots[slotId];
  }

  next() {
    this.offer.selected.contactName = this.contactName;
    this.$scope.$emit('selectMeeting', this.offer);
  }
}
