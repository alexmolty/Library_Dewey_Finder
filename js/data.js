const STORAGE_KEY = "lib-grid-shared";

const defaultData = [
  {
    "id": "room_6",
    "name": "חדר 6",
    "items": [
      {
        "type": "range",
        "from": "001.42",
        "to": "006.6"
      },
      {
        "type": "range",
        "from": "003.54",
        "to": "005.73",
        "note": "In cabinet"
      }
    ]
  },
  {
    "id": "cab_6_5",
    "name": "ארון 6-5",
    "items": [
      {
        "type": "range",
        "from": "628",
        "to": "658"
      }
    ]
  },
  {
    "id": "room_5",
    "name": "חדר 5",
    "items": [
      {
        "type": "range",
        "from": "501",
        "to": "531"
      }
    ]
  },
  {
    "id": "room_4",
    "name": "חדר 4",
    "items": [
      {
        "type": "point",
        "value": "531.32"
      },
      {
        "type": "point",
        "value": "535"
      },
      {
        "type": "point",
        "value": "535.5"
      },
      {
        "type": "point",
        "value": "536.7"
      },
      {
        "type": "point",
        "value": "537"
      },
      {
        "type": "point",
        "value": "539"
      },
      {
        "type": "point",
        "value": "537.12"
      },
      {
        "type": "point",
        "value": "537.623"
      },
      {
        "type": "point",
        "value": "539.721"
      },
      {
        "type": "point",
        "value": "539.73"
      },
      {
        "type": "point",
        "value": "540"
      },
      {
        "type": "point",
        "value": "570"
      },
      {
        "type": "point",
        "value": "541"
      },
      {
        "type": "point",
        "value": "547"
      },
      {
        "type": "point",
        "value": "551"
      },
      {
        "type": "point",
        "value": "571.6"
      },
      {
        "type": "point",
        "value": "574"
      },
      {
        "type": "point",
        "value": "574.192"
      },
      {
        "type": "point",
        "value": "575"
      },
      {
        "type": "point",
        "value": "610"
      },
      {
        "type": "point",
        "value": "610.28"
      },
      {
        "type": "point",
        "value": "620.001"
      },
      {
        "type": "point",
        "value": "620.004"
      },
      {
        "type": "point",
        "value": "620.007"
      },
      {
        "type": "point",
        "value": "620.1"
      },
      {
        "type": "point",
        "value": "620.104"
      },
      {
        "type": "point",
        "value": "616.12"
      },
      {
        "type": "point",
        "value": "616.07"
      },
      {
        "type": "point",
        "value": "618.9"
      },
      {
        "type": "point",
        "value": "615"
      },
      {
        "type": "point",
        "value": "616"
      },
      {
        "type": "point",
        "value": "612.028"
      },
      {
        "type": "point",
        "value": "612.2"
      },
      {
        "type": "point",
        "value": "612.8"
      },
      {
        "type": "point",
        "value": "611"
      },
      {
        "type": "point",
        "value": "612"
      },
      {
        "type": "point",
        "value": "620.105"
      },
      {
        "type": "point",
        "value": "620.103"
      },
      {
        "type": "point",
        "value": "813"
      },
      {
        "type": "point",
        "value": "621.382"
      },
      {
        "type": "point",
        "value": "620.105.4"
      },
      {
        "type": "point",
        "value": "620"
      },
      {
        "type": "point",
        "value": "620.09"
      }
    ]
  },
  {
    "id": "cab_4_3",
    "name": "ארון 4-3",
    "items": [
      {
        "type": "range",
        "from": "658.21",
        "to": "658.5"
      }
    ]
  },
  {
    "id": "cart_r3",
    "name": "עגלה ליד חדר 3",
    "items": [
      {
        "type": "point",
        "value": "537"
      },
      {
        "type": "point",
        "value": "531"
      }
    ]
  },
  {
    "id": "room_3",
    "name": "חדר 3",
    "items": [
      {
        "type": "range",
        "from": "620.106",
        "to": "621.381.4"
      }
    ]
  },
  {
    "id": "room_2",
    "name": "חדר 2",
    "items": [
      {
        "type": "point",
        "value": "519.2"
      },
      {
        "type": "point",
        "value": "531"
      },
      {
        "type": "range",
        "from": "621.381.4",
        "to": "621.381.961"
      }
    ]
  },
  {
    "id": "cab_2_1",
    "name": "ארון 2-1",
    "items": [
      {
        "type": "range",
        "from": "658.5",
        "to": "808.0665"
      }
    ]
  },
  {
    "id": "room_1",
    "name": "חדר 1",
    "items": [
      {
        "type": "range",
        "from": "621.382",
        "to": "627"
      }
    ]
  },
  {
    "id": "cart_r1",
    "name": "עגלה ליד חדר 1",
    "items": [
      {
        "type": "point",
        "value": "658.27"
      },
      {
        "type": "point",
        "value": "512.5"
      },
      {
        "type": "point",
        "value": "515.2"
      },
      {
        "type": "point",
        "value": "005.133"
      },
      {
        "type": "point",
        "value": "658.4032"
      }
    ]
  },
  {
    "id": "room_7",
    "name": "חדר 7",
    "items": [
      {
        "type": "point",
        "value": "005.133"
      },
      {
        "type": "point",
        "value": "519.1"
      },
      {
        "type": "point",
        "value": "510.52"
      },
      {
        "type": "point",
        "value": "530"
      },
      {
        "type": "point",
        "value": "658.562"
      },
      {
        "type": "point",
        "value": "515.35"
      },
      {
        "type": "point",
        "value": "621.82"
      },
      {
        "type": "point",
        "value": "511.8"
      },
      {
        "type": "point",
        "value": "610.28"
      },
      {
        "type": "point",
        "value": "629.8"
      },
      {
        "type": "point",
        "value": "658.3"
      }
    ]
  },
  {
    "id": "room_8",
    "name": "חדר 8",
    "items": [
      {
        "type": "point",
        "value": "006.332"
      },
      {
        "type": "point",
        "value": "006.3"
      },
      {
        "type": "point",
        "value": "005.133"
      },
      {
        "type": "point",
        "value": "025.04"
      },
      {
        "type": "point",
        "value": "510"
      },
      {
        "type": "point",
        "value": "512"
      },
      {
        "type": "point",
        "value": "515.2"
      },
      {
        "type": "point",
        "value": "515.93"
      },
      {
        "type": "point",
        "value": "006.32"
      },
      {
        "type": "point",
        "value": "005.74"
      },
      {
        "type": "point",
        "value": "004.36"
      },
      {
        "type": "point",
        "value": "005.1"
      },
      {
        "type": "point",
        "value": "020.61"
      },
      {
        "type": "point",
        "value": "003.56"
      },
      {
        "type": "point",
        "value": "005.13"
      },
      {
        "type": "point",
        "value": "515.35"
      },
      {
        "type": "point",
        "value": "513.4"
      },
      {
        "type": "point",
        "value": "512.5"
      },
      {
        "type": "point",
        "value": "510.52"
      },
      {
        "type": "point",
        "value": "428"
      }
    ]
  },
  {
    "id": "cart_r8",
    "name": "עגלת חדר 8",
    "items": [
      {
        "type": "point",
        "value": "629.205"
      },
      {
        "type": "point",
        "value": "629.2"
      },
      {
        "type": "point",
        "value": "621.042"
      },
      {
        "type": "point",
        "value": "526.1"
      },
      {
        "type": "point",
        "value": "620.103"
      },
      {
        "type": "point",
        "value": "691"
      },
      {
        "type": "point",
        "value": "620.004.2"
      },
      {
        "type": "point",
        "value": "382"
      },
      {
        "type": "point",
        "value": "624.15"
      },
      {
        "type": "point",
        "value": "515.2"
      },
      {
        "type": "point",
        "value": "624.092"
      },
      {
        "type": "point",
        "value": "624"
      },
      {
        "type": "point",
        "value": "624.17"
      },
      {
        "type": "point",
        "value": "620.104"
      },
      {
        "type": "point",
        "value": "620.105"
      }
    ]
  },
  {
    "id": "cab_right",
    "name": "ארון כניסה ימין",
    "items": [
      {
        "type": "point",
        "value": "030"
      },
      {
        "type": "point",
        "value": "111.1"
      },
      {
        "type": "point",
        "value": "112"
      },
      {
        "type": "point",
        "value": "150"
      },
      {
        "type": "point",
        "value": "150.072.7"
      },
      {
        "type": "point",
        "value": "153"
      },
      {
        "type": "point",
        "value": "603"
      },
      {
        "type": "point",
        "value": "443.21"
      },
      {
        "type": "point",
        "value": "423"
      },
      {
        "type": "point",
        "value": "443"
      },
      {
        "type": "point",
        "value": "443.21 410"
      },
      {
        "type": "point",
        "value": "410.285"
      },
      {
        "type": "point",
        "value": "378"
      },
      {
        "type": "point",
        "value": "388.049"
      },
      {
        "type": "point",
        "value": "384"
      },
      {
        "type": "point",
        "value": "382"
      },
      {
        "type": "point",
        "value": "388"
      },
      {
        "type": "point",
        "value": "428"
      },
      {
        "type": "point",
        "value": "418"
      },
      {
        "type": "point",
        "value": "421"
      },
      {
        "type": "point",
        "value": "425"
      },
      {
        "type": "point",
        "value": "352.3"
      },
      {
        "type": "point",
        "value": "362.1"
      },
      {
        "type": "point",
        "value": "332.6"
      },
      {
        "type": "point",
        "value": "333.7"
      },
      {
        "type": "point",
        "value": "333.79"
      },
      {
        "type": "point",
        "value": "338.52"
      },
      {
        "type": "point",
        "value": "338.544.2"
      },
      {
        "type": "point",
        "value": "350"
      },
      {
        "type": "point",
        "value": "339"
      },
      {
        "type": "point",
        "value": "346.048"
      },
      {
        "type": "point",
        "value": "372.44"
      },
      {
        "type": "point",
        "value": "813"
      },
      {
        "type": "point",
        "value": "363.259"
      },
      {
        "type": "point",
        "value": "823.91"
      },
      {
        "type": "point",
        "value": "973.932"
      },
      {
        "type": "point",
        "value": "820"
      },
      {
        "type": "point",
        "value": "198.9"
      },
      {
        "type": "point",
        "value": "194"
      }
    ]
  },
  {
    "id": "cab_left",
    "name": "ארון כניסה שמאל",
    "items": [
      {
        "type": "point",
        "value": "863"
      },
      {
        "type": "point",
        "value": "813"
      },
      {
        "type": "point",
        "value": "155.63"
      },
      {
        "type": "point",
        "value": "005.133"
      },
      {
        "type": "range",
        "from": "515",
        "to": "540"
      },
      {
        "type": "range",
        "from": "612",
        "to": "621.381"
      }
    ]
  },
  {
    "id": "cart_desk",
    "name": "עגלת דלפק",
    "items": [
      {
        "type": "point",
        "value": "512.5"
      },
      {
        "type": "point",
        "value": "515.2"
      },
      {
        "type": "point",
        "value": "531"
      },
      {
        "type": "point",
        "value": "621.381"
      },
      {
        "type": "point",
        "value": "620.11"
      },
      {
        "type": "point",
        "value": "005.1"
      },
      {
        "type": "point",
        "value": "658.5"
      },
      {
        "type": "point",
        "value": "621.382"
      },
      {
        "type": "point",
        "value": "620.104"
      },
      {
        "type": "point",
        "value": "658"
      },
      {
        "type": "point",
        "value": "691"
      },
      {
        "type": "point",
        "value": "537"
      },
      {
        "type": "point",
        "value": "511.2"
      },
      {
        "type": "point",
        "value": "629.8"
      },
      {
        "type": "point",
        "value": "333.7"
      },
      {
        "type": "point",
        "value": "333.79"
      },
      {
        "type": "point",
        "value": "621.381.532"
      }
    ]
  },
  {
    "id": "mini_desk",
    "name": "ארון דלפק",
    "items": [
      {
        "type": "point",
        "value": "629.2"
      },
      {
        "type": "point",
        "value": "510"
      },
      {
        "type": "point",
        "value": "005.74"
      },
      {
        "type": "point",
        "value": "620.11"
      },
      {
        "type": "point",
        "value": "612"
      },
      {
        "type": "point",
        "value": "621.381"
      },
      {
        "type": "point",
        "value": "513.4"
      }
    ]
  },
  {
    "id": "office",
    "name": "משרד",
    "items": [
      {
        "type": "point",
        "value": "813"
      },
      {
        "type": "point",
        "value": "303.483"
      },
      {
        "type": "point",
        "value": "378"
      },
      {
        "type": "point",
        "value": "510.1"
      },
      {
        "type": "point",
        "value": "823"
      }
    ]
  }
];

function loadData() {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : JSON.parse(JSON.stringify(defaultData));
}

function saveData(locations) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(locations));
}