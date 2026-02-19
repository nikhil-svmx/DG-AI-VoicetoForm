export const first = {
  "pages": [
    {
      "name": "Service Radiation QC Document",
      "elements": [
        {
          "type": "text",
          "name": "machine_serial_number",
          "title": "Machine Serial Number"
        },
        {
          "type": "text",
          "name": "detector_test_equipment_id",
          "title": "Detector Test Equip ID"
        },
        {
          "type": "text",
          "name": "cal_due_date",
          "title": "Cal Due Date"
        },
        {
          "type": "text",
          "name": "base_test_equipment_id",
          "title": "Base Test Equip ID"
        },
        {
          "type": "matrixdropdown",
          "name": "manual_mode_30pps",
          "title": "Manual Mode 30PPS @ Detector",
          "columns": [
            {
              "name": "measured_kv",
              "title": "Measured kV",
              "cellType": "text"
            },
            {
              "name": "measured_ugy_s",
              "title": "Measured µGy/s",
              "cellType": "text"
            },
            {
              "name": "range_ugy_s",
              "title": "Range (µGy/s)",
              "cellType": "text"
            }
          ],
          "rows": [
            "56 kV",
            "66 kV",
            "75 kV",
            "78 kV"
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "displayed_akr_deviation",
          "title": "Displayed AKR Deviation",
          "columns": [
            {
              "name": "adult_filtered_akr",
              "title": "Adult Filtered (Cu)",
              "cellType": "text"
            },
            {
              "name": "pediatric_filtered_akr",
              "title": "Pediatric - Filtered (Cu)",
              "cellType": "text"
            },
            {
              "name": "acceptable_range",
              "title": "Acceptable Range %",
              "cellType": "text"
            }
          ],
          "rows": [
            {
              "value": "30PPS_78kV",
              "text": "30PPS, 78 kV"
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "results",
          "title": "Results",
          "choices": [
            "PASS",
            "FAIL"
          ]
        },
        {
          "type": "text",
          "name": "tested_by",
          "title": "Tested By"
        },
        {
          "type": "text",
          "name": "date",
          "title": "Date"
        }
      ]
    }
  ]
};

export const second = {
  "pages": [
    {
      "name": "Operational Maintenance Report",
      "elements": [
        {
          "type": "text",
          "name": "technician",
          "title": "Services Performed By:"
        },
        {
          "type": "text",
          "name": "tech_id",
          "title": "Tech ID:"
        },
        {
          "type": "text",
          "name": "branch",
          "title": "Branch #:"
        },
        {
          "type": "text",
          "name": "service_order_number",
          "title": "Service Order Number:"
        },
        {
          "type": "text",
          "name": "customer",
          "title": "Customer:"
        },
        {
          "type": "text",
          "name": "po_number",
          "title": "PO#:"
        },
        {
          "type": "text",
          "name": "date_of_service",
          "title": "Date of Service:",
          "inputType": "date"
        },
        {
          "type": "text",
          "name": "manufacturer",
          "title": "Manufacturer:"
        },
        {
          "type": "text",
          "name": "model_number",
          "title": "Model Number:"
        },
        {
          "type": "text",
          "name": "serial_number",
          "title": "Serial Number:"
        },
        {
          "type": "text",
          "name": "hour_meter_reading",
          "title": "Hour Meter Reading:"
        },
        {
          "type": "checkbox",
          "name": "services_performed",
          "title": "Services Performed:",
          "choices": [
            "Cleaned Truck",
            "Chassis Lubrication",
            "Hydraulic Filters Replaced",
            "Engine Oil Replaced",
            "Air Filter(s) Replaced",
            "Safety Inspection"
          ]
        },
        {
          "type": "panel",
          "name": "recommended_maintenance_procedures",
          "title": "Recommended Maintenance Procedures",
          "elements": [
            {
              "type": "matrixdropdown",
              "name": "maintenance_procedures",
              "title": "Class 4 & 5 Forklift Trucks | LPG, Diesel, Gasoline, CNG Pneumatic Tire & Cushion Tire Sit-Down Internal Combustion Lift Trucks",
              "columns": [
                {
                  "name": "ok",
                  "title": "OK",
                  "cellType": "boolean"
                },
                {
                  "name": "fit",
                  "title": "FIT",
                  "cellType": "boolean"
                },
                {
                  "name": "rep",
                  "title": "REP",
                  "cellType": "boolean"
                }
              ],
              "rows": [
                "1. Interior & Exterior Inspection",
                "2. Safety Checks & Data Plate",
                "3. Dash Boards / Covers / Pedals / Mirrors",
                "4. Load / Basket Restraints",
                "5. Seat / Seat Cushions / Hip Restraints",
                "6. Seat Belt",
                "7. Operator Manual",
                "8. Engine Oil (Before Service)",
                "9. Transmission Oil (Before Service)",
                "10. Engine Coolant Level (Before Service)",
                "11. Water Pump",
                "12. Drive Belts",
                "13. Transmission Filter",
                "14. Engine Valve Train",
                "15. Engine & Transmission Leaks",
                "16. Lift Cylinder",
                "17. LPG Cylinder & Mounting",
                "18. Forklift Hydraulic & Hosing",
                "19. Starter Motor",
                "20. Exhaust System Condition",
                "21. Engine / Transmission Oil Leak Precursors"
              ]
            }
          ]
        },
        {
          "type": "text",
          "name": "major_safety_concerns",
          "title": "Major Safety Concerns that Require Immediate Attention:"
        },
        {
          "type": "text",
          "name": "customer_acceptance",
          "title": "Customer Acceptance"
        },
        {
          "type": "text",
          "name": "date",
          "title": "Date:",
          "inputType": "date"
        },
        {
          "type": "text",
          "name": "print_name",
          "title": "Print Name:"
        },
        {
          "type": "text",
          "name": "tech_phone_number",
          "title": "Technician Phone Number:"
        },
        {
          "type": "text",
          "name": "cust_phone_number",
          "title": "Customer Phone Number:"
        },
        {
          "type": "text",
          "name": "email_address",
          "title": "E-mail Address:"
        }
      ]
    }
  ]
};

export const third = {
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

export const fourth = {
  "pages": [
    {
      "name": "Feedback",
      "elements": [
        {
          "type": "matrixdropdown",
          "name": "inputTable",
          "title": "Input Table Questions",
          "columns": [
            {
              "name": "Not Satisfied"
            },
            {
              "name": "Somewhat Satisfied"
            },
            {
              "name": "Satisfied"
            },
            {
              "name": "Any thoughts?"
            }
          ],
          "rows": [
            "Service Quality",
            "Cleanliness",
            "Responsiveness",
            "Friendliness"
          ]
        },
        {
          "type": "multipletext",
          "name": "fullName",
          "title": "Full Name",
          "items": [
            {
              "name": "firstName",
              "title": "First Name"
            },
            {
              "name": "lastName",
              "title": "Last Name"
            }
          ]
        },
        {
          "type": "multipletext",
          "name": "address",
          "title": "Address Questions",
          "items": [
            {
              "name": "streetAddress",
              "title": "Street Address"
            },
            {
              "name": "streetAddressLine2",
              "title": "Street Address Line 2"
            },
            {
              "name": "city",
              "title": "City"
            },
            {
              "name": "stateProvince",
              "title": "State / Province"
            },
            {
              "name": "postalZipCode",
              "title": "Postal / Zip Code"
            }
          ]
        },
        {
          "type": "signaturepad",
          "name": "signature",
          "title": "Signature Questions"
        }
      ]
    }
  ]
};

export const fifth = {
  "pages": [
    {
      "name": "Safe to Perform - Risk and Impact",
      "elements": [
        {
          "type": "text",
          "name": "name_of_person_completing_form",
          "title": "Name of person completing form"
        },
        {
          "type": "text",
          "name": "title",
          "title": "Title"
        },
        {
          "type": "text",
          "name": "scope_of_work",
          "title": "Scope of work"
        },
        {
          "type": "panel",
          "name": "scope_of_work_panel",
          "title": "1. Scope of Work:",
          "elements": [
            {
              "type": "checkbox",
              "name": "confirm_scope_with_customer",
              "title": "Confirm Scope of Work with customer. If there are deviations, Stop Work and perform Change Management.",
              "choices": [
                "Yes",
                "No"
              ]
            },
            {
              "type": "checkbox",
              "name": "confirm_operational_procedures",
              "title": "Confirm operational procedures match the scope of work.",
              "choices": [
                {
                  "value": "Item 1",
                  "text": "Yes"
                },
                {
                  "value": "Item 2",
                  "text": "No"
                }
              ]
            },
            {
              "type": "checkbox",
              "name": "confirm_service_provided",
              "title": "Confirm team understands procedure requirements.",
              "choices": [
                "Yes",
                "No"
              ]
            },
            {
              "type": "checkbox",
              "name": "confirm_risk_assessments",
              "title": "Confirm risk assessments match the service provided and confirm in place bottom of page for additional hazard identification and controls.",
              "choices": [
                "Yes",
                "No"
              ]
            },
            {
              "type": "checkbox",
              "name": "confirm_energy_isolation",
              "title": "Confirm the sites procedure on Energy Isolation (LOTO) and Baker Hughes employees roles.",
              "choices": [
                "Yes",
                "No"
              ]
            },
            {
              "type": "checkbox",
              "name": "confirm_equipment_and_tooling",
              "title": "Confirm if equipment and tooling rig up / make up activities post additional hazards such as lifts, drops, spills, exposure, projectiles, or pushing and pulling.",
              "choices": [
                "Yes",
                "No"
              ]
            },
            {
              "type": "checkbox",
              "name": "confirm_site_compliance",
              "title": "Confirm compliance with the site's process for work activities that require a Permit.",
              "choices": [
                "Yes",
                "No"
              ]
            }
          ]
        },
        {
          "type": "panel",
          "name": "communication_panel",
          "title": "3. Communication:",
          "elements": [
            {
              "type": "checkbox",
              "name": "confirm_simultaneous_operations",
              "title": "Confirm with customer planned Simultaneous operations.",
              "choices": [
                "Yes",
                "No"
              ]
            },
            {
              "type": "checkbox",
              "name": "identify_points_of_contact",
              "title": "Identify points of contact for the location.",
              "choices": [
                "Yes",
                "No"
              ]
            },
            {
              "type": "checkbox",
              "name": "confirm_emergency_response_plan",
              "title": "Confirm briefing of the location's Emergency Response plan.",
              "choices": [
                "Yes",
                "No"
              ]
            },
            {
              "type": "checkbox",
              "name": "confirm_hazardous_locations",
              "title": "Confirm site's Hazardous(Classified) locations.",
              "choices": [
                "Yes",
                "No"
              ]
            }
          ]
        },
        {
          "type": "panel",
          "name": "loss_of_integrity_panel",
          "title": "4. Loss of Primary Containment or Loss of Mechanical Integrity:",
          "elements": [
            {
              "type": "checkbox",
              "name": "confirm_physical_barriers",
              "title": "Confirm required physical or equipment barriers are in place, including mechanical, such as pressure-control equipment, and non-mechanical, such as sealants, set-cement and hydraulic pressure.",
              "choices": [
                "Yes",
                "No"
              ]
            },
            {
              "type": "checkbox",
              "name": "confirm_alarms_or_safeguards",
              "title": "Confirm alarms or safeguards are in place and settings are compliant to the approved job plan.",
              "choices": [
                "Yes",
                "No"
              ]
            }
          ]
        },
        {
          "type": "panel",
          "name": "line_of_fire_panel",
          "title": "5. Line of Fire:",
          "elements": [
            {
              "type": "checkbox",
              "name": "confirm_safe_distance",
              "title": "Confirm a safe distance for personnel's work or staging area from vehicle travel path.",
              "choices": [
                "Yes",
                "No"
              ]
            },
            {
              "type": "checkbox",
              "name": "confirm_parking_brakes",
              "title": "Confirm vehicles parking brakes are set and wheels are chocked.",
              "choices": [
                "Yes",
                "No"
              ]
            },
            {
              "type": "checkbox",
              "name": "confirm_restricted_areas",
              "title": "Confirm site's Restricted Access Zones and No Entry Zones.",
              "choices": [
                "Yes",
                "No"
              ]
            }
          ]
        },
        {
          "type": "panel",
          "name": "personnel_safety_panel",
          "title": "6. Personnel Safety:",
          "elements": [
            {
              "type": "checkbox",
              "name": "confirm_fatigue_management",
              "title": "Confirm Baker Hughes Personnel are following the fatigue management guidelines; if personnel show signs of fatigue, Stop work and notify Supervisor.",
              "choices": [
                "Yes",
                "No"
              ]
            },
            {
              "type": "checkbox",
              "name": "confirm_environmental_conditions",
              "title": "Confirm Environmental conditions, such as weather or lightning, do not present a hazard during the job.",
              "choices": [
                "Yes",
                "No"
              ]
            },
            {
              "type": "checkbox",
              "name": "identify_uncontrolled_hazards",
              "title": "Before starting work, the job lead shall identify and document uncontrolled hazards and their recommended controls on page 2 of this form.",
              "choices": [
                "Yes",
                "No"
              ]
            }
          ]
        },
        {
          "type": "panel",
          "name": "additional_assurance_panel",
          "title": "7. Additional Assurance:",
          "elements": [
            {
              "type": "comment",
              "name": "additional_assurance_other",
              "title": "Other:"
            }
          ]
        },
        {
          "type": "panel",
          "name": "additional_comments_panel",
          "title": "8. Additional Comments:",
          "elements": [
            {
              "type": "comment",
              "name": "additional_comments",
              "title": "Additional Comments:"
            }
          ]
        }
      ]
    },
    {
      "name": "Job Lead Sign-off",
      "elements": [
        {
          "type": "text",
          "name": "job_lead_print_sign",
          "title": "Job Lead (Print and Sign)"
        },
        {
          "type": "text",
          "name": "names_initials_all_crew_members_present",
          "title": "Names and Initials of All Crew Members Present"
        },
        {
          "type": "comment",
          "name": "completion_of_work",
          "title": "Completion of Work"
        },
        {
          "type": "text",
          "name": "initials",
          "title": "Initials"
        },
        {
          "type": "text",
          "name": "date",
          "title": "Date",
          "inputType": "date"
        }
      ]
    },
    {
      "name": "Risk Assessments",
      "elements": [
        {
          "type": "matrixdropdown",
          "name": "risk_assessments",
          "title": "Risk Assessments",
          "columns": [
            {
              "name": "hazards",
              "title": "Hazards",
              "cellType": "text"
            },
            {
              "name": "controls",
              "title": "Controls",
              "cellType": "text"
            },
            {
              "name": "assigned_persons",
              "title": "Assigned Persons",
              "cellType": "text"
            }
          ],
          "rows": [
            {
              "value": "sequence_of_job_steps",
              "text": "Sequence Of Job Steps"
            }
          ]
        }
      ]
    },
    {
      "name": "LOTO Procedure",
      "elements": [
        {
          "type": "matrix",
          "name": "loto_procedure",
          "title": "LOTO Procedure",
          "columns": [
            "Source",
            "Magnitude (psi, Volta)",
            "Actions to De-energize",
            "Energy Isolation Device",
            "Actions to verify Zero Energy"
          ],
          "rows": [
            {
              "value": "energy_type",
              "text": "Energy Type"
            }
          ]
        }
      ]
    }
  ]
};

export const sixth = {
  "pages": [
    {
      "name": "Job Information",
      "elements": [
        {
          "type": "text",
          "name": "wo_job_task",
          "title": "WO/Job/Task:"
        },
        {
          "type": "text",
          "name": "date",
          "title": "Date:",
          "inputType": "date"
        },
        {
          "type": "text",
          "name": "work_location",
          "title": "Work Location:"
        },
        {
          "type": "radiogroup",
          "name": "employee_status",
          "title": "Employee(s):",
          "choices": [
            "New",
            "Revised"
          ]
        },
        {
          "type": "text",
          "name": "hazardous_part",
          "title": "What is the most hazardous part of this job and what are you going to do to control the hazard?"
        },
        {
          "type": "checkbox",
          "name": "training",
          "title": "Are you properly trained to complete these tasks?",
          "choices": [
            "SSE",
            "Mentor"
          ]
        },
        {
          "type": "text",
          "name": "completion_needs",
          "title": "What do you need to ensure this job is completed incident and injury free?"
        },
        {
          "type": "text",
          "name": "conditions_changes",
          "title": "What conditions, job changes, or distractions could call for the need to use Stop Work Authority?"
        }
      ]
    },
    {
      "name": "Job Steps and Hazards",
      "elements": [
        {
          "type": "matrixdropdown",
          "name": "job_steps_hazards",
          "title": "Sequence of Job Steps, Potential Hazard(s), Recommended Action/Procedure",
          "columns": [
            {
              "name": "potential_hazard",
              "title": "Potential Hazard(s)",
              "cellType": "text"
            },
            {
              "name": "recommended_action",
              "title": "Recommended Action/Procedure",
              "cellType": "text"
            }
          ],
          "rows": [
            {
              "value": "step1",
              "text": "Step 1"
            },
            {
              "value": "step2",
              "text": "Step 2"
            },
            {
              "value": "step3",
              "text": "Step 3"
            }
          ]
        }
      ]
    },
    {
      "name": "Personal Protective Equipment",
      "elements": [
        {
          "type": "checkbox",
          "name": "personal_protective_equipment",
          "title": "Additional Personal Protective Equipment Required",
          "choices": [
            "Face shield",
            "Chemical goggles",
            "Chemical protective clothing",
            "Rubber boots",
            "Chemical resistant gloves",
            "Leather gloves",
            "Cut resistant gloves",
            "Respiratory protection",
            "Arm protection",
            "Hearing protection",
            "Fall protection",
            "Other"
          ],
          "showOtherItem": true
        },
        {
          "type": "checkbox",
          "name": "required_permits",
          "title": "Required Permits/Safe Work Plans",
          "choices": [
            "General SWP",
            "Hot Work Permit",
            "Confined Space Entry",
            "Excavation and Trenching",
            "Lift Plan/Crane Ops",
            "Work in proximity to Overhead Conductors",
            "Simultaneous Ops"
          ]
        },
        {
          "type": "boolean",
          "name": "gas_detection_equipment",
          "title": "Gas Detection Equipment Needed"
        },
        {
          "type": "checkbox",
          "name": "hazardous_substances",
          "title": "List hazardous substances MSDS reviewed?",
          "choices": [
            "Yes",
            "N/A"
          ]
        }
      ]
    },
    {
      "name": "Site Control and Environmental Conditions",
      "elements": [
        {
          "type": "checkbox",
          "name": "site_control",
          "title": "Site Control",
          "choices": [
            "Barricades",
            "Post signs",
            "Caution tape",
            "Designated area for vehicles",
            "Heavy equipment spotter",
            "Establish meet & greet process",
            "Other"
          ],
          "showOtherItem": true
        },
        {
          "type": "text",
          "name": "weather",
          "title": "Weather:"
        },
        {
          "type": "text",
          "name": "terrain",
          "title": "Terrain:"
        },
        {
          "type": "checkbox",
          "name": "hazardous_energy_control",
          "title": "Hazardous Energy Control",
          "choices": [
            "LO/TO checklist complete",
            "LO/TO devices in place",
            "Energy isolation verified",
            "Electrical",
            "Hydraulic",
            "Pneumatic",
            "Mechanical",
            "Thermal",
            "Chemical",
            "Stored Energy",
            "Line of Fire"
          ]
        },
        {
          "type": "checkbox",
          "name": "ergonomic_hazards",
          "title": "Ergonomic Hazards:",
          "choices": [
            "Repetition",
            "Forceful exertion",
            "Awkward postures",
            "Contact stress",
            "Vibration",
            "Work area design"
          ]
        }
      ]
    },
    {
      "name": "Tools and Equipment",
      "elements": [
        {
          "type": "boolean",
          "name": "tools_inspection_complete",
          "title": "Pre-use inspection complete"
        },
        {
          "type": "text",
          "name": "tools_equipment",
          "title": "List tools/equipment being used:"
        }
      ]
    },
    {
      "name": "Work Site Diagram",
      "elements": [
        {
          "type": "comment",
          "name": "work_site_diagram",
          "title": "Work Site Diagram – include equipment set-up, evacuation route, assembly area, and identified hazards"
        },
        {
          "type": "text",
          "name": "jsa_reviewed_by",
          "title": "JSA Reviewed By:"
        }
      ]
    }
  ]
};

export const seventh = {
  "pages": [
    {
      "name": "General Information",
      "elements": [
        {
          "type": "text",
          "name": "date",
          "title": "Date",
          "inputType": "date"
        },
        {
          "type": "text",
          "name": "traction",
          "title": "Traction #"
        },
        {
          "type": "text",
          "name": "windFarm",
          "title": "Wind Farm"
        },
        {
          "type": "text",
          "name": "tower",
          "title": "Tower #"
        },
        {
          "type": "text",
          "name": "serviceLift",
          "title": "Service Lift"
        },
        {
          "type": "text",
          "name": "serial",
          "title": "Serial #"
        },
        {
          "type": "text",
          "name": "hours",
          "title": "Hours",
          "inputType": "number"
        },
        {
          "type": "text",
          "name": "techs",
          "title": "Techs"
        }
      ]
    },
    {
      "name": "Cabin Inspection",
      "elements": [
        {
          "type": "checkbox",
          "name": "cabinCondition",
          "title": "Is the cabin free of damage, properly assembled, and clean?",
          "choices": [
            "Yes",
            "No"
          ]
        },
        {
          "type": "checkbox",
          "name": "fastenersAssembly",
          "title": "Are all fasteners tight in the cabin and cabin assembly?",
          "choices": [
            "Yes",
            "No"
          ]
        },
        {
          "type": "checkbox",
          "name": "stepsCondition",
          "title": "Are all steps and handles in good condition, free of sharp edges, and properly fastened?",
          "choices": [
            "Yes",
            "No"
          ]
        },
        {
          "type": "checkbox",
          "name": "cabinDoors",
          "title": "Are the cabin doors correctly mounted and open and close correctly?",
          "choices": [
            "Yes",
            "No"
          ]
        },
        {
          "type": "checkbox",
          "name": "mechanicalLock",
          "title": "Does the mechanical lock system of the door function correctly?",
          "choices": [
            "Yes",
            "No"
          ]
        },
        {
          "type": "checkbox",
          "name": "anchorPoints",
          "title": "Are all anchor points present and free from damage?",
          "choices": [
            "Yes",
            "No"
          ]
        },
        {
          "type": "checkbox",
          "name": "anchorTorque",
          "title": "Are all anchor points torqued to 15Nm?",
          "choices": [
            "Yes",
            "No"
          ]
        },
        {
          "type": "checkbox",
          "name": "topObstructionDevice",
          "title": "Is the top obstruction device present, correctly assembled, free moving and damage free?",
          "choices": [
            "Yes",
            "No"
          ]
        },
        {
          "type": "checkbox",
          "name": "bottomObstructionDevice",
          "title": "Is the bottom obstruction device present, correctly assembled, free moving and damage free?",
          "choices": [
            "Yes",
            "No"
          ]
        },
        {
          "type": "checkbox",
          "name": "cabinControl",
          "title": "Is the cabin control present, correctly assembled, free moving, and free of damage?",
          "choices": [
            "Yes",
            "No"
          ]
        },
        {
          "type": "checkbox",
          "name": "hatchPresent",
          "title": "Does each switch of the cabin roof working properly?",
          "choices": [
            "Yes",
            "No"
          ]
        },
        {
          "type": "checkbox",
          "name": "hatchOpen",
          "title": "When the hatch is open, is it movement stopped?",
          "choices": [
            "Yes",
            "No"
          ]
        },
        {
          "type": "checkbox",
          "name": "bottomObstructionTravel",
          "title": "When the bottom obstruction device is pressed, does it prevent downward travel of the lift?",
          "choices": [
            "Yes",
            "No"
          ]
        },
        {
          "type": "checkbox",
          "name": "cableLength",
          "title": "Are the tailouts of the bottom obstruction device correctly fixed and cables of same length?",
          "choices": [
            "Yes",
            "No"
          ]
        },
        {
          "type": "checkbox",
          "name": "bottomHatch",
          "title": "When the bottom hatch is open, is lift movement stopped?",
          "choices": [
            "Yes",
            "No"
          ]
        },
        {
          "type": "checkbox",
          "name": "emergencyLimitSwitch",
          "title": "Is the emergency limit switch (S13) correctly adjusted regarding the top limit plate?",
          "choices": [
            "Yes",
            "No"
          ]
        },
        {
          "type": "checkbox",
          "name": "bottomLimitPlate",
          "title": "Is the bottom limit plate present, correctly assembled, bolts tight, and free of damage?",
          "choices": [
            "Yes",
            "No"
          ]
        },
        {
          "type": "checkbox",
          "name": "guideRollers",
          "title": "Are all ten (10) of the guide rollers present and free from corrosion or damage?",
          "choices": [
            "Yes",
            "No"
          ]
        },
        {
          "type": "checkbox",
          "name": "guideRollersDimension",
          "title": "Are all counter guide rollers within dimensional tolerance (48-50mm)?",
          "choices": [
            "Yes",
            "No"
          ]
        },
        {
          "type": "checkbox",
          "name": "antiDerailmentBrackets",
          "title": "Are both anti-derailment brackets installed within 4mm of the ladder?",
          "choices": [
            "Yes",
            "No"
          ]
        },
        {
          "type": "checkbox",
          "name": "inductiveSensor",
          "title": "Is the inductive sensor correctly installed and functioning (illuminated)?",
          "choices": [
            "Yes",
            "No"
          ]
        },
        {
          "type": "checkbox",
          "name": "clearAirBrackets",
          "title": "Does the lift clear all brackets, cables, fall arrest systems, and ladder parts the entire tower?",
          "choices": [
            "Yes",
            "No"
          ]
        }
      ]
    },
    {
      "name": "Traction System",
      "elements": [
        {
          "type": "radiogroup",
          "name": "top_pinion_engaged",
          "title": "Is the top pinion centered on the rack and teeth correctly engaged?"
        },
        {
          "type": "radiogroup",
          "name": "top_pinion_greased",
          "title": "Is the pinion of the top motor correctly greased without any accumulation of grease/metal flake mix?"
        },
        {
          "type": "radiogroup",
          "name": "top_motor_brake_function",
          "title": "Does the top motor brake function correctly?"
        },
        {
          "type": "multipletext",
          "name": "top_motor_brake_spec",
          "title": "Is the air gap of the top motor brake and the pad thickness with specification? (0.3-0.5mm)",
          "items": [
            {
              "name": "air_gap",
              "title": "Air Gap"
            },
            {
              "name": "pad_thickness",
              "title": "Pad Thickness"
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "gearbox_top_motor_leaks",
          "title": "Is the gearbox of the top motor free of oil leaks?"
        },
        {
          "type": "radiogroup",
          "name": "bottom_pinion_engaged",
          "title": "Is the bottom pinion centered on the rack and teeth correctly engaged?"
        },
        {
          "type": "radiogroup",
          "name": "bottom_pinion_greased",
          "title": "Is the pinion of the bottom motor correctly greased without any accumulation of grease/metal flake mix?"
        },
        {
          "type": "radiogroup",
          "name": "bottom_motor_brake_function",
          "title": "Does the bottom motor brake function correctly?"
        },
        {
          "type": "multipletext",
          "name": "bottom_motor_brake_spec",
          "title": "Is the air gap of the bottom motor brake and the pad thickness with specification? (0.3-0.5mm)",
          "items": [
            {
              "name": "air_gap",
              "title": "Air Gap"
            },
            {
              "name": "pad_thickness",
              "title": "Pad Thickness"
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "gearbox_bottom_motor_leaks",
          "title": "Is the gearbox of the bottom motor free of oil leaks?"
        }
      ]
    },
    {
      "name": "Mechanical Stops",
      "elements": [
        {
          "type": "radiogroup",
          "name": "mechanical_stop_installed",
          "title": "Is the top mechanical stop present, installed correctly, free of damage, level, and ladder attaching bolts marked and torqued to 15Nm?"
        },
        {
          "type": "radiogroup",
          "name": "bottom_mechanical_stop_installed",
          "title": "Is the bottom mechanical stop present, installed correctly free of damage, level, and ladder attaching bolts marked and torqued to 15Nm?"
        }
      ]
    },
    {
      "name": "Cabin Control Box",
      "elements": [
        {
          "type": "radiogroup",
          "name": "cabin_control_fastened",
          "title": "Is the cabin control box correctly fastened, clean, and free of visible damage?"
        },
        {
          "type": "radiogroup",
          "name": "switches_connected",
          "title": "Are all switches connected in the correct location on the control box?"
        },
        {
          "type": "radiogroup",
          "name": "switch_function_correct",
          "title": "Does the On/Off switch function correctly?"
        },
        {
          "type": "radiogroup",
          "name": "door_open_illuminate",
          "title": "Does the red fault light illuminate when the door is open?"
        },
        {
          "type": "radiogroup",
          "name": "e_stop_pressed",
          "title": "Does the red fault light illuminate when the E-stop is pressed?"
        },
        {
          "type": "radiogroup",
          "name": "hatch_open_illuminate",
          "title": "Does the red fault light illuminate when the hatch is open?"
        },
        {
          "type": "radiogroup",
          "name": "emergency_switch_engaged",
          "title": "Does the red fault light illuminate when the emergency limit switch is engaged?"
        },
        {
          "type": "radiogroup",
          "name": "cabin_off_pressed",
          "title": "Does the red fault light illuminate when cabin roof is pressed?"
        },
        {
          "type": "radiogroup",
          "name": "cabin_position_switch",
          "title": "Does the red fault light illuminate when the cabin on/off switch is in the off position?"
        },
        {
          "type": "radiogroup",
          "name": "up_button_move",
          "title": "Does pressing the up button move the lift in the upwards and illuminate the green Up light of the external control boxes?"
        },
        {
          "type": "radiogroup",
          "name": "down_button_move",
          "title": "Does pressing the down button move the lift downwards and illuminate the green Down light of the external control boxes?"
        },
        {
          "type": "radiogroup",
          "name": "e_stop_button_move",
          "title": "Does pressing the E-stop button prevent the lift from moving up or down?"
        },
        {
          "type": "radiogroup",
          "name": "platform_light_illuminate",
          "title": "Does the Platform light illuminate when the lift is at the top and bottom platforms?"
        },
        {
          "type": "radiogroup",
          "name": "all_switches_present",
          "title": "Are rollers present on all switches?"
        },
        {
          "type": "radiogroup",
          "name": "rollers_adjusted",
          "title": "Are all switches adjusted so that the roller is in the center of the contact surface?"
        },
        {
          "type": "radiogroup",
          "name": "cells_brand",
          "title": "Are the load cells and the weighing module the same brand?"
        },
        {
          "type": "multipletext",
          "name": "cabin_loads",
          "title": "When a load of 250kg is placed on the cabin floor, is the lift able to move upwards and downwards?",
          "items": [
            {
              "name": "load_250kg",
              "title": "250kg Load"
            },
            {
              "name": "load_315kg",
              "title": "315kg Load"
            }
          ]
        }
      ]
    },
    {
      "name": "Top Platform Control Box",
      "elements": [
        {
          "type": "boolean",
          "name": "topPlatformControlBoxCorrectlyMounted",
          "title": "Is the Top Platform Control box correctly mounted, free of damage, and clean?"
        },
        {
          "type": "boolean",
          "name": "directionsLightsIlluminatedCorrectly",
          "title": "Do both of the directions lights illuminate correctly for lift travel direction?"
        },
        {
          "type": "boolean",
          "name": "greenReadyLightIlluminated",
          "title": "Does the green ready light illuminate when the lift is ready for use?"
        },
        {
          "type": "boolean",
          "name": "upCallButtonFunctionCorrectly",
          "title": "Does the Up Call button function correctly?"
        },
        {
          "type": "boolean",
          "name": "redFaultLightIlluminatedDoorOpen",
          "title": "Does the red fault light illuminate when the door is open?"
        },
        {
          "type": "boolean",
          "name": "redFaultLightIlluminatedEStopPressed",
          "title": "Does the red fault light illuminate when the E-stop is pressed?"
        },
        {
          "type": "boolean",
          "name": "redFaultLightIlluminatedHatchOpen",
          "title": "Does the red fault light illuminate when the hatch is open?"
        },
        {
          "type": "boolean",
          "name": "redFaultLightIlluminatedEmergencySwitch",
          "title": "Does the red fault light illuminate when the emergency limit switch is engaged?"
        },
        {
          "type": "boolean",
          "name": "redFaultLightIlluminatedCabinRoofPressed",
          "title": "Does the red fault light illuminate when cabin roof is pressed?"
        },
        {
          "type": "boolean",
          "name": "redFaultLightIlluminatedCabinOnOffSwitch",
          "title": "Does the red fault light illuminate when the cabin on/off switch is in the off position?"
        }
      ]
    },
    {
      "name": "Bottom Platform Control Box",
      "elements": [
        {
          "type": "boolean",
          "name": "bottomPlatformControlBoxCorrectlyMounted",
          "title": "Is the Bottom Platform Control box correctly mounted, free of damage, and clean?"
        },
        {
          "type": "boolean",
          "name": "onOffMainSwitchFunctioning",
          "title": "Is the On/Off main switch free of damage and correctly functioning?"
        },
        {
          "type": "boolean",
          "name": "directionsLightsIlluminatedCorrectlyBottom",
          "title": "Do both of the directions lights illuminate correctly for lift travel direction?"
        },
        {
          "type": "boolean",
          "name": "greenReadyLightIlluminatedBottom",
          "title": "Does the green ready light illuminate when the lift is ready for use?"
        },
        {
          "type": "boolean",
          "name": "downCallButtonFunctionCorrectly",
          "title": "Does the Down Call button function correctly?"
        },
        {
          "type": "boolean",
          "name": "redFaultLightIlluminatedDoorOpenBottom",
          "title": "Does the red fault light illuminate when the door is open?"
        },
        {
          "type": "boolean",
          "name": "redFaultLightIlluminatedEStopPressedBottom",
          "title": "Does the red fault light illuminate when the E-stop is pressed?"
        },
        {
          "type": "boolean",
          "name": "redFaultLightIlluminatedHatchOpenBottom",
          "title": "Does the red fault light illuminate when the hatch is open?"
        },
        {
          "type": "boolean",
          "name": "redFaultLightIlluminatedEmergencySwitchBottom",
          "title": "Does the red fault light illuminate when the emergency limit switch is engaged?"
        },
        {
          "type": "boolean",
          "name": "redFaultLightIlluminatedCabinOnOffSwitchBottom",
          "title": "Does the red fault light illuminate when the cabin on/off switch is in the off position?"
        }
      ]
    },
    {
      "name": "Mid Tower Junction Box",
      "elements": [
        {
          "type": "boolean",
          "name": "midTowerJunctionBoxCorrectlyMounted",
          "title": "Is the Mid Tower Junction box correctly mounted, free of damage, and clean?"
        },
        {
          "type": "boolean",
          "name": "allConnectorsLockedIntoPosition",
          "title": "Are all connectors fully locked into position?"
        },
        {
          "type": "boolean",
          "name": "allCablesSecuredCleanlyRouted",
          "title": "Are all cables secured and cleanly routed around the junction box?"
        }
      ]
    },
    {
      "name": "Signage",
      "elements": [
        {
          "type": "boolean",
          "name": "serialNumberPlatePresentLift",
          "title": "Is the Serial Number plate present inside the lift?"
        },
        {
          "type": "boolean",
          "name": "serialNumberPlatePresentRackLadders",
          "title": "Is the Serial Number plate present on the rack ladders?"
        },
        {
          "type": "boolean",
          "name": "manualPresentBlueCouch",
          "title": "Is the Manual present inside the blue couch in the cabin?"
        },
        {
          "type": "boolean",
          "name": "quickGuidePresent",
          "title": "Is the Quick Guide present inside the cabin?"
        },
        {
          "type": "boolean",
          "name": "useOfPPEStickerPresent",
          "title": "Is the Use of PPE sticker present inside the cabin?"
        },
        {
          "type": "boolean",
          "name": "workLoadPersonsStickerPresent",
          "title": "Is the Work Load/No of Persons sticker present on the front side of the cabin?"
        },
        {
          "type": "boolean",
          "name": "warningRiskFallingStickerPresent",
          "title": "Is the Warning Risk of Falling sticker present on the motor cover?"
        },
        {
          "type": "boolean",
          "name": "warningRiskCrushingStickerPresent",
          "title": "Is the Warning Risk of Crushing stickers present on each pinion cover?"
        },
        {
          "type": "boolean",
          "name": "manualDescendStickerPresent",
          "title": "Is the Manual Descend sticker present on the motor cover?"
        },
        {
          "type": "boolean",
          "name": "wiringDiagramPresent",
          "title": "Is the Wiring Diagram present inside the bottom platform control box?"
        },
        {
          "type": "boolean",
          "name": "electricalWarningDisconnectionStickerPresent",
          "title": "Is the Electrical Warning Disconnection sticker present on the bottom platform control box?"
        },
        {
          "type": "boolean",
          "name": "alignmentStickersPresent",
          "title": "Are the Alignment stickers present inside the cabin and at each landing?"
        },
        {
          "type": "boolean",
          "name": "lubricationStickerPresent",
          "title": "Is the Lubrication sticker present on the motor cover?"
        },
        {
          "type": "boolean",
          "name": "electricalHazardStickerPresent",
          "title": "Is the Electrical Hazard sticker present on the cabin control box?"
        }
      ]
    },
    {
      "name": "Electrical Cables",
      "elements": [
        {
          "type": "boolean",
          "name": "areElectricalCablesFreeOfDamage",
          "title": "Are all electrical cables free of damage?"
        },
        {
          "type": "boolean",
          "name": "areElectricalCablesProperlyRouted",
          "title": "Are all electrical cables properly routed and fixed with necessary cable ties?"
        },
        {
          "type": "boolean",
          "name": "isTheFlatRailingCableFreeOfDamage",
          "title": "Is the flat railing cable free of damage?"
        },
        {
          "type": "boolean",
          "name": "arePlasticTiesCorrectlyInstalled",
          "title": "Are there plastic ties correctly installed on the bottom limit stop to prevent electrical wire tangles?"
        },
        {
          "type": "boolean",
          "name": "isTheThinWireRopeCorrectlyInstalled",
          "title": "Is there a thin wire rope correctly installed between the bottom limit plate and the fence to prevent electrical wire tangles?"
        },
        {
          "type": "boolean",
          "name": "isTheIntermediateArmCorrectlyAttached",
          "title": "Is the intermediate arm for electric cable correctly attached above the midpoint in the tower per the integration drawing?"
        }
      ]
    },
    {
      "name": "Ladder System",
      "elements": [
        {
          "type": "boolean",
          "name": "areAllPlatformsPresent",
          "title": "Are all rest platforms present at distance defined by integration drawing?"
        },
        {
          "type": "boolean",
          "name": "isAllRestPlatformFastenerAttached",
          "title": "Are all rest platform fastener attached to ladder marked and torqued to 50Nm?"
        },
        {
          "type": "boolean",
          "name": "areAllRestPlatformsSelfTracking",
          "title": "Are all rest platforms self-tracking to folded position?"
        },
        {
          "type": "boolean",
          "name": "areAllUBoltsAttached",
          "title": "Are all U-Bolts attaching ladder marked and torqued to 50Nm?"
        },
        {
          "type": "boolean",
          "name": "areAllLadderSectionsBolted",
          "title": "Are all ladder sections bolted together with each faster marked and torque to 50Nm?"
        },
        {
          "type": "boolean",
          "name": "isTheInclinationToleranceFollowed",
          "title": "Are all ladders within the tower within the inclination tolerance per the manual? (Less than 0.5°)"
        },
        {
          "type": "text",
          "name": "distanceBetweenLadderSections",
          "title": "What is the distance between the ladder sections within tolerance?",
          "inputType": "number"
        },
        {
          "type": "boolean",
          "name": "areAllLowerSupportBracketsPresent",
          "title": "Are all lower support brackets present according to the integration drawing?"
        },
        {
          "type": "boolean",
          "name": "areAllLowerSupportBracketsFreeOfDamage",
          "title": "Are all lower support brackets free of damage, cracks, rust, and corrosion?"
        },
        {
          "type": "boolean",
          "name": "areAllLowerSupportBracketFastenersMarked",
          "title": "Are all lower support bracket fasteners marked and torque to 12 Nm?"
        },
        {
          "type": "boolean",
          "name": "isThereMoreThan5mmFreeDistance",
          "title": "Is there more than 5mm of free distance from any bolt to the top end of the ladder anchorages slots?"
        },
        {
          "type": "checkbox",
          "name": "liftWorkCageCondition",
          "title": "Lift/Work Cage condition:",
          "choices": [
            "Lift/Work Cage is in good working condition, no significant repair were required",
            "Lift/Work Cage is in good working condition after repairs made as listed on defect report",
            "Lift/Work Cage requires repairs beyond what was completed and is deemed unusable"
          ]
        }
      ]
    }
  ]
};

export const eighth = {
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
                "Pre-Serving Check Out Tests, NOT performed",
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
          "type": "text",
          "name": "chemical_standards_used-2",
          "title": "Chemical Standards Used (ID)"
        },
        {
          "type": "text",
          "name": "test_equipment_used-2",
          "title": "Test Equipment Used (ID)"
        },
        {
          "type": "multipletext",
          "name": "environmental_conditions-2",
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
        },
        {
          "type": "text",
          "name": "title-2",
          "title": "Title"
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
          "type": "panel",
          "name": "received_condition-3",
          "title": "Received Condition",
          "elements": [
            {
              "type": "radiogroup",
              "name": "pre_servicing_check",
              "title": "Pre-Servicing Check Out Tests, NOT performed",
              "choices": [
                "Yes",
                "No"
              ]
            },
            {
              "type": "checkbox",
              "name": "received_condition_options",
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
          "type": "panel",
          "name": "returned_condition-3",
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
          "name": "chemical_standards_used-3",
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
          "title": "Temperature (°C)",
          "inputType": "number"
        },
        {
          "type": "text",
          "name": "humidity",
          "title": "Humidity (%)",
          "inputType": "number"
        },
        {
          "type": "text",
          "name": "certified_by-3",
          "title": "Certified By"
        },
        {
          "type": "text",
          "name": "certification_date-3",
          "title": "Certification Date",
          "inputType": "date"
        },
        {
          "type": "text",
          "name": "signature-3",
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
      "name": "Instrument Performance-4",
      "elements": [
        {
          "type": "text",
          "name": "companyName",
          "title": "Company Name"
        },
        {
          "type": "text",
          "name": "accountNumber",
          "title": "Account Number"
        },
        {
          "type": "text",
          "name": "contractNumber",
          "title": "Contract Number"
        },
        {
          "type": "text",
          "name": "certificationNumber",
          "title": "Certification Number"
        },
        {
          "type": "text",
          "name": "partNumber",
          "title": "Part Number"
        },
        {
          "type": "text",
          "name": "serialNumber",
          "title": "Serial Number"
        },
        {
          "type": "text",
          "name": "assetTag",
          "title": "Asset Tag"
        },
        {
          "type": "panel",
          "name": "receivedCondition",
          "title": "Received Condition",
          "elements": [
            {
              "type": "checkbox",
              "name": "receivedConditionOptions",
              "title": "Select all that apply",
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
          "name": "returnedCondition",
          "title": "Returned Condition",
          "elements": [
            {
              "type": "checkbox",
              "name": "returnedConditionOptions",
              "title": "Select all that apply",
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
          "name": "chemicalStandardsUsed",
          "title": "Chemical Standards Used (ID#)"
        },
        {
          "type": "text",
          "name": "testEquipmentUsed",
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
          "name": "certifiedBy",
          "title": "Certified By"
        },
        {
          "type": "text",
          "name": "certificationDate",
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
          "name": "title-4",
          "title": "Title"
        }
      ]
    },
    {
      "name": "Instrument Performance-5",
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
          "type": "panel",
          "name": "received_condition-4",
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
          "name": "returned_condition-4",
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
          "name": "test_equipment_used-4",
          "title": "Test Equipment Used",
          "columns": [
            {
              "name": "ID-2",
              "title": "ID",
              "cellType": "text"
            }
          ],
          "rows": [
            "Temp Pen - Extech #121719, Exp. 10/6/22"
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
          "name": "certified_by-4",
          "title": "Certified By"
        },
        {
          "type": "text",
          "name": "certification_date-4",
          "title": "Certification Date"
        },
        {
          "type": "text",
          "name": "signature-5",
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
      "name": "Instrument Performance-6",
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
          "name": "chemical_standards_used-5",
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
            "Hach pH 7 Buffer 500 ml.",
            "Hach pH 10 Buffer 500 ml."
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "test_equipment_used-5",
          "title": "Test Equipment Used",
          "columns": [
            {
              "name": "ID-4",
              "title": "ID",
              "cellType": "text"
            }
          ],
          "rows": [
            "Temp Pen - Etech #121719, Exp. 106/22"
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
          "name": "signature-6",
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
      "name": "Instrument Performance-7",
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
          "type": "panel",
          "name": "received_condition-6",
          "title": "Received Condition",
          "elements": [
            {
              "type": "radiogroup",
              "name": "received_condition_choice",
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
          "name": "returned_condition-6",
          "title": "Returned Condition",
          "elements": [
            {
              "type": "radiogroup",
              "name": "returned_condition_choice",
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
          "name": "chemical_standards_used-6",
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
          "name": "test_equipment_used-6",
          "title": "Test Equipment Used",
          "columns": [
            {
              "name": "ID-6",
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
          "name": "signature-7",
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
      "name": "Instrument Performance-8",
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
          "type": "radiogroup",
          "name": "received_condition-7",
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
          "name": "returned_condition-7",
          "title": "Returned Condition",
          "choices": [
            "Within Tolerance",
            "Within Tolerance but Limited",
            "Out of Tolerance"
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "chemical_standards_used-7",
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
              "name": "ID-8",
              "title": "ID",
              "cellType": "text"
            }
          ],
          "rows": [
            "Temp Eno - Estech #121179, Exp. 106/22"
          ]
        },
        {
          "type": "text",
          "name": "temperature-6",
          "title": "Temperature (°C)",
          "inputType": "number"
        },
        {
          "type": "text",
          "name": "humidity-6",
          "title": "Humidity (%)",
          "inputType": "number"
        },
        {
          "type": "text",
          "name": "certified_by-7",
          "title": "Certified By"
        },
        {
          "type": "text",
          "name": "certification_date-7",
          "title": "Certification Date",
          "inputType": "date"
        },
        {
          "type": "text",
          "name": "signature-8",
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
      "name": "Instrument Performance-9",
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
          "type": "radiogroup",
          "name": "received_condition-8",
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
          "name": "returned_condition-8",
          "title": "Returned Condition",
          "choices": [
            "Within Tolerance",
            "Within Tolerance but Limited",
            "Out of Tolerance"
          ]
        },
        {
          "type": "text",
          "name": "chemical_standards_used-8",
          "title": "Chemical Standards Used (ID#)"
        },
        {
          "type": "text",
          "name": "test_equipment_used-8",
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
          "name": "certified_by-8",
          "title": "Certified By"
        },
        {
          "type": "text",
          "name": "certification_date-8",
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
          "name": "title-9",
          "title": "Title"
        }
      ]
    },
    {
      "name": "Instrument Performance-10",
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
          "type": "matrixdropdown",
          "name": "received_condition-9",
          "title": "Received Condition",
          "columns": [
            {
              "name": "condition",
              "title": "Condition",
              "cellType": "text"
            }
          ],
          "rows": [
            "Pre-Servicing Check Out Tests, NOT performed",
            "Within Tolerance",
            "Within Tolerance but Limited",
            "Out of Tolerance"
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "returned_condition-9",
          "title": "Returned Condition",
          "columns": [
            {
              "name": "condition-2",
              "title": "Condition",
              "cellType": "text"
            }
          ],
          "rows": [
            "Within Tolerance",
            "Within Tolerance but Limited",
            "Out of Tolerance"
          ]
        },
        {
          "type": "panel",
          "name": "chemical_standards",
          "title": "Chemical Standards Used",
          "elements": [
            {
              "type": "text",
              "name": "chemical_standard_1",
              "title": "Hach pH 4 Buffer 500 ml, Cat#: 2770202, Lot#: A932, Exp. 9/23"
            },
            {
              "type": "text",
              "name": "chemical_standard_2",
              "title": "Hach pH 7 Buffer 500 ml, Cat#: 2770120, Lot#: A933, Exp. 12/21"
            },
            {
              "type": "text",
              "name": "chemical_standard_3",
              "title": "Hach pH 10 Buffer 500 ml, Cat#: 2770220, Lot#: A1310, Exp. 11/23"
            }
          ]
        },
        {
          "type": "panel",
          "name": "test_equipment",
          "title": "Test Equipment Used",
          "elements": [
            {
              "type": "text",
              "name": "test_equipment_1",
              "title": "Temp Pen - Extech #121719, Exp. 10/6/22"
            }
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
          "name": "certified_by-9",
          "title": "Certified By"
        },
        {
          "type": "text",
          "name": "certification_date-9",
          "title": "Certification Date"
        },
        {
          "type": "text",
          "name": "signature-10",
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
      "name": "Instrument Performance-11",
      "elements": [
        {
          "type": "text",
          "name": "companyName-2",
          "title": "Company Name"
        },
        {
          "type": "text",
          "name": "accountNumber-2",
          "title": "Account Number"
        },
        {
          "type": "text",
          "name": "contractNumber-2",
          "title": "Contract Number"
        },
        {
          "type": "text",
          "name": "certificationNumber-2",
          "title": "Certification Number"
        },
        {
          "type": "text",
          "name": "partNumber-2",
          "title": "Part Number"
        },
        {
          "type": "text",
          "name": "serialNumber-2",
          "title": "Serial Number"
        },
        {
          "type": "text",
          "name": "assetTag-2",
          "title": "Asset Tag"
        },
        {
          "type": "panel",
          "name": "receivedCondition-2",
          "title": "Received Condition",
          "elements": [
            {
              "type": "radiogroup",
              "name": "preServicingCheck",
              "title": "Pre-Servicing Check Out Tests",
              "choices": [
                "Not performed",
                "Within Tolerance",
                "Within Tolerance but Limited",
                "Out of Tolerance"
              ]
            }
          ]
        },
        {
          "type": "panel",
          "name": "returnedCondition-2",
          "title": "Returned Condition",
          "elements": [
            {
              "type": "radiogroup",
              "name": "returnedConditionCheck",
              "title": "Returned Condition Check",
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
          "name": "chemicalStandardsUsed-2",
          "title": "Chemical Standards Used (ID#)"
        },
        {
          "type": "text",
          "name": "testEquipmentUsed-2",
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
          "name": "certifiedBy-2",
          "title": "Certified By"
        },
        {
          "type": "text",
          "name": "certificationDate-2",
          "title": "Certification Date",
          "inputType": "date"
        },
        {
          "type": "text",
          "name": "signature-11",
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
      "name": "Instrument Performance-12",
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
          "type": "panel",
          "name": "received_condition-10",
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
          "name": "returned_condition-10",
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
          "name": "chemical_standards_used-9",
          "title": "Chemical Standards Used (ID#)"
        },
        {
          "type": "text",
          "name": "test_equipment_used-9",
          "title": "Test Equipment Used (ID#)"
        },
        {
          "type": "matrix",
          "name": "environmental_conditions-3",
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
          "name": "certified_by-10",
          "title": "Certified By"
        },
        {
          "type": "text",
          "name": "certification_date-10",
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
          "name": "title-12",
          "title": "Title"
        }
      ]
    },
    {
      "name": "Instrument Performance-13",
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
          "name": "asset_tag-8",
          "title": "Asset Tag"
        },
        {
          "type": "panel",
          "name": "received_condition-11",
          "title": "Received Condition",
          "elements": [
            {
              "type": "checkbox",
              "name": "received_condition_options-3",
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
          "name": "returned_condition-11",
          "title": "Returned Condition",
          "elements": [
            {
              "type": "checkbox",
              "name": "returned_condition_options-3",
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
          "name": "chemical_standards_used-10",
          "title": "Chemical Standards Used (ID)"
        },
        {
          "type": "text",
          "name": "test_equipment_used-10",
          "title": "Test Equipment Used (ID)"
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
          "name": "certified_by-11",
          "title": "Certified By"
        },
        {
          "type": "text",
          "name": "certification_date-11",
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
          "name": "title-13",
          "title": "Title"
        }
      ]
    },
    {
      "name": "Instrument Performance-14",
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
          "type": "checkbox",
          "name": "received_condition-12",
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
          "name": "returned_condition-12",
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
          "name": "chemical_standards_used-11",
          "title": "Chemical Standards Used (ID#)"
        },
        {
          "type": "text",
          "name": "test_equipment_used-11",
          "title": "Test Equipment Used (ID#)"
        },
        {
          "type": "matrixdropdown",
          "name": "environmental_conditions-4",
          "title": "Environmental Conditions",
          "columns": [
            {
              "name": "value",
              "title": "Value",
              "cellType": "text"
            }
          ],
          "rows": [
            {
              "value": "temperature",
              "text": "Temperature (°C)"
            },
            {
              "value": "humidity",
              "text": "Humidity (%)"
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
          "title": "Certification Date"
        },
        {
          "type": "text",
          "name": "signature-14",
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
      "name": "Instrument Performance-15",
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
          "name": "asset_tag-9",
          "title": "Asset Tag"
        },
        {
          "type": "panel",
          "name": "received_condition-13",
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
          "name": "returned_condition-13",
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
          "name": "chemical_standards_used-12",
          "title": "Chemical Standards Used (ID)"
        },
        {
          "type": "text",
          "name": "test_equipment_used-12",
          "title": "Test Equipment Used (ID)"
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
          "name": "signature-15",
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
      "name": "Instrument Performance-16",
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
          "type": "text",
          "name": "asset_tag-10",
          "title": "Asset Tag"
        },
        {
          "type": "panel",
          "name": "received_condition-14",
          "title": "Received Condition",
          "elements": [
            {
              "type": "radiogroup",
              "name": "received_condition_status-4",
              "title": "Status",
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
          "name": "returned_condition-14",
          "title": "Returned Condition",
          "elements": [
            {
              "type": "radiogroup",
              "name": "returned_condition_status-4",
              "title": "Status",
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
          "name": "chemical_standards-2",
          "title": "Chemical Standards Used"
        },
        {
          "type": "panel",
          "name": "test_equipment_used-13",
          "title": "Test Equipment Used",
          "elements": [
            {
              "type": "text",
              "name": "temp_equipment",
              "title": "Temp Eq - Estech #121779"
            },
            {
              "type": "text",
              "name": "hach_test_filter",
              "title": "Hach Test Filter Set - LZVS57, 44957"
            }
          ]
        },
        {
          "type": "text",
          "name": "environmental_conditions-5",
          "title": "Environmental Conditions"
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
          "name": "signature-16",
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
      "name": "Instrument Performance-17",
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
          "name": "asset_tag-11",
          "title": "Asset Tag"
        },
        {
          "type": "panel",
          "name": "received_condition-16",
          "title": "Received Condition (One must be checked)",
          "elements": [
            {
              "type": "radiogroup",
              "name": "received_condition-15",
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
          "name": "returned_condition-16",
          "title": "Returned Condition (One must be checked)",
          "elements": [
            {
              "type": "radiogroup",
              "name": "returned_condition-15",
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
          "name": "environmental_conditions-6",
          "title": "Environmental Conditions"
        },
        {
          "type": "text",
          "name": "temperature-13",
          "title": "Temperature (°C)",
          "inputType": "number"
        },
        {
          "type": "text",
          "name": "humidity-13",
          "title": "Humidity (%)",
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
          "name": "signature-17",
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
      "name": "Instrument Performance-18",
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
          "name": "asset_tag-12",
          "title": "Asset Tag"
        },
        {
          "type": "panel",
          "name": "received_condition-17",
          "title": "Received Condition",
          "elements": [
            {
              "type": "checkbox",
              "name": "received_condition_options-5",
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
          "name": "returned_condition-17",
          "title": "Returned Condition",
          "elements": [
            {
              "type": "checkbox",
              "name": "returned_condition_options-5",
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
          "name": "chemical_standards_used-14",
          "title": "Chemical Standards Used (ID#)"
        },
        {
          "type": "text",
          "name": "test_equipment_used-15",
          "title": "Test Equipment Used (ID#)"
        },
        {
          "type": "multipletext",
          "name": "environmental_conditions-7",
          "title": "Environmental Conditions",
          "items": [
            {
              "name": "temperature",
              "title": "Temperature (°C)"
            },
            {
              "name": "humidity",
              "title": "Humidity (%)"
            }
          ]
        },
        {
          "type": "text",
          "name": "certified_by-16",
          "title": "Certified By"
        },
        {
          "type": "text",
          "name": "certification_date-16",
          "title": "Certification Date"
        },
        {
          "type": "text",
          "name": "signature-18",
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
      "name": "Instrument Performance-19",
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
          "type": "panel",
          "name": "received_condition-18",
          "title": "Received Condition",
          "elements": [
            {
              "type": "checkbox",
              "name": "received_condition_options-6",
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
          "name": "returned_condition-18",
          "title": "Returned Condition",
          "elements": [
            {
              "type": "checkbox",
              "name": "returned_condition_options-6",
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
          "name": "chemical_standards_used-15",
          "title": "Chemical Standards Used (ID#)"
        },
        {
          "type": "text",
          "name": "test_equipment_used-16",
          "title": "Test Equipment Used (ID#)"
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
          "name": "certified_by-17",
          "title": "Certified By"
        },
        {
          "type": "text",
          "name": "certification_date-17",
          "title": "Certification Date"
        },
        {
          "type": "text",
          "name": "signature-19",
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
      "name": "Instrument Performance-20",
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
          "name": "asset_tag-13",
          "title": "Asset Tag"
        },
        {
          "type": "panel",
          "name": "received_condition-19",
          "title": "Received Condition",
          "elements": [
            {
              "type": "checkbox",
              "name": "received_condition_options-7",
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
              "name": "returned_condition_options-7",
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
          "name": "chemical_standards_used-16",
          "title": "Chemical Standards Used (ID#)"
        },
        {
          "type": "text",
          "name": "test_equipment_used-17",
          "title": "Test Equipment Used (ID#)"
        },
        {
          "type": "text",
          "name": "temperature-14",
          "title": "Temperature (°C)",
          "inputType": "number"
        },
        {
          "type": "text",
          "name": "humidity-14",
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
          "name": "signature-20",
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
      "name": "Instrument Performance-21",
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
          "type": "text",
          "name": "asset_tag-14",
          "title": "Asset Tag"
        },
        {
          "type": "panel",
          "name": "received_condition-20",
          "title": "Received Condition",
          "elements": [
            {
              "type": "checkbox",
              "name": "received_condition_options-8",
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
          "name": "returned_condition-20",
          "title": "Returned Condition",
          "elements": [
            {
              "type": "checkbox",
              "name": "returned_condition_options-8",
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
          "name": "chemical_standards_used-17",
          "title": "Chemical Standards Used (ID)"
        },
        {
          "type": "text",
          "name": "test_equipment_used-18",
          "title": "Test Equipment Used (ID)"
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
          "name": "certified_by-19",
          "title": "Certified By"
        },
        {
          "type": "text",
          "name": "certification_date-19",
          "title": "Certification Date"
        }
      ]
    },
    {
      "name": "Instrument Performance-22",
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
          "name": "asset_tag-15",
          "title": "Asset Tag"
        },
        {
          "type": "panel",
          "name": "received_condition-21",
          "title": "Received Condition",
          "elements": [
            {
              "type": "checkbox",
              "name": "received_condition_options-9",
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
              "name": "returned_condition_options-9",
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
          "type": "multipletext",
          "name": "chemical_standards-3",
          "title": "Chemical Standards Used",
          "items": [
            {
              "name": "id",
              "title": "ID (Df)"
            },
            {
              "name": "catalog_number",
              "title": "Catalog Number"
            },
            {
              "name": "lot_number",
              "title": "Lot Number"
            },
            {
              "name": "expiration_date",
              "inputType": "date",
              "title": "Expiration Date"
            }
          ]
        },
        {
          "type": "multipletext",
          "name": "test_equipment-2",
          "title": "Test Equipment Used",
          "items": [
            {
              "name": "id",
              "title": "ID (Df)"
            },
            {
              "name": "catalog_number",
              "title": "Catalog Number"
            },
            {
              "name": "expiration_date",
              "inputType": "date",
              "title": "Expiration Date"
            }
          ]
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
          "name": "certified_by-20",
          "title": "Certified By"
        },
        {
          "type": "text",
          "name": "certification_date-20",
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
          "name": "asset_tag-16",
          "title": "Asset Tag"
        },
        {
          "type": "radiogroup",
          "name": "received_condition-22",
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
          "name": "returned_condition-22",
          "title": "Returned Condition (One must be checked)",
          "choices": [
            "Within Tolerance",
            "Within Tolerance but Limited",
            "Out of Tolerance"
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "chemical_standards-4",
          "title": "Chemical Standards Used",
          "columns": [
            {
              "name": "ID-9",
              "title": "ID",
              "cellType": "text"
            }
          ],
          "rows": [
            "Hach Stabl Cal Set Cat# 259595, Lot# A1264, Exp.12/22",
            "Deionized Water Cat# 27576, 77428",
            "Organic Free Water 500 ml. Cat# 2641549"
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "test_equipment-3",
          "title": "Test Equipment Used",
          "columns": [
            {
              "name": "ID-10",
              "title": "ID",
              "cellType": "text"
            }
          ],
          "rows": [
            "Temp Pro - Extech #121779, Exp. 10/622"
          ]
        },
        {
          "type": "multipletext",
          "name": "environmental_conditions-9",
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
          "name": "signature-22",
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
          "name": "asset_tag-17",
          "title": "Asset Tag"
        },
        {
          "type": "checkbox",
          "name": "received_condition-23",
          "title": "Received Condition (One must be checked)",
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
          "name": "returned_condition-23",
          "title": "Returned Condition (One must be checked)",
          "choices": [
            "Within Tolerance",
            "Within Tolerance but Limited",
            "Out of Tolerance"
          ],
          "showOtherItem": true
        },
        {
          "type": "multipletext",
          "name": "chemical_standards_used-18",
          "title": "Chemical Standards Used (ID#)",
          "items": [
            {
              "name": "standard_1",
              "title": "Hach Stabl Cal Set Cat#"
            },
            {
              "name": "standard_2",
              "title": "Deionized Water Cat#"
            },
            {
              "name": "standard_3",
              "title": "Organic Free Water 500 ml Cat#"
            }
          ]
        },
        {
          "type": "multipletext",
          "name": "test_equipment_used-19",
          "title": "Test Equipment Used (ID#)",
          "items": [
            {
              "name": "equipment_1",
              "title": "Temp Pro - Extech"
            }
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "environmental_conditions-10",
          "title": "Environmental Conditions",
          "columns": [
            {
              "name": "value-2",
              "title": "Value",
              "cellType": "text"
            }
          ],
          "rows": [
            "Temperature",
            "Humidity"
          ]
        },
        {
          "type": "text",
          "name": "certified_by-22",
          "title": "Certified By"
        },
        {
          "type": "text",
          "name": "certification_date-22",
          "title": "Certification Date",
          "inputType": "date"
        },
        {
          "type": "text",
          "name": "signature-23",
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
          "name": "asset_tag-18",
          "title": "Asset Tag"
        },
        {
          "type": "panel",
          "name": "received_condition-24",
          "title": "Received Condition",
          "elements": [
            {
              "type": "checkbox",
              "name": "received_condition_options-10",
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
          "name": "returned_condition-24",
          "title": "Returned Condition",
          "elements": [
            {
              "type": "checkbox",
              "name": "returned_condition_options-10",
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
          "name": "test_equipment_used-20",
          "title": "Test Equipment Used (ID#)"
        },
        {
          "type": "text",
          "name": "temperature-17",
          "title": "Temperature (°C)",
          "inputType": "number"
        },
        {
          "type": "text",
          "name": "humidity-17",
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
          "name": "title-24",
          "title": "Title"
        }
      ]
    }
  ]
};

export const ninth = {
  "pages": [
    {
      "name": "SKF SIMO Assessment",
      "elements": [
        {
          "type": "radiogroup",
          "name": "production_ratio",
          "title": "What is the ratio between the actual production volume and the capacity? Or production availability?",
          "choices": [
            "> 99%",
            "96% - 99%",
            "90% - 96%",
            "80% - 90%",
            "<80%"
          ]
        },
        {
          "type": "radiogroup",
          "name": "erp_usage",
          "title": "Have ERP/EAM or relevant systems been used for registering assets/spares master data and logging purchase, warehouse and consumption history?",
          "choices": [
            "Has an IT system and well used over 10 years.",
            "Has an IT system and well used 5-10 years.",
            "Has an IT system and used less than 5 years.",
            "Has an IT system and the data quality and quantity are poor.",
            "None"
          ]
        },
        {
          "type": "radiogroup",
          "name": "time_spares_planning",
          "title": "How much time have the operators/maintainers used for spares planning, finding, receiving, reporting and etc. in their daily work?",
          "choices": [
            "<5%",
            "5% - 10%",
            "11% - 20%",
            "21% - 30%",
            ">30%"
          ]
        },
        {
          "type": "radiogroup",
          "name": "stockout_frequency",
          "title": "How often does spares stockout occur and need emergent ordering?",
          "choices": [
            "Once in 6 months",
            "Once in 3 months"
          ]
        }
      ]
    },
    {
      "name": "Section 1",
      "elements": [
        {
          "type": "radiogroup",
          "name": "frequency",
          "title": "How often do you order?",
          "choices": [
            "Once per month",
            "Once per week",
            "Once per day"
          ]
        },
        {
          "type": "dropdown",
          "name": "downtime",
          "title": "What is the production/service downtime due to spares stock out and emergent ordering?",
          "choices": [
            "< 24 hours",
            "24 - 48 hours",
            "48 - 100 hours",
            "100 - 200 hours",
            "> 200 hours"
          ]
        },
        {
          "type": "dropdown",
          "name": "annual_spares_consumption_cost",
          "title": "What is the ratio of annual spares consumption cost and the facility value (ERV - Estimated Replacement Value)?",
          "choices": [
            "< 1%",
            "1% - 2%",
            "2% - 3%",
            "3% - 5%",
            "> 5%"
          ]
        },
        {
          "type": "dropdown",
          "name": "annual_spares_consumption_maintenance",
          "title": "What is the ratio of annual spares consumption and the total maintenance costs?",
          "choices": [
            "< 20%",
            "21% - 40%",
            "41% - 60%",
            "61% - 80%",
            "> 80%"
          ]
        },
        {
          "type": "dropdown",
          "name": "averaged_spares_stock_value",
          "title": "What is the ratio of the averaged spares stock value and the facility values (ERV)?",
          "choices": [
            "< 1%"
          ]
        }
      ]
    },
    {
      "name": "SKF SIMO Assessment-2",
      "elements": [
        {
          "type": "matrixdropdown",
          "name": "annual_spares_consumption_warehouse_value",
          "title": "What is the ratio of annual spares consumption and average warehouse value?",
          "columns": [
            {
              "name": "ratio",
              "title": "Ratio",
              "cellType": "text"
            }
          ],
          "rows": [
            {
              "value": "1-2%",
              "text": "1% - 2%"
            },
            {
              "value": "2-4%",
              "text": "2% - 4%"
            },
            {
              "value": "4-6%",
              "text": "4% - 6%"
            },
            {
              "value": ">6%",
              "text": "> 6%"
            }
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "inactive_items_ratio",
          "title": "What is the ratio of the inactive items (over 3 years in stock) value and the total stock?",
          "columns": [
            {
              "name": "ratio-2",
              "title": "Ratio",
              "cellType": "text"
            }
          ],
          "rows": [
            {
              "value": "<10%",
              "text": "< 10%"
            },
            {
              "value": "11-20%",
              "text": "11% - 20%"
            },
            {
              "value": "21-35%",
              "text": "21% - 35%"
            },
            {
              "value": "36-50%",
              "text": "36% - 50%"
            },
            {
              "value": "<50%",
              "text": "< 50%"
            }
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "unique_functional_location",
          "title": "Has each equipment unit been assigned with a unique functional location and/or a technical ID?",
          "columns": [
            {
              "name": "assignment",
              "title": "Assignment",
              "cellType": "text"
            }
          ],
          "rows": [
            {
              "value": ">99%",
              "text": "> 99%"
            },
            {
              "value": "98-95%",
              "text": "98% - 95%"
            },
            {
              "value": "94-85%",
              "text": "94% - 85%"
            },
            {
              "value": "84-60%",
              "text": "84% - 60%"
            },
            {
              "value": "<60%",
              "text": "< 60%"
            }
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "equipment_catalogued",
          "title": "Has each equipment unit been catalogued with equipment type and attributes as well as assigned values?",
          "columns": [
            {
              "name": "catalogued",
              "title": "Catalogued",
              "cellType": "text"
            }
          ],
          "rows": [
            {
              "value": ">90%",
              "text": "> 90%"
            },
            {
              "value": "89-80%",
              "text": "89% - 80%"
            },
            {
              "value": "79-50%",
              "text": "79% - 50%"
            },
            {
              "value": "<50%",
              "text": "< 50%"
            },
            "None"
          ]
        }
      ]
    },
    {
      "name": "Equipment Assessment",
      "elements": [
        {
          "type": "radiogroup",
          "name": "criticality_assignment",
          "title": "Has each equipment unit been assigned with criticality, e.g., High, Medium and Low?",
          "choices": [
            "> 95%",
            "94% - 80%",
            "79% - 50%",
            "< 50%",
            "None"
          ]
        },
        {
          "type": "radiogroup",
          "name": "linked_to_spares",
          "title": "Has each equipment unit been linked to its spares, i.e., Bill Of Materials (BOM) for maintenance purpose?",
          "choices": [
            "> 95%",
            "94% - 80%",
            "79% - 50%",
            "< 50%",
            "None"
          ]
        },
        {
          "type": "radiogroup",
          "name": "spares_categorized",
          "title": "Have the spares been categorized to different types for statistical analysis? If yes, how many levels?",
          "choices": [
            "> 4",
            "3 - 4",
            "2 - 3",
            "1 - 2",
            "None"
          ]
        },
        {
          "type": "radiogroup",
          "name": "spares_catalogued",
          "title": "Have the spares been catalogued with types and attributes and assigned values?",
          "choices": [
            "> 95%",
            "94% - 80%",
            "79% - 50%",
            "< 50%",
            "None"
          ]
        },
        {
          "type": "boolean",
          "name": "unique_codes",
          "title": "Has spares been assigned with unique codes?"
        }
      ]
    },
    {
      "name": "Spares Assessment",
      "elements": [
        {
          "type": "matrixdropdown",
          "name": "spares_duplicates",
          "title": "How much percentage of the spares might have duplicated codes?",
          "columns": [
            {
              "name": "percentage",
              "title": "Percentage",
              "cellType": "text"
            }
          ],
          "rows": [
            "< 0.1%",
            "0.1% - 1%",
            "1% - 2%",
            "2% - 5%",
            "> 5%"
          ]
        },
        {
          "type": "radiogroup",
          "name": "interchangeable_spares",
          "title": "Have Interchangeable spares been identified and linked?",
          "choices": [
            "> 90%",
            "89% - 80%",
            "79% - 50%",
            "< 50%",
            "None"
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "spares_meet_needs",
          "title": "How much percentage of the existing spares list can meet your spares needs?",
          "columns": [
            {
              "name": "percentage-2",
              "title": "Percentage",
              "cellType": "text"
            }
          ],
          "rows": [
            "> 99%",
            "98% - 95%",
            "94% - 90%",
            "89% - 80%",
            "< 80%"
          ]
        },
        {
          "type": "radiogroup",
          "name": "spares_consumption_logged",
          "title": "Have spares consumption been logged as workorder records with date, WO ID, equipment ID, spares ID and quantity used?",
          "choices": [
            "> 98%",
            "97% - 85%",
            "84% - 50%",
            "< 50%",
            "None"
          ]
        }
      ]
    },
    {
      "name": "Spares Assessment-2",
      "elements": [
        {
          "type": "matrixdropdown",
          "name": "spares_discharge_recorded",
          "title": "Have spares discharge from warehouses been recorded with date, quantity and users?",
          "columns": [
            {
              "name": "percentage-3",
              "title": "Options",
              "cellType": "dropdown",
              "choices": [
                "> 98%",
                "97% - 85%",
                "84% - 50%",
                "< 50%",
                "None"
              ]
            }
          ],
          "rows": [
            {
              "value": "recorded",
              "text": "Answer"
            },
            {
              "value": "comment",
              "text": "Comment"
            }
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "spares_purchase_recorded",
          "title": "Have spares purchase been recorded with date, quantity and users?",
          "columns": [
            {
              "name": "percentage-4",
              "title": "Options",
              "cellType": "dropdown",
              "choices": [
                "> 98%",
                "97% - 85%",
                "84% - 50%",
                "< 50%",
                "None"
              ]
            }
          ],
          "rows": [
            {
              "value": "recorded",
              "text": "Answer"
            },
            {
              "value": "comment",
              "text": "Comment"
            }
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "spares_classified_forecasting",
          "title": "Have spares been classified for consumption forecasting, e.g., consumables, operational spares, and insurance spares?",
          "columns": [
            {
              "name": "percentage-5",
              "title": "Options",
              "cellType": "dropdown",
              "choices": [
                "> 98%",
                "97% - 85%",
                "84% - 50%",
                "< 50%",
                "None"
              ]
            }
          ],
          "rows": [
            {
              "value": "classified",
              "text": "Answer"
            },
            {
              "value": "comment",
              "text": "Comment"
            }
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "insurance_spares_identified",
          "title": "Have Insurance spares been identified using defined criteria?",
          "columns": [
            {
              "name": "percentage-6",
              "title": "Options",
              "cellType": "dropdown",
              "choices": [
                "> 95%",
                "94% - 80%",
                "79% - 50%",
                "< 50%",
                "None"
              ]
            }
          ],
          "rows": [
            {
              "value": "identified",
              "text": "Answer"
            },
            {
              "value": "comment",
              "text": "Comment"
            }
          ]
        },
        {
          "type": "matrixdropdown",
          "name": "consumption_forecasted",
          "title": "Have consumption of consumable spares in a coming period been forecast using physical and math models, e.g. Index Smoothing, Bushtrap and etc.?",
          "columns": [
            {
              "name": "percentage-7",
              "title": "Options",
              "cellType": "dropdown",
              "choices": [
                "> 95%"
              ]
            }
          ],
          "rows": [
            {
              "value": "forecasted",
              "text": "Answer"
            },
            {
              "value": "comment",
              "text": "Comment"
            }
          ]
        }
      ]
    },
    {
      "name": "Section 1-2",
      "elements": [
        {
          "type": "radiogroup",
          "name": "forecast_consumption_operational_spares",
          "title": "27. Have consumption of operational spares in a coming period been forecast using physical and math models, e.g. Normal, Weibull and etc.?",
          "choices": [
            "> 95%",
            "94% - 80%",
            "79% - 50%",
            "< 50%",
            "None"
          ]
        },
        {
          "type": "radiogroup",
          "name": "forecast_consumption_repairable_spares",
          "title": "28. Have consumption of repairable spares in a coming period been predicted using physical and math models?",
          "choices": [
            "> 95%",
            "94% - 80%",
            "79% - 50%",
            "< 50%",
            "None"
          ]
        },
        {
          "type": "radiogroup",
          "name": "analyzed_lifetime_operational_spares",
          "title": "29. Have actual lifetime of operational spares been analyzed and known?",
          "choices": [
            "> 95%",
            "94% - 80%",
            "79% - 50%",
            "< 50%",
            "None"
          ]
        },
        {
          "type": "radiogroup",
          "name": "benchmark_lifetime_operational_spares",
          "title": "30. Have the lifetime of operational spares been benchmarked against the best practice?",
          "choices": [
            "> 95%",
            "94% - 80%",
            "79% - 50%",
            "< 50%",
            "None"
          ]
        }
      ]
    },
    {
      "name": "Inventory Assessment",
      "elements": [
        {
          "type": "radiogroup",
          "name": "consumables_spares_rationalized",
          "title": "Have inventory of consumables spares been rationalized using a math model, e.g. EOQ?",
          "choices": [
            "> 95%",
            "94% - 80%",
            "79% - 50%",
            "< 50%",
            "None"
          ]
        },
        {
          "type": "radiogroup",
          "name": "operational_spares_criticality",
          "title": "Have operational spares been assigned with criticality according to its equipment criticality and redundancy, spare importance, price and etc?",
          "choices": [
            "> 95%",
            "94% - 80%",
            "79% - 50%",
            "< 50%",
            "None"
          ]
        },
        {
          "type": "radiogroup",
          "name": "service_levels_assigned",
          "title": "Have service levels been assigned for operational spares?",
          "choices": [
            "> 95%",
            "94% - 80%",
            "79% - 50%",
            "< 50%",
            "None"
          ]
        },
        {
          "type": "radiogroup",
          "name": "operational_spares_assessed",
          "title": "Have inventory of operational spares been assessed using a math model, e.g. Weibull distribution?",
          "choices": [
            "> 95%",
            "94% - 80%",
            "79% - 50%",
            "< 50%",
            "None"
          ]
        },
        {
          "type": "radiogroup",
          "name": "insurance_spares_assessed",
          "title": "Have Inventory of insurance spares been assessed using systematic methods, e.g., risk/cost analysis?",
          "choices": [
            "> 95%",
            "94% - 80%",
            "79% - 50%",
            "< 50%",
            "None"
          ]
        }
      ]
    },
    {
      "name": "Spares Inventory Assessment",
      "elements": [
        {
          "type": "radiogroup",
          "name": "spares_inventory_budget",
          "title": "Have proposed spares inventory been balanced with budgeted inventory budget?",
          "choices": [
            "> 95%",
            "94% - 80%",
            "79% - 50%",
            "< 50%",
            "None"
          ]
        },
        {
          "type": "radiogroup",
          "name": "operational_spares_inventory",
          "title": "Have inventory of operational spares been optimized by minimizing potential losses of spares stockout plus spares ownership costs?",
          "choices": [
            "> 95%",
            "94% - 80%",
            "79% - 50%",
            "< 50%",
            "None"
          ]
        },
        {
          "type": "radiogroup",
          "name": "spares_warehouse_check",
          "title": "How often have spares warehouses been checked, reviewed and handled?",
          "choices": [
            "3 months",
            "6 months",
            "12 months",
            "2 years",
            "> 2 years"
          ]
        },
        {
          "type": "radiogroup",
          "name": "equipment_reliability",
          "title": "Has equipment reliability been linked to design and actual lifetime of its components/spares?",
          "choices": [
            "> 90%",
            "89% - 60%"
          ]
        }
      ]
    },
    {
      "name": "Assessment",
      "elements": [
        {
          "type": "matrixdropdown",
          "name": "maintenance_strategy_review",
          "title": "Has maintenance strategy review been conducted annually for critical equipment together with the developed spares inventory strategy?",
          "columns": [
            {
              "name": "answer",
              "title": "Answer",
              "cellType": "dropdown",
              "choices": [
                "> 90%",
                "89% - 60%",
                "59% - 30%",
                "< 30%",
                "None"
              ]
            }
          ],
          "rows": [
            {
              "value": "comment",
              "text": "Comment"
            }
          ]
        }
      ]
    },
    {
      "name": "Production Capacity",
      "elements": [
        {
          "type": "text",
          "name": "production_capacity",
          "title": "Production Capacity"
        },
        {
          "type": "text",
          "name": "last_year_actual_production_volume",
          "title": "Last year: actual Production volume"
        },
        {
          "type": "text",
          "name": "last_year_production_revenue",
          "title": "Last year: production revenue"
        },
        {
          "type": "text",
          "name": "this_year_targeted_production_volume",
          "title": "This year: targeted Production volume"
        }
      ]
    },
    {
      "name": "ERP/EAM Systems",
      "elements": [
        {
          "type": "text",
          "name": "name_of_erp_system",
          "title": "Name of ERP/EAM/CMS"
        },
        {
          "type": "text",
          "name": "which_year_implemented",
          "title": "Which year implemented?"
        },
        {
          "type": "text",
          "name": "percentage_of_assets_registered",
          "title": "How much % of assets, spares and maintenance plan are populated?"
        },
        {
          "type": "text",
          "name": "percentage_of_work_orders_registered",
          "title": "How much % of work orders are registered in the system?"
        }
      ]
    },
    {
      "name": "Spares Planning Efficiency",
      "elements": [
        {
          "type": "text",
          "name": "disciplines_in_spares_planning",
          "title": "What disciplines are involved in spares planning, reviewing and approval?"
        },
        {
          "type": "text",
          "name": "time_for_maintenance_review",
          "title": "How much time do maintenance/equipment engineers/technicians use for spares planning and reviewing?"
        }
      ]
    },
    {
      "name": "Stockout Management",
      "elements": [
        {
          "type": "text",
          "name": "frequency_of_stockout",
          "title": "How often does spares stockout occur and emergent ordering?"
        },
        {
          "type": "comment",
          "name": "stockout_consequences",
          "title": "What is the production/service downtime due to spares stockout and emergent ordering?"
        }
      ]
    },
    {
      "name": "Annual Consumption Cost",
      "elements": [
        {
          "type": "text",
          "name": "erv_value",
          "title": "ERV (Estimated Replacement Value)"
        },
        {
          "type": "text",
          "name": "last_year_spares_consumption_value",
          "title": "Last year: spares consumption value"
        },
        {
          "type": "text",
          "name": "this_year_targeted_spares_consumption_value",
          "title": "This year: Targeted spares consumption value"
        }
      ]
    },
    {
      "name": "Maintenance Costs",
      "elements": [
        {
          "type": "text",
          "name": "last_year_total_maintenance_cost",
          "title": "Last year: total maintenance cost"
        },
        {
          "type": "text",
          "name": "this_year_maintenance_budget",
          "title": "This year: maintenance budget"
        }
      ]
    },
    {
      "name": "Spares Inventory Management",
      "elements": [
        {
          "type": "text",
          "name": "spares_stock_ratio",
          "title": "What is the ratio of the averaged spares stock value and the facility values (ERV)?"
        },
        {
          "type": "text",
          "name": "annual_spares_consumption_ratio",
          "title": "What is the ratio of annual spares consumption and average warehouse value?"
        },
        {
          "type": "text",
          "name": "inactive_items_ratio-2",
          "title": "What is the ratio of the inactive items (over 3 years in stock) value and the total stock?"
        }
      ]
    },
    {
      "name": "Equipment Management",
      "elements": [
        {
          "type": "boolean",
          "name": "assigned_location_or_id",
          "title": "Has each equipment unit been assigned with a unique functional location and/or a technical ID?"
        },
        {
          "type": "text",
          "name": "assets_registered",
          "title": "No of assets registered:",
          "inputType": "number"
        },
        {
          "type": "text",
          "name": "percentage_of_assets_registered-2",
          "title": "How much % of assets registered in the system?",
          "inputType": "number"
        },
        {
          "type": "boolean",
          "name": "equipment_catalogued-2",
          "title": "Has each equipment unit been catalogued with equipment type and attributes as well as assigned values?"
        },
        {
          "type": "text",
          "name": "asset_classes_defined",
          "title": "No of asset classes and types are defined:",
          "inputType": "number"
        },
        {
          "type": "text",
          "name": "percentage_of_assets_with_attributes",
          "title": "How much % of assets are assigned with attributes and values?",
          "inputType": "number"
        },
        {
          "type": "boolean",
          "name": "assigned_criticality",
          "title": "Has each equipment unit been assigned with criticality, e.g., High, Medium and Low?"
        },
        {
          "type": "text",
          "name": "criticality_matrix_defined",
          "title": "Has defined a standard equipment criticality matrix?"
        },
        {
          "type": "text",
          "name": "percentage_of_assets_with_criticality",
          "title": "How much % of assets are assigned with a criticality?",
          "inputType": "number"
        },
        {
          "type": "boolean",
          "name": "linked_to_bom",
          "title": "Has each equipment unit been linked to its spares, i.e., Bill Of Materials (BOM) for maintenance purpose?"
        }
      ]
    },
    {
      "name": "Spares Assessment-3",
      "elements": [
        {
          "type": "text",
          "name": "assets_assigned_relevant_spares",
          "title": "How much % of assets are assigned with relevant spares?"
        },
        {
          "type": "text",
          "name": "spares_categorized_levels",
          "title": "Have the spares been categorized to different types for statistical analysis? If yes, how many levels?"
        },
        {
          "type": "text",
          "name": "spares_categorized_classes",
          "title": "No of spare classes and types are defined."
        },
        {
          "type": "text",
          "name": "spares_assigned_attributes",
          "title": "How much % of spares are assigned with attributes and values?"
        },
        {
          "type": "text",
          "name": "spares_assigned_unique_codes",
          "title": "How much % of spares are assigned with unique codes?"
        },
        {
          "type": "text",
          "name": "spares_cleansed_duplicates",
          "title": "How much % of spare items is cleansed using spares catalogue results?"
        },
        {
          "type": "text",
          "name": "interchangeable_spares_identified",
          "title": "No of spares are assigned with interchangeable items?"
        },
        {
          "type": "text",
          "name": "spares_needs_met",
          "title": "Total number of identified spares."
        },
        {
          "type": "text",
          "name": "spares_consumption_logged-2",
          "title": "Have spares consumption been logged as workorder records with date, WO ID, equipment ID, spares ID and quantity used?"
        }
      ]
    },
    {
      "name": "Spares Consumption History",
      "elements": [
        {
          "type": "panel",
          "name": "leading_parameters",
          "elements": [
            {
              "type": "text",
              "name": "work_order_history_year",
              "title": "From which year, work order history are registered in ERP/EAM/CMMS?"
            },
            {
              "type": "text",
              "name": "work_orders_registered_spares_consumption",
              "title": "How much % of work orders have registered spares consumption correctly?"
            },
            {
              "type": "text",
              "name": "work_orders_registered",
              "title": "How much % of work orders are registered properly?"
            }
          ]
        }
      ]
    },
    {
      "name": "Spares Discharge",
      "elements": [
        {
          "type": "text",
          "name": "spares_discharge_recorded-2",
          "title": "Have spares discharge from warehouses been recorded with date, quantity and users?"
        },
        {
          "type": "text",
          "name": "spares_history_registered",
          "title": "How much % of spares issuing history is properly registered?"
        }
      ]
    },
    {
      "name": "Spares Purchase",
      "elements": [
        {
          "type": "text",
          "name": "spares_purchase_recorded-2",
          "title": "Have spares purchase been recorded with date, quantity and users?"
        },
        {
          "type": "text",
          "name": "spares_purchasing_registered",
          "title": "How much % of spares purchasing history is properly registered?"
        }
      ]
    },
    {
      "name": "Spares Classification",
      "elements": [
        {
          "type": "text",
          "name": "spares_classified_for_forecasting",
          "title": "Have spares been classified for consumption forecasting, e.g., consumables, operational spares, and insurance spares?"
        }
      ]
    },
    {
      "name": "Insurance Spares",
      "elements": [
        {
          "type": "text",
          "name": "insurance_spares_identified-2",
          "title": "Have Insurance spares been identified using defined criteria?"
        }
      ]
    },
    {
      "name": "Consumable Spares Consumption",
      "elements": [
        {
          "type": "text",
          "name": "consumable_spares_forecast",
          "title": "Have consumption of consumable spares in a coming period been forecast using physical and math models, e.g. Index Smoothing, Bushtrap etc.?"
        }
      ]
    },
    {
      "name": "Operational Spares Consumption",
      "elements": [
        {
          "type": "text",
          "name": "operational_spares_forecast",
          "title": "Have consumption of operational spares in a coming period been forecast using physical and math models, e.g. Normal, Weibull etc.?"
        }
      ]
    },
    {
      "name": "Repairable Spares Consumption",
      "elements": [
        {
          "type": "text",
          "name": "repairable_spares_forecast",
          "title": "Have consumption of repairable spares in a coming period been predicted using physical and math models?"
        }
      ]
    },
    {
      "name": "Section 1-3",
      "elements": [
        {
          "type": "radiogroup",
          "name": "operational_lifetime_analyzed",
          "title": "Have actual lifetime of operational spares been analyzed and known?",
          "choices": [
            "Yes",
            "No"
          ]
        },
        {
          "type": "radiogroup",
          "name": "operational_lifetime_benchmarked",
          "title": "Have the lifetime of operational spares been benchmarked against the best practice?",
          "choices": [
            "Yes",
            "No"
          ]
        },
        {
          "type": "radiogroup",
          "name": "consumables_inventory_rationalized",
          "title": "Have inventory of consumables spares been rationalized using a math model, e.g. EOQ?",
          "choices": [
            "Yes",
            "No"
          ]
        },
        {
          "type": "radiogroup",
          "name": "operational_spares_criticality_assigned",
          "title": "Have operational spares been assigned with criticality according to its equipment criticality and redundancy, spare importance, price and etc?",
          "choices": [
            "Yes",
            "No"
          ]
        },
        {
          "type": "radiogroup",
          "name": "service_levels_assigned-2",
          "title": "Have service levels been assigned for operational spares?",
          "choices": [
            "Yes",
            "No"
          ]
        },
        {
          "type": "radiogroup",
          "name": "operational_inventory_assessed",
          "title": "Have inventory of operational spares been assessed using a math model, e.g. Weibull distribution?",
          "choices": [
            "Yes",
            "No"
          ]
        },
        {
          "type": "radiogroup",
          "name": "insurance_spares_assessed-2",
          "title": "Have inventory of insurance spares been assessed using systematic methods, e.g., risk/cost analysis?",
          "choices": [
            "Yes",
            "No"
          ]
        },
        {
          "type": "radiogroup",
          "name": "proposed_inventory_balanced",
          "title": "Have proposed spares inventory been balanced with budgeted inventory budget?",
          "choices": [
            "Yes",
            "No"
          ]
        },
        {
          "type": "radiogroup",
          "name": "operational_inventory_optimized",
          "title": "Have inventory of operational spares been optimized by minimizing potential losses of spares stockout plus spares ownership costs?",
          "choices": [
            "Yes",
            "No"
          ]
        }
      ]
    },
    {
      "name": "Spares Management",
      "elements": [
        {
          "type": "radiogroup",
          "name": "spares_check_frequency",
          "title": "How often spares warehouses been checked, reviewed and handled?",
          "choices": [
            "Daily",
            "Weekly",
            "Monthly",
            "Quarterly",
            "Annually"
          ]
        },
        {
          "type": "radiogroup",
          "name": "equipment_reliability_design",
          "title": "Has equipment reliability been linked to design and actual lifetime of its components/spares?",
          "choices": [
            "Yes",
            "No",
            "Not Sure"
          ]
        },
        {
          "type": "radiogroup",
          "name": "maintenance_strategy_review-2",
          "title": "Has maintenance strategy review been conducted annually for critical equipment together with the developed spares inventory strategy?",
          "choices": [
            "Yes",
            "No",
            "Not Sure"
          ]
        }
      ]
    }
  ]
};