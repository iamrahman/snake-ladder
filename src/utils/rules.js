export const SNAKE_START_INDEX = [18, 36, 52, 60, 83, 94, 99];
export const LADDER_START_INDEX = [21, 31, 43, 55, 70];

export const SNAKE_RULES = {
    "18": {
        from: 18,
        to: 4,
    },
    "36": {
        from: 36,
        to: 15,
    },
    "52": {
        from: 52,
        to: 16,
    },
    "60": {
        from: 60,
        to: 22,
    },
    "83": {
        from: 83,
        to: 34,
    },
    "94": {
        from: 94,
        to: 31,
    },
    "99": {
        from: 99,
        to: 25,
    },
}

export const LADDER_RULES = {
    "21": {
        from: 21,
        to: 59,
    },
    "31": {
        from: 31,
        to: 51,
    },
    "43": {
        from: 43,
        to: 77,
    },
    "55": {
        from: 55,
        to: 80,
    },
    "70": {
        from: 70,
        to: 91,
    },
}

export const PLAYERS_TYPE = ['red', 'blue', 'green', 'yellow'];