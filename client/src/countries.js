let countries = {
    AL: { num: 0, lat: 41, lon: 20 },
    DZ: { num: 0, lat: 28, lon: 3 },
    AS: { num: 0, lat: -14.3333, lon: -170 }, 
    AD: { num: 0, lat: 42.5, lon: 1.6 },      
    AO: { num: 0, lat: -12.5, lon: 18.5 },    
    AI: { num: 0, lat: 18.25, lon: -63.1667 },
    AQ: { num: 0, lat: -90, lon: 0 },
    AG: { num: 0, lat: 17.05, lon: -61.8 },
    AR: { num: 0, lat: -34, lon: -64 },
    AM: { num: 0, lat: 40, lon: 45 },
    AW: { num: 0, lat: 12.5, lon: -69.9667 },
    AU: { num: 0, lat: -27, lon: 133 },
    AT: { num: 0, lat: 47.3333, lon: 13.3333 },
    AZ: { num: 0, lat: 40.5, lon: 47.5 },
    BS: { num: 0, lat: 24.25, lon: -76 },
    BH: { num: 0, lat: 26, lon: 50.55 },
    BD: { num: 0, lat: 24, lon: 90 },
    BB: { num: 0, lat: 13.1667, lon: -59.5333 },
    BY: { num: 0, lat: 53, lon: 28 },
    BE: { num: 0, lat: 50.8333, lon: 4 },
    BZ: { num: 0, lat: 17.25, lon: -88.75 },
    BJ: { num: 0, lat: 9.5, lon: 2.25 },
    BM: { num: 0, lat: 32.3333, lon: -64.75 },
    BT: { num: 0, lat: 27.5, lon: 90.5 },
    BO: { num: 0, lat: -17, lon: -65 },
    BA: { num: 0, lat: 44, lon: 18 },
    BW: { num: 0, lat: -22, lon: 24 },
    BV: { num: 0, lat: -54.4333, lon: 3.4 },
    BR: { num: 0, lat: -10, lon: -55 },
    IO: { num: 0, lat: -6, lon: 71.5 },
    BN: { num: 0, lat: 4.5, lon: 114.6667 },
    BG: { num: 0, lat: 43, lon: 25 },
    BF: { num: 0, lat: 13, lon: -2 },
    BI: { num: 0, lat: -3.5, lon: 30 },
    KH: { num: 0, lat: 13, lon: 105 },
    CM: { num: 0, lat: 6, lon: 12 },
    CA: { num: 0, lat: 60, lon: -95 },
    CV: { num: 0, lat: 16, lon: -24 },
    KY: { num: 0, lat: 19.5, lon: -80.5 },
    CF: { num: 0, lat: 7, lon: 21 },
    TD: { num: 0, lat: 15, lon: 19 },
    CL: { num: 0, lat: -30, lon: -71 },
    CN: { num: 0, lat: 35, lon: 105 },
    CX: { num: 0, lat: -10.5, lon: 105.6667 },
    CC: { num: 0, lat: -12.5, lon: 96.8333 },
    CO: { num: 0, lat: 4, lon: -72 },
    KM: { num: 0, lat: -12.1667, lon: 44.25 },
    CG: { num: 0, lat: -1, lon: 15 },
    CD: { num: 0, lat: 0, lon: 25 },
    CK: { num: 0, lat: -21.2333, lon: -159.7667 },
    CR: { num: 0, lat: 10, lon: -84 },
    CI: { num: 0, lat: 8, lon: -5 },
    HR: { num: 0, lat: 45.1667, lon: 15.5 },
    CU: { num: 0, lat: 21.5, lon: -80 },
    CY: { num: 0, lat: 35, lon: 33 },
    CZ: { num: 0, lat: 49.75, lon: 15.5 },
    DK: { num: 0, lat: 56, lon: 10 },
    DJ: { num: 0, lat: 11.5, lon: 43 },
    DM: { num: 0, lat: 15.4167, lon: -61.3333 },
    DO: { num: 0, lat: 19, lon: -70.6667 },
    EC: { num: 0, lat: -2, lon: -77.5 },
    EG: { num: 0, lat: 27, lon: 30 },
    SV: { num: 0, lat: 13.8333, lon: -88.9167 },
    GQ: { num: 0, lat: 2, lon: 10 },
    ER: { num: 0, lat: 15, lon: 39 },
    EE: { num: 0, lat: 59, lon: 26 },
    ET: { num: 0, lat: 8, lon: 38 },
    FK: { num: 0, lat: -51.75, lon: -59 },
    FO: { num: 0, lat: 62, lon: -7 },
    FJ: { num: 0, lat: -18, lon: 175 },
    FI: { num: 0, lat: 64, lon: 26 },
    FR: { num: 0, lat: 46, lon: 2 },
    GF: { num: 0, lat: 4, lon: -53 },
    PF: { num: 0, lat: -15, lon: -140 },
    TF: { num: 0, lat: -43, lon: 67 },
    GA: { num: 0, lat: -1, lon: 11.75 },
    GM: { num: 0, lat: 13.4667, lon: -16.5667 },
    GE: { num: 0, lat: 42, lon: 43.5 },
    DE: { num: 0, lat: 51, lon: 9 },
    GH: { num: 0, lat: 8, lon: -2 },
    GI: { num: 0, lat: 36.1833, lon: -5.3667 },
    GR: { num: 0, lat: 39, lon: 22 },
    GL: { num: 0, lat: 72, lon: -40 },
    GD: { num: 0, lat: 12.1167, lon: -61.6667 },
    GP: { num: 0, lat: 16.25, lon: -61.5833 },
    GU: { num: 0, lat: 13.4667, lon: 144.7833 },
    GT: { num: 0, lat: 15.5, lon: -90.25 },
    GG: { num: 0, lat: 49.5, lon: -2.56 },
    GN: { num: 0, lat: 11, lon: -10 },
    GW: { num: 0, lat: 12, lon: -15 },
    GY: { num: 0, lat: 5, lon: -59 },
    HT: { num: 0, lat: 19, lon: -72.4167 },
    HM: { num: 0, lat: -53.1, lon: 72.5167 },
    VA: { num: 0, lat: 41.9, lon: 12.45 },
    HN: { num: 0, lat: 15, lon: -86.5 },
    HK: { num: 0, lat: 22.25, lon: 114.1667 },
    HU: { num: 0, lat: 47, lon: 20 },
    IS: { num: 0, lat: 65, lon: -18 },
    IN: { num: 0, lat: 20, lon: 77 },
    ID: { num: 0, lat: -5, lon: 120 },
    IR: { num: 0, lat: 32, lon: 53 },
    IQ: { num: 0, lat: 33, lon: 44 },
    IE: { num: 0, lat: 53, lon: -8 },
    IM: { num: 0, lat: 54.23, lon: -4.55 },
    IL: { num: 0, lat: 31.5, lon: 34.75 },
    IT: { num: 0, lat: 42.8333, lon: 12.8333 },
    JM: { num: 0, lat: 18.25, lon: -77.5 },
    JP: { num: 0, lat: 36, lon: 138 },
    JE: { num: 0, lat: 49.21, lon: -2.13 },
    JO: { num: 0, lat: 31, lon: 36 },
    KZ: { num: 0, lat: 48, lon: 68 },
    KE: { num: 0, lat: 1, lon: 38 },
    KI: { num: 0, lat: 1.4167, lon: 173 },
    KP: { num: 0, lat: 40, lon: 127 },
    KR: { num: 0, lat: 37, lon: 127.5 },
    KW: { num: 0, lat: 29.3375, lon: 47.6581 },
    KG: { num: 0, lat: 41, lon: 75 },
    LA: { num: 0, lat: 18, lon: 105 },
    LV: { num: 0, lat: 57, lon: 25 },
    LB: { num: 0, lat: 33.8333, lon: 35.8333 },
    LS: { num: 0, lat: -29.5, lon: 28.5 },
    LR: { num: 0, lat: 6.5, lon: -9.5 },
    LY: { num: 0, lat: 25, lon: 17 },
    LI: { num: 0, lat: 47.1667, lon: 9.5333 },
    LT: { num: 0, lat: 56, lon: 24 },
    LU: { num: 0, lat: 49.75, lon: 6.1667 },
    MO: { num: 0, lat: 22.1667, lon: 113.55 },
    MK: { num: 0, lat: 41.8333, lon: 22 },
    MG: { num: 0, lat: -20, lon: 47 },
    MW: { num: 0, lat: -13.5, lon: 34 },
    MY: { num: 0, lat: 2.5, lon: 112.5 },
    MV: { num: 0, lat: 3.25, lon: 73 },
    ML: { num: 0, lat: 17, lon: -4 },
    MT: { num: 0, lat: 35.8333, lon: 14.5833 },
    MH: { num: 0, lat: 9, lon: 168 },
    MQ: { num: 0, lat: 14.6667, lon: -61 },
    MR: { num: 0, lat: 20, lon: -12 },
    MU: { num: 0, lat: -20.2833, lon: 57.55 },
    YT: { num: 0, lat: -12.8333, lon: 45.1667 },
    MX: { num: 0, lat: 23, lon: -102 },
    FM: { num: 0, lat: 6.9167, lon: 158.25 },
    MD: { num: 0, lat: 47, lon: 29 },
    MC: { num: 0, lat: 43.7333, lon: 7.4 },
    MN: { num: 0, lat: 46, lon: 105 },
    ME: { num: 0, lat: 42, lon: 19 },
    MS: { num: 0, lat: 16.75, lon: -62.2 },
    MA: { num: 0, lat: 32, lon: -5 },
    MZ: { num: 0, lat: -18.25, lon: 35 },
    MM: { num: 0, lat: 22, lon: 98 },
    NA: { num: 0, lat: -22, lon: 17 },
    NR: { num: 0, lat: -0.5333, lon: 166.9167 },
    NP: { num: 0, lat: 28, lon: 84 },
    NL: { num: 0, lat: 52.5, lon: 5.75 },
    AN: { num: 0, lat: 12.25, lon: -68.75 },
    NC: { num: 0, lat: -21.5, lon: 165.5 },
    NZ: { num: 0, lat: -41, lon: 174 },
    NI: { num: 0, lat: 13, lon: -85 },
    NE: { num: 0, lat: 16, lon: 8 },
    NG: { num: 0, lat: 10, lon: 8 },
    NU: { num: 0, lat: -19.0333, lon: -169.8667 },
    NF: { num: 0, lat: -29.0333, lon: 167.95 },
    MP: { num: 0, lat: 15.2, lon: 145.75 },
    NO: { num: 0, lat: 62, lon: 10 },
    OM: { num: 0, lat: 21, lon: 57 },
    PK: { num: 0, lat: 30, lon: 70 },
    PW: { num: 0, lat: 7.5, lon: 134.5 },
    PS: { num: 0, lat: 32, lon: 35.25 },
    PA: { num: 0, lat: 9, lon: -80 },
    PG: { num: 0, lat: -6, lon: 147 },
    PY: { num: 0, lat: -23, lon: -58 },
    PE: { num: 0, lat: -10, lon: -76 },
    PH: { num: 0, lat: 13, lon: 122 },
    PN: { num: 0, lat: -24.7, lon: -127.4 },
    PL: { num: 0, lat: 52, lon: 20 },
    PT: { num: 0, lat: 39.5, lon: -8 },
    PR: { num: 0, lat: 18.25, lon: -66.5 },
    QA: { num: 0, lat: 25.5, lon: 51.25 },
    RE: { num: 0, lat: -21.1, lon: 55.6 },
    RO: { num: 0, lat: 46, lon: 25 },
    RU: { num: 0, lat: 60, lon: 100 },
    RW: { num: 0, lat: -2, lon: 30 },
    SH: { num: 0, lat: -15.9333, lon: -5.7 },
    KN: { num: 0, lat: 17.3333, lon: -62.75 },
    LC: { num: 0, lat: 13.8833, lon: -61.1333 },
    PM: { num: 0, lat: 46.8333, lon: -56.3333 },
    VC: { num: 0, lat: 13.25, lon: -61.2 },
    WS: { num: 0, lat: -13.5833, lon: -172.3333 },
    SM: { num: 0, lat: 43.7667, lon: 12.4167 },
    ST: { num: 0, lat: 1, lon: 7 },
    SA: { num: 0, lat: 25, lon: 45 },
    SN: { num: 0, lat: 14, lon: -14 },
    RS: { num: 0, lat: 44, lon: 21 },
    SC: { num: 0, lat: -4.5833, lon: 55.6667 },
    SL: { num: 0, lat: 8.5, lon: -11.5 },
    SG: { num: 0, lat: 1.3667, lon: 103.8 },
    SK: { num: 0, lat: 48.6667, lon: 19.5 },
    SI: { num: 0, lat: 46, lon: 15 },
    SB: { num: 0, lat: -8, lon: 159 },
    SO: { num: 0, lat: 10, lon: 49 },
    ZA: { num: 0, lat: -29, lon: 24 },
    GS: { num: 0, lat: -54.5, lon: -37 },
    ES: { num: 0, lat: 40, lon: -4 },
    LK: { num: 0, lat: 7, lon: 81 },
    SD: { num: 0, lat: 15, lon: 30 },
    SR: { num: 0, lat: 4, lon: -56 },
    SJ: { num: 0, lat: 78, lon: 20 },
    SZ: { num: 0, lat: -26.5, lon: 31.5 },
    SE: { num: 0, lat: 62, lon: 15 },
    CH: { num: 0, lat: 47, lon: 8 },
    SY: { num: 0, lat: 35, lon: 38 },
    TW: { num: 0, lat: 23.5, lon: 121 },
    TJ: { num: 0, lat: 39, lon: 71 },
    TZ: { num: 0, lat: -6, lon: 35 },
    TH: { num: 0, lat: 15, lon: 100 },
    TL: { num: 0, lat: -8.55, lon: 125.5167 },
    TG: { num: 0, lat: 8, lon: 1.1667 },
    TK: { num: 0, lat: -9, lon: -172 },
    TO: { num: 0, lat: -20, lon: -175 },
    TT: { num: 0, lat: 11, lon: -61 },
    TN: { num: 0, lat: 34, lon: 9 },
    TR: { num: 0, lat: 39, lon: 35 },
    TM: { num: 0, lat: 40, lon: 60 },
    TC: { num: 0, lat: 21.75, lon: -71.5833 },
    TV: { num: 0, lat: -8, lon: 178 },
    UG: { num: 0, lat: 1, lon: 32 },
    UA: { num: 0, lat: 49, lon: 32 },
    AE: { num: 0, lat: 24, lon: 54 },
    GB: { num: 0, lat: 54, lon: -2 },
    US: { num: 0, lat: 38, lon: -97 },
    UM: { num: 0, lat: 19.2833, lon: 166.6 },
    UY: { num: 0, lat: -33, lon: -56 },
    UZ: { num: 0, lat: 41, lon: 64 },
    VU: { num: 0, lat: -16, lon: 167 },
    VE: { num: 0, lat: 8, lon: -66 },
    VN: { num: 0, lat: 16, lon: 106 },
    VG: { num: 0, lat: 18.5, lon: -64.5 },
    VI: { num: 0, lat: 18.3333, lon: -64.8333 },
    WF: { num: 0, lat: -13.3, lon: -176.2 },
    EH: { num: 0, lat: 24.5, lon: -13 },
    YE: { num: 0, lat: 15, lon: 48 },
    ZM: { num: 0, lat: -15, lon: 30 },
    ZW: { num: 0, lat: -20, lon: 30 },
    AF: { num: 0, lat: 33, lon: 65 },
    total:0
  }; 

module.exports = countries;