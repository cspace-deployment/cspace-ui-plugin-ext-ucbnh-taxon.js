import fields from './fields';
import optionLists from './optionLists';

module.exports = () => configContext => ({
  optionLists,
  extensions: {
    'ucbnh-taxon': {
      fields: fields(configContext),
    },
  },
});
