const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb+srv://dev:dev@cluster0.l29up.mongodb.net/triyo-test?retryWrites=true&w=majority"
    const client = new MongoClient(uri)

    
    try {
        await client.connect();

        await listDatabases(client);
    } catch (e) {
        console.log(e)
    }
}

main().catch(console.error);

async function listDatabases(client) {
    databaseslist = await client.db().admin().listDatabases();

    console.log("Databases");
    databaseslist.databases.forEach(db => console.log(` - ${db.name}`))
}