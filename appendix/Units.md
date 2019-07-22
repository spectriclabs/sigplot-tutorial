# Units

SigPlot includes a set of known unit types that can be identified by a number, name, of unit-type when used
with `xunits`, `yunits`, or `zunits`.  For example, all three of these would have the same effect:

```
{ xunits: 1 }

{ xunits: "Time" }

{ xunits: "sec" }
```

In situations where a name or unit-type is ambiguous the default is selected.  For example,
if you set `xunits: "Phase"` it will assume the unit-type is `rad` (i.e. radian) instead of `deg`
or `cycles`.  Or if you set `xunits: "sec"` it will assume the unit name is `Time` instead of `Delay`.  To
avoid ambiguity you can either use the unit code, or pass both the name and type together, for example:

```
{ xunits: ["Phase", "cycles"]}
```

In addition, you can create custom units if a pre-defined one is not available:

```
{ xunits: "Midichlorians"}

{ xunits: [ "Midichlorians", "per cell"]}
```

Below is the current list of known unit types for SigPlot.

| Unit Code | Unit Name | Unit Type | Default By Name | Default By Type
| --- | --- | --- | --- | --- |
| 1  | "Time"| "sec"| true| true
| 2  | "Delay"| "sec"| true| false
| 3  | "Frequency"| "Hz"| true| true
| 4  | "Time code format"| ""| true| false
| 5  | "Distance"| "m"| true| true
| 6  | "Speed"| "m/s"| true| true
| 7  | "Acceleration"| "m/sec^2"| true| true
| 8  | "Jerk"| "m/sec^3"| true| true
| 9  | "Doppler"| "Hz"| true| false
| 10 | "Doppler rate"| "Hz/sec"| true| true
| 11 | "Energy"| "J"| true| true
| 12 | "Power"| "W"| true| true
| 13 | "Mass"| "g"| true| true
| 14 | "Volume"| "l"| true| true
| 15 | "Angular power density"| "W/ster"| true| true
| 16 | "Integrated power density"| "W/rad"| true| true
| 17 | "Spatial power density"| "W/m^2"| true| true
| 18 | "Integrated power density"| "W/m"| false| true
| 19 | "Spectral power density"| "W/MHz"| true| true
| 20 | "Amplitude"| "U"| true| false
| 21 | "Real"| "U"| true| false
| 22 | "Imaginary"| "U"| true| false
| 23 | "Phase"| "rad"| true| true
| 24 | "Phase"| "deg"| false| true
| 25 | "Phase"| "cycles"| false| true
| 26 | "10*Log"| "U"| true| false
| 27 | "20*Log"| "U"| true| false
| 28 | "Magnitude"| "U"| true| false
| 29 | "Unknown"| "U"| true| false
| 30 | "Unknown"| "U"| false| false
| 31 | "General dimensionless"| ""| true| true
| 32 | "Counts"| ""| true| false
| 33 | "Angle"| "rad"| true| false
| 34 | "Angle"| "deg"| false| false
| 35 | "Relative power"| "dB"| true| true
| 36 | "Relative power"| "dBm"| false| true
| 37 | "Relative power"| "dBW"| false| true
| 38 | "Solid angle"| "ster"| true| true
| 40 | "Distance"| "ft"| false| true
| 41 | "Distance"| "nmi"| false| true
| 42 | "Speed"| "ft/sec"| false| true
| 43 | "Speed"| "nmi/sec"| false| true
| 44 | "Speed"| "knots=nmi/hr"| false| true
| 45 | "Acceleration"| "ft/sec^2"| false| true
| 46 | "Acceleration"| "nmi/sec^2"| false| true
| 47 | "Acceleration"| "knots/sec"| false| true
| 48 | "Acceleration"| "G"| false| true
| 49 | "Jerk"| "G/sec"| false| true
| 50 | "Rotation"| "rps"| true| false
| 51 | "Rotation"| "rpm"| false| false
| 52 | "Angular velocity"| "rad/sec"| true| true
| 53 | "Angular velocity"| "deg/sec"| false| true
| 54 | "Angular acceleration"| "rad/sec^2"| true| true
| 55 | "Angular acceleration"| "deg/sec^2"| false| true
| 60 | "Latitude"| "deg"| true| false
| 61 | "Longitude"| "deg"| true| false
| 62 | "Altitude"| "ft"| true| false
| 63 | "Altitude"| "m"| false| false
