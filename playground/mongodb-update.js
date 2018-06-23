//const MongoClient=require('mongodb').MongoClient;

const {MongoClient,ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to Mongodb server')
    
    // db.collection('Todos').findOneAndUpdate({
    //     _id:new ObjectID('5b2e1878f114807a5163691c')
    // },{
    //     $set:{
    //         completed:true
    //     }
    // },{
    //     returnOriginal:false
    // }).then((result)=>{
    //     console.log(result)
    // })

    db.collection('Users').findOneAndUpdate({
        _id:new ObjectID('5b2d4b2a365c861c442c4c08')
    },{
        $set:{
            name:'Andrew'
        },
        $inc:{
            age:1
        }
    },{
        //This command's mean we dont need original document
        returnOriginal:false
    }).then((result)=>{
        console.log(result)
    })
    
    //db.close();
});