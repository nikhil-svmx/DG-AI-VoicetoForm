export const defaultSurveyJSON = {
    "title": "Health Checkup",
    "description": "This survey is to check patients health.",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "checkbox",
        "name": "Symptoms",
        "title": "Do you have any of the following new or worsening symptoms?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Fever or chills"
         },
         {
          "value": "item2",
          "text": "Cough"
         },
         {
          "value": "item3",
          "text": "Difficulty breathing"
         },
         {
          "value": "item4",
          "text": "Sore throat"
         },
         {
          "value": "item5",
          "text": "Runny or stuffy nose"
         },
         {
          "value": "item6",
          "text": "Decrease or lose of taste or smell"
         },
         {
          "value": "item7",
          "text": "Nausea, vomiting or diarrhea"
         },
         {
          "value": "item8",
          "text": "Not feeling well, extreme tiredness or sore muscles"
         },
         {
          "value": "item9",
          "text": "Pink eye or headache"
         },
         {
          "value": "item10",
          "text": "None of the above"
         }
        ]
       },
       {
        "type": "boolean",
        "name": "Household",
        "title": "Does anyone in your household have one or more of the above symptoms?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Notification",
        "title": "Have you been notified as a close contact of someone with severe fever or cough?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Travel",
        "title": "In the last 14 days, have you or anyone in your household travelled outside of India",
        "isRequired": true
       }
      ]
     }
    ]
};

export const npsJson = {
  "title": "NPS Survey Question",
  "logo": "https://surveyjs.io/Content/Images/examples/logo.png",
  "logoHeight": "60px",
  "logoFit": "cover",
  "completedHtml": "<h3>Thank you for your feedback</h3>",
  "completedHtmlOnCondition": [
    {
      "expression": "{nps_score} >= 9",
      "html": "<h3>Thank you for your feedback</h3> <h4>We are glad that you love our product. Your ideas and suggestions will help us make it even better.</h4>"
    },
    {
      "expression": "{nps_score} >= 6  and {nps_score} <= 8",
      "html": "<h3>Thank you for your feedback</h3> <h4>We are glad that you shared your ideas with us. They will help us make our product better.</h4>"
    }
  ],
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "rating",
          "name": "nps_score",
          "title": "On a scale of zero to ten, how likely are you to recommend our product to a friend or colleague?",
          "isRequired": true,
          "rateCount": 11,
          "rateMin": 0,
          "rateMax": 10,
          "minRateDescription": "(Most unlikely)",
          "maxRateDescription": "(Most likely)"
        },
        {
          "type": "checkbox",
          "name": "promoter_features",
          "visibleIf": "{nps_score} >= 9",
          "title": "Which of the following features do you value the most?",
          "description": "Please select no more than three features.",
          "isRequired": true,
          "validators": [
            {
              "type": "answercount",
              "text": "Please select no more than three features.",
              "maxCount": 3
            }
          ],
          "choices": [
            "Performance",
            "Stability",
            "User interface",
            "Complete functionality",
            "Learning materials (documentation, demos, code examples)",
            "Quality support"
          ],
          "showOtherItem": true,
          "otherText": "Other features:",
          "colCount": 2
        },
        {
          "type": "comment",
          "name": "passive_experience",
          "visibleIf": "{nps_score} >= 7  and {nps_score} <= 8",
          "title": "What can we do to make your experience more satisfying?"
        },
        {
          "type": "comment",
          "name": "disappointing_experience",
          "visibleIf": "{nps_score} <= 6",
          "title": "Please let us know why you had such a disappointing experience with our product"
        },
        {
          "type": "text",
          "name": "recommemdations",
          "visibleIf": "{promoter_features} anyof ['Complete functionality', 'User interface']",
          "title": "Only for the people who rated 9 can tell us how many people are you willing to recommened this product?",
          "automationId": "recommemdations",
          "inputType": "number"
        }
      ]
    }
  ]
};

export const jobApplicationJson = {
  "title": "Job Application Form",
  "description": "Thank you for your interest in working with us. Please fill out the form and send your application. We will get back to you within a week.",
  "logo": "https://surveyjs.io/Content/Images/examples/logo.png",
  "questionErrorLocation": "bottom",
  "logoHeight": "60px",
  "logoFit": "cover",
  "pages": [
    {
      "type": "panel",
      "name": "personal-info",
      "title": "Personal Information",
      "elements": [
        {
          "type": "text",
          "name": "first-name",
          "title": "First name",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "last-name",
          "startWithNewLine": false,
          "title": "Last name",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "birthdate",
          "title": "Date of birth",
          "inputType": "date",
          "isRequired": true
        }
      ]
    },
    {
      "type": "panel",
      "name": "location",
      "title": "Your Location",
      "elements": [
        {
          "type": "dropdown",
          "name": "country",
          "title": "Country",
          "choicesByUrl": {
            "url": "https://surveyjs.io/api/CountriesExample"
          }
        },
        {
          "type": "text",
          "name": "city",
          "title": "City/Town"
        },
        {
          "type": "text",
          "name": "postal code",
          "startWithNewLine": false,
          "title": "Zip code",
          "inputType": "number",
          "validators": [
            {
              "type": "numeric"
            }
          ]
        },
        {
          "type": "text",
          "name": "address",
          "title": "Street address"
        }
      ]
    },
    {
      "type": "text",
      "name": "email",
      "title": "Email",
      "inputType": "email",
      "placeholder": "mail@example.com"
    },
    {
      "type": "text",
      "name": "salary",
      "title": "Expected salary (in INR)",
      "inputType": "number",
      "validators": [
        {
          "type": "numeric"
        }
      ]
    },
    {
      "type": "dropdown",
      "name": "position",
      "title": "What position are you applying for?",
      "choices": [
        {
          "value": "frontend",
          "text": "Frontend Developer"
        },
        {
          "value": "backend",
          "text": "Backend Developer"
        },
        {
          "value": "fullstack",
          "text": "Full-Stack Developer"
        },
        {
          "value": "intern",
          "text": "Intern"
        }
      ]
    },
    {
      "type": "text",
      "name": "start-date",
      "title": "Date available to start work",
      "isRequired": true,
      "inputType": "date"
    },
    {
      "type": "file",
      "name": "resume",
      "title": "Upload your resume",
      "acceptedTypes": "application/pdf"
    }
  ],
  "completeText": "Send",
  "widthMode": "static",
  "width": "800px"
};

export const npsoutput= {
  "nps_score": 9,
  "disappointing_experience": "it is slightly disappointing"
}

export const skillsForm = {
  "logoPosition": "right",
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "text",
          "name": "question2",
          "title": "Name",
          "automationId": "question2"
        },
        {
          "type": "multipletext",
          "name": "question1",
          "title": "Skills",
          "automationId": "question1",
          "items": [
            {
              "name": "text1"
            },
            {
              "name": "text2"
            }
          ]
        },
        {
          "type": "text",
          "name": "question3",
          "title": "Email ID",
          "automationId": "question3"
        }
      ]
    }
  ]
}

export const technicionForm = {
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "text",
          "name": "temperature_celsius",
          "title": "What is the temperature in celsius?",
          "isRequired": true,
          "automationId": "question1"
        },
        {
          "type": "text",
          "name": "temperature_kelvin",
          "title": "What is the Temperature in Kelvin",
          "isRequired": true,
          "automationId": "question2"
        },
        {
          "type": "text",
          "name": "absolute_pressure",
          "title": "What is Absolute Pressure?",
          "isRequired": true,
          "automationId": "question3"
        },
        {
          "type": "boolean",
          "name": "leaks",
          "title": "Are there any leaks?",
          "isRequired": true,
          "automationId": "question4"
        },
        {
          "type": "comment",
          "name": "comments",
          "title": "Any thing else to add?",
          "automationId": "question5",
          "rows": 5,
          "autoGrow": false
        }
      ]
    }
  ]
}

