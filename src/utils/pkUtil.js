function outputUpdate(id, oldData, newData) {
    const addToUpdate = false
    const updateQuery = "UPDATE pk SET ";
    const whereQuery = "WHERE pk_id =  " + id +";\n";
    for (const key in oldData) {
        if (Object.hasOwnProperty.call(oldData, key) && Object.hasOwnProperty.call(newData, key)) {
            const oldValue = oldData[key];
            const newValue = newData[key];

            if (oldValue != newValue) {
                addToUpdate = true;
                updateQuery += key + " = " + newValue + ",";
            }
        }
    }

    if (addToUpdate) {
        updateQuery = updateQuery.slice(0, -1) + " ";
        updateQuery += whereQuery;
        return updateQuery;
    }
    return "";
}

function outputInsert(id, newData) {
    return `INSERT INTO pk (pk_debut, pk_fin, pk_autoroute, pk_voie, pk_sens, pk_type, pk_debut_zone, pk_fin_zone) VALUES (${newData.pkDebut}, ${newData.pkFin}, ${newData.pkAutoroute}, ${newData.pkVoie}, ${newData.pkSens}, ${newData.pkType}, ${newData.pk_debutZone}, ${newData.pkFinZone});\n`
}

function outputFullQuery(updates, inserts) {
    const fullQuery = "";

    for (const update of updates) {
        fullQuery += outputUpdate(update.id, update.oldData, update.newData);    
    }
    for (const insert of inserts) {
        fullQuery += outputInsert(insert);    
    }
}
module.exports = {
    outputUpdate,
    outputInsert,
    outputFullQuery
}