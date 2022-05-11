import { CHART } from '../actions/type';

const initialState = {
    investment: {
        name: 'Investment',
        data: [15, 26, 36, 30, 46, 38, 60],
    },
};

const LineInvestment = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case CHART:
            return {
                ...state,
                payload,
            };
        default:
            return state;
    }
};

export default LineInvestment;
