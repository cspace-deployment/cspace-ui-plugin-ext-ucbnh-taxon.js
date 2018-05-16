import { defineMessages } from 'react-intl';

export default {
  taxonAccessCodes: {
    values: [
      'Unrestricted',
      'Restricted',
      'Dead',
    ],
    messages: defineMessages({
      Unrestricted: {
        id: 'option.taxonAccessCodes.Unrestricted',
        defaultMessage: 'unrestricted',
      },
      Restricted: {
        id: 'option.taxonAccessCodes.Restricted',
        defaultMessage: 'restricted',
      },
      Dead: {
        id: 'option.taxonAccessCodes.Dead',
        defaultMessage: 'dead',
      },
    }),
  },
  taxonCommonNameTypes: {
    values: [
      'preferred',
      'secondary',
      'rejected',
    ],
    messages: defineMessages({
      preferred: {
        id: 'option.taxonCommonNameTypes.preferred',
        defaultMessage: 'preferred',
      },
      secondary: {
        id: 'option.taxonCommonNameTypes.secondary',
        defaultMessage: 'secondary',
      },
      rejected: {
        id: 'option.taxonCommonNameTypes.rejected',
        defaultMessage: 'rejected',
      },
    }),
  },
  taxonRelatedTermTypes: {
    values: [
      'Synonym',
      'Female Hybrid Parent',
      'Male Hybrid Parent',
    ],
    messages: defineMessages({
      Synonym: {
        id: 'option.taxonRelatedTermTypes.Synonym',
        defaultMessage: 'synonym',
      },
      'Female Hybrid Parent': {
        id: 'option.taxonRelatedTermTypes.Female Hybrid Parent',
        defaultMessage: 'female hybrid parent',
      },
      'Male Hybrid Parent': {
        id: 'option.taxonRelatedTermTypes.Male Hybrid Parent',
        defaultMessage: 'male hybrid parent',
      },
    }),
  },
};
