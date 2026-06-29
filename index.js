// ============================================================================
// VARIABLES GLOBALES - Lectures dynamiques depuis l'interface webMI
// ============================================================================

webMI.callExtension("SYSTEM.LIBRARY.PROJECT.QUICKDYNAMICS.CFR Device variable value", {"UM":"", "decimal":"0", "device":"PVPRO/1.001.pRack pR300 L1 - 1", "id":"id_260", "variable":".Integers.L1 - Active compressors power percent | Power_Percent_Cmps_L1"});
webMI.callExtension("SYSTEM.LIBRARY.PROJECT.QUICKDYNAMICS.CFR Device variable value", {"UM":"", "decimal":"0", "device":"PVPRO/1.001.pRack pR300 L1 - 1", "id":"id_252", "variable":".Integers.C1 - Prochain compresseur à démarrer | Device_Next_On_Comp_L1"});
webMI.callExtension("SYSTEM.LIBRARY.PROJECT.QUICKDYNAMICS.CFR Device variable value", {"UM":"", "decimal":"0", "device":"PVPRO/1.001.pRack pR300 L1 - 1", "id":"id_255", "variable":".Integers.L1 - Next compressor which will be turned off | Device_Next_Off_Comp_L1"});
webMI.callExtension("SYSTEM.LIBRARY.PROJECT.QUICKDYNAMICS.CFR Device variable value", {"UM":"", "decimal":"0", "device":"PVPRO/1.001.pRack pR300 L1 - 1", "id":"id_263", "variable":".Integers.L1 - Requested power to compressors | Reg_Comp_PowReq_L1_Msk"});
webMI.callExtension("SYSTEM.LIBRARY.PROJECT.QUICKDYNAMICS.CFR Device variable value", {"UM":"", "decimal":"0", "device":"PVPRO/1.001.pRack pR300 L1 - 1", "id":"id_272", "variable":".Integers.C1 - Prochain compresseur à démarrer | Device_Next_On_Comp_L1"});
webMI.callExtension("SYSTEM.LIBRARY.PROJECT.QUICKDYNAMICS.CFR Device variable value", {"UM":"", "decimal":"0", "device":"PVPRO/1.001.pRack pR300 L1 - 1", "id":"id_302", "variable":".Integers.C1 - Prochain compresseur à démarrer | Device_Next_On_Comp_L1"});
webMI.callExtension("SYSTEM.LIBRARY.PROJECT.QUICKDYNAMICS.CFR Device variable value", {"UM":"", "decimal":"0", "device":"PVPRO/1.001.pRack pR300 L1 - 1", "id":"id_305", "variable":".Integers.L1 - Next compressor which will be turned off | Device_Next_Off_Comp_L1"});

