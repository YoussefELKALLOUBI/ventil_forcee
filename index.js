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
//   F3 → Digital booléen  (NON TOUCHÉ — ni activation ni désactivation)
//   F2 → Integer          (attendu = 0 à l'activation ; non touché à la désactivation)
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
//   FAN_F3 → Digital booléen  (NON TOUCHÉ — ni activation ni désactivation)
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


/**
 * Normalise une valeur en booléen si elle en représente un (true/false,
 * 1/0, "true"/"false"), sinon retourne null (valeur non booléenne, ex: une
 * température ou un entier autre que 0/1).
 */
function normaliserBooleen(v) {
    if (v === true  || v === 1 || v === "true"  || v === "1") return true;
    if (v === false || v === 0 || v === "false" || v === "0") return false;
    return null;
}

/**
 * Compare une valeur relue à une valeur attendue, en tenant compte du fait
 * que l'automate peut répondre avec un format différent de celui écrit
 * (ex: on écrit 1, l'automate relit "true" — sémantiquement identique).
 * Si les deux valeurs sont "booléennes" (true/false/1/0/"true"/"false"),
 * on compare leur normalisation. Sinon, comparaison stricte en texte
 * (utile pour les consignes numériques, où on veut une égalité exacte).
 */
function valeursCorrespondent(valeurLue, attendu) {
    var nLue     = normaliserBooleen(valeurLue);
    var nAttendu = normaliserBooleen(attendu);

    if (nLue !== null && nAttendu !== null) {
        return nLue === nAttendu;
    }
    return String(valeurLue) === String(attendu);
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

            // Pour les booléens (F3, FAN_F2, FAN_F3), attendu = null → pas de comparaison stricte
            if (attendu !== null && !valeursCorrespondent(v.value, attendu)) {
                erreur(contexte, "Valeur relue (" + v.value + ") ≠ valeur écrite (" + attendu + ")");
                if (onError) onError();
                return;
            }

            if (onSuccess) onSuccess();
        });
    }, 300);
}

/**
 * Variante de writeVerifie avec plusieurs tentatives, pour les variables
 * automate dont la propagation semble plus lente (ex: ventil_forcee) ou
 * qui nécessitent d'être réécrites (l'automate republie parfois une valeur
 * périmée juste après l'écriture).
 *
 * @param {string}   adresse
 * @param {*}        valeur       - Valeur à écrire (ex: true/false ou 1/0)
 * @param {*}        attendu      - Valeur attendue à la relecture (comparaison stricte, jamais null ici)
 * @param {string}   contexte     - Label pour les logs/alertes
 * @param {number}   tentatives   - Nombre max de tentatives (ex: 3)
 * @param {number}   delaiMs      - Délai avant chaque relecture (ex: 500)
 * @param {function} onSuccess
 * @param {function} onError      - Appelée seulement après épuisement de toutes les tentatives
 */
function writeVerifieAvecRetry(adresse, valeur, attendu, contexte, tentatives, delaiMs, onSuccess, onError) {
    var essai = 0;

    function tenter() {
        essai++;
        log("[WRITE-RETRY] " + contexte + " → tentative " + essai + "/" + tentatives + " : '" + valeur + "' sur " + adresse);
        webMI.data.write(adresse, valeur);

        setTimeout(function() {
            webMI.data.read(adresse, function(v) {
                log("[WRITE-RETRY] " + contexte + " → vérif tentative " + essai + " : " + v.value + " (status=" + v.status + ")");

                if (!statusOK(contexte + " [vérif tentative " + essai + "]", v.status)) {
                    if (essai < tentatives) { tenter(); return; }
                    if (onError) onError();
                    return;
                }

                if (!valeursCorrespondent(v.value, attendu)) {
                    if (essai < tentatives) {
                        log("[WRITE-RETRY] " + contexte + " : mismatch (" + v.value + " ≠ " + attendu + "), nouvel essai...");
                        tenter();
                        return;
                    }
                    erreur(contexte, "Après " + tentatives + " tentatives, valeur relue (" + v.value + ") ≠ valeur écrite (" + attendu + "). L'automate n'accepte peut-être pas cette écriture (variable calculée en interne ?).");
                    if (onError) onError();
                    return;
                }

                log("[WRITE-RETRY] " + contexte + " OK après " + essai + " tentative(s)");
                if (onSuccess) onSuccess();
            });
        }, delaiMs);
    }

    tenter();
}


