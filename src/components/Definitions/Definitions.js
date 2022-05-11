import { Box } from '@mui/material';
import React from 'react';


export default function Definitions({meanings}) {
    console.log(meanings);
  return (
    <div>
            {meanings.map((meaning)=>
meaning.meanings.map((each)=>
    each.definitions.map((def)=>
 (<p>{def.definition}</p>
)
    )
)
)}
    </div>
  )
}
