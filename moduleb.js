var data = require("./module3");
function users(job){
    var persons = data.filter(function(el){
        if (job == el.job){
            return true;
        } else {
            return false;
        }
    })
    return persons;
}
module.exports = users;