import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CheckboxInput,
    CompoundInput,
    DateInput,
    OptionPickerInput,
    TermPickerInput,
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_BOOL,
    DATA_TYPE_DATE,
  } = configContext.dataTypes;

  return {
    'ns2:taxon_naturalhistory': {
      [config]: {
        service: {
          ns: 'http://collectionspace.org/services/taxon/domain/naturalhistory',
        },
      },
      taxonBasionym: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.taxon_naturalhistory.taxonBasionym.name',
              defaultMessage: 'Basionym',
            },
          }),
          view: {
            type: AutocompleteInput,
            props: {
              source: 'taxon/local',
            },
          },
        },
      },
      accessRestrictions: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.taxon_naturalhistory.accessRestrictions.name',
              defaultMessage: 'Access code',
            },
          }),
          view: {
            type: OptionPickerInput,
            props: {
              source: 'taxonAccessCodes',
            },
          },
        },
      },
      family: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.taxon_naturalhistory.family.name',
              defaultMessage: 'Family',
            },
          }),
          view: {
            type: AutocompleteInput,
            props: {
              source: 'taxon/local',
            },
          },
        },
      },
      plantAttributesGroupList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        plantAttributesGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.taxon_naturalhistory.plantAttributesGroup.name',
                defaultMessage: 'Plant attribute',
              },
            }),
            repeating: true,
            view: {
              type: CompoundInput,
            },
          },
          attributeDate: {
            [config]: {
              dataType: DATA_TYPE_DATE,
              messages: defineMessages({
                fullName: {
                  id: 'field.taxon_naturalhistory.attributeDate.fullName',
                  defaultMessage: 'Plant attribute date',
                },
                name: {
                  id: 'field.taxon_naturalhistory.attributeDate.name',
                  defaultMessage: 'Date',
                },
              }),
              view: {
                type: DateInput,
              },
            },
          },
          recordedBy: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.taxon_naturalhistory.recordedBy.fullName',
                  defaultMessage: 'Plant attribute recorded by',
                },
                name: {
                  id: 'field.taxon_naturalhistory.recordedBy.name',
                  defaultMessage: 'Recorded by',
                },
              }),
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'person/local',
                },
              },
            },
          },
          height: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.taxon_naturalhistory.height.name',
                  defaultMessage: 'Height',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          width: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.taxon_naturalhistory.width.name',
                  defaultMessage: 'Width',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          diameterBreastHeight: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.taxon_naturalhistory.diameterBreastHeight.name',
                  defaultMessage: 'DBH',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          habitat: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.taxon_naturalhistory.habitat.name',
                  defaultMessage: 'Habitat',
                },
              }),
              view: {
                type: TermPickerInput,
                props: {
                  source: 'habitat',
                },
              },
            },
          },
          climateRating: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.taxon_naturalhistory.climateRating.name',
                  defaultMessage: 'Climate rating',
                },
              }),
              view: {
                type: TermPickerInput,
                props: {
                  source: 'climateRating',
                },
              },
            },
          },
          conservationCategory: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.taxon_naturalhistory.conservationCategory.name',
                  defaultMessage: 'Conservation category',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          conservationOrganization: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.taxon_naturalhistory.conservationOrganization.name',
                  defaultMessage: 'Conservation organization',
                },
              }),
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'organization/local',
                },
              },
            },
          },
          frostSensitive: {
            [config]: {
              dataType: DATA_TYPE_BOOL,
              messages: defineMessages({
                name: {
                  id: 'field.taxon_naturalhistory.frostSensitive.name',
                  defaultMessage: 'Frost sensitive',
                },
              }),
              view: {
                type: CheckboxInput,
              },
            },
          },
          medicinalUse: {
            [config]: {
              dataType: DATA_TYPE_BOOL,
              messages: defineMessages({
                name: {
                  id: 'field.taxon_naturalhistory.medicinalUse.name',
                  defaultMessage: 'Medicinal use',
                },
              }),
              view: {
                type: CheckboxInput,
              },
            },
          },
          economicUse: {
            [config]: {
              dataType: DATA_TYPE_BOOL,
              messages: defineMessages({
                name: {
                  id: 'field.taxon_naturalhistory.economicUse.name',
                  defaultMessage: 'Economic use',
                },
              }),
              view: {
                type: CheckboxInput,
              },
            },
          },
        },
      },
      naturalHistoryCommonNameGroupList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        naturalHistoryCommonNameGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.taxon_naturalhistory.naturalHistoryCommonNameGroup.name',
                defaultMessage: 'Common name',
              },
            }),
            repeating: true,
            view: {
              type: CompoundInput,
              props: {
                tabular: true,
              },
            },
          },
          naturalHistoryCommonName: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.taxon_naturalhistory.naturalHistoryCommonName.fullName',
                  defaultMessage: 'Common name',
                },
                name: {
                  id: 'field.taxon_naturalhistory.naturalHistoryCommonName.name',
                  defaultMessage: 'Name',
                },
              }),
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'taxon/local',
                },
              },
            },
          },
          naturalHistoryCommonNameLanguage: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.taxon_naturalhistory.naturalHistoryCommonNameLanguage.fullName',
                  defaultMessage: 'Common name language',
                },
                name: {
                  id: 'field.taxon_naturalhistory.naturalHistoryCommonNameLanguage.name',
                  defaultMessage: 'Language',
                },
              }),
              view: {
                type: TermPickerInput,
                props: {
                  source: 'languages',
                },
              },
            },
          },
          naturalHistoryCommonNameSource: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.taxon_naturalhistory.naturalHistoryCommonNameSource.fullName',
                  defaultMessage: 'Common name source',
                },
                name: {
                  id: 'field.taxon_naturalhistory.naturalHistoryCommonNameSource.name',
                  defaultMessage: 'Source',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          naturalHistoryCommonNameSourceDetail: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.taxon_naturalhistory.naturalHistoryCommonNameSourceDetail.fullName',
                  defaultMessage: 'Common name source detail',
                },
                name: {
                  id: 'field.taxon_naturalhistory.naturalHistoryCommonNameSourceDetail.name',
                  defaultMessage: 'Source detail',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          naturalHistoryCommonNameType: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.taxon_naturalhistory.naturalHistoryCommonNameType.fullName',
                  defaultMessage: 'Common name type',
                },
                name: {
                  id: 'field.taxon_naturalhistory.naturalHistoryCommonNameType.name',
                  defaultMessage: 'Type',
                },
              }),
              view: {
                type: OptionPickerInput,
                props: {
                  source: 'taxonCommonNameTypes',
                },
              },
            },
          },
        },
      },
      relatedTermGroupList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        relatedTermGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.taxon_naturalhistory.relatedTermGroup.name',
                defaultMessage: 'Related term',
              },
            }),
            repeating: true,
            view: {
              type: CompoundInput,
              props: {
                tabular: true,
              },
            },
          },
          relatedTerm: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.taxon_naturalhistory.relatedTerm.fullName',
                  defaultMessage: 'Related term',
                },
                name: {
                  id: 'field.taxon_naturalhistory.relatedTerm.name',
                  defaultMessage: 'Term',
                },
              }),
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'taxon/local',
                },
              },
            },
          },
          relatedTermType: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.taxon_naturalhistory.relatedTermType.fullName',
                  defaultMessage: 'Related term type',
                },
                name: {
                  id: 'field.taxon_naturalhistory.relatedTermType.name',
                  defaultMessage: 'Type',
                },
              }),
              view: {
                type: OptionPickerInput,
                props: {
                  source: 'taxonRelatedTermTypes',
                },
              },
            },
          },
          relatedTermSource: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.taxon_naturalhistory.relatedTermSource.fullName',
                  defaultMessage: 'Related term source',
                },
                name: {
                  id: 'field.taxon_naturalhistory.relatedTermSource.name',
                  defaultMessage: 'Source',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          relatedTermSourceDetail: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.taxon_naturalhistory.relatedTermSourceDetail.fullName',
                  defaultMessage: 'Related term source detail',
                },
                name: {
                  id: 'field.taxon_naturalhistory.relatedTermSourceDetail.name',
                  defaultMessage: 'Source detail',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
        },
      },
    },
  };
};
