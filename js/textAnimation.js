$(window).on("load", function () {
  gsap.registerPlugin(MotionPathPlugin);
  function svgOneCircle() {
    const svgAnimationF = gsap.timeline({ repeat: -1, ease: "linear" });
    svgAnimationF
      .to("#light-01", {
        motionPath: {
          path: "#scroll_ball_path",
          align: "#scroll_ball_path",
          alignOrigin: [0.5, 0.5],
          start: 0,
          end: 0.1,
        },
        transformOrigin: "50% 50%",
        duration: 1,
        ease: "linear",
      })
      .to("#light-01", {
        motionPath: {
          path: "#scroll_ball_path",
          align: "#scroll_ball_path",
          alignOrigin: [0.5, 0.5],
          start: 0.1,
          end: 0.3,
        },
        transformOrigin: "50% 50%",
        duration: 3,
        ease: "linear",
      })
      .to("#light-01", {
        motionPath: {
          path: "#scroll_ball_path",
          align: "#scroll_ball_path",
          alignOrigin: [0.5, 0.5],
          start: 0.3,
          end: 0.5,
        },
        transformOrigin: "50% 50%",
        duration: 1.5,
        ease: "linear",
      })
      .to("#light-01", {
        motionPath: {
          path: "#scroll_ball_path",
          align: "#scroll_ball_path",
          alignOrigin: [0.5, 0.5],
          start: 0.5,
          end: 0.6,
        },
        transformOrigin: "50% 50%",
        duration: 0.5,
        ease: "linear",
      })
      .to("#light-01", {
        motionPath: {
          path: "#scroll_ball_path",
          align: "#scroll_ball_path",
          alignOrigin: [0.5, 0.5],
          start: 0.6,
          end: 0.8,
        },
        transformOrigin: "50% 50%",
        duration: 1.5,
        ease: "linear",
      })
      .to("#light-01", {
        motionPath: {
          path: "#scroll_ball_path",
          align: "#scroll_ball_path",
          alignOrigin: [0.5, 0.5],
          start: 0.8,
          end: 0.9,
        },
        transformOrigin: "50% 50%",
        duration: 2,
        ease: "linear",
      })
      .to("#light-01", {
        motionPath: {
          path: "#scroll_ball_path",
          align: "#scroll_ball_path",
          alignOrigin: [0.5, 0.5],
          start: 0.9,
          end: 1,
        },
        transformOrigin: "50% 50%",
        duration: 2,
        ease: "linear",
      });
  }

  function svgTwoCircle() {
    const svgAnimationS = gsap.timeline({ repeat: -1, ease: "linear" });
    svgAnimationS
      .to("#light-02", {
        motionPath: {
          path: "#scroll_ball_path_g2",
          align: "#scroll_ball_path_g2",
          alignOrigin: [0.5, 0.5],
          start: 0,
          end: 0.2,
        },
        transformOrigin: "50% 50%",
        duration: 1,
        ease: "linear",
      })
      .to("#light-02", {
        motionPath: {
          path: "#scroll_ball_path_g2",
          align: "#scroll_ball_path_g2",
          alignOrigin: [0.5, 0.5],
          start: 0.2,
          end: 0.4,
        },
        transformOrigin: "50% 50%",
        duration: 3,
        ease: "linear",
      })
      .to("#light-02", {
        motionPath: {
          path: "#scroll_ball_path_g2",
          align: "#scroll_ball_path_g2",
          alignOrigin: [0.5, 0.5],
          start: 0.4,
          end: 0.6,
        },
        transformOrigin: "50% 50%",
        duration: 1.5,
        ease: "linear",
      })
      .to("#light-02", {
        motionPath: {
          path: "#scroll_ball_path_g2",
          align: "#scroll_ball_path_g2",
          alignOrigin: [0.5, 0.5],
          start: 0.6,
          end: 0.7,
        },
        transformOrigin: "50% 50%",
        duration: 0.5,
        ease: "linear",
      })
      .to("#light-02", {
        motionPath: {
          path: "#scroll_ball_path_g2",
          align: "#scroll_ball_path_g2",
          alignOrigin: [0.5, 0.5],
          start: 0.7,
          end: 0.8,
        },
        transformOrigin: "50% 50%",
        duration: 1.5,
        ease: "linear",
      })
      .to("#light-02", {
        motionPath: {
          path: "#scroll_ball_path_g2",
          align: "#scroll_ball_path_g2",
          alignOrigin: [0.5, 0.5],
          start: 0.8,
          end: 0.9,
        },
        transformOrigin: "50% 50%",
        duration: 2,
        ease: "linear",
      })
      .to("#light-02", {
        motionPath: {
          path: "#scroll_ball_path_g2",
          align: "#scroll_ball_path_g2",
          alignOrigin: [0.5, 0.5],
          start: 0.9,
          end: 1,
        },
        transformOrigin: "50% 50%",
        duration: 1,
        ease: "linear",
      });
  }

  function svgThreeCircle() {
    const svgAnimationT = gsap.timeline({ repeat: -1, ease: "linear" });
    svgAnimationT
      .to("#light-03", {
        motionPath: {
          path: "#scroll_ball_path_g3",
          align: "#scroll_ball_path_g3",
          alignOrigin: [0.5, 0.5],
          start: 0,
          end: 0.2,
        },
        transformOrigin: "50% 50%",
        duration: 1,
        ease: "linear",
      })
      .to("#light-03", {
        motionPath: {
          path: "#scroll_ball_path_g3",
          align: "#scroll_ball_path_g3",
          alignOrigin: [0.5, 0.5],
          start: 0.2,
          end: 0.3,
        },
        transformOrigin: "50% 50%",
        duration: 2,
        ease: "linear",
      })
      .to("#light-03", {
        motionPath: {
          path: "#scroll_ball_path_g3",
          align: "#scroll_ball_path_g3",
          alignOrigin: [0.5, 0.5],
          start: 0.3,
          end: 0.4,
        },
        transformOrigin: "50% 50%",
        duration: 1.5,
        ease: "linear",
      })
      .to("#light-03", {
        motionPath: {
          path: "#scroll_ball_path_g3",
          align: "#scroll_ball_path_g3",
          alignOrigin: [0.5, 0.5],
          start: 0.4,
          end: 0.6,
        },
        transformOrigin: "50% 50%",
        duration: 3,
        ease: "linear",
      })
      .to("#light-03", {
        motionPath: {
          path: "#scroll_ball_path_g3",
          align: "#scroll_ball_path_g3",
          alignOrigin: [0.5, 0.5],
          start: 0.6,
          end: 0.8,
        },
        transformOrigin: "50% 50%",
        duration: 1.5,
        ease: "linear",
      })
      .to("#light-03", {
        motionPath: {
          path: "#scroll_ball_path_g3",
          align: "#scroll_ball_path_g3",
          alignOrigin: [0.5, 0.5],
          start: 0.8,
          end: 0.9,
        },
        transformOrigin: "50% 50%",
        duration: 2,
        ease: "linear",
      })
      .to("#light-03", {
        motionPath: {
          path: "#scroll_ball_path_g3",
          align: "#scroll_ball_path_g3",
          alignOrigin: [0.5, 0.5],
          start: 0.9,
          end: 1,
        },
        transformOrigin: "50% 50%",
        duration: 2,
        ease: "linear",
      });
  }

  svgOneCircle();
  svgTwoCircle();
  svgThreeCircle();
});
