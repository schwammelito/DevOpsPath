/* tslint:disable:max-line-length */
export class GuiModel {

    private _guiModel = {
        "application": {
            "title": "",
            "formList": [
                {
                    "id": "OwnUserForm",
                    "title": "NotImplemented",
                    "formFieldList": [
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "NotImplementedForm",
                    "title": "Not Implemented",
                    "url": "/dummyform",
                    "headerVisible": false,
                    "footerVisible": false,
                    "borderStyle": "None",
                    "formFieldList": [
                        {
                            "id": "NotImplemented",
                            "type": "label",
                            "name": "NotImplementedMessage",
                            "width": 2
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "NotImplementedFormModal",
                    "title": "NotImplemented",
                    "url": "/dummyform",
                    "formFieldList": [
                        {
                            "id": "NotImplemented",
                            "type": "label",
                            "name": "NotImplementedMessage",
                            "width": 2
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "UserForm",
                    "title": "User",
                    "url": "/user",
                    "formFieldList": [
                        {
                            "id":   "lastName",
                            "type": "text",
                            "name": "FamilyName",
                            "newRow": true,
                            "required": true
                        },
                        {
                            "id":   "firstName",
                            "type": "text",
                            "name": "FirstName",
                            "required": true
                        },
                        {
                            "id":   "email",
                            "type": "text",
                            "name": "EMail",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id":   "password",
                            "type": "text",
                            "name": "Password",
                            "newRow": true,
                            "width": 2,
                            "isPassword": true,
                            "required": true
                        },
                        {
                            "id":   "repeatPassword",
                            "type": "text",
                            "name": "RepeatPassword",
                            "newRow": true,
                            "width": 2,
                            "isPassword": true,
                            "required": true
                        },
                        {
                            "id": "evtCreationDate",
                            "type": "date",
                            "name": "CreationDate",
                            "required": true,
                            "newRow": true
                        },
                        {
                            "id": "evtClosingDate",
                            "type": "date",
                            "name": "ClosingDate"
                        },
                        {
                            "id": "comments",
                            "type": "text",
                            "name": "Comments",
                            "newRow": true,
                            "maxLength": 4000,
                            "height": 4,
                            "width": 2
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "StudyProgramForm",
                    "title": "StudyProgram",
                    "url": "/studyProgram",
                    "formFieldList": [
                        {
                            "id":   "name",
                            "type": "text",
                            "name": "Name",
                            "required": true,
                            "width": 2
                        },
                        {
                            "id": "description",
                            "type": "text",
                            "name": "Description",
                            "newRow": true,
                            "maxLength": 4000,
                            "height": 4,
                            "width": 2
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "ModuleForm",
                    "title": { default: "Modul" },
                    "url": "/module", // TODO create classes in backend otherwise there is a error in frontend (because no entity in backend)
                    "formFieldList": [
                        {
                            "id":   "name",
                            "type": "text",
                            "name": "Name",
                            "required": true,
                            "width": 2
                        },
                        {
                            "id": "description",
                            "type": "text",
                            "name": "Description",
                            "newRow": true,
                            "maxLength": 4000,
                            "height": 4,
                            "width": 2
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "locationForm",
                    "title": { default: "Standort" },
                    "url": "/location",
                    "formFieldList": [
                        {
                            "id":   "name",
                            "type": "text",
                            "name": "Name",
                            "required": true,
                            "width": 2
                        },
                        {
                            "id": "description",
                            "type": "text",
                            "name": "Description",
                            "newRow": true,
                            "maxLength": 4000,
                            "height": 4,
                            "width": 2
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "restaurantForm",
                    "title": { default: "Restaurant" },
                    "url": "/restaurant",
                    "formFieldList": [
                        {
                            "id":   "name",
                            "type": "text",
                            "name": "Name",
                            "required": true,
                            "width": 2
                        },
                        {
                            "id": "description",
                            "type": "text",
                            "name": "Description",
                            "newRow": true,
                            "maxLength": 4000,
                            "height": 4,
                            "width": 2
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "tramstationForm",
                    "title": { default: "Tramstation" },
                    "url": "/tramstation",
                    "formFieldList": [
                        {
                            "id":   "name",
                            "type": "text",
                            "name": "Name",
                            "required": true,
                            "width": 2
                        },
                        {
                            "id": "description",
                            "type": "text",
                            "name": "Description",
                            "newRow": true,
                            "maxLength": 4000,
                            "height": 4,
                            "width": 2
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "PatientForm",
                    "title": "Patient",
                    "url": "/patient",
                    "formFieldList": [
                        {
                            "id":   "firstName",
                            "type": "text",
                            "name": "FirstName",
                            "required": true
                        },
                        {
                            "id":   "lastName",
                            "type": "text",
                            "name": "FamilyName",
                            "required": true
                        },
                        {
                            "id":   "numberOfPersonsInHousehold",
                            "type": "number",
                            "name": "NumberOfPersonsInHousehold",
                            "min": 0,
                            "max": 99,
                            "width": 2
                        },
                        {
                            "id":   "highestEducation",
                            "type": "text",
                            "name": "HighestEducation",
                            "width": 2
                        },
                        {
                            "id":   "originalJob",
                            "type": "text",
                            "name": "OriginalJob",
                            "width": 2
                        },
                        {
                            "id":   "currentJob",
                            "type": "text",
                            "name": "CurrentJob",
                            "width": 2
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "QuestionnaireForm",
                    "title": { default: "Fragebogen" },
                    "url": "/questionnaire",
                    "urlDefaults": true,
                    "formFieldList": [
                        {
                            "id":   "name",
                            "type": "text",
                            "name": { default: "Name" },
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "firstInteractionStep",
                            "type": "autocomplete",
                            "name": "FirstInteractionStep",
                            "wordSearchEnabled": true,
                            "url": "/interactionStep",
                            "form": "InteractionStepForm",
                            "width": 2,
                            "required": false,
                            "readonly": false
                        },
                        {
                            "id": "icon",
                            "type": "text",
                            "name": "Icon",
                            "width": 2,
                            "required": false
                        },
                        {
                            "id": "patientRequired",
                            "type": "RadioGroupField",
                            "name": { default: "benötigt Patient" },
                            "alignment": "horizontal",
                            "width": 1,
                            "radios": [{
                                type: "radio",
                                name: "Ja",
                                key: true
                            }, {
                                type: "radio",
                                name: "Nein",
                                key: false
                            }]
                        },
                        {
                            "id": "active",
                            "type": "RadioGroupField",
                            "name": { default: "aktiv" },
                            "alignment": "horizontal",
                            "width": 1,
                            "radios": [{
                                type: "radio",
                                name: "Sichtbar",
                                key: true
                            }, {
                                type: "radio",
                                name: "Unsichtbar",
                                key: false
                            }]
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "InteractionStepForm",
                    "title": { default: "Interaktionsschritt" },
                    "url": "/interactionStep",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "Name",
                            "required": true,
                            "width": 2
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "InteractionElementForm",
                    "title": "InteractionElement",
                    "url": "/interactionElement",
                    "formFieldList": [
                        {
                            "id": "interactionStep",
                            "type": "autocomplete",
                            "name": "InteractionStep",
                            "wordSearchEnabled": true,
                            "url": "/interactionStep",
                            "width": 1,
                            "form": "InteractionStepForm",
                            "required": true,
                            "readonly": true,
                            "defaultKey": "interactionStepKey"
                        },
                        {
                            "id": "nextInteractionStep",
                            "type": "autocomplete",
                            "name": "NextInteractionStep",
                            "wordSearchEnabled": true,
                            "url": "/interactionStep",
                            "width": 1,
                            "form": "InteractionStepForm",
                            "required": false
                        },
                        {
                            "id": "sortOrder",
                            "type": "number",
                            "name": "SortOrder",
                            "width": 2,
                            "min": 1,
                            "max": 999999999999,
                            "digits": 0,
                            "required": true
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "BackButtonElementForm",
                    "title": "BackButtonElement",
                    "url": "/backButtonElement",
                    "formFieldList": [
                        {
                            "id": "interactionStep",
                            "type": "autocomplete",
                            "name": "InteractionStep",
                            "wordSearchEnabled": true,
                            "url": "/interactionStep",
                            "width": 2,
                            "form": "InteractionStepForm",
                            "required": true,
                            "readonly": true,
                            "defaultKey": "interactionStepKey"
                        },
                        {
                            "id": "sortOrder",
                            "type": "number",
                            "name": "SortOrder",
                            "width": 2,
                            "min": 1,
                            "max": 999999999999,
                            "digits": 0,
                            "required": true
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "ButtonElementForm",
                    "title": "ButtonElement",
                    "url": "/buttonElement",
                    "formFieldList": [
                        {
                            "id": "interactionStep",
                            "type": "autocomplete",
                            "name": "InteractionStep",
                            "wordSearchEnabled": true,
                            "url": "/interactionStep",
                            "width": 1,
                            "form": "InteractionStepForm",
                            "required": true,
                            "readonly": true,
                            "defaultKey": "interactionStepKey"
                        },
                        {
                            "id": "nextInteractionStep",
                            "type": "autocomplete",
                            "name": "NextInteractionStep",
                            "wordSearchEnabled": true,
                            "url": "/interactionStep",
                            "width": 1,
                            "form": "InteractionStepForm",
                            "required": false
                        },
                        {
                            "id": "sortOrder",
                            "type": "number",
                            "name": "SortOrder",
                            "width": 2,
                            "min": 1,
                            "max": 999999999999,
                            "digits": 0,
                            "required": true
                        },
                        {
                            "id": "name",
                            "type": "text",
                            "name": "Name",
                            "required": true,
                            "width": 2
                        },
                        {
                            "id": "exportKey",
                            "type": "text",
                            "name": "ExportKey",
                            "required": true,
                            "width": 2
                        },
                        {
                            "id": "tooltip",
                            "type": "text",
                            "name": "Tooltip",
                            "required": false
                        },
                        {
                            "id": "icon",
                            "type": "text",
                            "name": "Icon",
                            "required": false
                        },
                        {
                            "id": "color",
                            "type": "text",
                            "name": "Color",
                            "required": false
                        },
                        {
                            "id": "valueDescription",
                            "type": "text",
                            "name": "ValueDescription",
                            "newRow": true,
                            "required": false
                        },
                        {
                            "id": "value",
                            "type": "text",
                            "name": "Value",
                            "required": false
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "TileListElementForm",
                    "title": "TileListElement",
                    "url": "/tileListElement",
                    "formFieldList": [
                        {
                            "id": "interactionStep",
                            "type": "autocomplete",
                            "name": "InteractionStep",
                            "wordSearchEnabled": true,
                            "url": "/interactionStep",
                            "width": 2,
                            "form": "InteractionStepForm",
                            "required": true,
                            "readonly": true,
                            "defaultKey": "interactionStepKey"
                        },
                        {
                            "id": "sortOrder",
                            "type": "number",
                            "name": "SortOrder",
                            "width": 2,
                            "min": 1,
                            "max": 999999999999,
                            "digits": 0,
                            "required": true
                        },
                        {
                            "id": "customServiceUrl",
                            "type": "autocomplete",
                            "name": "CustomServiceUrl",
                            "wordSearchEnabled": true,
                            "url": "/customServiceUrl",
                            "width": 2,
                            "form": "CustomServiceUrlForm",
                            "required": true,
                            "readonly": false
                        },
                        {
                            "id": "isSearchVisible",
                            "type": "RadioGroupField",
                            "name": "SearchVisible",
                            "alignment": "horizontal",
                            "width": 1,
                            "radios": [{
                                type: "radio",
                                name: "Ja",
                                key: true
                            }, {
                                type: "radio",
                                name: "Nein",
                                key: false
                            }
                            ]
                        },
                        {
                            "id": "isSearchRequired",
                            "type": "RadioGroupField",
                            "name": "SearchRequired",
                            "alignment": "horizontal",
                            "width": 1,
                            "radios": [{
                                type: "radio",
                                name: "Ja",
                                key: true
                            }, {
                                type: "radio",
                                name: "Nein",
                                key: false
                            }
                            ]
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "ButtonListElementForm",
                    "title": "ButtonListElement",
                    "url": "/buttonListElement",
                    "formFieldList": [
                        {
                            "id": "interactionStep",
                            "type": "autocomplete",
                            "name": "InteractionStep",
                            "wordSearchEnabled": true,
                            "url": "/interactionStep",
                            "width": 1,
                            "form": "InteractionStepForm",
                            "required": true,
                            "readonly": true,
                            "defaultKey": "interactionStepKey"
                        },
                        {
                            "id": "nextInteractionStep",
                            "type": "autocomplete",
                            "name": "NextInteractionStep",
                            "wordSearchEnabled": true,
                            "url": "/interactionStep",
                            "width": 1,
                            "form": "InteractionStepForm",
                            "required": false
                        },
                        {
                            "id": "sortOrder",
                            "type": "number",
                            "name": "SortOrder",
                            "width": 2,
                            "min": 1,
                            "max": 999999999999,
                            "digits": 0,
                            "required": true
                        },
                        {
                            "id": "exportKey",
                            "type": "text",
                            "name": "ExportKey",
                            "required": true,
                            "width": 2
                        },
                        {
                            "id": "customServiceUrl",
                            "type": "autocomplete",
                            "name": "CustomServiceUrl",
                            "wordSearchEnabled": true,
                            "url": "/customServiceUrl",
                            "width": 2,
                            "form": "CustomServiceUrlForm",
                            "required": true,
                            "readonly": false
                        },
                        {
                            "id": "isSearchVisible",
                            "type": "RadioGroupField",
                            "name": "SearchVisible",
                            "alignment": "horizontal",
                            "width": 1,
                            "radios": [{
                                type: "radio",
                                name: "Ja",
                                key: true
                            }, {
                                type: "radio",
                                name: "Nein",
                                key: false
                            }
                            ]
                        },
                        {
                            "id": "isSearchRequired",
                            "type": "RadioGroupField",
                            "name": "SearchRequired",
                            "alignment": "horizontal",
                            "width": 1,
                            "radios": [{
                                type: "radio",
                                name: "Ja",
                                key: true
                            }, {
                                type: "radio",
                                name: "Nein",
                                key: false
                            }
                            ]
                        },
                        {
                            "id": "valueDescription",
                            "type": "text",
                            "name": "ValueDescription",
                            "required": false,
                            "width": 2
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "FormDateFieldElementForm",
                    "title": "FormDateFieldElement",
                    "url": "/formDateFieldElement",
                    "formFieldList": [
                        {
                            "id": "interactionStep",
                            "type": "autocomplete",
                            "name": "InteractionStep",
                            "wordSearchEnabled": true,
                            "url": "/interactionStep",
                            "width": 1,
                            "form": "InteractionStepForm",
                            "required": true,
                            "readonly": true,
                            "defaultKey": "interactionStepKey"
                        },
                        {
                            "id": "nextInteractionStep",
                            "type": "autocomplete",
                            "name": "NextInteractionStep",
                            "wordSearchEnabled": true,
                            "url": "/interactionStep",
                            "width": 1,
                            "form": "InteractionStepForm",
                            "required": false
                        },
                        {
                            "id": "sortOrder",
                            "type": "number",
                            "name": "SortOrder",
                            "width": 2,
                            "min": 1,
                            "max": 999999999999,
                            "digits": 0,
                            "required": true
                        },
                        {
                            "id": "name",
                            "type": "text",
                            "name": "Name",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "exportKey",
                            "type": "text",
                            "name": "ExportKey",
                            "required": true,
                            "width": 2
                        },
                        {
                            "id": "required",
                            "type": "RadioGroupField",
                            "name": "Required",
                            "alignment": "horizontal",
                            "width": 2,
                            "radios": [{
                                type: "radio",
                                name: "Ja",
                                key: true
                            }, {
                                type: "radio",
                                name: "Nein",
                                key: false
                            }]
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "FormFileUploadElementForm",
                    "title": "FormFileUploadElement",
                    "url": "/formFileUploadElement",
                    "formFieldList": [
                        {
                            "id": "interactionStep",
                            "type": "autocomplete",
                            "name": "InteractionStep",
                            "wordSearchEnabled": true,
                            "url": "/interactionStep",
                            "width": 1,
                            "form": "InteractionStepForm",
                            "required": true,
                            "readonly": true,
                            "defaultKey": "interactionStepKey"
                        },
                        {
                            "id": "nextInteractionStep",
                            "type": "autocomplete",
                            "name": "NextInteractionStep",
                            "wordSearchEnabled": true,
                            "url": "/interactionStep",
                            "width": 1,
                            "form": "InteractionStepForm",
                            "required": false
                        },
                        {
                            "id": "sortOrder",
                            "type": "number",
                            "name": "SortOrder",
                            "width": 2,
                            "min": 1,
                            "max": 999999999999,
                            "digits": 0,
                            "required": true
                        },
                        {
                            "id": "name",
                            "type": "text",
                            "name": "Name",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "exportKey",
                            "type": "text",
                            "name": "ExportKey",
                            "required": true,
                            "width": 2
                        },
                        {
                            "id": "required",
                            "type": "RadioGroupField",
                            "name": "Required",
                            "alignment": "horizontal",
                            "width": 2,
                            "radios": [{
                                type: "radio",
                                name: "Ja",
                                key: true
                            }, {
                                type: "radio",
                                name: "Nein",
                                key: false
                            }]
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "FormFileTypeForm",
                    "title": "FormFileType",
                    "url": "/formFileType",
                    "formFieldList": [
                        {
                            "id": "formFileUploadElement",
                            "type": "autocomplete",
                            "name": "FormFileUploadElement",
                            "wordSearchEnabled": true,
                            "url": "/formFileUploadElement",
                            "width": 2,
                            "form": "FormFileUploadElementForm",
                            "required": true,
                            "readonly": true,
                            "defaultKey": "interactionElementKey"
                        },
                        {
                            "id": "fileType",
                            "type": "text",
                            "name": "FormFileType",
                            "width": 2,
                            "required": true
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "FormNumberFieldElementForm",
                    "title": "FormNumberFieldElement",
                    "url": "/formNumberFieldElement",
                    "formFieldList": [
                        {
                            "id": "interactionStep",
                            "type": "autocomplete",
                            "name": "InteractionStep",
                            "wordSearchEnabled": true,
                            "url": "/interactionStep",
                            "width": 1,
                            "form": "InteractionStepForm",
                            "required": true,
                            "readonly": true,
                            "defaultKey": "interactionStepKey"
                        },
                        {
                            "id": "nextInteractionStep",
                            "type": "autocomplete",
                            "name": "NextInteractionStep",
                            "wordSearchEnabled": true,
                            "url": "/interactionStep",
                            "width": 1,
                            "form": "InteractionStepForm",
                            "required": false
                        },
                        {
                            "id": "sortOrder",
                            "type": "number",
                            "name": "SortOrder",
                            "width": 2,
                            "min": 1,
                            "max": 999999999999,
                            "digits": 0,
                            "required": true
                        },
                        {
                            "id": "name",
                            "type": "text",
                            "name": "Name",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "exportKey",
                            "type": "text",
                            "name": "ExportKey",
                            "required": true,
                            "width": 2
                        },
                        {
                            "id": "required",
                            "type": "RadioGroupField",
                            "name": "Required",
                            "alignment": "horizontal",
                            "width": 2,
                            "radios": [{
                                type: "radio",
                                name: "Ja",
                                key: true
                            }, {
                                type: "radio",
                                name: "Nein",
                                key: false
                            }]
                        },
                        {
                            "id": "min",
                            "type": "number",
                            "name": "MinimumValue",
                            "width": 1,
                            "min": -999999999,
                            "max": 999999999,
                            "digits": 0,
                            "required": true
                        },
                        {
                            "id": "max",
                            "type": "number",
                            "name": "MaximumValue",
                            "width": 1,
                            "min": -999999999,
                            "max": 999999999,
                            "digits": 0,
                            "required": true
                        },
                        {
                            "id": "digits",
                            "type": "number",
                            "name": "Digits",
                            "width": 1,
                            "min": 0,
                            "max": 10,
                            "digits": 0,
                            "required": true
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "FormTextFieldElementForm",
                    "title": "FormTextFieldElement",
                    "url": "/formTextFieldElement",
                    "formFieldList": [
                        {
                            "id": "interactionStep",
                            "type": "autocomplete",
                            "name": "InteractionStep",
                            "wordSearchEnabled": true,
                            "url": "/interactionStep",
                            "width": 1,
                            "form": "InteractionStepForm",
                            "required": true,
                            "readonly": true,
                            "defaultKey": "interactionStepKey"
                        },
                        {
                            "id": "nextInteractionStep",
                            "type": "autocomplete",
                            "name": "NextInteractionStep",
                            "wordSearchEnabled": true,
                            "url": "/interactionStep",
                            "width": 1,
                            "form": "InteractionStepForm",
                            "required": false
                        },
                        {
                            "id": "sortOrder",
                            "type": "number",
                            "name": "SortOrder",
                            "width": 2,
                            "min": 1,
                            "max": 999999999999,
                            "digits": 0,
                            "required": true
                        },
                        {
                            "id": "name",
                            "type": "text",
                            "name": "Name",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "exportKey",
                            "type": "text",
                            "name": "ExportKey",
                            "required": true,
                            "width": 2
                        },
                        {
                            "id": "required",
                            "type": "RadioGroupField",
                            "name": "Required",
                            "alignment": "horizontal",
                            "width": 2,
                            "radios": [{
                                type: "radio",
                                name: "Ja",
                                key: true
                            }, {
                                type: "radio",
                                name: "Nein",
                                key: false
                            }]
                        },
                        {
                            "id": "width",
                            "type": "number",
                            "name": "Width",
                            "width": 1,
                            "min": 1,
                            "max": 100,
                            "digits": 0,
                            "required": true
                        },
                        {
                            "id": "height",
                            "type": "number",
                            "name": "Height",
                            "width": 1,
                            "min": 1,
                            "max": 100,
                            "digits": 0,
                            "required": true
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "FormRadioButtonListElementForm",
                    "title": "FormRadioButtonListElement",
                    "url": "/formRadioButtonListElement",
                    "formFieldList": [
                        {
                            "id": "interactionStep",
                            "type": "autocomplete",
                            "name": "InteractionStep",
                            "wordSearchEnabled": true,
                            "url": "/interactionStep",
                            "width": 1,
                            "form": "InteractionStepForm",
                            "required": true,
                            "readonly": true,
                            "defaultKey": "interactionStepKey"
                        },
                        {
                            "id": "nextInteractionStep",
                            "type": "autocomplete",
                            "name": "NextInteractionStep",
                            "wordSearchEnabled": true,
                            "url": "/interactionStep",
                            "width": 1,
                            "form": "InteractionStepForm",
                            "required": false
                        },
                        {
                            "id": "sortOrder",
                            "type": "number",
                            "name": "SortOrder",
                            "width": 2,
                            "min": 1,
                            "max": 999999999999,
                            "digits": 0,
                            "required": true
                        },
                        {
                            "id": "name",
                            "type": "text",
                            "name": "Name",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "exportKey",
                            "type": "text",
                            "name": "ExportKey",
                            "required": true,
                            "width": 2
                        },
                        {
                            "id": "required",
                            "type": "RadioGroupField",
                            "name": "Required",
                            "alignment": "horizontal",
                            "width": 2,
                            "radios": [{
                                type: "radio",
                                name: "Ja",
                                key: true
                            }, {
                                type: "radio",
                                name: "Nein",
                                key: false
                            }]
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "FormRadioButtonValueForm",
                    "title": "FormRadioButtonValue",
                    "url": "/formRadioButtonValue",
                    "formFieldList": [
                        {
                            "id": "radioButtonList",
                            "type": "autocomplete",
                            "name": "FormRadioButtonListElement",
                            "wordSearchEnabled": true,
                            "url": "/formRadioButtonListElement",
                            "width": 2,
                            "form": "FormRadioButtonListElementForm",
                            "required": true,
                            "readonly": true,
                            "defaultKey": "interactionElementKey"
                        },
                        {
                            "id": "name",
                            "type": "text",
                            "name": "Name",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "value",
                            "type": "text",
                            "name": "Value",
                            "width": 1,
                            "required": true
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "TextElementForm",
                    "title": "TextElement",
                    "url": "/textElement",
                    "formFieldList": [
                        {
                            "id": "interactionStep",
                            "type": "autocomplete",
                            "name": "InteractionStep",
                            "wordSearchEnabled": true,
                            "url": "/interactionStep",
                            "width": 2,
                            "form": "InteractionStepForm",
                            "required": true,
                            "readonly": true,
                            "defaultKey": "interactionStepKey"
                        },
                        {
                            "id": "sortOrder",
                            "type": "number",
                            "name": "SortOrder",
                            "width": 2,
                            "min": 1,
                            "max": 999999999999,
                            "digits": 0,
                            "required": true
                        },
                        {
                            "id": "text",
                            "type": "text",
                            "name": "Text",
                            "required": true,
                            "width": 2
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "InteractionInlineForm",
                    "title": "Form",
                    "url": "/interactionInlineForm",
                    "borderStyle": "None",
                    "headerVisible": false,
                    "footerVisible": true,
                    "formFieldList": [
                        {
                            "id": "interactionFormField",
                            "type": "fieldList",
                            "name": "Dynamic Field List",
                            "width": 2,
                            "url": "/interactionStep/:interactionStepKey/form/element",
                        },
                        {
                            "type": "okButton",
                            "name": "Continue"
                        }
                    ]
                },
                {
                    "id": "PatientWizardForm",
                    "title": "Patient",
                    "url": "/newpatient",
                    "headerVisible": false,
                    "footerVisible": true,
                    "borderStyle": "None",
                    "formFieldList": [
                        {
                            "id":   "firstName",
                            "type": "text",
                            "name": "FirstName",
                            "required": true
                        },
                        {
                            "id":   "lastName",
                            "type": "text",
                            "name": "FamilyName",
                            "required": true
                        },
                        {
                            "type": "okButton",
                            "name": { default: "Weiter" }
                        }
                    ]
                },
                {
                    "id": "UserPermissionRoleForm",
                    "title": "UserPermissionRole",
                    "url": "/user/:userKey/permissionRole",
                    "formFieldList": [
                        {
                            "id": "permissionRoleKey",
                            "type": "autocomplete",
                            "name": "PermissionRole",
                            "wordSearchEnabled": true,
                            "url": "/permissionRole",
                            "width": 2,
                            "required": true,
                            "readonly": true,
                        },
                        {
                            "id": "userKey",
                            "type": "autocomplete",
                            "name": "User",
                            "wordSearchEnabled": true,
                            "url": "/user",
                            "width": 2,
                            "form": "UserForm",
                            "required": true,
                            "readonly": true,
                            "defaultKey": "userKey"
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete",
                            "permissionUrl": "/permissionFunction/parameterCheck/:permissionRoleKey/:userKey",
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "PermissionRoleForm",
                    "title": "PermissionRole",
                    "url": "/permissionRole",
                    "formFieldList": [
                        {
                            "id":   "name",
                            "type": "text",
                            "name": "PermissionRoleName",
                            "newRow": true,
                            "width": 2,
                            "required": true
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "ExerciseStepsForm",
                    "title": { default: "Schrittzähler" },
                    "url": "/dummyform",
                    "headerVisible": false,
                    "footerVisible": true,
                    "borderStyle": "None",
                    "formFieldList": [
                        {
                            "id": "steps",
                            "type": "number",
                            "name": { default: "Anzahl Schritte pro Tag" },
                            "min": 0,
                            "max": 100000,
                            "width": 2
                        },
                        {
                            "type": "okButton",
                            "name": { default: "Weiter" }
                        }
                    ]
                },
                {
                    "id": "OtherSportsForm",
                    "title": { default: "Andere Sportarten" },
                    "url": "/dummyform",
                    "headerVisible": false,
                    "footerVisible": true,
                    "borderStyle": "None",
                    "formFieldList": [
                        {
                            "id": "otherSports",
                            "type": "text",
                            "name": { default: "Andere Sportarten" },
                            "width": 2,
                            "height": 5
                        },
                        {
                            "type": "okButton",
                            "name": { default: "Weiter" }
                        }
                    ]
                },
                {
                    "id": "CompetitiveSportsFromToForm",
                    "title": { default: "Leistungssport" },
                    "url": "/dummyform",
                    "headerVisible": false,
                    "footerVisible": true,
                    "borderStyle": "None",
                    "formFieldList": [
                        {
                            "id": "steps",
                            "type": "number",
                            "name": { default: "Alter von" },
                            "min": 0,
                            "max": 120,
                            "width": 2
                        },
                        {
                            "id": "steps",
                            "type": "number",
                            "name": { default: "Alter bis" },
                            "min": 0,
                            "max": 120,
                            "width": 2
                        },
                        {
                            "type": "okButton",
                            "name": { default: "Weiter" }
                        }
                    ]
                }
            ],
            "pageList": [
                {
                    "id": "mainMenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "type": "pageLabel",
                            "value": "<h4>Willkommen bei DevOps</h4>",
                            "newRow": true,
                        },
                        {
                            "type": "button",
                            "name": { default: "Studiengang" },
                            "icon": "fa-file-alt",
                            "color": "wet-asphalt",
                            "page": "studyProgramPage",
                            "width": 2,
                            "newRow": true,
                        },
                        {
                            "type": "button",
                            "name": { default: "Studiengang" },
                            "icon": "fa-file-alt",
                            "color": "red",
                            "page": "studyProgramPage",
                            "width": 2,
                            "newRow": true,
                        },
                        {
                            "type": "button",
                            "name": { default: "Modul" },
                            "icon": "fa-book",
                            "color": "blue",
                            "page": "modulePage",
                            "width": 2,
                            "newRow": false,
                        },
                        {
                            "type": "button",
                            "name": { default: "Standort" },
                            "icon": "fa-map",
                            "color": "yellow",
                            "page": "locationPage",
                            "width": 2,
                            "newRow": false,
                        },
                        {
                            "type": "pageLabel",
                            "value": "<h4>Weitere Applikationen</h4>",
                            "newRow": true,
                        },
                        {
                            "type": "button",
                            "name": { default: "Restaurants" },
                            "icon": "fa-pizza-slice",
                            "color": "silver",
                            "page": "RestaurantsPage",
                            "width": 3,
                            "newRow": true,
                        },
                        {
                            "type": "button",
                            "name": { default: "Tramstationen" },
                            "icon": "fa-train",
                            "color": "silver",
                            "page": "TramstationenPage",
                            "width": 3,
                            "newRow": false,
                        },
                    ]
                },
                {
                    "id": "studyProgramPage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewStudyProgram",
                            "icon": "fa-plus",
                            "color": "green",
                            "width": 2,
                            "form" : {
                                "form" : "StudyProgramForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "StudyProgram",
                            "icon": "fa-user",
                            "color": "wet-asphalt",
                            "search": true,
                            "url": "/studyProgram",
                            "form": {
                                "form": "StudyProgramForm"
                            }
                        },
                    ]
                },
                {
                    "id": "modulePage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": { default: "Neues Modul" },
                            "icon": "fa-plus",
                            "color": "green",
                            "width": 2,
                            "form" : {
                                "form" : "ModuleForm"
                            }
                        },
                    ]
                },
                {
                    "id": "locationPage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": { default: "Neuer Standort" },
                            "icon": "fa-plus",
                            "color": "wet-asphalt",
                            "width": 2,
                            "form" : {
                                "form" : "locationForm"
                            }
                        },
                    ]
                },
                {
                    "id": "RestaurantsPage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": { default: "Neues Restaurant" },
                            "icon": "fa-plus",
                            "color": "green",
                            "width": 2,
                            "form" : {
                                "form" : "restaurantForm"
                            }
                        },
                    ]
                },
                {
                    "id": "TramstationenPage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": { default: "Neue Tramstation" },
                            "icon": "fa-plus",
                            "color": "green",
                            "width": 2,
                            "form" : {
                                "form" : "tramstationForm"
                            }
                        },
                    ]
                },
                {
                    "id": "patientsPage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewPatient",
                            "icon": "fa-user",
                            "color": "green",
                            "width": 2,
                            "form" : {
                                "form" : "PatientForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "Patient",
                            "icon": "fa-user",
                            "color": "wet-asphalt",
                            "search": true,
                            "url": "/patient",
                            "form": {
                                "form": "PatientForm"
                            }
                        }
                    ]
                },
                {
                    "id": "questionnairesPage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": { default: "Neuer Fragebogen" },
                            "icon": "fa-question",
                            "color": "green",
                            "width": 2,
                            "form" : {
                                "form" : "QuestionnaireForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-question",
                            "color": "wet-asphalt",
                            "search": true,
                            "url": "/questionnaire",
                            "page": "questionnairePage"
                        }
                    ]
                },
                {
                    "id": "questionnairePage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": { default: "Fragebogen bearbeiten" },
                            "icon": "fa-question",
                            "color": "green",
                            "width": 2,
                            "form" : {
                                "form" : "QuestionnaireForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-step-forward",
                            "color": "wet-asphalt",
                            "search": true,
                            "width": 3,
                            "page": "interactionsteppage",
                            "url": "/questionnaire/:questionnaireKey/interactionStep"
                        },
                    ]
                },
                {
                    "id": "interactionsteppage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "EditInteractionStep",
                            "icon": "fa-step-forward",
                            "width": 2,
                            "color": "green",
                            "form": {
                                "form": "InteractionStepForm"
                            }
                        },
                        {
                            "type": "button",
                            "name": "NewInteractionElement",
                            "icon": "fa-check-circle",
                            "width": 2,
                            "color": "green",
                            "page": "newinteractionelementpage"
                        },
                        {
                            "type": "list",
                            "icon": "fa-check-circle",
                            "color": "belize-hole",
                            "search": true,
                            "width": 3,
                            "form": {
                                "form": "InteractionElementForm"
                            },
                            "url": "/interactionStep/:interactionStepKey/interactionElement"
                        },
                    ]
                },
                {
                    "id": "newinteractionelementpage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "pageLabel",
                            "value": "<h4>Text, Kacheln und Buttons</h4>",
                            "newRow": true
                        },
                        {
                            "type": "newButton",
                            "name": "NewTextElement",
                            "icon": "fa-font",
                            "width": 2,
                            "color": "green",
                            "form": {
                                "form": "TextElementForm"
                            },
                        },
                        {
                            "type": "newButton",
                            "name": "NewButtonElement",
                            "icon": "fa-hand-o-up",
                            "width": 2,
                            "color": "green",
                            "form": {
                                "form": "ButtonElementForm"
                            },
                        },
                        {
                            "type": "newButton",
                            "name": "NewTileListElement",
                            "icon": "fa-th-large",
                            "width": 2,
                            "color": "green",
                            "form": {
                                "form": "TileListElementForm"
                            },
                        },
                        {
                            "type": "newButton",
                            "name": "NewButtonListElement",
                            "icon": "fa-th-large",
                            "width": 2,
                            "color": "green",
                            "form": {
                                "form": "ButtonListElementForm"
                            },
                        },
                        {
                            "type": "pageLabel",
                            "value": "<h4>Eingabefelder</h4>",
                            "newRow": true
                        },
                        {
                            "type": "newButton",
                            "name": "NewFormDateFieldElement",
                            "icon": "fa-calendar",
                            "width": 2,
                            "color": "green",
                            "form": {
                                "form": "FormDateFieldElementForm"
                            },
                        },
                        {
                            "type": "newButton",
                            "name": "NewFormNumberFieldElement",
                            "icon": "fa-sort-numeric-asc",
                            "width": 2,
                            "color": "green",
                            "form": {
                                "form": "FormNumberFieldElementForm"
                            },
                        },
                        {
                            "type": "newButton",
                            "name": "NewFormRadioButtonListElement",
                            "icon": "fa-times-circle-o",
                            "width": 2,
                            "color": "green",
                            "form": {
                                "form": "FormRadioButtonListElementForm"
                            },
                        },
                        {
                            "type": "newButton",
                            "name": "NewFormTextFieldElement",
                            "icon": "fa-align-left",
                            "width": 2,
                            "color": "green",
                            "form": {
                                "form": "FormTextFieldElementForm"
                            },
                        },
                        {
                            "type": "newButton",
                            "name": "NewFormFileUploadElement",
                            "icon": "fa-file",
                            "width": 2,
                            "color": "green",
                            "form": {
                                "form": "FormFileUploadElementForm"
                            },
                        },
                        {
                            "type": "pageLabel",
                            "value": "<h4>Erfasste Elemente</h4>",
                            "newRow": true
                        },
                        {
                            "type": "list",
                            "icon": "fa-check-circle",
                            "color": "belize-hole",
                            "search": true,
                            "width": 3,
                            "form": {
                                "form": "InteractionElementForm"
                            },
                            "url": "/interactionStep/:interactionStepKey/interactionElement"
                        },
                    ]
                },
                {
                    "id": "patientQuestionnairesPage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "list",
                            "name": "Patient",
                            "icon": "fa-user",
                            "color": "wet-asphalt",
                            "search": true,
                            "url": "/patient",
                            "page": "patientQuestionnairePage"
                        }
                    ]
                },
                {
                    "id": "patientQuestionnairePage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "list",
                            "icon": "fa-question",
                            "color": "wet-asphalt",
                            "search": true,
                            "url": "/questionnaire/patientRequired/true",
                            "page": "nextInteractionStepPage"
                        }
                    ]
                },
                {
                    "id": "questionnairePatientsPage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "list",
                            "name": "Patient",
                            "icon": "fa-user",
                            "color": "wet-asphalt",
                            "search": true,
                            "url": "/patient",
                            "page": "nextInteractionStepPage"
                        }
                    ]
                },
                {
                    "id": "nextInteractionStepPage",
                    "elementList": [
                        {
                            "type": "elementList",
                            "url": "/patient/:patientKey/questionnaire/:questionnaireKey/nextInteractionStep/:nextInteractionStepKey/interactionStepElements",
                            "newRow": true,
                        },
                    ]
                },
                {
                    "id": "questionnaireResponsesPage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "list",
                            "icon": "fa-file-alt",
                            "color": "wet-asphalt",
                            "search": true,
                            "url": "/questionnaireResponse",
                            "page": "questionnaireResponsePage"
                        }
                    ]
                },
                {
                    "id": "questionnaireResponsePage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "pageLabel",
                            "value": "<h4>Das Profil des Patienten:</h4>",
                            "newRow": true,
                        },
                        {
                            "type": "OrderSummaryComponent",
                            "newRow": true
                        }
                    ]
                },
                {
                    "id": "usersPage",
                    "name": "Sub Page",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewUser",
                            "icon": "fa-user",
                            "color": "green",
                            "width": 2,
                            "form" : {
                                "form" : "UserForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "User",
                            "icon": "fa-user",
                            "color": "wet-asphalt",
                            "search": true,
                            "url": "/user",
                            "page": "userPage",
                        }
                    ]
                },
                {
                    "id": "userPage",
                    "name": "User",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "EditUser",
                            "icon": "fa-user",
                            "width": 2,
                            "color": "green",
                            "form": {
                                "form": "UserForm"
                            }
                        },
                        {
                            "type": "button",
                            "name": "AddPermissionRole",
                            "icon": "fa-check-circle",
                            "color": "green",
                            "width": 2,
                            "form": {
                                "form": "UserPermissionRoleForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "Permission Role List",
                            "icon": "fa-check-circle",
                            "color": "wet-asphalt",
                            "search": true,
                            "form": {
                                "form": "UserPermissionRoleForm"
                            },
                            "url": "/user/:userKey/permissionRole"
                        },
                    ]
                }
            ]
        }
    };


    getGuiModel() {
        return this._guiModel;
    }
}
