export const products = [

/* =========================================
   CONSTRUCCIÓN
========================================= */

{
    id:"SUPERASTIC",
    name:"Superastic",
    application:["Construcción"],
    subApplication:["Iluminación","Tableros","Distribución"],
    voltageClass:"450/750V",
    conductor:"Cobre",
    insulation:"PVC",
    installation:["Interior","Tubería","Canalización"],
    environment:["Seco"],
    specialFeatures:["Flexible"],
    brochure:"brochures/superastic.pdf",
    description:"Cable flexible para iluminación y distribución."
},

{
    id:"THHN-THWN2",
    name:"THHN / THWN-2",
    application:["Construcción"],
    subApplication:["Circuitos Ramales","Alimentadores","Acometidas","Iluminación"],
    voltageClass:"600V",
    conductor:"Cobre",
    insulation:"PVC + Nylon",
    installation:["Interior","Exterior","Tubería","Canalización","Bandeja"],
    environment:["Seco","Húmedo"],
    specialFeatures:["Retardante Llama","Resistente Abrasión","Resistente Aceite"],
    brochure:"brochures/thhn-thwn2.pdf",
    description:"Cable para instalaciones residenciales, comerciales e industriales."
},

{
    id:"THWN-FLEX2",
    name:"THWN Flex 2",
    application:["Construcción"],
    subApplication:["Alimentadores","Acometidas"],
    voltageClass:"600V",
    conductor:"Cobre",
    insulation:"PVC + Nylon",
    installation:["Interior","Exterior","Canalización"],
    environment:["Seco","Húmedo"],
    specialFeatures:["Flexible","Retardante Llama"],
    brochure:"brochures/thwn-flex2.pdf",
    description:"Versión flexible para alimentación eléctrica."
},

{
    id:"SUPERFLEX-MONO",
    name:"Superflex Monoconductor",
    application:["Construcción","Distribución"],
    subApplication:["Alimentadores","Subestaciones"],
    voltageClass:"1000V",
    conductor:"Cobre",
    insulation:"PVC",
    installation:["Exterior","Enterrado"],
    environment:["Húmedo","Exterior"],
    specialFeatures:["Flexible"],
    brochure:"brochures/superflex-mono.pdf",
    description:"Cable flexible monoconductor de potencia."
},

{
    id:"SUPERFLEX-MULTI",
    name:"Superflex Multiconductor",
    application:["Construcción","Distribución"],
    subApplication:["Distribución","Subestaciones"],
    voltageClass:"1000V",
    conductor:"Cobre",
    insulation:"PVC",
    installation:["Exterior","Enterrado"],
    environment:["Húmedo","Exterior"],
    specialFeatures:["Flexible"],
    brochure:"brochures/superflex-multi.pdf",
    description:"Cable flexible multiconductor."
},

{
    id:"TERMOFLEX",
    name:"Termoflex",
    application:["Construcción"],
    subApplication:["Equipos Portátiles"],
    voltageClass:"600V",
    conductor:"Cobre",
    insulation:"PVC",
    installation:["Interior","Exterior"],
    environment:["Exterior"],
    specialFeatures:["Flexible","UV","Resistente Aceite"],
    brochure:"brochures/termoflex.pdf",
    description:"Cable para extensiones y equipos portátiles."
},

{
    id:"EXZHELLENT",
    name:"Exzhellent Green",
    application:["Construcción"],
    subApplication:["Hospitales","Túneles","Auditorios"],
    voltageClass:"600V",
    conductor:"Cobre",
    insulation:"LSZH",
    installation:["Tubería","Canalización","Bandeja"],
    environment:["Hospital","Alta Concentración Personas"],
    specialFeatures:["LSZH"],
    brochure:"brochures/exzhellent.pdf",
    description:"Cable libre de halógenos."
},

/* =========================================
   PUESTA A TIERRA
========================================= */

{
    id:"COBRE-DESNUDO",
    name:"Cobre Desnudo",
    application:["Puesta a Tierra"],
    subApplication:["Malla Tierra","Electrodos"],
    voltageClass:"N/A",
    conductor:"Cobre",
    insulation:"Sin aislamiento",
    installation:["Enterrado"],
    environment:["Exterior"],
    specialFeatures:[],
    brochure:"brochures/tierra.pdf",
    description:"Conductor para sistemas de puesta a tierra."
},

/* =========================================
   SOLAR
========================================= */

{
    id:"VOLTENAX",
    name:"Voltenax",
    application:["Solar"],
    subApplication:["String Solar","Interconexión Paneles"],
    voltageClass:"1500VDC",
    conductor:"Cobre Estañado",
    insulation:"LSZH",
    installation:["Exterior","Bandeja"],
    environment:["UV","Húmedo"],
    specialFeatures:["Solar","UV"],
    brochure:"brochures/voltenax.pdf",
    description:"Cable fotovoltaico."
},

{
    id:"PRYSUN",
    name:"Prysun",
    application:["Solar"],
    subApplication:["Caja Combinadora","Inversor","Transformador"],
    voltageClass:"1000V",
    conductor:"Aluminio",
    insulation:"XLPE",
    installation:["Exterior","Enterrado"],
    environment:["Exterior","Húmedo"],
    specialFeatures:["Solar"],
    brochure:"brochures/prysun.pdf",
    description:"Cable BT para plantas solares."
},

/* =========================================
   TELECOM
========================================= */

{
    id:"CAT5E",
    name:"Cat 5e UTP",
    application:["Telecom"],
    subApplication:["LAN","Ethernet"],
    voltageClass:"Datos",
    conductor:"Cobre",
    insulation:"PE",
    installation:["Interior"],
    environment:["Seco"],
    specialFeatures:["PoE"],
    brochure:"brochures/cat5e.pdf",
    description:"Cableado estructurado categoría 5e."
},

{
    id:"CAT6",
    name:"Cat 6 UTP",
    application:["Telecom"],
    subApplication:["LAN","Ethernet","PoE"],
    voltageClass:"Datos",
    conductor:"Cobre",
    insulation:"PE",
    installation:["Interior"],
    environment:["Seco"],
    specialFeatures:["PoE"],
    brochure:"brochures/cat6.pdf",
    description:"Cable Gigabit Ethernet."
},

{
    id:"CAT6A",
    name:"Cat 6A F/UTP",
    application:["Telecom"],
    subApplication:["Backbone","PoE"],
    voltageClass:"Datos",
    conductor:"Cobre",
    insulation:"PE",
    installation:["Interior"],
    environment:["Seco"],
    specialFeatures:["PoE"],
    brochure:"brochures/cat6a.pdf",
    description:"Cable de alto desempeño."
},

/* =========================================
   BOMBEO
========================================= */

{
    id:"TML-ROUND",
    name:"Cable Sumergible TML Type B Round",
    application:["Bombeo"],
    subApplication:["Pozo Profundo","Bomba Sumergible"],
    voltageClass:"600V",
    conductor:"Cobre",
    insulation:"PVC",
    installation:["Sumergido"],
    environment:["Húmedo"],
    specialFeatures:["Resistente Agua"],
    brochure:"brochures/tml-round.pdf",
    description:"Cable para bombas sumergibles."
},

{
    id:"TML-FLAT",
    name:"Cable Sumergible TML Flat",
    application:["Bombeo"],
    subApplication:["Pozo Profundo","Bomba Sumergible"],
    voltageClass:"600V",
    conductor:"Cobre",
    insulation:"PVC",
    installation:["Sumergido"],
    environment:["Húmedo"],
    specialFeatures:["Resistente Agua"],
    brochure:"brochures/tml-flat.pdf",
    description:"Cable plano para bombas sumergibles."
},

/* =========================================
   DISTRIBUCIÓN
========================================= */

{
    id:"N2XY",
    name:"N2XY",
    application:["Distribución"],
    subApplication:["Alimentadores","Distribución"],
    voltageClass:"1000V",
    conductor:"Cobre",
    insulation:"XLPE",
    installation:["Enterrado","Bandeja"],
    environment:["Exterior","Húmedo"],
    specialFeatures:["UV"],
    brochure:"brochures/n2xy.pdf",
    description:"Cable XLPE BT."
},

{
    id:"NA2XY",
    name:"NA2XY",
    application:["Distribución"],
    subApplication:["Alimentadores","Distribución"],
    voltageClass:"1000V",
    conductor:"Aluminio",
    insulation:"XLPE",
    installation:["Enterrado","Bandeja"],
    environment:["Exterior","Húmedo"],
    specialFeatures:["UV"],
    brochure:"brochures/na2xy.pdf",
    description:"Cable XLPE BT conductor aluminio."
},

{
    id:"MV-15KV",
    name:"Cable Media Tensión 15 kV",
    application:["Distribución"],
    subApplication:["Subestaciones","Distribución"],
    voltageClass:"15kV",
    conductor:"Cobre",
    insulation:"XLPE",
    installation:["Enterrado","Bandeja"],
    environment:["Exterior"],
    specialFeatures:["UV"],
    brochure:"brochures/15kv.pdf",
    description:"Cable de media tensión."
}

];