webMI.callExtension("SYSTEM.LIBRARY.PROJECT.QUICKDYNAMICS.CFR Device variable value", {"UM":"barg", "decimal":"1", "device":"PVPRO/1.001.pRack pR300 L1 - 1", "id":"id_335", "variable":".Analogs.L1 - Suction pressure | Suct_Press_L1"});
webMI.callExtension("SYSTEM.LIBRARY.PROJECT.QUICKDYNAMICS.CFR Device variable value", {"UM":"°C",  "decimal":"1", "device":"PVPRO/1.001.pRack pR300 L1 - 1", "id":"id_336", "variable":".Analogs.L1 - Saturated suction temperature | Suct_Temp_Satur_L1"});
webMI.callExtension("SYSTEM.LIBRARY.PROJECT.QUICKDYNAMICS.CFR Device variable value", {"UM":"°C",  "decimal":"1", "device":"PVPRO/1.001.pRack pR300 L1 - 1", "id":"id_379", "variable":".Analogs. C1 - Température  aspiration | Suct_Temp_L1"});
webMI.callExtension("SYSTEM.LIBRARY.PROJECT.QUICKDYNAMICS.CFR Device variable value", {"UM":"°K",  "decimal":"1", "device":"PVPRO/1.001.pRack pR300 L1 - 1", "id":"id_382", "variable":".Analogs. C1 - Surchauffe | Superheat_L1"});
webMI.callExtension("SYSTEM.LIBRARY.PROJECT.QUICKDYNAMICS.CFR Device variable value", {"UM":"°C",  "decimal":"1", "device":"PVPRO/1.001.pRack pR300 L1 - 1", "id":"id_424", "variable":".Analogs. Température extérieure | External_Temp"});
webMI.callExtension("SYSTEM.LIBRARY.PROJECT.QUICKDYNAMICS.CFR Device variable value", {"UM":"°C",  "decimal":"1", "device":"PVPRO/1.001.pRack pR300 L1 - 1", "id":"id_436", "variable":".Analogs.L1 - Discharge temperature | Disch_Temp_L1_Mst"});
webMI.callExtension("SYSTEM.LIBRARY.PROJECT.QUICKDYNAMICS.CFR Device variable value", {"UM":"°C",  "decimal":"1", "device":"PVPRO/1.001.pRack pR300 L1 - 1", "id":"id_474", "variable":".Analogs. C1 - Température liquide | Liquid_Temp_L1"});
webMI.callExtension("SYSTEM.LIBRARY.PROJECT.QUICKDYNAMICS.CFR Device variable value", {"UM":"°C",  "decimal":"1", "device":"PVPRO/1.001.pRack pR300 L1 - 1", "id":"id_485", "variable":".Analogs. C1 - Température  aspiration | Suct_Temp_L1"});
webMI.callExtension("SYSTEM.LIBRARY.PROJECT.QUICKDYNAMICS.CFR Device variable value", {"UM":"°C",  "decimal":"1", "device":"PVPRO/1.001.pRack pR300 L1 - 1", "id":"id_509", "variable":".Analogs. C1 - Température  aspiration | Suct_Temp_L1"});
webMI.callExtension("SYSTEM.LIBRARY.PROJECT.QUICKDYNAMICS.CFR Device variable value", {"UM":"°K",  "decimal":"1", "device":webMI.query["base"] + "", "id":"id_203", "variable":".Analogs. C2 - Surchauffe | Superheat_L2"});
webMI.callExtension("SYSTEM.LIBRARY.PROJECT.QUICKDYNAMICS.CFR Device variable value", {"UM":"°K",  "decimal":"1", "device":webMI.query["base"] + "", "id":"id_164", "variable":".Analogs. C1 - Surchauffe | Superheat_L1"});


// ============================================================================
// DEBUG
// ============================================================================
var DEBUG = true; // Passer à false en production

function log(msg) {
    if (DEBUG) console.log(msg);
}


// ============================================================================
// PARAMETRES URL
//
// Construction des adresses :
//   - device1, device2 : chemin de base du régulateur
//   - automate         : chemin de base de l'automate
//   - cons_actuelle    : suffixe → concaténé à device1/device2
//   - cons_normale     : suffixe → concaténé à automate
//   - cons_forcee      : suffixe → concaténé à automate (écrit par le champ in/out)
//   - cons_forcee_2    : suffixe → concaténé à automate (zone double, écrit par le champ in/out)
//   - ventil_forcee    : chemin COMPLET dans l'URL → pas de concat avec automate
// ============================================================================
var num_zone  = webMI.query.num_zone;
var automate  = webMI.query.automate;
var device1   = webMI.query.device1;
var device2   = webMI.query.device2;

var adr_ventil_forcee  = webMI.query.ventil_forcee;            // chemin complet
var adr_cons_normale   = automate + webMI.query.cons_normale;
var adr_cons_forcee    = automate + webMI.query.cons_forcee;

// Variables _2 construites uniquement si zone double → évite des adresses "...undefined"
var aZoneDouble = (num_zone == 3 || num_zone == 4);
var adr_cons_normale_2 = aZoneDouble ? automate + webMI.query.cons_normale_2 : null;
var adr_cons_forcee_2  = aZoneDouble ? automate + webMI.query.cons_forcee_2  : null;

var adr_cons_actuelle1 = device1  + webMI.query.cons_actuelle;
var adr_cons_actuelle2 = device2  + webMI.query.cons_actuelle;

// Limites de sécurité pour la consigne forcée
var CONS_FORCEE_MIN = -50;

