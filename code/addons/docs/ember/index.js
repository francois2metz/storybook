/* eslint-disable no-underscore-dangle */
import { global } from '@storybook/global';

const { window: globalWindow } = global;

export const setJSONDoc = (jsondoc) => {
  globalWindow.__EMBER_GENERATED_DOC_JSON__ = jsondoc;
};
