jQuery("#simulation")
  .on("click", ".s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 #s-Button_1" ],
                    "attributes": {
                      "opacity": "0.7"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 #s-Button_1" ],
                    "attributes": {
                      "opacity": "1.0"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 #s-Button_2" ],
                    "attributes": {
                      "opacity": "0.7"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 #s-Button_2" ],
                    "attributes": {
                      "opacity": "1.0"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 #s-Text_2 span" ],
                    "attributes": {
                      "color": "#000000",
                      "font-family": "'Arial',Arial",
                      "font-style": "normal",
                      "font-weight": "700"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 #s-Text_3 span",
                  "#s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 #s-Text_6 span",
                  "#s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 #s-Text_11 span",
                  "#s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 #s-Text_5 span",
                  "#s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 #s-Text_4 span" ],
                    "attributes": {
                      "color": "#79808E",
                      "font-family": "'Arial',Arial",
                      "font-style": "normal",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 #s-Text_3 span" ],
                    "attributes": {
                      "color": "#000000",
                      "font-family": "'Arial',Arial",
                      "font-style": "normal",
                      "font-weight": "700"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 #s-Text_6 span",
                  "#s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 #s-Text_11 span",
                  "#s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 #s-Text_5 span",
                  "#s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 #s-Text_4 span",
                  "#s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 #s-Text_2 span" ],
                    "attributes": {
                      "color": "#82888C",
                      "font-family": "'Arial',Arial",
                      "font-style": "normal",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 #s-Text_4 span" ],
                    "attributes": {
                      "color": "#000000",
                      "font-family": "'Arial',Arial",
                      "font-style": "normal",
                      "font-weight": "700"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 #s-Text_3 span",
                  "#s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 #s-Text_6 span",
                  "#s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 #s-Text_11 span",
                  "#s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 #s-Text_5 span",
                  "#s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 #s-Text_2 span" ],
                    "attributes": {
                      "color": "#79808E",
                      "font-family": "'Arial',Arial",
                      "font-style": "normal",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 #s-Text_5 span" ],
                    "attributes": {
                      "color": "#000000",
                      "font-family": "'Arial',Arial",
                      "font-style": "normal",
                      "font-weight": "700"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 #s-Text_3 span",
                  "#s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 #s-Text_6 span",
                  "#s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 #s-Text_11 span",
                  "#s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 #s-Text_4 span",
                  "#s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 #s-Text_2 span" ],
                    "attributes": {
                      "color": "#79808E",
                      "font-family": "'Arial',Arial",
                      "font-style": "normal",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 #s-Text_6 span" ],
                    "attributes": {
                      "color": "#000000",
                      "font-family": "'Arial',Arial",
                      "font-style": "normal",
                      "font-weight": "700"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 #s-Text_3 span",
                  "#s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 #s-Text_11 span",
                  "#s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 #s-Text_5 span",
                  "#s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 #s-Text_4 span",
                  "#s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 #s-Text_2 span" ],
                    "attributes": {
                      "color": "#79808E",
                      "font-family": "'Arial',Arial",
                      "font-style": "normal",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 #s-Text_11 span" ],
                    "attributes": {
                      "color": "#000000",
                      "font-family": "'Arial',Arial",
                      "font-style": "normal",
                      "font-weight": "700"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 #s-Text_3 span",
                  "#s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 #s-Text_6 span",
                  "#s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 #s-Text_5 span",
                  "#s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 #s-Text_4 span",
                  "#s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 #s-Text_2 span" ],
                    "attributes": {
                      "color": "#82888C",
                      "font-family": "'Arial',Arial",
                      "font-style": "normal",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusin", ".s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Path_113" ],
                    "effect": {
                      "type": "fade",
                      "duration": 200
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Path_113" ],
                    "effect": {
                      "type": "fade",
                      "duration": 200
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Text_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 #s-Text_2 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_3") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 #s-Text_3 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 #s-Text_4 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_5") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 #s-Text_5 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 #s-Text_6 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 #s-Text_11 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-ef9fb32e-2dd3-4815-91d6-7bc509bd7f20 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Text_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_11")) {
      jEvent.undoCases(jFirer);
    }
  });