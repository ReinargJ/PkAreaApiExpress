function outputUpdateCompare(id, oldData, newData) {
    const addToUpdate = false
    const updateQuery = "UPDATE pk SET ";
    const whereQuery = "WHERE pk_id =  " + id + ";\n";
    for (const key in oldData) {
        if (Object.hasOwnProperty.call(oldData, key) && Object.hasOwnProperty.call(newData, key)) {
            const oldValue = oldData[key];
            const newValue = newData[key];

            if (oldValue != newValue) {
                addToUpdate = true;
                updateQuery += key + " = '" + newValue + "',";
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

function outputUpdate(data) {
    console.log(data);
    let addToUpdate = false
    let updateQuery = "UPDATE pk SET ";
    const whereQuery = "WHERE pk_id =  " + data.pk_id + ";\n";
    for (const key in data) {
        if (Object.hasOwnProperty.call(data, key) && key != "pk_id") {
            addToUpdate = true;
            updateQuery += key + " = '" + data[key] + "',";
        }
    }

    if (addToUpdate) {
        updateQuery = updateQuery.slice(0, -1) + " ";
        updateQuery += whereQuery;
        return updateQuery;
    }
    return "";
}

function outputInsert(newData) {
    return `INSERT INTO pk (pk_debut, pk_fin, pk_autoroute, pk_voie, pk_sens, pk_type, pk_debut_zone, pk_fin_zone) VALUES ('${newData.pk_debut}', '${newData.pk_fin}', '${newData.pk_autoroute}', '${newData.pk_voie}', '${newData.pk_sens}', '${newData.pk_type}', '${newData.pk_debut_zone}', '${newData.pk_fin_zone}');\n`
}

function outputFullQuery(updates = [], inserts = []) {
    let fullQuery = "";

    for (const update of updates) {
        fullQuery += outputUpdate(update);
    }
    for (const insert of inserts) {
        fullQuery += outputInsert(insert);
    }
    return fullQuery;
}
module.exports = {
    outputUpdate,
    outputInsert,
    outputFullQuery
}