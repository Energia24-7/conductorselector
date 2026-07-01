export const products = [

/* =====================================================
   CONSTRUCCIÓN
===================================================== */

{
    id:"SUPERASTIC-FLEX",
    family:"Construcción",
    catalog:"Construcción",
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
    datasheet:"https://ec.prysmian.com/sites/ec.prysmian.com/files/media/documents/4_Ficha%20te%CC%81cnica%20Superastic%C2%AE%20Flex_0.pdf",
    description:"Cable flexible para instalaciones residenciales y comerciales."
},

{
    id:"THHN",
    family:"Construcción",
    catalog:"Construcción",
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
        "Interior",
        "Tubería",
        "Canalización"
    ],
    environment:[
        "Seco"
    ],
    specialFeatures:[
        "Retardante Llama"
    ],
    datasheet:"https://ec.prysmian.com/sites/ec.prysmian.com/files/media/documents/FT-CABLES-THHN-EC.pdf",
    description:"Conductor termoplástico para edificaciones."
},

{
    id:"THWN2",
    family:"Construcción",
    catalog:"Construcción",
    name:"THWN-2 Flex",
    application:["Construcción"],
    subApplication:[
        "Circuitos Ramales",
        "Alimentadores",
        "Acometidas"
    ],
    voltageClass:"600V",
    conductor:"Cobre Flexible",
    insulation:"PVC + Nylon",
    temperatureClass:"90°C",
    installation:[
        "Interior",
        "Tubería",
        "Canalización",
        "Bandeja"
    ],
    environment:[
        "Seco",
        "Húmedo"
    ],
    specialFeatures:[
        "Flexible",
        "Retardante Llama"
    ],
    datasheet:"https://ec.prysmian.com/sites/ec.prysmian.com/files/media/documents/FT-THWN-2.pdf",
    description:"Cable flexible para instalaciones industriales y comerciales."
},

{
    id:"SUPERFLEX",
    family:"Construcción",
    catalog:"Construcción",
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
        "Bandeja",
        "Enterrado"
    ],
    environment:[
        "Seco",
        "Húmedo"
    ],
    specialFeatures:[
        "Flexible"
    ],
    datasheet:"https://ec.prysmian.com/sites/ec.prysmian.com/files/media/documents/LV-SUPERFLEX.pdf",
    description:"Cable flexible para potencia y distribución."
},

{
    id:"TERMOFLEX",
    family:"Construcción",
    catalog:"Construcción",
    name:"Termoflex",
    application:["Construcción"],
    subApplication:[
        "Equipos Portátiles",
        "Extensiones"
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
        "Seco",
        "Húmedo"
    ],
    specialFeatures:[
        "Flexible"
    ],
    datasheet:"https://ec.prysmian.com/sites/ec.prysmian.com/files/media/documents/FT%20TERMOFLEX.pdf",
    description:"Cable flexible para equipos móviles."
},

{
    id:"SPT",
    family:"Construcción",
    catalog:"Construcción",
    name:"Cable Gemelo SPT",
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
    datasheet:"https://ec.prysmian.com/sites/ec.prysmian.com/files/media/documents/Cables%20Gemelo.pdf",
    description:"Cable bipolar para iluminación y pequeños consumos."
},

{
    id:"EXZHELLENT",
    family:"Construcción",
    catalog:"Construcción",
    name:"Exzhellent Green",
    application:["Construcción"],
    subApplication:[
        "Hospitales",
        "Túneles",
        "Evacuación"
    ],
    voltageClass:"600V",
    conductor:"Cobre",
    insulation:"LSZH",
    temperatureClass:"90°C",
    installation:[
        "Interior",
        "Bandeja"
    ],
    environment:[
        "Alta Concentración Personas"
    ],
    specialFeatures:[
        "LSZH"
    ],
    datasheet:"https://ec.prysmian.com/sites/ec.prysmian.com/files/media/documents/Exzhellent%20Green%20Cobre.pdf",
    description:"Cable libre de halógenos para instalaciones críticas."
},
/* =====================================================
   DISTRIBUCIÓN
===================================================== */

