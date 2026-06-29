webMI.addEvent("id_10", "click", function(e) {
    webMI.display.openDisplay("BOSS.DISPLAYS.Ventil_forcee", {
        num_zone: "1",
        description: "(ir33)",
        automate: "BOSS/9.011.Primaire Froid",
        device1: "BOSS/9.021.Zone 1",
        cons_normale: ".Analogs.Consigne normal 1 | Gestion_Ventilation.cons_normal_z1",
        cons_forcee: ".Analogs.Consigne forcee 1 | Gestion_Ventilation.cons_forcee_z1",
        cons_actuelle: ".Analogs.Point de consigne | SET_POINT_TEMPERATURA",
        duree: ".Integers.Durée de forcage 1 | Gestion_Ventilation.duree_z1",
        ventil_forcee: "BOSS/9.011.Primaire Froid.Digitals.Ventilation forcee zone 1 | Gestion_Ventilation.ventil_force_gtc_z1"
    });
});

webMI.addEvent("id_9", "click", function(e) {
    webMI.display.openDisplay("BOSS.DISPLAYS.Ventil_forcee", {
        num_zone: "2",
        description: "(ir33)",
        automate: "BOSS/9.011.Primaire Froid",
        device1: "BOSS/9.022.Zone 2",
        cons_normale: ".Analogs.Consigne normal 2 | Gestion_Ventilation.cons_normal_z2",
        cons_forcee: ".Analogs.Consigne forcee 1 | Gestion_Ventilation.cons_forcee_z2",
        cons_actuelle: ".Analogs.Point de consigne | SET_POINT_TEMPERATURA",
        duree: ".Integers.Durée de forcage 1 | Gestion_Ventilation.duree_z2",
        ventil_forcee: "BOSS/9.011.Primaire Froid.Digitals.Ventilation forcee zone 1 | Gestion_Ventilation.ventil_force_gtc_z2"
    });
});

webMI.addEvent("id_8", "click", function(e) {
    webMI.display.openDisplay("BOSS.DISPLAYS.Ventil_forcee", {
        num_zone: "3",
        description: "(ijw x 2)",
        automate: "BOSS/9.011.Primaire Froid",
        device1: "BOSS/9.041.iJW Modbus - 41",
        device2: "BOSS/9.042.iJW Modbus - 42",
        cons_normale: ".Analogs.Consigne normal 3 | Gestion_Ventilation.cons_normal_z3",
        cons_normale_2: ".Analogs.Consigne normal 3 2eme ijw | Gestion_Ventilation.cons_normal_z3_2",
        cons_actuelle: ".Analogs.Consigne régulation température | St",
        
        cons_forcee: ".Analogs.Consigne forcee 1 | Gestion_Ventilation.cons_forcee_z3",
        cons_forcee_2: ".Analogs.Consigne forcee 1 | Gestion_Ventilation.cons_forcee_z3_2",
		
        ventil_forcee: ".Digitals.Ventilation forcee zone 1 | Gestion_Ventilation.ventil_force_gtc_z3",
		
        duree: ".Integers.Durée de forcage 1 | Gestion_Ventilation.duree_z3",
        ventil_forcee: "BOSS/9.011.Primaire Froid.Digitals.Ventilation forcee zone 1 | Gestion_Ventilation.ventil_force_gtc_z3"
    });
});

webMI.addEvent("id_7", "click", function(e) {
    webMI.display.openDisplay("BOSS.DISPLAYS.Ventil_forcee", {
        num_zone: "4",
        description: "(ijw x 2)",
        automate: "BOSS/9.011.Primaire Froid",
        device1: "BOSS/9.043.iJW Modbus - 43",
        device2: "BOSS/9.044.iJW Modbus - 44",
        cons_normale: ".Analogs.Consigne normal 4 | Gestion_Ventilation.cons_normal_z4",
        cons_normale_2: ".Analogs.Consigne normal 4 2eme ijw | Gestion_Ventilation.cons_normal_z4_2",
        cons_actuelle: ".Analogs.Consigne régulation température | St",
		
		ventil_forcee: ".Digitals.Ventilation forcee zone 1 | Gestion_Ventilation.ventil_force_gtc_z4",
	    
	    cons_forcee: ".Analogs.Consigne forcee 1 | Gestion_Ventilation.cons_forcee_z4",
        cons_forcee_2: ".Analogs.Consigne forcee 1 | Gestion_Ventilation.cons_forcee_z4_2",
		
        duree: ".Integers.Durée de forcage 1 | Gestion_Ventilation.duree_z4",
        ventil_forcee: "BOSS/9.011.Primaire Froid.Digitals.Ventilation forcee zone 1 | Gestion_Ventilation.ventil_force_gtc_z4"
    });
});