// ============================================================================
// ETAT INTERFACE
// ============================================================================

// enModeForce : reflète l'état courant (true = mode forcé actif), utilisé
// par le subscribe ventil_forcee pour savoir s'il doit déclencher une
// désactivation automatique.
// desactivationEnCours : garde-fou anti-boucle/anti-double-exécution, car
// executerDesactivation() écrit elle-même ventil_forcee=false, ce qui
// redéclencherait le subscribe sans cette protection.
var enModeForce         = false;
var desactivationEnCours = false;

function appliquerEtatNormal() {
    enModeForce = false;
    setEnabled("id_btn_activer",    true);
    setEnabled("id_btn_desactiver", false);
    setVisibleChamp("id_masque_1", false);
    setVisibleChamp("id_masque_2", false);
    setVisibleChamp("id_masque_3", false);
    log("[UI] État → Normal");
}

function appliquerEtatForce() {
    enModeForce = true;
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

    // Ce subscribe reste actif en permanence (webMI ne propose pas de
    // désabonnement). On ignore donc ses mises à jour dès qu'on repasse en
    // mode Forcé, pour que id_cons_actuelle n'affiche QUE la valeur normale
    // sauvegardée (cons_normale), jamais la valeur live du régulateur
    // (qui, en mode forcé, correspond à la consigne forcée).
    webMI.data.subscribe(adr_cons_actuelle1, function(v) {
        log("[MODE NORMAL] device1 cons_actuelle = " + v.value + " (status=" + v.status + ")");
        if (enModeForce) return; // en mode forcé, l'affichage est géré ailleurs (valeur normale figée)
        if (!statusOK("subscribe device1 cons_actuelle", v.status)) return;
        webMI.gfx.setText("id_cons_actuelle", v.value);
    });

    if (aZoneDouble) {
        webMI.data.subscribe(adr_cons_actuelle2, function(v) {
            log("[MODE NORMAL] device2 cons_actuelle = " + v.value + " (status=" + v.status + ")");
            if (enModeForce) return;
            if (!statusOK("subscribe device2 cons_actuelle", v.status)) return;
            webMI.gfx.setText("id_cons_actuelle_2", v.value);
        });
    }

    appliquerEtatNormal();
}