{
    id:"N2XY",
    family:"Distribución",
    catalog:"Distribución",
    name:"N2XY",
    application:["Distribución"],
    subApplication:[
        "Alimentadores",
        "Distribución BT",
        "Subestaciones"
    ],
    voltageClass:"0.6/1kV",
    conductor:"Cobre",
    insulation:"XLPE",
    temperatureClass:"90°C",
    installation:[
        "Enterrado",
        "Bandeja",
        "Canalización"
    ],
    environment:[
        "Seco",
        "Húmedo"
    ],
    specialFeatures:[
        "Resistente Humedad"
    ],
    datasheet:"https://ec.prysmian.com/es/fichatecnica",
    description:"Cable de potencia con aislamiento XLPE para distribución de energía."
},

{
    id:"XZ1",
    family:"Distribución",
    catalog:"Distribución",
    name:"XZ1 (S)",
    application:[
        "Distribución",
        "Construcción"
    ],
    subApplication:[
        "Alimentadores",
        "Distribución BT",
        "Edificaciones"
    ],
    voltageClass:"0.6/1kV",
    conductor:"Cobre",
    insulation:"XLPE LSZH",
    temperatureClass:"90°C",
    installation:[
        "Bandeja",
        "Canalización",
        "Interior"
    ],
    environment:[
        "Alta Concentración Personas"
    ],
    specialFeatures:[
        "LSZH"
    ],
    datasheet:"https://ec.prysmian.com/sites/ec.prysmian.com/files/media/documents/XZ1.pdf",
    description:"Cable libre de halógenos para distribución de energía en edificios."
},

{
    id:"VOLTENAX-ECOGRID",
    family:"Distribución",
    catalog:"Distribución",
    name:"Voltenax Ecogrid",
    application:[
        "Distribución"
    ],
    subApplication:[
        "Redes BT",
        "Urbanizaciones",
        "Distribución Subterránea"
    ],
    voltageClass:"0.6/1kV",
    conductor:"Aluminio",
    insulation:"XLPE",
    temperatureClass:"90°C",
    installation:[
        "Enterrado",
        "Canalización"
    ],
    environment:[
        "Exterior",
        "Húmedo"
    ],
    specialFeatures:[
        "Ecológico"
    ],
    datasheet:"https://ec.prysmian.com/sites/ec.prysmian.com/files/media/documents/FT%20VOLTENAX%20ECOGRID%20%281%29.pdf",
    description:"Cable de distribución en aluminio para redes subterráneas."
},

/* =====================================================
   PUESTA A TIERRA
===================================================== */

{
    id:"COBRE-DESNUDO",
    family:"Puesta a Tierra",
    catalog:"Puesta a Tierra",
    name:"Cable de Cobre Desnudo",
    application:[
        "Puesta a Tierra"
    ],
    subApplication:[
        "Malla Tierra",
        "Subestaciones",
        "SPT"
    ],
    voltageClass:"N/A",
    conductor:"Cobre",
    insulation:"Sin Aislamiento",
    temperatureClass:"N/A",
    installation:[
        "Enterrado"
    ],
    environment:[
        "Exterior",
        "Húmedo"
    ],
    specialFeatures:[
        "Alta Conductividad"
    ],
    datasheet:"https://ec.prysmian.com/sites/ec.prysmian.com/files/media/documents/FT%20CABLES%20Cu%20DESNUDOS%20EC_0.pdf",
    description:"Cable de cobre desnudo para sistemas de puesta a tierra."
},

{
    id:"ALAMBRE-COBRE-DESNUDO",
    family:"Puesta a Tierra",
    catalog:"Puesta a Tierra",
    name:"Alambre de Cobre Desnudo",
    application:[
        "Puesta a Tierra"
    ],
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
    specialFeatures:[
        "Alta Conductividad"
    ],
    datasheet:"https://ec.prysmian.com/sites/ec.prysmian.com/files/media/documents/RETIE%20-%20DESNUDOS%20-%20Alambre%20Cobre%20desnudo%20blando%20y%20duro%20-%20Cert.%20N%C2%B0%20CP25_AA00373.pdf",
    description:"Alambre de cobre desnudo blando y duro para sistemas de tierra."
},
/* =====================================================
   ENERGÍA SOLAR
===================================================== */

