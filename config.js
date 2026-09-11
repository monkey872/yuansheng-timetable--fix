/**
 * 元生國民小學課表查詢系統設定
 */
const CONFIG = {
    SEMESTERS: {
        '115學年度第一學期': './timetable_115-1.csv',
    },

    USERNAME: 'teacher',
    PASSWORD: 'password123',

    SCHOOL_NAME: '桃園市中壢區元生國民小學',
    SCHOOL_SUBTITLE: '國小部課表查詢系統',

    PERIOD_TIMES: [
        { start: '07:40', end: '08:10', label: '早自習' },
        { start: '08:20', end: '09:00' },
        { start: '09:10', end: '09:50' },
        { start: '10:10', end: '10:50' },
        { start: '11:00', end: '11:40' },
        { start: '13:30', end: '14:10' },
        { start: '14:20', end: '15:00' },
        { start: '15:10', end: '15:50' },
        { start: '16:00', end: '16:40' },
    ],
};