// ============================================================================
// VARIABLES VENTILATEUR — ZONES DOUBLES (3 et 4)
//   device1 + suffixe  /  device2 + suffixe
//   F3 → Digital booléen  (attendu = null dans writeVerifie)
//   F2 → Integer          (attendu = 0 à l'activation, 1 à la désactivation)
//   F0 → Integer          (attendu = 0 à l'activation uniquement)
// ============================================================================
var VENTIL_F3_SUFFIX = ".Digitals.Etat ventilateurs évaporateur pendant les dégivrages | F3";
var VENTIL_F2_SUFFIX = ".Integers.Etat ventilateurs évaporateur avec compresseur arrêté | F2";
var VENTIL_F0_SUFFIX = ".Integers.Gestion ventilateur évaporateur | F0";

// ============================================================================
// VARIABLES VENTILATEUR — ZONES SIMPLES (1 et 2)
//   device1 uniquement
//   FAN_F0 → Integer          (attendu = 0 à l'activation uniquement)
//   FAN_F2 → Digital booléen  (attendu = null dans writeVerifie)
//   FAN_F3 → Digital booléen  (attendu = null dans writeVerifie)
// ============================================================================
var FAN_F0_SUFFIX = ".Integers.Gestion ventilateurs | MANAG_FAN";
var FAN_F2_SUFFIX = ".Digitals.Ventilateur arrête lorsque que VEM n'est pas en demande (si F0=0) | TEMP_OFF_FAN";
var FAN_F3_SUFFIX = ".Digitals.Ventilateur arrêté en dégivrage | FAN_IN_DEFROST";

log("[INIT] num_zone="       + num_zone);
log("[INIT] automate="       + automate);
log("[INIT] device1="        + device1);
log("[INIT] device2="        + device2);
log("[INIT] ventil_forcee="  + adr_ventil_forcee);
log("[INIT] cons_normale="   + adr_cons_normale);
log("[INIT] cons_forcee="    + adr_cons_forcee);
log("[INIT] cons_actuelle1=" + adr_cons_actuelle1);


// ============================================================================
// HELPERS UI
// ============================================================================

/**
 * Active ou désactive visuellement un bouton (pointer-events + opacité).
 */
function setEnabled(id, enabled) {
    var el = document.getElementById(id);
    if (el) {
        el.style.pointerEvents = enabled ? "all" : "none";
        el.style.opacity       = enabled ? "1"   : "0.4";
    } else {
        log("[WARN] setEnabled : élément introuvable → " + id);
    }
}

/**
 * Affiche ou masque un champ via webMI.gfx.setVisible.
 */
function setVisibleChamp(id, visible) {
    try {
        webMI.gfx.setVisible(id, visible);
    } catch (e) {
        log("[WARN] setVisibleChamp erreur sur " + id + " : " + e);
    }
}

/**
 * Affiche une alerte utilisateur et logue l'erreur.
 */
function erreur(contexte, msg) {
    var texte = "[ERREUR] " + contexte + " → " + msg;
    log(texte);
    alert(texte);
}

/**
 * Vérifie que le status d'une lecture est OK (0 = OK).
 */
function statusOK(contexte, status) {
    if (status !== 0) {
        erreur(contexte, "Erreur de communication (status=" + status + ")");
        return false;
    }
    return true;
}

/**
 * Vérifie qu'une valeur lue n'est pas vide ou nulle.
 */
function valeurValide(contexte, valeur) {
    if (valeur === null || valeur === undefined || String(valeur).trim() === "") {
        erreur(contexte, "Valeur vide — régulateur connecté et communicant ?");
        return false;
    }
    return true;
}

/**
 * Lit la consigne forcée directement depuis l'automate via webMI.data.read,
 * valide qu'elle est inférieure à consActuelle et >= CONS_FORCEE_MIN,
 * puis appelle onSuccess(valeur) ou onError().
 *
 * Le champ de saisie étant un champ in/out webMI, il écrit directement sur
 * la variable automate — pas besoin de relire le DOM, on lit la source de
 * vérité côté automate.
 *
 * @param {string}   adresse      - Adresse automate de la consigne forcée
 * @param {number}   consActuelle - Valeur actuelle lue sur le device (pour validation)
 * @param {string}   label        - Label pour les logs/alertes (ex: "Zone 1")
 * @param {function} onSuccess    - Appelée avec la valeur numérique validée
 * @param {function} onError      - Appelée sans argument en cas d'échec
 */