{
    id:"PV-FOTOVOLTAICO",
    family:"Solar",
    catalog:"Energías Renovables",
    name:"Cable PV Fotovoltaico",
    application:["Solar"],
    subApplication:[
        "String Solar",
        "Interconexión Paneles",
        "DC"
    ],
    voltageClass:"1500VDC",
    conductor:"Cobre Flexible",
    insulation:"XLPE LSZH",
    temperatureClass:"90°C",
    installation:[
        "Exterior",
        "Bandeja",
        "Canalización"
    ],
    environment:[
        "UV",
        "Húmedo",
        "Exterior"
    ],
    specialFeatures:[
        "Solar",
        "LSZH",
        "UV"
    ],
    datasheet:"https://ec.prysmian.com/sites/ec.prysmian.com/files/media/documents/FT%20CABLE%20PV%20FOTOVOLTAICO%20%281%20CAPA%29.pdf",
    description:"Cable fotovoltaico para conexión de módulos solares y strings DC."
},

{
    id:"PRYSOLAR-H1Z2Z2-K",
    family:"Solar",
    catalog:"Energías Renovables",
    name:"Prysolar H1Z2Z2-K",
    application:["Solar"],
    subApplication:[
        "String Solar",
        "Interconexión Paneles",
        "DC"
    ],
    voltageClass:"1500VDC",
    conductor:"Cobre Estañado Flexible",
    insulation:"LSZH",
    temperatureClass:"120°C",
    installation:[
        "Exterior",
        "Bandeja",
        "Canalización"
    ],
    environment:[
        "UV",
        "Exterior",
        "Húmedo"
    ],
    specialFeatures:[
        "Solar",
        "LSZH",
        "UV"
    ],
    datasheet:"https://ec.prysmian.com/sites/ec.prysmian.com/files/media/documents/FICHA%20PRYSMIAN%20PRYSOLAR%20RTR%20ES-IN%20Sec%204%20to%2025.pdf",
    description:"Cable solar premium para aplicaciones fotovoltaicas de larga vida útil."
},

{
    id:"PRYSUN",
    family:"Solar",
    catalog:"Energías Renovables",
    name:"Prysun Fotovoltaico",
    application:["Solar"],
    subApplication:[
        "Caja Combinadora",
        "Inversor",
        "Transformador",
        "DC"
    ],
    voltageClass:"1500VDC",
    conductor:"Cobre Estañado Flexible",
    insulation:"LSZH",
    temperatureClass:"120°C",
    installation:[
        "Exterior",
        "Bandeja",
        "Canalización"
    ],
    environment:[
        "UV",
        "Exterior",
        "Húmedo"
    ],
    specialFeatures:[
        "Solar",
        "LSZH",
        "UV"
    ],
    datasheet:"https://ec.prysmian.com/sites/ec.prysmian.com/files/media/documents/SO_002_03_ESP_Prysun.pdf",
    description:"Cable fotovoltaico global Prysmian conforme EN50618 e IEC62930."
},

{
    id:"VOLTENAX-ECOGRID",
    family:"Solar",
    catalog:"Energías Renovables",
    name:"Voltenax Ecogrid",
    application:[
        "Solar",
        "Distribución"
    ],
    subApplication:[
        "Caja Combinadora",
        "Inversor",
        "Transformador",
        "Red BT Planta Solar"
    ],
    voltageClass:"0.6/1kV AC - 1500VDC",
    conductor:"Aluminio",
    insulation:"XLPE",
    temperatureClass:"90°C",
    installation:[
        "Enterrado",
        "Canalización",
        "Exterior"
    ],
    environment:[
        "Exterior",
        "Húmedo",
        "UV"
    ],
    specialFeatures:[
        "Solar",
        "Resistente Humedad"
    ],
    datasheet:"https://ec.prysmian.com/sites/ec.prysmian.com/files/media/documents/FT%20VOLTENAX%20ECOGRID%20%281%29.pdf",
    description:"Cable BT para interconectar cajas combinadoras, inversores y transformadores en plantas fotovoltaicas."
},
/* =====================================================
   SUMERGIBLE
===================================================== */

