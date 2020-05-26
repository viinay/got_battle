var utils = {
    searchQueryBuiler:function(query){
        let searchOptions = {}
        for(var key in query){
            let value = RegExp(query[key],'ig')
            switch(key){
                case 'number':
                    searchOptions['battle_number'] = value
                    break;
    
                case 'king':
                    searchOptions['$or'] = [ {attacker_king:value} , {defender_king:value} ];
                    break;
    
                case 'outcome':
                    searchOptions['attacker_outcome'] = value
                    break;
    
                case 'type':
                    searchOptions['battle_type'] = value
                    break;
                
                case 'death':
                    searchOptions['major_death'] = value
                    break;
    
                case 'capture':
                    searchOptions['major_capture'] = value
                    break;
    
                case 'size':
                    searchOptions['$or'] = [ {attacker_size:value} , {defender_size:value} ];
                    break;
                
                case 'commander':
                    searchOptions['$or'] = [ {attacker_commander:value} , {defender_commander:value} ];
                    break;
    
                default:
                    searchOptions[key] = value
            }
        };
        return searchOptions;
    }
};

module.exports = utils;