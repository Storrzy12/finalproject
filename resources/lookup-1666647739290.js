(function(window, undefined) {
  var dictionary = {
    "47aa136a-1b63-41d7-b56c-b35cef113906": "Calendar",
    "f7dd783e-1e58-43a8-b28f-d8db2b97e972": "Contacts",
    "f6cf091f-d748-4a83-9105-763befbccccc": "Quick Notes",
    "ef9fb32e-2dd3-4815-91d6-7bc509bd7f20": "****Test for User Info",
    "3edcb03a-862a-4b39-9342-843b05ecb2f5": "Login",
    "6c5af1f6-6df1-421e-a443-025d903a9740": "****Test for Contact Viewing",
    "ae11456b-37df-4707-b8d1-8c216e5c762c": "Task List",
    "e089b28e-42ce-4a46-a5bd-6e1e0127331a": "Conversation History",
    "b3f3d61e-4087-4cf5-a89a-484e46f0b3fb": "Companies",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "****Test for Profile",
    "f305af33-bfa4-400d-a093-dac3e98c8d4a": "Dashboard (admin view)",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);