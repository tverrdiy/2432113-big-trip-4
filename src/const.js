const blankEvenStruct =
{
  type: 'flight',
  destination: null,
  basePrice: 0,
  date: {
    start: null,
    end: null,
  },
  offers: [
  ],
};

const PresenterModes = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

const DATE_FORMAT_EDIT = 'DD/MM/YY hh:mm';
const DATE_FORMAT_DAY = 'DD MMM';
const DATE_FORMAT_HOURS = 'hh-mm';

const TimeLimit = {
  LOWER_LIMIT: 350,
  UPPER_LIMIT: 1000,
};

const UserActions = {
  UPDATE_EVENT: 'update',
  ADD_EVENT: 'add',
  DELETE_EVENT: 'delete',
};

const UpdateTypes = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
  INIT: 'INIT'
};

const FilterTypes = {
  ALL: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past',
};

const AUTHORIZATION = 'Basic salamaleykom';
const END_POINT = 'https://21.objects.htmlacademy.pro/big-trip';

export { blankEvenStruct, DATE_FORMAT_DAY,
  DATE_FORMAT_EDIT, DATE_FORMAT_HOURS, PresenterModes,
  UserActions, UpdateTypes, FilterTypes,
  AUTHORIZATION, END_POINT, TimeLimit};
