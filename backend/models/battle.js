const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const battleSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    battle_number:{
        type:Number,
        required:true
    },
    attacker_king:{
        type:String,
        required:true
    },
    defender_king:{
        type:String,
        required:true
    },
    attacker_1:{
        type:String
    },
    attacker_2:{
        type:String
    },
    attacker_3:{
        type:String
    },
    attacker_4:{
        type:String
    },
    defender_1:{
        type:String
    },
    defender_2:{
        type:String
    },
    defender_3:{
        type:String
    },
    defender_4:{
        type:String
    },
    attacker_outcome:{
        type:String,
        required:true,
        enum:['win','loss']
    },
    battle_type:{
        type:String,
        required:true
    },
    major_death:{
        type:Number
    },
    major_capture:{
        type:Number
    },
    attacker_size:{
        type:Number
    },
    defender_size:{
        type:Number
    },
    attacker_commander:{
        type:String,
        required:true
    },
    defender_commander:{
        type:String,
        required:true
    },
    summer:{
        type:Number
    },
    location:{
        type:String,
        required:true
    },
    region:{
        type:String,
        required:true
    },
    note:{
        type:String
    }
},{ versionKey: false });

var battleModel = mongoose.model('battles', battleSchema);

module.exports = battleModel