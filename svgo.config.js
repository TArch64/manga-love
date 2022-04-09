module.exports = {
    js2svg: {
        indent: 4,
        pretty: true
    },
    multipass: true,
    plugins: [
        {
            name: 'preset-default',
            params: { removeViewBox: false }
        },
        'removeDimensions',
        'sortAttrs',
        'convertStyleToAttrs',
        {
            name: 'removeAttrs',
            params: {
                attrs: 'data.*'
            }
        }
    ]
};