{
    id:"TML",
    family:"Sumergible",
    catalog:"Sumergible",
    name:"Cable TML Type B Round",
    application:["Sumergible"],
    subApplication:[
        "Pozo Profundo",
        "Bomba Sumergible",
        "Motores Sumergibles"
    ],
    voltageClass:"600V",
    conductor:"Cobre",
    insulation:"PVC",
    temperatureClass:"90°C",
    installation:[
        "Sumergido"
    ],
    environment:[
        "Húmedo",
        "Sumergido"
    ],
    specialFeatures:[
        "Resistente Agua"
    ],
    datasheet:"https://ec.prysmian.com/sites/ec.prysmian.com/files/media/documents/TML.pdf",
    description:"Cable redondo para bombas y motores sumergibles en pozos profundos."
},

{
    id:"HIDROFIRM",
    family:"Sumergible",
    catalog:"Sumergible",
    name:"Hidrofirm",
    application:["Sumergible"],
    subApplication:[
        "Pozo Profundo",
        "Bomba Sumergible",
        "Sistemas de Bombeo"
    ],
    voltageClass:"600V",
    conductor:"Cobre",
    insulation:"PVC Especial",
    temperatureClass:"75°C",
    installation:[
        "Sumergido",
        "Pozo"
    ],
    environment:[
        "Húmedo",
        "Sumergido"
    ],
    specialFeatures:[
        "Resistente Agua"
    ],
    datasheet:"https://ec.prysmian.com/sites/ec.prysmian.com/files/media/documents/HIDROFIRM.pdf",
    description:"Cable plano para bombas sumergibles y sistemas de extracción de agua."
},

{
    id:"OZONEFLEX-PLUS",
    family:"Sumergible",
    catalog:"Sumergible",
    name:"Ozoneflex Plus",
    application:["Sumergible"],
    subApplication:[
        "Aireación",
        "Piscinas",
        "Fuentes",
        "Bombas Sumergibles"
    ],
    voltageClass:"600V",
    conductor:"Cobre Flexible",
    insulation:"EPR",
    temperatureClass:"90°C",
    installation:[
        "Sumergido",
        "Exterior"
    ],
    environment:[
        "Húmedo",
        "Sumergido",
        "Ozono"
    ],
    specialFeatures:[
        "Flexible",
        "Resistente Agua",
        "Resistente Ozono"
    ],
    datasheet:"https://ec.prysmian.com/sites/ec.prysmian.com/files/media/documents/OZONEFLEX%20PLUS.pdf",
    description:"Cable flexible diseñado para aplicaciones sumergibles con exposición a ozono y humedad permanente."
},
/* =====================================================
   TELECOMUNICACIONES
===================================================== */

{
    id:"CAT5E",
    family:"Telecom",
    catalog:"Telecom",
    name:"Cable UTP Categoría 5e",
    application:["Telecom"],
    subApplication:[
        "LAN",
        "Ethernet",
        "Cableado Estructurado"
    ],
    voltageClass:"Datos",
    conductor:"Cobre",
    insulation:"PE",
    temperatureClass:"60°C",
    installation:[
        "Interior",
        "Canalización"
    ],
    environment:[
        "Seco"
    ],
    specialFeatures:[
        "PoE"
    ],
    datasheet:"https://ec.prysmian.com/sites/ec.prysmian.com/files/media/documents/Cable%20Lan%20UTP%205E_0.pdf",
    description:"Cable UTP categoría 5e para redes LAN de hasta 1 Gbps."
},

