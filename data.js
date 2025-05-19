var APP_DATA = {
  "scenes": [
    {
      "id": "0-eingang",
      "name": "Eingang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.1512836872164982,
        "pitch": 0.33328742578587267,
        "fov": 1.42256286970348
      },
      "linkHotspots": [
        {
          "yaw": -0.02418992355066152,
          "pitch": 0.5819294625835596,
          "rotation": 0,
          "target": "1-vorraum"
        },
        {
          "yaw": 0.566459204149993,
          "pitch": 0.4432904423712074,
          "rotation": 0,
          "target": "4-schlafzimmer_1"
        },
        {
          "yaw": -0.4333548361151571,
          "pitch": 0.3100041713677708,
          "rotation": 0,
          "target": "2-wohnzimmer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-vorraum",
      "name": "Vorraum",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.2170593355000285,
        "pitch": 0.3348425299205591,
        "fov": 1.42256286970348
      },
      "linkHotspots": [
        {
          "yaw": 2.7841272775222503,
          "pitch": 0.20538104375365762,
          "rotation": 0,
          "target": "5-schlafzimmer_2"
        },
        {
          "yaw": 1.1747175702686707,
          "pitch": 0.4930842912043687,
          "rotation": 0,
          "target": "2-wohnzimmer"
        },
        {
          "yaw": -0.31061019039221094,
          "pitch": 0.335111248606367,
          "rotation": 0,
          "target": "0-eingang"
        },
        {
          "yaw": -1.0298517490742043,
          "pitch": 0.420491728674369,
          "rotation": 0,
          "target": "4-schlafzimmer_1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-wohnzimmer",
      "name": "Wohnzimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.3644561555670016,
        "pitch": 0.12361364618348425,
        "fov": 1.42256286970348
      },
      "linkHotspots": [
        {
          "yaw": 2.39801771316509,
          "pitch": 0.4018731509547919,
          "rotation": 0,
          "target": "1-vorraum"
        },
        {
          "yaw": -0.3023362768712641,
          "pitch": 0.3294987912806526,
          "rotation": 0,
          "target": "3-kche"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kche",
      "name": "Küche",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.44811828049247815,
        "pitch": 0.24096518092522956,
        "fov": 1.42256286970348
      },
      "linkHotspots": [
        {
          "yaw": 0.5621691948490302,
          "pitch": 0.3539887360266185,
          "rotation": 0,
          "target": "2-wohnzimmer"
        },
        {
          "yaw": 0.30154681610253675,
          "pitch": 0.21782578105653627,
          "rotation": 0,
          "target": "1-vorraum"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-schlafzimmer_1",
      "name": "Schlafzimmer_1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.16847501530926934,
        "pitch": 0.3223343178961873,
        "fov": 1.42256286970348
      },
      "linkHotspots": [
        {
          "yaw": -1.6280161320163966,
          "pitch": 0.4808831668954916,
          "rotation": 0,
          "target": "1-vorraum"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-schlafzimmer_2",
      "name": "Schlafzimmer_2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.7095835320625614,
        "pitch": 0.33007737933687054,
        "fov": 1.42256286970348
      },
      "linkHotspots": [
        {
          "yaw": 1.9921101805091102,
          "pitch": 0.28407712952752817,
          "rotation": 0,
          "target": "1-vorraum"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