export const maintenanceForm = {
  "pages": [
    {
      "name": "Functionality Verification-2",
      "elements": [
        {
          "type": "panel",
          "name": "Functionality Verification",
          "elements": [
            {
              "type": "radiogroup",
              "name": "Power Switch Illuminated on Power-up",
              "title": "1.1 Power Switch Illuminated on Power-up (remains illuminated with applied power)",
              "choices": [
                "Yes",
                "No"
              ]
            },
            {
              "type": "radiogroup",
              "name": "Power On Cycle Time",
              "title": "1.2 Power On \"Cycle\" Time Completed in < 90 Seconds",
              "choices": [
                "Yes",
                "No"
              ]
            },
            {
              "type": "radiogroup",
              "name": "X-Ray Light Illuminates",
              "title": "1.3 X-Ray Light Illuminates with X-Ray activation (tube controls, foot/hand switch)",
              "choices": [
                "Yes",
                "No"
              ]
            },
            {
              "type": "radiogroup",
              "name": "Time and Date Correct",
              "title": "1.4 Time and Date Correct. Time Zone Appropriate for Location",
              "choices": [
                "Yes",
                "No"
              ]
            },
            {
              "type": "text",
              "name": "Software Embedded",
              "title": "1.5 Software: Embedded: OrthoMini Software Version:"
            },
            {
              "type": "text",
              "name": "OrthoTouch XLX Version",
              "title": "1.6 OrthoTouch: XLX Version:"
            },
            {
              "type": "text",
              "name": "API Version",
              "title": "API Version:"
            },
            {
              "type": "radiogroup",
              "name": "Verify Network Adapter",
              "title": "1.7 Verify Network adapter/wireless connects to PACS (online)",
              "choices": [
                "Yes",
                "No",
                "N/A"
              ]
            },
            {
              "type": "radiogroup",
              "name": "Keyboard Rotation Tabs Functional",
              "title": "1.9 Keyboard Image Rotation Tabs Functional: Rotate 360° (both directions)",
              "choices": [
                "Yes",
                "No"
              ]
            },
            {
              "type": "radiogroup",
              "name": "Horizontal Flip Image Tab Functional",
              "title": "1.10 Horizontal Flip Image Tab Functional: Image inverts (inverted F appears)",
              "choices": [
                "Yes",
                "No"
              ]
            },
            {
              "type": "radiogroup",
              "name": "Saves All Individual Images to USB",
              "title": "1.11 Saves all / individual images to USB",
              "choices": [
                "Yes",
                "No"
              ]
            },
            {
              "type": "radiogroup",
              "name": "Case Review / Recall Tab Functional",
              "title": "1.12 Case Review / Recall Tab Functional: Displays all images taken and saved",
              "choices": [
                "Yes",
                "No"
              ]
            },
            {
              "type": "radiogroup",
              "name": "Thumbnail Images Display",
              "title": "1.13 Thumbnail images display sequentially as taken. Displayed as Tag 1 Tag2",
              "choices": [
                "Yes",
                "No"
              ]
            },
            {
              "type": "radiogroup",
              "name": "Collimation Mag Mode",
              "title": "1.14 Collimation: Mag Mode and Normal Mode function properly",
              "choices": [
                "Yes",
                "No"
              ]
            },
            {
              "type": "radiogroup",
              "name": "Tube Head Controls",
              "title": "1.15 Tube Head Controls: X-Ray Activates, KV, Save, Tag, Print, Rotate (L&R)",
              "choices": [
                "Yes",
                "No"
              ]
            },
            {
              "type": "radiogroup",
              "name": "Tube Head LED",
              "title": "1.16 Tube Head LED: Illuminate, Brightness (Hold LED Lamp & Press KV)",
              "choices": [
                "Yes",
                "No"
              ]
            },
            {
              "type": "radiogroup",
              "name": "Footswitch Activation",
              "title": "1.17 Footswitch: Activate Image and Print/Save if Equipped",
              "choices": [
                "Yes",
                "No"
              ]
            },
            {
              "type": "text",
              "name": "5 Minute Cumulative Imaging",
              "title": "1.18 5 Minute Cumulative imaging -- set to 40 kV, block X-rays from generator. At 5 minutes of continuous Fluoro, the Alarm sounds and remains on until silence is requested CF 1020.32 (h)."
            },
            {
              "type": "text",
              "name": "System Imaging",
              "title": "1.20 System stops imaging at 5 min of continuous X-ray (from line 1.19)"
            },
            {
              "type": "matrixdropdown",
              "name": "ABS Image Brightness and Gain",
              "title": "1.21 ABS - Set Image Brightness and Gain:",
              "columns": [
                {
                  "name": "Gain",
                  "title": "Gain",
                  "cellType": "text"
                }
              ],
              "rows": [
                "20x0 - ABS - 250",
                "15x15 - ABS - 600",
                "15x12 - ABS - 500"
              ]
            },
            {
              "type": "matrixdropdown",
              "name": "Monitor Settings",
              "title": "1.23 24\" CAWT Monitor: Bright: 100%, Cont: __, Sharp: __, Sat: __, Color Temp: User Gamma: __",
              "columns": [
                {
                  "name": "Value",
                  "title": "Value",
                  "cellType": "text"
                }
              ],
              "rows": [
                "Brightness",
                "Contrast",
                "Sharpness",
                "Saturation",
                "Color Temp"
              ]
            },
            {
              "type": "radiogroup",
              "name": "Laser Activation",
              "title": "1.24 Laser activation: Illuminates and Centered in X-Ray Field",
              "choices": [
                "Yes",
                "No",
                "N/A"
              ]
            },
            {
              "type": "radiogroup",
              "name": "Perform CHKDSK",
              "title": "1.25 Perform CHKDSK in System Settings",
              "choices": [
                "Yes",
                "No"
              ]
            },
            {
              "type": "radiogroup",
              "name": "X-Ray Set to 30pps",
              "title": "1.26 X-Ray: Set to 30pps, AKR in mGy/min is continuously displayed and updated 1x per second",
              "choices": [
                "Yes",
                "No"
              ]
            },
            {
              "type": "radiogroup",
              "name": "X-Ray Cumulative AKR",
              "title": "1.27 X-Ray: Cumulative AKR in mGy is displayed and updated every 5 seconds",
              "choices": [
                "Yes",
                "No"
              ]
            },
            {
              "type": "radiogroup",
              "name": "Display of AKR",
              "title": "1.28 The display of the AKR shall be clearly distinguishable from the display of cumulative air kerma Yes",
              "choices": [
                "Yes",
                "No"
              ]
            },
            {
              "type": "radiogroup",
              "name": "Minimum Opening",
              "title": "1.29 Minimum Opening 21 CFR 1020.32 (b)(2) -- instructions 070-0078, section 9",
              "choices": [
                "Yes",
                "No"
              ]
            },
            {
              "type": "radiogroup",
              "name": "Maximum Opening",
              "title": "1.28 Maximum Opening 21 CFR 1020.32 (b)(2) -- instructions 070-0078, section 9",
              "choices": [
                "Yes",
                "No"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Visual & Motions-2",
      "elements": [
        {
          "type": "panel",
          "name": "Visual & Motions",
          "elements": [
            {
              "type": "radiogroup",
              "name": "Panels Covers Secured",
              "title": "2.1 Panels, covers, enclosures secured and aligned",
              "choices": [
                "Yes",
                "No"
              ]
            },
            {
              "type": "radiogroup",
              "name": "Equipment & Serial Numbers",
              "title": "2.2 Equipment & Serial Number Labels: Attached & secured in proper location",
              "choices": [
                "Yes",
                "No"
              ]
            },
            {
              "type": "radiogroup",
              "name": "Handle Grips Secured",
              "title": "2.3 Monitor: Handle grips secured & aligned. Thumb screw and washer secured",
              "choices": [
                "Yes",
                "No"
              ]
            },
            {
              "type": "radiogroup",
              "name": "Rotates Freely",
              "title": "2.4 Monitor Arm: Rotates freely & smoothly, remains motionless in all positions",
              "choices": [
                "Yes",
                "No"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Inspection Settings",
      "elements": [
        {
          "type": "panel",
          "name": "Monitor Arm Cables",
          "elements": [
            {
              "type": "radiogroup",
              "name": "monitor_arm_cables",
              "title": "Monitor Arm Cables: Secured and routed properly",
              "choices": [
                "Yes",
                "No"
              ]
            },
            {
              "type": "radiogroup",
              "name": "monitor_stop",
              "title": "Monitor stop: Prevents 360° rotation",
              "choices": [
                "Yes",
                "No"
              ]
            },
            {
              "type": "radiogroup",
              "name": "flex_arm",
              "title": "Flex Arm: Motion smooth & holds position. Joints: Secured (no drifting)",
              "choices": [
                "Yes",
                "No"
              ]
            },
            {
              "type": "radiogroup",
              "name": "orbital_movements",
              "title": "Orbital Movements: Motions free and smooth, hold position, lock functions",
              "choices": [
                "Yes",
                "No"
              ]
            },
            {
              "type": "radiogroup",
              "name": "rotational_movements",
              "title": "Rotational Movements: Motions free and smooth, maintain position",
              "choices": [
                "Yes",
                "No"
              ]
            },
            {
              "type": "radiogroup",
              "name": "casters",
              "title": "Casters: Caster Retaining Bolt installed and secure",
              "choices": [
                "Yes",
                "No"
              ]
            },
            {
              "type": "radiogroup",
              "name": "cooling_fans",
              "title": "Cooling Fans and machine clean and dust free",
              "choices": [
                "Yes",
                "No"
              ]
            },
            {
              "type": "radiogroup",
              "name": "detector_dock",
              "title": "Detector Dock: Secures Detector/Arm to Cart",
              "choices": [
                "Yes",
                "No"
              ]
            },
            {
              "type": "radiogroup",
              "name": "cord_reel",
              "title": "Cord Reel: Fully extends, locks and retracts properly",
              "choices": [
                "Yes",
                "No"
              ]
            },
            {
              "type": "radiogroup",
              "name": "power_plug",
              "title": "Power Plug: Plug properly secured & terminated to cord",
              "choices": [
                "Yes",
                "No"
              ]
            },
            {
              "type": "radiogroup",
              "name": "printer_paper_size",
              "title": "Printer Paper Size: Set to 1920X1280 (standard) 3414X2560 (large)",
              "choices": [
                "Yes",
                "No"
              ]
            },
            {
              "type": "radiogroup",
              "name": "printer_queue",
              "title": "Printer Queue: Check and clear if necessary",
              "choices": [
                "Yes",
                "No"
              ]
            },
            {
              "type": "radiogroup",
              "name": "printer_verification",
              "title": "Printer on: Verify FP, Type: HD Brightness & Contrast: 0 Driver: 898",
              "choices": [
                "Yes",
                "No"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Pulse OrthoTouch Settings",
      "elements": [
        {
          "type": "panel",
          "name": "System Configuration Tab",
          "elements": [
            {
              "type": "multipletext",
              "name": "scale_mode",
              "title": "Scale Mode: Auto Scale: 80 Rotation Offset: 0 Rotation Step Degree: 10",
              "items": [
                {
                  "name": "auto_scale",
                  "title": "Auto Scale"
                },
                {
                  "name": "rotation_offset",
                  "title": "Rotation Offset"
                },
                {
                  "name": "rotation_step_degree",
                  "title": "Rotation Step Degree"
                }
              ]
            }
          ]
        },
        {
          "type": "panel",
          "name": "Input Video Setup Tab",
          "elements": [
            {
              "type": "multipletext",
              "name": "video_test_pattern",
              "title": "Video Test Pattern: Off Number of Frames in Full Rate: 2 Offset(ms): _____ Exposure Time (ms): _____",
              "items": [
                {
                  "name": "frames",
                  "title": "Number of Frames"
                },
                {
                  "name": "offset",
                  "title": "Offset (ms)"
                },
                {
                  "name": "exposure_time",
                  "title": "Exposure Time (ms)"
                }
              ]
            }
          ]
        },
        {
          "type": "panel",
          "name": "Detector Calibration Tab",
          "elements": [
            {
              "type": "multipletext",
              "name": "detector_calibration",
              "title": "Detector Calibration: Dark: __ Gain: __ Bad Pixel: __ Shadow: __",
              "items": [
                {
                  "name": "dark",
                  "title": "Dark"
                },
                {
                  "name": "gain",
                  "title": "Gain"
                },
                {
                  "name": "bad_pixel",
                  "title": "Bad Pixel"
                },
                {
                  "name": "shadow",
                  "title": "Shadow"
                }
              ]
            }
          ]
        },
        {
          "type": "panel",
          "name": "Motion Detection Setup Tab",
          "elements": [
            {
              "type": "multipletext",
              "name": "motion_detection_setup",
              "title": "Min Noise Factor: 4 Max Noise Factor: 16 Threshold: 161",
              "items": [
                {
                  "name": "min_noise_factor",
                  "title": "Min Noise Factor"
                },
                {
                  "name": "max_noise_factor",
                  "title": "Max Noise Factor"
                },
                {
                  "name": "threshold",
                  "title": "Threshold"
                }
              ]
            }
          ]
        },
        {
          "type": "panel",
          "name": "ABS/Mask Setup Tab",
          "elements": [
            {
              "type": "multipletext",
              "name": "abs_mask_setup",
              "title": "ROI - Width: _____ Height: _____ (verify / adjust to inside of masking)",
              "items": [
                {
                  "name": "roi_width",
                  "title": "Width"
                },
                {
                  "name": "roi_height",
                  "title": "Height"
                }
              ]
            },
            {
              "type": "multipletext",
              "name": "abs_threshold",
              "title": "ABS Threshold: 30 Frame Delay: 8 Frame Hold: 7 Target 500",
              "items": [
                {
                  "name": "abs_threshold",
                  "title": "ABS Threshold"
                },
                {
                  "name": "frame_delay",
                  "title": "Frame Delay"
                },
                {
                  "name": "frame_hold",
                  "title": "Frame Hold"
                },
                {
                  "name": "target",
                  "title": "Target"
                }
              ]
            }
          ]
        },
        {
          "type": "panel",
          "name": "MagMode Setup Tab",
          "elements": [
            {
              "type": "multipletext",
              "name": "magmode_setup",
              "title": "ROI - Width: _____ Height: _____",
              "items": [
                {
                  "name": "mag_roi_width",
                  "title": "Width"
                },
                {
                  "name": "mag_roi_height",
                  "title": "Height"
                }
              ]
            },
            {
              "type": "multipletext",
              "name": "vertical_coord",
              "title": "Vert Coord: L: _____ R: _____ T: _____ B: _____",
              "items": [
                {
                  "name": "vert_coord_l",
                  "title": "L"
                },
                {
                  "name": "vert_coord_r",
                  "title": "R"
                },
                {
                  "name": "vert_coord_t",
                  "title": "T"
                },
                {
                  "name": "vert_coord_b",
                  "title": "B"
                }
              ]
            },
            {
              "type": "multipletext",
              "name": "horizontal_coord",
              "title": "Hrz Coord: L: _____ R: _____ T: _____ B: _____",
              "items": [
                {
                  "name": "hrz_coord_l",
                  "title": "L"
                },
                {
                  "name": "hrz_coord_r",
                  "title": "R"
                },
                {
                  "name": "hrz_coord_t",
                  "title": "T"
                },
                {
                  "name": "hrz_coord_b",
                  "title": "B"
                }
              ]
            }
          ]
        },
        {
          "type": "panel",
          "name": "Auto Window/Level Setup Tab",
          "elements": [
            {
              "type": "multipletext",
              "name": "max_contrast_limit",
              "title": "Max Contrast Limit: 4095 Ref Level: 2047",
              "items": [
                {
                  "name": "max_contrast_limit",
                  "title": "Max Contrast Limit"
                },
                {
                  "name": "ref_level",
                  "title": "Ref Level"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export const usForm = {
  "pages": [
    {
      "name": "Instrument Performance",
      "elements": [
        {
          "type": "text",
          "name": "company_name",
          "title": "Company Name"
        },
        {
          "type": "text",
          "name": "account_number",
          "title": "Account Number"
        },
        {
          "type": "text",
          "name": "contract_number",
          "title": "Contract Number"
        },
        {
          "type": "text",
          "name": "certification_number",
          "title": "Certification Number"
        },
        {
          "type": "text",
          "name": "part_number",
          "title": "Part Number"
        },
        {
          "type": "text",
          "name": "serial_number",
          "title": "Serial Number"
        },
        {
          "type": "text",
          "name": "asset_tag",
          "title": "Asset Tag"
        },
        {
          "type": "panel",
          "name": "received_condition",
          "title": "Received Condition",
          "elements": [
            {
              "type": "radiogroup",
              "name": "received_condition_status",
              "title": "Condition Status",
              "choices": [
                "Pre-Servicing Check Out Tests, NOT performed",
                "Within Tolerance",
                "Within Tolerance but Limited",
                "Out of Tolerance"
              ]
            }
          ]
        },
        {
          "type": "panel",
          "name": "returned_condition",
          "title": "Returned Condition",
          "elements": [
            {
              "type": "radiogroup",
              "name": "returned_condition_status",
              "title": "Condition Status",
              "choices": [
                "Within Tolerance",
                "Within Tolerance but Limited",
                "Out of Tolerance"
              ]
            }
          ]
        },
        {
          "type": "text",
          "name": "chemical_standards_used",
          "title": "Chemical Standards Used (ID)"
        },
        {
          "type": "text",
          "name": "test_equipment_used",
          "title": "Test Equipment Used (ID)"
        },
        {
          "type": "multipletext",
          "name": "environmental_conditions",
          "title": "Environmental Conditions",
          "items": [
            {
              "name": "temperature",
              "isRequired": true,
              "inputType": "number",
              "title": "Temperature (°C)"
            },
            {
              "name": "humidity",
              "isRequired": true,
              "inputType": "number",
              "title": "Humidity (%)"
            }
          ]
        },
        {
          "type": "text",
          "name": "certified_by",
          "title": "Certified By"
        },
        {
          "type": "text",
          "name": "certification_date",
          "title": "Certification Date",
          "inputType": "date"
        },
        {
          "type": "text",
          "name": "signature",
          "title": "Signature"
        },
        {
          "type": "text",
          "name": "title",
          "title": "Title"
        }
      ]
    },
    {
      "name": "Instrument Performance-2",
      "elements": [
        {
          "type": "text",
          "name": "company_name-2",
          "title": "Company Name"
        },
        {
          "type": "text",
          "name": "account_number-2",
          "title": "Account Number"
        },
        {
          "type": "text",
          "name": "contract_number-2",
          "title": "Contract Number"
        },
        {
          "type": "text",
          "name": "certification_number-2",
          "title": "Certification Number"
        },
        {
          "type": "text",
          "name": "part_number-2",
          "title": "Part Number"
        },
        {
          "type": "text",
          "name": "serial_number-2",
          "title": "Serial Number"
        },
        {
          "type": "text",
          "name": "asset_tag-2",
          "title": "Asset Tag"
        },
        {
          "type": "panel",
          "name": "received_condition-2",
          "title": "Received Condition",
          "elements": [
            {
              "type": "radiogroup",
              "name": "received_condition_status-2",
              "title": "Condition Status",
              "choices": [
                "Pre-Servicing Check Out Tests, NOT performed",
                "Within Tolerance",
                "Within Tolerance but Limited",
                "Out of Tolerance"
              ]
            }
          ]
        },
        {
          "type": "panel",
          "name": "returned_condition-2",
          "title": "Returned Condition",
          "elements": [
            {
              "type": "radiogroup",
              "name": "returned_condition_status-2",
              "title": "Condition Status",
              "choices": [
                "Within Tolerance",
                "Within Tolerance but Limited",
                "Out of Tolerance"
              ]
            }
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "chemical_standards",
          "title": "Chemical Standards Used",
          "columns": [
            {
              "name": "id",
              "title": "ID",
              "cellType": "text"
            }
          ],
          "rows": [
            "Dionized(DI) Water Cat#: 2735",
            "Hach Std#B40 Cat#: 2656349, Lot A1291, Exp. 1023",
            "Hach Std#Cat# 0 NTU Cat#: 269949, Lot A1201R, Exp. 7/23"
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "test_equipment_used-2",
          "title": "Test Equipment Used",
          "columns": [
            {
              "name": "id-2",
              "title": "ID",
              "cellType": "text"
            }
          ],
          "rows": [
            "Temp Pro - Etech #121179, Exp. 10/6/22"
          ]
        },
        {
          "type": "text",
          "name": "environmental_conditions_temperature",
          "title": "Environmental Conditions - Temperature (°C)",
          "inputType": "number"
        },
        {
          "type": "text",
          "name": "environmental_conditions_humidity",
          "title": "Environmental Conditions - Humidity (%)",
          "inputType": "number"
        },
        {
          "type": "text",
          "name": "certified_by-2",
          "title": "Certified By"
        },
        {
          "type": "text",
          "name": "certification_date-2",
          "title": "Certification Date",
          "inputType": "date"
        },
        {
          "type": "text",
          "name": "signature-2",
          "title": "Signature"
        }
      ]
    },
    {
      "name": "Instrument Performance-3",
      "elements": [
        {
          "type": "text",
          "name": "company_name-3",
          "title": "Company Name"
        },
        {
          "type": "text",
          "name": "account_number-3",
          "title": "Account Number"
        },
        {
          "type": "text",
          "name": "contract_number-3",
          "title": "Contract Number"
        },
        {
          "type": "text",
          "name": "certification_number-3",
          "title": "Certification Number"
        },
        {
          "type": "text",
          "name": "part_number-3",
          "title": "Part Number"
        },
        {
          "type": "text",
          "name": "serial_number-3",
          "title": "Serial Number"
        },
        {
          "type": "text",
          "name": "asset_tag-3",
          "title": "Asset Tag"
        },
        {
          "type": "radiogroup",
          "name": "received_condition-3",
          "title": "Received Condition",
          "choices": [
            "Pre-Serving Check Out Tests, NOT performed",
            "Within Tolerance",
            "Within Tolerance but Limited",
            "Out of Tolerance"
          ]
        },
        {
          "type": "radiogroup",
          "name": "returned_condition-3",
          "title": "Returned Condition",
          "choices": [
            "Within Tolerance",
            "Within Tolerance but Limited",
            "Out of Tolerance"
          ]
        },
        {
          "type": "text",
          "name": "chemical_standards_used-2",
          "title": "Chemical Standards Used (ID)"
        },
        {
          "type": "text",
          "name": "test_equipment_used-3",
          "title": "Test Equipment Used (ID)"
        },
        {
          "type": "text",
          "name": "temperature",
          "title": "Temperature (°C)"
        },
        {
          "type": "text",
          "name": "humidity",
          "title": "Humidity (%)"
        },
        {
          "type": "text",
          "name": "certified_by-3",
          "title": "Certified By"
        },
        {
          "type": "text",
          "name": "certification_date-3",
          "title": "Certification Date"
        },
        {
          "type": "text",
          "name": "signature-3",
          "title": "Signature"
        },
        {
          "type": "text",
          "name": "title-2",
          "title": "Title"
        }
      ]
    },
    {
      "name": "Instrument Performance-4",
      "elements": [
        {
          "type": "text",
          "name": "company_name-4",
          "title": "Company Name"
        },
        {
          "type": "text",
          "name": "account_number-4",
          "title": "Account Number"
        },
        {
          "type": "text",
          "name": "contract_number-4",
          "title": "Contract Number"
        },
        {
          "type": "text",
          "name": "certification_number-4",
          "title": "Certification Number"
        },
        {
          "type": "text",
          "name": "part_number-4",
          "title": "Part Number"
        },
        {
          "type": "text",
          "name": "serial_number-4",
          "title": "Serial Number"
        },
        {
          "type": "text",
          "name": "asset_tag-4",
          "title": "Asset Tag"
        },
        {
          "type": "checkbox",
          "name": "received_condition-4",
          "title": "Received Condition (One must be checked)",
          "choices": [
            "Pre-Serving Check Out Tests, NOT performed",
            "Within Tolerance",
            "Within Tolerance but Limited",
            "Out of Tolerance"
          ],
          "showOtherItem": true
        },
        {
          "type": "checkbox",
          "name": "returned_condition-4",
          "title": "Returned Condition (One must be checked)",
          "choices": [
            "Within Tolerance",
            "Within Tolerance but Limited",
            "Out of Tolerance"
          ],
          "showOtherItem": true
        },
        {
          "type": "text",
          "name": "chemical_standards_used-3",
          "title": "Chemical Standards Used (ID#)"
        },
        {
          "type": "text",
          "name": "test_equipment_used-4",
          "title": "Test Equipment Used (ID#)"
        },
        {
          "type": "text",
          "name": "temperature-2",
          "title": "Temperature (°C)",
          "inputType": "number"
        },
        {
          "type": "text",
          "name": "humidity-2",
          "title": "Humidity (%)",
          "inputType": "number"
        },
        {
          "type": "text",
          "name": "certified_by-4",
          "title": "Certified By"
        },
        {
          "type": "text",
          "name": "certification_date-4",
          "title": "Certification Date",
          "inputType": "date"
        },
        {
          "type": "text",
          "name": "signature-4",
          "title": "Signature"
        },
        {
          "type": "text",
          "name": "title-3",
          "title": "Title"
        }
      ]
    },
    {
      "name": "Instrument Performance-5",
      "elements": [
        {
          "type": "text",
          "name": "company_name-5",
          "title": "Company Name"
        },
        {
          "type": "text",
          "name": "account_number-5",
          "title": "Account Number"
        },
        {
          "type": "text",
          "name": "contract_number-5",
          "title": "Contract Number"
        },
        {
          "type": "text",
          "name": "certification_number-5",
          "title": "Certification Number"
        },
        {
          "type": "text",
          "name": "part_number-5",
          "title": "Part Number"
        },
        {
          "type": "text",
          "name": "serial_number-5",
          "title": "Serial Number"
        },
        {
          "type": "text",
          "name": "asset_tag-5",
          "title": "Asset Tag"
        },
        {
          "type": "radiogroup",
          "name": "received_condition-5",
          "title": "Received Condition",
          "choices": [
            "Pre-Servicing Check Out Tests, NOT performed",
            "Within Tolerance",
            "Within Tolerance but Limited",
            "Out of Tolerance"
          ]
        },
        {
          "type": "radiogroup",
          "name": "returned_condition-5",
          "title": "Returned Condition",
          "choices": [
            "Within Tolerance",
            "Within Tolerance but Limited",
            "Out of Tolerance"
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "chemical_standards_used-4",
          "title": "Chemical Standards Used",
          "columns": [
            {
              "name": "ID",
              "title": "ID",
              "cellType": "text"
            }
          ],
          "rows": [
            "Hach pH 4 Buffer 500 ml.",
            "Hach pH 7 Buffer 500ml.",
            "Hach pH 10 Buffer 500 ml."
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "test_equipment_used-5",
          "title": "Test Equipment Used",
          "columns": [
            {
              "name": "ID-2",
              "title": "ID",
              "cellType": "text"
            }
          ],
          "rows": [
            "Temp Pen - Etech #121719, Exp. 10/6/22"
          ]
        },
        {
          "type": "text",
          "name": "temperature-3",
          "title": "Temperature (°C)"
        },
        {
          "type": "text",
          "name": "humidity-3",
          "title": "Humidity (%)"
        },
        {
          "type": "text",
          "name": "certified_by-5",
          "title": "Certified By"
        },
        {
          "type": "text",
          "name": "certification_date-5",
          "title": "Certification Date"
        },
        {
          "type": "text",
          "name": "signature-5",
          "title": "Signature"
        },
        {
          "type": "text",
          "name": "title-4",
          "title": "Title"
        }
      ]
    },
    {
      "name": "Instrument Performance-6",
      "elements": [
        {
          "type": "text",
          "name": "company_name-6",
          "title": "Company Name"
        },
        {
          "type": "text",
          "name": "account_number-6",
          "title": "Account Number"
        },
        {
          "type": "text",
          "name": "contract_number-6",
          "title": "Contract Number"
        },
        {
          "type": "text",
          "name": "certification_number-6",
          "title": "Certification Number"
        },
        {
          "type": "text",
          "name": "part_number-6",
          "title": "Part Number"
        },
        {
          "type": "text",
          "name": "serial_number-6",
          "title": "Serial Number"
        },
        {
          "type": "text",
          "name": "asset_tag-6",
          "title": "Asset Tag"
        },
        {
          "type": "radiogroup",
          "name": "received_condition-6",
          "title": "Received Condition (One must be Checked)",
          "choices": [
            "Pre-Servicing Check Out Tests, NOT performed",
            "Within Tolerance",
            "Within Tolerance but Limited",
            "Out of Tolerance"
          ]
        },
        {
          "type": "radiogroup",
          "name": "returned_condition-6",
          "title": "Returned Condition (One must be Checked)",
          "choices": [
            "Within Tolerance",
            "Within Tolerance but Limited",
            "Out of Tolerance"
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "chemical_standards_used-5",
          "title": "Chemical Standards Used (ID#)",
          "columns": [
            {
              "name": "standard",
              "title": "Standard",
              "cellType": "text"
            },
            {
              "name": "lot",
              "title": "Lot",
              "cellType": "text"
            },
            {
              "name": "expiration",
              "title": "Expiration",
              "cellType": "text"
            }
          ],
          "rows": [
            "Hach pH 4 Buffer 500 ml.",
            "Hach pH 7 Buffer 500 ml.",
            "Hach pH 10 Buffer 500 ml."
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "test_equipment_used-6",
          "title": "Test Equipment Used (ID#)",
          "columns": [
            {
              "name": "equipment",
              "title": "Equipment",
              "cellType": "text"
            },
            {
              "name": "lot-2",
              "title": "Lot",
              "cellType": "text"
            },
            {
              "name": "expiration-2",
              "title": "Expiration",
              "cellType": "text"
            }
          ],
          "rows": [
            "Temp Pen - Etech #121719",
            "Temp Pen - Etech #106/22"
          ]
        },
        {
          "type": "text",
          "name": "temperature-4",
          "title": "Temperature (°C)"
        },
        {
          "type": "text",
          "name": "humidity-4",
          "title": "Humidity (%)"
        },
        {
          "type": "text",
          "name": "certified_by-6",
          "title": "Certified By"
        },
        {
          "type": "text",
          "name": "certification_date-6",
          "title": "Certification Date"
        },
        {
          "type": "text",
          "name": "signature-6",
          "title": "Signature"
        },
        {
          "type": "text",
          "name": "title-5",
          "title": "Title"
        }
      ]
    },
    {
      "name": "Instrument Performance-7",
      "elements": [
        {
          "type": "text",
          "name": "company_name-7",
          "title": "Company Name"
        },
        {
          "type": "text",
          "name": "account_number-7",
          "title": "Account Number"
        },
        {
          "type": "text",
          "name": "contract_number-7",
          "title": "Contract Number"
        },
        {
          "type": "text",
          "name": "certification_number-7",
          "title": "Certification Number"
        },
        {
          "type": "text",
          "name": "part_number-7",
          "title": "Part Number"
        },
        {
          "type": "text",
          "name": "serial_number-7",
          "title": "Serial Number"
        },
        {
          "type": "text",
          "name": "asset_tag-7",
          "title": "Asset Tag"
        },
        {
          "type": "panel",
          "name": "received_condition-7",
          "title": "Received Condition",
          "elements": [
            {
              "type": "radiogroup",
              "name": "received_condition_status-3",
              "title": "Condition",
              "choices": [
                "Pre-Servicing Check Out Tests, NOT performed",
                "Within Tolerance",
                "Within Tolerance but Limited",
                "Out of Tolerance"
              ]
            }
          ]
        },
        {
          "type": "panel",
          "name": "returned_condition-7",
          "title": "Returned Condition",
          "elements": [
            {
              "type": "radiogroup",
              "name": "returned_condition_status-3",
              "title": "Condition",
              "choices": [
                "Within Tolerance",
                "Within Tolerance but Limited",
                "Out of Tolerance"
              ]
            }
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "chemical_standards_used-6",
          "title": "Chemical Standards Used",
          "columns": [
            {
              "name": "ID-3",
              "title": "ID",
              "cellType": "text"
            }
          ],
          "rows": [
            "Hach pH 4 Buffer 500 ml.",
            "Hach pH 7 Buffer 500ml.",
            "Hach pH 10 Buffer 500 ml."
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "test_equipment_used-7",
          "title": "Test Equipment Used",
          "columns": [
            {
              "name": "ID-4",
              "title": "ID",
              "cellType": "text"
            }
          ],
          "rows": [
            "Temp Pen - Etech #121719, Exp. 10/6/22"
          ]
        },
        {
          "type": "text",
          "name": "temperature-5",
          "title": "Temperature (°C)"
        },
        {
          "type": "text",
          "name": "humidity-5",
          "title": "Humidity (%)"
        },
        {
          "type": "text",
          "name": "certified_by-7",
          "title": "Certified By"
        },
        {
          "type": "text",
          "name": "certification_date-7",
          "title": "Certification Date"
        },
        {
          "type": "text",
          "name": "signature-7",
          "title": "Signature"
        },
        {
          "type": "text",
          "name": "title-6",
          "title": "Title"
        }
      ]
    },
    {
      "name": "Instrument Performance-8",
      "elements": [
        {
          "type": "text",
          "name": "company_name-8",
          "title": "Company Name"
        },
        {
          "type": "text",
          "name": "account_number-8",
          "title": "Account Number"
        },
        {
          "type": "text",
          "name": "contract_number-8",
          "title": "Contract Number"
        },
        {
          "type": "text",
          "name": "certification_number-8",
          "title": "Certification Number"
        },
        {
          "type": "text",
          "name": "part_number-8",
          "title": "Part Number"
        },
        {
          "type": "text",
          "name": "serial_number-8",
          "title": "Serial Number"
        },
        {
          "type": "text",
          "name": "asset_tag-8",
          "title": "Asset Tag"
        },
        {
          "type": "panel",
          "name": "received_condition-8",
          "title": "Received Condition",
          "elements": [
            {
              "type": "radiogroup",
              "name": "received_condition_check",
              "title": "Condition (must be checked)",
              "choices": [
                "Pre-Servicing Check Out Tests, NOT performed",
                "Within Tolerance",
                "Within Tolerance but Limited",
                "Out of Tolerance"
              ]
            }
          ]
        },
        {
          "type": "panel",
          "name": "returned_condition-8",
          "title": "Returned Condition",
          "elements": [
            {
              "type": "radiogroup",
              "name": "returned_condition_check",
              "title": "Condition (must be checked)",
              "choices": [
                "Within Tolerance",
                "Within Tolerance but Limited",
                "Out of Tolerance"
              ]
            }
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "chemical_standards_used-7",
          "title": "Chemical Standards Used",
          "columns": [
            {
              "name": "ID-5",
              "title": "ID",
              "cellType": "text"
            }
          ],
          "rows": [
            "Hach pH 4 Buffer 500 ml.",
            "Hach pH 7 Buffer 500ml.",
            "Hach pH 10 Buffer 500 ml."
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "test_equipment_used-8",
          "title": "Test Equipment Used",
          "columns": [
            {
              "name": "ID-6",
              "title": "ID",
              "cellType": "text"
            }
          ],
          "rows": [
            "Temp Pro - Etech #121179, Exp. 10/6/22"
          ]
        },
        {
          "type": "text",
          "name": "temperature-6",
          "title": "Temperature (°C)"
        },
        {
          "type": "text",
          "name": "humidity-6",
          "title": "Humidity (%)"
        },
        {
          "type": "text",
          "name": "certified_by-8",
          "title": "Certified By"
        },
        {
          "type": "text",
          "name": "certification_date-8",
          "title": "Certification Date"
        },
        {
          "type": "text",
          "name": "signature-8",
          "title": "Signature"
        },
        {
          "type": "text",
          "name": "title-7",
          "title": "Title"
        }
      ]
    },
    {
      "name": "Instrument Performance-9",
      "elements": [
        {
          "type": "text",
          "name": "company_name-9",
          "title": "Company Name"
        },
        {
          "type": "text",
          "name": "account_number-9",
          "title": "Account Number"
        },
        {
          "type": "text",
          "name": "contract_number-9",
          "title": "Contract Number"
        },
        {
          "type": "text",
          "name": "certification_number-9",
          "title": "Certification Number"
        },
        {
          "type": "text",
          "name": "part_number-9",
          "title": "Part Number"
        },
        {
          "type": "text",
          "name": "serial_number-9",
          "title": "Serial Number"
        },
        {
          "type": "panel",
          "name": "received_condition-9",
          "title": "Received Condition",
          "elements": [
            {
              "type": "radiogroup",
              "name": "received_condition_check-2",
              "title": "Select Condition",
              "choices": [
                "Pre-Servicing Check Out Tests, NOT performed",
                "Within Tolerance",
                "Within Tolerance but Limited",
                "Out of Tolerance"
              ]
            }
          ]
        },
        {
          "type": "panel",
          "name": "returned_condition-9",
          "title": "Returned Condition",
          "elements": [
            {
              "type": "radiogroup",
              "name": "returned_condition_check-2",
              "title": "Select Condition",
              "choices": [
                "Within Tolerance",
                "Within Tolerance but Limited",
                "Out of Tolerance"
              ]
            }
          ]
        },
        {
          "type": "text",
          "name": "chemical_standards_used-8",
          "title": "Chemical Standards Used (ID#)"
        },
        {
          "type": "text",
          "name": "test_equipment_used-9",
          "title": "Test Equipment Used (ID#)"
        },
        {
          "type": "text",
          "name": "temperature-7",
          "title": "Temperature (°C)",
          "inputType": "number"
        },
        {
          "type": "text",
          "name": "humidity-7",
          "title": "Humidity (%)",
          "inputType": "number"
        },
        {
          "type": "text",
          "name": "certified_by-9",
          "title": "Certified By"
        },
        {
          "type": "text",
          "name": "certification_date-9",
          "title": "Certification Date",
          "inputType": "date"
        },
        {
          "type": "text",
          "name": "signature-9",
          "title": "Signature"
        },
        {
          "type": "text",
          "name": "title-8",
          "title": "Title"
        }
      ]
    },
    {
      "name": "Instrument Performance-10",
      "elements": [
        {
          "type": "text",
          "name": "company_name-10",
          "title": "Company Name"
        },
        {
          "type": "text",
          "name": "account_number-10",
          "title": "Account Number"
        },
        {
          "type": "text",
          "name": "contract_number-10",
          "title": "Contract Number"
        },
        {
          "type": "text",
          "name": "certification_number-10",
          "title": "Certification Number"
        },
        {
          "type": "text",
          "name": "part_number-10",
          "title": "Part Number"
        },
        {
          "type": "text",
          "name": "serial_number-10",
          "title": "Serial Number"
        },
        {
          "type": "text",
          "name": "asset_tag-9",
          "title": "Asset Tag"
        },
        {
          "type": "panel",
          "name": "received_condition-10",
          "title": "Received Condition",
          "elements": [
            {
              "type": "radiogroup",
              "name": "received_condition_check-3",
              "title": "Condition (must be checked)",
              "choices": [
                "Pre-Servicing Check Out Tests, NOT performed",
                "Within Tolerance",
                "Within Tolerance but Limited",
                "Out of Tolerance"
              ]
            }
          ]
        },
        {
          "type": "panel",
          "name": "returned_condition-10",
          "title": "Returned Condition",
          "elements": [
            {
              "type": "radiogroup",
              "name": "returned_condition_check-3",
              "title": "Condition (must be checked)",
              "choices": [
                "Within Tolerance",
                "Within Tolerance but Limited",
                "Out of Tolerance"
              ]
            }
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "chemical_standards_used-9",
          "title": "Chemical Standards Used",
          "columns": [
            {
              "name": "ID-7",
              "title": "ID",
              "cellType": "text"
            }
          ],
          "rows": [
            "Hach pH 4 Buffer 500 ml.",
            "Hach pH 7 Buffer 500 ml.",
            "Hach pH 10 Buffer 500 ml."
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "test_equipment_used-10",
          "title": "Test Equipment Used",
          "columns": [
            {
              "name": "ID-8",
              "title": "ID",
              "cellType": "text"
            }
          ],
          "rows": [
            "Temp Pen - Etech #121179, Exp. 106/22"
          ]
        },
        {
          "type": "text",
          "name": "temperature-8",
          "title": "Temperature (°C)"
        },
        {
          "type": "text",
          "name": "humidity-8",
          "title": "Humidity (%)"
        },
        {
          "type": "text",
          "name": "certified_by-10",
          "title": "Certified By"
        },
        {
          "type": "text",
          "name": "certification_date-10",
          "title": "Certification Date"
        },
        {
          "type": "text",
          "name": "signature-10",
          "title": "Signature"
        },
        {
          "type": "text",
          "name": "title-9",
          "title": "Title"
        }
      ]
    },
    {
      "name": "Instrument Performance-11",
      "elements": [
        {
          "type": "text",
          "name": "company_name-11",
          "title": "Company Name"
        },
        {
          "type": "text",
          "name": "account_number-11",
          "title": "Account Number"
        },
        {
          "type": "text",
          "name": "contract_number-11",
          "title": "Contract Number"
        },
        {
          "type": "text",
          "name": "certification_number-11",
          "title": "Certification Number"
        },
        {
          "type": "text",
          "name": "part_number-11",
          "title": "Part Number"
        },
        {
          "type": "text",
          "name": "serial_number-11",
          "title": "Serial Number"
        },
        {
          "type": "text",
          "name": "asset_tag-10",
          "title": "Asset Tag"
        },
        {
          "type": "panel",
          "name": "received_condition-11",
          "title": "Received Condition",
          "elements": [
            {
              "type": "checkbox",
              "name": "received_condition_options",
              "title": "Select Condition",
              "choices": [
                "Pre-Serving Check Out Tests, NOT performed",
                "Within Tolerance",
                "Within Tolerance but Limited",
                "Out of Tolerance"
              ],
              "showOtherItem": true
            }
          ]
        },
        {
          "type": "panel",
          "name": "returned_condition-11",
          "title": "Returned Condition",
          "elements": [
            {
              "type": "checkbox",
              "name": "returned_condition_options",
              "title": "Select Condition",
              "choices": [
                "Within Tolerance",
                "Within Tolerance but Limited",
                "Out of Tolerance"
              ],
              "showOtherItem": true
            }
          ]
        },
        {
          "type": "text",
          "name": "chemical_standards_used-10",
          "title": "Chemical Standards Used (ID#)"
        },
        {
          "type": "text",
          "name": "test_equipment_used-11",
          "title": "Test Equipment Used (ID#)"
        },
        {
          "type": "text",
          "name": "temperature-9",
          "title": "Temperature (°C)",
          "inputType": "number"
        },
        {
          "type": "text",
          "name": "humidity-9",
          "title": "Humidity (%)",
          "inputType": "number"
        },
        {
          "type": "text",
          "name": "certified_by-11",
          "title": "Certified By"
        },
        {
          "type": "text",
          "name": "certification_date-11",
          "title": "Certification Date"
        },
        {
          "type": "text",
          "name": "signature-11",
          "title": "Signature"
        },
        {
          "type": "text",
          "name": "title-10",
          "title": "Title"
        }
      ]
    },
    {
      "name": "Instrument Performance-12",
      "elements": [
        {
          "type": "text",
          "name": "company_name-12",
          "title": "Company Name"
        },
        {
          "type": "text",
          "name": "account_number-12",
          "title": "Account Number"
        },
        {
          "type": "text",
          "name": "contract_number-12",
          "title": "Contract Number"
        },
        {
          "type": "text",
          "name": "certification_number-12",
          "title": "Certification Number"
        },
        {
          "type": "text",
          "name": "part_number-12",
          "title": "Part Number"
        },
        {
          "type": "text",
          "name": "serial_number-12",
          "title": "Serial Number"
        },
        {
          "type": "panel",
          "name": "received_condition-12",
          "title": "Received Condition",
          "elements": [
            {
              "type": "checkbox",
              "name": "received_condition_options-2",
              "title": "Select Condition",
              "choices": [
                "Pre-Servicing Check Out Tests, NOT performed",
                "Within Tolerance",
                "Within Tolerance but Limited",
                "Out of Tolerance"
              ],
              "showOtherItem": true
            }
          ]
        },
        {
          "type": "panel",
          "name": "returned_condition-12",
          "title": "Returned Condition",
          "elements": [
            {
              "type": "checkbox",
              "name": "returned_condition_options-2",
              "title": "Select Condition",
              "choices": [
                "Within Tolerance",
                "Within Tolerance but Limited",
                "Out of Tolerance"
              ],
              "showOtherItem": true
            }
          ]
        },
        {
          "type": "text",
          "name": "chemical_standards_used-11",
          "title": "Chemical Standards Used (ID#)"
        },
        {
          "type": "text",
          "name": "test_equipment_used-12",
          "title": "Test Equipment Used (ID#)"
        },
        {
          "type": "matrix",
          "name": "environmental_conditions-2",
          "title": "Environmental Conditions",
          "columns": [
            {
              "value": "temperature",
              "text": "Temperature (°C)"
            },
            {
              "value": "humidity",
              "text": "Humidity (%)"
            }
          ],
          "rows": [
            {
              "value": "environmental_conditions",
              "text": "Conditions"
            }
          ]
        },
        {
          "type": "text",
          "name": "certified_by-12",
          "title": "Certified By"
        },
        {
          "type": "text",
          "name": "certification_date-12",
          "title": "Certification Date",
          "inputType": "date"
        },
        {
          "type": "text",
          "name": "signature-12",
          "title": "Signature"
        },
        {
          "type": "text",
          "name": "title-11",
          "title": "Title"
        }
      ]
    },
    {
      "name": "Instrument Performance-13",
      "elements": [
        {
          "type": "text",
          "name": "company_name-13",
          "title": "Company Name"
        },
        {
          "type": "text",
          "name": "account_number-13",
          "title": "Account Number"
        },
        {
          "type": "text",
          "name": "contract_number-13",
          "title": "Contract Number"
        },
        {
          "type": "text",
          "name": "certification_number-13",
          "title": "Certification Number"
        },
        {
          "type": "text",
          "name": "part_number-13",
          "title": "Part Number"
        },
        {
          "type": "text",
          "name": "serial_number-13",
          "title": "Serial Number"
        },
        {
          "type": "text",
          "name": "asset_tag-11",
          "title": "Asset Tag"
        },
        {
          "type": "panel",
          "name": "received_condition-13",
          "title": "Received Condition (One must be Checked)",
          "elements": [
            {
              "type": "radiogroup",
              "name": "received_condition_check-4",
              "title": "Select Condition",
              "choices": [
                "Pre-Servicing Check Out Tests, NOT performed",
                "Within Tolerance",
                "Within Tolerance but Limited",
                "Out of Tolerance"
              ]
            }
          ]
        },
        {
          "type": "panel",
          "name": "returned_condition-13",
          "title": "Returned Condition (One must be Checked)",
          "elements": [
            {
              "type": "radiogroup",
              "name": "returned_condition_check-4",
              "title": "Select Condition",
              "choices": [
                "Within Tolerance",
                "Within Tolerance but Limited",
                "Out of Tolerance"
              ]
            }
          ]
        },
        {
          "type": "text",
          "name": "chemical_standards_used-12",
          "title": "Chemical Standards Used (ID#)"
        },
        {
          "type": "text",
          "name": "test_equipment_used-13",
          "title": "Test Equipment Used (ID#)"
        },
        {
          "type": "text",
          "name": "environmental_conditions-3",
          "title": "Environmental Conditions"
        },
        {
          "type": "text",
          "name": "temperature-10",
          "title": "Temperature (°C)",
          "inputType": "number"
        },
        {
          "type": "text",
          "name": "humidity-10",
          "title": "Humidity (%)",
          "inputType": "number"
        },
        {
          "type": "text",
          "name": "certified_by-13",
          "title": "Certified By"
        },
        {
          "type": "text",
          "name": "certification_date-13",
          "title": "Certification Date",
          "inputType": "date"
        },
        {
          "type": "text",
          "name": "signature-13",
          "title": "Signature"
        },
        {
          "type": "text",
          "name": "title-12",
          "title": "Title"
        }
      ]
    },
    {
      "name": "Instrument Performance-14",
      "elements": [
        {
          "type": "text",
          "name": "company_name-14",
          "title": "Company Name"
        },
        {
          "type": "text",
          "name": "account_number-14",
          "title": "Account Number"
        },
        {
          "type": "text",
          "name": "contract_number-14",
          "title": "Contract Number"
        },
        {
          "type": "text",
          "name": "certification_number-14",
          "title": "Certification Number"
        },
        {
          "type": "text",
          "name": "part_number-14",
          "title": "Part Number"
        },
        {
          "type": "text",
          "name": "serial_number-14",
          "title": "Serial Number"
        },
        {
          "type": "checkbox",
          "name": "received_condition-14",
          "title": "Received Condition",
          "choices": [
            "Pre-Servicing Check Out Tests, NOT performed",
            "Within Tolerance",
            "Within Tolerance but Limited",
            "Out of Tolerance"
          ],
          "showOtherItem": true
        },
        {
          "type": "checkbox",
          "name": "returned_condition-14",
          "title": "Returned Condition",
          "choices": [
            "Within Tolerance",
            "Within Tolerance but Limited",
            "Out of Tolerance"
          ],
          "showOtherItem": true
        },
        {
          "type": "text",
          "name": "chemical_standards_used-13",
          "title": "Chemical Standards Used (ID#)"
        },
        {
          "type": "text",
          "name": "test_equipment_used-14",
          "title": "Test Equipment Used (ID#)"
        },
        {
          "type": "text",
          "name": "temperature-11",
          "title": "Temperature (°C)",
          "inputType": "number"
        },
        {
          "type": "text",
          "name": "humidity-11",
          "title": "Humidity (%)",
          "inputType": "number"
        },
        {
          "type": "text",
          "name": "certified_by-14",
          "title": "Certified By"
        },
        {
          "type": "text",
          "name": "certification_date-14",
          "title": "Certification Date",
          "inputType": "date"
        },
        {
          "type": "text",
          "name": "signature-14",
          "title": "Signature"
        },
        {
          "type": "text",
          "name": "title-13",
          "title": "Title"
        }
      ]
    },
    {
      "name": "Instrument Performance-15",
      "elements": [
        {
          "type": "text",
          "name": "company_name-15",
          "title": "Company Name"
        },
        {
          "type": "text",
          "name": "account_number-15",
          "title": "Account Number"
        },
        {
          "type": "text",
          "name": "contract_number-15",
          "title": "Contract Number"
        },
        {
          "type": "text",
          "name": "certification_number-15",
          "title": "Certification Number"
        },
        {
          "type": "text",
          "name": "part_number-15",
          "title": "Part Number"
        },
        {
          "type": "text",
          "name": "serial_number-15",
          "title": "Serial Number"
        },
        {
          "type": "text",
          "name": "asset_tag-12",
          "title": "Asset Tag"
        },
        {
          "type": "panel",
          "name": "received_condition-15",
          "title": "Received Condition (One must be Checked)",
          "elements": [
            {
              "type": "radiogroup",
              "name": "received_condition_check-5",
              "title": "Select Condition",
              "choices": [
                "Pre-Servicing Check Out Tests, NOT performed",
                "Within Tolerance",
                "Within Tolerance but Limited",
                "Out of Tolerance"
              ]
            }
          ]
        },
        {
          "type": "panel",
          "name": "returned_condition-15",
          "title": "Returned Condition (One must be Checked)",
          "elements": [
            {
              "type": "radiogroup",
              "name": "returned_condition_check-5",
              "title": "Select Condition",
              "choices": [
                "Within Tolerance",
                "Within Tolerance but Limited",
                "Out of Tolerance"
              ]
            }
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "chemical_standards_used-14",
          "title": "Chemical Standards Used (ID#)",
          "columns": [
            {
              "name": "standard_id",
              "title": "ID#",
              "cellType": "text"
            },
            {
              "name": "lot_number",
              "title": "Lot Number",
              "cellType": "text"
            },
            {
              "name": "expiration_date",
              "title": "Expiration Date",
              "cellType": "text",
              "inputType": "date"
            }
          ],
          "rows": [
            "Hach StabCal 20 NTU Cut 2260135",
            "Hach StabCal 1 NTU Cut 24625953"
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "test_equipment_used-15",
          "title": "Test Equipment Used (ID#)",
          "columns": [
            {
              "name": "equipment_id",
              "title": "ID#",
              "cellType": "text"
            },
            {
              "name": "expiration_date-2",
              "title": "Expiration Date",
              "cellType": "text",
              "inputType": "date"
            }
          ],
          "rows": [
            "Temp Pen - Etech #1217179"
          ]
        },
        {
          "type": "text",
          "name": "environmental_conditions_temperature-2",
          "title": "Environmental Conditions - Temperature (°C)",
          "inputType": "number"
        },
        {
          "type": "text",
          "name": "environmental_conditions_humidity-2",
          "title": "Environmental Conditions - Humidity (%)",
          "inputType": "number"
        },
        {
          "type": "text",
          "name": "certified_by-15",
          "title": "Certified By"
        },
        {
          "type": "text",
          "name": "certification_date-15",
          "title": "Certification Date",
          "inputType": "date"
        },
        {
          "type": "text",
          "name": "signature-15",
          "title": "Signature"
        },
        {
          "type": "text",
          "name": "title-14",
          "title": "Title"
        }
      ]
    },
    {
      "name": "Instrument Performance-16",
      "elements": [
        {
          "type": "text",
          "name": "company_name-16",
          "title": "Company Name"
        },
        {
          "type": "text",
          "name": "account_number-16",
          "title": "Account Number"
        },
        {
          "type": "text",
          "name": "contract_number-16",
          "title": "Contract Number"
        },
        {
          "type": "text",
          "name": "certification_number-16",
          "title": "Certification Number"
        },
        {
          "type": "text",
          "name": "part_number-16",
          "title": "Part Number"
        },
        {
          "type": "text",
          "name": "serial_number-16",
          "title": "Serial Number"
        },
        {
          "type": "text",
          "name": "asset_tag-13",
          "title": "Asset Tag"
        },
        {
          "type": "panel",
          "name": "received_condition-16",
          "title": "Received Condition",
          "elements": [
            {
              "type": "radiogroup",
              "name": "received_condition_status-4",
              "title": "Condition Status",
              "choices": [
                "Pre-Servicing Check Out Tests, NOT performed",
                "Within Tolerance",
                "Within Tolerance but Limited",
                "Out of Tolerance"
              ]
            }
          ]
        },
        {
          "type": "panel",
          "name": "returned_condition-16",
          "title": "Returned Condition",
          "elements": [
            {
              "type": "radiogroup",
              "name": "returned_condition_status-4",
              "title": "Condition Status",
              "choices": [
                "Within Tolerance",
                "Within Tolerance but Limited",
                "Out of Tolerance"
              ]
            }
          ]
        },
        {
          "type": "text",
          "name": "chemical_standards_id",
          "title": "Chemical Standards Used, (ID#)"
        },
        {
          "type": "panel",
          "name": "test_equipment_used-16",
          "title": "Test Equipment Used, (ID#)",
          "elements": [
            {
              "type": "text",
              "name": "test_equipment_1",
              "title": "Test Equipment 1"
            },
            {
              "type": "text",
              "name": "test_equipment_2",
              "title": "Test Equipment 2"
            }
          ]
        },
        {
          "type": "text",
          "name": "environmental_conditions-4",
          "title": "Environmental Conditions"
        },
        {
          "type": "text",
          "name": "certified_by-16",
          "title": "Certified By"
        },
        {
          "type": "text",
          "name": "certification_date-16",
          "title": "Certification Date",
          "inputType": "date"
        },
        {
          "type": "text",
          "name": "signature-16",
          "title": "Signature"
        },
        {
          "type": "text",
          "name": "title-15",
          "title": "Title"
        }
      ]
    },
    {
      "name": "Instrument Performance-17",
      "elements": [
        {
          "type": "text",
          "name": "company_name-17",
          "title": "Company Name"
        },
        {
          "type": "text",
          "name": "account_number-17",
          "title": "Account Number"
        },
        {
          "type": "text",
          "name": "contract_number-17",
          "title": "Contract Number"
        },
        {
          "type": "text",
          "name": "certification_number-17",
          "title": "Certification Number"
        },
        {
          "type": "text",
          "name": "part_number-17",
          "title": "Part Number"
        },
        {
          "type": "text",
          "name": "serial_number-17",
          "title": "Serial Number"
        },
        {
          "type": "text",
          "name": "asset_tag-14",
          "title": "Asset Tag"
        },
        {
          "type": "radiogroup",
          "name": "received_condition-17",
          "title": "Received Condition (One must be checked)",
          "choices": [
            "Pre-Servicing Check Out Tests, NOT performed",
            "Within Tolerance",
            "Within Tolerance but Limited",
            "Out of Tolerance"
          ]
        },
        {
          "type": "radiogroup",
          "name": "returned_condition-17",
          "title": "Returned Condition (One must be checked)",
          "choices": [
            "Within Tolerance",
            "Within Tolerance but Limited",
            "Out of Tolerance"
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "chemical_standards_used-15",
          "title": "Chemical Standards Used (ID#)",
          "columns": [
            {
              "name": "standard_id-2",
              "title": "ID#",
              "cellType": "text"
            },
            {
              "name": "lot_number-2",
              "title": "Lot Number",
              "cellType": "text"
            },
            {
              "name": "expiration_date-3",
              "title": "Expiration Date",
              "cellType": "text",
              "inputType": "date"
            }
          ],
          "rows": [
            "Hach Stab Cal 20 NTU Cut 2260135",
            "Hach Stab Cal 1 NTU Cut 24625953"
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "test_equipment_used-17",
          "title": "Test Equipment Used (ID#)",
          "columns": [
            {
              "name": "equipment_id-2",
              "title": "ID#",
              "cellType": "text"
            },
            {
              "name": "expiration_date-4",
              "title": "Expiration Date",
              "cellType": "text",
              "inputType": "date"
            }
          ],
          "rows": [
            "Temp Pen - Extech #1217179"
          ]
        },
        {
          "type": "text",
          "name": "environmental_conditions_temperature-3",
          "title": "Environmental Conditions - Temperature (°C)",
          "inputType": "number"
        },
        {
          "type": "text",
          "name": "environmental_conditions_humidity-3",
          "title": "Environmental Conditions - Humidity (%)",
          "inputType": "number"
        },
        {
          "type": "text",
          "name": "certified_by-17",
          "title": "Certified By"
        },
        {
          "type": "text",
          "name": "certification_date-17",
          "title": "Certification Date",
          "inputType": "date"
        },
        {
          "type": "text",
          "name": "signature-17",
          "title": "Signature"
        },
        {
          "type": "text",
          "name": "title-16",
          "title": "Title"
        }
      ]
    },
    {
      "name": "Instrument Performance-18",
      "elements": [
        {
          "type": "text",
          "name": "company_name-18",
          "title": "Company Name"
        },
        {
          "type": "text",
          "name": "account_number-18",
          "title": "Account Number"
        },
        {
          "type": "text",
          "name": "contract_number-18",
          "title": "Contract Number"
        },
        {
          "type": "text",
          "name": "certification_number-18",
          "title": "Certification Number"
        },
        {
          "type": "text",
          "name": "part_number-18",
          "title": "Part Number"
        },
        {
          "type": "text",
          "name": "serial_number-18",
          "title": "Serial Number"
        },
        {
          "type": "text",
          "name": "asset_tag-15",
          "title": "Asset Tag"
        },
        {
          "type": "panel",
          "name": "received_condition-18",
          "title": "Received Condition",
          "elements": [
            {
              "type": "radiogroup",
              "name": "received_condition_check-6",
              "title": "Select Condition",
              "choices": [
                "Pre-Servicing Check Out Tests, NOT performed",
                "Within Tolerance",
                "Within Tolerance but Limited",
                "Out of Tolerance"
              ]
            }
          ]
        },
        {
          "type": "panel",
          "name": "returned_condition-18",
          "title": "Returned Condition",
          "elements": [
            {
              "type": "radiogroup",
              "name": "returned_condition_check-6",
              "title": "Select Condition",
              "choices": [
                "Within Tolerance",
                "Within Tolerance but Limited",
                "Out of Tolerance"
              ]
            }
          ]
        },
        {
          "type": "text",
          "name": "chemical_standards_used-16",
          "title": "Chemical Standards Used (ID#)"
        },
        {
          "type": "text",
          "name": "test_equipment_used-18",
          "title": "Test Equipment Used (ID#)"
        },
        {
          "type": "text",
          "name": "temperature-12",
          "title": "Temperature (°C)",
          "inputType": "number"
        },
        {
          "type": "text",
          "name": "humidity-12",
          "title": "Humidity (%)",
          "inputType": "number"
        },
        {
          "type": "text",
          "name": "certified_by-18",
          "title": "Certified By"
        },
        {
          "type": "text",
          "name": "certification_date-18",
          "title": "Certification Date",
          "inputType": "date"
        },
        {
          "type": "text",
          "name": "signature-18",
          "title": "Signature"
        },
        {
          "type": "text",
          "name": "title-17",
          "title": "Title"
        }
      ]
    },
    {
      "name": "Instrument Performance-19",
      "elements": [
        {
          "type": "text",
          "name": "company_name-19",
          "title": "Company Name"
        },
        {
          "type": "text",
          "name": "account_number-19",
          "title": "Account Number"
        },
        {
          "type": "text",
          "name": "contract_number-19",
          "title": "Contract Number"
        },
        {
          "type": "text",
          "name": "certification_number-19",
          "title": "Certification Number"
        },
        {
          "type": "text",
          "name": "part_number-19",
          "title": "Part Number"
        },
        {
          "type": "text",
          "name": "serial_number-19",
          "title": "Serial Number"
        },
        {
          "type": "panel",
          "name": "received_condition-19",
          "title": "Received Condition",
          "elements": [
            {
              "type": "checkbox",
              "name": "received_condition_options-3",
              "title": "Select Condition",
              "choices": [
                "Pre-Servicing Check Out Tests, NOT performed",
                "Within Tolerance",
                "Within Tolerance but Limited",
                "Out of Tolerance"
              ],
              "showOtherItem": true
            }
          ]
        },
        {
          "type": "panel",
          "name": "returned_condition-19",
          "title": "Returned Condition",
          "elements": [
            {
              "type": "checkbox",
              "name": "returned_condition_options-3",
              "title": "Select Condition",
              "choices": [
                "Within Tolerance",
                "Within Tolerance but Limited",
                "Out of Tolerance"
              ],
              "showOtherItem": true
            }
          ]
        },
        {
          "type": "text",
          "name": "chemical_standards_used-17",
          "title": "Chemical Standards Used (ID#)"
        },
        {
          "type": "text",
          "name": "test_equipment_used-19",
          "title": "Test Equipment Used (ID#)"
        },
        {
          "type": "multipletext",
          "name": "environmental_conditions-5",
          "title": "Environmental Conditions",
          "items": [
            {
              "name": "temperature",
              "inputType": "number",
              "title": "Temperature (°C)"
            },
            {
              "name": "humidity",
              "inputType": "number",
              "title": "Humidity (%)"
            }
          ]
        },
        {
          "type": "text",
          "name": "certified_by-19",
          "title": "Certified By"
        },
        {
          "type": "text",
          "name": "certification_date-19",
          "title": "Certification Date"
        },
        {
          "type": "text",
          "name": "signature-19",
          "title": "Signature"
        },
        {
          "type": "text",
          "name": "title-18",
          "title": "Title"
        }
      ]
    },
    {
      "name": "Instrument Performance-20",
      "elements": [
        {
          "type": "text",
          "name": "company_name-20",
          "title": "Company Name"
        },
        {
          "type": "text",
          "name": "account_number-20",
          "title": "Account Number"
        },
        {
          "type": "text",
          "name": "contract_number-20",
          "title": "Contract Number"
        },
        {
          "type": "text",
          "name": "certification_number-20",
          "title": "Certification Number"
        },
        {
          "type": "text",
          "name": "part_number-20",
          "title": "Part Number"
        },
        {
          "type": "text",
          "name": "serial_number-20",
          "title": "Serial Number"
        },
        {
          "type": "text",
          "name": "asset_tag-16",
          "title": "Asset Tag"
        },
        {
          "type": "radiogroup",
          "name": "received_condition-20",
          "title": "Received Condition (One must be checked)",
          "choices": [
            "Pre-Servicing Check Out Tests, NOT performed",
            "Within Tolerance",
            "Within Tolerance but Limited",
            "Out of Tolerance"
          ]
        },
        {
          "type": "radiogroup",
          "name": "returned_condition-20",
          "title": "Returned Condition (One must be checked)",
          "choices": [
            "Within Tolerance",
            "Within Tolerance but Limited",
            "Out of Tolerance"
          ]
        },
        {
          "type": "text",
          "name": "chemical_standards_used-18",
          "title": "Chemical Standards Used (ID#)"
        },
        {
          "type": "multipletext",
          "name": "test_equipment_used-20",
          "title": "Test Equipment Used (ID#)",
          "items": [
            {
              "name": "equipment_1",
              "title": "Equipment 1"
            },
            {
              "name": "equipment_2",
              "title": "Equipment 2"
            }
          ]
        },
        {
          "type": "panel",
          "name": "environmental_conditions-6",
          "title": "Environmental Conditions",
          "elements": [
            {
              "type": "text",
              "name": "temperature-13",
              "title": "Temperature (°C)"
            },
            {
              "type": "text",
              "name": "humidity-13",
              "title": "Humidity (%)"
            }
          ]
        },
        {
          "type": "text",
          "name": "certified_by-20",
          "title": "Certified By"
        },
        {
          "type": "text",
          "name": "certification_date-20",
          "title": "Certification Date"
        },
        {
          "type": "text",
          "name": "signature-20",
          "title": "Signature"
        },
        {
          "type": "text",
          "name": "title-19",
          "title": "Title"
        }
      ]
    },
    {
      "name": "Instrument Performance-21",
      "elements": [
        {
          "type": "text",
          "name": "company_name-21",
          "title": "Company Name"
        },
        {
          "type": "text",
          "name": "account_number-21",
          "title": "Account Number"
        },
        {
          "type": "text",
          "name": "contract_number-21",
          "title": "Contract Number"
        },
        {
          "type": "text",
          "name": "certification_number-21",
          "title": "Certification Number"
        },
        {
          "type": "text",
          "name": "part_number-21",
          "title": "Part Number"
        },
        {
          "type": "text",
          "name": "serial_number-21",
          "title": "Serial Number"
        },
        {
          "type": "text",
          "name": "asset_tag-17",
          "title": "Asset Tag"
        },
        {
          "type": "panel",
          "name": "received_condition-21",
          "title": "Received Condition",
          "elements": [
            {
              "type": "checkbox",
              "name": "received_condition_options-4",
              "title": "Select Condition",
              "choices": [
                "Pre-Servicing Check Out Tests, NOT performed",
                "Within Tolerance",
                "Within Tolerance but Limited",
                "Out of Tolerance"
              ]
            }
          ]
        },
        {
          "type": "panel",
          "name": "returned_condition-21",
          "title": "Returned Condition",
          "elements": [
            {
              "type": "checkbox",
              "name": "returned_condition_options-4",
              "title": "Select Condition",
              "choices": [
                "Within Tolerance",
                "Within Tolerance but Limited",
                "Out of Tolerance"
              ]
            }
          ]
        },
        {
          "type": "text",
          "name": "chemical_standards_used-19",
          "title": "Chemical Standards Used (ID#)"
        },
        {
          "type": "text",
          "name": "test_equipment_used-21",
          "title": "Test Equipment Used (ID#)"
        },
        {
          "type": "multipletext",
          "name": "environmental_conditions-7",
          "title": "Environmental Conditions",
          "items": [
            {
              "name": "temperature",
              "inputType": "number",
              "title": "Temperature (°C)"
            },
            {
              "name": "humidity",
              "inputType": "number",
              "title": "Humidity (%)"
            }
          ]
        },
        {
          "type": "text",
          "name": "certified_by-21",
          "title": "Certified By"
        },
        {
          "type": "text",
          "name": "certification_date-21",
          "title": "Certification Date",
          "inputType": "date"
        },
        {
          "type": "text",
          "name": "signature-21",
          "title": "Signature"
        },
        {
          "type": "text",
          "name": "title-20",
          "title": "Title"
        }
      ]
    },
    {
      "name": "Instrument Performance-22",
      "elements": [
        {
          "type": "text",
          "name": "company_name-22",
          "title": "Company Name"
        },
        {
          "type": "text",
          "name": "account_number-22",
          "title": "Account Number"
        },
        {
          "type": "text",
          "name": "contract_number-22",
          "title": "Contract Number"
        },
        {
          "type": "text",
          "name": "certification_number-22",
          "title": "Certification Number"
        },
        {
          "type": "text",
          "name": "part_number-22",
          "title": "Part Number"
        },
        {
          "type": "text",
          "name": "serial_number-22",
          "title": "Serial Number"
        },
        {
          "type": "text",
          "name": "asset_tag-18",
          "title": "Asset Tag"
        },
        {
          "type": "panel",
          "name": "received_condition-22",
          "title": "Received Condition",
          "elements": [
            {
              "type": "checkbox",
              "name": "received_condition_options-5",
              "title": "Select Condition",
              "choices": [
                {
                  "value": "pre_servicing_check",
                  "text": "Pre-Servicing Check Out Tests, NOT performed"
                },
                {
                  "value": "within_tolerance",
                  "text": "Within Tolerance"
                },
                {
                  "value": "within_tolerance_limited",
                  "text": "Within Tolerance but Limited"
                },
                {
                  "value": "out_of_tolerance",
                  "text": "Out of Tolerance"
                }
              ],
              "showOtherItem": true
            }
          ]
        },
        {
          "type": "panel",
          "name": "returned_condition-22",
          "title": "Returned Condition",
          "elements": [
            {
              "type": "checkbox",
              "name": "returned_condition_options-5",
              "title": "Select Condition",
              "choices": [
                {
                  "value": "within_tolerance",
                  "text": "Within Tolerance"
                },
                {
                  "value": "within_tolerance_limited",
                  "text": "Within Tolerance but Limited"
                },
                {
                  "value": "out_of_tolerance",
                  "text": "Out of Tolerance"
                }
              ],
              "showOtherItem": true
            }
          ]
        },
        {
          "type": "text",
          "name": "chemical_standards_used-20",
          "title": "Chemical Standards Used (ID#)"
        },
        {
          "type": "text",
          "name": "test_equipment_used-22",
          "title": "Test Equipment Used (ID#)"
        },
        {
          "type": "text",
          "name": "temperature-14",
          "title": "Temperature (°C)"
        },
        {
          "type": "text",
          "name": "humidity-14",
          "title": "Humidity (%)"
        },
        {
          "type": "text",
          "name": "certified_by-22",
          "title": "Certified By"
        },
        {
          "type": "text",
          "name": "certification_date-22",
          "title": "Certification Date"
        },
        {
          "type": "text",
          "name": "signature-22",
          "title": "Signature"
        },
        {
          "type": "text",
          "name": "title-21",
          "title": "Title"
        }
      ]
    },
    {
      "name": "Instrument Performance-23",
      "elements": [
        {
          "type": "text",
          "name": "company_name-23",
          "title": "Company Name"
        },
        {
          "type": "text",
          "name": "account_number-23",
          "title": "Account Number"
        },
        {
          "type": "text",
          "name": "contract_number-23",
          "title": "Contract Number"
        },
        {
          "type": "text",
          "name": "certification_number-23",
          "title": "Certification Number"
        },
        {
          "type": "text",
          "name": "part_number-23",
          "title": "Part Number"
        },
        {
          "type": "text",
          "name": "serial_number-23",
          "title": "Serial Number"
        },
        {
          "type": "text",
          "name": "asset_tag-19",
          "title": "Asset Tag"
        },
        {
          "type": "radiogroup",
          "name": "received_condition-23",
          "title": "Received Condition",
          "choices": [
            "Pre-Servicing Check Out Tests, NOT performed",
            "Within Tolerance",
            "Within Tolerance but Limited",
            "Out of Tolerance"
          ]
        },
        {
          "type": "radiogroup",
          "name": "returned_condition-23",
          "title": "Returned Condition",
          "choices": [
            "Within Tolerance",
            "Within Tolerance but Limited",
            "Out of Tolerance"
          ]
        },
        {
          "type": "multipletext",
          "name": "chemical_standards-2",
          "title": "Chemical Standards Used",
          "items": [
            {
              "name": "standard_id",
              "title": "ID (Df)"
            },
            {
              "name": "standard_details",
              "title": "Details"
            }
          ]
        },
        {
          "type": "multipletext",
          "name": "test_equipment",
          "title": "Test Equipment Used",
          "items": [
            {
              "name": "equipment_id",
              "title": "ID (Df)"
            },
            {
              "name": "equipment_details",
              "title": "Details"
            }
          ]
        },
        {
          "type": "text",
          "name": "temperature-15",
          "title": "Temperature (°C)",
          "inputType": "number"
        },
        {
          "type": "text",
          "name": "humidity-15",
          "title": "Humidity (%)",
          "inputType": "number"
        },
        {
          "type": "text",
          "name": "certified_by-23",
          "title": "Certified By"
        },
        {
          "type": "text",
          "name": "certification_date-23",
          "title": "Certification Date"
        },
        {
          "type": "text",
          "name": "signature-23",
          "title": "Signature"
        },
        {
          "type": "text",
          "name": "title-22",
          "title": "Title"
        }
      ]
    },
    {
      "name": "Instrument Performance-24",
      "elements": [
        {
          "type": "text",
          "name": "company_name-24",
          "title": "Company Name"
        },
        {
          "type": "text",
          "name": "account_number-24",
          "title": "Account Number"
        },
        {
          "type": "text",
          "name": "contract_number-24",
          "title": "Contract Number"
        },
        {
          "type": "text",
          "name": "certification_number-24",
          "title": "Certification Number"
        },
        {
          "type": "text",
          "name": "part_number-24",
          "title": "Part Number"
        },
        {
          "type": "text",
          "name": "serial_number-24",
          "title": "Serial Number"
        },
        {
          "type": "text",
          "name": "asset_tag-20",
          "title": "Asset Tag"
        },
        {
          "type": "radiogroup",
          "name": "received_condition-24",
          "title": "Received Condition (One must be checked)",
          "choices": [
            "Pre-Servicing Check Out Tests, NOT performed",
            "Within Tolerance",
            "Within Tolerance but Limited",
            "Out of Tolerance"
          ]
        },
        {
          "type": "radiogroup",
          "name": "returned_condition-24",
          "title": "Returned Condition (One must be checked)",
          "choices": [
            "Within Tolerance",
            "Within Tolerance but Limited",
            "Out of Tolerance"
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "chemical_standards_used-21",
          "title": "Chemical Standards Used (ID#)",
          "columns": [
            {
              "name": "standard-2",
              "title": "Standard",
              "cellType": "text"
            },
            {
              "name": "lot-3",
              "title": "Lot",
              "cellType": "text"
            },
            {
              "name": "expiration-3",
              "title": "Expiration",
              "cellType": "text",
              "inputType": "date"
            }
          ],
          "rows": [
            "Hach Stabl Cal Set Cat# 259695,",
            "Dionized Water Cat#",
            "Organic Free Water 500 ml."
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "test_equipment_used-23",
          "title": "Test Equipment Used (ID#)",
          "columns": [
            {
              "name": "equipment-2",
              "title": "Equipment",
              "cellType": "text"
            },
            {
              "name": "expiration-4",
              "title": "Expiration",
              "cellType": "text",
              "inputType": "date"
            }
          ],
          "rows": [
            "Temp Pro - Etech #121719"
          ]
        },
        {
          "type": "multipletext",
          "name": "environmental_conditions-8",
          "title": "Environmental Conditions",
          "items": [
            {
              "name": "temperature",
              "inputType": "number",
              "title": "Temperature (°C)"
            },
            {
              "name": "humidity",
              "inputType": "number",
              "title": "Humidity (%)"
            }
          ]
        },
        {
          "type": "text",
          "name": "certified_by-24",
          "title": "Certified By"
        },
        {
          "type": "text",
          "name": "certification_date-24",
          "title": "Certification Date",
          "inputType": "date"
        },
        {
          "type": "text",
          "name": "signature-24",
          "title": "Signature"
        },
        {
          "type": "text",
          "name": "title-23",
          "title": "Title"
        }
      ]
    },
    {
      "name": "Instrument Performance-25",
      "elements": [
        {
          "type": "text",
          "name": "company_name-25",
          "title": "Company Name"
        },
        {
          "type": "text",
          "name": "account_number-25",
          "title": "Account Number"
        },
        {
          "type": "text",
          "name": "contract_number-25",
          "title": "Contract Number"
        },
        {
          "type": "text",
          "name": "certification_number-25",
          "title": "Certification Number"
        },
        {
          "type": "text",
          "name": "part_number-25",
          "title": "Part Number"
        },
        {
          "type": "text",
          "name": "serial_number-25",
          "title": "Serial Number"
        },
        {
          "type": "text",
          "name": "asset_tag-21",
          "title": "Asset Tag"
        },
        {
          "type": "radiogroup",
          "name": "received_condition-25",
          "title": "Received Condition",
          "choices": [
            "Pre-Servicing Check Out Tests, NOT performed",
            "Within Tolerance",
            "Within Tolerance but Limited",
            "Out of Tolerance"
          ]
        },
        {
          "type": "radiogroup",
          "name": "returned_condition-25",
          "title": "Returned Condition",
          "choices": [
            "Within Tolerance",
            "Within Tolerance but Limited",
            "Out of Tolerance"
          ]
        },
        {
          "type": "text",
          "name": "chemical_standards_used-22",
          "title": "Chemical Standards Used (ID#)"
        },
        {
          "type": "text",
          "name": "test_equipment_used-24",
          "title": "Test Equipment Used (ID#)"
        },
        {
          "type": "text",
          "name": "temperature-16",
          "title": "Temperature (°C)",
          "inputType": "number"
        },
        {
          "type": "text",
          "name": "humidity-16",
          "title": "Humidity (%)",
          "inputType": "number"
        },
        {
          "type": "text",
          "name": "certified_by-25",
          "title": "Certified By"
        },
        {
          "type": "text",
          "name": "certification_date-25",
          "title": "Certification Date",
          "inputType": "date"
        },
        {
          "type": "text",
          "name": "signature-25",
          "title": "Signature"
        },
        {
          "type": "text",
          "name": "title-24",
          "title": "Title"
        }
      ]
    }
  ]
}