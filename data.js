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
        "yaw": -1.0658141036401503e-14,
        "pitch": 0.3019906937232548,
        "fov": 1.42256286970348
      },
      "linkHotspots": [
        {
          "yaw": -0.021843190827750547,
          "pitch": 0.585976190307667,
          "rotation": 0,
          "target": "1-vorraum"
        },
        {
          "yaw": 0.6098275991124265,
          "pitch": 0.3338591861644602,
          "rotation": 0,
          "target": "2-schlafzimmer_1"
        },
        {
          "yaw": -0.531907756303406,
          "pitch": 0.29414052424046844,
          "rotation": 0,
          "target": "4-wohnzimmer"
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
        "yaw": 0.07564184360824378,
        "pitch": 0.3395463445799347,
        "fov": 1.42256286970348
      },
      "linkHotspots": [
        {
          "yaw": 0.9559446902611022,
          "pitch": 0.2764152557842223,
          "rotation": 0,
          "target": "4-wohnzimmer"
        },
        {
          "yaw": -0.33816302609296045,
          "pitch": 0.2215940059376713,
          "rotation": 0,
          "target": "0-eingang"
        },
        {
          "yaw": -0.942662072922781,
          "pitch": 0.3732259756303655,
          "rotation": 0,
          "target": "2-schlafzimmer_1"
        },
        {
          "yaw": 2.741635396907398,
          "pitch": 0.24099160949381826,
          "rotation": 0,
          "target": "3-schlafzimmer_2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-schlafzimmer_1",
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
        "yaw": -0.08022619776632389,
        "pitch": 0.3786645870430796,
        "fov": 1.42256286970348
      },
      "linkHotspots": [
        {
          "yaw": -1.7598788692960952,
          "pitch": 0.4447339446222145,
          "rotation": 0,
          "target": "1-vorraum"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-schlafzimmer_2",
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
        "yaw": 0.4196816503569121,
        "pitch": 0.2938519891490827,
        "fov": 1.42256286970348
      },
      "linkHotspots": [
        {
          "yaw": 1.9920168811373653,
          "pitch": 0.2193468640466989,
          "rotation": 0,
          "target": "1-vorraum"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-wohnzimmer",
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
        "yaw": -0.7923164007604413,
        "pitch": 0.16469338083581775,
        "fov": 1.42256286970348
      },
      "linkHotspots": [
        {
          "yaw": -0.225392334836771,
          "pitch": 0.2812537795330954,
          "rotation": 0,
          "target": "5-kche"
        },
        {
          "yaw": 2.422387024479928,
          "pitch": 0.3350161987352891,
          "rotation": 0,
          "target": "1-vorraum"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-kche",
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
        "yaw": 0.46380123146549046,
        "pitch": 0.23705745267594658,
        "fov": 1.42256286970348
      },
      "linkHotspots": [
        {
          "yaw": 0.6450246703854692,
          "pitch": 0.31724785476700035,
          "rotation": 0,
          "target": "4-wohnzimmer"
        },
        {
          "yaw": 0.3041947444981279,
          "pitch": 0.16120671584357993,
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
