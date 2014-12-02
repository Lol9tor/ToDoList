RAD.model('itemModel', Parse.Object.extend('item', {
    defaults: {
        content: 'some content',
        solved: false
    }
}), false);
