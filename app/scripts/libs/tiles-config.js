const shadowBlur = 15
const shadowColor = '#00000090'
const shadowX = '-10'
const meshY = 60

export const INITIAL_TRANSFORMS = {
  products: [
    {
      initialPosition: { x: '-29%', y: '34%' },
      transformations: {
        tile: {
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          }
        },
        mesh: {
          from: {
            y: 0
          },
          to: {
            z: 150
            // filter: `drop-shadow(${shadowX}px ${meshY}px ${shadowBlur}px ${shadowColor})`
          }
        }
        // shadow: {
        //   from: {
        //     opacity: 0,
        //     scale: 0.8
        //   },
        //   to: {
        //     opacity: 1,
        //     scale: 1
        //   }
        // }
      }
    },
    {
      initialPosition: { x: '-21%', y: '153%' },
      transformations: {
        tile: {
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          }
        },
        mesh: {
          from: {
            z: 0
          },
          to: {
            z: 25
            // filter: `drop-shadow(${shadowX}px ${meshY}px ${shadowBlur}px ${shadowColor})`
          }
        }
        // shadow: {
        //   from: {
        //     opacity: 0,
        //     scale: 0.8
        //   },
        //   to: {
        //     opacity: 1,
        //     scale: 1
        //   }
        // }
      }
    },
    {
      initialPosition: { x: '-147%', y: '77%', zIndex: 1 },
      transformations: {
        tile: {
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          }
        },
        mesh: {
          from: {
            y: 0
          },
          to: {
            z: 130
            // filter: `drop-shadow(${shadowX}px ${meshY}px ${shadowBlur}px ${shadowColor})`
          }
        }
        // shadow: {
        //   from: {
        //     opacity: 0,
        //     scale: 0.8
        //   },
        //   to: {
        //     opacity: 1,
        //     scale: 1
        //   }
        // }
      }
    },
    {
      initialPosition: { x: '-150%', y: '-61%' },
      transformations: {
        tile: {
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          }
        },
        mesh: {
          from: {
            y: 0
          },
          to: {
            z: 90
            // filter: `drop-shadow(${shadowX}px ${meshY}px ${shadowBlur}px ${shadowColor})`
          }
        }
        //   shadow: {
        //     from: {
        //       opacity: 0,
        //       scale: 0.8
        //     },
        //     to: {
        //       opacity: 1,
        //       scale: 1
        //     }
        //   }
      }
    },
    {
      initialPosition: { x: '-22%', y: '-117%', zIndex: -1 },
      transformations: {
        tile: {
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          }
        },
        mesh: {
          from: {
            y: 0
          },
          to: {
            z: 170
            // filter: `drop-shadow(${shadowX}px ${meshY}px ${shadowBlur}px ${shadowColor})`
          }
        }
        // shadow: {
        //   from: {
        //     opacity: 0,
        //     scale: 0.8
        //   },
        //   to: {
        //     opacity: 1,
        //     scale: 1
        //   }
        // }
      }
    },
    {
      initialPosition: { x: '123%', y: '48%', zIndex: -1 },
      transformations: {
        tile: {
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          }
        },
        mesh: {
          from: {
            y: 0
          },
          to: {
            z: 140
            // filter: `drop-shadow(${shadowX}px ${meshY}px ${shadowBlur}px ${shadowColor})`
          }
        }
        // shadow: {
        //   from: {
        //     opacity: 0,
        //     scale: 0.8
        //   },
        //   to: {
        //     opacity: 1,
        //     scale: 1
        //   }
        // }
      }
    },
    {
      initialPosition: { x: '48%', y: '329%', width: '130%', z: 90 },
      transformations: {
        tile: {
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          }
        },
        mesh: {
          from: {
            y: 0
          },
          to: {
            z: 45
            // filter: `drop-shadow(${shadowX}px ${100}px ${shadowBlur}px ${shadowColor})`
          }
        }
        // shadow: {
        //   from: {
        //     opacity: 0,
        //     scale: 0.8
        //   },
        //   to: {
        //     opacity: 1,
        //     scale: 1
        //   }
        // }
      }
    },
    {
      initialPosition: { x: '93%', y: '-58%' },
      transformations: {
        tile: {
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          }
        },
        mesh: {
          from: {
            y: 0
          },
          to: {
            z: 160
            // filter: `drop-shadow(${shadowX}px ${120}px ${shadowBlur}px ${shadowColor})`
          }
        }
        // shadow: {
        //   from: {
        //     opacity: 0,
        //     scale: 0.8
        //   },
        //   to: {
        //     opacity: 1,
        //     scale: 1
        //   }
        // }
      }
    }
  ],
  projects: [
    {
      initialPosition: { x: '-47%', y: '-30%', width: '75%' },
      transformations: {
        tile: {
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          }
        },
        mesh: {
          from: {
            y: 0
          },
          to: {
            z: 100
            // filter: `drop-shadow(${shadowX}px ${meshY}px ${shadowBlur}px ${shadowColor})`
          }
        }
        // shadow: {
        //   from: {
        //     opacity: 0,
        //     scale: 0.8
        //   },
        //   to: {
        //     opacity: 1,
        //     scale: 1
        //   }
        // }
      }
    },
    {
      initialPosition: { x: '57%', y: '-74%', z: 100, width: '55%' },
      transformations: {
        tile: {
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          }
        },
        mesh: {
          from: {
            y: 0
          },
          to: {
            z: 100
            // filter: `drop-shadow(${shadowX}px ${meshY}px ${shadowBlur}px ${shadowColor})`
          }
        }
        // shadow: {
        //   from: {
        //     opacity: 0,
        //     scale: 0.8
        //   },
        //   to: {
        //     opacity: 1,
        //     scale: 1
        //   }
        // }
      }
    }
  ],
  manage: [
    {
      initialPosition: {} /*{ x: '-5%', y: '-41%', zIndex: 2, width: '83%' }*/,
      transformations: {
        tile: {
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          }
        },
        mesh: {
          from: {
            z: 0
          },
          to: {
            z: 120
            // boxShadow: `${shadowX}px ${120}px ${50}px ${shadowColor}`
            // filter: `drop-shadow(${shadowX}px ${120}px ${50}px ${shadowColor})`
          }
        }
        // shadow: {
        //   from: {
        //     opacity: 0,
        //     scale: 0.8
        //   },
        //   to: {
        //     opacity: 1,
        //     scale: 1
        //   }
        // }
      }
    },
    {
      initialPosition: {} /*{ x: '80%', y: '6%', zIndex: 1 }*/,
      transformations: {
        tile: {
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          }
        },
        mesh: {
          from: {
            y: 0
          },
          to: {
            z: 50
            // boxShadow: `${shadowX}px ${120}px ${50}px ${shadowColor}`
            // filter: `drop-shadow(${shadowX}px ${120}px ${50}px ${shadowColor})`
          }
        }
        // shadow: {
        //   from: {
        //     opacity: 0,
        //     scale: 0.8
        //   },
        //   to: {
        //     y: 40,
        //     opacity: 1,
        //     scale: 1
        //   }
        // }
      }
    },
    {
      initialPosition: {} /*{ x: '-42%', y: '60%' }*/,
      transformations: {
        tile: {
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          }
        },
        mesh: {
          from: {
            y: 0
          },
          to: {
            z: 130
            // boxShadow: `${shadowX}px ${80}px ${20}px ${shadowColor}`
            // filter: `drop-shadow(${shadowX}px ${80}px ${20}px ${shadowColor})`
          }
        }
        // shadow: {
        //   from: {
        //     opacity: 0,
        //     scale: 0.8
        //   },
        //   to: {
        //     opacity: 1,
        //     scale: 1
        //   }
        // }
      }
    },
    {
      initialPosition: {} /*{ x: '80%', y: '135%' }*/,
      transformations: {
        tile: {
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          }
        },
        mesh: {
          from: {
            y: 0
          },
          to: {
            z: 40
            // boxShadow: `${shadowX}px ${120}px ${60}px ${shadowColor}`
            // filter: `drop-shadow(${shadowX}px ${120}px ${60}px ${shadowColor})`
          }
        }
        // shadow: {
        //   from: {
        //     opacity: 0,
        //     scale: 0.8
        //   },
        //   to: {
        //     opacity: 1,
        //     scale: 1
        //   }
        // }
      }
    },
    {
      initialPosition: {} /*{ x: '-101%', y: '401%', z: 130, zIndex: 1, width: '36%' }*/,
      transformations: {
        tile: {
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          }
        },
        mesh: {
          from: {
            y: 0
          },
          to: {
            z: 25
            // boxShadow: `${shadowX}px ${15}px ${shadowBlur}px ${shadowColor}`
            // filter: `drop-shadow(${shadowX}px ${15}px ${shadowBlur}px ${shadowColor})`
          }
        },
        shadow: {
          // from: {
          //   opacity: 0,
          //   scale: 0.8
          // },
          to: {
            opacity: .75
            // scale: 1
          }
        }
      }
    }
  ]
}
