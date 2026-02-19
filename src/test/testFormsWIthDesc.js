export const first = {
  "pages": [
    {
      "name": "Service Radiation QC Document",
      "description": "Quality control survey for documenting radiation measurements, equipment IDs, calibration status, and pass/fail results for the service session.",
      "elements": [
        {
          "type": "text",
          "name": "machine_serial_number",
          "title": "Machine Serial Number",
          "description": "Enter the unique serial number of the machine under test exactly as shown on the device label or system info screen."
        },
        {
          "type": "text",
          "name": "detector_test_equipment_id",
          "title": "Detector Test Equip ID",
          "description": "Enter the identifier/asset tag of the detector test instrument used for measurements (e.g., dosimeter, solid-state detector)."
        },
        {
          "type": "text",
          "name": "cal_due_date",
          "title": "Cal Due Date",
          "description": "Enter the calibration due date for the test equipment in a standard date format (e.g., YYYY-MM-DD). Ensure the equipment is in calibration."
        },
        {
          "type": "text",
          "name": "base_test_equipment_id",
          "title": "Base Test Equip ID",
          "description": "Enter the identifier/asset tag of the base or reference test equipment used during this QC session."
        },
        {
          "type": "matrixdropdown",
          "name": "manual_mode_30pps",
          "title": "Manual Mode 30PPS @ Detector",
          "description": "Record detector-side measurements with manual exposure at 30 pulses per second. For each kV row, enter the measured kV, measured dose rate in µGy/s, and the acceptable range for µGy/s if applicable.",
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
          "description": "Compare the system’s displayed Air Kerma Rate (AKR) to the reference measurement and enter the percent deviation. Provide values for Adult (Cu-filtered) and Pediatric (Cu-filtered) conditions. Include the acceptable percent range for pass/fail.",
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
          "description": "Select the overall QC outcome based on all measurements and tolerances.",
          "choices": [
            "PASS",
            "FAIL"
          ]
        },
        {
          "type": "text",
          "name": "tested_by",
          "title": "Tested By",
          "description": "Enter the full name (and optionally employee ID or initials) of the person performing the QC."
        },
        {
          "type": "text",
          "name": "date",
          "title": "Date",
          "description": "Enter the date the QC was performed (e.g., YYYY-MM-DD)."
        }
      ]
    }
  ]
};