function lireEtValiderConsForcee(adresse, consActuelle, label, onSuccess, onError) {
    webMI.data.read(adresse, function(v) {
        log("[VALIDATION] " + label + " : lecture cons_forcee sur " + adresse + " = '" + v.value + "' (status=" + v.status + ")");

        if (!statusOK("Lecture cons_forcee " + label, v.status)) { onError(); return; }
        if (!valeurValide("Lecture cons_forcee " + label, v.value)) { onError(); return; }

        var valSaisie = parseFloat(v.value);

        if (isNaN(valSaisie)) {
            erreur("Consigne forcée " + label, "Valeur lue non numérique : '" + v.value + "'");
            onError();
            return;
        }

        log("[VALIDATION] " + label + " : cons_forcee=" + valSaisie + " | cons_actuelle=" + consActuelle + " | min=" + CONS_FORCEE_MIN);

        if (valSaisie >= consActuelle) {
            erreur(
                "Consigne forcée " + label,
                "La consigne forcée (" + valSaisie + "°C) doit être INFÉRIEURE à la consigne actuelle (" + consActuelle + "°C)."
            );
            onError();
            return;
        }

        if (valSaisie < CONS_FORCEE_MIN) {
            erreur(
                "Consigne forcée " + label,
                "La consigne forcée (" + valSaisie + "°C) ne peut pas être inférieure à " + CONS_FORCEE_MIN + "°C."
            );
            onError();
            return;
        }

        log("[VALIDATION] " + label + " OK → " + valSaisie + "°C");
        onSuccess(valSaisie);
    });
}


// ============================================================================
// ECRITURE SECURISEE
// write() sans callback (non supporté dans cette version de webMI),
// suivi d'un read() de vérification après 300ms.
// ============================================================================
function writeVerifie(adresse, valeur, attendu, contexte, onSuccess, onError) {
    log("[WRITE] " + contexte + " → '" + valeur + "' sur " + adresse);
    webMI.data.write(adresse, valeur);

    setTimeout(function() {
        webMI.data.read(adresse, function(v) {
            log("[WRITE] " + contexte + " → vérif : " + v.value + " (status=" + v.status + ")");

            if (!statusOK(contexte + " [vérif]", v.status)) {
                if (onError) onError();
                return;
            }

            // Pour les booléens (ventil_forcee, F3, FAN_F2, FAN_F3), attendu = null → pas de comparaison stricte
            if (attendu !== null && String(v.value) !== String(attendu)) {
                erreur(contexte, "Valeur relue (" + v.value + ") ≠ valeur écrite (" + attendu + ")");
                if (onError) onError();
                return;
            }

            if (onSuccess) onSuccess();
        });
    }, 300);
}


// ============================================================================
// ETAT INTERFACE
// ============================================================================

function appliquerEtatNormal() {
    setEnabled("id_btn_activer",    true);
    setEnabled("id_btn_desactiver", false);
    setVisibleChamp("id_masque_1", false);
    setVisibleChamp("id_masque_2", false);
    setVisibleChamp("id_masque_3", false);
    log("[UI] État → Normal");
}

function appliquerEtatForce() {
    setEnabled("id_btn_activer",    false);
    setEnabled("id_btn_desactiver", true);
    setVisibleChamp("id_masque_1", true);
    setVisibleChamp("id_masque_2", true);
    setVisibleChamp("id_masque_3", aZoneDouble); // visible uniquement en zone 3 et 4
    log("[UI] État → Forcé");
}

function appliquerEtatEnCours() {
    setEnabled("id_btn_activer",    false);
    setEnabled("id_btn_desactiver", false);
    log("[UI] État → En cours...");
}


// ============================================================================
// ENTETE
// ============================================================================
webMI.gfx.setText("id_description_unite", webMI.query.description);
webMI.gfx.setText("id_num_zone",         webMI.query.num_zone);


// ============================================================================
// VISIBILITE GROUPE IJW_2 (zones 3 et 4 uniquement)
// ============================================================================
webMI.gfx.setVisible("id_groupe_ijw_2_actuelle", aZoneDouble);
webMI.gfx.setVisible("id_groupe_ijw_2_forcee",   aZoneDouble);
log("[VISIBILITE] Groupe IJW_2 " + (aZoneDouble ? "affiché" : "masqué"));