{
    id:"CAT6",
    family:"Telecom",
    catalog:"Telecom",
    name:"Cable UTP Categoría 6",
    application:["Telecom"],
    subApplication:[
        "LAN",
        "Ethernet",
        "Cableado Estructurado",
        "PoE"
    ],
    voltageClass:"Datos",
    conductor:"Cobre",
    insulation:"PE",
    temperatureClass:"60°C",
    installation:[
        "Interior",
        "Canalización"
    ],
    environment:[
        "Seco"
    ],
    specialFeatures:[
        "PoE",
        "Gigabit Ethernet"
    ],
    datasheet:"https://ec.prysmian.com/sites/ec.prysmian.com/files/media/documents/Cable%20Lan%20UTP%206_0.pdf",
    description:"Cable categoría 6 para redes Gigabit Ethernet y aplicaciones PoE."
},

{
    id:"CAT6A",
    family:"Telecom",
    catalog:"Telecom",
    name:"Cable Categoría 6A",
    application:["Telecom"],
    subApplication:[
        "LAN",
        "Ethernet",
        "Backbone",
        "PoE+"
    ],
    voltageClass:"Datos",
    conductor:"Cobre",
    insulation:"PE",
    temperatureClass:"60°C",
    installation:[
        "Interior",
        "Canalización"
    ],
    environment:[
        "Seco"
    ],
    specialFeatures:[
        "PoE+",
        "10 Gigabit Ethernet"
    ],
    datasheet:"https://ec.prysmian.com/sites/ec.prysmian.com/files/media/documents/Cable%20Lan%20UTP%206A_0.pdf",
    description:"Cable de alto desempeño para redes 10 Gigabit Ethernet."
},

{
    id:"G652D",
    family:"Fibra Óptica",
    catalog:"Fibra Óptica",
    name:"Fibra Óptica Monomodo G652D",
    application:["Fibra Óptica"],
    subApplication:[
        "Backbone",
        "FTTH",
        "Red Troncal",
        "OSP"
    ],
    voltageClass:"Fibra",
    conductor:"Fibra Óptica",
    insulation:"Acrilato",
    temperatureClass:"N/A",
    installation:[
        "Interior",
        "Exterior",
        "Ducto",
        "Aéreo"
    ],
    environment:[
        "Exterior"
    ],
    specialFeatures:[
        "Baja Atenuación"
    ],
    datasheet:"https://ec.prysmian.com/sites/ec.prysmian.com/files/media/documents/07%20FT_G652D.pdf",
    description:"Fibra óptica monomodo G652D para redes de telecomunicaciones y FTTH."
},
/* =====================================================
   FIBRA ÓPTICA
===================================================== */

{
    id:"ADSS-120",
    family:"Fibra Óptica",
    catalog:"Fibra Óptica",
    name:"ADSS Single Jacket Span 120m",
    application:["Fibra Óptica"],
    subApplication:[
        "Aéreo",
        "Backbone",
        "OSP"
    ],
    voltageClass:"Fibra",
    conductor:"Fibra Óptica",
    insulation:"PE",
    temperatureClass:"N/A",
    installation:[
        "Aéreo",
        "Exterior"
    ],
    environment:[
        "Exterior",
        "UV"
    ],
    specialFeatures:[
        "Autosoportado",
        "Dielectrico"
    ],
    datasheet:"https://ec.prysmian.com/sites/ec.prysmian.com/files/media/documents/TD%2024-428%2012F%2024F%2048F%20ADSS%20Single%20Jacket%20Span%20120m_0.pdf",
    description:"Cable ADSS autosoportado para vanos de hasta 120 m."
},

{
    id:"ADSS-200",
    family:"Fibra Óptica",
    catalog:"Fibra Óptica",
    name:"ADSS Single Jacket Span 200m",
    application:["Fibra Óptica"],
    subApplication:[
        "Aéreo",
        "Backbone",
        "OSP"
    ],
    voltageClass:"Fibra",
    conductor:"Fibra Óptica",
    insulation:"PE",
    temperatureClass:"N/A",
    installation:[
        "Aéreo",
        "Exterior"
    ],
    environment:[
        "Exterior",
        "UV"
    ],
    specialFeatures:[
        "Autosoportado",
        "Dielectrico",
        "Largo Vano"
    ],
    datasheet:"https://ec.prysmian.com/sites/ec.prysmian.com/files/media/documents/02%20FT_TD%2024-428%2012F%2024F%2048F%2096F%20ADSS%20Single%20Jacket%20Span%20200m.pdf",
    description:"Cable ADSS autosoportado para vanos de hasta 200 m."
},

