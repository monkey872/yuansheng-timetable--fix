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
        { start: '07:50', end: '08:35', label: '晨光、導師、集會時間' },
        { start: '08:40', end: '09:20' },
        { start: '09:30', end: '10:10' },
        { start: '10:25', end: '11:05' },
        { start: '11:15', end: '11:55' },
        { start: '13:10', end: '13:50' },
        { start: '14:10', end: '14:50' },
        { start: '15:00', end: '15:40' },
        { start: '15:50', end: '16:30' },
    ],
};