// ============================================================================
// MODE NORMAL : abonnement aux consignes actuelles
// ============================================================================
function modeNormal() {
    log("[MODE NORMAL] Initialisation");

    webMI.data.subscribe(adr_cons_actuelle1, function(v) {
        log("[MODE NORMAL] device1 cons_actuelle = " + v.value + " (status=" + v.status + ")");
        if (!statusOK("subscribe device1 cons_actuelle", v.status)) return;
        webMI.gfx.setText("id_cons_actuelle", v.value);
    });

    if (aZoneDouble) {
        webMI.data.subscribe(adr_cons_actuelle2, function(v) {
            log("[MODE NORMAL] device2 cons_actuelle = " + v.value + " (status=" + v.status + ")");
            if (!statusOK("subscribe device2 cons_actuelle", v.status)) return;
            webMI.gfx.setText("id_cons_actuelle_2", v.value);
        });
    }

    appliquerEtatNormal();
}


// ============================================================================
// ZONES DOUBLES (3 et 4) — Mise à zéro des ventilateurs à l'ACTIVATION
//
// Écrit 0 sur F3, F2, F0 sur device1 ET device2 (6 écritures chaînées).
// Appelée après toutes les écritures de consigne.
// attendu = null pour F3 (Digital booléen), 0 pour F2 et F0 (Integers).
// ============================================================================
function ecrireZeroVentilateurs(onSuccess, onError) {
    log("[VENTIL ZD] Mise à zéro des ventilateurs device1 et device2");

    // --- device1 F3 (Digital booléen → attendu = null) ---
    writeVerifie(device1 + VENTIL_F3_SUFFIX, 0, null, "device1 F3=0",
        function() {

            // --- device1 F2 ---
            writeVerifie(device1 + VENTIL_F2_SUFFIX, 0, 0, "device1 F2=0",
                function() {

                    // --- device1 F0 ---
                    writeVerifie(device1 + VENTIL_F0_SUFFIX, 0, 0, "device1 F0=0",
                        function() {

                            // --- device2 F3 (Digital booléen → attendu = null) ---
                            writeVerifie(device2 + VENTIL_F3_SUFFIX, 0, null, "device2 F3=0",
                                function() {

                                    // --- device2 F2 ---
                                    writeVerifie(device2 + VENTIL_F2_SUFFIX, 0, 0, "device2 F2=0",
                                        function() {

                                            // --- device2 F0 ---
                                            writeVerifie(device2 + VENTIL_F0_SUFFIX, 0, 0, "device2 F0=0",
                                                function() {
                                                    log("[VENTIL ZD] Mise à zéro terminée");
                                                    if (onSuccess) onSuccess();
                                                },
                                                function() { if (onError) onError(); }
                                            );
                                        },
                                        function() { if (onError) onError(); }
                                    );
                                },
                                function() { if (onError) onError(); }
                            );
                        },
                        function() { if (onError) onError(); }
                    );
                },
                function() { if (onError) onError(); }
            );
        },
        function() { if (onError) onError(); }
    );
}


// ============================================================================
// ZONES DOUBLES (3 et 4) — Remise à 1 de F3 et F2 à la DESACTIVATION
//
// Écrit 1 sur F3 et F2 sur device1 ET device2 (4 écritures chaînées).
// F0 n'est PAS remis à 1 (géré par le régulateur).
// attendu = null pour F3 (Digital booléen), 1 pour F2 (Integer).
// ============================================================================
function ecrireUnVentilateurs(onSuccess, onError) {
    log("[VENTIL ZD] Remise à 1 de F3 et F2 sur device1 et device2");

    // --- device1 F3 (Digital booléen → attendu = null) ---
    writeVerifie(device1 + VENTIL_F3_SUFFIX, 1, null, "device1 F3=1",
        function() {

            // --- device1 F2 ---
            writeVerifie(device1 + VENTIL_F2_SUFFIX, 1, 1, "device1 F2=1",
                function() {

                    // --- device2 F3 (Digital booléen → attendu = null) ---
                    writeVerifie(device2 + VENTIL_F3_SUFFIX, 1, null, "device2 F3=1",
                        function() {

                            // --- device2 F2 ---
                            writeVerifie(device2 + VENTIL_F2_SUFFIX, 1, 1, "device2 F2=1",
                                function() {
                                    log("[VENTIL ZD] Remise à 1 terminée");
                                    if (onSuccess) onSuccess();
                                },
                                function() { if (onError) onError(); }
                            );
                        },
                        function() { if (onError) onError(); }
                    );
                },
                function() { if (onError) onError(); }
            );
        },
        function() { if (onError) onError(); }
    );
}


