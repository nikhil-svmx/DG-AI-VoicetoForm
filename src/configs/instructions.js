export const firstInst = `I'm Gopal, and I'm doing the radiation QC today. I'm testing the machine with serial number H635F on 26th Jan 2026. 
The test equipment I'm using is U564G, and the calibration due date is 2nd february 2026. 
For the manual mode at 30PPS, let me note the measurements. At 56 kV it was giving me the measured 54 kV around what the instrument showed with 53 micro Gy/s with a range of 56, 
for 66 kV it looked like it was measuring around 60 kV, and the dose rate there was something like 45 micro-Gy per second while the range is 40 to 50. 
For 75 and 78 it is reading 76kv and showed 80 micro gy per second for both. Range of 75KV is 75 to 80 and for 77 KV it is around 79 to 90 micro gy/s.
For the displayed AKR deviation 30PPS, 78 kV, It measured 30 percent of adult cu and 38 percent of pediatric filtered cu and it is in acceptable range of 20 to 40.
Since everything generally looks good, so the results as PASS unless I saw something off. `;

export const secondInst = `So this is Gopal - gopal.service@mechlift.com of tech ID TG4572. This was done from the Bangalore Branch 014.
The service order number for this job is SO-982144, and on 11-08-2025, I serviced MechLift Industries with PO number PO-55621. 
It's a Yanmar-manufactured forklift, model YK-45D of serial number SN-LM782144. The hour meter was showing around 3,482 hours.
Today I replaced the engine oil, did a chassis lubrication, and also replaced the air filters. I also did a standard safety inspection. Nothing major on the hydraulic side today.
I saw during the inspection that the
Interior and exterior looked fine. Safety checks and data plate were in good shape. Dashboards and pedals are fine, seat belt is not working, and the operator manual is present. Engine oil before service was slightly low but not critical so it is not FIT. 
Coolant level was okay. Water pump, belts, transmission filter, valve train, starter motor all OK. I did find some slight oil residue around the transmission area, so for Engine/Transmission leaks I'm marking that as FIT — not a repair yet, but something to monitor. 
Hydraulic hosing and lift cylinder looked good. Mobile number is +91 5678823546. Exhaust system is not looked good. No leak precursors except that minor residue.
For major safety concerns, I'll write that there were no immediate hazards, but I did note some early-stage hose cracking near the auxiliary line not critical but worth watching.
The customer contact Raghav accepted the work completion. The date is same as the service date which is already mentioned`

export const thirdInst = `The software version is 1.23 , OrthoTouch is 7.1 and the API version is 3.9.0. 
  The power switch comes on normally and the system finished booting in 90 seconds. The X-ray light illuminated when activated. 
  It looks like time is incorrect. I don't see the network adapter connecting to PACS. The keyboard rotation tabs work fine and the image rotates fully in both directions. 
  The horizontal flip works and the inverted F appears and is saving images to USB works properly. The case review tab is not loading and not showing all saved images. 
  Thumbnails appear in order as they are taken. Collimation is not working in Mag but working in Normal mode. 
  All tube head controls — X-ray, kV, Save, Tag, Print, and Rotate — are functioning. 
  The tube head LED illuminates and brightness adjusts correctly. The footswitch activates imaging the way it should. 
  The 5-minute continuous imaging alarm triggers properly, and the system stops imaging after 5 minutes as expected. 
  ABS gain values are set as required. The monitor brightness, contrast, sharpness, saturation, and color settings are entered correctly as 100%. 
  The laser turns on and stays centered in the X-ray field. CHKDSK failed from system settings. 
  X-ray is 30 pps and the AKR display updates every second. The cumulative AKR updates every 5 seconds. 
  The AKR display is clearly distinguishable from the cumulative value.
  Maximum opening requirements appear compliant with the instructions but i guess there is some problem with minimum opening.`;

export const fourthInst = `I was satisfied with the service quality and they are really very friendly. But not at all satisfied with the cleanliness but somewhat ok with their responsiveness.
My name is Gopal Krishnamurthy and I live in 18-098, Murphy Road, Halasuru, Bengaluru, Karnataka, 560008.`;