{
    id:"ASU-120",
    family:"Fibra Óptica",
    catalog:"Fibra Óptica",
    name:"ASU Span 120",
    application:["Fibra Óptica"],
    subApplication:[
        "Aéreo",
        "FTTH",
        "Distribución"
    ],
    voltageClass:"Fibra",
    conductor:"Fibra Óptica",
    insulation:"PE",
    temperatureClass:"N/A",
    installation:[
        "Aéreo",
        "Exterior"
    ],
    environment:[
        "Exterior",
        "UV"
    ],
    specialFeatures:[
        "Autosoportado",
        "Dielectrico"
    ],
    datasheet:"https://ec.prysmian.com/sites/ec.prysmian.com/files/media/documents/05%20FT_TD%2024-428%2012H%2024H%20ASU%20Span%20120.pdf",
    description:"Cable ASU para redes de acceso y distribución aérea."
},

{
    id:"SINGLE-ARMOR",
    family:"Fibra Óptica",
    catalog:"Fibra Óptica",
    name:"Single Armor Single Jacket",
    application:["Fibra Óptica"],
    subApplication:[
        "Ducto",
        "Enterrado",
        "Backbone"
    ],
    voltageClass:"Fibra",
    conductor:"Fibra Óptica",
    insulation:"PE",
    temperatureClass:"N/A",
    installation:[
        "Ducto",
        "Enterrado"
    ],
    environment:[
        "Exterior",
        "Húmedo"
    ],
    specialFeatures:[
        "Armado"
    ],
    datasheet:"https://ec.prysmian.com/sites/ec.prysmian.com/files/media/documents/03%20FT_TD%2024-099%2024F%2048F%2072F%2096F%20Single%20Armor%20Single%20Jacket%20Cable.pdf",
    description:"Cable de fibra óptica armado para instalación en ductos y enterrado."
},

{
    id:"SINGLE-JACKET-ARMOURED",
    family:"Fibra Óptica",
    catalog:"Fibra Óptica",
    name:"Single Jacket Single Armoured",
    application:["Fibra Óptica"],
    subApplication:[
        "Ducto",
        "Enterrado",
        "Backbone"
    ],
    voltageClass:"Fibra",
    conductor:"Fibra Óptica",
    insulation:"PE",
    temperatureClass:"N/A",
    installation:[
        "Ducto",
        "Enterrado"
    ],
    environment:[
        "Exterior",
        "Húmedo"
    ],
    specialFeatures:[
        "Armado"
    ],
    datasheet:"https://ec.prysmian.com/sites/ec.prysmian.com/files/media/documents/04%20FT_TD%2024-428%2096F%20Single%20Jacket%20Single%20Armoured%20Cable.pdf",
    description:"Cable armado para redes troncales y planta externa."
},

{
    id:"CFOT-LSZH",
    family:"Fibra Óptica",
    catalog:"Fibra Óptica",
    name:"CFOT UTR COG LSZH",
    application:["Fibra Óptica"],
    subApplication:[
        "Interior",
        "Data Center",
        "Backbone"
    ],
    voltageClass:"Fibra",
    conductor:"Fibra Óptica",
    insulation:"LSZH",
    temperatureClass:"N/A",
    installation:[
        "Interior",
        "Canalización"
    ],
    environment:[
        "Seco"
    ],
    specialFeatures:[
        "LSZH"
    ],
    datasheet:"https://ec.prysmian.com/sites/ec.prysmian.com/files/media/documents/06%20FT_IFT22511%20-%20CFOT%20UTR%20COG-LSZH%20ES.pdf",
    description:"Cable de fibra óptica LSZH para instalaciones interiores."
}
];