// ============================================================================
// ZONES DOUBLES (3 et 4) — Mise à zéro des ventilateurs à l'ACTIVATION
//
// Écrit 0 sur F2, F0 sur device1 ET device2 (4 écritures chaînées).
// F3 n'est PLUS touché du tout (ni à l'activation ni à la désactivation),
// à la demande.
// Appelée après toutes les écritures de consigne.
// attendu = 0 pour F2 et F0 (Integers).
// ============================================================================
function ecrireZeroVentilateurs(onSuccess, onError) {
    log("[VENTIL ZD] Mise à zéro des ventilateurs device1 et device2 (F3 non touché)");

    // --- device1 F2 ---
    writeVerifie(device1 + VENTIL_F2_SUFFIX, 0, 0, "device1 F2=0",
        function() {

            // --- device1 F0 ---
            writeVerifie(device1 + VENTIL_F0_SUFFIX, 0, 0, "device1 F0=0",
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
}


// ============================================================================
// [DEPRECIE — non appelée depuis la désactivation]
// ZONES DOUBLES (3 et 4) — Remise à 1 de F3 et F2 à la DESACTIVATION
//
// Conservée dans le code au cas où, mais volontairement plus appelée par
// le bouton DESACTIVER : F3 et F2 (device1/device2) ne sont plus touchés
// lors de la désactivation, à la demande.
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
// Écrit 0 sur FAN_F0, FAN_F2 sur device1 uniquement (2 écritures chaînées).
// FAN_F3 n'est PLUS touché du tout (ni à l'activation ni à la désactivation),
// à la demande.
// Appelée après toutes les écritures de consigne.
// attendu = 0 pour FAN_F0 (Integer), null pour FAN_F2 (Digital booléen).
// ============================================================================
function ecrireZeroVentilateursSimple(onSuccess, onError) {
    log("[VENTIL ZS] Mise à zéro des ventilateurs device1 (FAN_F3 non touché)");

    // --- device1 FAN_F0 (Integer) ---
    writeVerifie(device1 + FAN_F0_SUFFIX, 0, 0, "device1 FAN_F0=0",
        function() {

            // --- device1 FAN_F2 (Digital booléen → attendu = null) ---
            writeVerifie(device1 + FAN_F2_SUFFIX, 0, null, "device1 FAN_F2=0",
                function() {
                    log("[VENTIL ZS] Mise à zéro terminée");
                    if (onSuccess) onSuccess();
                },
                function() { if (onError) onError(); }
            );
        },
        function() { if (onError) onError(); }
    );
}


// ============================================================================
// [DEPRECIE — non appelée depuis la désactivation]
// ZONES SIMPLES (1 et 2) — Remise à 1 de FAN_F2 et FAN_F3 à la DESACTIVATION
//
// Conservée dans le code au cas où, mais volontairement plus appelée par
// le bouton DESACTIVER : FAN_F2 et FAN_F3 (device1) ne sont plus touchés
// lors de la désactivation, à la demande.
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
//   5.  Write + vérif cons_normale (sauvegarde ancienne valeur device1)
//   5b. Write + vérif cons_actuelle device1 = consForcee1 (application du forçage)
//   6.  Write + vérif ventil_forcee = 1
//   7.  (zone double) Write + vérif cons_normale_2 (sauvegarde ancienne valeur device2)
//   7b. (zone double) Write + vérif cons_actuelle device2 = consForcee2 (application du forçage)
//   8. Mise à zéro ventilateurs :
//        - zone double → ecrireZeroVentilateurs (F2, F0 sur device1 et device2)
//        - zone simple → ecrireZeroVentilateursSimple (FAN_F0, FAN_F2 sur device1)
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
                        ecrireActivationDouble(consActuelle1, consActuelle2, consForcee1, consForcee2);

                    }, function() { appliquerEtatNormal(); });
                });

            } else {
                // Zone simple → écritures directes
                ecrireActivationSimple(consActuelle1, consForcee1);
            }

        }, function() { appliquerEtatNormal(); });
    });
});

/**
 * Écritures pour une zone simple (zones 1 et 2).
 * cons_forcee déjà en place dans l'automate via le champ in/out → pas de write
 * sur cons_forcee elle-même, mais on écrit sa VALEUR sur cons_actuelle (le
 * point de consigne réel du régulateur), pour que le forçage prenne effet.
 * Appelée uniquement après validation complète.
 *
 * @param {number} consActuelle1 - Ancienne valeur, sauvegardée dans cons_normale
 * @param {number} consForcee1   - Nouvelle valeur forcée, écrite dans cons_actuelle
 */