export const fifthInst = `I am Gopal and I am Field Technician. The work for today is routine maintenance and inspection before startup.
For the checks, I've already confirmed the scope with the customer, and there are no deviations. The operational procedures match what we're supposed to do. 
The team understands the steps, and the risk assessments line up with the job. The site's energy-isolation procedure - the LOTO process and is clear to everyone. 
Equipment and tooling rig-up activities are posing extra hazards beyond what we've already planned for. The site permit requirements are all being followed.
On the communication side, we've checked in with the customer about any simultaneous operations happening nearby. I've identified all points of contact at the location. 
The emergency response plan has been briefed, and I know the hazardous zones that are classified on site.
For containment and mechanical integrity, I've checked the barriers, they are not in place. All alarms and safeguards are not correct according to the job plan.
For line-of-fire checks, the team has enough safe distance from vehicle paths. Parking brakes are set, wheels are chocked, and restricted areas are clearly identified.
Under personnel safety, everyone on site is within fatigue guidelines. Weather conditions are fine — no lightning or unsafe heat. Before we started, I reviewed any uncontrolled hazards and noted the controls.
For additional assurance, the site is clear, and the team has no concerns at the moment.
The job lead is Raghav, and he'll sign off on the form. Vaibhav, Vedant are the crew persons who are present. 
I'll note that the inspection and checks were completed without any issues and the next date is 26 January 2026.
For the risk assessment section, I'll document the main hazards with their controls and Vaibhav is responsible for them.
For the LOTO procedure, lets go with source`;

// export const eightInst = `Taking about NeoLab Instruments of account number AC-09127 contract number CN-4478, and the certification number CERT-2026-1189. The certifying part is PN-X540 with instrument SN-H635F-09.Asset tag is AT-22317.
// Select Within Tolerance but Limited as received condition since it passed but was close to the limit on one parameter.
// Chemical standards used are STD-CuSO4-01, STD-NaCl-03. Equipment used for test is TE-U564G for verification and TE-M9213 for secondary cross-check.
// The temperature is 23.4°C and humidity 46%. Certified by Field Technician Gopal M on 2026-01-26 . 
// And regarding the ABC Private Limited of account number BN7865 and certification number HYT676R. This unit they sent in has part number PN-L920, and the serial stamped on it is SN-AB4471-K. The tag stuck on the frame reads AT-99124, so I'll take that.
// When it came in, the readings were drifting a bit too far out, so I'm marking it as out of tolerance on arrival.
// For the tests I used the usual standards — KCl and magnesium sulfate, the IDs were STD-KCl-02 and STD-MgSO4-05.
// And for equipment, I used A7811 as the main tester and Q3320 as the cross-check set.
// Conditions in the room were pretty normal… around 24 degrees temperature and about 49% humidity.
// And yeah, this one's also certified by Gopal M, same date as the other one — 26th of January, 2026`;

export const eightInst = `Talking about NeoLab Instruments of account number AC-09127 contract number CN-4478. The certifying part is PN-X540 with instrument SN-H635F-09.Asset tag is AT-22317.
Select Within Tolerance but Limited as received condition since it passed but was close to the limit on one parameter.
Chemical standards used are STD-CuSO4-01, STD-NaCl-03. Equipment used for test is TE-U564G for verification and TE-M9213 for secondary cross-check.
The temperature is 23.4°C and humidity 46%. Certified by Field Technician Gopal M on 2026-01-26 . 
And regarding the ABC Private Limited of account number BN7865. This unit they sent in has part number PN-L920, and the serial SN-AB4471-K, the tag stuck on the frame is AT-99124.
When it came in, the readings were drifting a bit too far out, so I'm marking it as out of tolerance on arrival.
For the tests I used the usual standards — KCl and magnesium sulfate, the IDs were STD-KCl-02 and STD-MgSO4-05.
And for equipment, I used A7811 as the main tester and Q3320 as the cross-check set.
Conditions in the room were pretty normal around 24 degrees temperature and about 49% humidity.
This one's also certified by Gopal M, same date as the other one — 26th of January, 2026.
That is the information.
One more thing,I forgot to mentoion that the certificate number is VIT977886T.
`;

export const ninthInst = `The ratio between the actual production volume and capicity is somewhere around 83 to 88 with `;