import { useState } from "react";
import EntityName from "./EntityName";
import EntityKeySelect from "./EntityKeySelect";


function Entity() {
    const [entityName, setEntityName] = useState<string | null>('');

    const handleEntityNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEntityName(event.target.value);
    };

    return (
        <div id='entity-container'>
            <div id='entity-name-container'>
                <EntityName entityId={1} entityName={entityName} handleEntityNameChange={handleEntityNameChange}/>
            </div>
            <div id='entity-key-container'>
                <EntityKeySelect/>
            </div>
        </div>
    );
}

export default Entity;