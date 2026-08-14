import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'glass-tube',
    anchorId: 'glass-tube',
    name: 'Glass Tube Rotameter',
    subheading: 'Clear & Accurate Visual Flow Measurement',
    description:
      'Glass Tube Rotameters are variable-area flowmeters designed for direct visual measurement of liquid and gas flow. The transparent metering tube allows operators to clearly observe the float position and flow rate.',
    images: [
      {
        id: 'gt-01',
        title: 'Glass Tube Rotameter',
        caption: 'Primary product view with borosilicate glass metering tube and calibrated flow scale',
        viewType: 'primary',
      },
      {
        id: 'gt-02',
        title: 'Calibrated Scale & Float Assembly',
        caption: 'Direct-reading graduated scale with precision-guided float',
        viewType: 'scale',
      },
      {
        id: 'gt-03',
        title: 'Process End Connections',
        caption: 'O-ring sealing arrangement and customizable threaded/flanged end fittings',
        viewType: 'detail',
      },
      {
        id: 'gt-04',
        title: 'Alternate Industrial Enclosure View',
        caption: 'Heavy-duty protective shield frame with clear observation windows',
        viewType: 'alternate',
      },
    ],
    specifications: [
      { label: 'Measuring Principle', value: 'Variable-area type' },
      { label: 'Accuracy', value: 'Up to ±2% of full-scale' },
      { label: 'Rangeability', value: 'Up to 10:1' },
      { label: 'Metering Tube', value: 'Heavy-wall borosilicate glass' },
      { label: 'Float', value: 'Application-specific' },
      { label: 'Scale', value: 'Direct-reading graduated scale' },
      { label: 'Connections', value: 'As per customer requirement' },
      { label: 'Sealing', value: 'O-ring sealing arrangement' },
      { label: 'Flow Range', value: 'As per application requirement' },
    ],
    features: [
      'Heavy-wall borosilicate glass tube',
      'Positively guided float',
      'Clear direct flow indication',
      'Interchangeable tubes and floats',
      'Durable industrial construction',
      'Accurate and repeatable measurement',
      'Suitable for liquid and gas applications',
    ],
    fasterDelivery: {
      marketStandard: 'Approximately 1 Week',
      khemas: 'Delivery in as little as 3 Days*',
    },
    freeWarehouseDelivery:
      'Free delivery up to the designated warehouse*, helping reduce procurement and logistics costs.',
    applications:
      'Chemical processing, pharmaceutical, water treatment, laboratories, manufacturing and process industries.',
  },
  {
    id: 'metal-tube',
    anchorId: 'metal-tube',
    name: 'Metal Tube Rotameter',
    subheading: 'Heavy-Duty Flow Measurement for Critical Operating Conditions',
    description:
      'Metal Tube Rotameters are all-metal, variable-area flowmeters designed to measure liquids, gases, steam and vapour under critical operating conditions. A magnet encapsulated in the tapered float couples with rotating magnets connected to an indicator pointer, allowing float movement to accurately indicate flow rate in the desired units.',
    images: [
      {
        id: 'mt-01',
        title: 'Metal Tube Rotameter',
        caption: 'All-metal variable area flowmeter with 90° magnetic dial indicator',
        viewType: 'primary',
      },
      {
        id: 'mt-02',
        title: '90° Dial Indicator & Scale',
        caption: 'Direct reading / percentage optional dial with magnetic follower',
        viewType: 'scale',
      },
      {
        id: 'mt-03',
        title: 'Flange & 316 SS Construction',
        caption: 'Precision machined process flanges and optional PTFE lining',
        viewType: 'detail',
      },
      {
        id: 'mt-04',
        title: 'Transmitter & Alarms Housing',
        caption: 'Enclosure with optional 4-20mA electrical transmitter and flow alarms',
        viewType: 'alternate',
      },
    ],
    specifications: [
      { label: 'Accuracy', value: '±2% of full flow' },
      { label: 'Rangeability', value: '10:1' },
      { label: 'Float Travel', value: '80 mm' },
      { label: 'Scale', value: '90°' },
      { label: 'Scale Graduation', value: 'Direct reading / percentage optional' },
      { label: 'Maximum Pressure Rating', value: '16–40 Bar' },
      { label: 'Allowable Fluid Temperature', value: '-20°C to +250°C' },
      { label: 'Connections', value: 'Process flanges machined as per customer requirements' },
    ],
    materials: [
      'Wetted parts machined from 316 SS',
      '316 SS with PTFE lining available',
      'Special gas dampeners for gas applications',
    ],
    accessories: [
      'Steam jacket',
      'Electrical transmitter',
      'Digital flow-rate indicator',
      'Totalizer',
      'Minimum & maximum flow alarms',
    ],
    features: [
      'All-metal robust construction',
      'High mechanical strength',
      'Suitable for critical operating conditions',
      'Suitable for liquid, gas, steam and vapour',
      'Sturdy and durable construction',
    ],
    fasterDelivery: {
      marketStandard: 'Approximately 1 Week',
      khemas: 'Delivery in as little as 3 Days*',
    },
    freeWarehouseDelivery:
      'Free delivery up to the designated warehouse*, helping reduce procurement and logistics costs.',
    applications:
      'Chemical plants, pharmaceutical industries, oil & gas, process industries, utilities and industrial manufacturing.',
  },
  {
    id: 'bypass',
    anchorId: 'bypass',
    name: 'Bypass Rotameter',
    subheading: 'Reliable Flow Measurement Through Bypass Arrangement',
    description:
      'Bypass Rotameters are designed to measure process flow through a bypass arrangement, making them suitable for applications where direct installation of a flowmeter in the main pipeline is not preferred.',
    images: [
      {
        id: 'by-01',
        title: 'Bypass Rotameter Assembly',
        caption: 'Main pipeline orifice carrier assembly with secondary rotameter arrangement',
        viewType: 'primary',
      },
      {
        id: 'by-02',
        title: 'Secondary Metering Unit',
        caption: 'Calibrated indicator tube for proportional main-line flow reading',
        viewType: 'scale',
      },
      {
        id: 'by-03',
        title: 'Orifice Flange & Carrier Detail',
        caption: 'Precision orifice plate and impulse line process connection block',
        viewType: 'detail',
      },
      {
        id: 'by-04',
        title: 'Pipeline Installation Profile',
        caption: 'Robust industrial bypass configuration for continuous process pipelines',
        viewType: 'alternate',
      },
    ],
    specifications: [
      { label: 'Measuring Principle', value: 'Variable-area type' },
      { label: 'Flow Measurement', value: 'Bypass arrangement' },
      { label: 'Measuring Medium', value: 'Liquid / Gas' },
      { label: 'Flow Range', value: 'As per application' },
      { label: 'Float', value: 'Application-specific' },
      { label: 'Metering Tube', value: 'As per selected configuration' },
      { label: 'Scale', value: 'Direct reading / application-specific' },
      { label: 'Process Connections', value: 'As per customer requirements' },
      { label: 'Pressure Rating', value: 'As per selected configuration' },
      { label: 'Temperature Rating', value: 'As per selected configuration' },
    ],
    features: [
      'Reliable bypass flow measurement',
      'Clear flow indication',
      'Robust industrial construction',
      'Application-specific materials available',
      'Suitable for continuous process monitoring',
      'Easy installation and maintenance',
    ],
    fasterDelivery: {
      marketStandard: 'Approximately 1 Week',
      khemas: 'Delivery in as little as 3 Days*',
    },
    freeWarehouseDelivery:
      'Free delivery up to the designated warehouse*, helping reduce procurement and logistics costs.',
    applications:
      'Process plants, chemical industries, water treatment, cooling systems, industrial pipelines and manufacturing units.',
  },
  {
    id: 'purge-type',
    anchorId: 'purge-type',
    name: 'Purge-Type Rotameter',
    subheading: 'Flow Measurement & Control for Purge Applications',
    description:
      'Purge-Type Rotameters are designed for measuring and controlling low flow rates of liquids and gases in purge, cooling, lubrication, sealing and instrument-related applications.',
    images: [
      {
        id: 'pu-01',
        title: 'Purge-Type Rotameter',
        caption: 'Compact low-flow rotameter with integrated precision needle control valve',
        viewType: 'primary',
      },
      {
        id: 'pu-02',
        title: 'Needle Control Valve & Flow Scale',
        caption: 'Fine metering valve for low-flow adjustment and direct visual reading',
        viewType: 'scale',
      },
      {
        id: 'pu-03',
        title: 'Differential Pressure Regulator',
        caption: 'Optional DP regulator assembly for constant purge flow stabilization',
        viewType: 'detail',
      },
      {
        id: 'pu-04',
        title: 'Metal Tube Purge Configuration',
        caption: 'Armored metal tube option with magnetic follower for harsh fluids',
        viewType: 'alternate',
      },
    ],
    specifications: [
      { label: 'Measuring Principle', value: 'Variable-area type' },
      { label: 'Measuring Medium', value: 'Liquid / Gas' },
      { label: 'Application', value: 'Purge / Low-flow measurement' },
      { label: 'Flow Range', value: 'As per application' },
      { label: 'Metering Tube', value: 'Glass / Metal configuration' },
      { label: 'Float', value: 'Application-specific' },
      { label: 'Flow Control', value: 'Needle/control valve option' },
      { label: 'Connections', value: 'As per customer requirement' },
      { label: 'Pressure Rating', value: 'As per selected configuration' },
      { label: 'Temperature Rating', value: 'As per selected configuration' },
    ],
    accessories: [
      'Needle control valve',
      'Ball check valve',
      'Differential pressure regulator',
      'Magnetic flow indication',
      'Metal tube configuration',
      'Application-specific flow control options',
    ],
    features: [
      'Suitable for low-flow applications',
      'Accurate visual flow indication',
      'Flow control capability',
      'Compact and sturdy construction',
      'Easy flow adjustment',
      'Suitable for liquid and gas service',
    ],
    fasterDelivery: {
      marketStandard: 'Approximately 1 Week',
      khemas: 'Delivery in as little as 3 Days*',
    },
    freeWarehouseDelivery:
      'Free delivery up to the designated warehouse*, helping reduce procurement and logistics costs.',
    applications:
      'Purging systems, cooling applications, lubrication systems, seal-fluid applications, instrument protection and process gas applications.',
  },
];