// ============================================================================
// ZONES SIMPLES (1 et 2) — Mise à zéro des ventilateurs à l'ACTIVATION
//
// Écrit 0 sur FAN_F0, FAN_F2, FAN_F3 sur device1 uniquement (3 écritures chaînées).
// Appelée après toutes les écritures de consigne.
// attendu = 0 pour FAN_F0 (Integer), null pour FAN_F2 et FAN_F3 (Digitals booléens).
// ============================================================================
function ecrireZeroVentilateursSimple(onSuccess, onError) {
    log("[VENTIL ZS] Mise à zéro des ventilateurs device1");

    // --- device1 FAN_F0 (Integer) ---
    writeVerifie(device1 + FAN_F0_SUFFIX, 0, 0, "device1 FAN_F0=0",
        function() {

            // --- device1 FAN_F2 (Digital booléen → attendu = null) ---
            writeVerifie(device1 + FAN_F2_SUFFIX, 0, null, "device1 FAN_F2=0",
                function() {

                    // --- device1 FAN_F3 (Digital booléen → attendu = null) ---
                    writeVerifie(device1 + FAN_F3_SUFFIX, 0, null, "device1 FAN_F3=0",
                        function() {
                            log("[VENTIL ZS] Mise à zéro terminée");
                            if (onSuccess) onSuccess();
                        },
                        function() { if (onError) onError(); }
                    );
                },
                function() { if (onError) onError(); }
            );
        },
        function() { if (onError) onError(); }
    );
}


// ============================================================================
// ZONES SIMPLES (1 et 2) — Remise à 1 de FAN_F2 et FAN_F3 à la DESACTIVATION
//
// Écrit 1 sur FAN_F2 et FAN_F3 sur device1 uniquement (2 écritures chaînées).
// FAN_F0 n'est PAS remis à 1 (géré par le régulateur).
// attendu = null pour FAN_F2 et FAN_F3 (Digitals booléens).
// ============================================================================
function ecrireUnVentilateursSimple(onSuccess, onError) {
    log("[VENTIL ZS] Remise à 1 de FAN_F2 et FAN_F3 sur device1");

    // --- device1 FAN_F2 (Digital booléen → attendu = null) ---
    writeVerifie(device1 + FAN_F2_SUFFIX, 1, null, "device1 FAN_F2=1",
        function() {

            // --- device1 FAN_F3 (Digital booléen → attendu = null) ---
            writeVerifie(device1 + FAN_F3_SUFFIX, 1, null, "device1 FAN_F3=1",
                function() {
                    log("[VENTIL ZS] Remise à 1 terminée");
                    if (onSuccess) onSuccess();
                },
                function() { if (onError) onError(); }
            );
        },
        function() { if (onError) onError(); }
    );
}


