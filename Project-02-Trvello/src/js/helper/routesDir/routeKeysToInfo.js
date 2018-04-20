// -----------------------------------------------------------------------------------------
// ------------------------------- Import Components ---------------------------------------
// -----------------------------------------------------------------------------------------
import HotelView from '../../components/pages/HotelView';
import FlightView from '../../components/pages/FlightView';
import CarRentalView from '../../components/pages/CarRentalView';
import TourView from '../../components/pages/TourView';

// -----------------------------------------------------------------------------------------
// -------------------------------- Route Keys ---------------------------------------------
// -----------------------------------------------------------------------------------------
import { KEY_HOTEL, KEY_FLIGHT, KEY_CAR_RENTAL, KEY_TOUR } from './routeKeys';

// -----------------------------------------------------------------------------------------
// -------------------------------- Links --------------------------------------------------
// -----------------------------------------------------------------------------------------
import { LINK_HOTEL, LINK_FLIGHT, LINK_CAR_RENTAL, LINK_TOUR } from './routeLinks';

// -----------------------------------------------------------------------------------------
// -------------------------------- Constants ----------------------------------------------
// -----------------------------------------------------------------------------------------
import { LINK, COMPONENT_NAME, ICON_NAME, TEXT } from './routeConstants';

const ICON_NAME_HOTEL = 'home';
const ICON_NAME_FLIGHT = 'aircraft-take-off';
const ICON_NAME_CAR_RENTAL = 'key';
const ICON_NAME_TOURS = 'map';

const TEXT_HOTEL = 'Hotel';
const TEXT_FLIGHT = 'Flight';
const TEXT_CAR_RENTAL = 'Car Rental';
const TEXT_TOURS = 'Tours';

// -----------------------------------------------------------------------------------------
// ------------------------------- Route Keys to Info --------------------------------------
// -----------------------------------------------------------------------------------------
export default {
  [KEY_HOTEL]: {
    [LINK]: LINK_HOTEL,
    [COMPONENT_NAME]: HotelView,
    [ICON_NAME]: ICON_NAME_HOTEL,
    [TEXT]: TEXT_HOTEL,
  },
  [KEY_FLIGHT]: {
    [LINK]: LINK_FLIGHT,
    [COMPONENT_NAME]: FlightView,
    [ICON_NAME]: ICON_NAME_FLIGHT,
    [TEXT]: TEXT_FLIGHT,
  },
  [KEY_CAR_RENTAL]: {
    [LINK]: LINK_CAR_RENTAL,
    [COMPONENT_NAME]: CarRentalView,
    [ICON_NAME]: ICON_NAME_CAR_RENTAL,
    [TEXT]: TEXT_CAR_RENTAL,
  },
  [KEY_TOUR]: {
    [LINK]: LINK_TOUR,
    [COMPONENT_NAME]: TourView,
    [ICON_NAME]: ICON_NAME_TOURS,
    [TEXT]: TEXT_TOURS,
  },
};