export const second = {
  "pages": [
    {
      "name": "Operational Maintenance Report",
      "description": "Form used to record technician details, maintenance tasks performed, equipment condition, and customer acknowledgment for forklift operational maintenance.",
      "elements": [
        {
          "type": "text",
          "name": "technician",
          "title": "Services Performed By:",
          "description": "Enter the full name of the technician who completed the service."
        },
        {
          "type": "text",
          "name": "tech_id",
          "title": "Tech ID:",
          "description": "Enter the technician's ID or employee number."
        },
        {
          "type": "text",
          "name": "branch",
          "title": "Branch #:",
          "description": "Enter the branch or location number responsible for servicing."
        },
        {
          "type": "text",
          "name": "service_order_number",
          "title": "Service Order Number:",
          "description": "Enter the assigned service order or work order number."
        },
        {
          "type": "text",
          "name": "customer",
          "title": "Customer:",
          "description": "Enter the name of the customer or company receiving the service."
        },
        {
          "type": "text",
          "name": "po_number",
          "title": "PO#:",
          "description": "Enter the purchase order number, if provided by the customer."
        },
        {
          "type": "text",
          "name": "date_of_service",
          "title": "Date of Service:",
          "inputType": "date",
          "description": "Select the date the service was performed."
        },
        {
          "type": "text",
          "name": "manufacturer",
          "title": "Manufacturer:",
          "description": "Enter the manufacturer of the equipment being serviced."
        },
        {
          "type": "text",
          "name": "model_number",
          "title": "Model Number:",
          "description": "Enter the model number of the equipment."
        },
        {
          "type": "text",
          "name": "serial_number",
          "title": "Serial Number:",
          "description": "Enter the serial number of the equipment."
        },
        {
          "type": "text",
          "name": "hour_meter_reading",
          "title": "Hour Meter Reading:",
          "description": "Enter the current hour-meter reading from the equipment."
        },
        {
          "type": "checkbox",
          "name": "services_performed",
          "title": "Services Performed:",
          "description": "Select all maintenance tasks that were performed during this service visit.",
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
          "description": "Use the table below to record the status of each maintenance checkpoint. Mark OK, FIT, or REP as applicable.",
          "elements": [
            {
              "type": "matrixdropdown",
              "name": "maintenance_procedures",
              "title": "Class 4 & 5 Forklift Trucks | LPG, Diesel, Gasoline, CNG Pneumatic Tire & Cushion Tire Sit-Down Internal Combustion Lift Trucks",
              "description": "Indicate the condition of each inspection item: OK (working fine), FIT (requires monitoring), or REP (needs repair).",
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
          "title": "Major Safety Concerns that Require Immediate Attention:",
          "description": "Describe any major safety issues discovered during inspection that require urgent repair."
        },
        {
          "type": "text",
          "name": "customer_acceptance",
          "title": "Customer Acceptance",
          "description": "Enter the customer's name or signature acknowledging completion of service."
        },
        {
          "type": "text",
          "name": "date",
          "title": "Date:",
          "inputType": "date",
          "description": "Date when the customer accepted the service."
        },
        {
          "type": "text",
          "name": "print_name",
          "title": "Print Name:",
          "description": "Enter the printed name of the customer or accepting representative."
        },
        {
          "type": "text",
          "name": "phone_number",
          "title": "Phone Number:",
          "description": "Enter a contact phone number for the customer."
        },
        {
          "type": "text",
          "name": "email_address",
          "title": "E-mail Address:",
          "description": "Enter the customer's email address for follow-up or documentation."
        }
      ]
    }
  ]
};

export const third = {
  "pages": [
    {
      "name": "Functionality Verification-2",
      "description": "This page documents all functionality checks performed on the system, including power-up behavior, imaging functions, controls, monitor settings, and safety compliance.",
      "elements": [
        {
          "type": "panel",
          "name": "Functionality Verification",
          "description": "Verify system power, controls, imaging, software versions, and hardware responses.",
          "elements": [
            {
              "type": "radiogroup",
              "name": "Power Switch Illuminated on Power-up",
              "title": "1.1 Power Switch Illuminated on Power-up (remains illuminated with applied power)",
              "description": "Select Yes if the power switch lights up and stays illuminated when the system is powered on.",
              "choices": ["Yes", "No"]
            },
            {
              "type": "radiogroup",
              "name": "Power On Cycle Time",
              "title": "1.2 Power On \"Cycle\" Time Completed in < 90 Seconds",
              "description": "Confirm whether the system completes its power-on cycle within 90 seconds.",
              "choices": ["Yes", "No"]
            },
            {
              "type": "radiogroup",
              "name": "X-Ray Light Illuminates",
              "title": "1.3 X-Ray Light Illuminates with X-Ray activation (tube controls, foot/hand switch)",
              "description": "Check if the X-ray indicator light activates correctly when triggering X-ray.",
              "choices": ["Yes", "No"]
            },
            {
              "type": "radiogroup",
              "name": "Time and Date Correct",
              "title": "1.4 Time and Date Correct. Time Zone Appropriate for Location",
              "description": "Verify that system time and date are accurate for the local time zone.",
              "choices": ["Yes", "No"]
            },
            {
              "type": "text",
              "name": "Software Embedded",
              "title": "1.5 Software: Embedded: OrthoMini Software Version:",
              "description": "Record the installed OrthoMini embedded software version."
            },
            {
              "type": "text",
              "name": "OrthoTouch XLX Version",
              "title": "1.6 OrthoTouch: XLX Version:",
              "description": "Enter the OrthoTouch XLX version running on the system."
            },
            {
              "type": "text",
              "name": "API Version",
              "title": "API Version:",
              "description": "Enter the version number of the API installed on the unit."
            },
            {
              "type": "radiogroup",
              "name": "Verify Network Adapter",
              "title": "1.7 Verify Network adapter/wireless connects to PACS (online)",
              "description": "Check whether the network adapter or Wi-Fi successfully connects to PACS.",
              "choices": ["Yes", "No", "N/A"]
            },
            {
              "type": "radiogroup",
              "name": "Keyboard Rotation Tabs Functional",
              "title": "1.9 Keyboard Image Rotation Tabs Functional: Rotate 360° (both directions)",
              "description": "Verify that the keyboard rotation tabs rotate the image completely in both directions.",
              "choices": ["Yes", "No"]
            },
            {
              "type": "radiogroup",
              "name": "Horizontal Flip Image Tab Functional",
              "title": "1.10 Horizontal Flip Image Tab Functional: Image inverts (inverted F appears)",
              "description": "Confirm that the horizontal flip correctly inverts the image and displays the inverted F.",
              "choices": ["Yes", "No"]
            },
            {
              "type": "radiogroup",
              "name": "Saves All Individual Images to USB",
              "title": "1.11 Saves all / individual images to USB",
              "description": "Check if the system is able to save all or individual images to a USB drive.",
              "choices": ["Yes", "No"]
            },
            {
              "type": "radiogroup",
              "name": "Case Review / Recall Tab Functional",
              "title": "1.12 Case Review / Recall Tab Functional: Displays all images taken and saved",
              "description": "Verify that the Recall tab displays all captured and saved images.",
              "choices": ["Yes", "No"]
            },
            {
              "type": "radiogroup",
              "name": "Thumbnail Images Display",
              "title": "1.13 Thumbnail images display sequentially as taken. Displayed as Tag 1 Tag2",
              "description": "Confirm that thumbnail images appear in correct sequence as they are captured.",
              "choices": ["Yes", "No"]
            },
            {
              "type": "radiogroup",
              "name": "Collimation Mag Mode",
              "title": "1.14 Collimation: Mag Mode and Normal Mode function properly",
              "description": "Verify that collimation works correctly in both Mag and Normal modes.",
              "choices": ["Yes", "No"]
            },
            {
              "type": "radiogroup",
              "name": "Tube Head Controls",
              "title": "1.15 Tube Head Controls: X-Ray Activates, KV, Save, Tag, Print, Rotate (L&R)",
              "description": "Check all tube head control functions including X-ray trigger, KV, Save, Tag, Print, and rotation.",
              "choices": ["Yes", "No"]
            },
            {
              "type": "radiogroup",
              "name": "Tube Head LED",
              "title": "1.16 Tube Head LED: Illuminate, Brightness (Hold LED Lamp & Press KV)",
              "description": "Confirm that the tube head LED illuminates properly and brightness adjusts when KV is pressed.",
              "choices": ["Yes", "No"]
            },
            {
              "type": "radiogroup",
              "name": "Footswitch Activation",
              "title": "1.17 Footswitch: Activate Image and Print/Save if Equipped",
              "description": "Verify that the footswitch triggers image capture and print/save, if supported by the unit.",
              "choices": ["Yes", "No"]
            },
            {
              "type": "text",
              "name": "5 Minute Cumulative Imaging",
              "title": "1.18 5 Minute Cumulative imaging -- set to 40 kV...",
              "description": "Record whether the alarm activates after 5 minutes of continuous blocked fluoro imaging."
            },
            {
              "type": "text",
              "name": "System Imaging",
              "title": "1.20 System stops imaging at 5 min of continuous X-ray (from line 1.19)",
              "description": "Record whether the system automatically stops imaging at the 5-minute limit."
            },
            {
              "type": "matrixdropdown",
              "name": "ABS Image Brightness and Gain",
              "title": "1.21 ABS - Set Image Brightness and Gain:",
              "description": "Enter the ABS brightness/gain values measured under different configurations.",
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
              "title": "1.23 24\" CAWT Monitor Settings",
              "description": "Enter monitor brightness, contrast, sharpness, saturation and color temperature values.",
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
              "description": "Confirm that the laser activates and is centered within the X-ray field.",
              "choices": ["Yes", "No", "N/A"]
            },
            {
              "type": "radiogroup",
              "name": "Perform CHKDSK",
              "title": "1.25 Perform CHKDSK in System Settings",
              "description": "Select Yes if CHKDSK was successfully run in system settings.",
              "choices": ["Yes", "No"]
            },
            {
              "type": "radiogroup",
              "name": "X-Ray Set to 30pps",
              "title": "1.26 X-Ray: Set to 30pps, AKR displays & updates every second",
              "description": "Check that AKR (mGy/min) updates every second at 30pps operation.",
              "choices": ["Yes", "No"]
            },
            {
              "type": "radiogroup",
              "name": "X-Ray Cumulative AKR",
              "title": "1.27 X-Ray: Cumulative AKR updated every 5 seconds",
              "description": "Verify that cumulative AKR updates at 5-second intervals.",
              "choices": ["Yes", "No"]
            },
            {
              "type": "radiogroup",
              "name": "Display of AKR",
              "title": "1.28 AKR display is distinguishable from cumulative air kerma",
              "description": "Confirm that AKR and cumulative kerma are visually distinguishable.",
              "choices": ["Yes", "No"]
            },
            {
              "type": "radiogroup",
              "name": "Minimum Opening",
              "title": "1.29 Minimum Opening 21 CFR 1020.32 compliance",
              "description": "Verify compliance with CFR 1020.32 minimum opening requirements.",
              "choices": ["Yes", "No"]
            },
            {
              "type": "radiogroup",
              "name": "Maximum Opening",
              "title": "1.28 Maximum Opening 21 CFR 1020.32 compliance",
              "description": "Verify compliance with CFR 1020.32 maximum opening requirements.",
              "choices": ["Yes", "No"]
            }
          ]
        }
      ]
    },

    {
      "name": "Visual & Motions-2",
      "description": "This section covers external visual inspection and motion-related checks.",
      "elements": [
        {
          "type": "panel",
          "name": "Visual & Motions",
          "description": "Inspect physical structure, covers, labels, and mechanical motion.",
          "elements": [
            {
              "type": "radiogroup",
              "name": "Panels Covers Secured",
              "title": "2.1 Panels, covers, enclosures secured and aligned",
              "description": "Check that all external panels and covers are secure and properly aligned.",
              "choices": ["Yes", "No"]
            },
            {
              "type": "radiogroup",
              "name": "Equipment & Serial Numbers",
              "title": "2.2 Equipment & Serial Number Labels: Attached & secured in proper location",
              "description": "Verify that equipment labels and serial number labels are present and attached securely.",
              "choices": ["Yes", "No"]
            },
            {
              "type": "radiogroup",
              "name": "Handle Grips Secured",
              "title": "2.3 Monitor: Handle grips secured & aligned. Thumb screw and washer secured",
              "description": "Ensure monitor handle grips, screws, and washers are secure.",
              "choices": ["Yes", "No"]
            },
            {
              "type": "radiogroup",
              "name": "Rotates Freely",
              "title": "2.4 Monitor Arm: Rotates freely & smoothly, remains motionless in all positions",
              "description": "Confirm that the monitor arm moves smoothly and stays in place.",
              "choices": ["Yes", "No"]
            }
          ]
        }
      ]
    },

    {
      "name": "Inspection Settings",
      "description": "Inspection of cables, movement mechanisms, casters, power plug, printer configuration, and cooling.",
      "elements": [
        {
          "type": "panel",
          "name": "Monitor Arm Cables",
          "description": "Check monitor arm wiring, movement, hardware, and related components.",
          "elements": [
            {
              "type": "radiogroup",
              "name": "monitor_arm_cables",
              "title": "Monitor Arm Cables: Secured and routed properly",
              "description": "Ensure the monitor arm cables are properly routed and secured.",
              "choices": ["Yes", "No"]
            },
            {
              "type": "radiogroup",
              "name": "monitor_stop",
              "title": "Monitor stop: Prevents 360° rotation",
              "description": "Verify that the monitor stop prevents full rotation as intended.",
              "choices": ["Yes", "No"]
            },
            {
              "type": "radiogroup",
              "name": "flex_arm",
              "title": "Flex Arm: Motion smooth & holds position. Joints: Secured (no drifting)",
              "description": "Check smooth movement of flex arm and ensure joints do not drift.",
              "choices": ["Yes", "No"]
            },
            {
              "type": "radiogroup",
              "name": "orbital_movements",
              "title": "Orbital Movements: Motions free and smooth, hold position, lock functions",
              "description": "Confirm that orbital motion is smooth and locks properly.",
              "choices": ["Yes", "No"]
            },
            {
              "type": "radiogroup",
              "name": "rotational_movements",
              "title": "Rotational Movements: Motions free and smooth, maintain position",
              "description": "Verify smooth rotational movements without drift.",
              "choices": ["Yes", "No"]
            },
            {
              "type": "radiogroup",
              "name": "casters",
              "title": "Casters: Caster Retaining Bolt installed and secure",
              "description": "Ensure all caster bolts are installed and tight.",
              "choices": ["Yes", "No"]
            },
            {
              "type": "radiogroup",
              "name": "cooling_fans",
              "title": "Cooling Fans and machine clean and dust free",
              "description": "Verify that the fans run properly and the unit is free of dust.",
              "choices": ["Yes", "No"]
            },
            {
              "type": "radiogroup",
              "name": "detector_dock",
              "title": "Detector Dock: Secures Detector/Arm to Cart",
              "description": "Confirm that the detector dock holds the detector/arm securely.",
              "choices": ["Yes", "No"]
            },
            {
              "type": "radiogroup",
              "name": "cord_reel",
              "title": "Cord Reel: Fully extends, locks and retracts properly",
              "description": "Test the cord reel for smooth extension and retraction.",
              "choices": ["Yes", "No"]
            },
            {
              "type": "radiogroup",
              "name": "power_plug",
              "title": "Power Plug: Plug properly secured & terminated to cord",
              "description": "Check the integrity and attachment of the power plug.",
              "choices": ["Yes", "No"]
            },
            {
              "type": "radiogroup",
              "name": "printer_paper_size",
              "title": "Printer Paper Size: Set to 1920X1280 (standard) 3414X2560 (large)",
              "description": "Ensure that printer paper size is configured to the correct resolution.",
              "choices": ["Yes", "No"]
            },
            {
              "type": "radiogroup",
              "name": "printer_queue",
              "title": "Printer Queue: Check and clear if necessary",
              "description": "Verify that the printer queue is clear and functioning normally.",
              "choices": ["Yes", "No"]
            },
            {
              "type": "radiogroup",
              "name": "printer_verification",
              "title": "Printer on: Verify FP, Type: HD Brightness & Contrast: 0 Driver: 898",
              "description": "Confirm printer settings, driver version, and image output configuration.",
              "choices": ["Yes", "No"]
            }
          ]
        }
      ]
    },

    {
      "name": "Pulse OrthoTouch Settings",
      "description": "Configuration settings for Pulse OrthoTouch including scaling, video input, calibration, ABS, MagMode, and auto window/level settings.",
      "elements": [
        {
          "type": "panel",
          "name": "System Configuration Tab",
          "description": "Set and verify global scaling and rotational parameters.",
          "elements": [
            {
              "type": "multipletext",
              "name": "scale_mode",
              "title": "Scale Mode: Auto Scale: 80 Rotation Offset: 0 Rotation Step Degree: 10",
              "description": "Enter values for auto scale, rotation offset, and rotational step increments.",
              "items": [
                { "name": "auto_scale", "title": "Auto Scale" },
                { "name": "rotation_offset", "title": "Rotation Offset" },
                { "name": "rotation_step_degree", "title": "Rotation Step Degree" }
              ]
            }
          ]
        },

        {
          "type": "panel",
          "name": "Input Video Setup Tab",
          "description": "Configure video pattern, frame count, exposure, and timing settings.",
          "elements": [
            {
              "type": "multipletext",
              "name": "video_test_pattern",
              "title": "Video Test Pattern: Off Number of Frames in Full Rate: 2 Offset(ms): _____ Exposure Time (ms): _____",
              "description": "Enter the number of frames, offset timings, and exposure settings.",
              "items": [
                { "name": "frames", "title": "Number of Frames" },
                { "name": "offset", "title": "Offset (ms)" },
                { "name": "exposure_time", "title": "Exposure Time (ms)" }
              ]
            }
          ]
        },

        {
          "type": "panel",
          "name": "Detector Calibration Tab",
          "description": "Calibration entries for dark, gain, bad pixel, and shadow correction.",
          "elements": [
            {
              "type": "multipletext",
              "name": "detector_calibration",
              "title": "Detector Calibration: Dark: __ Gain: __ Bad Pixel: __ Shadow: __",
              "description": "Record detector calibration settings across all calibration modes.",
              "items": [
                { "name": "dark", "title": "Dark" },
                { "name": "gain", "title": "Gain" },
                { "name": "bad_pixel", "title": "Bad Pixel" },
                { "name": "shadow", "title": "Shadow" }
              ]
            }
          ]
        },

        {
          "type": "panel",
          "name": "Motion Detection Setup Tab",
          "description": "Setup values for noise factors and motion detection thresholds.",
          "elements": [
            {
              "type": "multipletext",
              "name": "motion_detection_setup",
              "title": "Min Noise Factor: 4 Max Noise Factor: 16 Threshold: 161",
              "description": "Enter values controlling noise sensitivity and motion detection threshold.",
              "items": [
                { "name": "min_noise_factor", "title": "Min Noise Factor" },
                { "name": "max_noise_factor", "title": "Max Noise Factor" },
                { "name": "threshold", "title": "Threshold" }
              ]
            }
          ]
        },

        {
          "type": "panel",
          "name": "ABS/Mask Setup Tab",
          "description": "Configure ABS mask dimensions and threshold parameters.",
          "elements": [
            {
              "type": "multipletext",
              "name": "abs_mask_setup",
              "title": "ROI - Width: _____ Height: _____ (verify / adjust to inside of masking)",
              "description": "Enter ROI width and height for ABS masking.",
              "items": [
                { "name": "roi_width", "title": "Width" },
                { "name": "roi_height", "title": "Height" }
              ]
            },
            {
              "type": "multipletext",
              "name": "abs_threshold",
              "title": "ABS Threshold: 30 Frame Delay: 8 Frame Hold: 7 Target 500",
              "description": "Enter ABS threshold, frame delay, frame hold, and target settings.",
              "items": [
                { "name": "abs_threshold", "title": "ABS Threshold" },
                { "name": "frame_delay", "title": "Frame Delay" },
                { "name": "frame_hold", "title": "Frame Hold" },
                { "name": "target", "title": "Target" }
              ]
            }
          ]
        },

        {
          "type": "panel",
          "name": "MagMode Setup Tab",
          "description": "Configure MagMode ROI and coordinate boundaries.",
          "elements": [
            {
              "type": "multipletext",
              "name": "magmode_setup",
              "title": "ROI - Width: _____ Height: _____",
              "description": "Enter ROI width and height values for MagMode.",
              "items": [
                { "name": "mag_roi_width", "title": "Width" },
                { "name": "mag_roi_height", "title": "Height" }
              ]
            },
            {
              "type": "multipletext",
              "name": "vertical_coord",
              "title": "Vert Coord: L: _____ R: _____ T: _____ B: _____",
              "description": "Enter left, right, top, and bottom vertical coordinate values.",
              "items": [
                { "name": "vert_coord_l", "title": "L" },
                { "name": "vert_coord_r", "title": "R" },
                { "name": "vert_coord_t", "title": "T" },
                { "name": "vert_coord_b", "title": "B" }
              ]
            },
            {
              "type": "multipletext",
              "name": "horizontal_coord",
              "title": "Hrz Coord: L: _____ R: _____ T: _____ B: _____",
              "description": "Enter left, right, top, and bottom horizontal coordinate values.",
              "items": [
                { "name": "hrz_coord_l", "title": "L" },
                { "name": "hrz_coord_r", "title": "R" },
                { "name": "hrz_coord_t", "title": "T" },
                { "name": "hrz_coord_b", "title": "B" }
              ]
            }
          ]
        },

        {
          "type": "panel",
          "name": "Auto Window/Level Setup Tab",
          "description": "Configure automatic window/level contrast settings.",
          "elements": [
            {
              "type": "multipletext",
              "name": "max_contrast_limit",
              "title": "Max Contrast Limit: 4095 Ref Level: 2047",
              "description": "Enter maximum contrast limit and reference level.",
              "items": [
                { "name": "max_contrast_limit", "title": "Max Contrast Limit" },
                { "name": "ref_level", "title": "Ref Level" }
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
      "description": "This page collects user feedback on service quality, personal details, address information, and a signature for confirmation.",
      "elements": [
        {
          "type": "matrixdropdown",
          "name": "inputTable",
          "title": "Input Table Questions",
          "description": "Rate each category by selecting how satisfied you are, or provide additional comments if needed.",
          "columns": [
            {
              "name": "Not Satisfied",
              "description": "Select if you are not satisfied with this specific category."
            },
            {
              "name": "Somewhat Satisfied",
              "description": "Select if you are partially satisfied with the category."
            },
            {
              "name": "Satisfied",
              "description": "Select if you are fully satisfied with the category."
            },
            {
              "name": "Any thoughts?",
              "description": "Optional field to enter comments, suggestions, or general thoughts."
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
          "description": "Enter your complete name including first and last name.",
          "items": [
            {
              "name": "firstName",
              "title": "First Name",
              "description": "Enter your given name."
            },
            {
              "name": "lastName",
              "title": "Last Name",
              "description": "Enter your family or surname."
            }
          ]
        },
        {
          "type": "multipletext",
          "name": "address",
          "title": "Address Questions",
          "description": "Provide your full address details for record purposes.",
          "items": [
            {
              "name": "streetAddress",
              "title": "Street Address",
              "description": "Enter your primary street address."
            },
            {
              "name": "streetAddressLine2",
              "title": "Street Address Line 2",
              "description": "Enter apartment, suite, unit, or additional address information (optional)."
            },
            {
              "name": "city",
              "title": "City",
              "description": "Enter the city where you reside."
            },
            {
              "name": "stateProvince",
              "title": "State / Province",
              "description": "Enter your state, province, or territory."
            },
            {
              "name": "postalZipCode",
              "title": "Postal / Zip Code",
              "description": "Enter your area's postal or ZIP code."
            }
          ]
        },
        {
          "type": "signaturepad",
          "name": "signature",
          "title": "Signature Questions",
          "description": "Provide your signature to verify and confirm your submitted feedback."
        }
      ]
    }
  ]
};

export const fifth = {
  "pages": [
    {
      "name": "Safe to Perform - Risk and Impact",
      "description": "This section captures key details and safety confirmations before beginning work, ensuring risks, procedures, and responsibilities are clear.",
      "elements": [
        {
          "type": "text",
          "name": "name_of_person_completing_form",
          "title": "Name of person completing form",
          "description": "Enter the full name of the individual filling out this form."
        },
        {
          "type": "text",
          "name": "title",
          "title": "Title",
          "description": "Enter the job title or role of the person completing the form."
        },
        {
          "type": "text",
          "name": "scope_of_work",
          "title": "Scope of work",
          "description": "Briefly describe the specific scope of work being performed."
        },
        {
          "type": "panel",
          "name": "scope_of_work_panel",
          "title": "1. Scope of Work:",
          "description": "Confirm that the scope of work, procedures, risks, and requirements are understood and aligned with customer expectations.",
          "elements": [
            {
              "type": "checkbox",
              "name": "confirm_scope_with_customer",
              "title": "Confirm Scope of Work with customer...",
              "description": "Select Yes to confirm that the scope of work has been reviewed and aligned with the customer.",
              "choices": ["Yes"]
            },
            {
              "type": "checkbox",
              "name": "confirm_operational_procedures",
              "title": "Confirm operational procedures match the scope of work.",
              "description": "Verify that procedures are appropriate for the planned work.",
              "choices": ["Yes"]
            },
            {
              "type": "checkbox",
              "name": "confirm_service_provided",
              "title": "Confirm team understands procedure requirements.",
              "description": "Ensure all team members understand task expectations and workflow.",
              "choices": ["Yes"]
            },
            {
              "type": "checkbox",
              "name": "confirm_risk_assessments",
              "title": "Confirm risk assessments match the service provided...",
              "description": "Verify that risk assessments are appropriate and additional hazards are documented.",
              "choices": ["Yes"]
            },
            {
              "type": "checkbox",
              "name": "confirm_energy_isolation",
              "title": "Confirm the sites procedure on Energy Isolation (LOTO)...",
              "description": "Ensure team understands Lockout/Tagout procedures and roles.",
              "choices": ["Yes"]
            },
            {
              "type": "checkbox",
              "name": "confirm_equipment_and_tooling",
              "title": "Confirm if equipment and tooling rig up...",
              "description": "Check whether equipment/tooling introduces additional hazards.",
              "choices": ["Yes"]
            },
            {
              "type": "checkbox",
              "name": "confirm_site_compliance",
              "title": "Confirm compliance with the site's process...",
              "description": "Ensure permit-required work complies with site rules.",
              "choices": ["Yes"]
            }
          ]
        },

        {
          "type": "panel",
          "name": "communication_panel",
          "title": "3. Communication:",
          "description": "Confirm communication readiness, emergency plans, points of contact, and hazardous areas.",
          "elements": [
            {
              "type": "checkbox",
              "name": "confirm_simultaneous_operations",
              "title": "Confirm with customer planned Simultaneous operations.",
              "description": "Check whether simultaneous operations were reviewed with the customer.",
              "choices": ["Yes"]
            },
            {
              "type": "checkbox",
              "name": "identify_points_of_contact",
              "title": "Identify points of contact for the location.",
              "description": "Ensure all POCs for the job site have been identified.",
              "choices": ["Yes"]
            },
            {
              "type": "checkbox",
              "name": "confirm_emergency_response_plan",
              "title": "Confirm briefing of the location's Emergency Response plan.",
              "description": "Verify team understanding of emergency and evacuation procedures.",
              "choices": ["Yes"]
            },
            {
              "type": "checkbox",
              "name": "confirm_hazardous_locations",
              "title": "Confirm site's Hazardous(Classified) locations.",
              "description": "Identify any restricted or hazardous areas within the facility.",
              "choices": ["Yes"]
            }
          ]
        },

        {
          "type": "panel",
          "name": "loss_of_integrity_panel",
          "title": "4. Loss of Primary Containment or Loss of Mechanical Integrity:",
          "description": "Confirm barriers and safeguards preventing containment loss or mechanical failure.",
          "elements": [
            {
              "type": "checkbox",
              "name": "confirm_physical_barriers",
              "title": "Confirm required physical or equipment barriers...",
              "description": "Verify that mechanical and non-mechanical containment controls are in place.",
              "choices": ["Yes"]
            },
            {
              "type": "checkbox",
              "name": "confirm_alarms_or_safeguards",
              "title": "Confirm alarms or safeguards...",
              "description": "Ensure alarms, interlocks, and safeguard settings follow approved plans.",
              "choices": ["Yes"]
            }
          ]
        },

        {
          "type": "panel",
          "name": "line_of_fire_panel",
          "title": "5. Line of Fire:",
          "description": "Ensure personnel are protected from moving equipment, vehicles, or hazardous zones.",
          "elements": [
            {
              "type": "checkbox",
              "name": "confirm_safe_distance",
              "title": "Confirm a safe distance...",
              "description": "Check that staging areas and personnel are positioned safely.",
              "choices": ["Yes"]
            },
            {
              "type": "checkbox",
              "name": "confirm_parking_brakes",
              "title": "Confirm vehicles parking brakes are set...",
              "description": "Confirm all parked vehicles are secured and stabilized.",
              "choices": ["Yes"]
            },
            {
              "type": "checkbox",
              "name": "confirm_restricted_areas",
              "title": "Confirm site's Restricted Access Zones...",
              "description": "Verify that restricted and no‑entry zones are understood.",
              "choices": ["Yes"]
            }
          ]
        },

        {
          "type": "panel",
          "name": "personnel_safety_panel",
          "title": "6. Personnel Safety:",
          "description": "Assess personal readiness and job safety conditions for all team members.",
          "elements": [
            {
              "type": "checkbox",
              "name": "confirm_fatigue_management",
              "title": "Confirm Baker Hughes Personnel are following the fatigue management guidelines...",
              "description": "Ensure personnel are fit for duty and not fatigued.",
              "choices": ["Yes"]
            },
            {
              "type": "checkbox",
              "name": "confirm_environmental_conditions",
              "title": "Confirm Environmental conditions...",
              "description": "Evaluate weather and environmental conditions for safe operation.",
              "choices": ["Yes"]
            },
            {
              "type": "checkbox",
              "name": "identify_uncontrolled_hazards",
              "title": "Before starting work, the job lead shall identify...",
              "description": "Document any uncontrolled hazards and recommended controls.",
              "choices": ["Yes"]
            }
          ]
        },

        {
          "type": "panel",
          "name": "additional_assurance_panel",
          "title": "7. Additional Assurance:",
          "description": "Record any further safety notes or considerations.",
          "elements": [
            {
              "type": "comment",
              "name": "additional_assurance_other",
              "title": "Other:",
              "description": "Enter any additional observations or assurances related to the work."
            }
          ]
        },

        {
          "type": "panel",
          "name": "additional_comments_panel",
          "title": "8. Additional Comments:",
          "description": "Provide extra comments or notes related to job safety or work conditions.",
          "elements": [
            {
              "type": "comment",
              "name": "additional_comments",
              "title": "Additional Comments:",
              "description": "Enter any general comments or important notes."
            }
          ]
        }
      ]
    },

    {
      "name": "Job Lead Sign-off",
      "description": "This section captures the job lead's signature and crew verification after work is completed.",
      "elements": [
        {
          "type": "text",
          "name": "job_lead_print_sign",
          "title": "Job Lead (Print and Sign)",
          "description": "Enter the job lead's printed name and signature."
        },
        {
          "type": "text",
          "name": "names_initials_all_crew_members_present",
          "title": "Names and Initials of All Crew Members Present",
          "description": "List all crew members and their initials confirming participation."
        },
        {
          "type": "comment",
          "name": "completion_of_work",
          "title": "Completion of Work",
          "description": "Describe the final condition of work or provide completion notes."
        },
        {
          "type": "text",
          "name": "initials",
          "title": "Initials",
          "description": "Enter your initials to confirm accuracy of information provided."
        },
        {
          "type": "text",
          "name": "date",
          "title": "Date",
          "inputType": "date",
          "description": "Select the date when the job lead completed the sign-off."
        }
      ]
    },

    {
      "name": "Risk Assessments",
      "description": "Document hazards, controls, and responsible persons for each job step.",
      "elements": [
        {
          "type": "matrixdropdown",
          "name": "risk_assessments",
          "title": "Risk Assessments",
          "description": "Identify hazards, planned controls, and assigned personnel for each job step.",
          "columns": [
            {
              "name": "hazards",
              "title": "Hazards",
              "cellType": "text",
              "description": "List all hazards associated with this job step."
            },
            {
              "name": "controls",
              "title": "Controls",
              "cellType": "text",
              "description": "Describe recommended or implemented controls."
            },
            {
              "name": "assigned_persons",
              "title": "Assigned Persons",
              "cellType": "text",
              "description": "Enter the names of individuals responsible for implementing controls."
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
      "description": "Document Lockout/Tagout steps including sources of energy and verification actions.",
      "elements": [
        {
          "type": "matrix",
          "name": "loto_procedure",
          "title": "LOTO Procedure",
          "description": "Provide details of the energy sources, isolation devices, and steps required to verify zero energy state.",
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
      "description": "This section collects job details, employee status, potential hazards, and job preparation information.",
      "elements": [
        {
          "type": "text",
          "name": "wo_job_task",
          "title": "WO/Job/Task:",
          "description": "Enter the work order number, job identifier, or task reference."
        },
        {
          "type": "text",
          "name": "date",
          "title": "Date:",
          "inputType": "date",
          "description": "Select the date when this form is being completed."
        },
        {
          "type": "text",
          "name": "work_location",
          "title": "Work Location:",
          "description": "Specify the location where the work is being performed."
        },
        {
          "type": "radiogroup",
          "name": "employee_status",
          "title": "Employee(s):",
          "description": "Select whether the employee(s) is new or this is a revised entry.",
          "choices": ["New", "Revised"]
        },
        {
          "type": "text",
          "name": "hazardous_part",
          "title": "What is the most hazardous part of this job and what are you going to do to control the hazard?",
          "description": "Describe the primary hazard associated with the job and the control measures."
        },
        {
          "type": "checkbox",
          "name": "training",
          "title": "Are you properly trained to complete these tasks?",
          "description": "Select the correct designation indicating proper training or supervision.",
          "choices": ["SSE", "Mentor"]
        },
        {
          "type": "text",
          "name": "completion_needs",
          "title": "What do you need to ensure this job is completed incident and injury free?",
          "description": "List equipment, tools, conditions, or approvals needed for safe completion."
        },
        {
          "type": "text",
          "name": "conditions_changes",
          "title": "What conditions, job changes, or distractions could call for the need to use Stop Work Authority?",
          "description": "Identify conditions or changes that may require job stoppage for safety."
        }
      ]
    },

    {
      "name": "Job Steps and Hazards",
      "description": "Document each job step along with associated hazards and recommended actions.",
      "elements": [
        {
          "type": "matrixdropdown",
          "name": "job_steps_hazards",
          "title": "Sequence of Job Steps, Potential Hazard(s), Recommended Action/Procedure",
          "description": "Provide details for each job step including potential hazards and corresponding mitigation actions.",
          "columns": [
            {
              "name": "potential_hazard",
              "title": "Potential Hazard(s)",
              "cellType": "text",
              "description": "Describe hazards associated with this job step."
            },
            {
              "name": "recommended_action",
              "title": "Recommended Action/Procedure",
              "cellType": "text",
              "description": "Provide the appropriate action or method to control the hazard."
            }
          ],
          "rows": [
            { "value": "step1", "text": "Step 1" },
            { "value": "step2", "text": "Step 2" },
            { "value": "step3", "text": "Step 3" }
          ]
        }
      ]
    },

    {
      "name": "Personal Protective Equipment",
      "description": "Identify required PPE, permits, gas detection needs, and hazardous substances.",
      "elements": [
        {
          "type": "checkbox",
          "name": "personal_protective_equipment",
          "title": "Additional Personal Protective Equipment Required",
          "description": "Select all PPE required for this job.",
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
          "description": "Choose all permits or plans needed for safe job execution.",
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
          "title": "Gas Detection Equipment Needed",
          "description": "Select Yes if gas detection equipment is required for this task."
        },
        {
          "type": "checkbox",
          "name": "hazardous_substances",
          "title": "List hazardous substances MSDS reviewed?",
          "description": "Indicate whether hazardous substances were identified and MSDS reviewed.",
          "choices": ["Yes", "N/A"]
        }
      ]
    },

    {
      "name": "Site Control and Environmental Conditions",
      "description": "Evaluate site control measures, weather, terrain, energy control, and ergonomic hazards.",
      "elements": [
        {
          "type": "checkbox",
          "name": "site_control",
          "title": "Site Control",
          "description": "Select site control measures implemented at the work area.",
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
          "title": "Weather:",
          "description": "Describe current weather conditions relevant to work safety."
        },
        {
          "type": "text",
          "name": "terrain",
          "title": "Terrain:",
          "description": "Describe terrain conditions that may affect the job."
        },
        {
          "type": "checkbox",
          "name": "hazardous_energy_control",
          "title": "Hazardous Energy Control",
          "description": "Select all applicable hazardous energy control steps taken for the job.",
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
          "description": "Identify ergonomic risks present during the job.",
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
      "description": "Document tool inspections and equipment needed for the job.",
      "elements": [
        {
          "type": "boolean",
          "name": "tools_inspection_complete",
          "title": "Pre-use inspection complete",
          "description": "Select Yes if all tools and equipment have been inspected prior to use."
        },
        {
          "type": "text",
          "name": "tools_equipment",
          "title": "List tools/equipment being used:",
          "description": "Provide a full list of all tools and equipment required for the job."
        }
      ]
    },

    {
      "name": "Work Site Diagram",
      "description": "Sketch the work area including hazards, equipment setup, and safety routes.",
      "elements": [
        {
          "type": "comment",
          "name": "work_site_diagram",
          "title": "Work Site Diagram – include equipment set-up, evacuation route, assembly area, and identified hazards",
          "description": "Draw or describe the work site layout, including hazard zones and evacuation paths."
        },
        {
          "type": "text",
          "name": "jsa_reviewed_by",
          "title": "JSA Reviewed By:",
          "description": "Enter the name of the person who reviewed the Job Safety Analysis."
        }
      ]
    }
  ]
};

export const seventh = {
  "pages": [
    {
      "name": "Cabin",
      "elements": [
        {
          "type": "checkbox",
          "name": "cabin_condition",
          "title": "Is the cabin free of damage, properly assembled, and clean?",
          "description": "Verify condition meets requirement."
        },
        {
          "type": "checkbox",
          "name": "fasteners_condition",
          "title": "Are all fasteners tight in the cabin and cabin assembly?",
          "description": "Verify condition meets requirement."
        },
        {
          "type": "checkbox",
          "name": "steps_condition",
          "title": "Are all steps and handles in good condition, free of sharp edges, and properly fastened?",
          "description": "Verify condition meets requirement."
        },
        {
          "type": "checkbox",
          "name": "cabin_door_condition",
          "title": "Are the cabin doors correctly mounted and open and close correctly?",
          "description": "Verify condition meets requirement."
        },
        {
          "type": "checkbox",
          "name": "mechanical_lock_system",
          "title": "Does the mechanical lock system of the door function correctly?",
          "description": "Verify condition meets requirement."
        },
        {
          "type": "checkbox",
          "name": "anchor_points_condition",
          "title": "Are all anchor points present and free from damage?",
          "description": "Verify condition meets requirement."
        },
        {
          "type": "checkbox",
          "name": "anchor_points_torque",
          "title": "Are all anchor points torqued to 15Nm?",
          "description": "Verify condition meets requirement."
        },
        {
          "type": "checkbox",
          "name": "top_obstruction_device",
          "title": "Is the top obstruction device present, correctly assembled, free moving and damage free?",
          "description": "Verify condition meets requirement."
        },
        {
          "type": "checkbox",
          "name": "top_obstruction_device_travel",
          "title": "When the top obstruction device is pressed, does it prevent upwards travel of the lift?",
          "description": "Verify condition meets requirement."
        },
        {
          "type": "checkbox",
          "name": "cabin_present",
          "title": "Is the cabin roof present, correctly assembled, free moving, and free of damage?",
          "description": "Verify condition meets requirement."
        },
        {
          "type": "checkbox",
          "name": "cabin_roof_press",
          "title": "When the cabin roof is pressed, is it movement stopped?",
          "description": "Verify condition meets requirement."
        },
        {
          "type": "checkbox",
          "name": "cabin_not_working",
          "title": "Does each switch of the cabin not working properly?",
          "description": "Verify condition meets requirement."
        },
        {
          "type": "checkbox",
          "name": "hatch_present",
          "title": "Is the hatch present, correctly assembled, bolts tight, and free of damage?",
          "description": "Verify condition meets requirement."
        },
        {
          "type": "checkbox",
          "name": "hatch_opening",
          "title": "When the hatch is open, is it movement stopped?",
          "description": "Verify condition meets requirement."
        },
        {
          "type": "checkbox",
          "name": "bottom_obstruction_device",
          "title": "Is the bottom obstruction device present, correctly assembled, free moving and damage free?",
          "description": "Verify condition meets requirement."
        },
        {
          "type": "checkbox",
          "name": "bottom_obstruction_device_travel",
          "title": "When the bottom obstruction device is pressed, does it prevent downwards travel of the lift?",
          "description": "Verify condition meets requirement."
        },
        {
          "type": "checkbox",
          "name": "cables_length",
          "title": "Are the tail units of the bottom obstruction device correctly fixed and cables of same length?",
          "description": "Verify condition meets requirement."
        },
        {
          "type": "checkbox",
          "name": "bottom_hatch_present",
          "title": "Is the bottom hatch present, correctly assembled, bolts tight, and free of damage?",
          "description": "Verify condition meets requirement."
        },
        {
          "type": "checkbox",
          "name": "bottom_hatch_opening",
          "title": "When the bottom hatch is open, is lift movement stopped?",
          "description": "Verify condition meets requirement."
        },
        {
          "type": "checkbox",
          "name": "emergency_limit_switch_adjusted",
          "title": "Is the emergency limit switch (S13) correctly adjusted regarding the top limit plate?",
          "description": "Verify condition meets requirement."
        },
        {
          "type": "checkbox",
          "name": "bottom_limit_plate_condition",
          "title": "Is the bottom limit plate present, correctly assembled, bolts tight, and free of damage?",
          "description": "Verify condition meets requirement."
        },
        {
          "type": "checkbox",
          "name": "emergency_limit_switch_bottom",
          "title": "Is the emergency limit switch (S13) correctly adjusted regarding the bottom limit plate?",
          "description": "Verify condition meets requirement."
        },
        {
          "type": "checkbox",
          "name": "emergency_limit_switch_engaged",
          "title": "When the emergency limit switch (S13) is engaged, is lift movement stopped?",
          "description": "Verify condition meets requirement."
        },
        {
          "type": "checkbox",
          "name": "guide_rollers_condition",
          "title": "Are all ten (10) of the guide rollers present and free from corrosion or damage?",
          "description": "Verify condition meets requirement."
        },
        {
          "type": "checkbox",
          "name": "guide_rollers_surface_uniformity",
          "title": "Are all ten (10) of the guide rollers surface uniform and free from damage?",
          "description": "Verify condition meets requirement."
        },
        {
          "type": "checkbox",
          "name": "guide_rollers_diameter",
          "title": "Are all counter guide rollers within dimensional tolerance (48-50mm)?",
          "description": "Verify condition meets requirement."
        },
        {
          "type": "checkbox",
          "name": "guide_rollers_installed",
          "title": "Are guide rollers within dimensional tolerance (46-50mm)?",
          "description": "Verify condition meets requirement."
        },
        {
          "type": "checkbox",
          "name": "anti_derailment_brackets",
          "title": "Are both anti-derailment brackets installed within 4mm of the ladder?",
          "description": "Verify condition meets requirement."
        },
        {
          "type": "checkbox",
          "name": "anti_derailment_brackets_torqued",
          "title": "Are both anti-derailment brackets marked and torqued to 15Nm?",
          "description": "Verify condition meets requirement."
        },
        {
          "type": "checkbox",
          "name": "inductive_sensor_condition",
          "title": "Is the inductive sensor correctly installed and functioning (illuminated)?",
          "description": "Verify condition meets requirement."
        },
        {
          "type": "checkbox",
          "name": "clear_air_deck_openings",
          "title": "Does the clear all deck openings with at least 25mm clearance?",
          "description": "Verify condition meets requirement."
        },
        {
          "type": "checkbox",
          "name": "clear_all_brackets",
          "title": "Does the clear all brackets, cables, fall arrest systems, and ladder parts the entire tower?",
          "description": "Verify condition meets requirement."
        }
      ]
    },

  {
      "name": "Traction System",
      "elements": [
        {
          "type": "radiogroup",
          "name": "top_pinion_engaged",
          "title": "Is the top pinion centered on the rack and teeth correctly engaged?",
          "description": "Verify condition meets requirement."
        },
        {
          "type": "radiogroup",
          "name": "top_pinion_greased",
          "title": "Is the pinion of the top motor correctly greased without any accumulation of grease/metal flake mix?",
          "description": "Verify condition meets requirement."
        },
        {
          "type": "radiogroup",
          "name": "top_motor_brake_function",
          "title": "Does the top motor brake function correctly?",
          "description": "Verify condition meets requirement."
        },
        {
          "type": "text",
          "name": "top_motor_brake_gap",
          "title": "Is the air gap of the top motor brake and the pad thickness with specification? (0.3-0.5mm)",
          "description": "Verify condition meets requirement."
        },
        {
          "type": "radiogroup",
          "name": "gearbox_top_motor_leaks",
          "title": "Is the gearbox of the top motor free of oil leaks?",
          "description": "Verify condition meets requirement."
        },
        {
          "type": "radiogroup",
          "name": "bottom_pinion_engaged",
          "title": "Is the bottom pinion centered on the rack and teeth correctly engaged?",
          "description": "Verify condition meets requirement."
        },
        {
          "type": "radiogroup",
          "name": "bottom_pinion_greased",
          "title": "Is the pinion of the bottom motor correctly greased without any accumulation of grease/metal flake mix?",
          "description": "Verify condition meets requirement."
        },
        {
          "type": "radiogroup",
          "name": "bottom_motor_brake_function",
          "title": "Does the bottom motor brake function correctly?",
          "description": "Verify condition meets requirement."
        },
        {
          "type": "text",
          "name": "bottom_motor_brake_gap",
          "title": "Is the air gap of the bottom motor brake and the pad thickness with specification? (0.3-0.5mm)",
          "description": "Verify condition meets requirement."
        },
        {
          "type": "radiogroup",
          "name": "gearbox_bottom_motor_leaks",
          "title": "Is the gearbox of the bottom motor free of oil leaks?",
          "description": "Verify condition meets requirement."
        }
      ]
    },
    {
      "name": "Mechanical Stops",
      "elements": [
        {
          "type": "radiogroup",
          "name": "mechanical_stop_installed",
          "title": "Is the top mechanical stop present, installed correctly, free of damage, level, and ladder attaching bolts marked and torqued to 15Nm?",
          "description": "Verify condition meets requirement."
        },
        {
          "type": "radiogroup",
          "name": "bottom_mechanical_stop_installed",
          "title": "Is the bottom mechanical stop present, installed correctly free of damage, level, and ladder attaching bolts marked and torqued to 15Nm?",
          "description": "Verify condition meets requirement."
        }
      ]
    },
    
    {
        "name": "Cabin Control Box",
        "elements": [
        {
            "type": "radiogroup",
            "name": "cabin_control_fastened",
            "title": "Is the cabin control box correctly fastened, clean, and free of visible damage?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "switches_connected",
            "title": "Are all switches connected in the correct location on the control box?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "on_off_switch_function",
            "title": "Does the On/Off switch function correctly?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "door_open_fault",
            "title": "Does the red fault light illuminate when the door is open?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "estop_pressed_fault",
            "title": "Does the red fault light illuminate when the E-stop is pressed?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "hatch_open_fault",
            "title": "Does the red fault light illuminate when the hatch is open?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "emergency_limit_switch",
            "title": "Does the red fault light illuminate when the emergency limit switch is engaged?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "cabin_fault_pressed",
            "title": "Does the red fault light illuminate when cabin roof is pressed?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "cabin_position_fault",
            "title": "Does the red fault light illuminate when the cabin is off in which is in the off position?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "up_button_move_fault",
            "title": "Does pressing the up button move the lift in the upwards and illuminate the green Up light of the external control boxes?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "down_button_move_fault",
            "title": "Does pressing the down button move the lift downwards and illuminate the green Down light of the external control boxes?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "estop_button_move_fault",
            "title": "Does pressing the E-stop button prevent the lift from moving up or down?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "platform_light_fault",
            "title": "Does the Platform light illuminate when the lift is at the top and bottom platforms?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "all_switches_present",
            "title": "Are rollers present on all switches?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "rollers_adjusted",
            "title": "Are all switches adjusted so that the roller is in the center of the contact surface?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "load_cells_brand",
            "title": "Are the load cells and the weighing module the same brand?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "load_250kg",
            "title": "When a load of 250kg is placed on the cabin floor, is the lift able to move upwards and downwards?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "load_315kg",
            "title": "When a load of 315kg is placed on the cabin floor, is the overload light lit and the lift unable to move upwards and downwards?",
            "description": "Verify condition meets requirement."
        }
        ]
    },
    {
        "name": "Top Platform Control Box",
        "elements": [
        {
            "type": "radiogroup",
            "name": "top_platform_correctly_mounted",
            "title": "Is the Top Platform Control box correctly mounted, free of damage, and clean?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "directions_lights_functioning",
            "title": "Do both of the directions lights illuminate correctly for lift travel direction?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "green_ready_light_function",
            "title": "Does the green ready light illuminate when the lift is ready for use?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "up_call_button_function",
            "title": "Does the Up Call button function correctly?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "red_fault_light_door_open",
            "title": "Does the red fault light illuminate when the door is open?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "red_fault_light_e_stop",
            "title": "Does the red fault light illuminate when the E-stop is pressed?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "red_fault_light_hatch_open",
            "title": "Does the red fault light illuminate when the hatch is open?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "red_fault_light_emergency_switch",
            "title": "Does the red fault light illuminate when the emergency limit switch is engaged?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "red_fault_light_cabin_roof",
            "title": "Does the red fault light illuminate when cabin roof is pressed?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "red_fault_light_cabin_switch",
            "title": "Does the red fault light illuminate when the cabin on/off switch is in the off position?",
            "description": "Verify condition meets requirement."
        }
        ]
    },
    {
        "name": "Bottom Platform Control Box",
        "elements": [
        {
            "type": "radiogroup",
            "name": "bottom_platform_correctly_mounted",
            "title": "Is the Bottom Platform Control box correctly mounted, free of damage, and clean?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "on_off_main_switch_functioning",
            "title": "Is the On/Off main switch free of damage and correctly functioning?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "directions_lights_functioning_bottom",
            "title": "Do both of the directions lights illuminate correctly for lift travel direction?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "green_ready_light_function_bottom",
            "title": "Does the green ready light illuminate when the lift is ready for use?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "down_call_button_function",
            "title": "Does the Down Call button function correctly?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "red_fault_light_door_open_bottom",
            "title": "Does the red fault light illuminate when the door is open?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "red_fault_light_e_stop_bottom",
            "title": "Does the red fault light illuminate when the E-stop is pressed?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "red_fault_light_hatch_open_bottom",
            "title": "Does the red fault light illuminate when the hatch is open?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "red_fault_light_emergency_switch_bottom",
            "title": "Does the red fault light illuminate when the emergency limit switch is engaged?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "red_fault_light_cabin_function",
            "title": "Does the red fault light illuminate when cabin on/off switch is in the off position?",
            "description": "Verify condition meets requirement."
        }
        ]
    },

    {
        "name": "Mid Tower Junction Box",
        "elements": [
        {
            "type": "radiogroup",
            "name": "mid_tower_correctly_mounted",
            "title": "Is the Mid Tower Junction box correctly mounted, free of damage, and clean?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "all_connectors_locked",
            "title": "Are all connectors fully locked into position?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "cables_secured",
            "title": "Are all cables secured and cleanly routed around the junction box?",
            "description": "Verify condition meets requirement."
        }
        ]
    },

    {
        "name": "Signage",
        "elements": [
        {
            "type": "radiogroup",
            "name": "serial_number_plate_lift",
            "title": "Is the Serial Number plate present inside the lift?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "serial_number_plate_rack_ladders",
            "title": "Is the Serial Number plate present on the rack ladders?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "manual_present_blue_cabin",
            "title": "Is the Manual present inside the blue cabin in the cabin?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "quick_guide_present",
            "title": "Is the Quick Guide present inside the cabin?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "use_of_ppe_sticker",
            "title": "Is the Use of PPE sticker present inside the cabin?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "work_load_persons_sticker",
            "title": "Is the Work Load/No of Persons sticker present on the front side of the cabin?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "risk_of_falling_sticker",
            "title": "Is the Warning Risk of Falling sticker present on the motor cover?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "risk_of_crushing_sticker",
            "title": "Is the Warning Risk of Crushing stickers present on each pinion cover?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "manual_descend_sticker",
            "title": "Is the Manual Descend sticker present on the motor cover?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "wiring_diagram_present",
            "title": "Is the Wiring Diagram present inside the bottom platform control box?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "warning_disconnection_sticker",
            "title": "Is the Electrical Warning Disconnection sticker present on the bottom platform control box?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "alignment_stickers_present",
            "title": "Are the Alignment stickers present inside the cabin and at each landing?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "lubrication_sticker_present",
            "title": "Is the Lubrication sticker present on the motor cover?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "radiogroup",
            "name": "electrical_hazard_sticker",
            "title": "Is the Electrical Hazard sticker present on the cabin control box?",
            "description": "Verify condition meets requirement."
        }
        ]
    },

    {
        "name": "Electrical Cables",
        "elements": [
        {
            "type": "boolean",
            "name": "areElectricalCablesFreeOfDamage",
            "title": "Are all electrical cables free of damage?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "boolean",
            "name": "areElectricalCablesProperlyRouted",
            "title": "Are all electrical cables properly routed and fixed with necessary cable ties?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "boolean",
            "name": "isTheFlatRailingCableFreeOfDamage",
            "title": "Is the flat railing cable free of damage?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "boolean",
            "name": "arePlasticTiesCorrectlyInstalled",
            "title": "Are there plastic ties correctly installed on the bottom limit stop to prevent electrical wire tangles?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "boolean",
            "name": "isTheThinWireRopeCorrectlyInstalled",
            "title": "Is there a thin wire rope correctly installed between the bottom limit plate and the fence to prevent electrical wire tangles?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "boolean",
            "name": "isTheIntermediateArmCorrectlyAttached",
            "title": "Is the intermediate arm for electric cable correctly attached above the midpoint in the tower per the integration drawing?",
            "description": "Verify condition meets requirement."
        }
        ]
    },

    {
        "name": "Ladder System",
        "elements": [
        {
            "type": "boolean",
            "name": "areAllPlatformsPresent",
            "title": "Are all rest platforms present at distance defined by integration drawing?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "boolean",
            "name": "isAllRestPlatformFastenerAttached",
            "title": "Are all rest platform fastener attached to ladder marked and torqued to 50Nm?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "boolean",
            "name": "areAllRestPlatformsSelfTracking",
            "title": "Are all rest platforms self-tracking to folded position?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "boolean",
            "name": "areAllUBoltsAttached",
            "title": "Are all U-Bolts attaching ladder marked and torqued to 50Nm?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "boolean",
            "name": "areAllLadderSectionsBolted",
            "title": "Are all ladder sections bolted together with each faster marked and torque to 50Nm?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "boolean",
            "name": "isTheInclinationToleranceMet",
            "title": "Are all ladders within the tower within the inclination tolerance per the manual? (Less than 0.5°)",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "text",
            "name": "distanceBetweenLadderSections",
            "title": "What is the distance between the ladder sections within tolerance?",
            "inputType": "number",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "boolean",
            "name": "areAllLowerSupportBracketsPresent",
            "title": "Are all lower support brackets present according to the integration drawing?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "boolean",
            "name": "areAllLowerSupportBracketsFreeOfDamage",
            "title": "Are all lower support brackets free of damage, cracks, rust, and corrosion?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "boolean",
            "name": "areAllLowerSupportBracketFastenersMarked",
            "title": "Are all lower support bracket fasteners marked and torque to 12 Nm?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "boolean",
            "name": "isThereMoreThan5mmFreeDistance",
            "title": "Is there more than 5mm of free distance from any bolt to the top end of the ladder anchorages slots?",
            "description": "Verify condition meets requirement."
        },
        {
            "type": "checkbox",
            "name": "liftWorkCageCondition",
            "title": "Lift/Work Cage condition:",
            "choices": [
            "Lift/Work Cage is in good working condition, no significant repair were required",
            "Lift/Work Cage is in good working condition after repairs made as listed on defect report",
            "Lift/Work Cage requires repairs beyond what was completed and is deemed unusable"
            ],
            "description": "Verify condition meets requirement."
        }
        ]
    }

  ]
};