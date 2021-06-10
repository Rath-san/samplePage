const shadowBlur = 15
const shadowColor = '#00000090'
const shadowX = '-10'
const meshY = 60

export const INITIAL_TRANSFORMS = {
  products: [
    {
      initialPosition: { x: 0, y: 0 },
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
            y: -meshY,
            filter: `drop-shadow(${shadowX}px ${meshY}px ${shadowBlur}px ${shadowColor})`
          }
        },
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
      initialPosition: { x: '41%', y: '65%' },
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
            y: -meshY,
            filter: `drop-shadow(${shadowX}px ${meshY}px ${shadowBlur}px ${shadowColor})`
          }
        },
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
      initialPosition: { x: '-48%', y: '79%', zIndex: 1 },
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
            y: -meshY,
            filter: `drop-shadow(${shadowX}px ${meshY}px ${shadowBlur}px ${shadowColor})`
          }
        },
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
      initialPosition: { x: '-90%', y: '10%' },
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
            y: -meshY,
            filter: `drop-shadow(${shadowX}px ${meshY}px ${shadowBlur}px ${shadowColor})`
          }
        },
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
      initialPosition: { x: '-41%', y: '-66%', zIndex: -1 },
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
            y: -meshY,
            filter: `drop-shadow(${shadowX}px ${meshY}px ${shadowBlur}px ${shadowColor})`
          }
        },
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
      initialPosition: { x: '56%', y: '-64%', zIndex: -1 },
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
            y: -meshY,
            filter: `drop-shadow(${shadowX}px ${meshY}px ${shadowBlur}px ${shadowColor})`
          }
        },
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
      initialPosition: { x: '96%', y: '40%' },
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
            y: -meshY,
            filter: `drop-shadow(${shadowX}px ${100}px ${shadowBlur}px ${shadowColor})`
          }
        },
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
      initialPosition: { x: '110%', y: '-26%' },
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
            y: -90,
            filter: `drop-shadow(${shadowX}px ${120}px ${shadowBlur}px ${shadowColor})`
          }
        },
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
      initialPosition: { x: 0, y: 0 },
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
            y: -meshY,
            filter: `drop-shadow(${shadowX}px ${meshY}px ${shadowBlur}px ${shadowColor})`
          }
        },
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
      initialPosition: { x: '31%', y: '-53%' },
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
            y: -meshY,
            filter: `drop-shadow(${shadowX}px ${meshY}px ${shadowBlur}px ${shadowColor})`
          }
        },
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
      initialPosition: { x: '6%', y: '-10%', zIndex: 2, width: '70%' },
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
            y: -120,
            filter: `drop-shadow(${shadowX}px ${120}px ${50}px ${shadowColor})`
          }
        },
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
      initialPosition: { x: '80%', y: '-5%', zIndex: 1 },
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
            y: -120,
            filter: `drop-shadow(${shadowX}px ${120}px ${50}px ${shadowColor})`
          }
        },
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
      initialPosition: { x: '25%', y: '62%' },
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
            y: -80,
            filter: `drop-shadow(${shadowX}px ${80}px ${20}px ${shadowColor})`
          }
        },
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
      initialPosition: { x: '126%', y: '69%' },
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
            y: -120,
            filter: `drop-shadow(${shadowX}px ${120}px ${60}px ${shadowColor})`
          }
        },
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
      initialPosition: { x: '73%', y: '217%', zIndex: 1, width: '40%'},
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
            y: -15,
            filter: `drop-shadow(${shadowX}px ${15}px ${shadowBlur}px ${shadowColor})`
          }
        },
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
  ]
}