// ============================================================================
// BOUTON ACTIVER
// Séquence :
//   1. Lecture cons_actuelle device1                      → bloqué si vide
//   2. Lecture + validation cons_forcee depuis automate   → bloqué si hors bornes
//   3. (zone double) Lecture cons_actuelle device2        → bloqué si vide
//   4. (zone double) Lecture + validation cons_forcee_2 depuis automate → bloqué si hors bornes
//   --- Toutes les validations OK, on commence les écritures ---
//   5. Write + vérif cons_normale
//   6. Write + vérif ventil_forcee = true
//   7. (zone double) Write + vérif cons_normale_2
//   8. Mise à zéro ventilateurs :
//        - zone double → ecrireZeroVentilateurs (F3, F2, F0 sur device1 et device2)
//        - zone simple → ecrireZeroVentilateursSimple (FAN_F0, FAN_F2, FAN_F3 sur device1)
//   9. Interface → état forcé
//   En cas d'erreur → restauration état normal, rien n'est écrit
// ============================================================================
webMI.addEvent("id_btn_activer", "click", function() {
    log("[BTN ACTIVER] Clic");
    appliquerEtatEnCours();

    // 1. Lecture cons_actuelle device1
    webMI.data.read(adr_cons_actuelle1, function(v1) {
        log("[BTN ACTIVER] Lecture device1 cons_actuelle = '" + v1.value + "' (status=" + v1.status + ")");

        if (!statusOK("Lecture device1 cons_actuelle", v1.status)) { appliquerEtatNormal(); return; }
        if (!valeurValide("Lecture device1 cons_actuelle", v1.value)) { appliquerEtatNormal(); return; }

        var consActuelle1 = parseFloat(v1.value);

        // 2. Lecture + validation cons_forcee depuis automate (champ in/out → déjà écrit par l'opérateur)
        lireEtValiderConsForcee(adr_cons_forcee, consActuelle1, "Zone " + num_zone, function(consForcee1) {

            if (aZoneDouble) {
                // 3. Lecture cons_actuelle device2
                webMI.data.read(adr_cons_actuelle2, function(v2) {
                    log("[BTN ACTIVER] Lecture device2 cons_actuelle = '" + v2.value + "' (status=" + v2.status + ")");

                    if (!statusOK("Lecture device2 cons_actuelle", v2.status)) { appliquerEtatNormal(); return; }
                    if (!valeurValide("Lecture device2 cons_actuelle", v2.value)) { appliquerEtatNormal(); return; }

                    var consActuelle2 = parseFloat(v2.value);

                    // 4. Lecture + validation cons_forcee_2 depuis automate
                    lireEtValiderConsForcee(adr_cons_forcee_2, consActuelle2, "Zone " + num_zone + " (IJW2)", function(consForcee2) {

                        // Toutes validations OK → écritures zone double
                        ecrireActivationDouble(consActuelle1, consActuelle2);

                    }, function() { appliquerEtatNormal(); });
                });

            } else {
                // Zone simple → écritures directes
                ecrireActivationSimple(consActuelle1);
            }

        }, function() { appliquerEtatNormal(); });
    });
});

/**
 * Écritures pour une zone simple (zones 1 et 2).
 * cons_forcee déjà en place dans l'automate via le champ in/out → pas de write.
 * Appelée uniquement après validation complète.
 */
function ecrireActivationSimple(consActuelle1) {
    log("[ACTIVER] Début écritures zone simple");

    // 5. Write cons_normale
    writeVerifie(adr_cons_normale, consActuelle1, consActuelle1, "Écriture cons_normale",
        function() {

            // 6. Write ventil_forcee = true
            writeVerifie(adr_ventil_forcee, true, null, "Écriture ventil_forcee",
                function() {

                    // 8. Mise à zéro FAN_F0, FAN_F2, FAN_F3 sur device1
                    ecrireZeroVentilateursSimple(
                        function() {
                            // 9. Tout OK
                            appliquerEtatForce();
                        },
                        function() { appliquerEtatNormal(); }
                    );
                },
                function() { appliquerEtatNormal(); }
            );
        },
        function() { appliquerEtatNormal(); }
    );
}

/**
 * Écritures pour une zone double (zones 3 et 4).
 * cons_forcee et cons_forcee_2 déjà en place dans l'automate via les champs in/out → pas de write.
 * Appelée uniquement après validation complète des deux zones.
 */
function ecrireActivationDouble(consActuelle1, consActuelle2) {
    log("[ACTIVER] Début écritures zone double");

    // 5. Write cons_normale
    writeVerifie(adr_cons_normale, consActuelle1, consActuelle1, "Écriture cons_normale",
        function() {

            // 6. Write ventil_forcee = true
            writeVerifie(adr_ventil_forcee, true, null, "Écriture ventil_forcee",
                function() {

                    // 7. Write cons_normale_2
                    writeVerifie(adr_cons_normale_2, consActuelle2, consActuelle2, "Écriture cons_normale_2",
                        function() {

                            // 8. Mise à zéro F3, F2, F0 sur device1 et device2
                            ecrireZeroVentilateurs(
                                function() {
                                    // 9. Tout OK
                                    appliquerEtatForce();
                                },
                                function() { appliquerEtatNormal(); }
                            );
                        },
                        function() { appliquerEtatNormal(); }
                    );
                },
                function() { appliquerEtatNormal(); }
            );
        },
        function() { appliquerEtatNormal(); }
    );
}


