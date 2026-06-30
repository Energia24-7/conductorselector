export const products = [

/* =====================================================
   CONSTRUCCIÓN
===================================================== */

{
    id:"SUPERASTIC-FLEX",
    name:"Superastic Flex",
    application:["Construcción"],
    subApplication:[
        "Iluminación",
        "Tableros",
        "Distribución"
    ],
    voltageClass:"450/750V",
    conductor:"Cobre Flexible",
    insulation:"PVC",
    temperatureClass:"70°C",
    installation:[
        "Interior",
        "Tubería",
        "Canalización"
    ],
    environment:[
        "Seco"
    ],
    specialFeatures:[
        "Flexible"
    ],
    datasheet:"fichas/SUPERASTIC-FLEX.pdf",
    description:"Cable flexible para instalaciones residenciales y comerciales."
},

{
    id:"THHN",
    name:"THHN",
    application:["Construcción"],
    subApplication:[
        "Circuitos Ramales",
        "Alimentadores",
        "Acometidas"
    ],
    voltageClass:"600V",
    conductor:"Cobre",
    insulation:"PVC + Nylon",
    temperatureClass:"90°C",
    installation:[
        "Tubería",
        "Canalización",
        "Bandeja"
    ],
    environment:[
        "Seco"
    ],
    specialFeatures:[
        "Retardante Llama"
    ],
    datasheet:"fichas/THHN.pdf",
    description:"Conductor termoplástico para edificaciones."
},

{
    id:"THWN2",
    name:"THWN-2",
    application:["Construcción"],
    subApplication:[
        "Circuitos Ramales",
        "Alimentadores",
        "Acometidas"
    ],
    voltageClass:"600V",
    conductor:"Cobre",
    insulation:"PVC + Nylon",
    temperatureClass:"90°C",
    installation:[
        "Tubería",
        "Canalización",
        "Bandeja"
    ],
    environment:[
        "Seco",
        "Húmedo"
    ],
    specialFeatures:[
        "Retardante Llama"
    ],
    datasheet:"fichas/THWN-2.pdf",
    description:"Conductor para ambientes secos y húmedos."
},

{
    id:"SUPERFLEX",
    name:"Superflex",
    application:[
        "Construcción",
        "Distribución"
    ],
    subApplication:[
        "Alimentadores",
        "Distribución"
    ],
    voltageClass:"1000V",
    conductor:"Cobre Flexible",
    insulation:"PVC",
    temperatureClass:"90°C",
    installation:[
        "Interior",
        "Exterior",
        "Enterrado"
    ],
    environment:[
        "Húmedo",
        "Exterior"
    ],
    specialFeatures:[
        "Flexible"
    ],
    datasheet:"fichas/SUPERFLEX.pdf",
    description:"Cable flexible para potencia y distribución."
},

{
    id:"TERMOFLEX",
    name:"Termoflex",
    application:["Construcción"],
    subApplication:[
        "Equipos Portátiles"
    ],
    voltageClass:"600V",
    conductor:"Cobre Flexible",
    insulation:"PVC",
    temperatureClass:"90°C",
    installation:[
        "Interior",
        "Exterior"
    ],
    environment:[
        "Exterior"
    ],
    specialFeatures:[
        "Flexible",
        "UV",
        "Resistente Aceite"
    ],
    datasheet:"fichas/TERMOFLEX.pdf",
    description:"Cable flexible para equipos móviles."
},

{
    id:"GEMELO",
    name:"Cable Gemelo",
    application:["Construcción"],
    subApplication:[
        "Iluminación"
    ],
    voltageClass:"300V",
    conductor:"Cobre",
    insulation:"PVC",
    temperatureClass:"70°C",
    installation:[
        "Interior"
    ],
    environment:[
        "Seco"
    ],
    specialFeatures:[],
    datasheet:"fichas/GEMELO.pdf",
    description:"Cable bipolar para iluminación y pequeños consumos."
},

{
    id:"GPT-TAC",
    name:"GPT TAC Automotriz",
    application:["Industria"],
    subApplication:[
        "Automotriz"
    ],
    voltageClass:"60V",
    conductor:"Cobre",
    insulation:"PVC",
    temperatureClass:"80°C",
    installation:[
        "Interior"
    ],
    environment:[
        "Exterior"
    ],
    specialFeatures:[
        "Flexible"
    ],
    datasheet:"fichas/GPT-TAC.pdf",
    description:"Cable automotriz para sistemas eléctricos vehiculares."
},

/* =====================================================
   SEGURIDAD
===================================================== */

{
    id:"EXZHELLENT-GREEN",
    name:"Exzhellent Green",
    application:["Construcción"],
    subApplication:[
        "Hospitales",
        "Túneles",
        "Auditorios"
    ],
    voltageClass:"600V",
    conductor:"Cobre",
    insulation:"LSZH",
    temperatureClass:"75°C",
    installation:[
        "Tubería",
        "Canalización",
        "Bandeja"
    ],
    environment:[
        "Hospital",
        "Alta Concentración Personas"
    ],
    specialFeatures:[
        "LSZH",
        "Baja Emisión Humos"
    ],
    datasheet:"fichas/EXZHELLENT-GREEN.pdf",
    description:"Cable libre de halógenos para máxima seguridad humana."
},

/* =====================================================
   TIERRA
===================================================== */

{
    id:"COBRE-DESNUDO",
    name:"Cobre Desnudo",
    application:["Puesta a Tierra"],
    subApplication:[
        "Malla Tierra",
        "Electrodos"
    ],
    voltageClass:"N/A",
    conductor:"Cobre",
    insulation:"Sin Aislamiento",
    temperatureClass:"N/A",
    installation:[
        "Enterrado"
    ],
    environment:[
        "Exterior"
    ],
    specialFeatures:[],
    datasheet:"fichas/COBRE-DESNUDO.pdf",
    description:"Conductor para sistemas de puesta a tierra."
},

/* =====================================================
   SOLAR
===================================================== */

{
    id:"PRYSOLAR-RTR",
    name:"Prysolar RTR",
    application:["Solar"],
    subApplication:[
        "String Solar",
        "Interconexión Paneles"
    ],
    voltageClass:"1500VDC",
    conductor:"Cobre Estañado",
    insulation:"XLPO",
    temperatureClass:"120°C",
    installation:[
        "Exterior",
        "Bandeja"
    ],
    environment:[
        "UV",
        "Húmedo"
    ],
    specialFeatures:[
        "Solar",
        "UV"
    ],
    datasheet:"fichas/PRYSOLAR-RTR.pdf",
    description:"Cable fotovoltaico de alto desempeño."
},

{
    id:"PV-CABLE",
    name:"Cable PV",
    application:["Solar"],
    subApplication:[
        "String Solar"
    ],
    voltageClass:"1500VDC",
    conductor:"Cobre Estañado",
    insulation:"XLPO",
    temperatureClass:"120°C",
    installation:[
        "Exterior"
    ],
    environment:[
        "UV"
    ],
    specialFeatures:[
        "Solar"
    ],
    datasheet:"fichas/PV-CABLE.pdf",
    description:"Cable fotovoltaico para plantas solares."
},

{
    id:"VOLTENAX-ECOGRID",
    name:"Voltenax EcoGrid",
    application:["Solar"],
    subApplication:[
        "Interconexión Paneles"
    ],
    voltageClass:"1500VDC",
    conductor:"Cobre Estañado",
    insulation:"LSZH",
    temperatureClass:"90°C",
    installation:[
        "Exterior",
        "Bandeja"
    ],
    environment:[
        "UV",
        "Húmedo"
    ],
    specialFeatures:[
        "Solar",
        "LSZH"
    ],
    datasheet:"fichas/VOLTENAX-ECOGRID.pdf",
    description:"Cable fotovoltaico libre de halógenos."
},

{
    id:"PRYSUN",
    name:"Prysun",
    application:["Solar"],
    subApplication:[
        "Inversor",
        "Transformador"
    ],
    voltageClass:"1000V",
    conductor:"Aluminio",
    insulation:"XLPE",
    temperatureClass:"90°C",
    installation:[
        "Exterior",
        "Enterrado"
    ],
    environment:[
        "Exterior"
    ],
    specialFeatures:[
        "Solar"
    ],
    datasheet:"fichas/PRYSUN.pdf",
    description:"Cable BT para plantas fotovoltaicas."
},

{
    id:"XZ1",
    name:"XZ1",
    application:["Solar"],
    subApplication:[
        "Inversor",
        "Transformador"
    ],
    voltageClass:"1000V",
    conductor:"Cobre",
    insulation:"XLPE",
    temperatureClass:"90°C",
    installation:[
        "Bandeja",
        "Exterior"
    ],
    environment:[
        "Exterior"
    ],
    specialFeatures:[
        "LSZH"
    ],
    datasheet:"fichas/XZ1.pdf",
    description:"Cable LSZH para infraestructura energética."
},

/* =====================================================
   TELECOM
===================================================== */

{
    id:"CAT5E",
    name:"Cat 5e UTP",
    application:["Telecom"],
    subApplication:[
        "LAN",
        "Ethernet"
    ],
    voltageClass:"Datos",
    conductor:"Cobre",
    insulation:"PE",
    temperatureClass:"N/A",
    installation:["Interior"],
    environment:["Seco"],
    specialFeatures:["PoE"],
    datasheet:"fichas/CAT5E.pdf",
    description:"Cableado estructurado categoría 5e."
},

{
    id:"CAT6",
    name:"Cat 6 UTP",
    application:["Telecom"],
    subApplication:[
        "LAN",
        "Ethernet"
    ],
    voltageClass:"Datos",
    conductor:"Cobre",
    insulation:"PE",
    temperatureClass:"N/A",
    installation:["Interior"],
    environment:["Seco"],
    specialFeatures:["PoE"],
    datasheet:"fichas/CAT6.pdf",
    description:"Cable Gigabit Ethernet."
},

{
    id:"CAT6A",
    name:"Cat 6A",
    application:["Telecom"],
    subApplication:[
        "LAN",
        "Backbone"
    ],
    voltageClass:"Datos",
    conductor:"Cobre",
    insulation:"PE",
    temperatureClass:"N/A",
    installation:["Interior"],
    environment:["Seco"],
    specialFeatures:["PoE"],
    datasheet:"fichas/CAT6A.pdf",
    description:"Cable de alto desempeño para redes empresariales."
},

/* =====================================================
   FIBRA
===================================================== */

{
    id:"ADSS-120",
    name:"ADSS 120m",
    application:["Fibra Óptica"],
    subApplication:["Distribución FO"],
    voltageClass:"FO",
    conductor:"Fibra Óptica",
    insulation:"PE",
    temperatureClass:"N/A",
    installation:["Exterior"],
    environment:["UV"],
    specialFeatures:["Autosoportado"],
    datasheet:"fichas/ADSS-120.pdf",
    description:"Fibra óptica autosoportada."
},

{
    id:"ASU",
    name:"ASU",
    application:["Fibra Óptica"],
    subApplication:["Distribución FO"],
    voltageClass:"FO",
    conductor:"Fibra Óptica",
    insulation:"PE",
    temperatureClass:"N/A",
    installation:["Exterior"],
    environment:["UV"],
    specialFeatures:["Autosoportado"],
    datasheet:"fichas/ASU.pdf",
    description:"Cable óptico autosoportado."
},

{
    id:"UTR-LSZH",
    name:"UTR LSZH",
    application:["Fibra Óptica"],
    subApplication:["Interior"],
    voltageClass:"FO",
    conductor:"Fibra Óptica",
    insulation:"LSZH",
    temperatureClass:"N/A",
    installation:["Interior"],
    environment:["Seco"],
    specialFeatures:["LSZH"],
    datasheet:"fichas/UTR-LSZH.pdf",
    description:"Fibra óptica para interiores."
},

/* =====================================================
   CAMARONERO / BOMBEO
===================================================== */

{
    id:"HIDROFIRM",
    name:"Hidrofirm",
    application:["Bombeo"],
    subApplication:[
        "Bomba Sumergible"
    ],
    voltageClass:"600V",
    conductor:"Cobre",
    insulation:"PVC",
    temperatureClass:"90°C",
    installation:["Sumergido"],
    environment:["Húmedo"],
    specialFeatures:["Resistente Agua"],
    datasheet:"fichas/HIDROFIRM.pdf",
    description:"Cable para ambientes acuáticos."
},

{
    id:"OZONEFLEX",
    name:"Ozoneflex Plus",
    application:["Bombeo"],
    subApplication:[
        "Bomba Sumergible"
    ],
    voltageClass:"600V",
    conductor:"Cobre Flexible",
    insulation:"PVC",
    temperatureClass:"90°C",
    installation:["Sumergido"],
    environment:["Húmedo"],
    specialFeatures:[
        "Flexible",
        "Resistente Agua"
    ],
    datasheet:"fichas/OZONEFLEX.pdf",
    description:"Cable flexible para sistemas acuícolas."
},

{
    id:"TML",
    name:"TML",
    application:["Bombeo"],
    subApplication:[
        "Pozo Profundo",
        "Bomba Sumergible"
    ],
    voltageClass:"600V",
    conductor:"Cobre",
    insulation:"PVC",
    temperatureClass:"90°C",
    installation:["Sumergido"],
    environment:["Húmedo"],
    specialFeatures:["Resistente Agua"],
    datasheet:"fichas/TML.pdf",
    description:"Cable para bombas sumergibles."
}

];
