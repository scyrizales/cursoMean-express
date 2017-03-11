module.exports = function(view, obj, res) {
    res.render('layout', {
        data: obj,
        view: view
    });
};