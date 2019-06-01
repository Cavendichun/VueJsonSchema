import ObjectField from './ObjectField';
import StringField from './StringField';
// import NumberField from './NumberField';
// import BooleanField from './BooleanField';
// import ArrayField from './ArrayField';
import Vue from 'vue';

const typeParser = {
    object: ObjectField,
    string: StringField,
    // number: NumberField,
    // boolean: BooleanField,
    // array: ArrayField
}

export const getTargetFieldBySchema = (type) => {
    let _view = typeParser[type];
    if (!_view) throw `schema type error`;
    return _view;
}