function ecrireActivationSimple(consActuelle1, consForcee1) {
    log("[ACTIVER] Début écritures zone simple");

    // 5. Write cons_normale = ancienne valeur (sauvegarde) — retry car
    //    l'automate peut mettre plus de 300ms à confirmer l'écriture
    writeVerifieAvecRetry(adr_cons_normale, consActuelle1, consActuelle1, "Écriture cons_normale", 6, 2000,
        function() {

            // 5b. Write cons_actuelle = consForcee (application du forçage sur le régulateur)
            writeVerifieAvecRetry(adr_cons_actuelle1, consForcee1, consForcee1, "Écriture cons_actuelle (forçage)", 6, 2000,
                function() {

                    // 6. Write ventil_forcee = 1 (retry + vérif stricte : l'automate
                    //    ne semblait pas accepter le format booléen JS 'true')
                    writeVerifieAvecRetry(adr_ventil_forcee, 1, 1, "Écriture ventil_forcee", 6, 2000,
                        function() {

                            // 8. Mise à zéro FAN_F0, FAN_F2, FAN_F3 sur device1
                            ecrireZeroVentilateursSimple(
                                function() {
                                    // 9. Tout OK — on fige l'affichage sur la valeur
                                    // normale sauvegardée (pas la valeur live/forcée)
                                    webMI.gfx.setText("id_cons_actuelle", consActuelle1);
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

/**
 * Écritures pour une zone double (zones 3 et 4).
 * cons_forcee et cons_forcee_2 déjà en place dans l'automate via les champs
 * in/out → pas de write sur elles-mêmes, mais on écrit leur VALEUR sur
 * cons_actuelle1/2 (les points de consigne réels des régulateurs), pour
 * que le forçage prenne effet.
 * Appelée uniquement après validation complète des deux zones.
 *
 * @param {number} consActuelle1 - Ancienne valeur device1, sauvegardée dans cons_normale
 * @param {number} consActuelle2 - Ancienne valeur device2, sauvegardée dans cons_normale_2
 * @param {number} consForcee1   - Nouvelle valeur forcée device1
 * @param {number} consForcee2   - Nouvelle valeur forcée device2
 */
function ecrireActivationDouble(consActuelle1, consActuelle2, consForcee1, consForcee2) {
    log("[ACTIVER] Début écritures zone double");

    // 5. Write cons_normale = ancienne valeur device1 (sauvegarde) — retry
    writeVerifieAvecRetry(adr_cons_normale, consActuelle1, consActuelle1, "Écriture cons_normale", 6, 2000,
        function() {

            // 5b. Write cons_actuelle1 = consForcee1 (application du forçage device1)
            writeVerifieAvecRetry(adr_cons_actuelle1, consForcee1, consForcee1, "Écriture cons_actuelle device1 (forçage)", 6, 2000,
                function() {

                    // 6. Write ventil_forcee = 1 (retry + vérif stricte)
                    writeVerifieAvecRetry(adr_ventil_forcee, 1, 1, "Écriture ventil_forcee", 6, 2000,
                        function() {

                            // 7. Write cons_normale_2 = ancienne valeur device2 (sauvegarde)
                            writeVerifieAvecRetry(adr_cons_normale_2, consActuelle2, consActuelle2, "Écriture cons_normale_2", 6, 2000,
                                function() {

                                    // 7b. Write cons_actuelle2 = consForcee2 (application du forçage device2)
                                    writeVerifieAvecRetry(adr_cons_actuelle2, consForcee2, consForcee2, "Écriture cons_actuelle device2 (forçage)", 6, 2000,
                                        function() {

                                            // 8. Mise à zéro F3, F2, F0 sur device1 et device2
                                            ecrireZeroVentilateurs(
                                                function() {
                                                    // 9. Tout OK — on fige l'affichage sur les
                                                    // valeurs normales sauvegardées (pas les
                                                    // valeurs live/forcées)
                                                    webMI.gfx.setText("id_cons_actuelle", consActuelle1);
                                                    webMI.gfx.setText("id_cons_actuelle_2", consActuelle2);
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
                },
                function() { appliquerEtatNormal(); }
            );
        },
        function() { appliquerEtatNormal(); }
    );
}


// ============================================================================
// DESACTIVATION
// Déclenchée par :
//   - le clic sur id_btn_desactiver
//   - la détection (via subscribe) d'un passage de ventil_forcee à false
//     fait ailleurs que par ce bouton (automate, autre page, etc.)
//
// Séquence :
//   1. Lecture cons_normale (automate)  → bloqué si vide
//   2. Write + vérif cons_actuelle device1
//   3. Write + vérif ventil_forcee = false
//   4. (zone double) Lecture cons_normale_2 → write + vérif device2
//   5. Retour modeNormal()
//   En cas d'erreur → restauration état forcé
//
//   NOTE : F2/F3 (zone double) et FAN_F2/FAN_F3 (zone simple) ne sont
//   PLUS remis à 1 à la désactivation, à la demande. Ils restent tels
//   qu'ils ont été laissés par l'activation (à 0), sous la responsabilité
//   du régulateur / d'une remise à niveau manuelle si besoin.
//
//   desactivationEnCours protège contre :
//   - un double déclenchement (clic + subscribe simultanés)
//   - une boucle infinie : l'étape 3 écrit ventil_forcee=false, ce qui
//     ferait retrigger le subscribe si on ne se protégeait pas.
// ============================================================================
function executerDesactivation(origine) {
    if (desactivationEnCours) {
        log("[DESACTIVATION] Déjà en cours, appel ignoré (origine=" + origine + ")");
        return;
    }
    desactivationEnCours = true;
    log("[DESACTIVATION] Début (origine=" + origine + ")");
    appliquerEtatEnCours();

    function terminerErreur() {
        desactivationEnCours = false;
        appliquerEtatForce();
    }

    function terminerSucces() {
        desactivationEnCours = false;
        modeNormal();
    }

    // 1. Lecture cons_normale
    webMI.data.read(adr_cons_normale, function(v1) {
        log("[DESACTIVATION] Lecture cons_normale = '" + v1.value + "' (status=" + v1.status + ")");

        if (!statusOK("Lecture cons_normale", v1.status)) { terminerErreur(); return; }
        if (!valeurValide("Lecture cons_normale", v1.value)) { terminerErreur(); return; }

        var valeurNormale = v1.value;

        // 2. Write + vérif cons_actuelle device1 — retry
        writeVerifieAvecRetry(adr_cons_actuelle1, valeurNormale, valeurNormale, "Écriture device1 cons_actuelle", 6, 2000,
            function() {

                // 3. Write + vérif ventil_forcee = 0 (retry + vérif stricte)
                writeVerifieAvecRetry(adr_ventil_forcee, 0, 0, "Écriture ventil_forcee", 6, 2000,
                    function() {

                        if (aZoneDouble) {
                            // 4. Lecture cons_normale_2
                            webMI.data.read(adr_cons_normale_2, function(v2) {
                                log("[DESACTIVATION] Lecture cons_normale_2 = '" + v2.value + "' (status=" + v2.status + ")");

                                if (!statusOK("Lecture cons_normale_2", v2.status)) { terminerErreur(); return; }
                                if (!valeurValide("Lecture cons_normale_2", v2.value)) { terminerErreur(); return; }

                                writeVerifieAvecRetry(adr_cons_actuelle2, v2.value, v2.value, "Écriture device2 cons_actuelle", 6, 2000,
                                    function() {
                                        // 5. Tout OK — F2/F3 non touchés
                                        terminerSucces();
                                    },
                                    function() { terminerErreur(); }
                                );
                            });

                        } else {
                            // 5. Tout OK — FAN_F2/FAN_F3 non touchés
                            terminerSucces();
                        }
                    },
                    function() { terminerErreur(); }
                );
            },
            function() { terminerErreur(); }
        );
    });
}

webMI.addEvent("id_btn_desactiver", "click", function() {
    log("[BTN DESACTIVER] Clic");
    executerDesactivation("clic bouton");
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


// ============================================================================
// SURVEILLANCE ventil_forcee : désactivation automatique
//
// En plus du clic sur id_btn_desactiver, on surveille en continu l'adresse
// ventil_forcee. Si elle passe à false ALORS QU'ON EST en mode forcé
// (enModeForce = true) ET que ce n'est pas nous-même en train d'exécuter
// la désactivation (desactivationEnCours = true, écriture de l'étape 3),
// on déclenche executerDesactivation() automatiquement — par exemple si
// ventil_forcee a été remis à false depuis l'automate ou une autre page.
// ============================================================================
webMI.data.subscribe(adr_ventil_forcee, function(v) {
    log("[SUBSCRIBE ventil_forcee] valeur=" + v.value + " (status=" + v.status + ")");

    if (!statusOK("subscribe ventil_forcee", v.status)) return;

    var estForceLu = (v.value === true || v.value === 1 || v.value === "true");

    if (!estForceLu && enModeForce && !desactivationEnCours) {
        log("[SUBSCRIBE ventil_forcee] Passage à false détecté hors bouton → désactivation automatique");
        executerDesactivation("auto (ventil_forcee=false)");
    }
});