// ============================================================================
// BOUTON DESACTIVER
// Séquence :
//   1. Lecture cons_normale (automate)  → bloqué si vide
//   2. Write + vérif cons_actuelle device1
//   3. Write + vérif ventil_forcee = false
//   4. (zone double) Lecture cons_normale_2 → write + vérif device2
//   5. Remise à 1 ventilateurs :
//        - zone double → ecrireUnVentilateurs (F3, F2 sur device1 et device2)
//        - zone simple → ecrireUnVentilateursSimple (FAN_F2, FAN_F3 sur device1)
//   6. Retour modeNormal()
//   En cas d'erreur → restauration état forcé
// ============================================================================
webMI.addEvent("id_btn_desactiver", "click", function() {
    log("[BTN DESACTIVER] Clic");
    appliquerEtatEnCours();

    // 1. Lecture cons_normale
    webMI.data.read(adr_cons_normale, function(v1) {
        log("[BTN DESACTIVER] Lecture cons_normale = '" + v1.value + "' (status=" + v1.status + ")");

        if (!statusOK("Lecture cons_normale", v1.status)) { appliquerEtatForce(); return; }
        if (!valeurValide("Lecture cons_normale", v1.value)) { appliquerEtatForce(); return; }

        var valeurNormale = v1.value;

        // 2. Write + vérif cons_actuelle device1
        writeVerifie(adr_cons_actuelle1, valeurNormale, valeurNormale, "Écriture device1 cons_actuelle",
            function() {

                // 3. Write + vérif ventil_forcee = false
                writeVerifie(adr_ventil_forcee, false, null, "Écriture ventil_forcee",
                    function() {

                        if (aZoneDouble) {
                            // 4. Lecture cons_normale_2
                            webMI.data.read(adr_cons_normale_2, function(v2) {
                                log("[BTN DESACTIVER] Lecture cons_normale_2 = '" + v2.value + "' (status=" + v2.status + ")");

                                if (!statusOK("Lecture cons_normale_2", v2.status)) { appliquerEtatForce(); return; }
                                if (!valeurValide("Lecture cons_normale_2", v2.value)) { appliquerEtatForce(); return; }

                                writeVerifie(adr_cons_actuelle2, v2.value, v2.value, "Écriture device2 cons_actuelle",
                                    function() {

                                        // 5. Remise à 1 de F3 et F2 sur device1 et device2
                                        ecrireUnVentilateurs(
                                            function() {
                                                // 6. Tout OK
                                                modeNormal();
                                            },
                                            function() { appliquerEtatForce(); }
                                        );
                                    },
                                    function() { appliquerEtatForce(); }
                                );
                            });

                        } else {
                            // 5. Remise à 1 de FAN_F2 et FAN_F3 sur device1
                            ecrireUnVentilateursSimple(
                                function() {
                                    // 6. Tout OK
                                    modeNormal();
                                },
                                function() { appliquerEtatForce(); }
                            );
                        }
                    },
                    function() { appliquerEtatForce(); }
                );
            },
            function() { appliquerEtatForce(); }
        );
    });
});


// ============================================================================
// INITIALISATION : détection mode forcé ou normal au chargement
// ============================================================================
log("[INIT] Lecture ventil_forcee : " + adr_ventil_forcee);

webMI.data.read(adr_ventil_forcee, function(v) {
    log("[INIT] ventil_forcee = " + v.value + " (status=" + v.status + ")");

    if (!statusOK("Lecture initiale ventil_forcee", v.status)) return;

    var estForce = (v.value === true || v.value === 1 || v.value === "true");

    if (estForce) {
        log("[INIT] → Mode forcé détecté");
        appliquerEtatForce();

        // Affichage consigne sauvegardée device1
        webMI.data.read(adr_cons_normale, function(v1) {
            log("[INIT] cons_normale = " + v1.value + " (status=" + v1.status + ")");
            if (!statusOK("Lecture initiale cons_normale", v1.status)) return;
            webMI.gfx.setText("id_cons_actuelle", v1.value);
        });

        // Affichage consigne sauvegardée device2 si zone double
        if (aZoneDouble) {
            webMI.data.read(adr_cons_normale_2, function(v2) {
                log("[INIT] cons_normale_2 = " + v2.value + " (status=" + v2.status + ")");
                if (!statusOK("Lecture initiale cons_normale_2", v2.status)) return;
                webMI.gfx.setText("id_cons_actuelle_2", v2.value);
            });
        }

    } else {
        log("[INIT] → Mode normal");
        modeNormal();
    }
});