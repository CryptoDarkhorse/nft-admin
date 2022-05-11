import { combineReducers } from 'redux';
import LineChart from './lineChart';
import DoughnutChart from './doughnutChart';
import LineInvestment from './lineInvestment'


export default combineReducers({
    LineChart,
    DoughnutChart,
    LineInvestment
});
